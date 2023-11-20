import Image, { StaticImageData } from "next/image";
import React from "react";
import { GradientText } from "../tags/Tags";

type JourneyData = {
  image: StaticImageData;
  title: string;
  description: string;
  year: number;
};
type Props = {
  data: JourneyData;
  index: number;
};
export default function AboutUsJourneySlide({ data, index }: Props) {
  return (
    <div
      className={`h-full w-full  grid grid-cols-1 grid-rows-[275px_75px_275px] max-lg:grid-rows-[225px_75px_225px]`}
    >
      <div
        className={`${
          index % 2 === 0 ? "row-start-1" : "row-start-3"
        } w-[80%] mx-auto h-full max-lg:row-span-1`}
      >
        <Image
          src={data.image}
          alt="empA"
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
          objectPosition="center"
          className="rounded-3xl w-full h-full"
        />
      </div>
      <div className=" w-full row-start-2 flex items-center justify-center pt-5 flex-col gap-3">
        <div className="w-full  h-[1px] max-h-[1px] bg-[#001942] relative bg-opacity-25 ">
          <span className="w-5 h-5 rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] bg-[#001942]"></span>
        </div>
        <GradientText>{data.year}</GradientText>
      </div>
      <div
        className={`flex flex-col items-center  gap-3 max-lg:gap-2 ${
          index % 2 === 0
            ? "row-start-3 justify-start "
            : "row-start-1 justify-end"
        } max-lg:row-span-3 max-lg:justify-start `}
      >
        <p className="font-semibold text-[1.75rem] text-center max-xl:text-2xl text-[#001942]">
          {data.title}
        </p>
        <p className="w-[70%] text-center text-xl max-xl:text-lg font-light">
          {data.description}
        </p>
      </div>
    </div>
  );
}
