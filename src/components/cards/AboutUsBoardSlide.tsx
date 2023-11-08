import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData;
};

export default function AboutUsBoardSlide({ image }: Props) {
  return (
    <div className={`h-full w-full  flex items-center justify-center`}>
      <Image src={image} alt="empA" className="object-fill w-full h-full" />
    </div>
  );
}
