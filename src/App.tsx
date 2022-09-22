import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./sections/Home";
import WildPage from "./sections/WildPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<WildPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
