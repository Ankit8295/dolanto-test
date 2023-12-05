import PageDescription from "@/src/components/page-description/PageDescription";
import bbimage from "@/public/bllodbank.png";
import ProductTitleImage from "@/src/components/products-components/productTitlecomp/ProductTitleImage";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5">
      <PageDescription title="BLOOD BANK EQUIPMENTS">
        Dolanto has also shown its expertise in manufacturing blood equipment
        which is nothing but essentials meant for any blood bank or hospital.
        While our team designs the equipment meticulously, we ensure that it’s
        designed as per the standards and they show accurate reading.
      </PageDescription>
      <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-xl:gap-10 gap-20 py-20 max-lg:py-10 max-sm:py-0">
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
        <ProductTitleImage image={bbimage} title="Plasma expressor" />
      </div>
    </div>
  );
}
