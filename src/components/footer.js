import React from "react";
import Logo from "../assets/logo.svg";
import LinkedIn from "../assets/linkedin (2).svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-white border-t border-gray-800 border-opacity-70 bg-black py-10 items-center flex lg:flex-row flex-col justify-between px-4 lg:px-10">
      <div className="flex gap-6 item lg:text-left text-center justify-between flex-col lg:flex-row">
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
          <ul className="">
            <li className="font-semibold mt-4 mb-2">Contact Us</li>
            <li>info@taulab.ai</li>
            <li>press@taulab.ai</li>
          </ul>
        </div>
      </div>
      <div className="font-semibold flex md:items-start items-center flex-col justify-center mt-2">
        <h1>Follow us on</h1>
        <div className="bg-gray-500 w-7 h-7 rounded-full flex mt-4 cursor-pointer items-center justify-center">
          <img src={LinkedIn} alt="LinkedIn" className="w-4 h-4" />
        </div>
      </div>
      <ul className="text-center flex flex-col cursor-pointer">
        <li className="font-semibold mt-4 mb-2">Legal</li>
        <Link to={"/privacy"}>Privacy Policy</Link>
        <Link to="/terms-of-use">Terms Of Use</Link>
      </ul>

      <div className="text-center">
        <p>We are Tau Lab LTD, 2023</p>
        <span>© 2023 Tau Lab. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
