"use client";
import React from "react";
import Container from "./Container";
import Button from "./Button";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import CountUp from "react-countup";
const About = () => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container className="bg-white" ref={ref} id="about">
      <div className="flex flex-col items-center justify-center">
        <TextAnimation className="flex justify-center">
          <h2 className="font-bold text-4xl lg:text-5xl text-primary">
            About Me
          </h2>
        </TextAnimation>
        <div className="flex lg:w-2/3 pt-4">
          <div className="flex-1 flex flex-col items-center">
            <SimpleAnimation>
              <a
                href="#experience"
                className="text-center flex flex-col p-8 hover:bg-primary group hover:text-white  rounded-lg transition-all duration-500 ease-in"
              >
                <h3 className="text-2xl group-hover:text-white font-semibold">
                  Experience
                </h3>
                <div className="flex gap-2 text-lg text-primary group-hover:text-white pt-2">
                  <span>+</span>
                  <CountUp
                    delay={2}
                    enableScrollSpy
                    duration={5}
                    start={0}
                    end={2}
                  />
                  <p>Years</p>
                </div>
              </a>
            </SimpleAnimation>
          </div>
          <SimpleAnimation className="flex-1 flex flex-col items-center">
            <a href="#projects">
              <div className="text-center flex flex-col p-8 hover:bg-primary group hover:text-white  rounded-lg transition-all duration-500 ease-in">
                <h3 className="text-2xl font-semibold group-hover:text-white">
                  Projects
                </h3>
                <div className="flex gap-2 text-lg text-primary group-hover:text-white pt-2">
                  <span>Over</span>
                  <CountUp
                    className="text-lg"
                    delay={2}
                    enableScrollSpy
                    duration={5}
                    start={0}
                    end={8}
                  />
                  <p> Clients</p>
                </div>
              </div>
            </a>
          </SimpleAnimation>
        </div>
        <SimpleAnimation className="flex justify-center">
          <div className="flex flex-col font-light items-center text-center lg:w-3/5 py-4 text-base lg:text-lg text-gray">
            <p>
              {
                "I'm a software developer with over 2 years of experience. Currently working in"
              }{" "}
              <a
                className="text-primary font-semibold hover:font-bold "
                href={"#experience"}
              >
                {" "}
                Dallonses
              </a>{" "}
              as a front end developer
            </p>
            <br />
            <p>
              I have social and creative skills as well as a wide perspective to
              see the picture. I value teamwork and the chance to innovate and
              be creative.
            </p>
            <br />
            <p>
              As a front end developer I have strong skills in{" "}
              <a className="text-primary font-semibold "> Javascript</a> and
              <a className="text-primary font-semibold "> Typescript</a>,
              mastering some of its libraries and frameworks such as{" "}
              <a className="text-primary font-semibold "> React</a> and{" "}
              <a className="text-primary font-semibold "> Angular</a>. I also
              have skills building small APIS using Node.js & Mongo DB.
            </p>
            <br />
            <p>
              {
                "Besides my tech skills, I'm a bouldering fanatic and I like to dive from time to time. I'm very concerned about"
              }
              <a
                className="text-primary font-semibold hover:font-bold "
                href={"#humanRights"}
              >
                {" "}
                human rights
              </a>
            </p>
          </div>
        </SimpleAnimation>
        <SimpleAnimation className="mt-8 flex gap-6">
          <Button
            whiteBg
            openNewTab
            link="https://drive.google.com/file/d/1iARgV-gOGbpgEJ8macYSdsyMUS6BhbsA/view?usp=sharing"
            label="Download CV"
          />
          <Button whiteBg link="#contact" label="Let s talk" />
        </SimpleAnimation>
      </div>
    </Container>
  );
};

export default About;
