import certificateImgA from "@/public/media/homepage/certA.jpg";
import certificateImgB from "@/public/media/homepage/certB.jpg";
import certificateImgC from "@/public/media/homepage/certC.jpg";
import clearnRoomImg from "@/public/media/homepage/hero_cleanroom.webp";
import modularOtImg from "@/public/media/homepage/hero_modularot.webp";
import pharmaImg from "@/public/media/homepage/hero_pharma.webp";
import doorImg from "@/public/media/homepage/hero_door.webp";
import labImg from "@/public/media/homepage/herp_lab.webp";
import cardImg from "@/public/media/homepage/cardA.png";
import cleanRoomModal from "@/public/media/homepage/cleanRoomModal.png";
import modularOtModal from "@/public/media/homepage/modularOtModal.png";
import doorModal from "@/public/media/homepage/doorModal.png";
import pharmaModal from "@/public/media/homepage/pharmaModal.png";
import labFurnitureModal from "@/public/media/homepage/labFurnitureModal.png";
import dairy from "@/public/media/homepage/sectors/dairy.png";
import pharmacy from "@/public/media/homepage/sectors/pharmacy.png";
import Chemicals from "@/public/media/homepage/sectors/Chemicals.png";
import Healthcare from "@/public/media/homepage/sectors/Healthcare.png";
import Aerospace from "@/public/media/homepage/sectors/Aerospace.png";
import Automotive from "@/public/media/homepage/sectors/Automotive.png";
import Beverages from "@/public/media/homepage/sectors/Beverages.png";
import Biomedical from "@/public/media/homepage/sectors/Biomedical.png";
import Commercial from "@/public/media/homepage/sectors/Commercial.png";
import Cosmetics from "@/public/media/homepage/sectors/Cosmetics.png";
import Hospitals from "@/public/media/homepage/sectors/Hospitals.png";
import Infrastructure from "@/public/media/homepage/sectors/Infrastructure.png";
import Laboratory from "@/public/media/homepage/sectors/Laboratory.png";
import Microelectronics from "@/public/media/homepage/sectors/Microelectronics.png";
import food from "@/public/media/homepage/sectors/food.png";
import medicalDevices from "@/public/media/homepage/sectors/medicalDevices.png";
import testimonialImgA from "@/public/media/homepage/reviewAbout.png";
import cardbImg from "@/public/media/homepage/cardb.webp";
import cardcImg from "@/public/media/homepage/cardc.webp";
import carddImg from "@/public/media/homepage/cardd.webp";
import cardeImg from "@/public/media/homepage/carde.webp";
import cardfImg from "@/public/media/homepage/cardf.webp";
import { StaticImageData } from "next/image";
import { HomeModalData } from "@/src/utils/types";

const heroSectionCards: {
  title: string;
  imgSrc: StaticImageData;
  summary: string;
}[] = [
  {
    title: "Clean Rooms",
    imgSrc: clearnRoomImg,
    summary:
      "While Dolanto leverages the best of designing principles and technologies, our team is the cast of trailblazers for chemical resistant cleanroom panels meant for areas where there’s a need for high level of cleanliness.",
  },
  {
    title: "Doors",
    imgSrc: doorImg,
    summary:
      "Our easy to integrate and durable cleanroom doors certainly play a vital role in sealing the controlled environment for most industrial circumstances.",
  },
  {
    title: "Modular OT",
    imgSrc: modularOtImg,
    summary:
      "With high-quality patient care as the prime concern, our Modular Operation Theaters are designed for a sterile working environment. ",
  },
  {
    title: "Lab Furniture",
    imgSrc: labImg,
    summary:
      "At Dolanto, we comprehend that lab furniture is an essential component of a laboratory. This ignites the adeptness to drive designing beyond the limits.",
  },
  {
    title: "Pharma Equipments",
    imgSrc: pharmaImg,
    summary:
      "Years of expertise has honed our capabilities to design pharmaceutical equipment for regulated facilities with stringent quality requirements.",
  },
];

const homeAboutCards: {
  title: string;
  subTitle: string;
  description: string;
}[] = [
  {
    title: "200+",
    subTitle: "Employee Strength",
    description:
      "Our cohort of devoted professionals is fervently committed to ensure client satisfaction.",
  },
  {
    title: "600+",
    subTitle: "Accomplished Projects",
    description:
      "Our projects are a testament to our expertise, competency and dedication.",
  },
  {
    title: "07",
    subTitle: "Continents",
    description:
      "Our projects are a testament to our expertise, competency and dedication.",
  },
];

const faqData: {
  qs: string;
  ans: string;
}[] = [
  {
    qs: "What does your organization primarily design?",
    ans: "Primarily, Dolanto designs and manufactures lab furniture, facades, cleanroom panels, cold rooms, and more.",
  },
  {
    qs: "Does your team set up the infrastructure or install equipment?",
    ans: "Yes, Dolanto has a team of experienced experts which is quite active enough to install the equipment at the infrastructure itself.",
  },
  {
    qs: "Whom do we get in touch with post installation?",
    ans: "Our relationship doesn’t end after our team has finished installing the equipment. We are always available for you for issues that may arise in future. In addition, we also offer scheduled maintenance services after installing the equipment.",
  },
];

