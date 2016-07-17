(ns app.i18n
  (:require [taoensso.tower :as tower]))

(def ^:private my-tconfig
  {:fallback-locale :en
   :compiled-dictionary
   (-> {:en {:global-menu {:more "more"
                           :back "back to main menu"}
             :user        {:lang     "EN"
                           :language "English"}
             :module      {:home "home"
                           :blog     "blog"
                           :login    "log in"
                           :sign-up  "sign up"
                           :boutique "boutique"
                           :faq      "FAQ"
                           :contact  "contact"}
             :pages       {:concept    "concept"
                           :privacy    "privacy policy"
                           :recruiting "recruiting"}
             :social      {:email      "feedback@sistemimoderni.com"
                           :facebook  "https://fb.com/sm"
                           :twitter   "https://twt.co/sm"
                           :pinterest "https://pin.in/sm"}
             :address     {:address "130 route de la combette"
                           :state   "saint martin d'uriage"
                           :country "france"
                           :phone   "+33 6 09 46 92 00"}
             :intro {:impression
                     "let's make things personal"
                     :tagline
                     "your high end solution for personal design"}}
        :it {:user {:lang "IT"
                    :language "Italiano"}}
        :fr {:user {:lang "FR"
                    :language "Française"}}}
     tower/dict-compile*)})

(def t (tower/make-t my-tconfig))
