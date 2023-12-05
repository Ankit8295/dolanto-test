/* eslint-disable @next/next/no-img-element */
import PageDescription from "@/src/components/page-description/PageDescription";
import ProductHeading from "@/src/components/products-components/products-heading/ProductHeading";
import mainImg from "@/public/media/products/doors/doormain.png";
import doorAccessories from "@/public/media/products/doors/doorAccessories.png";
import { doorsData } from "@/src/constants/products/doors";
import ProductImageComp from "@/src/components/products-components/product-image-comp/ProductImageComp";

type Props = {};
const mainFeature = [
  "Hinge: Resistant to acid and alkali disinfection, long-term high-frequency use, door leaf does not sag, convenient field installation and adjustment",
  "Lock: The entire lock service life reaches up to 200,000 times and the overall appearance parts have passed the 96-hour neutral salt spray test",
  "Window on the door are double glazed, frosted glass, rounded corner, right angles, border corner right angles",
  "Door seal the door body adopts German production technology on three sides, and imported polyurethane adhesive is formed on site which boasts an excellent sealing ",
];
const accessoriesData = [
  "Mandatory audit & approval for any drug manufacturer & exporter",
  "Increased awareness of adopting good manufacturing practices",
  "Maintaining cleanroom environment for manufacturing",
  "Minimizes micro-biological and particulate contamination",
  "Easy & quick system installation",
];

export default function page({}: Props) {
  return (
    <div className="w-full flex flex-col gap-10">
      <PageDescription title="CLEANROOM DOORS">
        Our distinguished line of cleanroom doors are known for precision,
        reliability, and uncompromising cleanliness. Each door is crafted with
        utmost care to meet the standards of controlled environments,
        safeguarding the essential processes vital to your operation&apos;s
        success. Centered on flawless craftsmanship, and cutting-edge
        innovation, our doors offer a seamless blend of functionality and
        contamination control.
      </PageDescription>
      <ProductHeading title="Features" />
      <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-y-10 gap-x-20 max-xl:gap-x-10 items-center">
        <ul className="list-disc pl-5 flex flex-col gap-3 justify-between">
          {mainFeature.map((feature, i) => (
            <li className=" text-2xl max-xl:text-xl max-sm:text-lg" key={i}>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center">
          <img
            src={mainImg.src}
            alt="feature image"
            className="w-full h-full max-h-[600px] max-w-[700px] max-lg:max-w-full"
          />
        </div>
      </div>
      <ProductHeading title="Types" />
      {doorsData.map((door, i) => (
        <ProductImageComp
          key={i}
          reverse={i % 2 === 0 ? false : true}
          data={door}
        />
      ))}
      <ProductHeading title="Accessories" />
      <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-y-10 items-center">
        <div className="flex flex-col gap-10 max-xl:gap-2 justify-between ">
          <div className="flex flex-col gap-3 max-xl:gap-0">
            <h3 className="font-medium text-xl max-xl:text-lg">
              One of the most reliable methods of access control available to
              site security managers is an interlocking door.
            </h3>
            <p className="">
              In a regulated environment, such as a cleanroom, interlocking
              systems are designed to provide a safe, efficient, and convenient
              means of opening and closing doors. The doors in cleanrooms with
              many entry points or interconnected rooms can be supplied with an
              interlock door system to prevent a sudden loss of positive
              pressure and the invasion of air that results from workers
              accidentally opening too many doors at once.
            </p>
          </div>
          <ul className="list-disc pl-5 flex flex-col gap-3 max-xl:gap-1 justify-between">
            {accessoriesData.map((feature, i) => (
              <li className=" text-lg max-xl:text-base max-sm:text-sm" key={i}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end items-center">
          <img
            src={doorAccessories.src}
            alt="feature image"
            className="w-full h-full aspect-square max-h-[550px] max-w-[500px] max-lg:max-w-full"
          />
        </div>
      </div>
      <ProductHeading title="Insulation" />
    </div>
  );
}
