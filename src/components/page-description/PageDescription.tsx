import React from "react";
import { GradientText } from "../tags/Tags";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PageDescription({ children, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 max-sm:gap-2 py-7 rounded-3xl bg-lightBLue">
      <BreadCrumbs />
      <h1 className="text-6xl max-lg:text-3xl max-sm:text-2xl font-semibold">
        <GradientText>{title}</GradientText>
      </h1>
      <span className="text-center text-[#001942] font-light text-xl max-lg:text-sm w-[80%] max-md:w-[90%]">
        {children}
      </span>
    </div>
  );
}
