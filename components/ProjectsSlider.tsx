"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import { Asset, CtaType } from "@/types/common";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

type ProjectsType = {
  title: string;
  description: string;
  image: Asset;
  stack: string;
  cta: CtaType;
};

type Props = { title: string; items: ProjectsType[] };

const ProjectsSlider = ({ title, items }: Props) => {
  const ref = useColor<HTMLDivElement>();

  return (
    <Container ref={ref} id="projects" className="bg-white lg:py-32 py-20">
      <TextAnimation>
        <h2 className="font-bold text-4xl lg:text-5xl text-primary pb-10 flex justify-center">
          {title}
        </h2>
      </TextAnimation>
      <SimpleAnimation>
        <Slider className="sliderGaps " {...settings}>
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg cursor-pointer bg-lightGray/50"
            >
              <div className="w-full object-cover">
                <Image
                  src={item.image.src}
                  className="rounded-lg aspect-[1.762/1] "
                  alt={item.image.alt}
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-light text-black uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-lg font-light pt-2 pb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 pb-3">
                  <h6 className="font-semibold text-lg">Main Stack:</h6>
                  <p className="text-lg font-light">{item.stack}</p>
                </div>
                <div className="w-fit">
                  <Button
                    className="px-3 py-1"
                    whiteBg
                    openNewTab
                    link={item.cta.link}
                    label={item.cta.label}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </SimpleAnimation>
    </Container>
  );
};

export default ProjectsSlider;
