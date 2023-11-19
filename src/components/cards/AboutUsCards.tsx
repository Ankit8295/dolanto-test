import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  image: StaticImageData;
  reverse?: boolean;
};

export default function AboutUsCards({
  children,
  image,
  title,
  reverse,
}: Props) {
  return (
    <div
      data-aos="fade-up"
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10  grid-rows-[auto] lg:grid-rows-1 justify-items-center lg:justify-items-start gap-y-5 lg:gap-y-0"
    >
      <h2 className="lg:hidden row-span-1 row-start-1 bg-footerColor rounded-xl py-2 px-4 text-white text-sm  text-center w-fit">
        {title}
      </h2>
      <div
        className={`w-full justify-center  flex items-center  ${
          reverse
            ? "lg:col-start-2 lg:justify-end"
            : "lg:col-start-1 lg:justify-start"
        } lg:row-start-1`}
      >
        <Image
          src={image}
          alt={title}
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        />
      </div>
      <div
        className={` ${
          reverse ? "lg:col-start-1 " : "lg:col-start-2 "
        } flex flex-col lg:gap-6  lg:row-start-1 xl:gap-14 lg:p-6 lg:bg-lightBLue lg:rounded-[30px]`}
      >
        <h2 className="bg-footerColor max-lg:hidden rounded-xl py-2 px-4 text-white text-sm  text-center w-fit">
          {title}
        </h2>
        <p className="  xl:text-xl text-base 2xl:leading-relaxed lg:text-start 2xl:text-3xl font-light  text-center">
          {children}
        </p>
      </div>
    </div>
  );
}
