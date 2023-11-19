import PageDescription from "@/src/components/page-description/PageDescription";
import ourServiceImg from "@/public/media/about-us/story.png";
import OurServicesCards from "@/src/components/cards/OurServicesCards";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <PageDescription title="OUR SERVICES">
        Our team at Dolanto stands at the forefront of excellence in crafting
        cutting-edge solutions for all your laboratory furniture and equipment
        demands. Our commitment to delivering unparalleled services begins with
        a collaborative design consultation, leading seamlessly into the
        meticulous production of tailored lab furniture, culminating in a
        seamless installation process, and ongoing dedicated support long after
        the setup is complete.{" "}
      </PageDescription>
      <div className="w-full h-full flex flex-col gap-10">
        <OurServicesCards image={ourServiceImg} title="Designing">
          While we collaborate with you every step ahead, our unwavering
          commitment to precision is evident, particularly when conceptualizing
          equipment that adheres to the highest safety protocols and ergonomic
          principles. Through state-of-the-art software, we go the extra mile to
          engineer equipment that serves its purpose seamlessly and optimizes
          efficiency.  Eventually, we comprehend the individuality of each
          laboratory and its layout.
        </OurServicesCards>
        <OurServicesCards reverse={true} image={ourServiceImg} title="Building">
          At Dolanto, we always consider the importance of establishing a
          functional workspace to facilitate groundbreaking research. As we
          offer bespoke workspace solutions, our skilled professionals assure
          you with an efficient installation process and ensuring that the space
          is up and running in no time. To enhance productivity, we also produce
          high-quality, and custom-designed furniture through the
          state-of-the-art manufacturing facility.
        </OurServicesCards>
        <OurServicesCards image={ourServiceImg} title="After Sales Services">
          Dolanto&apos;s dedication in assisting organizations doesn&apos;t end
          with the successful installation of equipment or setting up a layout
          by our experts. We traverse extra miles ahead by offering product
          support and maintaining the space, ensuring that you retain complete
          authority over the integrity of your cleanroom structure whenever the
          need arises. After all, client satisfaction is our priority and the
          services we offer is a testament to our devotion.
        </OurServicesCards>
      </div>
    </div>
  );
}
