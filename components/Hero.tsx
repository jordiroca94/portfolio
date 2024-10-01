"use client";
import React from "react";
import Container from "./Container";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import KeyboardAnimation from "./animations/KeyboardAnimation";
import { Asset, CtaType } from "@/types/common";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type Props = {
  text: string | string[];
  image: Asset;
  linkedinCta: CtaType;
  githubCta: CtaType;
};

const Hero = ({ text, image, linkedinCta, githubCta }: Props) => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container ref={ref} className="lg:h-screen bg-matteBlack text-white">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center pt-20 lg:pt-32">
        <KeyboardAnimation
          className="text-3xl lg:text-6xl text-center lg:text-left"
          text={text}
          once
        />
        <div className="sm:w-1/2 lg:w-1/3 my-10 relative group">
          <div className="absolute hidden lg:group-hover:block z-40 top-1/2 left-1/2 transform duration-500 -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-4">
              <a
                aria-label={linkedinCta.label}
                href={linkedinCta.link}
                target="_blank"
                className="p-3 border border-white rounded-full"
              >
                <FaLinkedinIn className="h-8 w-8" />
              </a>
              <a
                aria-label={githubCta.label}
                href={githubCta.link}
                target="_blank"
                className="p-3 border border-white rounded-full"
              >
                <FaGithub className="h-8 w-8" />
              </a>
            </div>
          </div>
          <SimpleAnimation className="lg:group-hover:blur-sm transform duration-500">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="aspect-square rounded-full h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
              title={image.alt}

            />
          </SimpleAnimation>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
