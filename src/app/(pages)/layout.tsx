import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[92.5%] mx-auto max-w-[1550px] overflow-hidden flex flex-col gap-12 items-start pt-5 pb-10">
      {children}
    </div>
  );
}
