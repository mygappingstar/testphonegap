(ns app.admin
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs-http.client :as http]
            [rum.core :as rum]
            [cljs.core.async :as async :refer
             [chan timeout >! <! pipeline]]
            [markdown.core :refer [md->html]]
            [app.collections :as coll :refer
             [type-field validate type-keys key-name
              atom-stores photo-url]]
            [clojure.string :as str]
            [goog.events :as gev]
            [app.i18n :refer [t]]
            [app.states :refer []]
            [app.pages :as pages]
            [cljs.spec :as s]
            [alandipert.storage-atom :refer [local-storage]]
            [app.routes :refer [routing-state current-url? page-url module-url
                                routing-handler content-fading-in?]]
            [app.media-queries
             :refer [media-result titles title->size compare-size]]
            [javelin.core :refer-macros [defc defc=]]
            [hoodie.account :refer [create-account-store sign-in sign-out sign-up]]
            [hoodie.store :as hstore :refer [add! update! remove! remove-all! publish-all!]]))

(defonce app (js/Hoodie.))

(defonce account-store
  (create-account-store app (atom {})))

(.. app -account (authenticate)
    (done #(when-let [username (.. account-store -app -account -username)]
             (swap! (.-atom-store account-store)
                    assoc :username %)))
    (fail #(do (.log js/console "mehhh")
               (sign-out account-store))))

(defonce db-store
  (hstore/create-user-store app atom-stores))

(defonce current-mode (atom "news"))
(defonce editing-id (atom {}))
(defonce editing-field (atom nil))

(rum/defc main-nav-item <
  {:key-fn identity}
  rum/reactive
  [item]
  [:li {:key item
        :class (when (= item (rum/react current-mode))
                 "is-active")
        :on-click #(reset! current-mode item)}
   [:a {:href "#"} item]])

(rum/defc aside < rum/reactive
  []
  [:aside.menu
   [:p.menu-label "General"]
   [:ul.menu-list
    [:li 
     [:a.is-active {:href "#"} "Dashboard"]]]])

(defmulti field-editor type-field)

(comment
  (rum/defc event-title
    [data-type k id init-item draft]
    [:td [:div "Say hi"]])

  (defmethod field-editor :event/title
    [& args]
    (apply event-title args)))

(rum/defc default-field-editor < rum/reactive
  [data-type k id init-item draft]
  [:td
   [:input.input
    {:type "text"
     :class
     (if (validate data-type k
                   (get (rum/react draft) k))
       "is-success"
       "is-danger")
     :placeholder (key-name data-type k)
     :on-change
     #(swap! draft assoc k (.. % -target -value ))
     :value
     (get (rum/react draft) k "")}]])

(rum/defc field-editor-modal < rum/reactive
  [data-type k id init-item draft component]
  (let [current (rum/react draft)
        invalid-field?
        (not (validate data-type k (get current k)))
        invalid?
        (not-every? #(validate data-type % (get current %))
                    (type-keys data-type))]
    [:td
     [:.modal.is-active
      [:.modal-background {:key 0}]
      [:.modal-card {:key 1}
       [:header.modal-card-head
        [:p.modal-card-title "Editing"]
        ;; close button, not a Delete killer :)
        [:button.delete
         {:on-click #(reset! editing-field nil)}]]
       [:section.modal-card-body
        (component data-type k id init-item draft)]
       [:footer.modal-card-foot
        ;; an existing item, not a brandnew one
        (if id
          [:a.button.is-success
           {:key 0
            :class (when invalid? "is-disabled")
            :on-click
            (when-not invalid?
              #(do (update! db-store data-type id current)
                   (publish-all! db-store data-type)
                   (reset! editing-field nil)))}
           "Save"]
          ;; a brandnew item?
          [:a.button
           {:key 0
            :class (when invalid-field? "is-disabled")
            :on-click
            ;; no publish here b/c no id yet
            #(reset! editing-field nil)}
           "Done"])
        [:a.button.is-light
         {:key 1
          :on-click #(do (swap! editing-id dissoc data-type nil)
                         (reset! draft init-item)
                         (reset! editing-field nil))}
         "Cancel"]]]]]))

(rum/defc range-field-editor < rum/reactive
  [data-type k id init-item draft]
  [:input.input
   {:type "range"
    :min 0 :max 100 :step 1
    :class
    (if (validate data-type k
                  (get (rum/react draft) k))
      "is-success"
      "is-danger")
    :placeholder (key-name data-type k)
    :on-change
    #(swap! draft assoc k (.. % -target -value ))
    :value
    (get (rum/react draft) k "")}])

(defmethod field-editor :event/month
  [data-type k id init-item draft]
  (field-editor-modal
   data-type k id init-item draft
   range-field-editor))

(def recent-files
  (atom #_{"a.png" {:size 10000 :loaded 1000 :state :uploading}
         "b.jpg" {:size 10000 :state :uploaded}
         "c.png" {:size 10000 :state :registered}
         "d.png" {:size 10000 :loaded 1000 :state :failed}}))

(declare uploader)

(rum/defc photo-field-editor < rum/reactive
  [data-type k id init-item draft]
  [:div
   (uploader)
   (if-let [current-url (get (rum/react draft) k)]     
     [:img {:src (photo-url (get (rum/react draft) k)
                            :small)}]
     [:p "No photo selected"])
   [:p "Click on a photo to select"]   
   (for [[filename] (rum/react recent-files)]
     [:img {:key filename
            :class (when-not (= filename (get (rum/react draft) k))
                     "is-fool")
            :on-click #(swap! draft assoc k filename)
            :src (photo-url filename
                            :small)}])])

(rum/defc markdown-field-editor < rum/reactive
  [data-type k id init-item draft]
  [:div
   [:p "Preview"]
   [:div
    {:dangerouslySetInnerHTML
     {:__html (md->html (get (rum/react draft) k ""))}}]
   [:input.input
    {:type "text"
     :class
     (if (validate data-type k
                   (get (rum/react draft) k))
       "is-success"
       "is-danger")
     :placeholder (key-name data-type k)
     :on-change
     #(swap! draft assoc k (.. % -target -value ))
     :value
     (get (rum/react draft) k "")}]])

(defmethod field-editor :news/content
  [data-type k id init-item draft]
  (field-editor-modal
   data-type k id init-item draft
   markdown-field-editor))

(defmethod field-editor :news/photo
  [data-type k id init-item draft]
  (field-editor-modal
   data-type k id init-item draft
   photo-field-editor))

(defmethod field-editor :ads/photo
  [data-type k id init-item draft]
  (field-editor-modal
   data-type k id init-item draft
   photo-field-editor))

(defmethod field-editor :default
  [& args]
  (apply default-field-editor args))

(comment
  (validate "event" :title 2)
  )

(defmulti field-viewer type-field)

(rum/defc field-viewer-with-click < rum/reactive
  [data-type k id init-item draft component]
  [:td
   {:on-click
    #(do (swap! editing-id assoc data-type id)
         (reset! editing-field k))}
   (component data-type k id init-item draft)])

