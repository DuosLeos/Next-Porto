import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky ? "bg-[#081c49] shadow-gray-900 shadow-sm" : "";

  return (
    <div
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}
    >
      <div className=" flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-green-400">L</span>
          eonardus
          <span className="text-[30px] md:text-[40px] text-green-400">V</span>
          irmus
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a className="nav_link" href="#hero">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav_link" href="#aboutMe">
              About
            </a>
          </li>
          <li>
            <a className="nav_link" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav_link" href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a className="nav_link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-100"
        />
      </div>
    </div>
  );
};

export default Nav;
