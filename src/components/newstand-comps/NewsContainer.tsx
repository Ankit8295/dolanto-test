import Image from "next/image";
import React from "react";
import CustomSlider from "../slider/CustomSlider";

type Props = {
  containerTitle: string;
  newsData: any[];
  relatedPostData?: any[];
  RelatedPostSliderCard?: any;
  slidePerSlider?: number;
};

export default function NewsContainer({
  containerTitle,
  newsData,
  relatedPostData,
  RelatedPostSliderCard,
  slidePerSlider = 4,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full flex flex-col gap-5 items-start">
        <h2 className="text-4xl font-medium">{containerTitle}</h2>
        <div className="w-full grid grid-cols-3 gap-y-5 gap-x-7 max-lg:grid-cols-1 grid-rows-[auto] ">
          {newsData.map((data, i) => (
            <div
              key={data.id}
              className={`flex bg-lightBLue w-full rounded-tl-xl rounded-bl-xl  ${
                i === 0
                  ? "col-span-2 max-lg:col-span-1 row-span-3 max-lg:row-span-1 col-start-1 max-lg:flex-col max-lg:gap-3"
                  : `col-span-1 col-start-3 max-lg:col-start-1 row-span-1 row-start-[${
                      i + 1
                    }]`
              }
                }`}
            >
              <div className={`${i === 0 ? "w-1/2 max-lg:w-full" : "w-2/5 "}`}>
                <Image
                  src={data.image}
                  alt={"image"}
                  className={`  rounded-tl-xl rounded-bl-xl ${
                    i === 0 ? "object-fill  h-full " : "object-fill  h-full "
                  }`}
                />
              </div>
              <div
                className={`px-3 py-5 ${
                  i === 0 ? "w-1/2" : "w-3/5"
                }   flex flex-col justify-between gap-2 items-start`}
              >
                <span>{data.identifier}</span>
                {i === 0 ? <h3>{data.brief}</h3> : <h3>{data.title}</h3>}
                <span>{data.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {relatedPostData && (
        <CustomSlider
          sliderName={containerTitle.split(" ").join()}
          slideData={relatedPostData}
          SliderCard={RelatedPostSliderCard}
          slideCount={slidePerSlider}
        />
      )}
    </div>
  );
}
