"use client";
import React, { useEffect, useRef, useState } from "react";
import BurgerButton from "./BurguerButton";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  useLockBodyScroll(mobileMenu);

  const navLinks = [
    {
      key: "1",
      label: "About",
    },
    {
      key: "2",
      label: "Experience",
    },
    {
      key: "3",
      label: "Projects",
    },
    {
      key: "4",
      label: "Contact",
    },
  ];

  return (
    <nav
      id="header"
      className={
        "fixed top-0 z-50 w-full p-6 visible translate-y-0 transition duration-500 ease-in-out"
      }
    >
      <div className="px-0 lg:px-10 flex justify-between">
        <a className="font-extrabold text-2xl" href="/">
          JORDI ROCA
        </a>
        <div className="lg:flex gap-6 hidden">
          {navLinks.map((item) => (
            <a href={"#" + item.label.toLowerCase()} key={item.key}>
              <h5 className="underlineAfterHover text-lg">{item.label}</h5>
            </a>
          ))}
        </div>
        <BurgerButton
          open={open}
          setOpen={setOpen}
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        />
      </div>
      {mobileMenu && (
        <div className="z-40 flex w-full flex-col overflow-hidden p-6">
          <div className="flex flex-col items-center pt-4 gap-6">
            {navLinks.map((item) => (
              <a
                onClick={() => {
                  setMobileMenu(false), setOpen(!open);
                }}
                href={"#" + item.label.toLowerCase()}
                key={item.key}
              >
                <h5 className="underlineAfterHover text-lg">{item.label}</h5>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
