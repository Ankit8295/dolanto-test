import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="BIO PHARMA EQUIPMENT">
        Biosafety cabinets (BSCs) protect people, products, and the environment
        from biohazards during tasks. Class I is for low risk, Class II is
        common for research, and Class III is fully enclosed for maximum safety.
        Class II has four types and uses gloves for handling. Class III is
        airtight with gloves for high protection.
      </PageDescription>
    </div>
  );
}
