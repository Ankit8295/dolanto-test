import clearnRoomImg from "@/public/media/homepage/hero_cleanroom.png";
import doorImg from "@/public/media/homepage/hero_door.png";
import cardImg from "@/public/media/homepage/cardA.png";
import modularOtImg from "@/public/media/homepage/hero_modularot.png";
import labImg from "@/public/media/homepage/herp_lab.png";
import pharmaImg from "@/public/media/homepage/hero_pharma.png";
import cleanRoomModal from "@/public/media/homepage/cleanRoomModal.png";
import modularOtModal from "@/public/media/homepage/modularOtModal.png";
import doorModal from "@/public/media/homepage/doorModal.png";
import pharmaModal from "@/public/media/homepage/pharmaModal.png";
import labFurnitureModal from "@/public/media/homepage/labFurnitureModal.png";
import cement from "@/public/media/homepage/sectors/cement.png";
import distillary from "@/public/media/homepage/sectors/distillary.png";
import dairy from "@/public/media/homepage/sectors/dairy.png";
import pharmacy from "@/public/media/homepage/sectors/pharmacy.png";
import biopharmaceuticals from "@/public/media/homepage/sectors/Biopharmaceuticals.png";
import chemicals from "@/public/media/homepage/sectors/Chemicals.png";
import healthcare from "@/public/media/homepage/sectors/Healthcare.png";
import formulation from "@/public/media/homepage/sectors/formulation.png";
import testimonialImgA from "@/public/media/homepage/reviewAbout.png";

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
  id: number;
}[] = [
  {
    id: 1,
    title: "pharmacy",
    image: pharmacy,
  },
  {
    id: 21,
    title: "dairy",
    image: dairy,
  },
  {
    id: 3,
    title: "cement",
    image: cement,
  },
  {
    id: 4,
    title: "distillary",
    image: distillary,
  },
  {
    id: 5,
    title: "Formulation",
    image: formulation,
  },
  {
    id: 6,
    title: "Biopharmaceuticals",
    image: biopharmaceuticals,
  },
  {
    id: 7,
    title: "Chemicals",
    image: chemicals,
  },
  {
    id: 8,
    title: "Healthcare",
    image: healthcare,
  },
  {
    id: 9,
    title: "Formulation",
    image: pharmacy,
  },
  {
    id: 10,
    title: "Biopharmaceuticals",
    image: dairy,
  },
  {
    id: 11,
    title: "Chemicals",
    image: cement,
  },
  {
    id: 12,
    title: "Healthcare",
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

const userTestimonialData = [
  {
    comment:
      "Exceptional Precision and Quality! Dolanto’s clean room solution exceeded our expectations. Their meticulous attention to detail and unwavering commitment to delivering a clean room environment truly impressed us.",
    name: "Sarah Johnson",
    designation: "Managing Director at L&T",
    image: testimonialImgA,
  },
  {
    comment:
      "Exceptional Precision and Quality! Dolanto’s clean room solution exceeded our expectations. Their meticulous attention to detail and unwavering commitment to delivering a clean room environment truly impressed us.",
    name: "Sarah Johnson",
    designation: "Managing Director at L&T",
    image: testimonialImgA,
  },
  {
    comment:
      "Exceptional Precision and Quality! Dolanto’s clean room solution exceeded our expectations. Their meticulous attention to detail and unwavering commitment to delivering a clean room environment truly impressed us.",
    name: "Sarah Johnson",
    designation: "Managing Director at L&T",
    image: testimonialImgA,
  },
];
const dynamicCardData = [
  {
    id: 1,
    title: "Looking  for a new role? Join the passion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt.",
    image: cardImg,
  },
  {
    id: 2,
    title: "You can do anything you set your mind to!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: cardImg,
  },
  {
    id: 3,
    title: "Engineering the future of medicine manufacturing",
    description: "",
    image: cardImg,
  },
  {
    id: 4,
    title:
      "Dolanto on engineering partner on Novo Nordisk’s DKK 17 on expansion in Kalundborg",
    description: "",
    image: cardImg,
  },
  {
    id: 5,
    title: "An impressive financial year for Dolanto.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt.",
    image: cardImg,
  },
  {
    id: 6,
    title: "Customer story:",
    description: "Combining pharma expertise and management Consulting",
    image: cardImg,
  },
];
export {
  faqData,
  homeAboutCards,
  offeringSectors,
  heroSectionCards,
  productServiceModals,
  productServiceModalsTitle,
  userTestimonialData,
  dynamicCardData,
};
