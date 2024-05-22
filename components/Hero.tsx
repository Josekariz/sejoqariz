import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
      {/* Add spotlight animations */}

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-90  h-[80vh] w-[50vh]" fill="blue" />
      </div>

      {/* Add bacground grid lines */}

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Next.js 🚀 React ⚛️ Magic ✨
          </h2>
          <TextGenerateEffect
            words="Developing Sleek and Functional Frontend Web Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider m-4 text-sm md:text-5xl lg:text-6xl">
            Hi, I&apos;m Joseph, your go-to Frontend Developer 😉
          </p>
          <a href="#about">
            <MagicButton
              title="Checkout my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
