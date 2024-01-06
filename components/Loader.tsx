import { FC } from "react";

type Props = {
  small?: boolean;
};
const Loader: FC<Props> = ({ small = false }) => {
  return (
    <div className="flex items-center justify-center text-current">
      <div className={`ctaLoader ${small ? "small" : ""}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
