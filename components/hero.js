import React from "react";
import { AiOutlineDownload } from 'react-icons/ai'

const Hero = () => {
  return (
    <>
      <section className="sm:px-36 px-8 space-y-4 h-screen py-24 md:w-9/12 w-full">
        <p className="text-secondary text-left">Hi, my name is</p>
        <h1 className="text-white font-black sm:text-6xl text-3xl">Marcos Ochieng.</h1>
        <h1 className="text-gray font-black sm:text-6xl text-3xl">
          I build things for the web.
        </h1>
        <p className="text-gray md:w-7/12 w-full">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{" "}
          <span className="text-secondary">Dynamic Mobility.</span>
        </p>
        <button className="text-secondary border border-secondary rounded px-4 py-3 text-xs flex items-center gap-2">
          <AiOutlineDownload className="text-xl"/>
          Download Resume
        </button>
      </section>
    </>
  );
};

export default Hero;
