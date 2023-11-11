"use client";
import Image from "next/image";

type Props = {
  data: any;
};

export default function SliderUserTestimonialCard({ data }: Props) {
  return (
    <div className="bg-lightBLue w-full  flex flex-col  gap-2 justify-between   max-md:text-[11px] text-xs">
      <span>{`"${data.comment}"`}</span>
      <div className="flex gap-2">
        <Image
          width={30}
          height={30}
          src={data?.image}
          alt="review person image"
          className="object-contain"
        />
        <div className="flex flex-col items-start">
          <span>{data.name}</span>
          <span>{data.designation}</span>
        </div>
      </div>
    </div>
  );
}
