"use client";
import React, { useEffect, useRef, useState } from "react";
import BurgerButton from "./BurgerButton";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";

type Props = {
  navLinks: string[];
  logo: string;
};

const Header = ({ navLinks, logo }: Props) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  useLockBodyScroll(mobileMenu);

  return (
    <nav
      id="header"
      className={
        "fixed top-0 z-50 w-full p-6 visible translate-y-0 transition duration-500 ease-in-out"
      }
    >
      <div className="px-0 lg:px-10 flex justify-between">
        <a className="font-bold text-2xl uppercase" href="#">
          {logo}
        </a>
        <div className="lg:flex gap-6 hidden">
          {navLinks.map((link, index) => (
            <a href={"#" + link.toLowerCase()} key={index}>
              <h5 className="underlineAfterHover text-lg">{link}</h5>
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
            {navLinks.map((link, index) => (
              <a
                onClick={() => {
                  setMobileMenu(false), setOpen(!open);
                }}
                href={"#" + link.toLowerCase()}
                key={index}
              >
                <h5 className="underlineAfterHover text-lg">{link}</h5>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
