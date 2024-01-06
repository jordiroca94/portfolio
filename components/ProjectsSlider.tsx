"use client";
import React from "react";
import Container from "./Container";
import image1 from "../public/assets/wikiparfum.jpeg";
import image2 from "../public/assets/hp.jpeg";
import image3 from "../public/assets/klein.jpeg";
import image4 from "../public/assets/clowid.jpeg";
import image5 from "../public/assets/primavera.png";
import image6 from "../public/assets/scopely.webp";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";

const ProjectsSlider = () => {
  const ref = useColor<HTMLDivElement>();

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

  const dataSlider = [
    {
      title: "wikiparfum ",
      description: "Digital library to search fragrances",
      linkImg: image1,
      stack: "React.js & Typescript",
      link: "https://www.wikiparfum.com/en",
    },
    {
      title: "Hp virtual booth",
      description: "HP large format printers and plotters",
      linkImg: image2,
      stack: "React.js & Typescript",
      link: "https://largeformat.hp.com/uk",
    },
    {
      title: "Clowid",
      description: "Digital management receipts and analytics.",
      linkImg: image4,
      stack: "Angular & Typescript",
      link: "https://www.clowid.com/",
    },
    {
      title: "Klein",
      description: "Ecommerce specialized in door's design",
      linkImg: image3,
      stack: "React.js & Typescript",
      link: "https://www.klein.pro/en-uk",
    },
    {
      title: "Primavera Sound",
      description: "Music festival",
      linkImg: image5,
      stack: "React.js & Typescript",
      link: "https://www.primaverasound.com/en/",
    },
    {
      title: "Scopely",
      description: "Mobile game development & editing",
      linkImg: image6,
      stack: "React.js & Typescript",
      link: "https://www.scopely.com/",
    },
  ];
  return (
    <Container ref={ref} id="projects" className="bg-white lg:py-32 py-20">
      <TextAnimation>
        <h2 className="font-bold text-4xl lg:text-5xl text-primary pb-10 flex justify-center">
          Projects
        </h2>
      </TextAnimation>
      <SimpleAnimation>
        <Slider className="sliderGaps " {...settings}>
          {dataSlider.map((item, index) => (
            <div
              key={index}
              className="rounded-lg cursor-pointer bg-lightGray/50"
            >
              <div className="w-full object-cover">
                <Image
                  src={item.linkImg}
                  className="rounded-lg aspect-[1.762/1] "
                  alt={item.title}
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
                    link={item.link}
                    label="Clients website"
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
