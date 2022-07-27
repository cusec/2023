import React from "react";
import "./Subtitle.scss";

interface Props {
  children: string;
}

const Subtitle = ({ children }: Props) => {
  return <span className="Subtitle">{children}</span>;
};

export default Subtitle;
