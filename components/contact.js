import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="h-screen py-12 space-y-4">
        <div className="flex items-center justify-center gap-4 text-secondary">
          <p className="text-sm">04.</p>
          <p>What's Next</p>
        </div>
        <h1 className="font-black text-white text-4xl text-center">
          Get In Touch
        </h1>
        <p className="text-center text-gray w-7/12 mx-auto">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>

        <p className="text-gray text-center text-sm flex gap-2 justify-center bottom-0 right-0">
          Made with <AiOutlineHeart className="text-secondary text-xl" /> by Marcos Ochieng
        </p>
      </section>
    </>
  );
};

export default Contact;
