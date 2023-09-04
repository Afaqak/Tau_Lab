import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import image4 from "../../assets/image-4.gif";
const Career = () => {
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
  const scale = 1 + scrollY * 0.0009;

  return (
    <div className="min-h-screen">
      <div className=" h-fit lg:h-[80vh] overflow-hidden p-4 text-white px-4 lg:px-16 relative bg-black">
        <motion.div
          style={{ transform: `scale(${scale})` }}
          className="h-full header2-image w-full absolute bg-cover bg-no-repeat flex items-center justify-center py-4 top-0 left-0"
        ></motion.div>
        <Navbar />
        <div className="relative mt-24 lg:mt-48">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-[70%] font-medium text-2xl lg:text-6xl"
          >
            Revolutionize Your Career with Tau Lab's Cutting-Edge Technology
            Teams
          </motion.h1>
        </div>
      </div>
      <div className="bg-black p-4">
        <div className="border-2 bg-opacity-60 p-4 border-white rounded-md bg-black text-white">
          <h2 className="font-bold text-lg">
            Research Scientist -<br />
            Large Language Models (LLM) for Gaming
          </h2>
          <div className="mt-4">
            <h2 className="font-bold">Our Vision:</h2>
            <div className="text-[#8A8A8A]">
              <p>
                At Tau Lab, we aren't just part of the gaming industry; we are
                the architects of its future. Our mission is to revolutionize
                the gaming landscape by harnessing the full potential of
                cutting-edge technology. By leveraging our state-of-the-art LLM
                technology and pioneering Generative Multi-Agent System, we're
                charting the course for the next generation of gaming
                experiences.
              </p>
              <h2>Comapny Profile:</h2>
              As a cutting-edge multi-model AI company, Tau Lab is firmly rooted
              in the Bay Area's vibrant tech ecosystem. Our core dedication
              revolves around catering to the unique demands of the gaming
              industry. Our mission goes beyond innovation; we aim to establish
              an all-encompassing generative AI ecosystem that streamlines
              content creation processes like never before.
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-bold">Qualifications:</h2>
            <ul className="text-[#8A8A8A]">
              <li>
                {" "}
                - Holding or nearing completion of a Ph.D. in Natural Language
                Processing, Machine Learning, Artificial Intelligence, or a
                similar technical field. Candidates with equivalent industry
                experience will also be considered.
              </li>
              <li>
                - Strong passion for and deep understanding of LLM, with a
                specific focus on their applications in enhancing the gaming
                experience.{" "}
              </li>
              - Proven hands-on experience in the end-to-end process, from
              parameter-efficient fine-tuning and evaluation to deployment of
              open-source LLM models.
              <li>
                - Established record of research excellence, preferably
                demonstrated by publications in top-tier conferences or
                journals.
              </li>{" "}
              <li>
                - Proficiency in one or more programming languages, especially
                Python or C++.
              </li>{" "}
              <li>
                {" "}
                - Experience with popular machine learning and LLM frameworks,
                PyTorch, Hugging Face, LangChain/LlamaIndex, and VectorDB in
                particular.
              </li>{" "}
              <li>
                - Exceptional communication skills, with the ability to
                articulate complex concepts clearly and persuasively.
              </li>
            </ul>
            <ul className="text-[#8A8A8A] mt-4">
              <h2 className="font-bold text-white">Responsibilities:</h2>
              <li>
                - Design and implement innovative LLM solutions tailored
                specifically for the gaming industry, with a focus on the
                elevation of user experience.
              </li>{" "}
              <li>
                {" "}
                - Collect, process, and organize the training dataset for
                training/fine-tuning LLM models.
              </li>{" "}
              <li>
                - Collaborate efficiently with internal teams, ensuring seamless
                integration of research advancements into product development.
              </li>{" "}
              <li>
                - Facilitate the transfer of technological advancements to
                relevant product groups and encourage collaboration with
                external researchers.
              </li>
            </ul>
            <ul className="text-[#8A8A8A]">
              <h2 className="font-bold text-white mt-4">Benefits:</h2>{" "}
              <li>
                - Competitive base salary - Stock options in a rapidly growing
                early-stage startup.
              </li>{" "}
              <li>
                - A comprehensive benefits package, details of which will be
                provided during the interview process.
              </li>{" "}
              <li> -Flexible work schedule</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black flex py-24 items-center  w-full justify-center z-50">
        <div className=" text-white flex-col md:flex-row w-[80%] min-h-80 border border-[#8A8A8A] mx-auto flex items-center">
          <div className="lg:w-[30%] border-b text-lg py-10 flex lg:border-r border-[#8A8A8A] items-center justify-center">
            <img src={image4} className=" h-60 w-60 " alt="diamond" />
          </div>
          <div className="lg:w-[70%] py-10 px-8">
            <h1 className="font-bold mb-3 text-lg">
              Research Scientist - Large Language Models (LLM) for Gaming
            </h1>
            <p className="text-[#8A8A8A] text-lg">
              Located in the heart of the Bay Area, CA, Tau Lab stands as a
              vanguard of innovation within the gaming industry. Our unwavering
              commitment is to redefine the boundaries of possibility, achieved
              through the synergistic fusion of our specialized Language and
              Learning Model (LLM) technology and our advanced Generative
              Multi-Agent System.
            </p>
            <div className="mt-4 flex gap-4">
              <button className="py-1 hover:bg-orange-700 hover:border-orange-700 transition-all duration-300 ease-in-out rounded-full border-2 px-2 border-white ">
                Learn More
              </button>
              <button className="py-1 hover:bg-orange-700 hover:border-orange-700 transition-all duration-300 ease-in-out rounded-full px-2 border-2 border-white">
                Apply Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
