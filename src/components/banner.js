import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update the scrollX state on scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundPositionX = `-${scrollY * 0.12}px`;
  console.log(backgroundPositionX);

  return (
    <motion.div
      className="banner_img py-10  flex items-center justify-center md:h-screen mb-6 md:mb-0 overflow-y-hidden"
      style={{ backgroundPositionX }}
    >
      <div className="text-white font-semibold lg:font-normal text-3xl lg:text-7xl w-[80%] lg:w-[65%] text-center italic">
        Tau Lab is revolutionizing gaming and pushing the boundaries of LLM
        technology.
      </div>
    </motion.div>
  );
};

export default Banner;
