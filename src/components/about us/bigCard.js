import React, { useState, useEffect } from "react";
import image25 from "../../assets/image-25.png";
import Logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BigCard = () => {
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

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const scale = 1 + scrollY * 0.0009;

  const variant = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },

    hidden: {
      x: -60,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariant = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeOut",
      },
    },

    hidden: {
      x: -60,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="md:h-screen h-fit transform  px-6 py-9 relative lg:w-[90%] xl:w-[45%] overflow-hidden"
    >
      <div
        style={{ transform: `scale(${scale})` }}
        className="absolute header3-image bg-no-repeat bg-right-top bg-cover
         top-0 left-0 h-full w-full"
        alt="image2"
      ></div>
      <div className="relative">
        <div className="font-bold md:py-24 lg:py-0  tracking-[0.2em] text-white flex flex-col gap-3 items-center text-xl">
          <img
            src={Logo}
            alt="logo"
            className=" md:w-28 w-20 h-20 md:h-28"
            width={200}
            height={200}
          />
          <span
            initial="hidden"
            variants={variant}
            animate={inView ? "visible" : "hidden"}
          >
            TAU LAB
          </span>
        </div>
        <div className="text-white mt-4">
          <motion.h1
            initial="hidden"
            variants={variant}
            animate={inView ? "visible" : "hidden"}
            className="text-2xl md:text-3xl font-medium mb-4"
          >
            About Tau Lab
          </motion.h1>
          <motion.p
            initial="hidden"
            variants={paragraphVariant}
            animate={inView ? "visible" : "hidden"}
            className="text-xl md:text-[1.60rem] leading-[2.8rem]"
          >
            At Tau Lab, we are dedicated to leveraging our expertise in gaming
            and pioneering the creative use of language models. Our mission is
            to drive a profound transformation in the gaming industry while
            continually advancing the capabilities of LLM technology.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default BigCard;
