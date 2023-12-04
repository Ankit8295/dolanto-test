import PageDescription from "@/src/components/page-description/PageDescription";
import labFurnitureImg from "@/public/media/homepage/labFurnitureModal.png";
import conditionStorages from "@/public/media/products/conditionStorages.png";
import fabrication from "@/public/media/products/fabrication.png";
import facades from "@/public/media/products/facades.png";
import merchandising from "@/public/media/products/merchandising.png";
import Image from "next/image";
import {
  conditionedStoragesProducts,
  fabricationProducts,
} from "@/src/constants/products";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <PageDescription title="PRODUCTS">
        Our clean room doors are created to order to meet the needs of these
        industries. Our clean room door helps to keep dust particles and
        contaminants out of the space. When there is a high risk of air
        contamination from environmental contaminants such as dust, airborne
        microorganisms, aerosol particles, and chemical vapor, a clean room
        environment is essential.
      </PageDescription>
      <div className="w-full flex items-center justify-center">
        <Image
          src={labFurnitureImg}
          alt="lab furniture"
          width={500}
          height={500}
        />
      </div>
      <div className="grid grid-cols-3 items-center max-lg:grid-cols-1 grid-rows-[auto] gap-x-5 max-lg:gap-0 max-lg:gap-y-2 ">
        <Image
          src={fabrication}
          alt="lab furniture"
          className=" rounded-3xl   col-span-1 w-full max-lg:row-start-2"
        />
        <div className="col-span-2 max-lg:row-start-1 h-full bg-lightBLue text-black rounded-3xl  p-5">
          <h1 className="text-3xl max-lg:text-center">Fabrications</h1>
          <span>
            Dolanto provides different cleanroom sandwich panels with excellent
            performance, factory prefabrication, field splicing and simple
            module installation functions.
          </span>
          <div className="w-full grid grid-cols-3 gap-x-3 gap-y-3 max-xl:gap-y-1 max-xl:pt-2  pt-3">
            {fabricationProducts.map((products) => (
              <Link
                className=" text-start  max-xl:text-sm"
                href={`products/${products.link}`}
                key={products.name}
              >
                {"> "}
                {products.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-x-0 max-lg:gap-y-8 gap-x-5">
        <div className="flex flex-col max-lg:flex-col-reverse gap-7 h-full">
          <Image
            src={conditionStorages}
            alt="Condition Storages"
            className=" rounded-3xl  w-full h-full"
          />
          <div className="bg-lightBLue min-h-[40%] p-5 flex flex-col rounded-3xl  gap-4 grow">
            <h1 className="text-2xl max-lg:text-center">
              Conditioned Storages
            </h1>
            <span>
              Dolanto provides different cleanroom sandwich panels with
              excellent performance, factory prefabrication, field splicing and
              simple module installation functions.
            </span>
            <div className="grid grid-cols-1 gap-3 pt-5">
              {conditionedStoragesProducts.map((products) => (
                <Link
                  className=" text-start  max-xl:text-sm"
                  href={`products/${products.link}`}
                  key={products.name}
                >
                  {"> "}
                  {products.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 col-span-2">
          <div className="flex max-lg:flex-col-reverse gap-5 h-full">
            <Image
              src={merchandising}
              alt="Condition Storages"
              className=" rounded-3xl   max-lg:w-full w-1/2 h-[250px]"
            />
            <div className="bg-lightBLue p-5  w-1/2 max-lg:w-full rounded-3xl  flex flex-col gap-2 grow">
              <Link
                href={"/products/merchandising"}
                className="text-2xl max-lg:text-center"
              >
                Merchandising
              </Link>
              <span>
                Dolanto provides different cleanroom sandwich panels with
                excellent performance, factory prefabrication, field splicing
                and simple module installation functions.
              </span>
            </div>
          </div>
          <div className="flex max-lg:flex-col-reverse gap-5 h-full">
            <Image
              src={facades}
              alt="Condition Storages"
              className=" rounded-3xl   max-lg:w-full w-1/2 h-[250px]"
            />
            <div className="bg-lightBLue p-5  w-1/2 max-lg:w-full rounded-3xl  flex flex-col gap-2 grow">
              <Link
                href={"/products/facades"}
                className="text-2xl max-lg:text-center"
              >
                Facades
              </Link>
              <span>
                Dolanto provides different cleanroom sandwich panels with
                excellent performance, factory prefabrication, field splicing
                and simple module installation functions.
              </span>
            </div>
          </div>
          <div className="flex max-lg:flex-col-reverse gap-5 h-full">
            <Image
              src={facades}
              alt="Condition Storages"
              className=" rounded-3xl   max-lg:w-full w-1/2 h-[250px]"
            />
            <div className="bg-lightBLue p-5 w-1/2 max-lg:w-full rounded-3xl  flex flex-col gap-2 grow">
              <Link
                href={"/products/pre-engineered-building"}
                className="text-2xl max-lg:text-center"
              >
                Pre Engineered Building
              </Link>
              <span>
                Dolanto provides different cleanroom sandwich panels with
                excellent performance, factory prefabrication, field splicing
                and simple module installation functions.
              </span>
            </div>
          </div>
          <div className="flex max-lg:flex-col-reverse gap-5 h-full">
            <Image
              src={facades}
              alt="Condition Storages"
              className=" rounded-3xl   max-lg:w-full w-1/2 h-[250px]"
            />
            <div className="bg-lightBLue p-5 w-1/2 max-lg:w-full rounded-3xl  flex flex-col gap-2 grow">
              <Link
                href={"/products/blood-bank-equipments"}
                className="text-2xl max-lg:text-center"
              >
                Blood Bank Equipment
              </Link>
              <span>
                Dolanto specializes in producing essential blood equipment for
                hospitals and blood banks. Our meticulous design process adheres
                to industry standards, ensuring accurate readings.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
