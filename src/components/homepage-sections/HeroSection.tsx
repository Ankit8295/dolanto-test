import { heroSectionCards } from "@/src/constants/homepage";
import Image from "next/image";
import React from "react";
import { BlueButtonWrapper, LinkButton } from "../buttons/Buttons";
import { DownloadButtonIcon, TiltArrow } from "../icons/Icons";
import { BgGradientText, HeadingTag } from "../tags/Tags";
import { routes } from "@/src/constants/routes";

export default function HeroSection() {
  return (
    <div className="grid grid-col-2 lg:grid-cols-4 gap-7 max-sm:gap-5 overflow-hidden pt-5">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        className="col-span-2 flex gap-5 flex-col pb-4 max-sm:pb-0"
      >
        <HeadingTag>
          Presenting <BgGradientText>Engineering Prowess</BgGradientText> with a
          Key Focus on Details
        </HeadingTag>
        <div className="flex gap-5 max-sm:hidden w-fit whitespace-nowrap">
          <LinkButton
            customStyles="rounded-full"
            label={"About Us"}
            link={routes.about_us}
          />
          <BlueButtonWrapper
            rounded="rounded-full"
            Icon={<DownloadButtonIcon />}
          >
            Download Brochure
          </BlueButtonWrapper>
        </div>
      </div>
      {heroSectionCards.map((cards, index: number) => (
        <div
          className={`relative overflow-hidden group ${
            index === 0 ? "col-span-2" : "col-span-1"
          }`}
          data-aos={`${index === 0 ? "fade-down" : ""}${
            index === 1 ? "fade-right" : ""
          }${index === 4 ? "fade-left" : ""}${index === 2 ? "fade-up" : ""}${
            index === 3 ? "fade-up" : ""
          }`}
          key={cards.title}
        >
          <span
            className={` whitespace-nowrap px-4 max-sm:px-2 text-lg leading-none max-sm:text-[10px] font-medium bg-white z-40 py-2 w-fit absolute ${
              index === 1 || index === 2
                ? ` top-0 right-0  rounded-bl-2xl after:absolute after:w-full after:h-2/3  after:top-0 after:rounded-tr-2xl after:left-[-100%] after:shadow-[3px_-8px_white]
                  before:absolute before:w-1/2 before:h-full  before:top-[100%] before:rounded-tr-2xl before:right-0 before:shadow-[3px_-8px_white] before:z-10 `
                : `top-0 left-0 rounded-br-2xl after:absolute after:w-full after:h-2/3 after:top-0 after:rounded-tl-2xl after:left-[100%] after:shadow-[-3px_-8px_white]
                before:absolute before:w-1/2 before:h-full  before:top-[100%] before:rounded-tl-2xl before:left-0 before:shadow-[-3px_-8px_white] before:z-10 
                `
            }`}
          >
            {cards.title}
          </span>
          <Image
            src={cards.imgSrc}
            alt={cards.title}
            priority={true}
            placeholder="blur"
            objectFit="cover"
            objectPosition="center"
            className=" w-full h-full rounded-3xl"
          />
          <div
            className={`flex flex-col max-lg:hidden  ${
              index === 0
                ? "w-[70%] left-[2.5%] translate-y-[72.5%] group-hover:-translate-y-[7.5%]"
                : " w-[90%] left-0 right-0 translate-y-[72.5%] group-hover:-translate-y-[7.5%]"
            }  gap-5 items-start absolute  z-20 mx-auto bottom-0  transition-transform duration-500 `}
          >
            <div className="bg-white  rounded-lg p-2 cursor-pointer flex items-center justify-center">
              <TiltArrow />
            </div>
            <div className=" text-black text-sm max-lg:text-xs   font-light bg-white p-2 rounded-xl">
              {cards.summary}
            </div>
          </div>
        </div>
      ))}

      <div className="col-span-2 flex gap-5 sm:hidden max-sm:flex-col  items-center flex-wrap justify-center w-full whitespace-nowrap">
        <LinkButton
          customStyles="rounded-full flex-1"
          label={"About Us"}
          link={routes.about_us}
        />
        <BlueButtonWrapper
          width="w-full"
          rounded="rounded-full flex-1"
          Icon={<DownloadButtonIcon />}
        >
          Download Brochure
        </BlueButtonWrapper>
      </div>
    </div>
  );
}
