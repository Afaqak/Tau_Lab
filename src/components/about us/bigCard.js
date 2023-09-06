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
      className="md:h-[95%] h-fit transform md:-translate-y-14  px-6 py-10 relative lg:w-[37%] overflow-hidden"
    >
      <div
        style={{ transform: `scale(${scale})` }}
        className="absolute header3-image bg-no-repeat bg-cover
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
            Tau Lab is a technology company dedicated to driving innovation and
            excellence in the gaming industry. We specialize in LLM technology
            and advanced generative multi-agent systems.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default BigCard;
