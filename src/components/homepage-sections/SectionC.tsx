"use client";
import {
  productServiceModals,
  productServiceModalsTitle,
} from "@/src/constants/homepage";
import Image from "next/image";
import React from "react";
import { GradientText, HeadingTag } from "../tags/Tags";
import { BlueButtonWrapper } from "../buttons/Buttons";
import {
  useAppState,
  useStateDispatch,
} from "@/src/providers/context-provider/ContextProvider";

type Props = {};

export default function SectionC({}: Props) {
  const { activeHomePageModalView } = useAppState();
  const dispatch = useStateDispatch();

  return (
    <div className="w-full  flex max-lg:flex-col max-lg:gap-10">
      <div className="w-1/2 pr-5 max-lg:pr-0 max-lg:w-full flex items-start flex-col gap-5">
        <div className="w-full flex flex-col items-start gap-2">
          <BlueButtonWrapper>Products & Services</BlueButtonWrapper>
          <HeadingTag>
            We Believe in <GradientText>uncompromising</GradientText> attention
            to <GradientText>details</GradientText> in our offerings.
          </HeadingTag>
        </div>
        <div className="flex w-full max-lg:flex-col text-white justify-between max-lg:gap-5">
          <div
            className={
              "bg-[url('/media/homepage/formulation.png')] pt-[15%] max-sm:pt-[25%] rounded-3xl w-[48%] max-lg:w-full bg-cover bg-center p-5 flex flex-col  "
            }
          >
            <p>Formulation</p>
            <span className=" text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu
              ultrices libero
            </span>
          </div>
          <div
            className={
              "bg-[url('/media/homepage/afterSales.png')] pt-[15%] max-sm:pt-[25%] rounded-3xl max-lg:w-full w-[48%] bg-cover bg-center p-5 flex flex-col"
            }
          >
            <p className="  "> After Sales Services</p>
            <span className="text-sm  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu
              ultrices libero
            </span>
          </div>
        </div>
        <div
          className={
            "bg-[url('/media/homepage/customSolution.png')] rounded-3xl w-full bg-cover bg-center text-white p-5"
          }
        >
          <div className="w-1/2 max-lg:w-full flex flex-col pt-[15%] max-sm:pt-[25%]">
            <p className="">Custom Solutions</p>
            <span className=" text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu
              ultrices libero
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full flex items-center justify-end flex-col max-lg:gap-6 gap-14">
        <Image
          src={productServiceModals[activeHomePageModalView]}
          alt={"modal image"}
          width={450}
          height={300}
          priority={true}
          quality={100}
        />
        <div className="grid grid-cols-3 p-5 gap-2 bg-[#F1F4F9] max-lg:grid-cols-1 max-lg:w-full rounded-3xl">
          {productServiceModalsTitle.map((title) => (
            <span
              onClick={() =>
                dispatch({
                  payload: title,
                  type: "CHANGE_ACTIVE_HOME_MODAL_VIEW",
                })
              }
              className={`p-2 text-center rounded-lg cursor-pointer ${
                activeHomePageModalView === title
                  ? "bg-darkBlue text-white"
                  : "bg-white"
              }`}
              key={title}
            >
              {title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
