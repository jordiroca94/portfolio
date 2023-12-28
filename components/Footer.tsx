import React from "react";
import Container from "./Container";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import SimpleAnimation from "./animations/SimpleAnimation";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container className="bg-matteBlack">
      <footer className="text-white flex items-center flex-col gap-4">
        <SimpleAnimation className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/jordi-roca-soler/"
            target="_blank"
          >
            <BsLinkedin className="h-8 w-8 hover:animate-bounce" />
          </a>
          <a href="https://github.com/jordiroca94" target="_blank">
            <FaGithub className="h-8 w-8 hover:animate-bounce" />
          </a>
        </SimpleAnimation>
        <SimpleAnimation>
          <small>Copyright &copy; {year} Jordi Roca</small>
        </SimpleAnimation>
      </footer>
    </Container>
  );
};

export default Footer;
