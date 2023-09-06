import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom"; // Import Link from React Router if you're using it.

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
      className={`py-4 h-[10vh] z-[2000]  flex items-center justify-between ${
        isNavbarSticky
          ? "fixed top-0 left-0 px-4 lg:px-16 bg-black w-full"
          : "absolute top-4 w-[90%] mx-auto"
      }`}
    >
      <div className="font-bold cursor-pointer tracking-[0.2em] text-white flex gap-3 items-center text-2xl">
        <Link className="flex gap-3 items-center" to="/">
          {" "}
          <img
            src={Logo}
            alt="logo"
            className="w-14 h-14"
            width={200}
            height={200}
          />
          <span>TAU</span>
          <span>LAB</span>
        </Link>
      </div>
      <ul
        className={`md:flex gap-8 cursor-pointer transition-all duration-300 ease-out font-medium hidden md:flex-row`}
      >
        <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
          <Link to="/career">Career</Link>{" "}
        </li>
        <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
          <Link to="/legal">Legal</Link>{" "}
        </li>
        <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
          <Link to="/book-demo">Book Demo</Link>{" "}
        </li>
      </ul>
      <motion.div
        className={`md:hidden cursor-pointer text-white fixed right-6 z-[3000] top-13`}
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
        <div className="fixed inset-0 bg-black z-[2000]  bg-opacity-75 flex w-full h-full justify-end ">
          <div className="bg-black  rounded-lg -mt-10 flex items-center justify-center w-full">
            <ul className="mt-4 space-y-2 text-[#8A8A8A] gap-4 flex flex-col text-4xl">
              <li>
                <Link to="/career">Career</Link>{" "}
              </li>
              <li>
                <Link to="/legal">Legal</Link>{" "}
              </li>
              <li>
                <Link to="/book-demo">Book Demo</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
