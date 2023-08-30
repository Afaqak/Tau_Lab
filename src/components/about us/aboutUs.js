import React from "react";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AboutUs = () => {
  return (
    <div className="bg-black flex px-12 gap-4 items-center min-h-screen pb-10">
      <BigCard />
      <motion.div
        className="ml-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col gap-10 transform -translate-y-16">
          <Card
            wColor={"#889CE7"}
            label={" LLM Technology "}
            text={
              "   Our proprietary LLM technology drives the next generation of gaming, allowing for unparalleled immersion and player experiences."
            }
            img={image3}
            bgImage={image14}
          />
          <Card
            isGif={true}
            wColor={"white"}
            bgImage={image10}
            img={image13}
            label={"Generative Multi-Agent System"}
            text={
              "Our advanced generative multi-agent system ensures dynamic and engaging gameplay that keeps players coming back for more.              "
            }
          />
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-10 transform translate-y-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Card
          isGif={true}
          bgImage={image9}
          img={image11}
          wColor={"#9333ea"}
          label={"Cloud Gaming Platform"}
          text={
            "Our cloud gaming platform delivers high-performance gaming experiences anytime, anywhere."
          }
        />
        <Card
          bgImage={image16}
          isGif={true}
          wColor={"#9333ea"}
          img={image15}
          label={"Expertise in Gaming"}
          text={
            "Our team of gaming experts is dedicated to delivering the best possible gaming experiences to our customers."
          }
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
