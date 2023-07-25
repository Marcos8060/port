import React, { useState,useRef,useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./drawer";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="flex justify-between sm:px-16 px-4 sticky top-0 z-50"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#112240" : "transparent",
      }} 
      >
        <div className="py-4">
          <Link href="/" className="">
            <img className="w-10" src="/images/me.png" alt="" />
          </Link>
        </div>
        <nav className="md:block hidden py-4">
          <ul className="flex items-center gap-8">
            <li className="text-secondary text-xs">
              <a href="#about" className="text-white text-sm">About</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#experience" className="text-white text-sm">Experience</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#projects" className="text-white text-sm">Work</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#contact" className="text-white text-sm">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden block py-4">
          <AiOutlineMenu
            className="text-secondary text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
