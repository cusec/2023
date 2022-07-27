import React from "react";
import { NavLink, To, useResolvedPath, useMatch } from "react-router-dom";
import classNames from "classnames";
import { Paragraph } from "../";

import "./Navbar.scss";

interface Props {
  to: To;
  name: string;
}

const CusecLink = ({ to, name }: Props) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const className = classNames("NavItem", isActive ? "Active" : null);

  return (
    <li>
      <NavLink to={to} style={{ textDecoration: "none" }}>
        <Paragraph className={className}>{name}</Paragraph>
      </NavLink>
    </li>
  );
};

export default CusecLink;
