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
import SectorsOffering from "../components/homepage-sections/SectorsOffering";
import CardsSection from "../components/homepage-sections/DynamicCardsSection";

export default function Page() {
  return (
    <HomeLayout>
      <HeroSection />
      <SectionB />
      <SectionC />
      <SectorsOffering />
      <CardsSection />
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
