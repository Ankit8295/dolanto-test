/* eslint-disable @next/next/no-img-element */
"use client";
import { StaticImageData } from "next/image";

type Props = {
  data: StaticImageData;
};

export default function SliderImageComponent({ data }: Props) {
  return (
    <img
      src={data.src}
      alt={"certificates"}
      loading="lazy"
      placeholder="blur"
      className=" w-full h-full object-cover object-center max-h-[500px] max-w-[400px] self-center"
    />
  );
}
