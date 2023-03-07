import React from "react";
import { AiOutlineHeart } from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <section className="py-4">
        <p className="text-gray text-center text-sm flex gap-2 justify-center bottom-0 right-0">
          Made with <AiOutlineHeart className="text-secondary text-xl" /> by
          Marcos Ochieng
        </p>
      </section>
    </>
  );
};

export default Footer;
