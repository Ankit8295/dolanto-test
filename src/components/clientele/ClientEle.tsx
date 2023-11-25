"use client";
import ClientEleCard from "@/src/components/clientele/clientele-card/ClientEleCard";
import { useEffect, useMemo, useState } from "react";

export type ClienteleType = {
  id?: string;
  created_at?: string;
  category: string;
  location: string;
  image: string;
  client_name: string;
};

type Props = {
  clientData: ClienteleType[];
};

export default function Clientele({ clientData }: Props) {
  const data = useMemo(() => {
    return clientData;
  }, [clientData]);

  const [currProduct, setCurrProduct] = useState("");
  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (currProduct.length > 0) {
      return setProducts(data.filter((data) => data.category === currProduct));
    }
    setProducts(clientData);
  }, [currProduct, data, clientData]);

  return (
    <>
      <div className="text-lg flex gap-5 max-md:grid max-md:grid-cols-2">
        <div
          onClick={() => setCurrProduct("")}
          className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black ${
            currProduct.length > 0
              ? "bg-lightBLue"
              : "bg-gradient-main text-white"
          }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
        >
          <span>All</span>
        </div>
        <div
          onClick={() => setCurrProduct("pharma")}
          className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black  ${
            currProduct === "pharma"
              ? "bg-gradient-main text-white "
              : "bg-lightBLue"
          }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
        >
          <span>Pharma</span>
        </div>
        <div
          onClick={() => setCurrProduct("cement")}
          className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black  ${
            currProduct === "cement"
              ? "bg-gradient-main text-white "
              : "bg-lightBLue"
          }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
        >
          Cement
        </div>
        <div
          onClick={() => setCurrProduct("dairy")}
          className={`cursor-pointer rounded-xl  hover:bg-gradient-main hover:text-white transition  text-black  ${
            currProduct === "dairy"
              ? "bg-gradient-main text-white "
              : "bg-lightBLue"
          }  px-10 flex  items-center justify-center text-lg capitalize py-2`}
        >
          <span>dairy</span>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-5 max-sm:justify-items-center  max-lg:grid-cols-2 max-sm:grid-cols-1">
        {products.map((product) => (
          <ClientEleCard key={product.id} client={product} />
        ))}
      </div>
    </>
  );
}
