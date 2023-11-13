import { newA } from "@/src/constants/news/news";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const data = newA;
  return (
    <div className="w-full flex flex-col gap-12 max-lg:gap-8">
      <div className="w-full flex flex-col items-center gap-6 max-lg:gap-4">
        <h2 className="text-[3.375rem] max-lg:text-4xl max-sm:text-xl w-[90%] max-lg:w-full text-center font-bold leading-none">
          {data.title}
        </h2>
        <div className="flex gap-2 items-center text-lg max-lg:text-xs text-[#0078A6]">
          <span>{data.date}</span>
          <span>|</span>
          <span>{data.readTime}</span>
        </div>
        <div data-aos="fade-up" className="w-full">
          <Image
            src={data.mainImage}
            alt="main"
            className=" w-full h-[90vh] max-lg:h-auto max-lg:object-contain"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-1">
        <Image
          src={data.author.image}
          width={50}
          height={50}
          alt="author"
          className="object-fill"
        />
        <span>{data.author.name}</span>
        <span>{data.author.designation}</span>
      </div>
      <span className="text-2xl max-lg:text-center font-light text-[#183B56] max-lg:text-sm">
        {data.brief}
      </span>
      <h3 className="text-[#183B56] max-lg:text-center max-lg:text-xl text-[2.5rem] font-bold leading-none">
        {data.detail.title}
      </h3>
      <span className="text-2xl max-lg:text-sm max-lg:text-center font-light text-[#183B56]">
        {data.detail.description}
      </span>
      <ol className="text-2xl max-lg:text-sm max-lg:text-center max-sm:list-none font-light text-[#183B56] flex flex-col gap-10 max-lg:gap-6 list-disc pl-5">
        {data.detail.points
          .filter((_, i) => i < 3)
          .map((point, i) => (
            <li key={i}>{point}</li>
          ))}
      </ol>
      <div className="w-full grid grid-cols-2 gap-10 max-lg:grid-cols-1 grid-rows-[auto]">
        {data.detail.images.map((img, i) => (
          <div
            className="w-full"
            key={i}
            data-aos={i === 0 ? "fade-right" : "fade-left"}
          >
            <Image
              src={img}
              alt={""}
              className="h-[85vh] object-cover max-lg:h-[70vh] rounded-3xl max-lg:w-full max-lg:object-cover"
            />
          </div>
        ))}
      </div>
      <ol className="text-2xl max-lg:text-sm max-lg:text-center font-light text-[#183B56] flex flex-col gap-10 max-lg:gap-6 list-disc max-sm:list-none pl-5">
        {data.detail.points
          .filter((_, i) => i > 2)
          .map((point, i) => (
            <li key={i}>{point}</li>
          ))}
      </ol>
      <span className="text-2xl max-lg:text-sm max-lg:text-center font-light text-[#183B56]">
        {data.detail.summary}
      </span>
    </div>
  );
}
