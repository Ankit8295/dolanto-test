import PageDescription from "@/src/components/page-description/PageDescription";
import bbimage from "@/public/tong.png";
import React from "react";
import ProductTitleImage from "@/src/components/productTitlecomp/ProductTitleImage";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5">
      <PageDescription title="MERCHANDISING">
        While every laboratory has its unique needs, Dolanto designs components
        which significantly complement the lab setup. We design the accessories
        with a commitment to quality and durability at par with lab furniture.
        These are impeccably designed with precision to meet the exact
        requirements.
      </PageDescription>
      <div className="w-full grid grid-cols-4 max-xl:gap-10 gap-20 py-20">
        <ProductTitleImage image={bbimage} title="Tongs" />
        <ProductTitleImage image={bbimage} title="Tongs" />
        <ProductTitleImage image={bbimage} title="Tongs" />
        <ProductTitleImage image={bbimage} title="Tongs" />
        <ProductTitleImage image={bbimage} title="Tongs" />
        <ProductTitleImage image={bbimage} title="Tongs" />
        <ProductTitleImage image={bbimage} title="Tongs" />
      </div>
    </div>
  );
}
