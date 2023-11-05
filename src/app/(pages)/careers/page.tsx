import { GradientText, HeadingTag } from "@/src/components/tags/Tags";
import careersImg from "@/public/media/careers/careers.png";
import Image from "next/image";
import { careerCardData } from "@/src/constants/career";
import CareerCard from "@/src/components/career-card/CareerCard";
export default function page() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-x-8  max-[1200px]:gap-x-0 max-[1200px]:gap-y-8 max-[1200px]:grid-cols-1 max-[1200px]:grid-rows-[auto]">
        <div className="flex flex-col max-[1200px]:gap-8 justify-between">
          <HeadingTag>
            We are
            <GradientText> Gathering</GradientText> a team of{" "}
            <GradientText>Like-minded People</GradientText> who are ready to
            grow professionally.
          </HeadingTag>
          <div className="grid grid-cols-4 gap-x-3 max-sm:gap-2 items-center">
            {careerCardData.map((card) => (
              <CareerCard text={card.text} key={card.text}>
                {card.imgIcon}
              </CareerCard>
            ))}
          </div>
        </div>
        <Image
          src={careersImg}
          alt="career image"
          priority={true}
          quality={100}
          className="object-center rounded-xl w-full h-full  max-[1200px]:w-full"
        />
      </div>
    </div>
  );
}
