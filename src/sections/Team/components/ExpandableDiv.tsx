import React from "react";
import "./ExpandableDiv.scss";
import Paragraph from "../../../components/Paragraph/Paragraph";

interface Props {
  children: string;
}

const ExpandableDiv = ({ children }: Props) => {
  return (
    <li className="RoundedList">
      <i className="fa-solid fa-plus PlusIcon"></i>
      <Paragraph inline className="Position">
        {children}
      </Paragraph>
    </li>
  );
};



export default ExpandableDiv;
