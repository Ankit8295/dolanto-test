import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="LAB FURNITURE">
        Our extensive range of laboratory furniture is impeccably designed after
        a study on the usage pattern. We follow a philosophy of integrating
        utilitarian functionality, user friendliness and visually appealing
        aesthetics. Everything is designed with durability as one of the prime
        criteria.
      </PageDescription>
    </div>
  );
}
