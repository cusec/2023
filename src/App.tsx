import React, { useRef, useEffect } from "react";
import "./App.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const faqSection = useRef<HTMLDivElement>(null);

  const scrollToFaq = () => {
    const pathName = window.location.pathname;

    if (pathName !== "/") {
      navigate("/");
    }

    if (!faqSection.current) {
      return;
    }

    window.scrollTo({
      top: faqSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  useScrollToTop();

  return (
    <>
      <Navbar onFaq={scrollToFaq} />
      <Routes>
        <Route path="/" element={<Home faqRef={faqSection} />} />
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
