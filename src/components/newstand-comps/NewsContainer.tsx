"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CustomSlider from "../slider/CustomSlider";
import Link from "next/link";

type Props = {
  containerTitle: string;
  newsData: {
    id: number;
    link: string;
    title: string;
    image: StaticImageData;
    brief: string;
    author: {
      name: string;
      image: StaticImageData;
      designation: string;
    };
    date: string;
    readTime: string;
    identifier: string;
  }[];
  relatedPostData?: {
    id: number;
    link: string;
    title: string;
    image: StaticImageData;
    date: string;
  }[];
};
const RelatedPostSliderCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Link
      href={data.link}
      className="w-full h-full bg-lightBLue rounded-xl flex flex-col items-center gap-5"
    >
      <Image
        src={data.image}
        alt="a"
        width={250}
        height={300}
        className="object-fill"
      />
      <div className="w-[90%] px-2 pb-3 flex flex-col gap-1">
        <p>{data.identifier}</p>
        <p className="font-bold ">{data.title}</p>
        <p className="text-xs font-light">{data.date}</p>
      </div>
    </Link>
  );
};

export default function NewsContainer({
  containerTitle,
  newsData,
  relatedPostData,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full flex flex-col gap-5 items-start">
        <h2 className="text-4xl max-xl:text-3xl max-sm:text-xl font-medium">
          {containerTitle}
        </h2>
        <div className="w-full grid grid-cols-3 gap-y-5 gap-x-7 max-xl:grid-cols-1 grid-rows-[auto] ">
          {newsData.map((data, i) => (
            <Link
              data-aos={i === 0 ? "fade-right" : "fade-left"}
              href={data.link}
              key={data.id}
              className={`flex bg-lightBLue w-full rounded-tl-xl rounded-bl-xl  ${
                i === 0
                  ? "col-span-2 max-xl:col-span-1 row-span-3 max-xl:row-span-1 col-start-1 max-xl:flex-col max-xl:gap-3"
                  : `col-span-1 col-start-3 max-xl:col-start-1 row-span-1 row-start-[${
                      i + 1
                    }]`
              }
                }`}
            >
              <div className={`${i === 0 ? "w-1/2" : "w-2/5 "} max-xl:w-full`}>
                <Image
                  src={data.image}
                  alt={"image"}
                  className={`  rounded-tl-xl rounded-bl-xl ${
                    i === 0
                      ? "object-fill  w-full h-full "
                      : "object-fill max-xl:w-full h-full "
                  }`}
                />
              </div>
              <div
                className={`px-3 py-5 max-xl:py-2 max-xl:pr-1 ${
                  i === 0 ? "w-1/2" : "w-3/5"
                }   max-xl:w-full flex flex-col justify-between gap-2 items-start`}
              >
                <div className="w-full text-[#5A7184] flex justify-between items-center">
                  <span className="text-[#1565D8] max-sm:text-[8px] font-semibold bg-white px-2 py-1 rounded-lg">
                    {data.identifier}
                  </span>
                  {i === 0 && (
                    <span className="xl:hidden  max-sm:text-[8px] leading-none font-light">
                      {data.date}
                    </span>
                  )}
                </div>
                {i === 0 ? (
                  <h3 className="max-sm:text-xs font-light ">{data.brief}</h3>
                ) : (
                  <h3 className="max-sm:text-[10px] font-semibold ">
                    {data.title}
                  </h3>
                )}
                <div className="flex justify-between items-center w-full">
                  {i === 0 && (
                    <div className="grid grid-cols-[45px_1fr] gap-x-2 items-center">
                      <Image
                        src={data.author.image}
                        alt="img-author"
                        className="w-full h-full object-fill"
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-[#183B56] font-semibold">
                          {data.author.name}
                        </span>
                        <span className="text-[#183B56] text-xs italic">
                          {data.author.designation}
                        </span>
                      </div>
                    </div>
                  )}
                  {
                    <span
                      className={`${
                        i === 0 ? "max-sm:hidden" : ""
                      } max-sm:text-[8px] leading-none font-light`}
                    >
                      {data.date}
                    </span>
                  }
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {relatedPostData && (
        <CustomSlider
          slideData={relatedPostData}
          SliderCard={RelatedPostSliderCard}
        />
      )}
    </div>
  );
}
