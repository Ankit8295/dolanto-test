import PageDescription from "@/src/components/page-description/PageDescription";
import ProductImageComp from "@/src/components/products-components/product-image-comp/ProductImageComp";
import ProductHeading from "@/src/components/products-components/products-heading/ProductHeading";
import { frezeerRefreigeratorData } from "@/src/constants/products/conditional-storage";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5">
      <PageDescription title="FREEZERS & REFRIGERATORS">
        At Dolanto, we design energy-efficient refrigerators that can help to
        save more on utility bills. The automatic defrosting also saves the
        hustle to melt the ice build up in the freezers. Your team can also
        maintain the freezers with ease.
      </PageDescription>
      <ProductHeading title="Types of Refrigerators" />
      {frezeerRefreigeratorData.map((freezer, i) => (
        <ProductImageComp data={freezer} key={i} />
      ))}
    </div>
  );
}
