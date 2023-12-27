import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

type ElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Container = forwardRef<HTMLDivElement, Props>(
  ({ className, children, id }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        className={`mx-auto w-full py-10 lg:py-20 px-6 lg:px-16 2xl:px-[10vw] ${className}`}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
