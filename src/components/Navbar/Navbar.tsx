import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { Button, Paragraph } from "../";
import CusecLink from "../CusecLink/CusecLink";
import brandLogo from "../../assets/logo.svg";
import "./Navbar.scss";
import "../CusecLink/CusecLink.scss";

interface Props {
  authenticated?: boolean;
}

const Navbar = ({ authenticated = false }: Props) => {
  const [solidNav, setSolidNav] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setSolidNav(true);
      } else {
        setSolidNav(false);
      }
    });
  }, []);

  const handleSignOut = () => {};

  const signedIn = [{ name: "Home", link: "/" }];
  const signedOut = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Sponsors", link: "/sponsors" },
    { name: "Team", link: "/team" },
    { name: "FAQ", link: "/faq" },
  ];

  let links;

  if (authenticated) {
    links = signedIn;
  } else {
    links = signedOut;
  }

  const className = classNames(
    "NavWrapper",
    solidNav ? "Solid" : "Transparent"
  );

  const navbarLinks = links.map(({ link, name }) => {
    return <CusecLink key={name} to={link} name={name} />;
  });

  return (
    <div className={className}>
      <div className="Navbar">
        <ul className="NavItemList">
          <Link
            key="icon"
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            <img
              src={brandLogo}
              height={48}
              alt="CUSEC Logo"
              className="NavbarLogo"
            />
          </Link>
          {navbarLinks}
          {authenticated ? (
            <NavLink key="signout" to="#" onClick={handleSignOut}>
              <li className="NavItem">
                <Paragraph>Sign Out</Paragraph>
              </li>
            </NavLink>
          ) : null}
        </ul>
        <Button plain>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
