import Image from "next/image";
import React from "react";
import { BlueButtonWrapper, LinkButton } from "../buttons/Buttons";
import { BgGradientText, GradientText, HeadingTag } from "../tags/Tags";
import { DownloadButtonIcon } from "../icons/Icons";
import aboutImg from "@/public/media/homepage/home_about2.png";
import aboutImgMobile from "@/public/media/homepage/home_about.png";
import aboutClientImg from "@/public/media/homepage/home_aboutClient.png";
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
          placeholder="blur"
          quality={100}
          alt={"dolanto about image"}
          className="h-full w-full rounded-3xl max-lg:hidden"
        />
        <Image
          src={aboutImgMobile}
          placeholder="blur"
          quality={100}
          alt={"dolanto about image"}
          className="h-full w-full rounded-3xl max-lg:block hidden"
        />
      </div>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        className="max-xl:order-1 col-start-3 col-end-5 row-start-1 row-end-3  flex gap-6 flex-col max-xl:gap-4 xl:pl-10"
      >
        <BlueButtonWrapper>About Us</BlueButtonWrapper>
        <HeadingTag>
          With every Client, our{" "}
          <BgGradientText>Expertise in Fabrication</BgGradientText> unveils a
          Fresh Perspective
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
        data-aos-duration="200"
        className="max-xl:order-3 relative col-start-2 col-end-5 row-start-3 row-end-4 xl:flex gap-5 grid grid-cols-2  bg-white xl:pl-5 xl:pt-5 rounded-t-3xl"
      >
        <div className="absolute w-1/3 bg-transparent h-1/4 bottom-0 rounded-br-[35px] shadow-[3px_18px_white]  -translate-x-full left-0"></div>
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
            <GradientText customTailwindStyle="max-md:text-xs !text-lg">
              {textCard?.subTitle}
            </GradientText>
            <span className="text-sm max-md:text-[12px]">
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
