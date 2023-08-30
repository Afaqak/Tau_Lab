import React, { useState, useEffect } from "react";
import image2 from "../../assets/image-2.png";
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
      className="h-[95%] transform -translate-y-14  px-6 py-6 relative lg:w-[37%] overflow-hidden"
    >
      <img
        style={{ transform: `scale(${scale})` }}
        src={image2}
        className="absolute top-0 left-0 h-full w-full"
        alt="image2"
      />
      <div className="relative">
        <div className="font-bold tracking-[0.2em] text-white flex flex-col gap-3 items-center text-xl">
          <img
            src={Logo}
            alt="logo"
            className=" w-28 h-28"
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
        <div className="text-white mt-6">
          <motion.h1
            initial="hidden"
            variants={variant}
            animate={inView ? "visible" : "hidden"}
            className="text-3xl font-medium mb-4"
          >
            About Tau Lab
          </motion.h1>
          <motion.p
            initial="hidden"
            variants={paragraphVariant}
            animate={inView ? "visible" : "hidden"}
            className="text-[1.60rem] leading-[2.8rem]"
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
