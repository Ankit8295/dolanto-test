/* eslint-disable @next/next/no-img-element */
import PageDescription from "@/src/components/page-description/PageDescription";
import ProductImageComp from "@/src/components/product-image-comp/ProductImageComp";
import { chambersData } from "@/src/constants/products/conditional-storage";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="CHAMBERS">
        As one of the leading equipment manufacturing organizations, Dolanto
        designs stability chambers that are durable in nature and function at an
        optimal level. While these monitor microbiological, chemical, and
        biological tests, we ensure that they show precise readings with the
        influence of light, temperature, and humidity on different products
        stored.contribute to the overall visual and functional appeal of a
        structure
      </PageDescription>
      {chambersData.map((chamber, i) => (
        <ProductImageComp
          reverse={i % 2 === 0 ? false : true}
          data={chamber}
          key={i}
        />
      ))}
    </div>
  );
}
