"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
type Props = {
  slideData: any[];
  SliderCard: any;
  vertical?: boolean;
};

export default function AutoSliderCard({
  SliderCard,
  slideData,
  vertical = false,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={`w-full  h-full flex  ${
        vertical ? "flex-col" : "flex-row"
      } gap-5`}
    >
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        direction={vertical ? "horizontal" : "vertical"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay]}
        className="mySwiper w-[95%] mx-auto "
      >
        {slideData.map((data: any, i: number) => (
          <SwiperSlide
            key={i + data.length}
            className={` !flex items-center justify-center max-w-[100%]`}
          >
            <SliderCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`flex items-center ${
          vertical ? "flex-row" : "flex-col"
        } justify-center gap-1`}
      >
        {slideData.map((_: any, i: number) => (
          <>
            <div
              className={`w-2 h-2 ${
                activeIndex >= i ? "opacity-100" : "opacity-25"
              } rounded-full bg-footerColor transition`}
              key={i}
            ></div>
            {i < slideData.length - 1 && (
              <div
                key={i + 10}
                className={` ${!vertical ? "h-10 w-[2px]" : "w-10 h-[2px]"} ${
                  activeIndex >= i + 1 ? "opacity-100" : "opacity-25"
                }  bg-footerColor  transition`}
              ></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
