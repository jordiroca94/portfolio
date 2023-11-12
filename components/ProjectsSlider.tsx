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

const ProjectsSlider = () => {
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
      linkImg: image1,
      link: "https://www.wikiparfum.com/en",
    },
    {
      title: "hp virtual booth",
      linkImg: image2,
      link: "https://largeformat.hp.com/uk",
    },
    {
      title: "klein",
      linkImg: image3,
      link: "https://www.klein.pro/en-uk",
    },
    {
      title: "clowid",
      linkImg: image4,
      link: "https://www.clowid.com/",
    },
    {
      title: "primavera sound",
      linkImg: image5,
      link: "https://www.primaverasound.com/en/",
    },
    {
      title: "scopely",
      linkImg: image6,
      link: "https://www.scopely.com/",
    },
  ];
  return (
    <Container id="projects" className="bg-white h-screen">
      <h2 className="font-bold text-5xl text-primary pb-10 flex justify-center">
        Projects
      </h2>
      <Slider className="sliderGaps" {...settings}>
        {dataSlider.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg cursor-pointer bg-lightGray/50"
          >
            <div className="w-full object-cover">
              <Image
                src={item.linkImg}
                className="rounded-lg aspect-[1.762/1] "
                alt="My Image"
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-light text-black uppercase mb-4">
                {item.title}
              </h3>
              <div className="w-fit">
                <Button
                  className="px-3 py-1"
                  whiteBg
                  openNewTab
                  link={item.link}
                  label="Live Demo"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ProjectsSlider;
