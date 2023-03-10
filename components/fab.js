import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const Fab = () => {
  return (
    <>
      <button
        title="My Github Activity"
        className="md:block hidden fixed z-40 bottom-32 left-8 bg-blue w-12 h-12 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <a
          className="text-white"
          target="_blank"
          href="https://github.com/Marcos8060"
        >
          <AiOutlineGithub className="text-2xl" />
        </a>
      </button>
      <button
        title="Follow me on LinkedIn"
        className="md:block hidden fixed z-40 bottom-20 left-8 bg-blue w-12 h-12 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <a
          className="text-white"
          target="_blank"
          href="https://www.linkedin.com/in/marcos-ochieng/"
        >
          <FiLinkedin className="text-2xl" />
        </a>
      </button>
      <button
        title="Follow me on Twitter"
        className="md:block hidden fixed z-40 bottom-8 left-8 bg-blue w-12 h-12 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <a
          className="text-white"
          target="_blank"
          href="https://twitter.com/MarcosOchieng8"
        >
          <AiOutlineTwitter className="text-2xl" />
        </a>
      </button>
      <button
        title="Follow me on Twitter"
        className="md:block hidden fixed z-40 bottom-32 right-8 bg-blue w-12 h-12 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl duration-300"
      >
        <div className="md:block hidden text-xs rotate-90 flex space-x-1">
            <p>m</p>
            <p>a</p>
            <p>r</p>
            <p>c</p>
            <p>o</p>
            <p>s</p>
            <p>g</p>
            <p>a</p>
            <p>v</p>
            <p>8</p>
            <p>0</p>
            <p>@</p>
            <p>g</p>
            <p>m</p>
            <p>a</p>
            <p>i</p>
            <p>l</p>
            <p>.</p>
            <p>c</p>
            <p>o</p>
            <p>m</p>
        </div>
      </button>
    </>
  );
};

export default Fab;
