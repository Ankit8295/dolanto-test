import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="ACCESSORIES">
        While we understand the importance of a hygienic environment for
        laboratories, we precisely fabricate accessories that are known for
        durability and for a perfect finish. These include covings, corners,
        cutouts, concealed conduit panels, locks, panic bars, and more.
      </PageDescription>
    </div>
  );
}
