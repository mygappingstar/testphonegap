(ns app.media-queries
  #?(:cljs (:require [cljsjs.enquire])))

#?(:cljs
   (def media-result (atom {})))

(def titles
  [:zero :tiny :small :medium :large :xlarge])

(def title->rank
  (zipmap titles (range)))

(defn size->query
  [[min-val max-val]]
  (cond
    (zero? min-val)
    (str "(max-width: " max-val "px)")

    (zero? max-val)
    (str "(min-width: " min-val "px)")

    :else
    (str "(min-width: " min-val "px) and (max-width: " max-val "px)")))

;; break-points
(def tiny   320)
(def small  480)
(def medium 640)
(def large  1024)
(def xlarge 1200)

(def title->size
  (->> [0 tiny small medium large xlarge 0]
    (partition 2 1)
    (map size->query)
    (zipmap titles)))

(defn compare-size
  [comparator-fn current-media-result size]
  (comparator-fn (title->rank (:size current-media-result))
                 (title->rank size)))

(comment
  (= (compare-size <= {:size :medium} :medium)
     true)
  (= (compare-size >= {:size :large} :medium)
     true))

#?(:cljs
   (doall
    (-> (fn [title]
          (let [size (title->size title)]
            (.register js/enquire size
                       ;; handler
                       #(swap! media-result assoc :size title)
                       ;; `shouldDegrade` parameter
                       ;; http://wicky.nillia.ms/enquire.js/examples/should-degrade/
                       ;; The handler for `:large`
                       ;; is applied to incapable browsers
                       (= :large size))))
      (map titles))))
