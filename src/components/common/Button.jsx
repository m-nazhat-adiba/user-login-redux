import React from "react";
const VARIANTS = {
  primary: "border-0 bg-[#BE0B05] text-[#ffffff] hover:bg-red-600",
  secondary: "border-0 text-red-700 hover:bg-gray-50 hover:bg-opacity-20",
  outline: "border-2 text-red-700 border-red-700 hover:bg-red-100",
  link: "border-0 text-black font-medium hover:text-red-700",
};

const Button = ({ children, variant, target }) => {
  return (
    <button
      onClick={target}
      type="button"
      className={`py-3 px-4 w-full rounded-lg font-bold  ${VARIANTS[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
