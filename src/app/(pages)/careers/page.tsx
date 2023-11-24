"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BgGradientText,
  GradientText,
  HeadingTag,
} from "@/src/components/tags/Tags";
import careersImg from "@/public/media/careers/careers.webp";
import Image from "next/image";
import { careerCard2Data, careerCardData } from "@/src/constants/career";
import CareerCard from "@/src/components/careers/CareerCard";
import JobDetail from "@/src/components/careers/JobDetail";
import { jobDetail } from "@/src/constants/career/jobs";
import AutoSliderCard from "@/src/components/slider/AutoSliderCard";
import SliderUserTestimonialCard from "@/src/components/slider/slider-comp/SliderUserTestimonialCard";
import { userTestimonialData } from "@/src/constants/homepage";
export default function Page() {
  const data = useMemo(() => {
    return jobDetail;
  }, []);
  const jobCards = useRef<HTMLDivElement>(null);
  const [currJobState, setCurrJobState] = useState("");
  const [currJobData, setCurrJobData] = useState(data);

  function moveToJob() {
    if (jobCards.current) {
      jobCards.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  useEffect(() => {
    if (currJobState === "") {
      return setCurrJobData(data);
    }
    if (jobDetail.length > 0) {
      return setCurrJobData(
        data.filter((data) => data.department === currJobState)
      );
    }
    setCurrJobData(data);
  }, [currJobState, data]);
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-x-8  max-[1200px]:gap-x-0 max-[1200px]:gap-y-8 max-[1200px]:grid-cols-1 max-[1200px]:grid-rows-[auto]">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          className="flex flex-col max-[1200px]:gap-8 justify-between"
        >
          <HeadingTag>
            We constantly scout talent who dream in
            <BgGradientText> Developing</BgGradientText> their{" "}
            <BgGradientText>Career.</BgGradientText>
          </HeadingTag>
          <div className="grid grid-cols-4 gap-x-3 max-sm:gap-2 items-center">
            {careerCardData.map((card) => (
              <CareerCard text={card.text} key={card.text}>
                {card.imgIcon}
              </CareerCard>
            ))}
          </div>
        </div>
        <Image
          src={careersImg}
          alt="career image"
          loading="lazy"
          placeholder="blur"
          objectFit="cover"
          objectPosition="center"
          data-aos="fade-left"
          className="h-full w-full"
        />
      </div>
      <div
        data-aos="fade-up"
        className={`grid grid-cols-2 xl:grid-cols-9 xl:grid-rows-1  gap-y-2 gap-x-2`}
      >
        <div className="rounded-3xl overflow-hidden xl:col-start-7  p-5 col-span-2  bg-lightBLue  h-[175px] xl:h-[225px]">
          <AutoSliderCard
            SliderCard={SliderUserTestimonialCard}
            slideData={userTestimonialData}
          />
        </div>
        {careerCard2Data.map((card, i) => (
          <div
            key={i}
            className={`bg-lightBLue p-3 xl:col-start-[${
              (i === 0 && 1) || (i === 1 && 3) || (i === 2 && 5)
            }] xl:col-span-2 rounded-2xl xl:row-start-1 col-span-1  flex flex-col items-start justify-start pt-5`}
          >
            <div>
              <GradientText customTailwindStyle="text-[32px] xl:text-5xl font-medium leading-tight">
                {card.title}
              </GradientText>
            </div>
            <GradientText customTailwindStyle="text-[11px] xl:text-[22px] font-medium">
              {card.subTitle}
            </GradientText>
            <p className="text-[10px] xl:text-base font-normal leading-normal">
              {card.description}
            </p>
          </div>
        ))}
        <div
          onClick={moveToJob}
          className={`cursor-pointer bg-lightBLue xl:bg-footerColor xl:text-white whitespace-nowrap text-[#002964] xl:col-start-9 xl:col-span-1 text-xs p-3 rounded-2xl flex items-center justify-center`}
        >
          <p className="xl:-rotate-90">View Openings</p>
        </div>
      </div>

      <div className="w-full pt-5 flex flex-col items-start gap-7">
        <div className="text-lg flex gap-5 max-md:grid max-md:grid-cols-2">
          <div
            onClick={() => setCurrJobState("")}
            className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black ${
              currJobState.length > 0
                ? "bg-lightBLue"
                : "bg-gradient-main text-white"
            }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
          >
            <span>All</span>
          </div>
          <div
            onClick={() => setCurrJobState("Development")}
            className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black  ${
              currJobState === "Development"
                ? "bg-gradient-main text-white "
                : "bg-lightBLue"
            }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
          >
            <span>Development</span>
          </div>
          <div
            onClick={() => setCurrJobState("Customer Services")}
            className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black  ${
              currJobState === "Customer Services"
                ? "bg-gradient-main text-white "
                : "bg-lightBLue"
            }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
          >
            Customer Services
          </div>
          <div
            onClick={() => setCurrJobState("Design")}
            className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black  ${
              currJobState === "Design"
                ? "bg-gradient-main text-white "
                : "bg-lightBLue"
            }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
          >
            <span>Design</span>
          </div>
        </div>
        <div ref={jobCards} className="w-full flex flex-col gap-5">
          {currJobData.map((job, i) => (
            <JobDetail key={i} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
