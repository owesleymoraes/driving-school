import React from "react";
import { Error } from "./pages/Error";
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
        <Route path="/productDetail/:slang" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
