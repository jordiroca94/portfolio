"use client";
import React from "react";
import Container from "./Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import { Asset, CtaType, Literals } from "@/types/common";
import { sliderSettings } from "@/utils/slider";

type ProjectsType = {
  name: string;
  description: string;
  image: Asset;
  stack: string;
  ctaLiveDemo: CtaType;
  ctaGithub: CtaType;
  literals?: string;
};

type Props = {
  title: string;
  items: ProjectsType[];
  literals: Literals;
  id: string;
};

const Projects = ({ title, items, literals, id }: Props) => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container ref={ref} id={id} className="bg-white">
      <TextAnimation>
        <h2 className="font-bold text-4xl lg:text-5xl text-primary pb-10 flex justify-center">
          {title}
        </h2>
      </TextAnimation>
      <Slider className="sliderGaps" {...sliderSettings}>
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center py-3 sm:p-3"
          >
            <SimpleAnimation
              className="flex flex-col border border-white p-4 lg:p-6 gap-y-2 rounded-lg shadow-lg shadow-matteBlack"
              key="2"
            >
              <div className="w-full object-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image.src}
                  className="rounded-lg aspect-[1.5/1] object-cover w-full bg-black"
                  alt={item.image.alt}
                  title={item.image.alt}
                />
              </div>
              <div className="mt-2">
                <div className="h-48 2xl:h-40">
                  <h3 className="text-3xl font-semibold text-black mb-2">
                    {item.name}
                  </h3>
                  <p className="font-light pb-3">{item.description}</p>
                  <div className="flex items-center gap-2 pb-3">
                    <p className="font-light">
                      <strong>{literals.mainStack}</strong> {item.stack}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 pt-2">
                  <div className="w-full lg:w-fit">
                    <Button
                      className="px-3 py-1 text-center"
                      whiteBg
                      openNewTab
                      link={item.ctaGithub?.link}
                      label={item.ctaGithub?.label}
                    />
                  </div>
                  <div className="w-full lg:w-fit">
                    <Button
                      className="px-3 py-1 text-center"
                      whiteBg
                      openNewTab
                      link={item.ctaLiveDemo?.link}
                      label={item.ctaLiveDemo?.label}
                    />
                  </div>
                </div>
              </div>
            </SimpleAnimation>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Projects;
