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
    <div className="grid relative grid-cols-2 max-lg:grid-cols-1 max-lg:grid-rows-[auto]  gap-5">
      <div className="w-full  relative rounded-3xl">
        <Image
          src={aboutImg}
          priority={true}
          quality={100}
          height={500}
          alt={"dolanto about image"}
          className="object-fill  h-full w-full rounded-3xl"
        />
        {/* {homeAboutCards
          .filter((card, i) => i === 0)
          .map((textCard) => (
            <div
              key={textCard.title}
              className="bg-lightBLue max-lg:hidden   absolute bottom-0 right-0 max-w-[31%] max-lg:max-w-[48%]  max-lg:gap-0 max-lg:grow flex flex-col items-start gap-2 rounded-3xl p-6 "
            >
              <GradientText customTailwindStyle="text-5xl">
                {textCard?.title}
              </GradientText>
              <GradientText>{textCard?.subTitle}</GradientText>
              <span className="text-xs">{textCard?.description}</span>
            </div>
          ))} */}
      </div>

      <div className="w-full  h-[70%] flex flex-col items-start justify-between ">
        <div className="pl-6 max-lg:hidden">
          <BlueButtonWrapper>About Us</BlueButtonWrapper>
        </div>
        <div className="pl-6 w-full  max-lg:hidden">
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
          className="object-fill w-[40%] h-full max-h-14 pl-6  max-lg:hidden"
        />
        <div className="flex gap-5 w-full pl-6 pb-10  max-lg:hidden">
          <LinkButton label={"Contact Us"} link="/" />
          <BlueButtonWrapper Icon={<DownloadButtonIcon />}>
            Download Brochure
          </BlueButtonWrapper>
        </div>

        <div className="flex w-full absolute p-3 rounded-3xl bottom-0 right-0 z-10 bg-white max-h-[35%] max-w-[75%] gap-5 max-lg:gap-0 max-lg:gap-y-5 max-lg:justify-between max-lg:flex-wrap ">
          {homeAboutCards
            .filter((card, i) => i === 0)
            .map((textCard) => (
              <div
                key={textCard.title}
                className="bg-lightBLue hidden max-lg:flex  w-full  max-lg:gap-0 max-lg:grow flex-col items-start gap-2 rounded-3xl p-3 "
              >
                <GradientText customTailwindStyle="text-5xl  max-lg:text-2xl font-medium">
                  {textCard?.title}
                </GradientText>
                <GradientText>{textCard?.subTitle}</GradientText>
                <span className="text-xs">{textCard?.description}</span>
              </div>
            ))}
          {homeAboutCards.map((textCard) => (
            <div
              key={textCard.title}
              className={`bg-lightBLue  max-w-[25%]   max-lg:max-w-[48%]  max-lg:gap-0 max-lg:grow flex flex-col items-start gap-2 rounded-3xl p-3`}
            >
              <GradientText customTailwindStyle="text-5xl  max-lg:text-2xl font-medium">
                {textCard?.title}
              </GradientText>
              <GradientText>{textCard?.subTitle}</GradientText>
              <span className="text-xs">{textCard?.description}</span>
            </div>
          ))}
          <div className="bg-lightBLue max-w-[25%]   max-lg:max-w-full max-lg:grow flex flex-col items-start gap-2 rounded-3xl p-3  ">
            <span className="text-xs">
              “Exceptional Precision and Quality! Dolanto’s clean room solution
              exceeded our expectations. Their meticulous attention to detail
              and unwavering commitment to delivering a clean room environment
              truly impressed us.”
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
      </div>
    </div>
  );
}
