import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="MODULAR OT">
        Our Modular Operation Theaters prioritize superior patient care,
        featuring meticulously designed spaces tailored for sterility and
        safety. Crafted to maintain stringent hygiene standards, these theaters
        offer a controlled environment, employing advanced materials and air
        filtration systems to minimize infection risks.
      </PageDescription>
    </div>
  );
}
