import React from "react";
import brandLogo from "../../assets/newLogo.png";
import "./Subtitle.scss";

interface Props {
  showLogo?: boolean;
  children: string;
}

const Subtitle = ({ showLogo, children }: Props) => {
  const logo = showLogo ? (
    <span className="Logo">
      <img src={brandLogo} height={48} alt="CUSEC Logo" />
    </span>
  ) : undefined;

  return (
    <h1 className="Subtitle">
      {logo}
      {children}
    </h1>
  );
};

export default Subtitle;
