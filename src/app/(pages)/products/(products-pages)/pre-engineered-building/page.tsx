import PageDescription from "@/src/components/page-description/PageDescription";
import pebImage from "@/public/media/products/peb/pebmain.png";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-10 text-[#001942]">
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
        className="w-full rounded-3xl max-md:rounded-xl min-h-[350px] object-fill object-center"
      />
      <PEBInfoComp
        summary="As soon as the drawing is approved, a company can expect the delivery
        of the components within a few weeks. In addition, the anchor bolts
        and foundation are made parallelly along with the final preparations,
        thereby making these ready for bolting at the premises. Such kind of
        buildings help to reduce the overall construction time span when
        compared to the usual building structures. Subsequently, this offers
        the owner to generate revenue and allow for quick occupancy."
        width="80%"
        title="Reduces Construction time"
      />

      <PEBInfoComp
        summary=" When the engineers follow a systematic approach while designing the
        structural components, along with the installation and the technology,
        it leads to cost savings."
        width="60%"
        title="Lowers the overall cost"
      />
      <PEBInfoComp
        summary="With the addition of bays, the buildings can always be expanded with
          ease. Moreover, it’s possible to expand the building with pre-designed
          PEBs in the near future."
        width="60%"
        title="Flexibility in Expansion"
      />
      <PEBInfoComp
        summary="As the components are made under the supervision of the experts and the technological facility, there is no compromise in the overall quality."
        width="60%"
        title="Quality Control"
      />
      <PEBInfoComp
        summary="When you come across the primary structural framework, it has strong steel frames inside the building. These PESB frames have columns and rafters that reduce in thickness towards the end."
        width="80%"
        title="Main Frame"
      />
      <PEBInfoComp
        summary="The main function of the columns is to transmit the loads to the foundation of the buildings. In case of the pre-engineered structures, the columns are made with the help of Isections. After observing the columns, these expand across the width and the depth as you start moving towards the top of the column."
        title="Columns"
      />
      <PEBInfoComp
        summary="A rafter is nothing but a series of inclined structural elements, which are known as beams. These run from the ridge, in the downward direction towards the wall-plate or the eave. Apart from supporting the roof deck, these sustain various loads."
        width="70%"
        title="Rafters"
      />
      <PEBInfoComp
        summary="While girts are commonly used on the walls, purlins are observed in the roofing structures. However, when you come across eaves, these are used at the intersection of the roof and the sidewalls. The purlins along with the girts, together, form the Z sections along with stiff flanges."
        width="60%"
        title="Purlins and Girts"
      />
      <PEBInfoComp
        summary="Eave Struts are nothing but unequal flanges which are 200 mm deep, 104 mm wide with regards to the top flange, and 118 mm wide with respect to the bottom flange. Both, the top flange and the bottom flange are placed to form the roof slope. Every flange also has a stiffener lip which is 24 mm in thickness."
        width="70%"
        title="Eave Struts"
      />
      <PEBInfoComp
        summary="Cable bracings serve to keep the building stable when it faces forces longitudinally. The cable bracing can also get impacted due to wind, seismic activity and crane loads. However, to achieve stability across the roof and the side walls, diagonal bracing seems to be the ideal choice."
        width="80%"
        title="Bracings"
      />
      <PEBInfoComp
        summary="Open steel web steel joints certainly offer support for the floor deck or the roof when the load is to be transmitted to the structural framework, including the columns and the beams. For the flooring, the system uses the steel decks and the steel joists and the overall construction of the roof leads into considerable savings."
        width="90%"
        title="Open Steel Web Steel Joists"
      />
      <PEBInfoComp
        summary="While the roof is made and the wall is cladded, the ribbed steel is chosen as an ideal material. While such type of sheets are made from steel coils, the thickness ranges from 0.47 mm to 0.8 mm, along with high-tensile properties. But, when the roof is designed, the main objective is that the panels must sustain the snow loads and the cyclone. As the designers develop the panels, they design it as per the standards of ASTM A792M Grade 340/550 MPA. Besides, the panels are also coated with Galvalume which is an alloy with 55% Aluminum and 42.5% Zinc. Usually, these panels are available in thicknesses, 0.475 mm, 0.50 mm, 0.55 mm, and 0.76 mm and in different colors."
        title="Sheetings"
      />
      <PEBInfoComp
        summary="Our sheeting has multiple layers of coating which not only enhances the visual appeal but also enhances the lifespan in different climatic conditions. In addition, these claddings are used in wall and roofing applications."
        width="50%"
        title="Claddings"
      />
      <PEBInfoComp
        summary="Red oxide coating is always applied on primary as well as secondary steel components. But, in certain instances, the structure undergoes a shot-blast process which enhances the anti-corrosion properties."
        width="70%"
        title="Paints and Finishes"
      />
    </div>
  );
}

type Props = {
  title: string;
  width?: string;
  summary: string;
};

function PEBInfoComp({ summary, title, width = "90%" }: Props) {
  return (
    <div
      className={`max-lg:w-full flex  max-lg:items-start items-center flex-col gap-3 ${
        width ? `w-[${width}]` : "w-[60%]"
      } mx-auto`}
    >
      <h3 className="text-3xl max-md:text-2xl font-semibold ">{title}</h3>
      <p className="text-xl max-md:text-base text-center max-lg:text-start">
        {summary}
      </p>
    </div>
  );
}
