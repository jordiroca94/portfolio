"use client";
import React from "react";
import Container from "./Container";
import Armonia from "../public/assets/armonia.jpeg";
import SIR from "../public/assets/stillIRise.png";
import Image from "next/image";
import SimpleAnimation from "./animations/SimpleAnimation";
import TextAnimation from "./animations/TextAnimation";
import useColor from "@/hooks/useColor";
import { Asset, CtaType } from "@/types/common";

type HumanRightsType = {
  cta: CtaType;
  image: Asset;
};

type Props = {
  title: string;
  text: string[];
  items: HumanRightsType[];
  cta: CtaType;
  id: string;
};

const HumanRights = ({ title, text, items, cta, id }: Props) => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container ref={ref} id={id} className="bg-matteBlack">
      <div className="flex flex-col items-center justify-center">
        <TextAnimation className="flex justify-center">
          <h2 className="font-bold text-4xl lg:text-5xl text-white text-center">
            {title}
          </h2>
        </TextAnimation>
        <div className="lg:w-3/4 text-white py-10 text-base lg:text-lg">
          <TextAnimation>
            <p className="mb-4 text-justify">{text[0]}</p>
            <p className="text-justify">{text[1]}</p>
          </TextAnimation>
          <div className="flex flex-col md:flex-row gap-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-1 bg-white mt-10 ease-out duration-300 rounded-lg hover:opacity-80 "
              >
                <SimpleAnimation>
                  <a
                    aria-label={item.cta.label}
                    href={item.cta.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image.src}
                      className="rounded-lg aspect-[2/1] object-cover w-full h-full "
                      alt={item.image.alt}
                      title={item.image.alt}
                    />
                  </a>
                </SimpleAnimation>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href={cta.link} target="_blank" rel="noreferrer">
              <h3 className="flex justify-center text-white hover:underline text-center">
                {cta.label}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HumanRights;
