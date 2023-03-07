import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="flex items-center justify-between px-16 py-6 bg-primary fixed-top">
        <div>
          <p className="text-secondary border border-secondary rounded px-3 py-1">
            M
          </p>
        </div>
        <nav className="md:block hidden">
          <ul className="flex items-center gap-8">
            <li className="text-secondary text-xs">
              01. <span className="text-white text-sm">About</span>
            </li>
            <li className="text-secondary text-xs">
              02. <span className="text-white text-sm">Experience</span>
            </li>
            <li className="text-secondary text-xs">
              03. <span className="text-white text-sm">Work</span>
            </li>
            <li className="text-secondary text-xs">
              04. <span className="text-white text-sm">Contact</span>
            </li>
          </ul>
        </nav>
        <div className="md:hidden block">
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
