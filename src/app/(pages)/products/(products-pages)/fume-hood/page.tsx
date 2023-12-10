import PageDescription from "@/src/components/page-description/PageDescription";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5 max-lg:gap-10">
      <PageDescription title="FUME HOODS">
        Dolanto&apos;s fume hoods are specifically designed for handling
        chemical substances that may potentially jeopardize safety and health.
        These hoods are constructed using materials that demonstrate resilience
        against physical, chemical, and thermal impacts. Equipped with a
        contemporary ventilation system featuring strategic openings and an
        airfoil, these hoods ensure the efficient removal of hazardous chemical
        substances and gases released during laboratory operations.
      </PageDescription>
    </div>
  );
}
