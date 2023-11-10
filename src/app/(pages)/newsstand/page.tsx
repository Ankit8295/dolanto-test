import PageDescription from "@/src/components/page-description/PageDescription";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <PageDescription title="NEWSSTAND">
        Dolanto is an international leading cleanroom design, construction and
        installation company. MRC manufactures a range of cleanroom partition
        systems and accessories, as well as provides turnkey cleanroom design
        and build projects across every continent. Established in 1980 in the
        United Kingdom MRC has supported the progression of high end engineering
        industries through innovative design concepts and material technologies.
      </PageDescription>
      <Link href={`newsstand/${"newsA"}`} className="text-5xl text-black">
        NewA
      </Link>
      <Link href={`newsstand/${"newsB"}`} className="text-5xl text-black">
        NewB
      </Link>
    </div>
  );
}
