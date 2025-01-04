import React from "react";
import { Route, Routes } from "react-router-dom";
import PricingPage from "./pages/PricingPage/PricingPage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PricingPage />} />
      </Routes>
    </>
  );
}
