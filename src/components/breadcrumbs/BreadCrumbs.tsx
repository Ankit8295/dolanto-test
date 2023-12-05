"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function BreadCrumbs({}: Props) {
  const pathname = usePathname();

  const paths = pathname.split("/");

  function createCrumbs(paths: string[]) {
    const crumbs: string[] = [];
    let path = "";
    paths.forEach((_path, index) => {
      path += index === 0 ? `${_path}` : `/${_path}`;
      crumbs.push(path);
    });

    return crumbs;
  }

  const breads = createCrumbs(paths);

  const myBreads = breads.splice(0, paths.length - 1);

  return (
    <div className="w-full text-center flex gap-1 justify-center items-center">
      {myBreads.map((path, index) => (
        <>
          <Link
            key={index}
            href={path || "/"}
            className="capitalize text-sm text-[#001942] max-sm:text-[10px]"
          >
            {path === ""
              ? "Home"
              : path
                  .split("/")
                  [path.split("/").length - 1].split("-")
                  .join(" ")}
          </Link>
          {index < breads.length - 1 ? "" : ">"}
        </>
      ))}
      <span className="capitalize text-sm max-sm:text-[10px] text-[#001942] font-light cursor-pointer">
        {breads[breads.length - 1]
          .split("/")
          [breads[breads.length - 1].split("/").length - 1].split("-")
          .join(" ")}
      </span>
    </div>
  );
}
