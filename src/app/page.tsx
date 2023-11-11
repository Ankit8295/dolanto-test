/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import FaqList from "@/src/components/faqList/FaqList";
import { HeadingTag } from "@/src/components/tags/Tags";
import HomeLayout from "@/src/components/layouts/HomeLayout";
import SectionC from "@/src/components/homepage-sections/SectionC";
import { faqData, offeringSectors } from "@/src/constants/homepage";
import certificateImg from "@/public/media/homepage/certificate.png";
import HeroSection from "@/src/components/homepage-sections/HeroSection";
import SectionB from "@/src/components/homepage-sections/SectionB";
import AutoSliderCard from "../components/slider/AutoSliderCard";
import SliderImageComponent from "../components/slider/slider-comp/SliderImageComponent";

export default function Page() {
  return (
    <HomeLayout>
      <HeroSection />
      <SectionB />
      <SectionC />
      <div
        data-aos="fade-top"
        className="flex justify-center items-center w-full"
      >
        <HeadingTag>We Provided offerings in different sectors</HeadingTag>
      </div>
      <div className="grid gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
        {offeringSectors.map((card) => (
          <div key={card.title} className="relative rounded-3xl h-full w-full">
            <span className="capitalize absolute left-[4%] top-[8%] bg-white md:py-2 md:px-4 md:rounded-lg px-2 py-1 text-center min-w-[100px] rounded-full">
              {card.title}
            </span>
            <Image
              src={card.image}
              width={400}
              height={200}
              alt={card.title}
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between max-lg:flex-col-reverse max-lg:gap-10">
        <div className="w-[49%] max-lg:w-full rounded-xl bg-lightBLue p-5 flex flex-col items-start gap-5">
          <div className="bg-darkBlue text-white rounded-xl py-[6px] px-3 text-sm font-medium">
            FAQ
          </div>
          <div className="flex w-full flex-col gap-2">
            {faqData.map((card) => (
              <FaqList key={card.qs} ans={card.ans} qs={card.qs} />
            ))}
          </div>
        </div>
        <div className="w-[49%] max-lg:w-full  rounded-xl flex flex-col items-start gap-10 bg-lightBLue p-5">
          <div className="bg-darkBlue text-white rounded-xl py-[6px] px-3 text-sm font-medium">
            Certificates
          </div>
          <AutoSliderCard
            slideData={certificates}
            SliderCard={SliderImageComponent}
            vertical={true}
          />
        </div>
      </div>
    </HomeLayout>
  );
}
const certificates = [
  certificateImg,
  certificateImg,
  certificateImg,
  certificateImg,
];
