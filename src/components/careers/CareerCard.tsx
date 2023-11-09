import React from "react";

type Props = {
  text: string;
  children: React.ReactNode;
};

export default function CareerCard({ children, text }: Props) {
  return (
    <div className="bg-footerColor h-full w-full rounded-3xl max-sm:rounded-xl  max-sm:gap-2  flex gap-3 flex-col items-center py-5 px-1">
      <div className="flex justify-center items-center min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] max-sm:min-w-[30px] max-sm:max-w-[30px] max-sm:min-h-[30px] max-sm:max-h-[30px]">
        {children}
      </div>
      <p className="text-white text-sm max-sm:text-[8px] max-sm:leading-none text-center font-light">
        {text}
      </p>
    </div>
  );
}
