import Paragraph from "../../components/Paragraph/Paragraph";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExpandableDiv from "./components/ExpandableDiv";
import {
  chairs,
  logistics,
  sponsorship,
  speakers,
  technology,
  events,
  promotions,
  headDelegates,
} from "./MemberInfo";
import "./Team.scss";

function Team() {
  return (
    <div className="Team">
      <div className="Section">
        <div className="CenterText">
          <Subtitle>Meet The Team!</Subtitle>
          <Paragraph>
            Click on the drop tabs to learn more about the people who make up
            the different parts of CUSEC.
          </Paragraph>
        </div>
        <div className="TeamList">
          <ExpandableDiv role={chairs.name} members={chairs.members} />
          <ExpandableDiv role={logistics.name} members={logistics.members} />
          <ExpandableDiv
            role={sponsorship.name}
            members={sponsorship.members}
          />
          <ExpandableDiv role={speakers.name} members={speakers.members} />
          <ExpandableDiv role={technology.name} members={technology.members} />
          <ExpandableDiv role={events.name} members={events.members} />
          <ExpandableDiv role={promotions.name} members={promotions.members} />
          <ExpandableDiv
            role={headDelegates.name}
            members={headDelegates.members}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
