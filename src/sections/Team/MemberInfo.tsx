import { UniYear, CusecExec } from "../../types";

type CusecTeam = {
  name: string;
  members: CusecExec[];
};

export const chairs: CusecTeam = {
  name: "Chairs",
  members: [
    {
      name: "Charmaine Yung",
      uni: "University of Toronto",
      year: UniYear.Fifth,
      major: "Computer Science",
      quote:
        "I have a Google Maps list of food places to try. I have over 200 places but they're mostly on the east coast which is a problem. Please approach me at the conference (or DM me) and hit me with your favourite restaurants from your city!",
      fact: "I do fencing with lightsabers (it's an officially recognized weapon of the French Fencing Federation!) on Thursdays",
    },
    {
      name: "David Chen",
      uni: "Carleton University",
      year: UniYear.Third,
      major: "Computer Science",
      quote:
        "Hey everyone! I'm David. I like to boulder, watch anime, practice Muay Thai, and am currently learning Japanese. I also love bubble tea so if you're in the Ottawa area, I'd love to meet up. In the meantime, DM me any anime recommendations you have :) ",
      fact: "My project in my AI course is going to be finding the best strategy for the killers in Among Us ",
    },
  ],
};

export const logistics: CusecTeam = {
  name: "Logistics Team",
  members: [
    {
      name: "Denys Popov",
      uni: "University of Manitoba",
      year: UniYear.Forth,
      major: "Computer Science",
      quote:
        "Hello everyone, this is going to be my second CUSEC and the first one in-person. I am a 4th year computer science student at University of Manitoba. I absolutely love basketball, boxing, playing the guitar, biking and, of course, coding.",
      fact: "Too difficult. No fun. No facts.",
    },
    {
      name: "Sarah Veloso",
      uni: "University of Manitoba",
      year: UniYear.Second,
      major: "Computer Science and Psychology",
      quote:
        "Hello! My name is Sarah. I love trying new things and meeting new people! Just this year, I fished for the very first time, I learned to play the trombone, and I met someone who bore a striking resemblance to bbno$.",
      fact: "I play Call of Duty with bots set to rookie level.",
    },
  ],
};

export const sponsorship: CusecTeam = {
  name: "Sponsorship Team",
  members: [
    {
      name: "Kha Pham",
      uni: "University of Manitoba",
      year: UniYear.Third,
      major: "Computer Science",
      quote:
        "Procrastination: I wanted to do work, but y PC said League. - Kha Pham, League Addict, Flautist, Music Arranger, Photographer, PC Master Race-er, Computer Scientist, Potentially Crazy Man. Erm. Not in that order.",
      fact: "I’ve arranged a piece of music that has won awards at a performance show.",
    },
  ],
};

export const speakers: CusecTeam = {
  name: "Speakers Team",
  members: [
    {
      name: "Camila Martínez Ovando",
      uni: "University of Manitoba",
      year: UniYear.Second,
      major: "Computer Science",
      quote:
        "Hey everyone :) My name is Camila and I'm from Bolivia. I'm majoring in Computer Science as I believe that with a computer and lots of creativity, you can do wonders in this world! I enjoy going to the gym and preparing coffee as a barista. I'm looking forward to meeting all of you!",
      fact: "I eat oatmeal every day and never get tired of it (is too perfect!!)",
    },
    {
      name: "Lyka M. Sal-long",
      uni: "University of Manitoba",
      year: UniYear.Third,
      major: "Computer Science",
      quote:
        "I am a 3rd+ year computer science student who likes to join drum circles and take photos of the sky. I live by my personal life framework which is to Learn, Yearn, Know, And (many more).",
      fact: "I have a small aquarium of guppies on my study desk",
    },
  ],
};

export const technology: CusecTeam = {
  name: "Technology Team",
  members: [
    {
      name: "Abdul-Hakim Skaik",
      uni: "Concordia University",
      year: UniYear.Second,
      major: "Software Engineering",
      quote:
        "Hello everyone! Im excited to join CUSEC this year as the head delegate of Concordia! I also helped in developing CUSEC 2023 website! I love coding, I love meeting people, and I love exploring, if we have any of these three in common, feel free to connect with me on LinkedIn!",
      fact: "I don't sleep without tiktok",
    },
    {
      name: "Danielle D'Souza",
      uni: "University of Waterloo",
      year: UniYear.Third,
      major: "Computer Science",
      quote:
        "Hey! My name is Danielle, and I'm just a girl in love with dance and code - lots of it! School, work, and dance take up most of my hours, but in my free time you can catch me hiking, watching anime, or pulling irresponsible all-nighters with my friends on campus!",
      fact: "I'm part of a competitive university hip hop dance team.",
    },
    {
      name: "Melissa Lin",
      uni: "Stony Brook University",
      year: UniYear.Forth,
      major: "Psychology",
      quote:
        "I love sushi, cats, and fashion. Some of my other hobbies is playing Valorant with friends, building keyboards, or working on cool design projects!",
      fact: "My teacher's chicken jumped and sat on my shoulder once",
    },
  ],
};

