import React from "react";
import ProductHeading from "../products-heading/ProductHeading";

type Props = {};

export default function ProductColors({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <ProductHeading title="Colors" />
      <div className="grid grid-cols-8 gap-4  max-2xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {colorPalette.map((colors) => (
          <div
            key={colors.code}
            className="p-2 flex flex-col items-center gap-1"
          >
            <div
              style={{
                backgroundColor: `${colors.color}`,
              }}
              className={` rounded-lg h-[150px] w-full aspect-square`}
            ></div>
            <p className="text-center uppercase font-medium text-lg max-xl:text-sm">
              {colors.name}
            </p>
            <p className="text-center font-light text-lg max-xl:text-sm uppercase">
              {colors.code}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
const colorPalette = [
  {
    color: "#F4F0E6",
    name: "Pure White",
    code: "RAL 9010",
  },
  {
    color: "#F1F3ED",
    name: "Signal White",
    code: "RAL 9003",
  },
  {
    color: "#EEE6D9",
    name: "Cream",
    code: "RAL 9001",
  },
  {
    color: "#DEDBD3",
    name: "Grey White",
    code: "RAL 9002",
  },
  {
    color: "#91989A",
    name: "Silver Grey",
    code: "RAL 7001",
  },
  {
    color: "#6593A9",
    name: "Pastel Blue",
    code: "RAL 5024",
  },
  {
    color: "#2088B3",
    name: "Light Blue",
    code: "RAL 5012",
  },
  {
    color: "#237CAF",
    name: "Sky Blue",
    code: "RAL 5015",
  },

  {
    color: "#C8D9B2",
    name: "Pastel Green",
    code: "RAL 6019",
  },
  {
    color: "#87B5B3",
    name: "Pale Green",
    code: "RAL 6021",
  },
  {
    color: "#919A75",
    name: "Signal Green",
    code: " RAL 6032",
  },
  {
    color: "#659F22",
    name: "Turqoise Blue",
    code: " RAL 5018",
  },
  {
    color: "#2E8154",
    name: "Pastel Turqoise",
    code: "RAL 6034",
  },
  {
    color: "#376A2C",
    name: "Yellow Green",
    code: "RAL 5018",
  },

  {
    color: "#22918F",
    name: " Signal Blue",
    code: "RAL 5005",
  },
  {
    color: "#154E82",
    name: "Emerald Green",
    code: "RAL 6001",
  },
  {
    color: "#F59900",
    name: "Melon Yellow",
    code: "RAL 1028",
  },
  {
    color: "#F27317",
    name: "Pastel Orange",
    code: "RAL 2003",
  },
  {
    color: "#CB2E18",
    name: "Pure Red",
    code: "RAL 3028",
  },
  {
    color: "#C9281B",
    name: "Traffic Red",
    code: "RAL 3020",
  },
  {
    color: "#C35F89",
    name: "Heather Violet",
    code: "RAL 4003",
  },
  {
    color: "#8069A1",
    name: "Blue Lilac",
    code: "RAL 4005",
  },
  {
    color: "#293A91",
    name: "Traffic Blue",
    code: "RAL 5017",
  },
  {
    color: "#283775",
    name: "Ultramarine Blue",
    code: "RAL 5002",
  },
];
