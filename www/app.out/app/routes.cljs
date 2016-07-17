(ns app.routes
  (:require [domkm.silk :as silk]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [app.states :refer [show-sidebar?]])
  (:import goog.History))

(defn go-to [url]
  ;; (.pushState (js/history) nil nil url)
  (aset (.-location js/window) "href" url))

(def page-routes
  (silk/routes [[:home [[]]]                
                [:login [["login"]]]
                [:contact [["contact"]]]
                [:sign-up [["sign-up"]]]

                [:market/index [["market"]]]
                [:market/item [["market" :id]]]
                [:news/index [["news"]]]
                [:news/item [["news" :id]]]

                [:calendar/index [["calendar"]]]
                [:calendar/item [["calendar" :id]]]
                [:portfolio/index [["portfolio"]]]
                ;; portfolio items are actually :markets/item

                [:pages [["pages" :title]]]]))

(def all-routes
  (silk/routes [page-routes]))

(comment
  (silk/arrive all-routes "/users" :id)
  :home
  (silk/arrive all-routes "/pages/about" :domkm.silk/name)
  :pages
  (silk/arrive all-routes "/pages/about" :title)
  "about"
  (apply silk/depart all-routes [:pages {:title "about"}])
  "/pages/about"
  (apply silk/depart all-routes [:home/index])
  "/"
  (apply silk/depart all-routes [:boutique/index])
  "/")

(def routing-state (atom))

(def content-fading-in? (atom true))

(defn scroll-to-content! []
  (when-let [content (.getElementById js/document "content")]
    ;; (.scrollIntoView content)
    (reset! content-fading-in? false)
    (reset! content-fading-in? true)
    (.setTimeout js/window
                 #(reset! content-fading-in? false) 500)))

(defn routing-handler [event]
  (let [url             (.-token event)
        new-route-state (silk/arrive all-routes url)]
    (reset! routing-state new-route-state)
    (reset! show-sidebar? false)
    (scroll-to-content!)))

(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE routing-handler)
  (doto h (.setEnabled true)))

(defn item->url-pattern
  [item]
  (cond true
    [:pages {:title (name item)}]))

(defn module-url
  [item]
  (apply silk/depart all-routes [(-> item name keyword)]))

(defn page-url
  [item]
  (apply silk/depart all-routes (item->url-pattern item)))

(defn current-url?
  [{route-name :domkm.silk/name
    title :title
    :as route}
   item]
  (or (and (= "module" (namespace item))
           (or (= (name item) (namespace route-name))
               (and (nil? (namespace route-name))
                    (= (name item) (name route-name)))))

      (and (= :pages route-name)
           (= "pages" (namespace item))
           ;; page title equals item's name
           (= title (name item)))))

(comment
  (pr-str (namespace :address/address))
  (:domkm.silk/name @routing-state)
  (:title @routing-state)
  (->> [nil
        "hi"]
    (clojure.string/join " "))
  (module-url :pages/blog)
  )
