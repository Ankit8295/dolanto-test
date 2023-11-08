import PageDescription from "@/src/components/page-description/PageDescription";
import { ourServicesCards } from "@/src/constants/our-services";

import ourServiceImg from "@/public/media/about-us/story.png";
import OurServicesCards from "@/src/components/cards/OurServicesCards";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <PageDescription title="OUR SERVICES">
        Dolanto is an international leading cleanroom design, construction and
        installation company. MRC manufactures a range of cleanroom partition
        systems and accessories, as well as provides turnkey cleanroom design
        and build projects across every continent. Established in 1980 in the
        United Kingdom MRC has supported the progression of high end engineering
        industries through innovative design concepts and material technologies.
      </PageDescription>
      <div className="w-full h-full flex flex-col gap-10">
        <OurServicesCards image={ourServiceImg} title="Designing">
          Spectrum PharmaTECH, one of the leading Pharma Consultants in India,
          is an internationally recognised company that provides Design
          Engineering and EPC services globally to a wide range of industries
          such as Pharmaceutical, Biopharmaceuticals, Food, Beverage, and
          Cosmetic industries while meeting the most stringent regulatory
          requirements. We are ISO 9001:2015 certified.
        </OurServicesCards>
        <OurServicesCards reverse={true} image={ourServiceImg} title="Building">
          Spectrum PharmaTECH, one of the leading Pharma Consultants in India,
          is an internationally recognised company that provides Design
          Engineering and EPC services globally to a wide range of industries
          such as Pharmaceutical, Biopharmaceuticals, Food, Beverage, and
          Cosmetic industries while meeting the most stringent regulatory
          requirements. We are ISO 9001:2015 certified.
        </OurServicesCards>
        <OurServicesCards image={ourServiceImg} title="After Sales Services">
          Spectrum PharmaTECH, one of the leading Pharma Consultants in India,
          is an internationally recognised company that provides Design
          Engineering and EPC services globally to a wide range of industries
          such as Pharmaceutical, Biopharmaceuticals, Food, Beverage, and
          Cosmetic industries while meeting the most stringent regulatory
          requirements. We are ISO 9001:2015 certified.
        </OurServicesCards>
      </div>
    </div>
  );
}
