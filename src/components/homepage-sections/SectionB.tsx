import Image from "next/image";
import React from "react";
import { BlueButtonWrapper, LinkButton } from "../buttons/Buttons";
import { GradientText, HeadingTag } from "../tags/Tags";
import { DownloadButtonIcon } from "../icons/Icons";
import aboutImg from "@/public/media/homepage/home_about.png";
import aboutClientImg from "@/public/media/homepage/home_aboutClient.png";
import reviewAboutImg from "@/public/media/homepage/reviewAbout.png";
import { homeAboutCards } from "@/src/constants/homepage";

export default function SectionB() {
  return (
    <div className="flex flex-col lg:grid grid-cols-4 grid-rows-3  grid-flow-col">
      <div className="max-lg:order-2 col-start-1 col-end-3 row-start-1 row-end-4">
        <Image
          src={aboutImg}
          priority={true}
          quality={100}
          height={500}
          alt={"dolanto about image"}
          className="object-fill  h-full w-full rounded-3xl"
        />
      </div>
      <div className="max-lg:order-1 col-start-3 col-end-5 row-start-1 row-end-3">
        <div className="pl-6 max-lg:pl-0">
          <BlueButtonWrapper>About Us</BlueButtonWrapper>
        </div>
        <div className="pl-6 w-full  max-lg:pl-0">
          <HeadingTag>
            With each client, we <GradientText>strive</GradientText> to stand
            out from the crowd and bring a fresh wind of change
          </HeadingTag>
        </div>
        <Image
          src={aboutClientImg}
          priority={true}
          quality={100}
          alt={"dolanto clients image"}
          className="object-fill w-[40%] h-full max-h-14 pl-6  max-lg:pl-0"
        />
        <div className="flex gap-5 w-full pl-6 pb-10  max-lg:pl-0 max-lg:flex-col">
          <LinkButton label={"Contact Us"} link="/" />
          <BlueButtonWrapper Icon={<DownloadButtonIcon />}>
            Download Brochure
          </BlueButtonWrapper>
        </div>
      </div>

      <div className="max-lg:order-3 col-start-2 col-end-5 row-start-3 row-end-4 lg:flex gap-5 grid grid-cols-2  bg-white lg:pl-5 lg:pt-5 rounded-t-3xl">
        {homeAboutCards.map((textCard) => (
          <div
            key={textCard.title}
            className={`bg-lightBLue  flex flex-col items-start gap-2 rounded-3xl p-3 flex-1`}
          >
            <GradientText customTailwindStyle="text-5xl  max-lg:text-2xl font-medium">
              {textCard?.title}
            </GradientText>
            <GradientText>{textCard?.subTitle}</GradientText>
            <span className="text-xs">{textCard?.description}</span>
          </div>
        ))}
        <div className="bg-lightBLue max-w-[25%]   max-lg:max-w-full max-lg:grow flex flex-col items-start gap-2 rounded-3xl p-3 col-span-2 ">
          <span className="text-xs">
            “Exceptional Precision and Quality! Dolanto’s clean room solution
            exceeded our expectations. Their meticulous attention to detail and
            unwavering commitment to delivering a clean room environment truly
            impressed us.”
          </span>
          <div className="flex gap-2">
            <Image
              width={20}
              height={20}
              priority={true}
              quality={100}
              src={reviewAboutImg}
              alt="review person image"
              className=" object-fill"
            />
            <div className="flex flex-col items-start">
              <span className="text-xs">Sarah Johnson</span>
              <span className="text-xs">Managing Director at L&T</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-2 row-start-2 w-full h-full rounded-3xl  shadow-[20px_20px_white] hidden lg:block "></div>
      <div className="col-start-1 row-start-3 w-full h-full rounded-3xl  shadow-[20px_20px_white] hidden lg:block"></div>
    </div>
  );
}
