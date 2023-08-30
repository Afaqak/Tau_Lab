import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="z-50 py-4 relative flex items-center justify-between">
      <div className="font-bold tracking-[0.2em] text-white flex gap-3 items-center text-xl">
        <img
          src={Logo}
          alt="logo"
          className=" w-10 h-10"
          width={200}
          height={200}
        />
        <span>TAU</span>
        <span>LAB</span>
      </div>
      <ul className="text-white flex gap-8 font-medium ">
        <li>Career</li>
        <li>Legal</li>
        <li>Book Demo</li>
      </ul>
    </nav>
  );
};

export default Navbar;
