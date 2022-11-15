import React from "react";
import { NavLink, To, useResolvedPath, useMatch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

import "./CusecLink.scss";

interface Props {
  to: To;
  name: string;
  hashLink?: boolean;
  openPage?: string;
  closeNav?: () => void;
}

const CusecLink = ({ to, name, hashLink, openPage, closeNav }: Props) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const className = classNames("NavItem", isActive ? "Active" : null);

  if (openPage) {
    const handleSignUp = () => {
      window.open(openPage, "_blank");
    };

    return (
      <p className="NavItem" onClick={handleSignUp}>
        {name}
      </p>
    );
  }

  return (
    <li onClick={closeNav}>
      {hashLink ? (
        <HashLink smooth to={`/#${name}`} className="HashLink">
          <p className={className}>{name}</p>
        </HashLink>
      ) : (
        <NavLink to={to} style={{ textDecoration: "none" }}>
          <p className={className}>{name}</p>
        </NavLink>
      )}
    </li>
  );
};

export default CusecLink;
