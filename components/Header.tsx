"use client";
import React, { useState } from "react";
import BurgerButton from "./BurgerButton";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { UseLanguageContext } from "@/context/LanguageContext";

type NavLinkType = {
  link: string;
  id: string;
};
type Props = {
  navLinks: NavLinkType[];
  logo: string;
};

const Header = ({ navLinks, logo }: Props) => {
  const { language, setLanguage } = UseLanguageContext();
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
        <a href="#">
          <h1 aria-labelledby={logo} className="font-bold text-2xl uppercase">
            {logo}
          </h1>
        </a>
        <div className="lg:flex gap-6 hidden">
          {navLinks.map((link, index) => (
            <a
              className="underlineAfterHover text-lg"
              href={"#" + link.id}
              key={index}
            >
              {link.link}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-10">
            <button
              className={`${
                language === "en" ? "font-semibold" : "font-light"
              }`}
              onClick={() => setLanguage("en")}
            >
              ENG
            </button>
            <div>/</div>
            <button
              className={`${
                language === "es" ? "font-semibold" : "font-light"
              }`}
              onClick={() => setLanguage("es")}
            >
              ESP
            </button>
          </div>
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
            <div className="flex items-center gap-2  ">
              <button
                className={`${
                  language === "en" && "border-b border-lightGray"
                }`}
                onClick={() => setLanguage("en")}
              >
                ENG
              </button>
              <div>/</div>
              <button
                className={`${
                  language === "es" && "border-b border-lightGray"
                }`}
                onClick={() => setLanguage("es")}
              >
                ESP
              </button>
            </div>
            {navLinks.map((link, index) => (
              <a
                onClick={() => {
                  setMobileMenu(false), setOpen(!open);
                }}
                href={"#" + link.id}
                key={index}
              >
                <h5 className="underlineAfterHover text-lg">{link.link}</h5>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
