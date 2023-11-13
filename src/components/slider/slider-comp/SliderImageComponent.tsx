"use client";
import Image from "next/image";

type Props = {
  data: any;
};

export default function SliderImageComponent({ data }: Props) {
  return (
    <Image
      src={data}
      alt={""}
      loading="lazy"
      placeholder="blur"
      objectFit="cover"
      objectPosition="center"
      className=" w-full h-full self-center"
    />
  );
}
