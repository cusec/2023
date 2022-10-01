import React from "react";
import { NavLink, To, useResolvedPath, useMatch } from "react-router-dom";
import classNames from "classnames";

import "./CusecLink.scss";

interface Props {
  to: To;
  name: string;
  scrollsTo?: () => void;
}

const CusecLink = ({ to, name, scrollsTo }: Props) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const className = classNames("NavItem", isActive ? "Active" : null);

  return (
    <li>
      {scrollsTo ? (
        <p className={className} onClick={scrollsTo}>
          {name}
        </p>
      ) : (
        <NavLink to={to} style={{ textDecoration: "none" }}>
          <p className={className}>{name}</p>
        </NavLink>
      )}
    </li>
  );
};

export default CusecLink;
