(ns app.collections)

(defonce type-name
  {"event" "Event"
   "news" "News"
   "market" "Market"
   "ads" "Ads"})

(defonce key-names
  {:event/title "Title"
   :event/date "Date"})

(defn key-name [data-type k]
  (key-names (keyword data-type (name k))
             (name k)))

(defonce type-keys
  {"event"  [:title :place :year :month :day :hour :minute]
   "news"   [:title :source :content :date :photo]
   "market" [:symbol :order]
   "ads"    [:photo :link]
   "photo"  [:url :note]})

(defonce atom-stores
  {"market" (atom)
   "event"  (atom)
   "ads"     (atom)
   "news"    (atom)
   "photo"   (atom)})

(defn type-field [data-type k & _]
  (when k
    (keyword data-type (name k))))

(defmulti validate type-field)

(defn not-empty? [v]
  (or (number? v)
      (and (string? v)
           (not= "" v))))
(defmethod validate :default
  [data-type k v]
  (not-empty? v))

(defn photo-url [base-url size]
  (str (case size
         :small "/200x150/"
         ;; default
         "/400x300/")
       base-url))

