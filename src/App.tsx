import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./sections/Home";
import Team from "./sections/Team/Team";
import WildPage from "./sections/WildPage";
import CodeOfConduct from "./sections/CodeOfConduct/CodeOfConduct";
import PrivacyPolicy from "./sections/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./sections/TermsOfUse/TermsOfUse";

enum Page {
  Sponsor = "SPONSOR",
  Faq = "FAQ",
}

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  const navigate = useNavigate();

  const [sponsorScroll, setSponsorScroll] = useState(false);
  const [faqScroll, setFaqScroll] = useState(false);

  const scrollTo = (page: Page) => {
    const pathName = window.location.pathname;

    if (pathName !== "/") {
      navigate("/");
    }

    if (page === Page.Sponsor) {
      setSponsorScroll(true);
    } else {
      setFaqScroll(true);
    }
  };

  useScrollToTop();

  return (
    <>
      <Navbar
        onSponsors={() => scrollTo(Page.Sponsor)}
        onFaq={() => scrollTo(Page.Faq)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sponsorScroll={sponsorScroll}
              setSponsorScroll={setSponsorScroll}
              faqScroll={faqScroll}
              setFaqScroll={setFaqScroll}
            />
          }
        />
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
