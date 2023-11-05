import React from "react";
import { GradientText } from "../tags/Tags";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PageDescription({ children, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 py-7 rounded-3xl bg-lightBLue">
      <h1 className="text-5xl max-lg:text-3xl font-semibold">
        <GradientText>{title}</GradientText>
      </h1>
      <span className="text-center text-base w-2/3 max-md:w-[90%]">
        {children}
      </span>
    </div>
  );
}
