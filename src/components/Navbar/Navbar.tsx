import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import CusecLink from "../CusecLink/CusecLink";
import brandLogo from "../../assets/logo.png";
import "./Navbar.scss";
import "../CusecLink/CusecLink.scss";

interface Props {
  onFaq: () => void;
}

const Navbar = ({ onFaq }: Props) => {
  const [solidNav, setSolidNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setSolidNav(true);
      } else {
        setSolidNav(false);
      }
    });
  }, []);

  const links = [
    { name: "Home", link: "/" },
    { name: "Schedule", link: "/schedule" },
    { name: "Sponsors", link: "/sponsors" },
    { name: "Speakers", link: "/speakers" },
    { name: "Team", link: "/team" },
    { name: "FAQ", link: "/faq", scrollsTo: onFaq },
  ];

  const className = classNames(
    "NavWrapper",
    solidNav ? "Solid" : "Transparent"
  );

  const navbarLinkClassName = classNames(
    "NavList",
    showMobileNav ? "Mobile" : null
  );

  const navbarLinks = links.map(({ link, name, scrollsTo }) => {
    return <CusecLink key={name} to={link} name={name} scrollsTo={scrollsTo} />;
  });

  return (
    <div className={className}>
      <div className="Navbar">
        <Link key="icon" to="/">
          <img
            src={brandLogo}
            height={48}
            alt="CUSEC Logo"
            className="NavbarLogo"
          />
        </Link>
        <button
          className="HamburgerIcon"
          onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className={navbarLinkClassName}>
          <ul className="NavItemList">{navbarLinks}</ul>
        </div>
        <button className="signupbutton">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
