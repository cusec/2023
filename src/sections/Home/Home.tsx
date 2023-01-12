import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import {
  Button,
  Subtitle,
  Paragraph,
  Image,
  // InteractiveButton,
} from "../../components";
import {
  handleScheduleLink,
  handleEnglishLink,
  handleFrenchLink,
  handleSponsorLink,
  handleSponsorMailTo,
} from "../../externalLinks";
import { PricingCard, FAQ } from "./components";
import { Stagger, FAQType } from "../../types";
// import impactImg from "../../assets/impact.jpg";
import connectImage from "../../assets/Connect.jpg";
import learnImage from "../../assets/Learn.jpg";
import discoverImage from "../../assets/Discover.jpg";
import groupImage1 from "../../assets/CUSEC1.jpg";
import groupImage2 from "../../assets/CUSEC2.jpg";
import groupImage3 from "../../assets/CUSEC3.jpg";
import mobileHome from "../../assets/mobileHome.svg";
import mobileWaves from "../../assets/mobileWaves.svg";
import morganStanleyLogo from "../../assets/morganStanleyLogo.png";
import nokiaLogo from "../../assets/nokiaLogo.png";
import stickerMuleLogo from "../../assets/stickerMuleLogo.png";
import rbcLogo from "../../assets/rbcLogo.png";
import deloitteLogo from "../../assets/deloitteLogo.png";
import voiceflowLogo from "../../assets/voiceflowLogo.png";
import accentureLogo from "../../assets/accentureLogo.png";
import cseLogo from "../../assets/cseLogo.png";
import "./Home.scss";

const IMAGES = [learnImage, connectImage, discoverImage];

