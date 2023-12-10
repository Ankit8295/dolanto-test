/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  productFeatures: {
    image: string;
    features: string[];
  };
};

export default function ProductFeaturesComp({ productFeatures }: Props) {
  return (
    <div className="w-full grid grid-cols-2 gap-10 max-md:grid-cols-1">
      <div className="flex w-full justify-center items-center">
        <ul className="font-medium max-lg:text-lg text-2xl  list-disc p-4 flex flex-col gap-3">
          {productFeatures.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-end items-center pr-20 max-lg:pr-0">
        <img
          alt="blood bank"
          src={productFeatures.image}
          className="aspect-square  mix-blend-normal w-full h-full max-w-[400px]  max-h-[400px] object-fill"
        />
      </div>
    </div>
  );
}
