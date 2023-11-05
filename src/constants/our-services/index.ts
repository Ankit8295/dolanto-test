import serviceImg from "@/public/media/ourservices/serviceA.png";
import { StaticImageData } from "next/image";
const ourServicesCards: {
  title: string;
  description: string;
  image: StaticImageData;
}[] = [
  {
    title: "Designing",
    description:
      "Spectrum PharmaTECH, one of the leading Pharma Consultants in India, is an internationally recognised company that provides Design Engineering and EPC services globally to a wide range of industries such as Pharmaceutical, Biopharmaceuticals, Food, Beverage, and Cosmetic industries while meeting the most stringent regulatory requirements. We are ISO 9001:2015 certified.",
    image: serviceImg,
  },
  {
    title: "Building",
    description:
      "Spectrum PharmaTECH, one of the leading Pharma Consultants in India, is an internationally recognised company that provides Design Engineering and EPC services globally to a wide range of industries such as Pharmaceutical, Biopharmaceuticals, Food, Beverage, and Cosmetic industries while meeting the most stringent regulatory requirements. We are ISO 9001:2015 certified.",
    image: serviceImg,
  },
  {
    title: "After Sales Services",
    description:
      "Spectrum PharmaTECH, one of the leading Pharma Consultants in India, is an internationally recognised company that provides Design Engineering and EPC services globally to a wide range of industries such as Pharmaceutical, Biopharmaceuticals, Food, Beverage, and Cosmetic industries while meeting the most stringent regulatory requirements. We are ISO 9001:2015 certified.",
    image: serviceImg,
  },
];

export { ourServicesCards };
