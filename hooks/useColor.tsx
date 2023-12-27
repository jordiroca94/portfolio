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
    if (header) {
      header.style.backgroundColor = styles.backgroundColor;
      if (header.style.backgroundColor === "rgb(40, 40, 43)") {
        header.style.color = "rgb(255, 255, 255)";
      } else {
        header.style.color = "rgb(132, 121, 99)";
      }
    }
  }, [isInView]);

  return ref;
}