const offeringSectors: {
  title: string;
  image: StaticImageData;
  id: number;
}[] = [
  {
    id: 1,
    title: "Pharma",
    image: pharmacy,
  },
  {
    id: 21,
    title: "Healthcare",
    image: Healthcare,
  },
  {
    id: 3,
    title: "Biomedical",
    image: Biomedical,
  },
  {
    id: 4,
    title: "Microelectronics",
    image: Microelectronics,
  },
  {
    id: 5,
    title: "Medical devices",
    image: medicalDevices,
  },
  {
    id: 6,
    title: "Dairy",
    image: dairy,
  },
  {
    id: 7,
    title: "Chemicals",
    image: Chemicals,
  },
  {
    id: 8,
    title: "Aerospace",
    image: Aerospace,
  },
  {
    id: 9,
    title: "Food",
    image: food,
  },
  {
    id: 10,
    title: "Beverages",
    image: Beverages,
  },
  {
    id: 11,
    title: "Cosmetics",
    image: Cosmetics,
  },
  {
    id: 12,
    title: "Automotive",
    image: Automotive,
  },
  {
    id: 13,
    title: "Laboratory",
    image: Laboratory,
  },
  {
    id: 14,
    title: "Commercial",
    image: Commercial,
  },
  {
    id: 15,
    title: "Hospitals",
    image: Hospitals,
  },
  {
    id: 16,
    title: "Infrastructure",
    image: Infrastructure,
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
      "“The efforts by the entire team at Dolanto have paid off pretty well. Impeccable craftsmanship and utmost attention to detail was something that we liked the most when the panels were sprawled across Class C and D 26000 sq.ft cleanrooms.”",
    name: "Sarah Johnson",
    designation: " VISION PARENTERALS",
    image: testimonialImgA,
  },
  {
    comment:
      "“Dolanto had surpassed every expectation when we were concerned about cleanroom panels for our facility. The team has not only offered external Civil Windows, but has also walked an extra mile for the expansion of the Rajoda Unit based in Ahmedabad, Gujarat.”",
    name: "Sarah Johnson",
    designation: "AMNEAL PHARMACEUTICALS",
    image: testimonialImgA,
  },
  {
    comment:
      "“Establishing the facility at Sikkim would otherwise have been tedious if we wouldn’t have got in touch with Dolanto. But, when the team became proactive in serving us assiduously, it could attain a spread of 86080 sq.ft area with the cleanroom panels.”",
    name: "Sarah Johnson",
    designation: "AARTI DRUGS",
    image: testimonialImgA,
  },
  {
    comment:
      "“I must say that the team of Dolanto has given its 110% best to establish our facility in Ambernath, Maharashtra. We actually couldn’t afford to keep our back to the grindstone especially when there was a need for setting up ducts around 11000 sq.ft area and a requirement for 6500 sq.ft of cleanroom panels.”",
    name: "Sarah Johnson",
    designation: "CENTAUR PHARMACEUTICAL",
    image: testimonialImgA,
  },
];
const employeeTestimonialData = [
  {
    comment:
      "“Through the years, Dolanto’s work culture has always been distinct by its vibrancy. Across the tenure of 4 years, I was always on a learning curve while I had to constantly shoulder different responsibilities within the agile work environment.”",
    name: "Sarah Johnson",
    designation: " VISION PARENTERALS",
    image: testimonialImgA,
  },
  {
    comment:
      "“I was just like a fumbling professional when I was just starting out working in the sales department with Dolanto. But, as time flew by, I was glad to muster my courage while communicating with prospective clients and in sealing the deal. My team members always lent a helping hand when I was groping for words.”",
    name: "Sarah Johnson",
    designation: "AMNEAL PHARMACEUTICALS",
    image: testimonialImgA,
  },
  {
    comment:
      "“Working with the design department is always a journey that it’s simply unforgettable. While I was a novice and inept at using a plethora of tools, my peers never shirked the responsibility of making me understand the basics of designing along with the functioning of the tools.”",
    name: "Sarah Johnson",
    designation: "AARTI DRUGS",
    image: testimonialImgA,
  },
  {
    comment:
      "“While I have just completed 4 years working as a project manager with Dolanto, my work experience has been incredible. With the passing of every hectic day, I kept beaming with pride with supportive teams across different departments. No task under my ‘To Do’ list seemed mundane. In fact, the joy of doing something great has seeped into my heart.”",
    name: "Sarah Johnson",
    designation: "CENTAUR PHARMACEUTICAL",
    image: testimonialImgA,
  },
];

const dynamicCardData = [
  {
    id: 1,
    title: "Pre Engineered Building",
    description:
      "Revolutionize construction with our new Pre-Engineered Building (PEB). Engineered for efficiency and durability, PEB offers a swift and cost-effective solution for modern structures. Say goodbye to traditional construction hassles and embrace the future of streamlined building with our PEB innovation.",
    image: cardImg,
  },
  {
    id: 2,
    title: "You can do anything you set your mind to!",
    description: "",
    image: cardbImg,
  },
  {
    id: 3,
    title: "Engineering the future of medicine manufacturing",
    description: "",
    image: cardcImg,
  },
  {
    id: 4,
    title:
      "Dolanto on engineering partner on Novo Nordisk’s DKK 17 on expansion in Kalundborg",
    description: "",
    image: carddImg,
  },
  {
    id: 5,
    title:
      "Made-in-India needs to support the laboratory furniture manufacturing sector in our nation",
    description:
      "India's progress has always been a topic of interest for many individuals. Dr. Krishna Ella stated an increased emphasis on the manufacturing of laboratory furniture in India. According to him, this is an area which possesses a huge potential for growth within the country.",
    image: cardeImg,
  },
  {
    id: 6,
    title: "Customer story:",
    description: "Combining pharma expertise and management Consulting",
    image: cardfImg,
  },
];
const certificates = [certificateImgA, certificateImgB, certificateImgC];

export {
  certificates,
  faqData,
  homeAboutCards,
  offeringSectors,
  heroSectionCards,
  employeeTestimonialData,
  productServiceModals,
  productServiceModalsTitle,
  userTestimonialData,
  dynamicCardData,
};
