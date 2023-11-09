"use client";

import { useState } from "react";
type Props = {
  job: {
    title: string;
    description: string;
    department: string;
    tags: string[];
    tasks: string[];
    terms: string[];
    expectations: string[];
  };
};

export default function JobDetail({ job }: Props) {
  const [openJobDetails, setOpenJobDetails] = useState(false);
  function openJobDetailFn() {
    setOpenJobDetails(!openJobDetails);
  }
  return (
    <div className="w-full flex flex-col gap-5 max-sm:gap-3 bg-lightBLue px-2 py-3 rounded-3xl">
      <div className="relative flex gap-5 items-center  p-3 max-sm:p-1">
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
          <div className="flex gap-3 items-center max-sm:mt-2">
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
            <h2
              onClick={openJobDetailFn}
              className="font-medium cursor-pointer text-2xl max-sm:text-base "
            >
              {job.title}
            </h2>
          </div>
          <span className="max-sm:text-sm">{job.description}</span>
          <div className="flex gap-5 max-lg:gap-3 py-1 max-sm:p-0  max-sm: flex-wrap">
            {job.tags.map((tag) => (
              <span key={tag} className="bg-white rounded-xl p-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="max-sm:text-xs absolute top-[2%] right-[2%]">
          {job.department}
        </span>
      </div>
      {openJobDetails && (
        <div className="w-full px-3 pb-10 grid-cols-[1fr_1fr_1fr_100px] max-lg:grid-cols-1 max-lg:grid-rows-[auto] max-lg:justify-items-center gap-10 grid">
          <div className="w-full flex flex-col items-center gap-2">
            <h2 className="text-[#006AEA] text-lg text-start  w-full pl-5">
              Task
            </h2>
            <ol className="list-disc pl-5 font-light tracking-wide  flex flex-col gap-2  max-md:w-full">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ol>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <h2 className="text-[#006AEA] text-lg text-start  w-full pl-5">
              Terms
            </h2>
            <ol className="list-disc pl-5 font-light tracking-wide  flex flex-col gap-2  max-md:w-full">
              {job.terms.map((term, i) => (
                <li key={i}>{term}</li>
              ))}
            </ol>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <h2 className="text-[#006AEA] text-lg text-start w-full pl-5">
              Expectations
            </h2>
            <ol className="list-disc pl-5 font-light tracking-wide  flex flex-col gap-2  max-md:w-full">
              {job.expectations.map((expectation, i) => (
                <li key={i}>{expectation}</li>
              ))}
            </ol>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-gradient-main  text-white w-fit self-end max-sm:self-center px-4 py-2 rounded-xl">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
