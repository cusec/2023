import React from "react";
import { Link } from "react-router-dom";
import CusecLink from "../CusecLink/CusecLink";
import brandLogo from "../../assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  const links = [
    { name: "Privacy", link: "/privacy" },
    { name: "Terms", link: "/terms" },
    { name: "Contact Us", link: "/contact" },
  ];

  const footerLinks = links.map(({ link, name }) => {
    return <CusecLink key={name} to={link} name={name} />;
  });

  const socialLinks = (
    <>
      <a target="_blank" href="https://www.instagram.com/cusecofficial">
        <i className="fa-brands fa-instagram fa-xl"></i>
      </a>
      <a target="_blank" href="https://www.tiktok.com/@cusec_official">
        <i className="fa-brands fa-tiktok fa-xl"></i>
      </a>
      <a target="_blank" href="https://ca.linkedin.com/company/cusec">
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </a>
    </>
  );

  return (
    <>
      <div className="FooterRow">
        <div className="HideOnMobile">
          <Link key="icon" to="/">
            <img
              src={brandLogo}
              height={48}
              alt="CUSEC Logo"
              className="NavbarLogo"
            />
          </Link>
        </div>
        <ul className="NavItemList">{footerLinks}</ul>
        <div className="HideOnMobile FooterIcon">{socialLinks}</div>
      </div>
      <div className="ShowOnMobile FooterRow">
        <div className="FooterIcon">{socialLinks}</div>
      </div>
    </>
  );
};

export default Footer;
