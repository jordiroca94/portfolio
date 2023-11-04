import React from "react";

type Props = {
  label: string;
  link: any;
  className?: string;
  download?: boolean;
  whiteBg?: boolean;
};
const Button = ({ label, link, className, download, whiteBg }: Props) => {
  return (
    <div
      className={`py-2 px-4 rounded-lg text-lg border transition-all duration-400 ease-in ${
        whiteBg
          ? "border-black hover:bg-gray hover:text-white"
          : "border-white hover:bg-white hover:text-black"
      } ${className && className}`}
    >
      <a download={download ? true : false} href={link}>
        {label}
      </a>
    </div>
  );
};

export default Button;
