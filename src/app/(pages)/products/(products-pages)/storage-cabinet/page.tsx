import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="STORAGE CABINETS">
        Dolanto has a wide range of storage cabinets used for every kind of
        application. These cabinets range from file cabinets, garment storage
        cabinets to storing combustible and corrosive material.
      </PageDescription>
    </div>
  );
}
