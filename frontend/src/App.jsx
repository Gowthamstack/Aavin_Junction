import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import Contact from "./Component/Contact/Contact";
import NotFoundPage from "./Component/NotFound/NotFoundPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
