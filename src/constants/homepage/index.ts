import clearnRoomImg from "@/public/media/homepage/hero_cleanroom.png";
import doorImg from "@/public/media/homepage/hero_door.png";
import modularOtImg from "@/public/media/homepage/hero_modularot.png";
import labImg from "@/public/media/homepage/herp_lab.png";
import pharmaImg from "@/public/media/homepage/hero_pharma.png";
import cleanRoomModal from "@/public/media/homepage/cleanRoomModal.png";
import modularOtModal from "@/public/media/homepage/modularOtModal.png";
import doorModal from "@/public/media/homepage/doorModal.png";
import pharmaModal from "@/public/media/homepage/pharmaModal.png";
import labFurnitureModal from "@/public/media/homepage/labFurnitureModal.png";
import cement from "@/public/media/homepage/cement.png";
import distillary from "@/public/media/homepage/distillary.png";
import dairy from "@/public/media/homepage/dairy.png";
import pharmacy from "@/public/media/homepage/pharmacy.png";

import { StaticImageData } from "next/image";
import { HomeModalData } from "@/src/utils/types";

const heroSectionCards: { title: string; imgSrc: StaticImageData }[] = [
  {
    title: "Clean Rooms",
    imgSrc: clearnRoomImg,
  },
  {
    title: "Doors",
    imgSrc: doorImg,
  },
  {
    title: "Modular OT",
    imgSrc: modularOtImg,
  },
  {
    title: "Lab Furniture",
    imgSrc: labImg,
  },
  {
    title: "Pharma Equipments",
    imgSrc: pharmaImg,
  },
];

const homeAboutCards: {
  title: string;
  subTitle: string;
  description: string;
}[] = [
  {
    title: "400+",
    subTitle: "Happy clients across the globe",
    description:
      "Our team of dedicated experts is passionate about ensuring clients satisfaction.",
  },
  {
    title: "600+",
    subTitle: "Accomplished Projects",
    description:
      "Our team of dedicated experts is passionate about driving measurable results and ensure clients satisfaction",
  },
  {
    title: "7 Lakh",
    subTitle: "Square metre",
    description: "Clean room Panels installed Worldwide",
  },
];

const faqData: {
  qs: string;
  ans: string;
}[] = [
  {
    qs: "What does your EPC company do?",
    ans: "We cater to a diverse range of industries, including but not limited to: oil and gas, power generation, renewable energy, infrastructure, petrochemicals, manufacturing, and water treatment.",
  },
  {
    qs: "Which industries do you serve?",
    ans: "We cater to a diverse range of industries, including but not limited to: oil and gas, power generation, renewable energy, infrastructure, petrochemicals, manufacturing, and water treatment.",
  },
  {
    qs: "What types of services do you offer?",
    ans: "We cater to a diverse range of industries, including but not limited to: oil and gas, power generation, renewable energy, infrastructure, petrochemicals, manufacturing, and water treatment.",
  },
  {
    qs: "Do you have experience in handling large-scale projects?",
    ans: "We cater to a diverse range of industries, including but not limited to: oil and gas, power generation, renewable energy, infrastructure, petrochemicals, manufacturing, and water treatment.",
  },
  {
    qs: "How do you ensure the safety of your projects?",
    ans: "We cater to a diverse range of industries, including but not limited to: oil and gas, power generation, renewable energy, infrastructure, petrochemicals, manufacturing, and water treatment.",
  },
  {
    qs: "How do you handle cost management and project budgets?",
    ans: "We cater to a diverse range of industries, including but not limited to: oil and gas, power generation, renewable energy, infrastructure, petrochemicals, manufacturing, and water treatment.",
  },
];

const offeringSectors: {
  title: string;
  image: StaticImageData;
}[] = [
  {
    title: "pharmacy",
    image: pharmacy,
  },
  {
    title: "dairy",
    image: dairy,
  },
  {
    title: "cement",
    image: cement,
  },
  {
    title: "distillary",
    image: distillary,
  },
];

const productServiceModals: {
  [key: string]: StaticImageData;
} = {
  Cleanroom: cleanRoomModal,
  PEB: cleanRoomModal,
  Doors: doorModal,
  Lab_Furniture: labFurnitureModal,
  Pharma_Equipments: pharmaModal,
  Modular_OT: modularOtModal,
};
const productServiceModalsTitle: HomeModalData[] = [
  "Cleanroom",
  "PEB",
  "Doors",
  "Lab_Furniture",
  "Pharma_Equipments",
  "Modular_OT",
];

export {
  faqData,
  homeAboutCards,
  offeringSectors,
  heroSectionCards,
  productServiceModals,
  productServiceModalsTitle,
};
