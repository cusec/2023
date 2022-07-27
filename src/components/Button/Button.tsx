import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface Props {
  inline?: boolean;
  plain?: boolean;
  inverted?: boolean;
  colorBorder?: boolean;
  children: string;
}

const Button = ({ inline, plain, inverted, colorBorder, children }: Props) => {
  const wrapperClassNames = classNames("Button", inline ? "Inline" : "Flex");

  const className = classNames(
    plain ? "Plain" : null,
    inverted ? "Inverted" : null,
    colorBorder ? "ColorBorder" : null
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
