import React from "react";
import classNames from "classnames";
import "./Paragraph.scss";

interface Props {
  inline?: boolean;
  bold?: boolean;
  className?: string;
  onHover?: (text: string) => void;
  children: string;
}

const Paragraph = ({ inline, bold, className, children, onHover }: Props) => {
  const styles = classNames("Paragraph", bold ? "Bold" : null, className);
  const hover = (text: string) => {
    if (onHover) {
      onHover(text);
    }
  };

  if (inline) {
    return (
      <span className={styles} onMouseEnter={() => hover(children)}>
        {children}
      </span>
    );
  }

  return (
    <p className={styles} onMouseEnter={() => hover(children)}>
      {children}
    </p>
  );
};

export default Paragraph;
