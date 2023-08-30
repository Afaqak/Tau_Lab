import React from "react";
import Logo from "../assets/logo.svg";
import image1 from "../assets/image-1.png";
import image15 from "../assets/image-15.png";
import image12 from "../assets/image-12.png";

const Innovate = () => {
  return (
    <div className="h-screen">
      <div className="px-16 transform flex">
        <div className="relative p-6 w-[55%] transform -translate-y-16">
          <img
            src={image1}
            className="absolute top-0 left-0 w-full"
            alt="innovation image"
          />
          <div className="relative text-white">
            <img src={Logo} alt="logo" className="h-20 w-20 mb-10" />
            <h2 className="text-3xl font-medium mb-10">Ready to Innovate?</h2>
            <p className="text-[1.55rem] leading-[2.3rem] mb-10">
              At Tau Lab, we aim to make a significant impact through our
              expertise in gaming and the innovative application of language
              models. Tau Lab is revolutionizing gaming and pushing the
              boundaries of LLM technology.
            </p>
            <p className="text-xl leading-10">
              At Tau Lab, we offer cutting-edge technology solutions for the
              gaming industry. Our services include LLM technology, generative
              multi-agent systems, cloud gaming platforms, and expert gaming
              consulting.
            </p>
          </div>
        </div>
        <div className="text-white px-8 w-[40%] bg-black transform -translate-y-16 py-20">
          <div className="mb-4">
            <img src={image12} className="w-14 mb-2" />
            <h1 className="font-bold">Delving Deep into Gaming</h1>
            <p className="text-lg text-[#8A8A8A]">
              We employ language models to enhance in-game attributes, crafting
              captivating experiences for players.
            </p>
          </div>

          <div className="mb-4">
            <img src={image15} className="w-14 mb-2" />
            <h1 className="font-bold">Advancing LLM Technology</h1>
            <p className="text-lg text-[#8A8A8A]">
              We conduct cutting-edge research and assessment on LLMs,
              evaluating their conversational abilities, alignment with values,
              and storytelling prowess.
            </p>
          </div>

          <button className="rounded-3xl  hover:bg-green-300  hover:border-blue-400 hover:text-black px-4 py-2 text-lg border-2 border-white font-medium shadow-md text-white">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Innovate;
