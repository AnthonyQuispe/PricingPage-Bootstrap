import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/PricingPage-Bootstrap">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
