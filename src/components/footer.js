import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="text-white items-center flex justify-between mt-28 mb-10 px-16">
      <div className="flex gap-6">
        <div>
          <div className="font-bold tracking-[0.2em] text-white flex gap-3 items-center text-xl">
            <img
              src={Logo}
              alt="logo"
              className=" w-12 h-12"
              width={200}
              height={200}
            />
            <span>TAU</span>
            <span>LAB</span>
          </div>
          <ul className="text-xl">
            <li className="text-2xl font-medium mt-4 mb-2">Contact Us</li>
            <li>info$tailab.com</li>
            <li>info$tailab.com</li>
          </ul>
        </div>
        <div className="font-md text-xl font-medium mt-2">
          <h1>Follow us on</h1>
        </div>
      </div>
      <div className="text-xl text-center">
        <p>We are Tau Lab LTD, 2023</p>
        <span>© 2023 Tau Lab. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
