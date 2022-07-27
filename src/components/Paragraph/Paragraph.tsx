import React from "react";
import classNames from "classnames";
import "./Paragraph.scss";

interface Props {
  inline?: boolean;
  className?: string;
  children: string;
}

const Paragraph = ({ inline, className, children }: Props) => {
  const styles = classNames("Paragraph", className);

  if (inline) {
    return <span className={styles}>{children}</span>;
  }

  return <p className={styles}>{children}</p>;
};

export default Paragraph;