export const events: CusecTeam = {
  name: "Events Team",
  members: [
    {
      name: "Jaelyn Wickramarachchi",
      uni: "University of Manitoba ",
      year: UniYear.Second,
      major: "Computer Science ",
      quote:
        "Hi, I am Jaelyn and I’m currently a first/second year student in Computer Science. I’m so excited to be your director of events for CUSEC’23. I absolutely love reading, Marvel, Harry Potter and NBA! I can’t wait to see you all in CUSEC’23 and give you an amazing experience!",
      fact: "I know the entire one direction discography.",
    },
  ],
};

export const promotions: CusecTeam = {
  name: "Promotions Team",
  members: [
    {
      name: "Jordon Hong",
      uni: "University of Manitoba",
      year: UniYear.Second,
      major: "Computer Science",
      quote:
        "Hey everybody! I'm Jordon (sounds like Jordan), your friendly neighbourhood promo director. I'm a second year at the University of Manitoba majoring in computer science and minoring in linguistics. I love D&D, Netflix, and listening to music (especially indie, R&B, and kpop). Second time delegate, first time organizer, so I'm very excited to meet new people. If you see me in at the venue and want to chat about music, code, whatever, don't be shy say hi!",
      fact: "I have a Duolingo streak of 272 in Mandarin and Korean (as of Sept 29) but can barely speak either lol",
    },
    {
      name: "Marriane Jane Angga",
      uni: "Sheridan College",
      year: UniYear.Second,
      major: "Interaction Design",
      quote:
        "Hi, my name is Marriane and I'm the promotion's designer for CUSEC 2023. I'm currently a 2nd year Interaction Design at Sheridan and I'm passionate about creating interactive experiences.",
      fact: "I started up a vintage store",
    },
  ],
};

export const headDelegates: CusecTeam = {
  name: "Head Delegates",
  members: [
    {
      name: "Anjali Patel",
      uni: "Carleton University",
      year: UniYear.Third,
      major: "Computer Science",
      quote:
        "Hello! I'm Anjali Patel. My keen interests are Cyber Security and Web development. Being the Head Delegate of Carleton, I wish to promote and provide the opportunity to learn and connect with professionals. Besides this, I am engaged with a lot of clubs at Carleton like the Google Dev Student Club and love binge-watching Kdramas and K-pop videos.",
      fact: "I write Crime Mystery books on the XYZ platform (sorry, cannot reveal my pen name 😶)",
    },
    {
      name: "Ara Nicole Santos",
      uni: "University of Manitoba",
      year: UniYear.Second,
      major: "Computer Science",
      quote:
        "Hi everyone, I’m Ara! I’m the Head Delegate for University of Manitoba. I’m so excited to be a part of CUSEC 2023 as this is my first time joining and attending it! My hobbies include reading books and listening to music, especially indie pop. I LOVE to eat chocolate chip cookies and drink bubble tea!",
      fact: "! was born with a tooth",
    },
    {
      name: "Kevin Liang",
      uni: "McGill University",
      year: UniYear.Forth,
      major: "Statistics",
      quote:
        "Hi everyone! My name is Kevin. This is my first year on the team and I can't wait to see what's gonna happen with the conference in winter! Besides school, I love playing tennis, swimming, baking, exploring places... I am passionate about UIUX Design and hopefully I will be transitioning into a Product Designer after graduation!",
      fact: "I cook chinese dish at home all the time but never order chinese dishes at restaurants",
    },
    {
      name: "Kisenge Mbaga",
      uni: "University of New Brunswick",
      year: UniYear.Forth,
      major: "Software Engineering",
      quote:
        "Salutations. My name is Kisenge and I am a fourth-year student at the University of New Brunswick. I enjoy being active, reading and creating art in my free time. This will be my third time attending CUSEC and I am greatly excited to connect with people in person again. ",
      fact: "I can kind of moonwalk.",
    },
    {
      name: "Mohammad Zafar",
      uni: "University of Regina",
      year: UniYear.Second,
      major: "Software Engineering",
      quote:
        "Hey! My name is Mohammad and I'm in my second year of Software Engineering at the University of Regina. I will also be representing Regina as Head Delegate! I love messing around with carpentry and graphic design. See you at CUSEC!",
      fact: "I can speak 4 languages",
    },
    {
      name: "Yashpreet Singh",
      uni: "University of Calgary",
      year: UniYear.Third,
      major: "Elecrical Engineering",
      quote:
        "Hello everyone, I am in my third year of Electrical engineering (Computer Minor) at the University of Calgary. I love being involved within the campus community and am excited to take on this role as HD for CUSEC. In my past time, I like watching motorsports (Formula 1) and playing squash or just going out for a run!",
      fact: "I fractured my elbow on new years (12 years ago)",
    },
    {
      name: "Yasin Elmi",
      uni: "University of Ottawa",
      year: UniYear.Third,
      major: "Computer Science",
      quote:
        "Hello my name is Yasin Elmi, and I work part-time for the University of Ottawa as an engineering mentor. I love to learn and interact with others as well as playing video games, basketball and volleyball. I can't wait to meet and learn from so many people at CUSEC 2023!",
      fact: "I lived in africa for 5 years of my life",
    },
  ],
};
