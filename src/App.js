import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar, SideBar, Footer } from "./components";

import { Home, Products, SingleProduct, About, Cart, Error } from "./page";

const App = () => {
  return (
    <Router>
      <NavBar />
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
