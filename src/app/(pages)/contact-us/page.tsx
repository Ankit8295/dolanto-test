import ContactForm from "@/src/components/forms/contact-form/ContactForm";
import map from "@/public/media/map.png";
import Image from "next/image";
import { aboutDolantoContact } from "@/src/constants/contactDetail";

export default function Page() {
  return (
    <div className="w-full  grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:grid-rows-[auto]">
      <div className="col-span-2 max-lg:row-start-1 row-span-1 rounded-3xl max-lg:col-span-1 flex flex-col gap-5 justify-between">
        <Image
          src={map}
          alt="map image"
          className="object-fill w-full max-lg:h-[300px] max-lg:object-cover max-lg:rounded-3xl "
        />
        <div className="flex justify-between items-center gap-2 flex-wrap">
          <div className="py-2 px-6 flex flex-col items-start gap-1 grow rounded-xl bg-lightBLue">
            <span>Address:</span>
            <h2 className="text-[#0045AA] text-xl font-medium">
              {aboutDolantoContact.address}
            </h2>
          </div>
          <div className="py-2 px-6 flex flex-col items-start gap-1 grow rounded-xl bg-lightBLue">
            <span>Phone:</span>
            <h2 className="text-[#0045AA] text-xl font-medium">
              {aboutDolantoContact.phone}
            </h2>
          </div>
          <div className="py-2 px-6 flex flex-col items-start gap-1 grow rounded-xl bg-lightBLue">
            <span>Support:</span>
            <h2 className="text-[#0045AA] text-xl font-medium">
              {aboutDolantoContact.email}
            </h2>
          </div>
        </div>
      </div>
      <div className="col-span-1 max-lg:row-start-2 row-span-1">
        <ContactForm gradient={true} />
      </div>
    </div>
  );
}
