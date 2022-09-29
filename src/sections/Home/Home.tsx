import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Button, Subtitle, Paragraph, Image } from "../../components";
import { PricingCard, FAQ } from "./components";
import { Stagger, FAQType } from "../../types";
import natureImg from "../../assets/nature.jpeg";
import connectImage from "../../assets/connect.png";
import learnImage from "../../assets/learn.png";
import discoverImage from "../../assets/discover.png";
import "./Home.scss";
import InteractiveButton from "../../components/InteractiveButton/InteractiveButton";

function Home() {
  const tilt = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const faqs: FAQType[] = [
    {
      id: 1,
      question: "Q1",
      answer: "A1",
    },
    {
      id: 2,
      question: "Q2",
      answer: "A2",
    },
    {
      id: 3,
      question: "Q3",
      answer: "A3",
    },
  ];

  const hoverText = (text: string) => {
    const image: HTMLImageElement = imageRef?.current
      ?.firstChild as HTMLImageElement;

    if (!image.src) {
      return;
    }

    switch (text) {
      case "Learn":
        image.src = learnImage;
        break;
      case "Connect":
        image.src = connectImage;
        break;
      case "Discover":
        image.src = discoverImage;
        break;
    }
  };

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
        <div className="SectionImage" ref={imageRef}>
          <Image src={learnImage} alt="Learn image" />
        </div>
        <div className="SectionContent">
          <div className="SectionAssets">
            <Subtitle>Our Objectives</Subtitle>
          </div>
          <ol>
            <li>
              <Paragraph inline bold className="Underline" onHover={hoverText}>
                Learn
              </Paragraph>
              <Paragraph inline> from world renowned experts</Paragraph>
            </li>
            <li>
              <Paragraph inline bold className="Underline" onHover={hoverText}>
                Connect
              </Paragraph>
              <Paragraph inline> with like-minded students</Paragraph>
            </li>
            <li>
              <Paragraph className="Underline" inline bold onHover={hoverText}>
                Discover
              </Paragraph>
              <Paragraph inline> opportunities with many companies</Paragraph>
            </li>
          </ol>
        </div>
      </div>
      <div className="Section InlineSection List HideOnMobile">
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
            <InteractiveButton link="http://www.google.com" text="Connect" />
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
      <div className="Section">
        <div className="SectionContent">
          <div className="CenterText">
            <Subtitle>Frequently Asked Questions</Subtitle>
            <p className="FaqHelpText">
              Can't find what you're looking for? Send us an email at{" "}
              <span className="Highlight">info@cusec.com</span>
            </p>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </div>
    </div>
  );
}

export default Home;
