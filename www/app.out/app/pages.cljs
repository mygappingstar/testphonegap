(ns app.pages)

(def data
  {:en
   {"concept"
    [:div
     [:h2 "HOW IT IS MADE"]
     [:p "Your product begins with you. The moment your choice is submitted, the commands to run the machines at the factory are created. With speed and precision at the height of today’s technology, machines carve your order out of sheets of Valchromat, an FSC certified wood fiber panel. Organic pigments are specially mixed with environmentally safe resins to create a panel colored all the way through. Valchromat is water resistant, does not contain toxic substances and is structurally superior to similar products. Through Sistemi Moderni’s partnership with Valchromat, we can provide you with ecologically sensitive products that are safe to use in kitchens, bathrooms, playrooms and the rest of your home or office."]
     [:p "Once your order is fabricated, it is inspected for potential imperfections and hand sanded in preparation for finishing with oil or lacquer. If you choose to have your order lacquered, we will seal and coat it with an automotive grade lacquer in your choice of any RAL color. Your shelves are then carefully wrapped and boxed in a custom designed heavy duty cardboard package in preparation for rapid delivery. You are going to love opening your gift when it arrives at your doorstep."]]}})

(defn content [lang id]
  (get-in data [lang id]))
