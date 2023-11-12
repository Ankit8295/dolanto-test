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
          Dolanto is an international leading cleanroom design, construction and
          installation company. MRC manufactures a range of cleanroom partition
          systems and accessories, as well as provides turnkey cleanroom design
          and build projects across every continent. Established in 1980 in the
          United Kingdom MRC has supported the progression of high end
          engineering industries through innovative design concepts and material
          technologies.
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
        <div className="w-full flex items-start flex-wrap max-lg:flex-col justify-between gap-10 max-lg:gap-10">
          {products.map((product) => (
            <ClientEleCard key={product.id} card={product} />
          ))}
        </div>
      </div>
    </>
  );
}
