import PageDescription from "@/src/components/page-description/PageDescription";
import ProductHeading from "@/src/components/products-components/products-heading/ProductHeading";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5">
      <PageDescription title="CLEANROOM WALL PANELS">
        Dolanto is an international leading cleanroom design, construction and
        installation company. MRC manufactures a range of cleanroom partition
        systems and accessories, as well as provides turnkey cleanroom design
        and build projects across every continent.
      </PageDescription>
      <ProductHeading title="Panel" />
    </div>
  );
}
