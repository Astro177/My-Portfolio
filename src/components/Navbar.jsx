import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="bg-black/50 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto flex justify-between items-center text-2xl text-white/50">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BsBriefcase />
        </Link>
        <Link
          to="projects"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BsClipboardData />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BiUser />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BsChatSquareText />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
