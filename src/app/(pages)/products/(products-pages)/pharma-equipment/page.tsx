import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="PHARMA EQUIPMENT">
        At Dolanto, we take pride in crafting top-tier pharmaceutical equipment,
        including a diverse range of products such as pass boxes, laminar air
        flows, air and mist showers, de-dusting tunnels, and reverse laminar air
        flows. Our meticulous approach to design ensures that each piece is
        manufactured without any compromise on quality, adhering strictly to
        industry standards.
      </PageDescription>
    </div>
  );
}
