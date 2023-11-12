"use client";
import AboutUsCards from "@/src/components/cards/AboutUsCards";
import PageDescription from "@/src/components/page-description/PageDescription";
import ourStoryImg from "@/public/media/about-us/story.png";
import { GradientText, HeadingTag } from "@/src/components/tags/Tags";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUsBoardSlide from "@/src/components/cards/AboutUsBoardSlide";
import { journeyDetails, teamDetails } from "@/src/constants/aboutus";
import { useEffect, useState } from "react";
import AboutUsJourneySlide from "@/src/components/cards/AboutUsJourneySlide";

export default function Page() {
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSliderWidth(window.innerWidth);

      const handleResize = () => {
        setSliderWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <>
      <PageDescription title="ABOUT US">
        Dolanto is an international leading cleanroom design, construction and
        installation company. MRC manufactures a range of cleanroom partition
        systems and accessories, as well as provides turnkey cleanroom design
        and build projects across every continent. Established in 1980 in the
        United Kingdom MRC has supported the progression of high end engineering
        industries through innovative design concepts and material technologies.
      </PageDescription>
      <AboutUsCards image={ourStoryImg} title="Our Story">
        Spectrum PharmaTECH, one of the leading Pharma Consultants in India, is
        an internationally recognised company that provides Design Engineering
        and EPC services globally to a wide range of industries such as
        Pharmaceutical, Biopharmaceuticals, Food, Beverage, and Cosmetic
        industries while meeting the most stringent regulatory requirements. We
        are ISO 9001:2015 certified.
      </AboutUsCards>
      <div
        data-aos="fade-up"
        className="max-[1750px]:max-w-[90vw] max-w-[1750px] relative mx-auto "
      >
        <Swiper
          slidesPerView={sliderWidth <= 1024 ? 1 : 3}
          navigation={{
            enabled: true,
            nextEl: ".nextA",
            prevEl: ".prevA",
          }}
          spaceBetween={sliderWidth <= 1024 ? 5 : 0}
          modules={[Navigation]}
          className="mySwiper w-[94%] max-sm:w-[85%] mx-auto mt-14"
        >
          {journeyDetails.map((journey, index) => (
            <SwiperSlide
              key={journey.year}
              className={` !flex items-center justify-center max-w-[100%]`}
            >
              <AboutUsJourneySlide
                alignTop={
                  sliderWidth <= 1024 ? true : index % 2 === 0 ? true : false
                }
                data={journey}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prevA group absolute top-1/2 translate-y-1/3 left-0 disabled:cursor-not-allowed ">
          <svg
            width="30"
            height="25"
            viewBox="0 0 23 20"
            className="group-disabled:opacity-40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3534 0.961899C10.4774 1.08546 10.5758 1.23227 10.6429 1.39392C10.71 1.55558 10.7446 1.7289 10.7446 1.90393C10.7446 2.07897 10.71 2.25228 10.6429 2.41394C10.5758 2.57559 10.4774 2.72241 10.3534 2.84596L4.64693 8.55247L20.9386 8.55247C21.2913 8.55247 21.6295 8.69259 21.879 8.942C22.1284 9.19141 22.2685 9.52968 22.2685 9.8824C22.2685 10.2351 22.1284 10.5734 21.879 10.8228C21.6295 11.0722 21.2913 11.2123 20.9386 11.2123L4.64693 11.2123L10.3534 16.921C10.6033 17.1709 10.7436 17.5097 10.7436 17.8631C10.7436 18.2164 10.6033 18.5553 10.3534 18.8051C10.1036 19.055 9.76473 19.1953 9.4114 19.1953C9.05807 19.1953 8.71921 19.055 8.46937 18.8051L0.489794 10.8255C0.365809 10.702 0.267434 10.5552 0.20031 10.3935C0.133186 10.2319 0.0986329 10.0585 0.0986329 9.8835C0.0986329 9.70847 0.133186 9.53515 0.20031 9.3735C0.267434 9.21184 0.365809 9.06503 0.489794 8.94147L8.46937 0.961899C8.59292 0.837916 8.73974 0.73954 8.90139 0.672415C9.06305 0.605291 9.23636 0.570736 9.4114 0.570736C9.58644 0.570736 9.75975 0.605291 9.92141 0.672415C10.0831 0.73954 10.2299 0.837916 10.3534 0.961899Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="nextA group absolute top-1/2 translate-y-1/3 right-0 disabled:cursor-not-allowed ">
          <svg
            width="30"
            className="group-disabled:opacity-40"
            height="25"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.212 18.8027C12.088 18.6792 11.9896 18.5324 11.9225 18.3707C11.8554 18.2091 11.8208 18.0358 11.8208 17.8607C11.8208 17.6857 11.8554 17.5124 11.9225 17.3507C11.9896 17.1891 12.088 17.0422 12.212 16.9187L17.9185 11.2122L1.62687 11.2122C1.27415 11.2122 0.93588 11.0721 0.686471 10.8227C0.437061 10.5732 0.296943 10.235 0.296943 9.88225C0.296943 9.52953 0.437061 9.19126 0.686472 8.94185C0.93588 8.69244 1.27415 8.55232 1.62687 8.55232L17.9185 8.55232L12.212 2.8436C11.9622 2.59376 11.8218 2.2549 11.8218 1.90157C11.8218 1.54824 11.9622 1.20938 12.212 0.959538C12.4618 0.709696 12.8007 0.569336 13.154 0.569336C13.5074 0.569336 13.8462 0.709696 14.0961 0.959539L22.0756 8.93911C22.1996 9.06267 22.298 9.20948 22.3651 9.37114C22.4322 9.53279 22.4668 9.70611 22.4668 9.88114C22.4668 10.0562 22.4322 10.2295 22.3651 10.3912C22.298 10.5528 22.1996 10.6996 22.0756 10.8232L14.0961 18.8027C13.9725 18.9267 13.8257 19.0251 13.664 19.0922C13.5024 19.1594 13.3291 19.1939 13.154 19.1939C12.979 19.1939 12.8057 19.1594 12.644 19.0922C12.4824 19.0251 12.3356 18.9267 12.212 18.8027Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="max-[1750px]:max-w-[90vw] max-w-[1750px] relative mx-auto flex flex-col items-center gap-5">
        <HeadingTag customTailwindStyle=" w-full flex items-center justify-center">
          <GradientText customTailwindStyle="text-center font-bold">
            “MEET THE BOARD BEHIND THE SUCCESS”
          </GradientText>
        </HeadingTag>
        <Swiper
          slidesPerView={sliderWidth <= 1024 ? 1.2 : 4}
          navigation={{
            enabled: true,
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Navigation]}
          spaceBetween={20}
          className="mySwiper w-full"
        >
          {teamDetails.map((teamMember, index) => (
            <SwiperSlide
              key={teamMember.name}
              className={`max-2xl:min-h-[350px] max-2xl:max-h-[350px] min-h-[550px] max-h-[550px] !flex ${
                sliderWidth < 1024
                  ? "!items-center"
                  : index % 2 === 0
                  ? "!items-start"
                  : "!items-end"
              } justify-center `}
            >
              <AboutUsBoardSlide image={teamMember.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative flex justify-end gap-5  w-[90%] mx-auto  mb-20 max-lg:mb-10">
          <button className="prev group  disabled:cursor-not-allowed ">
            <svg
              width="30"
              height="25"
              viewBox="0 0 23 20"
              className="group-disabled:opacity-40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3534 0.961899C10.4774 1.08546 10.5758 1.23227 10.6429 1.39392C10.71 1.55558 10.7446 1.7289 10.7446 1.90393C10.7446 2.07897 10.71 2.25228 10.6429 2.41394C10.5758 2.57559 10.4774 2.72241 10.3534 2.84596L4.64693 8.55247L20.9386 8.55247C21.2913 8.55247 21.6295 8.69259 21.879 8.942C22.1284 9.19141 22.2685 9.52968 22.2685 9.8824C22.2685 10.2351 22.1284 10.5734 21.879 10.8228C21.6295 11.0722 21.2913 11.2123 20.9386 11.2123L4.64693 11.2123L10.3534 16.921C10.6033 17.1709 10.7436 17.5097 10.7436 17.8631C10.7436 18.2164 10.6033 18.5553 10.3534 18.8051C10.1036 19.055 9.76473 19.1953 9.4114 19.1953C9.05807 19.1953 8.71921 19.055 8.46937 18.8051L0.489794 10.8255C0.365809 10.702 0.267434 10.5552 0.20031 10.3935C0.133186 10.2319 0.0986329 10.0585 0.0986329 9.8835C0.0986329 9.70847 0.133186 9.53515 0.20031 9.3735C0.267434 9.21184 0.365809 9.06503 0.489794 8.94147L8.46937 0.961899C8.59292 0.837916 8.73974 0.73954 8.90139 0.672415C9.06305 0.605291 9.23636 0.570736 9.4114 0.570736C9.58644 0.570736 9.75975 0.605291 9.92141 0.672415C10.0831 0.73954 10.2299 0.837916 10.3534 0.961899Z"
                fill="black"
              />
            </svg>
          </button>
          <button className="next group disabled:cursor-not-allowed">
            <svg
              width="30"
              className="group-disabled:opacity-40"
              height="25"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.212 18.8027C12.088 18.6792 11.9896 18.5324 11.9225 18.3707C11.8554 18.2091 11.8208 18.0358 11.8208 17.8607C11.8208 17.6857 11.8554 17.5124 11.9225 17.3507C11.9896 17.1891 12.088 17.0422 12.212 16.9187L17.9185 11.2122L1.62687 11.2122C1.27415 11.2122 0.93588 11.0721 0.686471 10.8227C0.437061 10.5732 0.296943 10.235 0.296943 9.88225C0.296943 9.52953 0.437061 9.19126 0.686472 8.94185C0.93588 8.69244 1.27415 8.55232 1.62687 8.55232L17.9185 8.55232L12.212 2.8436C11.9622 2.59376 11.8218 2.2549 11.8218 1.90157C11.8218 1.54824 11.9622 1.20938 12.212 0.959538C12.4618 0.709696 12.8007 0.569336 13.154 0.569336C13.5074 0.569336 13.8462 0.709696 14.0961 0.959539L22.0756 8.93911C22.1996 9.06267 22.298 9.20948 22.3651 9.37114C22.4322 9.53279 22.4668 9.70611 22.4668 9.88114C22.4668 10.0562 22.4322 10.2295 22.3651 10.3912C22.298 10.5528 22.1996 10.6996 22.0756 10.8232L14.0961 18.8027C13.9725 18.9267 13.8257 19.0251 13.664 19.0922C13.5024 19.1594 13.3291 19.1939 13.154 19.1939C12.979 19.1939 12.8057 19.1594 12.644 19.0922C12.4824 19.0251 12.3356 18.9267 12.212 18.8027Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <AboutUsCards reverse={true} image={ourStoryImg} title="Our Mission">
        Spectrum PharmaTECH, one of the leading Pharma Consultants in India, is
        an internationally recognised company that provides Design Engineering
        and EPC services globally to a wide range of industries such as
        Pharmaceutical, Biopharmaceuticals, Food, Beverage, and Cosmetic
        industries while meeting the most stringent regulatory requirements. We
        are ISO 9001:2015 certified.
      </AboutUsCards>
      <AboutUsCards image={ourStoryImg} title="Our Vision">
        Spectrum PharmaTECH, one of the leading Pharma Consultants in India, is
        an internationally recognised company that provides Design Engineering
        and EPC services globally to a wide range of industries such as
        Pharmaceutical, Biopharmaceuticals, Food, Beverage, and Cosmetic
        industries while meeting the most stringent regulatory requirements. We
        are ISO 9001:2015 certified.
      </AboutUsCards>
    </>
  );
}
