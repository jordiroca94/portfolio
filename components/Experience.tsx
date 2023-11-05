import React from "react";
import Container from "./Container";

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
      logo: "",
    },
    {
      key: "2",
      company: "Dallonses",
      date: "August 2022 - Currently",
      description: "Front End development of Dallonses",
      stack:
        "Front-end: HTML5 | SCSS | Tailwind | JavaScript (ES6) | TypeScript | Angular 12.",
      logo: "",
    },
  ];
  return (
    <Container className="bg-matteBlack text-white">
      <h2 className="flex justify-center font-bold text-4xl">Experience</h2>
      <div className="flex gap-4 pt-20">
        {jobExperiences.map((item) => (
          <div
            className="flex flex-col border border-white p-6 rounded-lg"
            key={item.key}
          >
            <h3 className="text-4xl text-bold">{item.company}</h3>
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
