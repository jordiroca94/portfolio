import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`mx-auto w-full py-10 lg:py-20 px-6 lg:px-16 2xl:px-[6vw] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
