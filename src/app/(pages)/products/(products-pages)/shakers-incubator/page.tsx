import PageDescription from "@/src/components/page-description/PageDescription";
import ProductImageComp from "@/src/components/products-components/product-image-comp/ProductImageComp";
import ProductHeading from "@/src/components/products-components/products-heading/ProductHeading";
import { incubatorsData } from "@/src/constants/products/conditional-storage";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="SHAKERS & INCUBATORS">
        At Dolanto, we also manufacture incubators used for maintaining
        microbiological cultures. While our team manufactures these incubators,
        it makes sure that it maintains the optimal temperature, humidity and
        the oxygen as well as Carbon dioxide within the enclosure.
      </PageDescription>
      <ProductHeading title="Types of Incubators" />
      {incubatorsData.map((data, i) => (
        <ProductImageComp
          reverse={i % 2 === 0 ? false : true}
          data={data}
          key={i}
        />
      ))}
    </div>
  );
}
