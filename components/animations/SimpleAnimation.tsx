"use client";

import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { useRef, FC, ReactNode } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type ElementProps = HTMLMotionProps<"div">;

type Props = ElementProps & {
  children: ReactNode;
  delay?: number;
};

type Custom = Pick<Props, "delay">;

const variants: Variants = {
  hide: () => ({
    opacity: 0,
    scale: 0.95,
    translateY: 70,
  }),
  show: ({ delay }: Custom) => ({
    opacity: 1,
    scale: 1,
    translateY: 0,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

const SimpleAnimation: FC<Props> = ({ children, delay = 0.05, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const intersecting = useIntersectionObserver(ref);

  const animate = intersecting ? "show" : "hide";

  const custom: Custom = { delay };

  return (
    <motion.div
      {...props}
      initial={false}
      animate={animate}
      variants={variants}
      custom={custom}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default SimpleAnimation;
