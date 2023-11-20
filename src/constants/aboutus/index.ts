import employeeAImg from "@/public/media/about-us/member1.webp";
import employeeBImg from "@/public/media/about-us/member2.webp";
import employeeCImg from "@/public/media/about-us/member2.webp";
import dolanto from "@/public/media/about-us/dolanto.webp";

import symbian from "@/public/media/about-us/symbian.webp";
import partitionDoor from "@/public/media/about-us/partitiondoor.webp";

export const teamDetails = [
  {
    id: 1,
    name: "Allison Tyler",
    designation: "Team Manager",
    image: employeeAImg,
    socialLinks: {
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: "",
    },
  },
  {
    id: 2,
    name: "Allison Tyler",
    designation: "Team Manager",
    image: employeeBImg,
    socialLinks: {
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: "",
    },
  },
  {
    id: 3,
    name: "Allison Tyler",
    designation: "Team Manager",
    image: employeeCImg,
    socialLinks: {
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: "",
    },
  },
];

export const journeyDetails = [
  {
    title: "Partitions & Doors (P & D)",
    description:
      "The establishment of P & D ensued as it took over the operations of a manufacturing entity.",
    image: partitionDoor,
    year: 2020,
  },
  {
    title: "Symbion Scientific Solutions",
    description:
      "Marking its inception, Symbion Scientific Soln. demonstrated its expertise in developing lab spaces.",
    image: symbian,
    year: 2017,
  },

  {
    title: "Dolanto",
    description:
      "Dolanto emerged through the merger of P & D and Symbion, facilitated by foreign investment.",
    image: dolanto,
    year: 2001,
  },
  {
    title: "Archy Founding",
    description:
      "The company is founded by John Smith, an experienced architect with a passion for sustainable design.",
    image: dolanto,
    year: 2004,
  },
];
