import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import { motion } from "framer-motion";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scale = 1 + scrollY * 0.0004;

  return (
    <div className="h-[150vh] p-4 text-white px-16 relative bg-black">
      {/* scale on scroll*/}
      <motion.div
        style={{ transform: `scale(${scale})` }}
        className="h-full header-image w-full absolute bg-no-repeat flex items-center justify-center py-4 bg-contain top-0 left-0"
      ></motion.div>
      <Navbar />
      <div className="relative mt-24">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2 text-5xl leading-tight"
        >
          Pushing the Boundaries of Innovation
        </motion.h1>
        <div className="w-1/2 mt-6">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl"
          >
            Welcome to Tau Lab. Our mission is to push the boundaries of
            innovation by leveraging our specialized LLM technology and advanced
            generative multi-agent system, pioneering the next generation of
            gaming.
          </motion.p>
          <Button buttonStyle={"flex justify-end mt-10"} label={"Book Demo"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
