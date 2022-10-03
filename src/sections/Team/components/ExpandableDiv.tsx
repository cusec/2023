import React, { useEffect, useRef, useState } from "react";
import { Paragraph } from "../../../components";
import { CusecExec } from "../../../types";
import "./ExpandableDiv.scss";

interface Props {
  role: string;
  members: CusecExec[];
  children?: string;
}

const ExpandableDiv = ({ role, members, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const [currentMember, setCurrentMember] = useState(members[0]);

  const handleFilterOpening = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!height || !open || !ref.current) {
      return;
    }

    const observer = new ResizeObserver((card) => {
      setHeight(card[0].contentRect.height);
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [height, open]);

  useEffect(() => {
    if (open && ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [open]);

  const circles = members.map((member) => (
    <i
      className={`fa-solid fa-circle ${
        member === currentMember ? "Highlight" : ""
      }`}
      onClick={() => setCurrentMember(member)}
    ></i>
  ));

  return (
    <div className="ExpandableDiv">
      <div>
        <div className="Heading" onClick={handleFilterOpening}>
          <i className="fa-solid fa-plus PlusIcon"></i>
          <Paragraph inline>{role}</Paragraph>
        </div>
      </div>
      <div className="MemberCards" style={{ height }}>
        <div ref={ref}>
          <div className="CardContent">
            <div className="Photo HideOnMobile">
              <i className="fa-solid fa-image Temporary"></i>
            </div>
            <div className="MemberInfo">
              <p className="Name Highlight">{currentMember.name}</p>
              <p className="University">{currentMember.uni}</p>
              <p>
                Year: {currentMember.year} | {currentMember.major}
              </p>
              <p>"{currentMember.quote}"</p>
              <p>
                <span className="Highlight">Fun Fact:</span>{" "}
                {currentMember.fact}
              </p>
            </div>
            <div className="Circles">{circles}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableDiv;
