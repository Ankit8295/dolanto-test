import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  slideData: any;
  SliderCard: any;
};

export default function CustomSlider({ slideData, SliderCard }: Props) {
  return (
    <div
      data-aos="fade-up"
      className="max-w-[1750px] max-[1750px]:max-w-[90vw] relative mx-auto "
    >
      <Swiper
        slidesPerView={1.2}
        speed={800}
        spaceBetween={30}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className={`mySwiper w-full mx-auto `}
      >
        {slideData.map((data: any) => (
          <SwiperSlide
            key={data.id}
            className={` !flex items-center justify-center max-w-[100%]`}
          >
            <SliderCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
