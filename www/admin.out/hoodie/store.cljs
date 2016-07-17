(ns hoodie.store
  (:refer-clojure :exclude [find])
  (:require [app.transit :refer [transit untransit transit-all]]))

(defprotocol HoodieStoreNative
  "Low level methods to interact with native HoodieStore object."
  (data-types [this]
    "Returns a set of data types of atom stores")
  (atom-store [this data-type]
    "Returns atom store for a given data-type")
  (add-to-atom [this data-type new-obj]
    "Event listener to receive new object (in transit format) and add it to HoodieStore.")
  (remove-from-atom [this data-type dead-obj]
    "Event listener to track newly deleted object and remove it from HoodieStore.")
  ;; must be called or global won't work
  ;; https://github.com/hoodiehq/hoodie-plugin-global-share/issues/20
  (connect [this]
    "Connect a HoodieStore instance to server for updates")
  (find [this data-type id cb]
    "Async style find an item with a given id. Will convert back to
    Clojure datastructure before applying callback.")
  (find-all [this data-type]
    "Find all items in a store. Returns a promise.")
  (on-find-all [this data-type]
    "Callback for find-all. Used in init.")
  (init [this]
    "This function get called when a HoodieStore is created to
    triggers event listeners that synchronize HoodieStore atom with
    native Hoodie store object."))

(defprotocol HoodieStoreData
  "Set of methods to interact with a HoodieStore using Clojure(script)
  datastructure."
  (add! [this data-type item]
    "Adds an item to Hoodie store. Item's type should be Clojure datastructure especially a hash map.")
  (remove! [this data-type id]
    "Removes an item with given id from Hoodie store.")
  (remove-all! [this data-type]
    "Removes items living in Hoodie store.")
  (update! [this data-type id fn|data]
    "Updates an item with given id in Hoodie store. Accept either a
    pure updater function or a Clojure data structure.")
  
  ;; Requires hoodie-plugin-global-share installed.
  (publish! [this data-type id]
    "Publish an item with given id from HoodieStore to GlobalStore of
    the given type.")
  (unpublish! [this data-type id]
    "Unpublish an item with given id in HoodieStore from GlobalStore
    of the given type.")
  (publish-all! [this data-type]
    "Publish all items from HoodieStore to GlobalStore of the given
    type.")
  (unpublish-all! [this data-type]
    "Unpublish all items in HoodieStore from GlobalStore of the given
    type."))

;; default implementation
(extend-type object
  HoodieStoreNative
  (data-types [this]
    (set (keys (.-atom-stores this))))
  (atom-store [this data-type]
    (get (.-atom-stores this) data-type))
  (add-to-atom [this data-type new-obj]
    (->> (untransit new-obj)        
         (swap! (atom-store this data-type)
                assoc (.-id new-obj))))
  (remove-from-atom [this data-type dead-obj]
    (->> dead-obj
         (swap! (atom-store this data-type)
                dissoc (.-id dead-obj))))
  (find [this data-type id cb]
    (.. (.-native-store this)
        (find data-type id)
        (done (fn [obj] (cb (untransit obj))))))
  (find-all [this data-type]
    (. (.-native-store this) (findAll data-type)))  
  (on-find-all [this data-type]
    (fn [all]
      ;; copy data to store
      (->> (transit-all all)            
           (reset! (atom-store this data-type)))
      ;; registering event listeners
      (.on (.-native-store this)
           (str data-type ":change")
           (fn [change-type data]
             (if (= "remove" change-type)
               (remove-from-atom this data-type data)
               ;; "add" and "update"
               (add-to-atom this data-type data))))
      (connect this)))
  (init [this]
    (doseq [data-type (data-types this)]
      (. (find-all this data-type)
         (done (on-find-all this data-type)))))

  HoodieStoreData  
  (add! [this data-type data]
    (.. (.-native-store this)
        (add data-type (transit data))))  
  (remove! [this data-type id]
    (.. (.-native-store this)
        (remove data-type id)))  
  (remove-all! [this data-type]
    (.. (.-native-store this)
        (removeAll data-type)))
  (update! [this data-type id fn|data]
    (find this data-type id
          (fn cb [old-data]
            (let [new-data (if (fn? fn|data)
                             (fn|data old-data)
                             (merge old-data fn|data))]
              (.. (.-native-store this)
                  (update data-type id
                          (transit new-data)))))))  
  (publish! [this data-type id]
    (.. (.-native-store this)
        (find data-type id)
        (publish)))
  (unpublish! [this data-type id]
    (.. (.-native-store this)
        (find data-type id)
        (unpublish)))
  (publish-all! [this data-type]
    (.. (.-native-store this)
        (findAll data-type)
        (publish)))
  (unpublish-all! [this data-type]
    (.. (.-native-store this)
        (findAll data-type)
        (unpublish))))

(deftype UserStore [app native-store atom-stores])
(deftype GlobalStore [app native-store atom-stores])
(deftype DbStore [app native-store atom-stores])

(extend-type UserStore
  HoodieStoreNative
  (connect [this] nil))

(extend-type DbStore
  HoodieStoreNative
  (connect [this]
    (let [native-store (.-native-store this)
          reconnect #(do (.log js/console "reconnecting before too late")
                         (.. native-store (disconnect)
                             (done (fn [_]
                                     (.log js/console "yolo")
                                     (.. native-store (connect))))
                             (fail (fn [e]
                                     (.log js/console "fuck")))))]
      (.. native-store (connect)
          (done #(do (.log js/console "ds connected")
                     (js/setInterval reconnect 10000)))
          (fail #(do (.log js/console "not connected")
                     (js/setInterval reconnect 10000)
                     ))))))

(extend-type GlobalStore
  HoodieStoreNative
  (connect [this]
    (let [native-store (.-native-store this)]
      (.. native-store (disconnect)
          (done (fn [_]
                  (.log js/console "yolo")
                  (.. native-store (connect))))
          (fail (fn [e]
                  (.log js/console "fuck")))))))

(defn create-user-store [app map-of-atoms]
  (let [user-store
        (UserStore. app (.-store app)
                    map-of-atoms)]
    (init user-store)
    user-store))

(defn create-global-store [app map-of-atoms]
  (let [global-store
        (GlobalStore. app (.-global app)
                      map-of-atoms)]
    (init global-store)
    global-store))

(defn create-db-store [app db-name map-of-atoms]
  (let [db-store 
        (DbStore. app (.open app db-name)
                  map-of-atoms)]
    (init db-store)    
    db-store))
