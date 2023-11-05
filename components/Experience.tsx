import React from "react";
import Container from "./Container";
import Image from "next/image";
import logoDallonses from "../public/assets/dallonsesLogo.jpeg";
import logoClowid from "../public/assets/clowIdLogo.png";

const Experience = () => {
  const jobExperiences = [
    {
      key: "1",
      company: "ClowID",
      date: "March to June 2022",
      description:
        "Front End development of ClowID web app (fintech swedish startup) using Agile methodology.",
      stack:
        "Front-end: HTML5 | SCSS | Tailwind | JavaScript (ES6) | TypeScript | Angular 12.",
      logo: logoClowid,
    },
    {
      key: "2",
      company: "Dallonses",
      date: "August 2022 - Currently",
      description: "Front End development of Dallonses",
      stack:
        "Front-end: HTML5 | SCSS | Tailwind | JavaScript (ES6) | TypeScript | Angular 12.",
      logo: logoDallonses,
    },
  ];
  return (
    <Container id="Experience" className="bg-matteBlack text-white h-screen">
      <h2 className="flex justify-center font-bold text-5xl">Experience</h2>
      <div className="flex justify-center gap-20 pt-20">
        {jobExperiences.map((item) => (
          <div
            className="flex flex-col border border-white p-6 gap-y-2 rounded-lg w-1/3"
            key={item.key}
          >
            <Image
              className="rounded-lg max-h-64 w-full object-cover"
              src={item.logo}
              alt="Jordi-Roca"
            />
            <h3 className="text-4xl text-bold pt-3">{item.company}</h3>
            <p>{item.date}</p>
            <h4>{item.description}</h4>
            <h5>{item.stack}</h5>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
