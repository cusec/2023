import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface Props {
  primary?: boolean;
  inverted?: boolean;
  children: string;
}

const Button = ({ primary, inverted, children }: Props) => {
  const wrapperClassNames = classNames("Button");

  const className = classNames(
    primary ? "Primary" : "Secondary",
    inverted ? "Inverted" : null
  );

  return (
    <div className={wrapperClassNames}>
      <button type="button" className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
