import Image from "next/image";
import React from "react";
import { BlueButtonWrapper, LinkButton } from "../buttons/Buttons";
import { GradientText, HeadingTag } from "../tags/Tags";
import { DownloadButtonIcon } from "../icons/Icons";
import aboutImg from "@/public/media/homepage/home_about.png";
import aboutClientImg from "@/public/media/homepage/home_aboutClient.png";
import reviewAboutImg from "@/public/media/homepage/reviewAbout.png";
import { homeAboutCards, userTestimonialData } from "@/src/constants/homepage";
import { routes } from "@/src/constants/routes";
import AutoSliderCard from "../slider/AutoSliderCard";
import SliderUserTestimonialCard from "../slider/slider-comp/SliderUserTestimonialCard";

export default function SectionB() {
  return (
    <div className="flex flex-col xl:grid grid-cols-4 grid-rows-3  grid-flow-col max-xl:gap-6">
      <div
        data-aos="fade-right"
        className="max-xl:order-2 col-start-1 col-end-3 row-start-1 row-end-4"
      >
        <Image
          src={aboutImg}
          priority={true}
          quality={100}
          height={500}
          alt={"dolanto about image"}
          className="object-cover h-full w-full max-h-[800px]  rounded-3xl"
        />
      </div>
      <div
        data-aos="fade-top"
        className="max-xl:order-1 col-start-3 col-end-5 row-start-1 row-end-3  flex justify-between flex-col max-xl:gap-6 xl:pl-10"
      >
        <BlueButtonWrapper>About Us</BlueButtonWrapper>
        <HeadingTag>
          With each client, we <GradientText>strive</GradientText> to stand out
          from the crowd and bring a fresh wind of change
        </HeadingTag>
        <Image
          src={aboutClientImg}
          alt={"dolanto clients image"}
          className="object-cover"
        />
        <div className="flex gap-5 items-center max-xl:hidden w-fit whitespace-nowrap">
          <LinkButton
            customStyles="rounded-full"
            label={"Contact Us"}
            link={routes.contact_us}
          />
          <BlueButtonWrapper
            rounded="rounded-full"
            Icon={<DownloadButtonIcon />}
          >
            Download Brochure
          </BlueButtonWrapper>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="max-xl:order-3 col-start-2 col-end-5 row-start-3 row-end-4 xl:flex gap-5 grid grid-cols-2  bg-white xl:pl-5 xl:pt-5 rounded-t-3xl"
      >
        {homeAboutCards.map((textCard, index) => (
          <div
            key={textCard.title}
            className={`bg-lightBLue  flex flex-col  items-start gap-2 rounded-3xl p-5 max-sm:p-3 ${
              index === 2 ? "flex-[0.9]" : "flex-1"
            }`}
          >
            <GradientText customTailwindStyle="text-[40px]   font-medium ">
              {textCard?.title}
            </GradientText>
            <GradientText customTailwindStyle="max-md:text-xs">
              {textCard?.subTitle}
            </GradientText>
            <span className="text-xs max-md:text-[11px]">
              {textCard?.description}
            </span>
          </div>
        ))}
        <div className="max-w-[280px] rounded-3xl overflow-hidden max-xl:w-full max-xl:max-w-full p-5 col-span-2 flex-[1.7] bg-lightBLue w-80 h-[260px]">
          <AutoSliderCard
            SliderCard={SliderUserTestimonialCard}
            slideData={userTestimonialData}
          />
        </div>
      </div>
      <div className=" xl:hidden order-4 max-sm:flex-col flex gap-5 items-center flex-wrap justify-center w-full whitespace-nowrap">
        <LinkButton
          customStyles="rounded-full flex-1"
          label={"Contact Us"}
          link={routes.contact_us}
        />
        <BlueButtonWrapper
          width="w-full"
          rounded="rounded-full flex-1"
          Icon={<DownloadButtonIcon />}
        >
          Download Brochure
        </BlueButtonWrapper>
      </div>
      <div className="col-start-2 row-start-2 w-full h-full rounded-3xl  shadow-[20px_20px_white] hidden xl:block "></div>
      <div className="col-start-1 row-start-3 w-full h-full rounded-3xl  shadow-[20px_20px_white] hidden xl:block"></div>
    </div>
  );
}
