import React from "react";
import classNames from "classnames";
import { Stagger } from "../../types";
import "./Image.scss";

interface Props {
  src: string;
  alt: string;
  small?: boolean;
  stagger?: Stagger;
}

const Image = ({ src, alt, small, stagger }: Props) => {
  const className = classNames(
    "Image",
    small && "Small",
    stagger && stagger === Stagger.Top && "StaggerTop",
    stagger && stagger === Stagger.Bottom && "StaggerBottom"
  );

  return <img src={src} alt={alt} className={className} />;
};

export default Image;
