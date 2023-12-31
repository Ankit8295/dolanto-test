import ContactForm from "@/src/components/forms/contact-form/ContactForm";
import map from "@/public/media/map.png";
import Image from "next/image";
import { aboutDolantoContact } from "@/src/constants/contactDetail";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full  grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:grid-rows-[auto]">
      <div className="col-span-2 max-lg:row-start-1 row-span-1 rounded-3xl max-lg:col-span-1 flex flex-col gap-5 justify-between">
        <Image
          src={map}
          alt="map image"
          data-aos="fade-right"
          loading="lazy"
          placeholder="blur"
          className="h-full w-full object-cover max-sm:aspect-square "
        />
        <div
          data-aos="fade-up"
          className="flex justify-between items-center gap-2 flex-wrap"
        >
          <div className="py-2 px-6 max-sm:px-3 flex flex-col items-start gap-1 grow rounded-xl bg-lightBLue">
            <span className="max-sm:text-sm font-light">Address:</span>
            <h2 className="text-[#0045AA] text-xl max-sm:text-base font-medium">
              {aboutDolantoContact.address}
            </h2>
          </div>
          <div className="py-2 px-6 max-sm:px-3 flex flex-col items-start gap-1 grow rounded-xl bg-lightBLue">
            <span className="max-sm:text-sm font-light">Phone:</span>
            <Link
              href={`tel:${aboutDolantoContact.phone}`}
              className="text-[#0045AA] text-xl max-sm:text-base  font-medium"
            >
              {aboutDolantoContact.phone}
            </Link>
          </div>
          <div className="py-2 px-6 max-sm:px-3 flex flex-col items-start gap-1 grow rounded-xl bg-lightBLue">
            <span className="max-sm:text-sm font-light">Support:</span>
            <Link
              href={`tel:${aboutDolantoContact.email}`}
              className="text-[#0045AA] text-xl max-sm:text-base  font-medium"
            >
              {aboutDolantoContact.email}
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="col-span-1 max-lg:row-start-2 row-span-1"
      >
        <ContactForm gradient={true} />
      </div>
    </div>
  );
}
