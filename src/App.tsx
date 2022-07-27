import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
