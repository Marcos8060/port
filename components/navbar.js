import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-between px-16 py-4">
        <div>
          <p className="text-secondary border border-secondary rounded px-3 py-2">M</p>
        </div>
        <nav>
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
            <li className="text-secondary border border-secondary rounded px-4 py-3 text-xs">
                Resume
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
