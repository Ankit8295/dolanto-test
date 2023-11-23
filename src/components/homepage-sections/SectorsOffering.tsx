"use client";

import Image from "next/image";
import { GradientText, HeadingTag } from "../tags/Tags";
import { offeringSectors } from "@/src/constants/homepage";
import { useState } from "react";

type Props = {};

export default function SectorsOffering({}: Props) {
  const [showRemaining, setShowRemaining] = useState(false);
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div
        data-aos="fade-up"
        className="flex justify-center items-center w-full"
      >
        <HeadingTag customTailwindStyle="!text-center">
          Here’s a glimpse of different sectors Dolanto serves
        </HeadingTag>
      </div>
      <div
        className={`grid gap-4 grid-cols-4 grid-rows-[auto] transition max-[350px]:grid-cols-1 overflow-hidden  max-lg:grid-cols-2`}
      >
        {offeringSectors
          .filter((sector, i) => i < 8)
          .map((card) => (
            <div
              data-aos="fade-up"
              key={card.id}
              className={`relative rounded-3xl flex items-start justify-start`}
            >
              <span className="capitalize absolute left-[4%] max-sm:text-xs top-[8%] bg-lightBLue text-[#001942] font-medium md:py-2 md:px-4 md:rounded-lg px-2 py-1 text-center min-w-[100px]  rounded-md">
                {card.title}
              </span>
              <Image
                src={card.image}
                width={450}
                height={200}
                alt={card.title}
                loading="lazy"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        {showRemaining &&
          offeringSectors
            .filter((sector, i) => i >= 8)
            .map((card) => (
              <div
                data-aos="fade-up"
                key={card.id}
                className={`relative rounded-3xl flex items-start justify-start`}
              >
                <span className="capitalize absolute left-[4%] max-sm:text-xs top-[8%] bg-white md:py-2 md:px-4 md:rounded-lg px-2 py-1 text-center min-w-[100px]  rounded-md">
                  {card.title}
                </span>
                <Image
                  src={card.image}
                  width={450}
                  height={200}
                  alt={card.title}
                  loading="lazy"
                  placeholder="blur"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            ))}
      </div>
      <button
        onClick={() => {
          setShowRemaining(!showRemaining);
        }}
        className="px-4 py-3 rounded-lg font-medium bg-lightBLue"
      >
        <GradientText>{showRemaining ? "Show Less" : "Show More"}</GradientText>
      </button>
    </div>
  );
}
