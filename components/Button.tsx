import React from "react";

type Props = {
  label: string;
  link: string;
  className?: string;
  download?: boolean;
  whiteBg?: boolean;
  openNewTab?: boolean;
};
const Button = ({
  label,
  link,
  className,
  download,
  whiteBg,
  openNewTab = false,
}: Props) => {
  return (
    <div
      className={`py-2 px-4 rounded-lg text-lg border cursor-pointer transition-all duration-400 ease-in ${
        whiteBg
          ? "border-black hover:bg-primary hover:text-white hover:border-none"
          : "border-white hover:bg-white hover:text-primary"
      } ${className && className}`}
    >
      <a
        target={openNewTab ? "_blank" : ""}
        download={download ? true : false}
        href={link}
      >
        {label}
      </a>
    </div>
  );
};

export default Button;
