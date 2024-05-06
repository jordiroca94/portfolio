import React from "react";
import SimpleAnimation from "./animations/SimpleAnimation";
import { LatestProjectType } from "./ProjectsSlider";
import Button from "./Button";

const LatestProject = ({
  title,
  name,
  description,
  image,
  stack,
  ctaLiveDemo,
  ctaGithub,
  literals,
}: LatestProjectType) => {
  return (
    <div className="flex flex-col items-center pt-10 lg:pt-20">
      <h2 className="font-bold text-4xl lg:text-5xl text-primary mt-8 lg:mt-0 pb-10 flex justify-center">
        {title}
      </h2>
      <SimpleAnimation
        className="flex flex-col border border-white p-6 gap-y-2 rounded-lg shadow-lg shadow-black max-w-[500px] 2xl:max-w-[650px] "
        key="2"
      >
        <div className="w-full object-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            className="rounded-lg aspect-[1.762/1] object-cover w-full bg-black"
            alt={image.alt}
          />
        </div>
        <div className="px-4">
          <h3 className="text-2xl font-light text-black uppercase mb-2">
            {name}
          </h3>
          <p className="text-lg font-light pb-3">{description}</p>
          <div className="flex items-center gap-2 pb-3">
            <p className="text-lg font-light">
              <strong>{literals}</strong> {stack}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-2">
            <div className="w-full lg:w-fit">
              <Button
                className="px-3 py-1 text-center"
                whiteBg
                openNewTab
                link={ctaGithub?.link}
                label={ctaGithub?.label}
              />
            </div>
            <div className="w-full lg:w-fit">
              <Button
                className="px-3 py-1 text-center"
                whiteBg
                openNewTab
                link={ctaLiveDemo?.link}
                label={ctaLiveDemo?.label}
              />
            </div>
          </div>
        </div>
      </SimpleAnimation>
    </div>
  );
};

export default LatestProject;
