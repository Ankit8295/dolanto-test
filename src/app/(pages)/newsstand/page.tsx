"use client";
import PageDescription from "@/src/components/page-description/PageDescription";
import ButtonSlider from "@/src/components/slider/RelatedSlider";
import Link from "next/link";

const Card: React.FC<{ data: any }> = ({ data }) => {
  return <div>{data.title}</div>;
};
export default function page() {
  const data = [
    {
      id: 1,
      title: "hii",
    },
    {
      id: 2,
      title: "hii",
    },
    {
      id: 3,
      title: "hii",
    },
    {
      id: 4,
      title: "hii",
    },
    {
      id: 5,
      title: "hii",
    },
    {
      id: 6,
      title: "hii",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <PageDescription title="NEWSSTAND">
        Dolanto is an international leading cleanroom design, construction and
        installation company. MRC manufactures a range of cleanroom partition
        systems and accessories, as well as provides turnkey cleanroom design
        and build projects across every continent. Established in 1980 in the
        United Kingdom MRC has supported the progression of high end engineering
        industries through innovative design concepts and material technologies.
      </PageDescription>
      <Link
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
      </Link>
      <ButtonSlider slideData={data} SliderCard={Card} />
    </div>
  );
}