function Home() {
  const tilt = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const hoverText = (text: string) => {
    const image: HTMLImageElement = imageRef?.current
      ?.firstChild as HTMLImageElement;

    if (!image.src) {
      return;
    }

    switch (text) {
      case "Learn":
        image.src = IMAGES[0];
        break;
      case "Connect":
        image.src = IMAGES[1];
        break;
      case "Discover":
        image.src = IMAGES[2];
        break;
    }
  };

  useEffect(() => {
    if (!tilt.current) return;

    VanillaTilt.init(tilt.current);
  }, []);

  const [currentImg, setCurrentImg] = useState(IMAGES[0]);

  const circles = IMAGES.map((img) => (
    <i
      className={`fa-solid fa-circle ${img === currentImg ? "Highlight" : ""}`}
      onClick={() => setCurrentImg(img)}
    ></i>
  ));

  const FAQS: FAQType[] = [
    {
      id: 1,
      question: "When and where is CUSEC Happening?",
      answer:
        "CUSEC 2023 will be held on January 12, 13, & 14 at the Hotel Bonaventure located in Downtown Montreal, QC.",
    },
    {
      id: 2,
      question: "Where can I find the conference schedule and speakers?",
      answer: (
        <p>
          The schedule page will be available on the website soon along with our
          list of speakers. You can subscribe to the conference schedule on
          Google Calendar to receive notifications for events and view the event
          schedule and any changes in real time. To add the calendar to your
          browser, please click{" "}
          <span className="Highlight FaqLink" onClick={handleScheduleLink}>
            here
          </span>
          .
        </p>
      ),
    },
    {
      id: 3,
      question: "Who can attend? What are the costs of attending?",
      answer: (
        <>
          <p>
            All undergraduate and graduate students in Canada are welcome to
            attend! We strive to keep the ticket prices affordable for students.
            If you are still registered as a student at a Canadian educational
            institution and have not graduated by January 2023, you can buy a
            student ticket start $80. Otherwise, the professional ticket is for
            you! We sell professional tickets for a base price of $200.
          </p>
          <p>
            We have special rates for delegates staying at the conference venue,
            the Hotel Bonaventure. These rates can be split among the guests of
            the room. Single or Double capacity are $144/room/night. Triple or
            Quad capacity are $149/room/night.
          </p>
          <p>
            Please note that tickets do not cover the costs of staying at the
            hotel venue, or travel to the conference. For more information about
            accommodations visit the booking section below. For travel options,
            contact your closest Head Delegate or info@cusec.net.
          </p>
        </>
      ),
    },
    {
      id: 4,
      question: "Where should I book rooms?",
      answer: (
        <>
          <p>
            You can book a room at the hotel venue through our link which Hotel
            Bonaventure has provided so delegates can access discounted rates.
            For booking in English, you can visit this{" "}
            <span className="Highlight FaqLink" onClick={handleEnglishLink}>
              link
            </span>
            ; for booking in French, visit this{" "}
            <span className="Highlight FaqLink" onClick={handleFrenchLink}>
              link
            </span>
            .
          </p>
          <p>
            We recommend booking a Quad Room to access the cheapest rate. If you
            are looking for delegates to share a room with, find your Head
            Delegate in the Team page and reach out! If you don’t have a Head
            Delegate, contact us at info@cusec.net and we will help connect you
            with one of them.
          </p>
          <p>
            In order to access our special rates, please reserve your room by
            Dec 20 11:59 PM (ET).
          </p>
        </>
      ),
    },
    {
      id: 5,
      question: "How can I get a refund? Can I re-sell my ticket?",
      answer:
        "CUSEC tickets are final sale and cannot be refunded. It is strictly forbidden to re-sell a CUSEC ticket above the purchased price. If you cannot attend anymore, reach out to info@cusec.net and CC your head delegate if you have one. We will do our best to assist you.",
    },
    // {
    //   id: 6,
    //   question: "Q",
    //   answer: "A",
    // },
  ];

  return (
    <div className="Home">
      <div className="Container HideOnMobile">
        <div className="Card">
          <div className="Content" ref={tilt}>
            <Subtitle showLogo>CUSEC 2023</Subtitle>
            <Paragraph className="CardText">
              Canadian University Software Engineering Conference January 12-14,
              2023 • In Person
            </Paragraph>
            <div className="CardButtons">
              <Button primary onClick={handleScheduleLink}>
                Schedule
              </Button>
              <Button onClick={handleSponsorMailTo}>Sponsor</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="OnlyShowOnMobile">
        <div className="MobileHome">
          <img
            src={mobileHome}
            height="auto"
            alt="CUSEC Logo"
            className="MobileLogo"
          />
          <div className="MobileHomeText">
            <Paragraph>
              Canadian University Software Engineering Conference
            </Paragraph>
            <Paragraph>January 2022 • In Person</Paragraph>
            <div className="CardButtons">
              <Button primary inverted onClick={handleScheduleLink}>
                Schedule
              </Button>
              <Button inverted onClick={handleSponsorMailTo}>
                Sponsor
              </Button>
            </div>
          </div>
          <div className="MobileWaves">
            <img
              src={mobileWaves}
              height="auto"
              alt="CUSEC Logo"
              className="MobileLogo"
            />
          </div>
        </div>
      </div>
      <div className="Section InlineSection List HideOnMobile">
        <div className="SectionImage" ref={imageRef}>
          <Image src={learnImage} alt="Learn image" />
        </div>
        <div className="SectionContent Objectives">
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
      <div className="OnlyShowOnMobile MobileAbout">
        <div className="CenterText">
          <Subtitle>What is CUSEC?</Subtitle>
        </div>
        <div className="MobileAboutContent">
          <Image src={currentImg} alt="Learn image" />
          <div className="MobileObjectives List">
            <div className="CenterText MobileTitle">
              <Paragraph>Our Objectives</Paragraph>
            </div>
            <ol>
              <li>
                <Paragraph
                  inline
                  bold
                  className="Underline"
                  onHover={hoverText}
                >
                  Learn
                </Paragraph>
                <Paragraph inline> from world renowned experts</Paragraph>
              </li>
              <li>
                <Paragraph
                  inline
                  bold
                  className="Underline"
                  onHover={hoverText}
                >
                  Connect
                </Paragraph>
                <Paragraph inline> with like-minded students</Paragraph>
              </li>
              <li>
                <Paragraph
                  className="Underline"
                  inline
                  bold
                  onHover={hoverText}
                >
                  Discover
                </Paragraph>
                <Paragraph inline> opportunities with many companies</Paragraph>
              </li>
            </ol>
          </div>
          <div className="Circles">{circles}</div>
        </div>
      </div>
      {/* <div className="Section InlineSection List HideOnMobile">
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
          <Image src={impactImg} alt="Nature image" />
        </div>
      </div> */}
      <div className="Section HideOnMobile">
        <div className="AboutSubtitle">
          <Subtitle>What is CUSEC?</Subtitle>
        </div>
        <div className="ImageRow">
          <div className="ImageColumn">
            <Image
              src={groupImage1}
              alt="Nature image"
              stagger={Stagger.Bottom}
            />
          </div>
          <div className="ImageColumn">
            <Image src={groupImage2} alt="Nature image" stagger={Stagger.Top} />
          </div>
          <div className="ImageColumn">
            <Image
              src={groupImage3}
              alt="Nature image"
              stagger={Stagger.Bottom}
            />
          </div>
        </div>
      </div>
      <div className="Section HideOnMobile">
        <div className="Highlight">
          <Subtitle>Canada’s annual software engineering conference</Subtitle>
        </div>
        <div className="SectionContent">
          <Paragraph>
            Join thousands of students from across Canada for a weekend full of
            interactive knowledge sharing, mentoring, career opportunities and
            more as we explore the endless possibilities of the future of tech.
          </Paragraph>
        </div>
        <div className="Highlight">
          <Subtitle>Why Join?</Subtitle>
        </div>
        <div className="SectionContent">
          <Paragraph>
            CUSEC is an annual software engineering conference organized for
            students by students. It was founded in 2002 by a small team of tech
            enthusiasts on a mission to educate and expose students to a diverse
            range of areas in software engineering and computer science. The
            conference enables attendees to discover knowledgeable speakers,
            connect with sponsoring companies, and make lifelong friends, all in
            a safe and comfortable space.
          </Paragraph>
        </div>
      </div>
      <div className="Section CenterText" id="Sponsors">
        <Subtitle>Meet the companies making CUSEC possible.</Subtitle>
        <Paragraph>More to be introduced soon!</Paragraph>
        <div className="SponsorLogos">
          <div className="SponsorGold">
            <img src={rbcLogo} height="auto" alt="RBC Logo" />
          </div>
          <div className="SponsorSilver">
            <img
              src={morganStanleyLogo}
              height="auto"
              alt="Morgan Stanley Logo"
              className="Clickable"
              onClick={() =>
                handleSponsorLink(
                  "https://morganstanley.tal.net/vx/candidate/apply/12953"
                )
              }
            />
          </div>
          <div className="SponsorBronze">
            <img
              src={nokiaLogo}
              height="auto"
              alt="Nokia Logo"
              className="Clickable"
              onClick={() => handleSponsorLink("http://www.nokia.com/")}
            />
            <img
              src={deloitteLogo}
              height="auto"
              alt="Deloitte Logo"
              className="Clickable"
              onClick={() =>
                handleSponsorLink(
                  "https://www2.deloitte.com/ca/en/pages/careers/topics/students.html"
                )
              }
            />
            <img
              src={accentureLogo}
              height="auto"
              alt="Accenture Logo"
              className="Clickable"
              onClick={() =>
                handleSponsorLink("https://www.accenture.com/ca-en/careers")
              }
            />
            <img
              src={cseLogo}
              height="auto"
              alt="Communications Security Establishment Logo"
              className="Clickable"
              onClick={() =>
                handleSponsorLink(
                  "https://www.cse-cst.gc.ca/en/careers/student-opportunities"
                )
              }
            />
          </div>
          <div className="SponsorInKind">
            <img
              src={stickerMuleLogo}
              height="auto"
              alt="Sticker Mule Logo"
              className="Clickable"
              onClick={() => handleSponsorLink("https://mule.to/p3a7")}
            />
            <img
              src={voiceflowLogo}
              height="auto"
              alt="Voiceflow Logo"
              className="Clickable"
              onClick={() =>
                handleSponsorLink(
                  "http://www.voiceflow.com/hackathon/canadianuniveristysoftwareengineeringconference2022"
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="Section">
        <div className="SectionContent">
          <div className="CenterText">
            <Subtitle>Join Us at CUSEC 2023!</Subtitle>
            <Paragraph>
              Choose plan that works best for you, feel free to contact us for
              further questions
            </Paragraph>
          </div>
          <div className="PricingCards">
            <PricingCard
              title="Basic"
              helpText="Have a go and experience CUSEC"
              priceStudent={80}
              priceProf={200}
              features={[
                "Social Events",
                "Networking Perks",
                "Talks and Workshops hosted by our sponsors",
              ]}
            />
            <PricingCard
              title="VIP"
              helpText="Experience the exclusivity of VIP"
              priceStudent={110}
              priceProf={230}
              features={["All Basic Benefits", "Exclusive CUSEC 2023 Merch"]}
              vip
            />
          </div>
        </div>
      </div>
      <div className="Section" id="FAQ">
        <div className="SectionContent">
          <div className="CenterText">
            <Subtitle>Frequently Asked Questions</Subtitle>
            <p className="FaqHelpText">
              Can't find what you're looking for? Send us an email at{" "}
              <span className="Highlight">info@cusec.net</span>
            </p>
          </div>
          <FAQ faqs={FAQS} />
        </div>
      </div>
    </div>
  );
}

export default Home;
