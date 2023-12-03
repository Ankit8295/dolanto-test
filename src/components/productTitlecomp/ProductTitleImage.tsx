import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData;
  title: string;
};

export default function ProductTitleImage({ image, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        alt="blood bank"
        src={image}
        className="aspect-square  mix-blend-normal w-full h-full max-w-[200px] max-h-[200px] object-fill"
      />
      <p className="font-light text-center w-full bg-lightBLue rounded-xl text-[#002964] text-2xl">
        {title}
      </p>
    </div>
  );
}
