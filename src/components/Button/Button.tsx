import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface Props {
  primary?: boolean;
  inverted?: boolean;
  onClick?: () => void;
  children: string;
}

const Button = ({ primary, inverted, onClick, children }: Props) => {
  const wrapperClassNames = classNames("Button");

  const className = classNames(
    primary ? "Primary" : "Secondary",
    inverted ? "Inverted" : null
  );

  return (
    <div className={wrapperClassNames}>
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
