"use client";
import Image from "next/image";
import React from "react";
import image from "../public/assets/jordi-roca.png";
import Container from "./Container";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";

const Introduction = () => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container ref={ref} className="h-screen bg-matteBlack text-white">
      <div className="flex flex-col justify-center items-center pt-20 lg:pt-10">
        <TextAnimation>
          <div className="flex flex-col text-center gap-2">
            <h3 className="text-lg">Hello I am </h3>
            <h1 className="text-5xl font-semibold">Jordi Roca</h1>
            <h3 className="text-2xl">Front end Developer </h3>
          </div>
        </TextAnimation>
        <div className="sm:w-1/2 lg:w-1/3 py-10">
          <SimpleAnimation>
            <Image
              className="rounded-full h-full w-full object-cover"
              src={image}
              alt="Jordi-Roca"
            />
          </SimpleAnimation>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
