import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Button, Subtitle, Paragraph, Image } from "../../components";
import { Stagger } from "../../types";
import natureImg from "../../assets/nature.jpeg";
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
            <Subtitle showLogo>CUSEC 2023</Subtitle>
            <Paragraph className="CardText">
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
      <div className="Section InlineSection List">
        <Image src={natureImg} alt="Nature image" />
        <div className="SectionContent">
          <div className="SectionAssets">
            <Subtitle>Our Objectives</Subtitle>
          </div>
          <ol>
            <li>
              <Paragraph inline bold>
                Learn
              </Paragraph>
              <Paragraph inline> from world renowned experts</Paragraph>
            </li>
            <li>
              <Paragraph inline bold className="Underline">
                Connect
              </Paragraph>
              <Paragraph inline> with like-minded students</Paragraph>
            </li>
            <li>
              <Paragraph inline bold>
                Discover
              </Paragraph>
              <Paragraph inline> opportunities with many companies</Paragraph>
            </li>
          </ol>
        </div>
      </div>
      <div className="Section InlineSection List">
        <div className="SectionContent">
          <div className="SectionAssets">
            <Subtitle>Our Impact</Subtitle>
          </div>
          <ol>
            <li>
              <Paragraph inline>Lorem ipsum dolor sit amet</Paragraph>
            </li>
            <li>
              <Paragraph inline>
                Lorem ipsum dolor sit amet, consectetur
              </Paragraph>
            </li>
            <li>
              <Paragraph inline>Lorem ipsum dolor sit amet</Paragraph>
            </li>
          </ol>
          <div className="SectionAssets">
            <Button colorBorder inline>
              Connect
            </Button>
          </div>
        </div>
        <Image src={natureImg} alt="Nature image" />
      </div>
      <div className="Section">
        <div className="AboutSubtitle">
          <Subtitle>What is CUSEC?</Subtitle>
        </div>
        <div className="InlineSection">
          <Image
            src={natureImg}
            alt="Nature image"
            small
            stagger={Stagger.Bottom}
          />
          <Image
            src={natureImg}
            alt="Nature image"
            small
            stagger={Stagger.Top}
          />
          <Image
            src={natureImg}
            alt="Nature image"
            small
            stagger={Stagger.Bottom}
          />
        </div>
      </div>
      <div className="Section List">
        <div className="CenterText">
          <Subtitle>Canada’s annual software engineering conference</Subtitle>
        </div>
        <div className="SectionContent">
          <ol>
            <li>
              <Paragraph inline>Lorem ipsum dolor sit amet</Paragraph>
            </li>
            <li>
              <Paragraph inline>
                Lorem ipsum dolor sit amet, consectetur
              </Paragraph>
            </li>
            <li>
              <Paragraph inline>Lorem ipsum dolor sit amet</Paragraph>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
