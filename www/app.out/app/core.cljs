(ns app.core
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require [alandipert.storage-atom :as s-atom :refer [local-storage]]
            [rum.core :as rum]
            [cljs.core.async :as async :refer
             [chan timeout >! <! pipeline]]
            [hoodie.account :refer [create-account-store sign-in sign-out sign-up]]
            [app.collections :as coll :refer
             [type-field validate type-keys key-name
              atom-stores photo-url]]
            [markdown.core :refer [md->html]]                        
            [clojure.string :as str]
            [app.i18n :refer [t]]
            [app.states :refer [show-sidebar?]]
            [app.pages :as pages]
            [app.routes :refer
             [routing-state current-url? page-url module-url 
              routing-handler content-fading-in? go-to]]
            [app.media-queries
             :refer [media-result titles title->size compare-size]]
            [javelin.core :refer [cell] :refer-macros [defc defc=]]
            [hoodie.store :as hstore :refer [add! remove! remove-all! publish! unpublish!]]))

(defonce app (js/Hoodie. "http://192.168.1.21:3000"))

(defonce market-value
  (local-storage
   (cell {})
   :market-value))

(reset! s-atom/storage-delay 1000)

(defonce account-store
  (create-account-store app (atom {})))

(.. app -account (authenticate)
    (done #(when-let [username (.. account-store -app -account -username)]
             (swap! (.-atom-store account-store)
                    assoc :username %)))
    (fail #(do (.log js/console "mehhh")
               (sign-out account-store))))

(defc market {})

(defc portfolio {})

(defc= portfolio-set (set (map :symbol (vals portfolio))))

(defc= market-set (set (map :symbol (vals market))))

(defc unsorted-events {})
(defc unsorted-news {})

(def db-store
  (hstore/create-global-store
   app
   {"market" market
    "event" unsorted-events
    "news"  unsorted-news
    "ads" (atom)}))

(def user-store
  (hstore/create-user-store
   app {"portfolio" portfolio}))

(js/setInterval #(hstore/connect db-store) 10000)

(defn no-error? [papa-results]
  (zero? (.. papa-results -errors -length)))

(defn papa->clj [data symbols keywords]
  (->> symbols
       (map-indexed
        (fn [n sym]
          [sym (let [row (aget data n)]
                 (->> keywords
                      (map-indexed
                       (fn [i k] [k (aget row i)]))
                      (into {})))]))
       (into {})))

(defn update-stock [symbols an-atom]
  (let [url
        (str "https://download.finance.yahoo.com/d/quotes.csv?f=snl1d1c&s="
             (str/join "+" symbols))]
    (->> #js {:download true,
              :complete 
              (fn [results]
                (when (no-error? results)
                  (->> (papa->clj (.-data results) symbols [:symbol :title :value :date :changes])
                       (reset! an-atom))))}
         (.parse js/Papa url))))

(go-loop []
  ;; todo: check internet
  (when-let [coll @market-set]
    (update-stock coll market-value))
  (<! (timeout 10000))
  (recur))

(defn sort-by-time
  [km-pairs]
  (sort-by (fn [[k m]]
             ((juxt :hour :minute) m))
           km-pairs))

(defn group-by-day
  [km-pairs]
  (group-by (fn [[k m]] ((juxt :year :month :day) m))
            km-pairs))

(defn group-and-sort [coll]
  (->> (for [[date km-pairs] (group-by-day coll)]
         [date (sort-by-time km-pairs)])
       (into (sorted-map))))

(defc= sorted-news (group-and-sort unsorted-news))
(defc= sorted-events (group-and-sort unsorted-events))

