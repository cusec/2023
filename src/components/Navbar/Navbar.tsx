import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import CusecLink from "../CusecLink/CusecLink";
import brandLogo from "../../assets/logo.svg";
import "./Navbar.scss";
import "../CusecLink/CusecLink.scss";

const Navbar = () => {
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
    { name: "Services", link: "/services" },
    { name: "Sponsors", link: "/sponsors" },
    { name: "Team", link: "/team" },
    { name: "FAQ", link: "/faq" },
  ];

  const className = classNames(
    "NavWrapper",
    solidNav ? "Solid" : "Transparent"
  );

  const navbarLinkClassName = classNames(
    "NavList",
    showMobileNav ? "Mobile" : null
  );

  const navbarLinks = links.map(({ link, name }) => {
    return <CusecLink key={name} to={link} name={name} />;
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
          !
        </button>
        <div className={navbarLinkClassName}>
          <ul className="NavItemList">{navbarLinks}</ul>
        </div>
        <button className="signupbutton">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
