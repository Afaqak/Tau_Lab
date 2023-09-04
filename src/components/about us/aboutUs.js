import React from "react";
import { Card } from "./card";
import BigCard from "./bigCard";
import image14 from "../../assets/image-14.png";
import image3 from "../../assets/image-3.gif";
import image9 from "../../assets/image-9.png";
import image11 from "../../assets/image-11.png";
import image13 from "../../assets/image-13.png";
import image10 from "../../assets/image-10.png";
import image15 from "../../assets/image-15.png";
import image16 from "../../assets/image-16.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const cardVariants = {
    hidden: {
      x: "-50%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  const card2Variants = {
    hidden: {
      x: "40%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
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
        duration: 1,
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
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-black flex px-4 lg:px-12 gap-4 items-center min-h-screen  lg:pb-10">
      <BigCard />
      <div className="lg:ml-8 md:flex hidden">
        <div className="md:flex hidden flex-col gap-10 transform -translate-y-16">
          <motion.div
            className="relative px-6 py-4 pb-8 w-60 overflow-hidden"
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div
              className="absolute header4-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
              alt="image2"
            ></div>
            <div className="relative">
              <img src={image3} alt="image-14" className="w-28 h-28" />
              <motion.div
                className="animate-text"
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={textVariants}
              >
                <h2 className="#889CE7 text-[#889CE7] pb-2 text-lg font-bold">
                  LLM Technology
                </h2>
                <p className="font-semibold text-white pb-6">
                  Our proprietary LLM technology drives the next generation of
                  gaming, allowing for unparalleled immersion and player
                  experiences.
                </p>
                <motion.div
                  style={{ backgroundColor: "#889CE7" }}
                  className="w-full h-1"
                  initial="hidden"
                  animate={inView1 ? "visible" : "hidden"}
                  variants={widthVariants}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative px-6 py-4 pb-8 w-60 overflow-hidden"
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={cardVariants}
            ref={ref2}
          >
            <div
              className="absolute header6-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
              alt="image2"
            ></div>
            <div className="relative">
              <img src={image13} alt="image-13" className="h-24 mb-2 w-20" />
              <motion.div
                className="animate-text"
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={textVariants}
              >
                <h2 className="white text-white pb-2 text-lg font-bold">
                  Generative Multi-Agent System
                </h2>
                <p className="font-semibold text-white pb-6">
                  Our advanced generative multi-agent system ensures dynamic and
                  engaging gameplay that keeps players coming back for more.
                </p>
                <motion.div
                  style={{ backgroundColor: "white" }}
                  className="w-full h-1"
                  initial="hidden"
                  animate={inView2 ? "visible" : "hidden"}
                  variants={widthVariants}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="md:flex hidden flex-col gap-10 transform translate-y-16 ml-10">
        <motion.div
          ref={ref3}
          className="relative px-6 py-4 pb-8 w-60 overflow-hidden"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={card2Variants}
        >
          <div
            className="absolute header5-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
            alt="image2"
          ></div>
          <div className="relative">
            <img src={image11} alt="image-13" className="h-24 mb-2 w-20" />
            <motion.div
              className="animate-text"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={textVariants}
            >
              <h2 className="white text-white pb-2 text-lg font-bold">
                Cloud Gaming Platform
              </h2>
              <p className="font-bold text-white pb-6">
                Our cloud gaming platform delivers high-performance gaming
                experiences anytime, anywhere.
              </p>
              <motion.div
                style={{ backgroundColor: "#9333ea" }}
                className="w-full h-1"
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={widthVariants}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          ref={ref4}
          className="relative px-6 py-4 pb-8 w-60 overflow-hidden"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={card2Variants}
        >
          <div
            className="absolute header7-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
            alt="image2"
          ></div>
          <div className="relative">
            <img src={image15} alt="image-13" className="h-24 mb-2 w-20" />
            <motion.div
              className="animate-text"
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={textVariants}
            >
              <h2 className="white text-white pb-2 text-lg font-bold">
                Expertise in Gaming
              </h2>
              <p className="font-bold text-white pb-6">
                Our team of gaming experts is dedicated to delivering the best
                possible gaming experiences to our customers.
              </p>
              <motion.div
                style={{ backgroundColor: "#9333ea" }}
                className="w-full h-1"
                initial="hidden"
                animate={inView4 ? "visible" : "hidden"}
                variants={widthVariants}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
