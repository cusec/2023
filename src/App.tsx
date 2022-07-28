import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
