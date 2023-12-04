import PageDescription from "@/src/components/page-description/PageDescription";
import ProductImageComp from "@/src/components/product-image-comp/ProductImageComp";
import { incubatorsData } from "@/src/constants/products/conditional-storage";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="COLDROOMS">
        Modular coldrooms, also referred to as modular cold storage or walk-in
        freezers, function as specialized sanctuaries for protecting perishable
        goods, including culinary delicacies, pharmaceuticals, and other items
        susceptible to temperature variations. These temperature controlled
        enclosures are constructed by assembling prefabricated or modular
        panels, carefully pieced together on the premises to create a reliable
        environment for merchandise that requires precise temperature
        management.
      </PageDescription>
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
