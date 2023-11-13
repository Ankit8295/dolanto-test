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
        <Image
          src={data.mainImage}
          alt="main"
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
          objectPosition="center"
          data-aos="fade-up"
          className="h-full w-full rounded-3xl"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-1">
        <Image
          src={data.author.image}
          width={50}
          height={50}
          alt="author"
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
          objectPosition="center"
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
      <ol className="text-2xl max-lg:text-sm max-lg:text-center max-sm:list-none max-sm:pl-0 font-light text-[#183B56] flex flex-col gap-10 max-lg:gap-6 list-disc pl-5 ">
        {data.detail.points
          .filter((_, i) => i < 3)
          .map((point, i) => (
            <li key={i}>{point}</li>
          ))}
      </ol>
      <div className="w-full h-full flex justify-between 2xl:justify-evenly max-xl:flex-col max-xl:items-center items-start gap-10">
        {data.detail.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={"images"}
            loading="lazy"
            placeholder="blur"
            objectFit="cover"
            height={550}
            width={550}
            objectPosition="center"
            className=" rounded-3xl max-xl:w-full"
            data-aos={i === 0 ? "fade-right" : "fade-left"}
          />
        ))}
      </div>
      <ol className="text-2xl max-lg:text-sm max-lg:text-center font-light text-[#183B56] flex flex-col gap-10 max-lg:gap-6 list-disc max-sm:list-none max-sm:pl-0 pl-5">
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
