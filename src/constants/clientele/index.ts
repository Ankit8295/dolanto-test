import abbott from "@/public/media/clientele/abbott.png";
import glenmark from "@/public/media/clientele/glenmark.png";
import macleods from "@/public/media/clientele/macleods.png";
import patanjali from "@/public/media/clientele/patanjali.png";
const clienteleData = [
  {
    id: "pharma",
    image: glenmark,
    clientName: "Glenmark",
    location: "Sinnar, Maharashtra",
    date: "21/10/2023",
    concept: {
      products: "Clean room, Doors",
    },
  },
  {
    id: "dairy",
    image: patanjali,
    clientName: "patanjali",
    date: "21/10/2023",
    location: "Baddi, Himachal Pradesh",
    concept: {
      products: "dairy",
    },
  },
  {
    id: "cement",
    image: macleods,
    clientName: "macleods",
    date: "21/10/2023",
    location: "Baddi, Himachal Pradesh",
    concept: {
      products: "Cement",
    },
  },
  {
    id: "lab",
    image: abbott,
    clientName: "abbott",
    date: "21/10/2023",
    location: "Verna, Goa",
    concept: {
      products: "Cement",
    },
  },
];
export { clienteleData };
