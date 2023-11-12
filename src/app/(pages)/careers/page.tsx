import { GradientText, HeadingTag } from "@/src/components/tags/Tags";
import careersImg from "@/public/media/careers/careers.png";
import Image from "next/image";
import { careerCard2Data, careerCardData } from "@/src/constants/career";
import CareerCard from "@/src/components/careers/CareerCard";
import JobDetail from "@/src/components/careers/JobDetail";
import { jobDetail } from "@/src/constants/career/jobs";
import AutoSliderCard from "@/src/components/slider/AutoSliderCard";
import SliderUserTestimonialCard from "@/src/components/slider/slider-comp/SliderUserTestimonialCard";
import { userTestimonialData } from "@/src/constants/homepage";
export default function page() {
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
            We are
            <GradientText> Gathering</GradientText> a team of{" "}
            <GradientText>Like-minded People</GradientText> who are ready to
            grow professionally.
          </HeadingTag>
          <div className="grid grid-cols-4 gap-x-3 max-sm:gap-2 items-center">
            {careerCardData.map((card) => (
              <CareerCard text={card.text} key={card.text}>
                {card.imgIcon}
              </CareerCard>
            ))}
          </div>
        </div>
        <div className="w-full h-full" data-aos="fade-left">
          <Image
            src={careersImg}
            alt="career image"
            priority={true}
            quality={100}
            className="object-center rounded-xl w-full h-full  max-[1200px]:w-full"
          />
        </div>
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
            }] xl:col-span-2 rounded-2xl xl:row-start-1 col-span-1  flex flex-col items-start justify-center`}
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
          className={`bg-lightBLue xl:bg-footerColor xl:text-white whitespace-nowrap text-[#002964] xl:col-start-9 xl:col-span-1 text-xs p-3 rounded-2xl flex items-center justify-center`}
        >
          <p className="xl:-rotate-90">View Openings</p>
        </div>
      </div>
      <div className="w-full pt-5 flex flex-col items-start gap-7">
        {jobDetail.map((job, i) => (
          <JobDetail key={i} job={job} />
        ))}
      </div>
    </div>
  );
}
