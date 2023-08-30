import React from "react";

const Button = ({ buttonStyle, label }) => {
  return (
    <button
      className={`rounded-3xl  ${buttonStyle} hover:bg-green-300  hover:border-blue-400 hover:text-black px-4 py-2 text-lg border-2 border-white font-medium shadow-md text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
