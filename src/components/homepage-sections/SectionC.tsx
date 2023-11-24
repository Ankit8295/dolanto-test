"use client";
import {
  productServiceModals,
  productServiceModalsTitle,
} from "@/src/constants/homepage";
import Image from "next/image";
import React from "react";
import { BgGradientText, GradientText, HeadingTag } from "../tags/Tags";
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
      <div className="w-1/2 pr-5 max-lg:pr-0 max-lg:w-full flex items-start  flex-col gap-5">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          className="w-full flex flex-col items-start gap-1"
        >
          <BlueButtonWrapper>Products & Services</BlueButtonWrapper>
          <HeadingTag>
            We offer Top-notch Services with{" "}
            <BgGradientText>Incredible Quality</BgGradientText> to various
            Industries
          </HeadingTag>
        </div>
        <div className="flex w-full max-lg:flex-col text-white justify-between max-lg:gap-5">
          <div
            data-aos="fade-right"
            className={
              "bg-[url('/media/homepage/formulation.png')] aspect-video pt-[15%] max-sm:pt-[25%] rounded-3xl w-[48%]  max-lg:w-full bg-cover bg-center p-5 flex flex-col  "
            }
          >
            <div className="bg-black/20 p-4 rounded-3xl backdrop-blur-sm border border-white/70">
              <p>Design & Build</p>
              <span className=" text-xs ">
                A customer-centric approach enables us to bring your vision to
                life. As we consider collaboration at the heart of our approach,
                we create spaces that inspire.
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className={
              "bg-[url('/media/homepage/afterSales.png')] pt-[15%] max-sm:pt-[25%] rounded-3xl max-lg:w-full w-[48%] bg-cover bg-center p-5 flex flex-col"
            }
          >
            <div className="bg-black/20 p-4 rounded-3xl backdrop-blur-sm border border-white/70">
              <p className="  "> After Sales Services</p>
              <span className=" text-xs ">
                We extend our dedication for customer satisfaction far beyond
                the instance of purchase. With experience, we have honed our
                skills to offer product support.
              </span>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className={
            "bg-[url('/media/homepage/customSolution.png')] rounded-3xl w-full bg-cover bg-center text-white p-5"
          }
        >
          <div className="w-2/3 max-lg:w-full flex flex-col pt-[15%] max-sm:pt-[25%] ">
            <div className="bg-black/20 p-4 rounded-3xl backdrop-blur-sm border border-white/70">
              <p className="">Custom Solutions</p>
              <span className=" text-xs ">
                As we comprehend the uniqueness of every requirement, we offer
                custom solutions by prioritizing proactive involvement for the
                project.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full flex items-center justify-end flex-col max-lg:gap-6">
        <div
          data-aos="fade-down"
          className="w-full h-full flex items-center justify-center "
        >
          <Image
            src={productServiceModals[activeHomePageModalView]}
            alt={"modal image"}
            width={550}
            height={300}
            loading="lazy"
            placeholder="blur"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
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
