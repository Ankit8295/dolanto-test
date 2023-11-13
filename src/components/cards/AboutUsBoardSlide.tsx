import Image, { StaticImageData } from "next/image";
import React from "react";
import { GradientText } from "../tags/Tags";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../icons/Icons";
import Link from "next/link";

type Props = {
  index: number;
  data: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
    socialLinks: {
      linkedin: string;
      facebook: string;
      twitter: string;
      instagram: string;
    };
  };
};

export default function AboutUsBoardSlide({ data, index }: Props) {
  return (
    <div
      data-aos="fade-up"
      className={`${
        index % 2 === 0 ? "mt-10" : "mb-10"
      } w-full group relative flex items-center justify-center`}
    >
      <Image
        src={data.image}
        alt="empA"
        className="object-contain lg:object-fill lg:w-full h-full"
      />
      <div className="absolute group-hover:bottom-0 bg-white bottom-[-100%] max-lg:bottom-0 transition-all duration-300 pl-5 py-5 w-full flex flex-col  gap-1 items-start">
        <GradientText customTailwindStyle="capitalize text-2xl leading-none">
          {data.name}
        </GradientText>
        <span className="text-sm">{data.designation}</span>
        <div className="flex gap-4 pt-2 items-center">
          <Link href={data.socialLinks.linkedin}>
            <LinkedinIcon opacity={0.3} />
          </Link>
          <Link href={data.socialLinks.facebook}>
            <FacebookIcon opacity={0.3} />
          </Link>
          <Link href={data.socialLinks.instagram}>
            <InstagramIcon opacity={0.3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
