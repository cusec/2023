import "./Team.scss";
import Paragraph from "../../components/Paragraph/Paragraph";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExpandableDiv from "./components/ExpandableDiv";

const members: string[] = [
  "Chairs",
  "Logistics Team",
  "Sponsorship Team",
  "Speakers Team",
  "Technology Team",
  "Events Team",
  "Promotions Team",
];

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
          <ul>
            {members.map((member) => (
              <ExpandableDiv>{member}</ExpandableDiv>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
