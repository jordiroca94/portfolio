import HeroImage from "../public/assets/jordi-roca.png";

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
  literals: {
    and: "and",
  },
};

export default data;
