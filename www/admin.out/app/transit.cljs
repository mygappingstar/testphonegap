(ns app.transit
  (:require [cognitect.transit :as t]))

;; todo: key-table should be named metadata-table
;; b/c some other Hoodie plugins may use other custom keys...
;; we should be able to support those keys at any time
;; -> use multimethod for dynamic extendabiity
(def key-table {:id "id" :rev "_rev" :type "type"
                :public?    "$public"
                :created-at "createdAt"
                :updated-at "updatedAt"
                :created-by "createdBy"})

(defn compare-js-objects [& objs]
  (apply = (map js->clj objs)))

(comment
  (= false (compare-js-objects #js {:a 1} #js {:a 2}))
  (= true (compare-js-objects #js {:a 2} #js {:a 2})))

(def w (t/writer :json))
(def r (t/reader :json))

(defn untransit [obj]
  (with-meta (t/read r (.-transit obj))
    (-> (fn [acc kw k]
          (if-let [v (aget obj k)]
            (assoc acc kw v)
            acc))
        (reduce-kv {} key-table))))

(comment
  (=  (untransit #js {:transit "[\"^ \",\"~:foo\",1,\"~:bar\",\"two\"]"})
      {:foo 1, :bar "two"})
  (let [m (untransit #js {:transit "[\"^ \",\"~:foo\",1,\"~:bar\",\"two\"]", :id "foo"})]
    (and (= m {:foo 1, :bar "two"})
         (= (meta m) {:id "foo"})))
  )

(defn transit
  ([data-type data]
   (let [transited-data (transit data)]
     (aset transited-data "type" data-type)
     transited-data))
  ([data]
   (let [transited-data #js {:transit (t/write w data)}]
     (doseq [[kw k] key-table
             :let [v (get (meta data) kw)]]
       (when v
         (aset transited-data k v)))
     transited-data)))

(comment
  (= true  (compare-js-objects (transit {:foo 1 :bar "two"})
                               #js {:transit "[\"^ \",\"~:foo\",1,\"~:bar\",\"two\"]"}))
  (= true  (compare-js-objects (transit (with-meta {:foo 1 :bar "two"} {:id "foo"}))
                               #js {:transit "[\"^ \",\"~:foo\",1,\"~:bar\",\"two\"]",
                                    :id "foo"}))
  
  (= true  (compare-js-objects (transit "todo" {:foo 1 :bar "two"})
                               #js {:transit "[\"^ \",\"~:foo\",1,\"~:bar\",\"two\"]"
                                    :type "todo"}))
  (= true  (compare-js-objects (transit "todo" (with-meta {:foo 1 :bar "two"} {:id "foo"}))
                               #js {:transit "[\"^ \",\"~:foo\",1,\"~:bar\",\"two\"]",
                                    :id "foo" :type "todo"})) 
 )

(defn transit-all [all]
  (->> all
       (mapv untransit) 
       (reduce (fn [acc data] (assoc acc (-> data meta :id) data)) {})))
