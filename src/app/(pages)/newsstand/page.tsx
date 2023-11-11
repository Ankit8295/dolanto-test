"use client";
import NewsContainer from "@/src/components/newstand-comps/NewsContainer";
import PageDescription from "@/src/components/page-description/PageDescription";
import CustomSlider from "@/src/components/slider/CustomSlider";
import {
  latestNewsFromDolanto,
  relatedPostsData,
  socialPostsData,
} from "@/src/constants/news";
import Image from "next/image";
import Link from "next/link";

const RelatedPostSliderCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="w-full h-full bg-lightBLue rounded-xl flex flex-col items-center gap-5">
      <Image
        src={data.image}
        alt="a"
        width={250}
        height={300}
        className="object-fill"
      />
      <div className="w-[90%] px-2 pb-3 flex flex-col gap-1">
        <p>{data.identifier}</p>
        <p className="font-bold ">{data.title}</p>
        <p className="text-xs font-light">{data.date}</p>
      </div>
    </div>
  );
};
const SocialPostSliderCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <Image
        src={data.image}
        alt="a"
        width={250}
        height={300}
        className="object-fill rounded-3xl"
      />
      <span className="text-sm w-[80%] mx-auto text-center font-medium">
        {data.title}
      </span>
    </div>
  );
};
export default function page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <PageDescription title="NEWSSTAND">
        Dolanto is an international leading cleanroom design, construction and
        installation company. MRC manufactures a range of cleanroom partition
        systems and accessories, as well as provides turnkey cleanroom design
        and build projects across every continent. Established in 1980 in the
        United Kingdom MRC has supported the progression of high end engineering
        industries through innovative design concepts and material technologies.
      </PageDescription>
      {/* <Link
        data-aos="fade-up"
        href={`newsstand/${"newsA"}`}
        className="text-5xl text-black"
      >
        NewA
      </Link>
      <Link
        data-aos="fade-up"
        href={`newsstand/${"newsB"}`}
        className="text-5xl text-black"
      >
        NewB
      </Link> */}

      <NewsContainer
        RelatedPostSliderCard={RelatedPostSliderCard}
        containerTitle="Latest from Dolanto"
        newsData={latestNewsFromDolanto}
        relatedPostData={relatedPostsData}
        slidePerSlider={6}
      />
      <NewsContainer
        containerTitle="White paper"
        newsData={latestNewsFromDolanto}
      />
      <CustomSlider
        slideCount={4}
        sliderName="socialBlogs"
        navigation={true}
        slideData={socialPostsData}
        SliderCard={SocialPostSliderCard}
      />
      <NewsContainer
        RelatedPostSliderCard={RelatedPostSliderCard}
        containerTitle="Latest from Dolanto"
        newsData={latestNewsFromDolanto}
        relatedPostData={relatedPostsData}
        slidePerSlider={6}
      />
    </div>
  );
}
