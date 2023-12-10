import cardImg from "@/public/media/homepage/cardA.png";
import { dynamicCardData } from "@/src/constants/homepage";

export default function CardsSection() {
  return (
    <div className="w-full grid grid-cols-2 max-lg:grid-rows-[auto] gap-x-5 max-lg:gap-x-0 max-lg:gap-y-5 max-lg:grid-cols-1">
      <div className="flex flex-wrap gap-5 max-lg:gap-3">
        {dynamicCardData
          .filter((card) => card.id <= 3)
          .map((card) => (
            <div
              data-aos={`${card.id === 1 ? "fade-right" : ""}${
                card.id === 2 ? "fade-right" : ""
              }${card.id === 3 ? "fade-up" : ""}`}
              className={` ${
                card.id !== 2 ? "bg-darkBlue text-white" : "bg-lightBLue "
              } grow flex flex-col gap-5 max-lg:gap-3 max-sm:gap-2 rounded-xl p-4 ${
                card.id === 1 ? "w-full" : "w-[45%]"
              }`}
              key={card.id}
            >
              <img
                src={card.image.src}
                alt="a"
                className={`rounded-xl min-h-[50%] `}
              />
              <div className="flex flex-col gap-2 max-sm:gap-0 pb-3">
                <h2 className="font-medium max-lg:text-sm max-xl:text-2xl max-sm:leading-tight text-3xl">
                  {card.title}
                </h2>
                <span
                  className={`text-sm max-sm:text-xs ${
                    card.id === 3 ? "hidden" : ""
                  } `}
                >
                  {card.description}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="grow  flex flex-col gap-5">
        {dynamicCardData
          .filter((card) => card.id > 3)
          .map((card) => (
            <div
              data-aos={`${card.id === 4 ? "fade-down" : ""}${
                card.id === 5 ? "fade-left" : ""
              }${card.id === 6 ? "fade-left" : ""}`}
              className={`${
                card.id === 5 ? "bg-darkBlue text-white" : "bg-lightBLue "
              } max-lg:gap-3 max-sm:gap-2 rounded-xl p-4 ${
                card.id === 4 ? "flex gap-5 flex-row-reverse" : ""
              } ${card.id === 6 ? "flex gap-5 " : ""}`}
              key={card.id}
            >
              <img
                src={card.image.src}
                alt="a"
                className={`${card.id === 5 ? "w-full" : "w-1/2"} rounded-xl `}
              />
              <div className="flex flex-col gap-2 ">
                <h2 className="font-medium max-lg:text-sm max-xl:text-2xl text-3xl">
                  {card.title}
                </h2>
                <span className={`text-sm ${card.id === 4 ? "hidden" : ""} `}>
                  {card.description}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
