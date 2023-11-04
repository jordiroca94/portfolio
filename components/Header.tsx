"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY + 150;

      if (currentScrollPos > 200) {
        if (currentScrollPos > scrollPos) {
          setShow(false);
        } else {
          setShow(true);
        }
      }

      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  const navLinks = [
    {
      label: "About",
    },
    {
      label: "Skills",
    },
    {
      label: "Experience",
    },
    {
      label: "Projects",
    },
    {
      label: "Contact",
    },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white p-6 ${
        show
          ? "visible translate-y-0 transition duration-300 ease-in-out"
          : "-translate-y-32 transition delay-150 duration-500 ease-in-out"
      }`}
    >
      <div className="px-10 flex justify-between text-black">
        <a className="font-extrabold text-2xl" href="/">
          JORDI ROCA
        </a>
        <div className="flex gap-6">
          {navLinks.map((item) => (
            <div key={item.label}>
              <h5 className="underlineAfterHover text-lg">{item.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
