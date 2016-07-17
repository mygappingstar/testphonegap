(ns adzerk.boot-reload.init1300 (:require [adzerk.boot-reload.client :as client] app.core))
(client/connect "ws://localhost:41795" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (app.core/main))})