import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Button, Subtitle, Paragraph, Image } from "../../components";
import "./Home.scss";

function Home() {
  const tilt = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tilt.current) return;

    VanillaTilt.init(tilt.current);
  }, []);

  return (
    <div className="Home">
      <div className="Container">
        <div className="Card" ref={tilt}>
          <div className="Content">
            <Subtitle>[ICON] CUSEC 2023</Subtitle>
            <Paragraph>
              Canadian University Software Engineering Conference January 2022 •
              In Person
            </Paragraph>
            <div className="CardButtons">
              <Button inverted inline>
                Join us
              </Button>
              <Button colorBorder inline>
                Sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="Objective">
        <Subtitle>Our Objectives</Subtitle>
        <ol>
          <li>
            <Paragraph inline>Learn from world renowned experts</Paragraph>
          </li>
          <li>
            <Paragraph inline>Connect with like-minded students</Paragraph>
          </li>
          <li>
            <Paragraph inline>
              Discover opportunities with many companies
            </Paragraph>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
