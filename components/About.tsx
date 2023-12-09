import React from "react";
import Container from "./Container";
import Button from "./Button";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";

const About = () => {
  return (
    <Container id="about">
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
                className="text-center flex flex-col p-8 hover:bg-primary hover:text-white  rounded-lg transition-all duration-500 ease-in"
              >
                <h3 className="text-2xl font-semibold">Experience</h3>
                <h4 className="text-lg">+2 Years Experience</h4>
              </a>
            </SimpleAnimation>
          </div>
          <SimpleAnimation className="flex-1 flex flex-col items-center">
            <a href="#projects">
              <div className="text-center flex flex-col p-8 hover:bg-primary hover:text-white  rounded-lg transition-all duration-500 ease-in">
                <h3 className="text-2xl font-semibold">Projects</h3>
                <h4 className="text-lg ">Over 8 Clients</h4>
              </div>
            </a>
          </SimpleAnimation>
        </div>
        <SimpleAnimation className="flex justify-center">
          <div className="flex flex-col font-light items-center text-center lg:w-3/5 py-4 text-lg text-gray">
            <p>
              I am a front end developer with over 2 years of experience. I am
              currently working in{" "}
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
              As a front end developer I have strong skills in Javascript and
              Typescript, mastering some of its frameworks such as React and
              Angular. I also have skills building small APIS using Node.js &
              Mongo DB.
            </p>
            <br />
            <p>
              Besides my tech skills, I am a bouldering fanatic and I like to
              dive from time to time. I am very concerned about
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
            link="https://drive.google.com/file/d/1skL-RuwG7sPbYrbzf1bmoCHtBTW7E896/view?usp=sharing"
            label="Download CV"
          />
          <Button whiteBg link="#contact" label="Let s talk" />
        </SimpleAnimation>
      </div>
    </Container>
  );
};

export default About;
