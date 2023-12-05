import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-12 max-lg:gap-8 items-start pt-5 pb-10">
      {children}
    </div>
  );
}
