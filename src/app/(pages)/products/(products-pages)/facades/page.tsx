import { facadesData } from "@/src/constants/products/facades";
import PageDescription from "@/src/components/page-description/PageDescription";
import ProductImageComp from "@/src/components/products-components/product-image-comp/ProductImageComp";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <PageDescription title="FACADES">
        The facade system, commonly recognized as the external face or outer
        covering of a building, plays a multifaceted role in the structural
        ensemble. It not only shields the building from the elements but also
        regulates temperature and offers an artistic charm. Facade systems
        exhibit a diverse range, incorporating distinct designs, materials, and
        construction techniques, all of which contribute significantly to the
        overall architectural blueprint. Various types of facade systems exist,
        each boasting individual traits and attributes that contribute to the
        overall visual and functional appeal of a structure
      </PageDescription>
      {facadesData.map((freezer, i) => (
        <ProductImageComp
          reverse={i % 2 === 0 ? false : true}
          data={freezer}
          key={i}
        />
      ))}
      <p className="p-7 max-lg:p-3 w-full rounded-xl max-md:rounded-lg bg-[#001942] text-[#F1F7FF] text-center max-lg:text-start font-light text-sm">
        These exemplify merely a selection of prevalent facade systems embraced
        in contemporary architectural practices. Opting for a particular facade
        system hinge on considerations like the structure&apos;s blueprint,
        whereabouts, weather patterns, and eco-friendly objectives
      </p>
    </div>
  );
}
