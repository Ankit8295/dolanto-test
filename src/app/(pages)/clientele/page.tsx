"use client";
import ClientEleCard from "@/src/components/clientele-card/ClientEleCard";
import PageDescription from "@/src/components/page-description/PageDescription";
import { clienteleData } from "@/src/constants/clientele";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const data = useMemo(() => {
    return clienteleData;
  }, []);

  const [currProduct, setCurrProduct] = useState("");
  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (currProduct.length > 0) {
      return setProducts(data.filter((data) => data.id === currProduct));
    }
    setProducts(clienteleData);
  }, [currProduct, data]);

  return (
    <>
      <div className="flex flex-col gap-10">
        <PageDescription title="CLIENTELE">
          At Dolanto, we have been proud about serving a diverse range of
          clients who are at the forefront of innovation. We have provided lab
          furniture and accessories not only to organizations across India but
          also worldwide. With clientele spanning across various sectors, we
          have portrayed our ability to design and manufacture lab furniture
          with the requirements in mind.
        </PageDescription>
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
          {/* <div className="w-full flex items-start flex-wrap max-lg:flex-col justify-between gap-10 max-lg:gap-10"> */}
          {products.map((product) => (
            <ClientEleCard key={product.id} card={product} />
          ))}
        </div>
      </div>
    </>
  );
}
