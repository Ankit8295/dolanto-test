/* eslint-disable @next/next/no-img-element */
import React from "react";
import { StaticImageData } from "next/image";

type Props = {
  data: {
    img: StaticImageData | string;
    title: string;
    desc: string | string[];
  };
  reverse?: boolean;
};

export default function ProductImageComp({ data, reverse = false }: Props) {
  const { img, desc, title } = data;
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:grid-rows-[auto]  text-[#001942] items-center  gap-20 max-lg:gap-2 max-xl:gap-10  ">
      <div
        className={`w-[90%] mx-auto flex flex-col row-start-1 col-span-1 items-start gap-6 max-lg:gap-2 justify-between ${
          reverse ? "col-start-2 max-lg:col-start-1 " : "col-start-1"
        } max-lg:row-start-1 max-lg:w-full`}
      >
        <h3 className="font-medium text-3xl max-xl:text-2xl max-sm:text-xl">
          {title}
        </h3>
        {typeof desc === "object" ? (
          <div className="flex items-start gap-3 justify-between grow flex-col">
            {desc.map((d, i) => (
              <p
                key={i}
                className="font-light text-xl max-xl:text-lg max-md:text-base"
              >
                {d}
              </p>
            ))}
          </div>
        ) : (
          <p className="font-light text-xl max-md:text-sm">{desc}</p>
        )}
      </div>
      <img
        alt={title + "image"}
        src={typeof img === "string" ? img : img.src}
        className={`${
          reverse ? "col-start-1" : "col-start-2  max-lg:col-start-1"
        } w-full h-full max-h-[600px] row-start-1 max-lg:row-start-2`}
      />
    </div>
  );
}
