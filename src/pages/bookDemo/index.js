import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";

const BookDemo = () => {
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
    <>
      <div className="min-h-screen bg-black ">
        <div className="lg:h-[90vh] flex items-center md:h-[50vh] h-[50vh]  overflow-hidden p-4 text-white px-4 lg:px-16 relative bg-black">
          <Navbar />
          <motion.div
            style={{ transform: `scale(${scale})` }}
            className="h-full header10-image w-full absolute bg-no-repeat flex items-center justify-center py-4 top-0 left-0"
          ></motion.div>
          <div className="relative mt-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 text-3xl mt-6 font-medium md:text-4xl lg:text-6xl leading-tight"
            >
              Request Demo
            </motion.h1>
            <div className="md:w-[80%] lg:w-1/2 mt-6 flex flex-col gap-4  md:gap-10 lg:gap-16">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-lg md:text-2xl lg:text-3xl"
              >
                Join Forces with the Next-Gen Gaming Team to Shape the Future.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-medium"
              >
                Request a Demo today!
              </motion.p>
            </div>
          </div>
        </div>
        <div class="container mx-auto py-8 w-[80%] lg:w-[60%]">
          <h2 class="text-center text-3xl font-bold flex justify-start text-white mb-4 ">
            Demo Form
          </h2>
          <form>
            <div class="grid grid-cols-1 text-[#8A8A8A] text-sm md:grid-cols-2  gap-4">
              <div class="mb-4">
                <label class="block text-[#8A8A8A] mb-2">Last Name</label>
                <input
                  type="text"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Company Name</label>
                <input
                  type="text"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Work Email</label>
                <input
                  type="email"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Job Title</label>
                <input
                  type="text"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#8A8A8A] text-sm mb-2">
                Inspiration Unveiled
              </label>
              <textarea
                className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                rows="4"
              />
            </div>
            <div className="mb-4 ml-4">
              <label className="block ">Game Tab</label>
              <div className="grid grid-cols-1 gap-2 text-[#8A8A8A]">
                <div className="flex items-center">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-[#8A8A8A] before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-[#8A8A8A] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.5rem] checked:after:w-[0.55rem] checked:after:rounded-full checked:after:border-[#8A8A8A] checked:after:bg-[#8A8A8A] checked:after:scale-90 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]   "
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                  <label className="ml-2 " for="game1">
                    Game 1
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-[#8A8A8A] before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-[#8A8A8A] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.5rem] checked:after:w-[0.55rem] checked:after:rounded-full checked:after:border-[#8A8A8A] checked:after:bg-[#8A8A8A] checked:after:scale-90 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]   "
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                  <label className="ml-2" for="game2">
                    Game 2
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-[#8A8A8A] before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-[#8A8A8A] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.5rem] checked:after:w-[0.55rem] checked:after:rounded-full checked:after:border-[#8A8A8A] checked:after:bg-[#8A8A8A] checked:after:scale-90 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]   "
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                  <label className="ml-2" for="game5">
                    Game 3
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-[#8A8A8A] before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-[#8A8A8A] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.5rem] checked:after:w-[0.55rem] checked:after:rounded-full checked:after:border-[#8A8A8A] checked:after:bg-[#8A8A8A] checked:after:scale-90 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]   "
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                  <label className="ml-2" for="game5">
                    Game 4
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-[#8A8A8A] before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-[#8A8A8A] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.5rem] checked:after:w-[0.55rem] checked:after:rounded-full checked:after:border-[#8A8A8A] checked:after:bg-[#8A8A8A] checked:after:scale-90 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]   "
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                  <label className="ml-2" for="game5">
                    Game 5
                  </label>
                </div>
                <div className="lg:w-[80%] flex">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-[2rem] lg:w-[1.05rem] md:w-[1.25rem] appearance-none rounded-full border-2 border-solid border-[#8A8A8A] before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-[#8A8A8A] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.5rem] checked:after:w-[0.55rem] checked:after:rounded-full checked:after:border-[#8A8A8A] checked:after:bg-[#8A8A8A] checked:after:scale-90 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]   "
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                  />
                  <label className="ml-2 -mt-1" for="game5">
                    I agree to receive communications from tau labs in
                    accordance with tau labs privacy policies
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-2xl text-white font-bold hover:bg-black transition-all duration-300 ease-in-out border-2 rounded-full border-white border-w px-16 py-2 min-w-[30%] -ml-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookDemo;