(rum/defc field-viewer-without-click < rum/reactive
  [data-type k id init-item draft component]
  [:td
   (when-not id
     {:on-click
      #(do (swap! editing-id assoc data-type id)
           (reset! editing-field k))})
   (component data-type k id init-item draft)])

(rum/defc silly-field-viewer < rum/reactive
  [data-type k id init-item draft]
  [:p (get (rum/react draft) k "-")])

(rum/defc photo-viewer < rum/reactive
  [data-type k id init-item draft]
  (let [base-url (get (rum/react draft) k)]
    (when-not (empty? base-url)
      [:img {:src (photo-url base-url
                             :small)}])))

(defmethod field-viewer :news/photo
  [data-type k id init-item draft]
  (field-viewer-with-click
   data-type k id init-item draft
   photo-viewer))

(defmethod field-viewer :ads/photo
  [data-type k id init-item draft]
  (field-viewer-with-click
   data-type k id init-item draft
   photo-viewer))

(defmethod field-viewer :photo/url
  [data-type k id init-item draft]
  (field-viewer-without-click
   data-type k id init-item draft
   photo-viewer))

(defmethod field-viewer :default
  [data-type k id init-item draft]
  (field-viewer-with-click
   data-type k id init-item draft
   silly-field-viewer))


(rum/defc else-main < rum/reactive
  []
  [:.columns
   [:.column.is-3 {:key 0}
    (aside)]
   [:.column {:key 1}
    [:.heading
     [:h1.title "hi"]
     [:h2.subtitle "yo"]]]])

