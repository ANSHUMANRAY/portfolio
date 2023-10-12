import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mckinseyCompany,
  kiit,
  carrent,
  jobit,
  tripguide,
  cms1,
  cms2,
  cms3,
  cms4,
  sp1,
  sp2,
  sp3,
  sp4,
  sp5,
  sp6,
  sp7,
  ecom,
  kubernetes,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "McKinsey & Company",
    icon: mckinseyCompany,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed a dashboard web app using Agile methodologies, git & github.",
      "Implemented data filters using React.js, Redux & SCSS",
      "Conducted Bug fixing activities, significantly improving performance of the web app.",
      "Created unit test cases using Jest & React Testing Library.",
      "Created api documentation using swagger"
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company_name: "Kareer School",
    icon: kiit,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Developed a simple library management system using HTML, CSS & JavaScript",
      "Developed Authorization & Authentication API using Node.js, Express, JWT, MongoDB",
      "Trained in Linux & Networking and Bash Shell Scripting as part of curriculum",
    ],
  }
];

const projects = [
  {
    name: "Ecommerce",
    description:
      "",
    tags: [
      {
        name: "Microservices",
        color: "blue-text-gradient",
      },
      {
        name: "Kafka",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: [ecom],
    numOfPics: 1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sprint Planner",
    description:
      "",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: [sp1, sp2, sp3, sp4, sp5, sp6, sp7],
    numOfPics: 7,
    source_code_link: "https://github.com/",
  },
  {
    name: "CMS+",
    description:
      "",
    tags: [
      {
        name: "Rest API",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: [cms1, cms2, cms3, cms4],
    numOfPics: 4,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
