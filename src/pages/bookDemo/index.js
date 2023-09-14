import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import emailjs from "@emailjs/browser";

const BookDemo = () => {
  const [scrollY, setScrollY] = useState(0);
  const form = useRef();
  const initialState = {
    lastName: "",
    companyName: "",
    workEmail: "",
    jobTitle: "",
    phoneNumber: "",
    inspiration: "",
    game: "",
    agree: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleInputChange = (e) => {
    console.log(formData, "form");
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    if (type === "radio") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData);
      }
    } else {
      const newValue = type === "checkbox" ? checked : value;
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };
  const isFormValid = () => {
    if (
      !formData.lastName ||
      !formData.companyName ||
      !formData.workEmail ||
      !formData.jobTitle ||
      !formData.phoneNumber ||
      !formData.agree
    ) {
      alert("Please fill out all required fields.");
      return false;
    }

    return true;
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    emailjs
      .sendForm(
        "service_0lnywle", //service_id
        "template_jumr9jc", //template id
        form.current,
        "mTWOaQgkTleIcWy3n" //public_key
      )
      .then(
        (result) => {
          alert("data sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          <div className="relative  w-full  mt-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 mx-auto text-3xl mt-6 font-medium md:text-4xl lg:text-6xl leading-tight"
            >
              Request Demo
            </motion.h1>
            <div className="md:w-[80%] mx-auto lg:w-1/2 text-white mt-6 flex flex-col gap-4  md:gap-10 lg:gap-16">
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
          <form onSubmit={sendEmail} ref={form}>
            <div class="grid grid-cols-1 text-[#8A8A8A] text-sm md:grid-cols-2  gap-4">
              <div class="mb-4">
                <label class="block text-[#8A8A8A] mb-2">Last Name</label>
                <input
                  onChange={handleInputChange}
                  name="lastName"
                  type="text"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Company Name</label>
                <input
                  onChange={handleInputChange}
                  name="companyName"
                  type="text"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Work Email</label>
                <input
                  onChange={handleInputChange}
                  name="workEmail"
                  type="email"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Job Title</label>
                <input
                  onChange={handleInputChange}
                  name="jobTitle"
                  type="text"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number</label>
                <input
                  onChange={handleInputChange}
                  name="phoneNumber"
                  type="tel"
                  className="form-input w-full bg-black text-sm px-3 py-4 rounded-md focus:outline-slate-900 otlin border-[#8A8A8A] border"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#8A8A8A] text-sm mb-2">
                Inspiration Unveiled
              </label>
              <input
                name="inspiration"
                onChange={handleInputChange}
                placeholder="Please describe your game creation insights, timeline, development cycle, and more..."
                className="form-input placeholder:text-[#8A8A8A]  flex h-28 text-[#8A8A8A] items-center border-[#8A8A8A] w-[90%] justify-center placeholder:text-center bg-black px-8 py-4 rounded-md focus:outline-slate-900 otlin  border"
              />
            </div>
            <div className="mb-4">
              <label className="block ">Game Tab</label>
              <div className="grid grid-cols-1 gap-2 text-[#8A8A8A]">
                <CustomRadioButton
                  name="game"
                  value="RPG"
                  id={"game1"}
                  checked={formData.game === "RPG"}
                  onChange={handleInputChange}
                  label="RPG"
                />

                <CustomRadioButton
                  name="game"
                  id={"game2"}
                  value="SLG"
                  checked={formData.game === "SLG"}
                  onChange={handleInputChange}
                  label="SLG"
                />
                <CustomRadioButton
                  name="game"
                  value="MMO"
                  id={"game3"}
                  checked={formData.game === "MMO"}
                  onChange={handleInputChange}
                  label="MMO"
                />
                <CustomRadioButton
                  name="game"
                  value="SandBox"
                  checked={formData.game === "SandBox"}
                  onChange={handleInputChange}
                  label="SandBox"
                  id={"game4"}
                />
                <CustomRadioButton
                  name="game"
                  value="other"
                  id={"game5"}
                  checked={formData.game === "other"}
                  onChange={handleInputChange}
                  label="Other..."
                />

                <CustomRadioButton
                  radioStyle="mt-4"
                  name="agree"
                  type="checkbox"
                  id={"agree"}
                  checked={formData.agree === true}
                  onChange={handleInputChange}
                  label=" I agree to receive communications from tau labs in
                  accordance with tau labs privacy policies"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-2xl text-white font-bold hover:bg-black transition-all duration-300 ease-in-out border-2 rounded-full border-white border-w px-16 py-2 min-w-[30%] -ml-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BookDemo;

const CustomRadioButton = ({
  radioStyle,
  id,
  name,
  value,
  checked,
  type = "radio",
  onChange,
  label,
}) => {
  return (
    <div className={`flex ${radioStyle} relative items-center`}>
      <input
        hidden
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="relative cursor-pointer">
        <label
          htmlFor={id}
          className="w-4 h-4 border-2 block border-solid border-[#8A8A8A] rounded-full"
        ></label>
        {checked && (
          <label
            htmlFor={id}
            className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#8A8A8A] rounded-full"
          ></label>
        )}
      </div>
      <label className="ml-2 cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
