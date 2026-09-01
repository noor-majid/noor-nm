import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import SectionList from "@/components/SectionList";
import Squiggle from "@/components/Squiggle";
import Bookshelf from "@/components/Bookshelf";
import { previous, books } from "@/lib/data";

export default function Previous() {
  return (
    <PageContainer>
      <PageHeading>Previous</PageHeading>
      <Squiggle />
      <SectionList heading="Work" items={previous.work} />
      <SectionList heading="Projects" items={previous.projects} />
      <section className="mb-12">
        <h2 className="mb-4 font-heading text-xl font-bold">Reading</h2>
        <Bookshelf books={books} />
      </section>
    </PageContainer>
  );
}
