import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Card = ({ bgImage, img, wColor, label, text, isGif }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: {
      x: "-50%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      x: "-20%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const widthVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "100%",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative px-6 py-4 pb-8 w-60 overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <img
        src={bgImage}
        alt="image-14"
        className="absolute h-full w-full top-0 left-0"
      />
      <div className="relative">
        {!isGif ? (
          <img src={img} alt="image-14" className="w-28 h-28" />
        ) : (
          <img src={img} alt="image-14" className="h-24 mb-2 w-20" />
        )}

        <motion.div
          className="animate-text"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <h2 className="#889CE7 text-[#889CE7] pb-2 text-lg font-bold">
            {label}
          </h2>
          <p className="font-bold text-white pb-6">{text}</p>
          <motion.div
            style={{ backgroundColor: wColor }}
            className="w-full h-1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={widthVariants}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