(rum/defcs item-row <
  {:key-fn (fn [_ id _] id)
   :init (fn [_state_ props]
           (let [init-item (-> _state_ :rum/args (nth 2))]
             ;; clone item to ::draft
             (assoc _state_ ::draft (atom init-item))))}
  rum/reactive
  [_state_ data-type id init-item]
  (let [draft (::draft _state_)]
    [:tr.is-info
     (let [cell-component
           (fn [n k]
             (let [being-edited?
                   (and (= id (get (rum/react editing-id) data-type))
                        (= k (rum/react editing-field)))]
               (-> (if being-edited?
                     (field-editor data-type k id init-item draft)
                     (field-viewer data-type k id init-item draft))
                   (rum/with-key n))))]
       (map-indexed cell-component (type-keys data-type)))
     
     [:td {:key "actions"}
      (let [current (rum/react draft)
            invalid?
            (not-every? #(validate data-type % (get current %))
                        (type-keys data-type))]
        (list
         (when-not id
           [:a.button.is-success.is-outlined
            {:key 0
             :class (when invalid? "is-disabled")
             :on-click
             (when-not invalid?
               (fn []
                 (. (add! db-store data-type current)
                    (then #(publish-all! db-store data-type)))                    
                 (reset! draft {})))}
            [:span.icon {:key 0}
             [:i.fa.fa-save]]
            [:span {:key 1}
             "Add"]])
         (when id
           (list
            [:a.button.is-danger.is-outlined
             {:key 1
              :on-click
              #(.. (remove! db-store data-type id)
                   (done (fn [] (.log js/console "d")))
                   (fail (fn [_] (.log js/console _))))}
             [:span.icon {:key 0}
              [:i.fa.fa-remove]]
             [:span {:key 1}
              "Delete"]]
            (when (not= current init-item)
              (list
               [:a.button.is-info.is-outlined
                {:key 2
                 :on-click #(do (reset! draft init-item)
                                (swap! editing-id assoc data-type nil))}
                [:span.icon {:key 0}
                 [:i.fa.fa-refresh]]
                [:span {:key 1}
                 "Reset"]]
               [:a.button.is-info.is-outlined
                {:key 3
                 :class (when invalid? "is-disabled")
                 :on-click
                 (when-not invalid?
                   (fn []
                     (. (update! db-store data-type id current)
                        (then #(publish-all! db-store data-type)))))}
                [:span.icon {:key 0}
                 [:i.fa.fa-save]]
                [:span {:key 1}
                 "Save" ]]))))))]]))

(rum/defc table-head-foot
  [head-or-foot data-type]
  [head-or-foot
   {;; todo: move to each table editing cell's on-mouseout
    :on-click #(do (swap! editing-id assoc data-type nil)
                   (reset! editing-field nil))}
   [:tr
    (map-indexed
     (fn [n k]
       [:th {:key n}
        (key-name data-type k)])
     (type-keys data-type))
    [:th {:key "actions"} "Actions"]]])

(rum/defc table-main < rum/reactive
  [data-type]
  [:table.table.is-striped.is-bordered
   (table-head-foot :thead data-type)
   
   (when (<= 10 (count (rum/react (atom-stores data-type))))
     (table-head-foot :tfoot data-type))
   [:tbody
    (for [[id item] (rum/react (atom-stores data-type))]
      (item-row data-type id item))
    ;; todo: default empty-item
    (if (= data-type "photo")
      (uploader)
      (item-row data-type nil {}))]])

(rum/defc login-box < rum/reactive
  [user-input]
  (if-not (:username (rum/react (.-atom-store account-store)))
    [:section.section
     [:input.input
      {:type "text" :placeholder "Username" :key "username"
       :on-change #(swap! user-input assoc :username
                          (.. % -target -value))
       :value (:username (rum/react user-input) "")}]
     [:input.input
      {:type "password" :placeholder "Password"
       :key "password"
       :on-change #(swap! user-input assoc :password
                          (.. % -target -value))
       :value (:password (rum/react user-input) "")}]
     (let [{:keys [username password]} (rum/react user-input)]
       [:button.button.is-info
        {:class (when (not-every? not-empty [username password])
                  "disable")
         :on-click #(sign-in account-store username password)}
        "Sign in"])]
    [:div "Logging in..."]))

(def uploading-ch (chan 3))

(def upload-progress-ch (chan))

(def register-file-ch (chan))

(defn target-filename [file]
  (let [timestamp (.now js/Date)
        filename  (.-name file)]
    (cond
      (some #(.endsWith filename %) [".jpg" ".JPG" ".jpeg" ".JPEG"])
      (str timestamp ".jpg")

      (some #(.endsWith filename %) [".png" ".PNG"])
      (str timestamp ".png"))))

(rum/defc recent-file
  [[filename file]]
  [:div
   [:h3 filename]
   (if (= :registered (:state file))
     [:img {:src (photo-url filename :small)}]
     [:progress.progress
      (cond 
        (= (:state file) :uploading)
        {:class "is-info"
         :value (:loaded file) :max (:size file)}

        (= :uploaded (:state file))
        {:class "is-success"
         :value (:size file) :max (:size file)}

        :default
        {:class "is-danger"          
         :value (:size file) :max (:size file)})])])

(rum/defc recently-uploaded < rum/reactive
  []
  )

(defn clear-recent []
  (doseq [[filename {:keys [state]}] @recent-files
          :when (#{:registered :failed} state)]
    (swap! recent-files dissoc filename)))

(rum/defc uploader < rum/reactive
  []
  [:div ;; should be a hero or panel...
   [:input
    {:type "file" :value "" :key 0
     :on-change
     #(do (.persist %)
          (let [file (aget (.. % -target -files) 0)]
            (when-let [filename (target-filename file)]
              (go (>! uploading-ch
                      {:file file :size (.-size file)
                       :filename filename})
                  (aset (. % -target) "value" nil)))))}]
   (map-indexed #(rum/with-key (recent-file %2) %1)
                (rum/react recent-files))
   [:button.button {:on-click clear-recent} "Clear recent photos"]])

(defn uploaded [m]
  (-> m
      (assoc :state :uploaded)
      (dissoc :file)
      (dissoc :loaded)))

(defn registered [m]
  (-> m
      (assoc :state :registered)))

(defn upload-failed [m]
  (-> m
      (assoc :state :failed)
      (dissoc :loaded)))

(defn upload-loop []
  (go-loop [{:keys [file filename] :as item}
            (<! uploading-ch)]    
    (swap! recent-files
           assoc filename (assoc item :state :uploading))
    (let [status (->> {:multipart-params       
                       [["upload" [file filename]]]
                       :progress
                       (let [c (chan)]
                         (pipeline 1 upload-progress-ch
                                   (map #(assoc % :filename filename))
                                   c)
                         c)}
                      (http/post "/upload/00135/")
                      <! :status)]
      (swap! recent-files
             update filename
             (if (= 200 status)
               uploaded
               upload-failed))
      (if (= 200 status)
        (>! register-file-ch filename)))    
    (recur (<! uploading-ch))))

(defn upload-progress-loop []
  (go-loop [{:keys [loaded filename] :as data}
            (<! upload-progress-ch)]        
    (swap! recent-files
           assoc-in [filename :loaded] loaded)    
    (recur (<! upload-progress-ch))))

(upload-loop)

(defn post-upload-loop []
  (go-loop [filename (<! register-file-ch)]
    (.. (add! db-store "photo" {:url filename})
        (done #(swap! recent-files
                      update filename
                      registered))
        (fail #(swap! recent-files
                      update filename
                      upload-failed)))
    (recur (<! register-file-ch))))
(upload-progress-loop)
(post-upload-loop)

(rum/defc body < rum/reactive
  []
  (if (:username (rum/react (.-atom-store account-store))) ;; logged in? show the table   
    [:div
     [:section.hero.is-info {:key 0}
      #_[:.hero-body {:key 0}]
      [:.hero-foot {:key 1}
       [:.container
        [:nav.tabs.is-boxed
         [:ul
          (map main-nav-item
               ["news" "event" "market" "ads" "photo"])]]]]]
     [:section.section {:key 1}
      (let [mode (rum/react current-mode)]
        [:.container
         #_
         [:div {:on-click #(hstore/remove-all! db-store mode)
                :style {:background "red"}} "Killer"]
         [:div (pr-str [(rum/react editing-field)])]
         (case mode
           :else
           (else-main)

           (table-main mode))])]

     [:footer.footer
      "hi"]]
    ;; not logged in? show the box
    (login-box (atom {}))))

(rum/defc bod < rum/reactive []
  [:div   
   
   "Recent files"
   (pr-str (rum/react recent-files))])

(defn main []
  (rum/mount (body) (.getElementById js/document "app")))
