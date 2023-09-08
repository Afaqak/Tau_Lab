import React from "react";
import { Card } from "./card";
import BigCard from "./bigCard";
import image3 from "../../assets/gem-1.gif";
import image11 from "../../assets/gem-2.gif";
import image13 from "../../assets/gem-3.gif";
import image15 from "../../assets/gem-4.gif";
import { motion } from "framer-motion";

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

  return (
    <div className="bg-black flex px-4 py-4 lg:px-12 gap-4 xl:flex-row flex-col items-center mb-6 md:min-h-screen  lg:pb-10">
      <BigCard />
      <div className="lg:ml-8 mt-4 md:flex hidden">
        <div className="md:flex  hidden md:flex-row xl:flex-col gap-20 xl:gap-10 transform ">
          <motion.div
            className="relative rounded px-4 pt-8 pb-10 w-72 overflow-hidden"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div
              className="absolute header4-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
              alt="image2"
            ></div>
            <div className="relative">
              <img src={image3} alt="image-14" className="w-28 -ml-4 h-28" />
              <motion.div
                className="animate-text"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={textVariants}
              >
                <h2 className="#889CE7 text-[#889CE7] pb-2 text-xl font-bold">
                  Empowering Gaming
                </h2>
                <p className="font-semibold text-white pb-6">
                  Our Unleashed Services: LLM-Powered Gameplay Mechanics – We
                  integrate LLM and a dynamic multi-agent approach to bring
                  games to life. We infuse games with meaningful narratives and
                  instill profound values, creating unique gaming experiences
                </p>
                <motion.div
                  style={{ backgroundColor: "#889CE7" }}
                  className="w-full h-1"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={widthVariants}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded px-4 pt-8 pb-10 w-72 overflow-hidden"
            initial="hidden"
            whileInView={"visible"}
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div
              className="absolute header6-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
              alt="image2"
            ></div>
            <div className="relative">
              <img src={image13} alt="image-13" className="w-28 h-28 -ml-6" />
              <motion.div
                className="animate-text"
                initial="hidden"
                whileInView={"visible"}
                variants={textVariants}
                viewport={{ once: true }}
              >
                <h2 className="white text-[#889CE7] pb-2 text-xl font-bold">
                  Integration for Next-Gen IP
                </h2>
                <p className="font-semibold text-white pb-6">
                  With meticulous optimization and precise alignment of
                  storylines, dialogues, and values, we empower game developers
                  to create diverse, dynamic content IP characters. Unlock
                  unparalleled gameplay experiences tailored to your unique
                  characters.
                </p>
                <motion.div
                  style={{ backgroundColor: "white" }}
                  className="w-full h-1"
                  initial="hidden"
                  viewport={{ once: true }}
                  animate={"visible"}
                  variants={widthVariants}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="md:flex hidden md:flex-row xl:flex-col gap-20 xl:gap-10 mb-4 xl:mb-0 transform translate-y-16 ml-10">
        <motion.div
          className="relative rounded px-4 pt-8 pb-10 w-72 overflow-hidden"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={card2Variants}
        >
          <div
            className="absolute header5-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
            alt="image2"
          ></div>
          <div className="relative">
            <img src={image11} alt="image-13" className="-ml-6 w-28 h-28" />
            <motion.div
              className="animate-text"
              initial="hidden"
              viewport={{ once: true }}
              whileInView={"visible"}
              variants={textVariants}
            >
              <h2 className="white text-[#889CE7] pb-2 text-xl font-bold">
                Empowering Gamers with AI
              </h2>
              <p className="font-semibold text-white pb-6">
                We leverage LLM to empower gamers, offering guidance on
                gameplay, mechanics, and fostering player-game connections. Our
                efforts enrich gaming experiences, drive development efficiency,
                and fuel innovation in game mechanics.
              </p>
              <motion.div
                style={{ backgroundColor: "#9333ea" }}
                className="w-full h-1"
                viewport={{ once: true }}
                initial="hidden"
                whileInView={"visible"}
                variants={widthVariants}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="relative rounded px-4 pt-12 pb-16 w-72 overflow-hidden"
          initial="hidden"
          viewport={{ once: true }}
          whileInView={"visible"}
          variants={card2Variants}
        >
          <div
            className="absolute header7-image bg-no-repeat bg-cover
         top-0 left-0 h-full w-full"
            alt="image2"
          ></div>
          <div className="relative">
            <img src={image15} alt="image-13" className="w-28 -ml-4 h-28" />
            <motion.div
              className="animate-text"
              viewport={{ once: true }}
              initial="hidden"
              whileInView={"visible"}
              variants={textVariants}
            >
              <h2 className="white text-[#889CE7] pb-2 text-xl font-bold">
                Expertise in Gaming
              </h2>
              <p className="font-semibold text-white pb-6 ">
                Our team of gaming experts is dedicated to delivering the best
                possible gaming experiences to our customers.
              </p>
              <motion.div
                style={{ backgroundColor: "#9333ea" }}
                className="w-full h-1"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
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
