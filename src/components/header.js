import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import { motion } from "framer-motion";
import BackgroundScene from "./backgroundScene";
import gem1 from "../assets/gem-1.gif";
import gem2 from "../assets/gem-2.gif";
import gem3 from "../assets/gem-3.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:h-[100vh] h-[100vh] overflow-hidden p-4 flex items-center justify-center text-white px-4 md:px-8 lg:px-16 relative ">
      <div className="absolute w-full h-screen top-0 left-0  z-50">
        <BackgroundScene />
      </div>
      <Navbar />
      <motion.div
        animate={{
          scale: 1,

          transition: {
            delay: 1.3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        }}
        initial={{ scale: 0 }}
        className={` top-44 xl:top-16 lg:top-16 absolute z-[1000] right-0 lg:right-16 xl:-right-24 flex justify-end xl:justify-normal `}
      >
        <img
          src={gem1}
          alt="Gem"
          className={`h-auto  w-[45%] hidden md:block `}
        />
      </motion.div>
      <motion.div
        animate={{
          scale: 1,

          transition: {
            delay: 1.3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        }}
        initial={{ scale: 0 }}
        className={`bottom-6 md:bottom-24 lg:bottom-14 xl:bottom-6 z-[1000] absolute  flex justify-end lg:justify-normal lg:-right-52  md:right-0 xl:-right-28`}
      >
        <img src={gem2} alt="Gem" className={`h-auto w-1/2  md:w-[43%]`} />
      </motion.div>
      <motion.div
        animate={{
          scale: 1,

          transition: {
            delay: 1.3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        }}
        initial={{ scale: 0 }}
        className={`bottom-20 xl:bottom-2 lg:bottom-6 absolute z-[1000] -left-6 lg:left-4 xl:left-20`}
      >
        <img
          src={gem3}
          alt="Gem"
          className={`h-auto w-[50%] hidden md:block`}
        />
      </motion.div>

      <div className="flex items-center justify-center flex-col mt-20 relative z-[1000] text-white">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-[60%] text-3xl font-semibold md:text-5xl leading-tight"
        >
          Pushing the Boundaries of Innovation
        </motion.h1>
        <div className="lg:w-[60%] mt-6">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-2xl"
          >
            Welcome to Tau Lab. Our mission is to push the boundaries of
            innovation by leveraging our specialized LLM technology and advanced
            generative multi-agent system, pioneering the next generation of
            gaming.
          </motion.p>
          <Link to="/book-demo" className="block">
            <Button
              buttonStyle={"flex justify-end mt-10"}
              label={"Book Demo"}
            />
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
