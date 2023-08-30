import React from "react";
import image2 from "../../assets/image-2.png";
import Logo from "../../assets/logo.svg";

const BigCard = () => {
  return (
    <div className="h-[95%] transform -translate-y-14 overflow-hidden px-6 py-6 relative w-[37%]">
      <img
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
          <span>TAU LAB</span>
        </div>
        <div className="text-white mt-6">
          <h1 className="text-3xl font-medium mb-4">About Tau Lab</h1>
          <p className="text-[1.60rem] leading-[2.8rem]">
            Tau Lab is a technology company dedicated to driving innovation and
            excellence in the gaming industry. We specialize in LLM technology
            and advanced generative multi-agent systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
