import { StaticImageData } from "next/image";

export type CtaType = {
  label: string;
  link: string;
};

export type Literals = {
  and: string;
};

export type Asset = {
  alt: string;
  src: StaticImageData;
};
