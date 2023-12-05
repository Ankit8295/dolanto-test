import React from "react";

export default function ProductHeading({ title }: { title: string }) {
  return (
    <div className="bg-lightBLue w-full py-2 px-5">
      <h2 className="text-[#001942] font-medium capitalize">{title}</h2>
    </div>
  );
}
