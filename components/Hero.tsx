"use client";
import Image from "next/image";
import React from "react";
import image from "../public/assets/jordi-roca.png";
import Container from "./Container";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import KeyboardAnimation from "./animations/KeyboardAnimation";

const Hero = () => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container ref={ref} className="h-screen bg-matteBlack text-white">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center pt-20 lg:pt-32">
        <KeyboardAnimation
          className="text-3xl lg:text-6xl text-center lg:text-left"
          text={["Hello I'am", "Jordi Roca", "Software Developer"]}
          once
        />
        <div className="sm:w-1/2 lg:w-1/3 py-10">
          <SimpleAnimation>
            <Image
              className="rounded-full h-full w-full object-cover"
              src={image}
              alt="Jordi Roca"
            />
          </SimpleAnimation>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
