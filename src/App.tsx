import React, { useEffect } from "react";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./sections/Home";
import Team from "./sections/Team/Team";
import WildPage from "./sections/WildPage";
import CodeOfConduct from "./sections/CodeOfConduct/CodeOfConduct";
import PrivacyPolicy from "./sections/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./sections/TermsOfUse/TermsOfUse";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/codeofconduct" element={<CodeOfConduct />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="*" element={<WildPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
