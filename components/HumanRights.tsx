import React from "react";
import Container from "./Container";
import Armonia from "../public/assets/armonia.jpeg";
import SIR from "../public/assets/stillIRise.png";
import Image from "next/image";

const HumanRights = () => {
  return (
    <Container id="humanRights" className="bg-matteBlack h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-5xl text-white">
          Highly involved with Human Rights
        </h2>
        <div className="lg:w-3/4 text-white py-10 text-lg">
          <p className="mb-4 text-justify">
            On 2020 I was working for a year in Greece involved with the refugee
            crisis in Europe. Few weeks before covid pandemic started I moved to
            Samos, a small island in Greece 2km far from Turkey, the second
            island with the biggest refugee camp in Europe.
          </p>
          <p className="text-justify">
            With a refugee camp holding over 8.000 asylum seekers I started
            working as a Restaurant Manager on a free restaurant for vulnerable
            people called Project Armonia. After 6 months, I started working in
            Still I Rise, a non formal school as a Logistics Manager.
          </p>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 mt-10 hover:bg-white ease-out duration-300 rounded-lg hover:opacity-80 ">
              <a
                aria-label="Project Armonia"
                href="https://projectarmonia.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={Armonia}
                  className="rounded-lg aspect-[1.8/1] "
                  alt="My Image"
                />
              </a>
            </div>
            <div className="flex-1 mt-10 hover:bg-white ease-out duration-300 rounded-lg hover:opacity-80 ">
              <a
                aria-label="Still I Rise"
                href="https://www.stillirisengo.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={SIR}
                  className="rounded-lg aspect-[1.8/1] "
                  alt="My Image"
                />
              </a>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="https://www.instagram.com/p/CL6tC_gjJXR/"
              target="_blank"
              rel="noreferrer"
            >
              <h5 className="flex justify-center text-white hover:underline">
                Read more about my experience in Still I Rise
              </h5>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HumanRights;
