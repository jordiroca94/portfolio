"use client";
import Image from "next/image";
import React from "react";
import image from "../public/assets/jordi-roca.png";
import Button from "./Button";

const Introduction = () => {
  return (
    <div className="h-screen pt-40 bg-matteBlack text-white ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col text-center gap-2">
          <h2 className="text-2xl">Hello I'm </h2>
          <h1 className="text-3xl font-semibold">Jordi Roca</h1>
        </div>
        <div className="py-4 flex gap-4">
          <Button download link="" label="Download CV" />
          <Button link="" label="Let's talk" />
        </div>
        <div className="w-1/3 py-10">
          <Image className="rounded-full" src={image} alt="Jordi-Roca" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
