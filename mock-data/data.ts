import HeroImage from "../public/assets/jordi-roca.png";
import ExperienceImage1 from "../public/assets/clowIdLogo.png";
import ExperienceImage2 from "../public/assets/dallonsesLogo.jpeg";
import ProjectsImage1 from "../public/assets/wikiparfum.jpeg";
import ProjectsImage2 from "../public/assets/hp.jpeg";
import ProjectsImage3 from "../public/assets/klein.jpeg";
import ProjectsImage4 from "../public/assets/clowid.jpeg";
import ProjectsImage5 from "../public/assets/primavera.png";
import ProjectsImage6 from "../public/assets/scopely.webp";

const data = {
  header: {
    navlinks: ["About", "Experience", "Projects", "Contact"],
    logo: "Jordi Roca",
  },

  hero: {
    text: ["Hello I'm", "Jordi Roca", "Software Developer"],
    image: { src: HeroImage, alt: "Jordi Roca" },
  },
  about: {
    title: "About Me",
    countUp: {
      experience: {
        title: "Experience",
        pretitle: "+",
        amount: 2,
        unit: "Years",
      },
      projects: {
        title: "Projects",
        pretitle: "Over",
        amount: 8,
        unit: "Clients",
      },
    },
    description: [
      "I'm a software developer with over 2 years of experience. Currently working in  ",
      " as a front end developer.",
      "I have social and creative skills as well as a wide perspective to see the picture. I value teamwork and the chance to innovate and be creative.",
      "As a front end developer I have strong skills in ",
      "Javascript ",
      " Typescript",
      ", mastering some of its libraries and frameworks such as ",
      " React ",
      " Angular",
      ". I also have skills building small APIS using Node.js & Mongo DB.",
      "Besides my tech skills, I'm a bouldering fanatic and I like to dive from time to time. I'm very concerned about ",
    ],
    companyCta: {
      label: "Dallonses",
      link: "#experience",
    },
    humanRightsCta: {
      label: " human rights",
      link: "#humanRights",
    },
    downloadCta: {
      label: "Download CV",
      link: "https://drive.google.com/file/d/13F_ov_2JtIaj5nJ_Qrm6F3R9s-jfHU2q/view?usp=sharing",
    },
    contactCta: {
      label: "Let s talk",
      link: "#contact",
    },
  },
  experience: {
    title: "Experience",
    items: [
      {
        key: "1",
        company: "ClowID",
        date: "March to June 2022",
        description:
          "Developing the graphical user interface of ClowID web app ( swedish fintech). ",
        stack: "STACK: JavaScript (ES6) | TypeScript | Angular 12 | Tailwind",
        logo: { src: ExperienceImage1, alt: "ClowID" },
        link: "https://www.clowid.com",
      },
      {
        key: "2",
        company: "Dallonses",
        date: "August 2022 - Currently",
        description:
          "Front end developer in diferent projects using AGILE methodology",
        stack:
          "STACK: Javascript(ES6) | TypeScript | React.js  | Next.js | Tailwind",
        logo: { src: ExperienceImage2, alt: "Dallonses" },
        link: "https://www.dallonses.com",
      },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "Wikiparfum ",
        description: "Digital library to search fragrances",
        image: { src: ProjectsImage1, alt: "Wikiparfum" },
        stack: "React.js & Typescript",
        cta: {
          label: "Clients website",
          link: "https://www.wikiparfum.com/en",
        },
      },
      {
        title: "Hp virtual booth",
        description: "HP large format printers and plotters",
        image: { src: ProjectsImage2, alt: "Hp virtual booth" },
        stack: "React.js & Typescript",
        cta: {
          label: "Clients website",
          link: "https://largeformat.hp.com/uk",
        },
      },
      {
        title: "Clowid",
        description: "Digital management receipts and analytics.",
        image: { src: ProjectsImage3, alt: "Clowid" },
        stack: "Angular & Typescript",
        cta: { label: "Clients website", link: "https://www.clowid.com/" },
      },
      {
        title: "Klein",
        description: "Ecommerce specialized in door's design",
        image: { src: ProjectsImage4, alt: "Klein" },
        stack: "React.js & Typescript",
        cta: { label: "Clients website", link: "https://www.klein.pro/en-uk" },
      },
      {
        title: "Primavera Sound",
        description: "Music festival",
        image: { src: ProjectsImage5, alt: "Primavera Sound" },
        stack: "React.js & Typescript",
        cta: {
          label: "Clients website",
          link: "https://www.primaverasound.com/en/",
        },
      },
      {
        title: "Scopely",
        description: "Mobile game development & editing",
        image: { src: ProjectsImage6, alt: "Scopely" },
        stack: "React.js & Typescript",
        cta: { label: "Clients website", link: "https://www.scopely.com/" },
      },
    ],
  },

  literals: {
    and: "and",
  },
};

export default data;
