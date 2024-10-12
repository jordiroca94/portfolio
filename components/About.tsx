"use client";
import React from "react";
import Container from "./Container";
import Button from "./Button";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import CountUp from "react-countup";
import { CtaType, Literals } from "@/types/common";
import { yearsPassedSince } from "@/utils/yearsPassedSince";

type CountUpType = {
  title: string;
  pretitle: string;
  amount?: number;
  unit: string;
};

type CountUpTypeWrapper = {
  experience: CountUpType;
  projects: CountUpType;
};

type Props = {
  title: string;
  countUp: CountUpTypeWrapper;
  description: string[];
  companyCta: CtaType;
  humanRightsCta: CtaType;
  downloadCta: CtaType;
  contactCta: CtaType;
  literals: Literals;
  id: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    humanRights: string;
  };
};
const About = ({
  title,
  countUp,
  description,
  companyCta,
  humanRightsCta,
  downloadCta,
  contactCta,
  literals,
  id,
}: Props) => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container className="bg-white" ref={ref} id={id.about}>
      <div className="flex flex-col items-center justify-center">
        <TextAnimation className="flex justify-center">
          <h2 className="font-bold text-4xl lg:text-5xl text-primary pb-2">
            {title}
          </h2>
        </TextAnimation>
        <div className="flex lg:w-2/3 pt-4">
          <div className="flex-1 flex flex-col items-center">
            <SimpleAnimation>
              <a
                aria-labelledby={countUp.experience.title}
                href={`#${id.experience}`}
                className="text-center flex flex-col p-8 hover:bg-primary group hover:text-white  rounded-lg transition-all duration-500 ease-in"
              >
                <h3 className="text-2xl group-hover:text-white font-semibold">
                  {countUp.experience.title}
                </h3>
                <div className="flex justify-center gap-2 text-primary group-hover:text-white pt-2">
                  <span>{countUp.experience.pretitle}</span>
                  <CountUp
                    delay={2}
                    enableScrollSpy
                    duration={5}
                    start={0}
                    end={Number(yearsPassedSince("2021-10-01"))}
                  />
                  <p>{countUp.experience.unit}</p>
                </div>
              </a>
            </SimpleAnimation>
          </div>
          <SimpleAnimation className="flex-1 flex flex-col items-center">
            <a
              aria-labelledby={countUp.projects.title}
              href={`#${id.projects}`}
            >
              <div className="text-center flex flex-col p-8 hover:bg-primary group hover:text-white  rounded-lg transition-all duration-500 ease-in">
                <h3 className="text-2xl font-semibold group-hover:text-white">
                  {countUp.projects.title}
                </h3>
                <div className="flex gap-2 text-primary group-hover:text-white pt-2">
                  <span>{countUp.projects.pretitle}</span>
                  <CountUp
                    delay={2}
                    enableScrollSpy
                    duration={5}
                    start={0}
                    end={countUp.projects.amount!}
                  />
                  <p>{countUp.projects.unit}</p>
                </div>
              </div>
            </a>
          </SimpleAnimation>
        </div>
        <SimpleAnimation className="flex justify-center">
          <div className="flex flex-col items-center text-center lg:w-3/5 py-4 text-base text-gray">
            <p>
              {description[0]} {yearsPassedSince("2021-10-01")} {description[1]}
              <a
                aria-labelledby={companyCta.label}
                className="text-primary font-semibold hover:border-b-2 hover:border-primary"
                href={companyCta.link}
              >
                {companyCta.label}
              </a>
            </p>
            <br />
            <p>{description[2]}</p>
            <br />
            <p>
              {description[3]}
              <strong className="text-primary font-semibold ">
                {description[4]}
              </strong>
              {literals.and}
              <strong className="text-primary font-semibold ">
                {description[5]}
              </strong>
              {description[6]}
              <strong className="text-primary font-semibold ">
                {description[7]}
              </strong>
              {literals.and}
              <strong className="text-primary font-semibold ">
                {description[8]}
              </strong>
              {description[9]}
            </p>
            <br />
            <p>
              {description[10]}
              <a
                className="text-primary font-semibold hover:border-b-2 hover:border-primary"
                href={humanRightsCta.link}
              >
                {humanRightsCta.label}
              </a>
            </p>
          </div>
        </SimpleAnimation>
        <SimpleAnimation className="mt-8 flex gap-6">
          <Button
            whiteBg
            openNewTab
            link={downloadCta.link}
            label={downloadCta.label}
          />
          <Button whiteBg link={contactCta.link} label={contactCta.label} />
        </SimpleAnimation>
      </div>
    </Container>
  );
};

export default About;
