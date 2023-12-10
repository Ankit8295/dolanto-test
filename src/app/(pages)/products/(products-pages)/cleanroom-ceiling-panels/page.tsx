/* eslint-disable @next/next/no-img-element */
import PageDescription from "@/src/components/page-description/PageDescription";
import ProductTitleImage from "@/src/components/products-components/productTitlecomp/ProductTitleImage";
import ProductHeading from "@/src/components/products-components/products-heading/ProductHeading";
import ttype from "@/public/media/products/ceiling-panel/ttype.png";
import ztype from "@/public/media/products/ceiling-panel/ztype.png";
import featureImg from "@/public/media/products/ceiling-panel/feature.png";
import Image from "next/image";
import ProductFeaturesComp from "@/src/components/products-components/product-feature/ProductFeaturesComp";
import ProductColors from "@/src/components/products-components/productColors/ProductColors";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <PageDescription title="CLEANROOM CEILING PANELS">
        Ceiling Panels are part of a self-supporting modular system made up of
        load-bearing aluminum sections and single or sandwich metal sheet panels
        filled with mineral wool. During installation and service work, only a
        small amount of movement on the top side of the suspended ceiling is
        expected. Threaded bars and suspension materials are used to attach the
        suspended ceiling to the structural ceiling or the suspension grid;
        another anchoring option is the use of a truss frame. The Ceiling grid
        system combines engineered structural integrity and flexibility to meet
        the high standards and ever changing needs of the cleanroom applications
        and customer requirements.
      </PageDescription>
      <ProductHeading title="Panels" />
      <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-5 py-5 ">
        <div className="flex flex-col items-center gap-4">
          <img
            alt="Panels"
            src={ttype.src}
            className="aspect-square  mix-blend-normal w-full h-full max-w-[275px] max-h-[275px] object-fill"
          />
          <p className="font-light text-center w-full bg-lightBLue rounded-xl text-[#002964] text-2xl"></p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            alt="Panels"
            src={ztype.src}
            className="aspect-square  mix-blend-normal w-full h-full max-w-[275px] max-h-[275px] object-fill"
          />
          <p className="font-light text-center w-full bg-lightBLue rounded-xl text-[#002964] text-2xl"></p>
        </div>
      </div>
      <ProductHeading title="Features" />
      <ProductFeaturesComp productFeatures={featureCeilingPanel} />
      <ProductColors />
    </div>
  );
}

const ceilingTechSpecification = [
  {
    title: "Hoisting Bar",
    desc: "3 m",
  },
  {
    title: "Fastener",
    desc: "Hexagonal Nut, Flange Nut, etc...",
  },
  {
    title: "Level Governor",
    desc: "Galvanized Steel",
  },
  {
    title: "X/ T Bar",
    desc: "Aluminium",
  },
  {
    title: "Inner Line",
    desc: "Aluminium Honeycomb, Rockwool, etc..",
  },
  {
    title: "Plate Connector",
    desc: "Z-bar Aluminium, T-bar Aluminium",
  },
];

const featureCeilingPanel = {
  image: featureImg.src,
  features: [
    "Engineered & innovative design",
    "Structural integrity and flexibility",
    "Corrosion-free material",
    "Attractive & pleasing appearances",
    "Easy & quick assembly",
    "Walkable & serviceable ceiling",
  ],
};
