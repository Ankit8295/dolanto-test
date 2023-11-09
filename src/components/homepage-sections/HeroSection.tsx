import { heroSectionCards } from "@/src/constants/homepage";
import Image from "next/image";
import React from "react";
import { BlueButtonWrapper, LinkButton } from "../buttons/Buttons";
import { DownloadButtonIcon } from "../icons/Icons";
import { GradientText, HeadingTag } from "../tags/Tags";
import {
  bottomLeftRoundCorner,
  bottomRightRoundCorner,
  topLeftRoundCorner,
  topRightRoundCorner,
} from "@/src/constants/constant";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-6  pt-5">
      <div className="flex max-lg:flex-col max-lg:gap-6 items-start justify-between">
        <div className="w-1/2 max-lg:w-full flex flex-col gap-1 max-lg:justify-center">
          <HeadingTag>
            <GradientText>Transforming</GradientText> Possibilities into
            <GradientText>Reality</GradientText> with Premier EPC Solutions.
          </HeadingTag>
          <div className="flex gap-5 max-sm:hidden">
            <LinkButton label={"About Us"} link="/" />
            <BlueButtonWrapper Icon={<DownloadButtonIcon />}>
              Download Brochure
            </BlueButtonWrapper>
          </div>
        </div>
        <div className={`w-1/2  max-lg:w-full relative`}>
          <h1
            className={`whitespace-nowrap  px-4 max-sm:px-2 text-xs max-sm:text-[10px] font-medium bg-white py-2 w-fit flex justify-center items-center absolute rounded-br-lg top-0 left-0 pl-3 ${topRightRoundCorner} ${bottomLeftRoundCorner}`}
          >
            {heroSectionCards[0].title}
          </h1>
          <Image
            priority={true}
            quality={100}
            src={heroSectionCards[0].imgSrc}
            alt={"clean Room image"}
            className="object-fill w-full h-full rounded-3xl  "
          />
        </div>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:grid-rows-2 grid-rows-1 items-start max-sm:gap-x-4 gap-6">
        {heroSectionCards
          ?.filter((_: any, i: number) => i !== 0)
          .map((cards, index: number) => (
            <div
              className={` col-span-1 relative ${
                index === 0 || index === 1
                  ? "-translate-y-8 max-lg:translate-y-0"
                  : ""
              }`}
              key={cards.title}
            >
              <span
                className={` whitespace-nowrap px-4 max-sm:px-2 text-xs max-sm:text-[10px] font-medium bg-white py-2 w-fit flex justify-center items-center absolute ${
                  index === 0 || index === 1
                    ? `${bottomRightRoundCorner} top-0 right-0 rounded-bl-lg ${topLeftRoundCorner} `
                    : `top-0 left-0  rounded-br-lg  ${topRightRoundCorner} ${bottomLeftRoundCorner}`
                }`}
              >
                {cards.title}
              </span>
              <Image
                priority={true}
                quality={100}
                src={cards.imgSrc}
                alt={cards.title}
                className="object-fill w-full h-full rounded-3xl"
              />
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-5 sm:hidden">
        <LinkButton label={"About Us"} link="/" />
        <BlueButtonWrapper Icon={<DownloadButtonIcon />}>
          Download Brochure
        </BlueButtonWrapper>
      </div>
    </div>
  );
}
