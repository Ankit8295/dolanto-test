import ContactForm from "@/src/components/forms/contact-form/ContactForm";

export default function Page() {
  return (
    <div className="w-full max-h-[80vh] grid grid-cols-3 gap-5">
      <div className="col-span-2 bg-gray-200 rounded-3xl"></div>
      <div className="col-span-1">
        <ContactForm gradient={true} />
      </div>
    </div>
  );
}
