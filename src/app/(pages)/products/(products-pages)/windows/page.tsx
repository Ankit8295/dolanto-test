import PageDescription from "@/src/components/page-description/PageDescription";
import ProductImageComp from "@/src/components/products-components/product-image-comp/ProductImageComp";
import ProductHeading from "@/src/components/products-components/products-heading/ProductHeading";
import singleGlazedImg from "@/public/media/products/winodws/singleGlazed.png";
import doubleGlazedImg from "@/public/media/products/winodws/singleGlazed.png";
export default function page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <PageDescription title="CLEANROOM WINDOWS">
        Our cleanroom observation windows come in a diverse range of
        configurations, featuring options such as single or double glazing, with
        variations including right angles and smoothly rounded corners for added
        versatility and aesthetic appeal. The innovative P&D window integrated
        structure design seamlessly harmonizes with the clean wall panel,
        delivering not only impeccable sealing performance and effortless
        installation but also a visually appealing and sophisticated appearance
        that elevates the overall ambience of the space, serving as a standout
        feature within the environment.
      </PageDescription>
      <ProductHeading title="Windows" />
      {windowData.map((window, i) => (
        <ProductImageComp
          data={window}
          key={i}
          reverse={i % 2 === 0 ? false : true}
        />
      ))}
    </div>
  );
}

const windowData = [
  {
    img: singleGlazedImg,
    title: "Single Glazed Windows",
    desc: "Our single glass windows are meticulously crafted, featuring an aluminum frame housing a single layer of tempered glass, carefully designed to meet the specific requirements of environments. The various attributes of the glass make it an ideal choice for observation purposes, allowing for visibility between spaces. However, due to the single-layer design, the thermal insulation of these windows is optimized for employing them in partition walls dividing spaces.",
  },
  {
    img: doubleGlazedImg,
    title: "Double Glazed Windows",
    desc: "Our double glass windows represent a cutting-edge building material, combining many benefits including superior heat insulation, soundproofing capabilities, an aesthetically pleasing design, and a reduction in overall building weight. Comprising high-performance sound-insulating glass, these windows are meticulously constructed using a dual-pane glass setup, meticulously sealed within an aluminum alloy frame containing a desiccant. The use of high-strength adhesive, during the integration process ensures optimal structural integrity.",
  },
];
