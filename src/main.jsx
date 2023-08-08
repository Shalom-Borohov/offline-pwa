import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (navigator.serviceWorker.controller) {
  console.log("Active service worker found");
} else {
  navigator.serviceWorker
    .register("serviceWorker.js", {
      scope: "./",
    })
    .then(function () {
      console.log("Service worker  registered");
    });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
