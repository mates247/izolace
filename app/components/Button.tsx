import React from "react";

interface ButtonProps {
  main?: boolean;
  secondary?: boolean;
  title: string;
}
const Button: React.FC<ButtonProps> = ({ main, secondary, title }) => {
  return (
    <button
      className={`px-[13px] py-[10px] rounded-md  transition hover:scale-105
      ${main && "bg-blue-400 text-white"}
      ${secondary && "bg-white border-[2px] border-black text-black"}`}
    >
      {title}
    </button>
  );
};

export default Button;
