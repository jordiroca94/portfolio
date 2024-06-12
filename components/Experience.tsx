"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import { Asset, CtaType } from "@/types/common";

type ExperienceType = {
  key: string;
  company: string;
  date: string;
  description: string;
  stack: string;
  logo: Asset;
  cta: CtaType;
};

type Props = {
  title: string;
  items: ExperienceType[];
  id: string;
};

const Experience = ({ title, items, id }: Props) => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container ref={ref} id={id} className="bg-matteBlack text-white">
      <TextAnimation>
        <h2 className="flex justify-center font-bold text-4xl lg:text-5xl">
          {title}
        </h2>
      </TextAnimation>
      <div className="flex flex-col lg:flex-row justify-center gap-20 pt-20">
        {items.map((item) => (
          <SimpleAnimation
            className="flex flex-col border border-white p-6 gap-y-2 rounded-lg lg:w-1/3 shadow-lg shadow-lightGray"
            key={item.key}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-lg aspect-[3/2] w-full object-cover"
              src={item.logo.src}
              alt={item.logo.alt}
              title={item.logo.alt}
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl font-semibold py-2">{item.company}</h3>
                <p className="text-lg font-light mb-2">{item.date}</p>
                <h4 className="mb-2">{item.description}</h4>
                <h5>{item.stack}</h5>
              </div>
              <div className="w-fit py-4">
                <Button
                  openNewTab
                  link={item.cta.link}
                  label={item.cta.label}
                />
              </div>
            </div>
          </SimpleAnimation>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
