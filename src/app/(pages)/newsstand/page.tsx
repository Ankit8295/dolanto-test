import NewsContainer from "@/src/components/newstand-comps/NewsContainer";
import PageDescription from "@/src/components/page-description/PageDescription";
import { latestNewsFromDolanto, relatedPostsData } from "@/src/constants/news";
import SocialPostSlider from "@/src/components/slider/SocialPostSlider";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <PageDescription title="NEWSSTAND">
        Dolanto is an international leading cleanroom design, construction and
        installation company. MRC manufactures a range of cleanroom partition
        systems and accessories, as well as provides turnkey cleanroom design
        and build projects across every continent. Established in 1980 in the
        United Kingdom MRC has supported the progression of high end engineering
        industries through innovative design concepts and material technologies.
      </PageDescription>
      <NewsContainer
        containerTitle="Latest from Dolanto"
        newsData={latestNewsFromDolanto}
        relatedPostData={relatedPostsData}
      />
      <NewsContainer
        containerTitle="White paper"
        newsData={latestNewsFromDolanto}
      />
      <SocialPostSlider />
      <NewsContainer
        containerTitle="Blogs & Articles"
        newsData={latestNewsFromDolanto}
        relatedPostData={relatedPostsData}
      />
    </div>
  );
}
