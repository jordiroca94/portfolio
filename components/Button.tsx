import React from "react";

type Props = {
  label: string;
  link: string;
  className?: string;
  download?: boolean;
};
const Button = ({ label, link, className, download }: Props) => {
  return (
    <div className="py-2 px-4 rounded-lg text-lg border border-white">
      <a download={download ? true : false} href={link}>
        {label}
      </a>
    </div>
  );
};

export default Button;
