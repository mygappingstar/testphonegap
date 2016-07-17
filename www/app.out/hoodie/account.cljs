(ns hoodie.account)

(defprotocol HoodieAccount
  (init [this])
  (sign-in [this username password])
  (sign-up [this username password])
  (sign-out [this]))

(deftype Account [app atom-store]
  HoodieAccount
  (init [this]
    (let [acc (.. this -app -account)]
      (when (. acc (hasValidSession))
        (swap! (.-atom-store this)
               assoc :username (. acc -username)))
      (doto acc
        (.on "signin"
             #(swap! (.-atom-store this)
                     assoc :username %))
        (.on "signup"       
             #(swap! (.-atom-store this)
                     assoc :username %))
        (.on "signout"
             #(swap! (.-atom-store this)
                     dissoc :username)))))
  (sign-in [this username password]
    (.. this -app -account
        (signIn username password)))
  (sign-up [this username password]
    (.. this -app -account (signUp username password)))
  (sign-out [this]
    (.. this -app -account
        (signOut))))

(defn create-account-store [app atom-store]
  (let [store (Account. app atom-store)]
    (init store)
    store))
