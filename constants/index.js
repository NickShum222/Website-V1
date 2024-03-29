import { BsGithub, BsLinkedin, BsInstagram, BsSpotify } from "react-icons/bs";

export const projectCards = [
  {
    id: "/spotitrack.png",
    title: "SpotiTrack",
    description:
      "A web application that allows users to track their Spotify listening history and statistics.",
    tools: ["Express", "Node.js", "Next.js", "TailwindCSS"],
    git: "https://github.com/NickShum222/Spotify-Tracker",
    url: "/projects/SpotiTrack",
  },
  {
    id: "/hero_website.png",
    title: "Personal Website",
    description:
      "A website portfolio used to showcase my projects and experiences. Built with Next.js, TailwindCSS, designed in Figma. ",

    tools: ["React", "Next.js", "TailwindCSS", "Figma"],
    git: "https://github.com/NickShum222/Website-Portfolio",
    url: "https://www.nickshum.ca/",
  },
  {
    id: "/spaceinvaders.png",
    title: "Space Invaders",
    description:
      "A clone of the classic arcade game Space Invaders. Built with Java, utilizing Object-Oriented Programming principles.",
    tools: ["Java", "Inheritance", "Polymorphism"],

    git: "https://github.com/NickShum222/SpaceInvaders",
    url: "https://www.greenfoot.org/scenarios/30858",
  },
];

export const experienceCards = [
  {
    id: "citechnologies",
    title: "CI Technologies",
    position: "Full Stack Developer",
    description:
      "Designed and developed multiple web features for the company’s flagship product, improving user experience and increasing customer satisfaction. ",
    date: "Sept 2023 - Dec 2023",
    img: "/citechnologies.svg",
  },
  {
    id: "ellisdon",
    title: "EllisDon",
    position: "Quality Assurance Analyst",
    description:
      "Utilized Jira for project management, improving team collaboration and project completion rates, tested and promoted software tools for increased efficiency and productivity across the company.",
    date: "Jan 2023 - Apr 2023",
    img: "/ellisdon.svg",
  },
  // {
  //   id: "hattendo",
  //   title: "Hattendo",
  //   position: "Kitchen Staff",
  //   description: "Prepared and baked high-quality cream buns and baked Japanese goods, while adhering to food safety and cleanliness standards.",
  //   date: "Oct 2021 - May 2022",
  //   img: "/hattendo.svg",

  // },
  // {
  //   id: "isci",
  //   title: "iSci Peer Tutoring",
  //   position: "Volunteer Tutor",
  //   description: "Provided personalized one-on-one tutoring in math and science, utilizing various teaching strategies and tracking student progress to achieve academic improvement while fostering a positive and supportive learning environment.",
  //   date: "Sept 2021 - June 2022",
  //   img: "/isci.svg",
  // },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    id: "github",
    title: "Github",
    url: "https://github.com/NickShum222",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nick-shum/",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/nick.shum_/",
  },
  {
    id: "spotify",
    title: "Spotify",
    url: "",
  },
];
