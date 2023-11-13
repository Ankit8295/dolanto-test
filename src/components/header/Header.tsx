"use client";
import Image from "next/image";
import logo from "@/../public/logo.png";
import HamburgerMenu from "./components/HamburgerMenu";
import { GradientBgHover, GradientButtonWrapper } from "../buttons/Buttons";
import {
  useAppState,
  useStateDispatch,
} from "@/src/providers/context-provider/ContextProvider";
import Link from "next/link";
import { routes } from "@/src/constants/routes";

export function Header() {
  const { headerActive } = useAppState();
  const dispatch = useStateDispatch();

  return (
    <header className="w-full bg-white sticky z-50 top-0">
      <div className="w-[95%] relative max-w-[1750px] mx-auto bg-white  flex items-center max-sm:flex-row-reverse justify-between gap-2 py-3">
        <HamburgerMenu />
        <div className="grow  bg-lightBLue max-sm:bg-white max-sm:p-0 rounded-full p-3">
          <Link href={routes.home}>
            <Image
              src={logo}
              alt="logo_dolanto"
              height={50}
              width={100}
              className="ml-3 max-sm:ml-0"
            />
          </Link>
        </div>
        <Link href={routes.contact_us}>
          <GradientButtonWrapper customStyles="max-sm:hidden font-medium text-lg leading-none ">
            Contact Us
          </GradientButtonWrapper>
        </Link>
        {headerActive && (
          <div className="bg-white shadow-outset flex flex-col gap-2 px-7 py-4  rounded-2xl absolute top-[100%] left-0 max-sm:left-full max-sm:-translate-x-full z-50">
            <Link
              href={routes.home}
              onClick={() => {
                dispatch({ type: "ACTIVE_HEADER", payload: false });
              }}
            >
              <GradientBgHover>Home</GradientBgHover>
            </Link>
            <hr className="bg-[#E0E0E0]" />
            <Link
              href={routes.products}
              onClick={() => {
                dispatch({ type: "ACTIVE_HEADER", payload: false });
              }}
            >
              <GradientBgHover>Product</GradientBgHover>
            </Link>
            <hr className="bg-[#E0E0E0]" />
            <Link
              href={routes.services}
              onClick={() => {
                dispatch({ type: "ACTIVE_HEADER", payload: false });
              }}
            >
              <GradientBgHover>Services</GradientBgHover>
            </Link>
            <hr className="bg-[#E0E0E0]" />
            <Link
              href={routes.about_us}
              onClick={() => {
                dispatch({ type: "ACTIVE_HEADER", payload: false });
              }}
            >
              <GradientBgHover>About us</GradientBgHover>
            </Link>
            <hr className="bg-[#E0E0E0]" />
            <Link
              href={routes.careers}
              onClick={() => {
                dispatch({ type: "ACTIVE_HEADER", payload: false });
              }}
            >
              <GradientBgHover>Careers</GradientBgHover>
            </Link>
            <hr className="bg-[#E0E0E0]" />
            <Link
              href={routes.newsstand}
              onClick={() => {
                dispatch({ type: "ACTIVE_HEADER", payload: false });
              }}
            >
              <GradientBgHover>Newsstand</GradientBgHover>
            </Link>
            <hr className="bg-[#E0E0E0]" />
            <Link
              href={routes.clientele}
              onClick={() => {
                dispatch({ type: "ACTIVE_HEADER", payload: false });
              }}
            >
              <GradientBgHover>Clientele</GradientBgHover>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