(rum/defc top-title < rum/reactive
  []
  [:#top-title "The title"])

(rum/defc top-actions < rum/reactive
  []
  [:#top-actions
   [:i.icon-add]])

(rum/defc top-bar < rum/reactive
  []
  [:#top-bar
   [:#top-logo
    [:i.icon-menu {:on-click #(swap! show-sidebar? not)}]]
   (top-title)
   (top-actions)])

(comment
  (swap! show-sidebar? not)
  )
(rum/defc sidebar < rum/reactive
  []
  [:#sidebar
   (if (:username (rum/react (.-atom-store account-store)))
     [:a {:href "#" :key "sign-out"
          :on-click #(do (.preventDefault %)
                         (sign-out account-store))}
      [:i.icon-sign-out] "Logout"]
     (list
      [:a {:href "#/sign-up"
           :key "sign-up"}
       [:i.icon-profile] "Sign up"]
      [:a {:href "#/login"
           :key "sign-in"}
       [:i.icon-sign-in] "Login"]))
   [:a {:href "#/market"
        :key "market"}
    [:i.icon-stocks] "Market"]
   #_[:a {:href "#/recent"}
      [:i.icon-clock] "Recently viewed"]
   [:a {:href "#/news"
        :key "news"}
    [:i.icon-news] "News"]
   [:a {:href "#/events"
        :key "events"}
    [:i.icon-time] "Events"]
   [:a {:href "#/portfolio"
        :key "portfolio"}
    [:i.icon-portfolio] "Portfolio"]])

(rum/defc main-nav < rum/reactive
  []
  (let [{route-name :domkm.silk/name}
        (rum/react routing-state)]
    [:#main-nav
     (for [[item icon] [["market" "stocks"]
                        ["news" "news"]
                        ["calendar" "time"]
                        ["portfolio" "portfolio"]]]
       [:a {:class (when (= (namespace route-name) item) "active")
            :key item
            :href (str "#/" item)}
        [:i {:class (str "icon-" icon)}]])]))

(rum/defc login-box < rum/reactive
  [user-input route-name]
  (if-not (:username (rum/react (.-atom-store account-store)))
    [:#login-box
     [:input
      {:type "text" :placeholder "Username" :key "username"
       :on-change
       #(swap! user-input assoc :username
               (.. % -target -value))
       :value (:username (rum/react user-input) "")}]
     [:input
      {:type "password" :placeholder "Password"
       :key "password"
       :on-change
       #(swap! user-input assoc :password
               (.. % -target -value))
       :value (:password (rum/react user-input) "")}]
     (let [{:keys [username password]} (rum/react user-input)]
       [:button
        {:key "button"
         :class (when (not-every? not-empty [username password])
                  "disable")
         :on-click
         (fn []
           (.. (if (= route-name :login)
                 (sign-in account-store username password)
                 (sign-up account-store username password))
               (done
                #(js/setTimeout
                  (fn [] (go-to "#/market"))
                  500))
               (fail
                (fn [error]
                  (.log js/console error)
                  (swap! user-input assoc :error error)))))}
        (if (= route-name :login)
          "Sign in"
          "Sign up")])
     (let [{:keys [error]} (rum/react user-input)]
       (when error [:p "Login failed: " (.-message error)]))]
    [:#login-box "Logging in as "
     (:username (rum/react (.-atom-store account-store)))]))

(def current-ads (atom 0))

(defn rotate-ads []
  (go-loop [all-ads @(atom-stores "ads")]
    (let [next-number (inc @current-ads)]
      (reset! current-ads
              (if (> next-number (dec (count all-ads)))
                0
                next-number)))
    (<! (timeout (* 10 1000)))
    (recur @(atom-stores "ads"))))

(rotate-ads)

(rum/defc bottom-ads < rum/reactive
  []
  [:#bottom-ads
   (let [[id {:keys [photo link]}]
         (nth (seq (rum/react (atom-stores "ads")))
              (rum/react current-ads))]
     (when id
       [:a {:href link :key id}
        [:img {:src (photo-url photo :small)}]]))])

(defn format-day [day]
  (str/join "/" (reverse day)))

(rum/defc news-list-by-day
  [[day coll]]
  [:.news-list-by-day
   [:div {:key 0} (format-day day)]
   (for [[id {:keys [title photo]}] coll]
     [:a.news-list-item
      {:key id :href (str "#/news/" id)}
      [:img {:src (photo-url photo :small)}]
      [:p 
       title]])])

(rum/defc news-list < rum/reactive
  []
  [:#news-list   
   (map-indexed #(rum/with-key (news-list-by-day %2) %1)
                (rum/react sorted-news))])

(rum/defc event-list-by-day
  [[day coll]]
  [:.event-list-by-day
   [:div {:key 0} (format-day day)]
   (for [[id {:keys [title place]}] coll]
     [:.event-list-item {:key id}
      [:p.title title]
      [:p.place place]])])

(rum/defc event-list < rum/reactive
  []
  [:#news-list   
   (map-indexed #(rum/with-key (event-list-by-day %2) %1)
                (rum/react sorted-events))])

(defn changes->class [s]
  (if (= \+ (first (seq s)))
    "positive"
    "negative"))

