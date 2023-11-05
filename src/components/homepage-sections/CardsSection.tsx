/* eslint-disable @next/next/no-img-element */
"use client";
import { getData } from "@/src/lib/queries";
import { useQuery } from "@tanstack/react-query";
import cardImg from "@/public/media/homepage/cardA.png";

export default function CardsSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["homepageData"],
    queryFn: () => getData(),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <h2>Loading....</h2>;
  return (
    <div className="w-full grid grid-cols-2 max-lg:grid-rows-[auto] gap-x-5 max-lg:gap-x-0 max-lg:gap-y-5 max-lg:grid-cols-1">
      <div className="flex flex-wrap gap-5 max-lg:gap-3">
        {data.data
          .filter((card: any) => card.result.id <= 3)
          .map((card: any) => (
            <div
              className={`${
                card.result.id !== 2
                  ? "bg-darkBlue text-white"
                  : "bg-lightBLue "
              } grow flex flex-col gap-5 max-lg:gap-3 max-sm:gap-2 rounded-xl p-4 ${
                card.result.id === 1 ? "w-full" : "w-[45%]"
              }`}
              key={card.result.id}
            >
              <img
                src={cardImg.src}
                alt="a"
                className={` rounded-xl min-h-[50%]`}
              />
              <div className="flex flex-col gap-2 max-sm:gap-0 pb-3">
                <h2 className="font-medium max-lg:text-sm max-xl:text-2xl max-sm:leading-tight text-3xl">
                  {card.result.cardData.title}
                </h2>
                <span
                  className={`text-sm max-sm:text-xs ${
                    card.result.id === 3 ? "hidden" : ""
                  } `}
                >
                  {card.result.cardData.description}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="grow  flex flex-col gap-5">
        {data.data
          .filter((card: any) => card.result.id > 3)
          .map((card: any) => (
            <div
              className={`${
                card.result.id === 5
                  ? "bg-darkBlue text-white"
                  : "bg-lightBLue "
              } max-lg:gap-3 max-sm:gap-2 rounded-xl p-4 ${
                card.result.id === 4 ? "flex gap-5 flex-row-reverse" : ""
              } ${card.result.id === 6 ? "flex gap-5 " : ""}`}
              key={card.result.id}
            >
              <img
                src={cardImg.src}
                alt="a"
                className={`${
                  card.result.id === 5 ? "w-full" : "w-1/2"
                } rounded-xl`}
              />
              <div className="flex flex-col gap-2 ">
                <h2 className="font-medium max-lg:text-sm max-xl:text-2xl text-3xl">
                  {card.result.cardData.title}
                </h2>
                <span
                  className={`text-sm ${card.result.id === 4 ? "hidden" : ""} `}
                >
                  {card.result.cardData.description}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
