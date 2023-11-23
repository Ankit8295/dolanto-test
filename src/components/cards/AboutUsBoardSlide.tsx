import Image, { StaticImageData } from "next/image";
import React from "react";
import { GradientText } from "../tags/Tags";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../icons/Icons";
import Link from "next/link";

type Props = {
  data: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
    socialLinks: {
      linkedin: string;
      facebook: string;
      instagram: string;
    };
  };
};

export default function AboutUsBoardSlide({ data }: Props) {
  return (
    <div
      data-aos="fade-up"
      className={`w-full group relative lg:shadow rounded-[35px] lg:border overflow-hidden flex max-lg:flex-col items-center justify-center max-lg:gap-3`}
    >
      <Image
        src={data.image}
        alt="empA"
        loading="lazy"
        placeholder="blur"
        objectFit="cover"
        objectPosition="center"
        className="w-full h-full "
      />
      <div className="absolute max-lg:relative group-hover:bottom-0 max-lg:bg-lightBLue max-lg:rounded-3xl bg-white bottom-[-100%] max-lg:bottom-[0] transition-all duration-300 pl-5 py-5 w-full flex flex-col  gap-1 items-start">
        <GradientText customTailwindStyle="capitalize text-2xl leading-none">
          {data.name}
        </GradientText>
        <span className="text-sm">{data.designation}</span>
        <div className="flex gap-4 pt-2 items-center">
          <Link target="_blank" href={data.socialLinks.linkedin}>
            <LinkedinIcon opacity={0.3} />
          </Link>
          <Link target="_blank" href={data.socialLinks.facebook}>
            <FacebookIcon opacity={0.3} />
          </Link>
          <Link target="_blank" href={data.socialLinks.instagram}>
            <InstagramIcon opacity={0.3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
