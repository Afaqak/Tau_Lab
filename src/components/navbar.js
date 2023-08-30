import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarRef = useRef();

  const handleScroll = () => {
    const navbarHeight = navbarRef.current?.clientHeight;
    setIsNavbarSticky(window.scrollY > navbarHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className={`z-50 py-4  flex items-center justify-between ${
        isNavbarSticky
          ? "fixed top-0 left-0 px-4 lg:px-16 bg-black w-full"
          : "relative"
      }`}
    >
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
      <ul className={`md:flex gap-8 font-medium hidden md:flex-row`}>
        <li>Career</li>
        <li>Legal</li>
        <li>Book Demo</li>
      </ul>
      <motion.div
        className={`md:hidden cursor-pointer text-white fixed right-6 z-[1000] top-13`}
        onClick={handleMobileMenuToggle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-6 h-[0.18rem] bg-white mb-1"
          animate={
            isMobileMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }
          }
        ></motion.div>
        <motion.div
          className="w-6 h-[0.18rem] bg-white"
          animate={
            isMobileMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }
          }
        ></motion.div>
      </motion.div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex w-full h-full justify-end ">
          <div className="bg-black  rounded-lg -mt-10 flex items-center justify-center w-full">
            <ul className="mt-4 space-y-2 text-[#8A8A8A] gap-4 flex flex-col text-4xl">
              <li>Career</li>
              <li>Legal</li>
              <li>Book Demo</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
