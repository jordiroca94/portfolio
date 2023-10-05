"use client"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxWrapper = () => {
  return (
    <div className="text-black pt-20">
      <Parallax pages={4}>
        <ParallaxLayer 
        offset={0}
        speed={1}
        style={{backgroundImage:""}}
        >
          <h2 className="text-4xl text-bold">This is a parallax test </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5 }>
          <h4 className="text-4xl text-bold">Welcome to my website</h4>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParallaxWrapper