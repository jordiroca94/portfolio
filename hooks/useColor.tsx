"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function useColor<T extends Element>() {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -100% 0px",
  });

  useEffect(() => {
    if (!ref.current) return;
    if (!isInView) return;
    const styles = window.getComputedStyle(ref.current);
    const header = document.getElementById("header");
    const headerLine1 = document.getElementById("header-line-1");
    const headerLine2 = document.getElementById("header-line-2");
    const headerLine3 = document.getElementById("header-line-3");

    if (header && headerLine1 && headerLine2 && headerLine3) {
      header.style.backgroundColor = styles.backgroundColor;
      if (header.style.backgroundColor === "rgb(40, 40, 43)") {
        header.style.color = "rgb(255, 255, 255)";
        headerLine1.style.backgroundColor = "rgb(255, 255, 255)";
        headerLine2.style.backgroundColor = "rgb(255, 255, 255)";
        headerLine3.style.backgroundColor = "rgb(255, 255, 255)";
      } else {
        header.style.color = "rgb(132, 121, 99)";
        headerLine1.style.backgroundColor = "rgb(132, 121, 99)";
        headerLine2.style.backgroundColor = "rgb(132, 121, 99)";
        headerLine3.style.backgroundColor = "rgb(132, 121, 99)";
      }
    }
  }, [isInView]);

  return ref;
}
