import PageDescription from "@/src/components/page-description/PageDescription";
import pebImage from "@/public/media/products/peb/pebmain.png";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5">
      <PageDescription title="PRE ENGINEERED BUILDINGS">
        Pre-Engineered Buildings (PEBs) can be referred to as structures whose
        components are made in a factory and then assembled together at a
        certain location. Usually, the PEBs are quite distinct in comparison to
        the traditional structural steel buildings, and they can be an ideal
        alternative. While the different elements of the PEBs are designed as
        per the design specifications, they are transported to the construction
        site and later assembled at the site using bolts. When you come across
        this structural concept, it is usually used to build storage units,
        warehouses, and manufacturing buildings. The use of the PEBs comprise of
        the structural steel framing system, wall panels, and the metal roofing
        system.
      </PageDescription>
      <Image
        src={pebImage}
        alt="peb"
        className="w-full rounded-3xl min-h-[400px] object-fill"
      />
    </div>
  );
}
