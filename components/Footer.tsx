import React from "react";
import Container from "./Container";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import SimpleAnimation from "./animations/SimpleAnimation";
import { CtaType } from "@/types/common";

type Props = {
  linkedinCta: CtaType;
  githubCta: CtaType;
  copyright: string;
  createdBy: string;
};

const Footer = ({ linkedinCta, githubCta, copyright, createdBy }: Props) => {
  const year = new Date().getFullYear();
  return (
    <Container className="bg-matteBlack">
      <footer className="text-white flex items-center flex-col gap-4">
        <SimpleAnimation className="flex gap-8">
          <a
            aria-labelledby={linkedinCta.label}
            href={linkedinCta.link}
            target="_blank"
          >
            <BsLinkedin className="h-8 w-8 hover:animate-bounce" />
          </a>
          <a
            aria-labelledby={githubCta.label}
            href={linkedinCta.link}
            target="_blank"
          >
            <FaGithub className="h-8 w-8 hover:animate-bounce" />
          </a>
        </SimpleAnimation>
        <SimpleAnimation>
          <small>
            {copyright} &copy; {year} {createdBy}
          </small>
        </SimpleAnimation>
      </footer>
    </Container>
  );
};

export default Footer;
