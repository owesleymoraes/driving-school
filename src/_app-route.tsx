import React from "react";
import { About } from "./pages/About";
import { HomePage } from "./pages/HomePage";
import { ProductDetail } from "./pages/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
