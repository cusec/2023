import React from "react";
import "./Team.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Paragraph from "../../components/Paragraph/Paragraph";
import Subtitle from "../../components/Subtitle/Subtitle";

function Team() {
  return (
    <div className="Team">
      <div className="Title">
        <Subtitle>Meet The Team!</Subtitle>
        <Paragraph>
          Click on the drop tabs to learn more about the people who make up the
          different parts of CUSEC.
        </Paragraph>
        <div className="Category">
          
          <ol>
            <li className="roundedList">
            <div className="plusCircle">+</div>
              <Paragraph inline className="Position">
                Chairs
              </Paragraph>
            </li>
            <li className="roundedList">
            <div className="plusCircle">+</div>
              <Paragraph inline className="Position">
                Logistics Team
              </Paragraph>
            </li>
            <li className="roundedList">
            <div className="plusCircle">+</div>
              <Paragraph inline className="Position">
                Sponsorship Team
              </Paragraph>
            </li>
            <li className="roundedList">
            <div className="plusCircle">+</div>
              <Paragraph inline className="Position">
                Speakers Team
              </Paragraph>
            </li>
            <li className="roundedList">
            <div className="plusCircle">+</div>
              <Paragraph inline className="Position">
                Technology Team
              </Paragraph>
             
            </li>
            <li className="roundedList">
            <div className="plusCircle">+</div>
              <Paragraph inline className="Position">
                Events Team
              </Paragraph>
            </li>
            <li className="roundedList">
            <div className="plusCircle">+</div>
              <Paragraph inline className="Position">
                Promotions Team
              </Paragraph>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Team;
