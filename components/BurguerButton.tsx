"use client";
import React, { FC, useState } from "react";

type Props = {
  isOpen: boolean;
  onClick?: () => void;
  className?: string;
};

const BurgerButton: FC<Props> = ({
  onClick,
  isOpen = false,
  className = "",
}) => {
  const [open, setOpen] = useState<boolean>(isOpen);

  const handleOpen = () => {
    setOpen(!open);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${className} mr-6 flex h-[22px] w-[22px] flex-col justify-center`}
      onClick={() => handleOpen()}
    >
      <div
        className={`h-px w-full flex-none bg-black transition-all ease-in-out ${
          open ? "translate-y-px rotate-[45deg] delay-300 duration-300" : ""
        }`}
      />
      <div
        className={`h-px w-0 flex-none bg-black transition-all duration-300 ease-in-out ${
          open ? "my-0 pr-0" : "my-[49%] pr-[100%] delay-300"
        }`}
      />
      <div
        className={`h-px w-full flex-none bg-black transition-all ease-in-out ${
          open ? "-translate-y-px rotate-[-45deg] delay-300 duration-300" : ""
        }`}
      />
    </div>
  );
};

export default BurgerButton;
