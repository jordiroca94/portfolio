import React from "react";
import Container from "./Container";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="bg-matteBlack">
      <footer className="text-white flex items-center flex-col gap-4">
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/jordi-roca-soler/"
            target="_blank"
          >
            <BsLinkedin className="h-8 w-8" />
          </a>
          <a href="https://github.com/jordiroca94" target="_blank">
            <FaGithub className="h-8 w-8" />
          </a>
        </div>
        <div>
          <small>Copyright &copy; 2023 Jordi Roca</small>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
