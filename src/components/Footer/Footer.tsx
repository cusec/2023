import React from "react";
import { useNavigate } from "react-router-dom";
import CusecLink from "../CusecLink/CusecLink";
import brandLogo from "../../assets/logo.svg";
import "./Footer.scss";

const Footer = () => {
  let navigate = useNavigate();

  const links = [
    { name: "Privacy", link: "/privacy" },
    { name: "Terms", link: "/terms" },
    { name: "Contact Us", link: "/contact" },
  ];

  const footerLinks = links.map(({ link, name }) => {
    return <CusecLink key={name} to={link} name={name} />;
  });

  return (
    <div className="FooterWrapper">
      <div className="Wrapper">
        <ul className="NavItemList">{footerLinks}</ul>
      </div>
    </div>
  );
};

export default Footer;