(defn format-changes [s]
  (let [[x y] (str/split s " - ")]
    (str x " (" y ")")))

(defn format-date [s]
  (let [[m d y] (str/split s "/")]
    (str d "/" m "/" y)))

(def market-selected (atom))

(defn remove-from-portfolio [target]
  (doseq [[id {sym :symbol}] @portfolio
          :when (= target sym)]
    (swap! portfolio dissoc id)))

(rum/defc market-item-selected < rum/reactive
  [sym {:keys [title value]}]
  [:.market-item
   [:div
    [:span.title sym]
    [:span.value value]]
   [:div
    (if ((rum/react portfolio-set) sym)
      [:button
       {:key 0
        :on-click
        #(do (remove-from-portfolio sym)
             (reset! market-selected nil))}
       "Remove from portfolio"]
      [:button
       {:key 0
        :on-click
        #(do (add! user-store "portfolio" {:symbol sym})
             (reset! market-selected nil))}
       "Add to portfolio"])
    [:button
     {:key 1 :on-click #(reset! market-selected nil)}
     "Cancel"]]])

(rum/defc market-item-unselected < rum/reactive
  [sym {:keys [title value date changes]}]
  ;; :href (str "#/market/" sym)
  [:.market-item
   {:key sym :on-click #(reset! market-selected sym)}
   [:div
    [:span.title sym]
    [:span.value value]]
   [:div
    [:span.date
     [:i.icon-clock]
     (format-date date)]
    [:span.changes {:class (changes->class changes)}
     (format-changes changes)]]])

(rum/defc market-item < rum/reactive
  [[sym item]]
  (if (= (rum/react market-selected) sym)
    (market-item-selected sym item)
    (market-item-unselected sym item)))

(rum/defc market-list < rum/reactive
  []
  [:#market-list
   (map-indexed #(rum/with-key (market-item %2) %1)
                (rum/react market-value))])

(rum/defc portfolio-list < rum/reactive
  []
  [:#market-list
   (let [m-list (rum/react market-value)
         p-set (rum/react portfolio-set)
         portfolio-market
         (filter (fn [[id item]]
                   (p-set (:symbol item)))
                 m-list)]
     (map-indexed #(rum/with-key (market-item %2) %1)
                  portfolio-market))])

(rum/defc news-item < rum/reactive
  [id]
  (when-let [{:keys [content title source photo]}
             (get (rum/react unsorted-news) id)]
    [:.news-item {:key id}
     [:h2 title]
     [:img {:src (photo-url photo :medium)}]
     [:div
      {:dangerouslySetInnerHTML
       {:__html (md->html content)}}]]))

(rum/defc main-content < rum/reactive
  []
  [:#main-content
   (let [{route-name :domkm.silk/name
          :keys [title id]}
         (rum/react routing-state)]
     #_[:#debug (pr-str market)
      (pr-str market-value)
      (pr-str market-set)]     
     (case route-name
       (:login :sign-up)
       (login-box (atom {}) route-name)

       :market/item
       [:div "hello market"]
       
       (:home :market/index)
       (market-list)

       
       :news/index
       (news-list)

       :calendar/index
       (event-list)
        
       :news/item
       (news-item id)

       ;; :home
       ;; (home)
       
       :portfolio/index
       (portfolio-list)
       
       ;; Else
       [:div "404 Not found"]))
   ])

(rum/defc attention < rum/reactive
  []
  (when false [:#fuzzy-layer]))

(rum/defc body < rum/reactive
  []
  [:#wrapper
   (top-bar)
   [:#all-content
    (attention)
    (sidebar)
    [:#main {:class (when (rum/react show-sidebar?)
                      "show")}
     (main-nav)
     (main-content)
     (bottom-ads)]]])

(defn main []
  (rum/mount (body) (.getElementById js/document "app")))

(comment
  2
  (def ooo (atom))
  (update-stock )
  (no-error? )
  (update-stock ["^IXIC" "GE"] ooo)
  (papa->clj (.-data @ooo) ["^IXIC" "GE"] [:symbol :title :value :date :changes])
  (reset! ooo 3)
  @ooo
  

  (into (sorted-map) [[:a 1] [:c 3] [:d 4] [:b 2]])
  
  (js/alert "hi")
  (defn $state []
    (.-state (aget (. js/$r -state) ":rum/state")))
  ($state)
  (.. (hoodie/connect db-store) (then #(.log js/console "connected")))
  )
