import Clientele from "@/src/components/clientele/ClientEle";
import PageDescription from "@/src/components/page-description/PageDescription";
import { GradientText } from "@/src/components/tags/Tags";
import supabase from "@/supabase";

export const revalidate = 0;

export default async function page() {
  let { data: clientele, error } = await supabase.from("clientele").select("*");

  return (
    <div className="flex flex-col gap-10">
      <PageDescription title="CLIENTELE">
        At Dolanto, we have been proud about serving a diverse range of clients
        who are at the forefront of innovation. We have provided lab furniture
        and accessories not only to organizations across India but also
        worldwide. With clientele spanning across various sectors, we have
        portrayed our ability to design and manufacture lab furniture with the
        requirements in mind.
      </PageDescription>
      {clientele ? (
        <Clientele clientData={clientele} />
      ) : (
        <GradientText customTailwindStyle="font-semibold text-2xl w-full text-center">
          Something Went Wrong or not data found!!!
        </GradientText>
      )}
    </div>
  );
}
