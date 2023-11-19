import NewsContainer from "@/src/components/newstand-comps/NewsContainer";
import PageDescription from "@/src/components/page-description/PageDescription";
import { latestNewsFromDolanto, relatedPostsData } from "@/src/constants/news";
import SocialPostSlider from "@/src/components/slider/SocialPostSlider";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <PageDescription title="NEWSSTAND">
        Glance through our articles written by industry experts who have years
        of experience in lab furniture design and manufacturing. While we
        believe in sharing knowledge, we also cover the latest advancements that
        shape the laboratories of the future.
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
