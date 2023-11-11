"use client";
import Image from "next/image";

type Props = {
  data: any;
};

export default function SliderImageComponent({ data }: Props) {
  return <Image src={data} alt={""} className="object-fill self-center" />;
}
