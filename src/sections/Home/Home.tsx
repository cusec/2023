import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import {
  Button,
  Subtitle,
  Paragraph,
  Image,
  PricingCard,
} from "../../components";
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
        <div className="Card">
          <div className="Content" ref={tilt}>
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
        <div className="SectionImage">
          <Image src={natureImg} alt="Nature image" />
        </div>
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
        <div className="SectionImage">
          <Image src={natureImg} alt="Nature image" />
        </div>
      </div>
      <div className="Section">
        <div className="AboutSubtitle">
          <Subtitle>What is CUSEC?</Subtitle>
        </div>
        <div className="ImageRow">
          <div className="ImageColumn">
            <Image
              src={natureImg}
              alt="Nature image"
              stagger={Stagger.Bottom}
            />
          </div>
          <div className="ImageColumn">
            <Image src={natureImg} alt="Nature image" stagger={Stagger.Top} />
          </div>
          <div className="ImageColumn">
            <Image
              src={natureImg}
              alt="Nature image"
              stagger={Stagger.Bottom}
            />
          </div>
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
      <div className="Section">
        <div className="CenterText">
          <Subtitle>Join us at CUSEC 2023</Subtitle>
        </div>
        <div className="SectionContent">
          <div className="CenterText">
            <Paragraph inline>
              Choose the plan that works best for you. Feel free to contact us
              for further questions!
            </Paragraph>
          </div>
          <div className="PricingCards">
            <PricingCard
              title="Basic"
              helpText="Have a go and experience CUSEC"
              price={2}
              features={[
                "Hopin Virtual Conference",
                "Discord Access",
                "Social Events",
                "Networking Perks",
                "Talks and Workshops",
              ]}
            />
            <PricingCard
              title="VIP"
              helpText="Experience the exclusivity of VIP"
              price={35}
              features={[
                "All Basic Benefits",
                "In-person Event",
                "Exclusive CUSEC Merch",
                "Food + Snacks",
                "And more!",
              ]}
              vip
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
