import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../assets/logo.svg";
import image15 from "../assets/image-15.png";
import image12 from "../assets/image-12.png";

const part1Variant = {
  hidden: { opacity: 0, translateY: -30 },
  visible: { opacity: 1, translateY: 0 },
};

const part2Variant = {
  hidden: { opacity: 0, translateX: -30 },
  visible: { opacity: 1, translateX: 0 },
};

const textVariant = {
  hidden: { opacity: 0, translateY: 20 },
  visible: { opacity: 1, translateY: 0 },
};

const Innovate = () => {
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
  const scale = 0.4 + scrollY * 0.0006;
  console.log(scale);

  const [refPart1, inViewPart1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refPart2, inViewPart2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refText1, inViewText1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refText2, inViewText2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen ">
      <div className="px-4 lg:px-16 transform flex lg:flex-row flex-col">
        {/* part1 */}
        <motion.div
          ref={refPart1}
          initial="hidden"
          animate={inViewPart1 ? "visible" : ""}
          variants={part1Variant}
          transition={{ duration: 0.7 }}
          className="relative p-6 lg:w-[55%] overflow-hidden transform -translate-y-16"
        >
          <div
            className="absolute top-0 left-0 header9-image h-full w-full"
            alt="innovation image"
            style={{ transform: `scale(${scale})` }}
          ></div>
          <div className="relative text-white">
            <img
              src={Logo}
              alt="logo"
              className="md:h-20 h-16 w-16 mb-6 lg:mb-10"
            />
            <motion.h2
              ref={refText1}
              initial="hidden"
              animate={inViewText1 ? "visible" : ""}
              variants={textVariant}
              transition={{ duration: 0.6 }}
              className="md:text-3xl text-2xl font-medium mb-6 lg:mb-10"
            >
              Ready to Innovate?
            </motion.h2>
            <motion.p
              ref={refText2}
              initial="hidden"
              animate={inViewText2 ? "visible" : ""}
              variants={textVariant}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-[1.55rem] leading-[2.3rem] mb-6 lg:mb-10"
            >
              At Tau Lab, we aim to make a significant impact through our
              expertise in gaming and the innovative application of language
              models. Tau Lab is revolutionizing gaming and pushing the
              boundaries of LLM technology.
            </motion.p>
            <motion.p
              initial="hidden"
              animate={inViewText2 ? "visible" : ""}
              variants={textVariant}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl leading-10"
            >
              At Tau Lab, we offer cutting-edge technology solutions for the
              gaming industry. Our services include LLM technology, generative
              multi-agent systems, cloud gaming platforms, and expert gaming
              consulting.
            </motion.p>
          </div>
        </motion.div>
        {/* part2 */}
        <motion.div
          ref={refPart2}
          initial="hidden"
          animate={inViewPart2 ? "visible" : ""}
          variants={part2Variant}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white px-8 lg:w-[40%] bg-black transform -translate-y-16 py-20"
        >
          <div className="mb-4">
            <img src={image12} className="w-14 mb-2" alt="innovation icon" />
            <motion.h1
              initial="hidden"
              animate={inViewPart2 ? "visible" : ""}
              variants={textVariant}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-bold text-lg"
            >
              Delving Deep into Gaming
            </motion.h1>
            <motion.p
              initial="hidden"
              animate={inViewPart2 ? "visible" : ""}
              variants={textVariant}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#8A8A8A]"
            >
              We employ language models to enhance in-game attributes, crafting
              captivating experiences for players.
            </motion.p>
          </div>

          <div className="mb-4">
            <img src={image15} className="w-14 mb-2" alt="innovation icon" />
            <motion.h1
              initial="hidden"
              animate={inViewPart2 ? "visible" : ""}
              variants={textVariant}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-bold text-lg"
            >
              Advancing LLM Technology
            </motion.h1>
            <motion.p
              initial="hidden"
              animate={inViewPart2 ? "visible" : ""}
              variants={textVariant}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#8A8A8A]"
            >
              We conduct cutting-edge research and assessment on LLMs,
              evaluating their conversational abilities, alignment with values,
              and storytelling prowess.
            </motion.p>
          </div>

          <motion.button
            initial="hidden"
            animate={inViewPart2 ? "visible" : ""}
            variants={textVariant}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-3xl hover:bg-green-300 hover:border-blue-400 hover:text-black px-4 py-2 text-lg border-2 border-white font-medium shadow-md text-white"
          >
            Book Demo
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Innovate;
