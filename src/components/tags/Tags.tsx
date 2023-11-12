import React from "react";

type Props = {
  children: React.ReactNode;
  customTailwindStyle?: string;
  showGradient?: boolean;
};

export function GradientText({
  children,
  customTailwindStyle,
  showGradient = true,
}: Props) {
  return (
    <span
      className={` ${
        showGradient ? "bg-gradient-main  bg-clip-text text-transparent" : ""
      } ${customTailwindStyle}`}
    >
      {children}
    </span>
  );
}
export function HeadingTag({
  children,
  customTailwindStyle,
}: {
  children: React.ReactNode;
  customTailwindStyle?: string;
}) {
  return (
    <p
      className={`break-words tracking-wider max-sm:text-[1.5rem] text-[3rem] max-[1180px]:text-[2.2rem] max-[1450px]:text-[2.25rem] leading-normal  text-start font-medium ${customTailwindStyle}`}
    >
      {children}
    </p>
  );
}
