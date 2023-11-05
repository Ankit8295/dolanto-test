"use client";
import { GradientText, HeadingTag } from "@/src/components/tags/Tags";
import careersImg from "@/public/media/careers/careers.png";
import reviewAboutImg from "@/public/media/homepage/reviewAbout.png";
import Image from "next/image";
import { careerCard2Data, careerCardData } from "@/src/constants/career";
import CareerCard from "@/src/components/career-card/CareerCard";
import { useState } from "react";
export default function Page() {
  const [openJobDetails, setOpenJobDetails] = useState(false);
  function openJobDetailFn() {
    setOpenJobDetails(!openJobDetails);
  }
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
      <div
        className={`grid grid-cols-2 lg:grid-cols-9 lg:grid-rows-1 gap-y-2 gap-x-2`}
      >
        <div className="bg-lightBLue col-span-2 lg:col-start-7 relative  rounded-2xl p-3  flex flex-col gap-4 ">
          {/* <svg
            width="177"
            height="123"
            viewBox="0 0 177 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 "
          >
            <path
              d="M103.721 122.945L130.959 18.829L138.472 54.0035C127.515 54.0035 118.436 50.5642 111.235 43.6857C104.034 36.8071 100.434 27.5835 100.434 16.0151C100.434 4.44656 104.034 -4.93329 111.235 -12.1245C118.436 -19.0031 127.358 -22.4424 138.003 -22.4424C149.274 -22.4424 158.509 -18.8468 165.71 -11.6555C172.911 -4.4643 176.511 4.75923 176.511 16.0151C176.511 19.767 176.355 23.2063 176.042 26.3329C175.416 29.7722 174.32 33.8368 172.754 38.5267C171.189 43.2167 168.998 49.1572 166.18 56.3485L141.29 122.945H103.721ZM4.16232 122.945L31.4 18.829L38.9139 54.0035C27.9562 54.0035 18.8769 50.5642 11.6762 43.6856C4.47539 36.8071 0.874999 27.5835 0.875 16.015C0.875001 4.44656 4.47539 -4.9333 11.6762 -12.1245C18.8769 -19.0031 27.7997 -22.4424 38.4443 -22.4424C49.7151 -22.4424 58.9509 -18.8468 66.1516 -11.6555C73.3524 -4.46431 76.9528 4.75922 76.9528 16.015C76.9528 19.767 76.7963 23.2063 76.4832 26.3329C75.857 29.7722 74.7612 33.8368 73.1959 38.5267C71.6305 43.2167 69.4389 49.1572 66.6212 56.3485L41.7316 122.945L4.16232 122.945Z"
              fill="white"
            />
          </svg> */}

          <p className="text-[10px] lg:text-xs leading-normal">
            “Exceptional Precision and Quality! Dolanto’s clean room solution
            exceeded our expectations. Their meticulous attention to detail and
            unwavering commitment to delivering a clean room environment truly
            impressed us.”
          </p>
          <div className="grid grid-cols-[40px_minmax(100px,_1fr)] ">
            <div className=" w-full h-full p-2 flex items-start justify-center">
              <Image
                width={30}
                height={30}
                priority={true}
                quality={100}
                src={reviewAboutImg}
                alt="review person image"
                className=" object-fill"
              />
            </div>
            <div className="flex flex-col  items-start ">
              <span className="text-xs">Sarah Johnson</span>
              <span className="text-xs">Managing Director at L&T</span>
            </div>
          </div>
        </div>
        {careerCard2Data.map((card, i) => (
          <div
            key={card.title}
            className={`bg-lightBLue p-3 lg:col-start-[${
              (i === 0 && 1) || (i === 1 && 3) || (i === 2 && 5)
            }] lg:col-span-2 rounded-2xl lg:row-start-1 flex flex-col items-start`}
          >
            <div>
              <GradientText customTailwindStyle="text-[32px] lg:text-5xl leading-tight">
                {card.title}
              </GradientText>
              {card.title === "40,000" ? (
                <GradientText customTailwindStyle="text-[12px] lg:text-[18px] pl-1">
                  Sq.ft
                </GradientText>
              ) : null}
            </div>
            <GradientText customTailwindStyle="text-[11px] lg:text-2xl">
              {card.subTitle}
            </GradientText>
            <p className="text-[10px] lg:text-base font-normal leading-normal">
              {card.description}
            </p>
          </div>
        ))}
        <div
          className={`bg-lightBLue lg:bg-footerColor lg:text-white whitespace-nowrap text-[#002964] lg:col-start-9 lg:col-span-1 text-xs p-3 rounded-2xl flex items-center justify-center`}
        >
          <p className="lg:-rotate-90">View Openings</p>
        </div>
      </div>
      <div className="w-full pt-5 flex flex-col items-start gap-10">
        <div className="w-full flex flex-col gap-5 bg-lightBLue p-2 rounded-3xl">
          <div className="relative flex gap-5 items-center  p-3">
            <div
              onClick={openJobDetailFn}
              className={`cursor-pointer w-10 max-sm:hidden h-10 text-xl rounded-full ${
                openJobDetails
                  ? "bg-blueMain text-white rotate-90"
                  : "bg-white rotate-0"
              } flex items-center justify-center transition-all duration-300`}
            >
              {">"}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div
                  onClick={openJobDetailFn}
                  className={`cursor-pointer w-8 hidden max-sm:flex h-8 text-xl rounded-full ${
                    openJobDetails
                      ? "bg-blueMain text-white rotate-90"
                      : "bg-white rotate-0"
                  }  items-center justify-center transition-all duration-300`}
                >
                  {">"}
                </div>
                <h2 className="font-medium text-2xl max-sm:text-lg">
                  Product Designer
                </h2>
              </div>
              <span className="max-sm:text-sm">
                We’re Looking for a mid-level designer to join our team
              </span>
              <div className="flex gap-5  py-1 max-sm:p-0 max-sm:justify-between">
                <span className="bg-white rounded-xl p-2">100% Remote</span>
                <span className="bg-white rounded-xl p-2">Full-time</span>
              </div>
            </div>
            <span className="max-sm:text-xs absolute top-[2%] right-[2%]">
              Design
            </span>
          </div>
          {openJobDetails && (
            <div className="w-full p-3 grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-[auto] max-lg:gap-y-5 grid">
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start w-2/3 max-md:w-full pl-5">
                  Task
                </h2>
                <ol className="list-disc pl-5 text-sm w-2/3 max-md:w-full">
                  <li>
                    Reception, diagnosis and treatment of animals with
                    cardiological diseases
                  </li>
                  <li>
                    Conducting ECHOKG, ECG, dopplerography, preoperative heart
                    screenshots; interpretation of research results
                  </li>
                  <li>
                    Study of the causes of occurrence, the processes of the
                    disease
                  </li>
                  <li>Development of treatment methods</li>
                  <li>The use of medicines;</li>
                </ol>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start w-2/3 max-md:w-full pl-5">
                  Terms
                </h2>
                <ol className="list-disc pl-5 text-sm w-2/3 max-md:w-full">
                  <li>
                    Reception, diagnosis and treatment of animals with
                    cardiological diseases
                  </li>
                  <li>
                    Conducting ECHOKG, ECG, dopplerography, preoperative heart
                    screenshots; interpretation of research results
                  </li>
                  <li>
                    Study of the causes of occurrence, the processes of the
                    disease
                  </li>
                  <li>Development of treatment methods</li>
                  <li>The use of medicines;</li>
                </ol>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start w-2/3 max-md:w-full pl-5">
                  Expectations
                </h2>
                <ol className="list-disc pl-5 text-sm w-2/3 max-md:w-full">
                  <li>
                    Reception, diagnosis and treatment of animals with
                    cardiological diseases
                  </li>
                  <li>
                    Conducting ECHOKG, ECG, dopplerography, preoperative heart
                    screenshots; interpretation of research results
                  </li>
                  <li>
                    Study of the causes of occurrence, the processes of the
                    disease
                  </li>
                  <li>Development of treatment methods</li>
                  <li>The use of medicines;</li>
                </ol>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col gap-5 bg-lightBLue p-2 rounded-3xl">
          <div className="relative flex gap-5 items-center  p-3">
            <div
              onClick={openJobDetailFn}
              className={`cursor-pointer w-10 max-sm:hidden h-10 text-xl rounded-full ${
                openJobDetails
                  ? "bg-blueMain text-white rotate-90"
                  : "bg-white rotate-0"
              } flex items-center justify-center transition-all duration-300`}
            >
              {">"}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div
                  onClick={openJobDetailFn}
                  className={`cursor-pointer w-8 hidden max-sm:flex h-8 text-xl rounded-full ${
                    openJobDetails
                      ? "bg-blueMain text-white rotate-90"
                      : "bg-white rotate-0"
                  }  items-center justify-center transition-all duration-300`}
                >
                  {">"}
                </div>
                <h2 className="font-medium text-2xl max-sm:text-lg">
                  Product Designer
                </h2>
              </div>
              <span className="max-sm:text-sm">
                We’re Looking for a mid-level designer to join our team
              </span>
              <div className="flex gap-5  py-1 max-sm:p-0 max-sm:justify-between">
                <span className="bg-white rounded-xl p-2">100% Remote</span>
                <span className="bg-white rounded-xl p-2">Full-time</span>
              </div>
            </div>
            <span className="max-sm:text-xs absolute top-[2%] right-[2%]">
              Design
            </span>
          </div>
          {openJobDetails && (
            <div className="w-full p-3 grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-[auto] max-lg:gap-y-5 grid">
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start w-2/3 max-md:w-full pl-5">
                  Task
                </h2>
                <ol className="list-disc pl-5 text-sm w-2/3 max-md:w-full">
                  <li>
                    Reception, diagnosis and treatment of animals with
                    cardiological diseases
                  </li>
                  <li>
                    Conducting ECHOKG, ECG, dopplerography, preoperative heart
                    screenshots; interpretation of research results
                  </li>
                  <li>
                    Study of the causes of occurrence, the processes of the
                    disease
                  </li>
                  <li>Development of treatment methods</li>
                  <li>The use of medicines;</li>
                </ol>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start w-2/3 max-md:w-full pl-5">
                  Terms
                </h2>
                <ol className="list-disc pl-5 text-sm w-2/3 max-md:w-full">
                  <li>
                    Reception, diagnosis and treatment of animals with
                    cardiological diseases
                  </li>
                  <li>
                    Conducting ECHOKG, ECG, dopplerography, preoperative heart
                    screenshots; interpretation of research results
                  </li>
                  <li>
                    Study of the causes of occurrence, the processes of the
                    disease
                  </li>
                  <li>Development of treatment methods</li>
                  <li>The use of medicines;</li>
                </ol>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-[#006AEA] text-lg text-start w-2/3 max-md:w-full pl-5">
                  Expectations
                </h2>
                <ol className="list-disc pl-5 text-sm w-2/3 max-md:w-full">
                  <li>
                    Reception, diagnosis and treatment of animals with
                    cardiological diseases
                  </li>
                  <li>
                    Conducting ECHOKG, ECG, dopplerography, preoperative heart
                    screenshots; interpretation of research results
                  </li>
                  <li>
                    Study of the causes of occurrence, the processes of the
                    disease
                  </li>
                  <li>Development of treatment methods</li>
                  <li>The use of medicines;</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
