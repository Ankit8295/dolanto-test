import { merchandisingData } from "@/src/constants/products/merchandising";
import PageDescription from "@/src/components/page-description/PageDescription";
import ProductTitleImage from "@/src/components/products-components/productTitlecomp/ProductTitleImage";

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
      <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-xl:gap-10 gap-20 py-20 max-lg:py-10 max-sm:py-0">
        {merchandisingData.map((merchandise) => (
          <ProductTitleImage
            key={merchandise.title}
            image={merchandise.img}
            title=""
          />
        ))}
      </div>
    </div>
  );
}
