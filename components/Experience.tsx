import React from "react";
import Container from "./Container";
import Image from "next/image";
import logoDallonses from "../public/assets/dallonsesLogo.jpeg";
import logoClowid from "../public/assets/clowIdLogo.png";
import Button from "./Button";

const Experience = () => {
  const jobExperiences = [
    {
      key: "1",
      company: "ClowID",
      date: "March to June 2022",
      description:
        "Front End development of ClowID web app (fintech swedish startup) using Agile methodology.",
      stack: "Front-end: JavaScript (ES6) | TypeScript | Angular 12 & Tailwind",
      logo: logoClowid,
      link: "https://www.clowid.com",
    },
    {
      key: "2",
      company: "Dallonses",
      date: "August 2022 - Currently",
      description: "Front End development of Dallonses",
      stack:
        "Front-end: Javascript(ES6) | TypeScript | React.js  | Next.js & Tailwind",
      logo: logoDallonses,
      link: "https://www.dallonses.com",
    },
  ];
  return (
    <Container id="experience" className="bg-matteBlack text-white">
      <h2 className="flex justify-center font-bold text-5xl">Experience</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-20 pt-20">
        {jobExperiences.map((item) => (
          <div
            className="flex flex-col border border-white p-6 gap-y-2 rounded-lg lg:w-1/3"
            key={item.key}
          >
            <Image
              className="rounded-lg max-h-64 w-full object-cover"
              src={item.logo}
              alt="Jordi-Roca"
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl font-semibold py-2">{item.company}</h3>
                <p className="text-lg font-light mb-2">{item.date}</p>
                <h4 className="mb-2">{item.description}</h4>
                <h5>{item.stack}</h5>
              </div>
              <div className="w-fit py-4">
                <Button openNewTab link={item.link} label="Website" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
