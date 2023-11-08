import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: Props) => {
  return (
    <div
      id={id && id}
      className={`mx-auto w-full py-10 lg:py-20 px-6 lg:px-16 2xl:px-[10vw] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;