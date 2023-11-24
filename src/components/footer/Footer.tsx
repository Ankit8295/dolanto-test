"use client";
import { aboutDolantoContact } from "@/src/constants/contactDetail";
import logo from "@/public/logo.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/src/constants/routes";
import ContactForm from "../forms/contact-form/ContactForm";
import { usePathname } from "next/navigation";
type Props = {};

export default function Footer({}: Props) {
  const [wide, setWide] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.includes("contact")) {
      setWide(true);
    } else {
      setWide(false);
    }
  }, [pathname]);
  return (
    <footer className="w-full ">
      <div
        className={`relative w-[95%] max-w-[1750px] max-sm:w-full mx-auto py-6 max-sm:pb-0 grid ${
          wide ? "grid-cols-2" : "grid-cols-3"
        } gap-5 grid-rows-1 max-lg:grid-cols-1 ${
          wide ? "" : "max-lg:grid-rows-[auto]"
        }`}
      >
        <div className="col-span-2 max-lg:row-start-2 max-lg:col-span-1 max-lg:rounded-none bg-footerColor w-full max-lg:w-full flex flex-col justify-between p-10 max-lg:p-5 rounded-3xl h-full">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:grid-rows-[auto] grid-rows-[150px_1fr] w-full pb-5 max-lg:gap-10">
            <div className="text-white col-span-1 row-start-1 w-full">
              <Image src={logo} alt={"dolanto logo"} width={150} height={100} />
            </div>
            <div className="row-start-2 max-lg:col-span-1 max-lg:w-full max-lg:row-start-3  text-white flex flex-col items-start gap-3 font-medium">
              <div>
                <p className="text-sm font-medium text-[#0045AA] leading-6">
                  Address:{" "}
                </p>
                <span>{aboutDolantoContact.address}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0045AA] leading-6">
                  Phone:{" "}
                </p>
                <Link href={`tel:${aboutDolantoContact.phone}`}>
                  {aboutDolantoContact.phone}
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0045AA] leading-6">
                  Support:{" "}
                </p>
                <Link href={`mailto:${aboutDolantoContact.email}`}>
                  {aboutDolantoContact.email}
                </Link>
              </div>
            </div>
            <div className="h-full col-span-1 row-span-2 col-start-2 max-lg:row-start-2  max-lg:row-span-1 max-lg:col-start-1 max-lg:items-start text-white flex flex-col items-end pr-10 text-start justify-evenly gap-4 font-medium">
              <Link className="w-1/3 text-start" href={routes.home}>
                Home
              </Link>
              <Link className="w-1/3 text-start" href={routes.products}>
                Products
              </Link>
              <Link className="w-1/3 text-start" href={routes.services}>
                Services
              </Link>
              <Link className="w-1/3 text-start" href={routes.about_us}>
                About Us
              </Link>
              <Link className="w-1/3 text-start" href={routes.careers}>
                Careers
              </Link>
              <Link className="w-1/3 text-start" href={routes.newsstand}>
                Newsstand
              </Link>
              <Link className="w-1/3 text-start" href={routes.clientele}>
                Clientele
              </Link>
            </div>
          </div>
          <div className="grid max-lg:grid-cols-1 w-full items-center grid-cols-2 text-white  ">
            <div className="flex max-lg:row-start-2 flex-col items-start font-light text-[#F1F7FF]">
              <span className="text-xs">Powered by Digilligent</span>
              <span className="text-xs">
                © All Rights Reserved by Dolanto Engineering Private Limited ®
              </span>
            </div>
            <div className="flex max-lg:row-start-1 items-end pr-10 justify-end text-xs max-lg:justify-start max-lg:pb-5">
              <Link className="w-1/3 text-start" href={routes.user_policy}>
                User Policy
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            wide ? "hidden" : ""
          } max-lg:row-start-1 max-lg:w-[95%] max-lg:mx-auto bg-lightBLue  w-full rounded-3xl h-full`}
        >
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
