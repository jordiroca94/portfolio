"use client"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Image1 from "../public/testImage.jpg"
import Image from "next/image";



const ParallaxWrapper = () => {
  const parallax = useRef<IParallax>(null!)

  return (
    <div>
        <div className="h-screen">
          <div className="object-cover h-full bg-red-300">
            <Image
              src={Image1}
              alt="Image"
              />
            </div>
      </div>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0}>
          <div className="h-full bg-black">
            <h2 className="text-black">PARALLAX LAYER 1 </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={2}
          >
          <div>
            <h2 className="text-black">PARALLAX LAYER 2 </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
        <h2 className="text-black">PARALLAX LAYER 3 </h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParallaxWrapper