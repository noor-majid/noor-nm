import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import SectionList from "@/components/SectionList";
import Bookshelf from "@/components/Bookshelf";
import { previous, books } from "@/lib/data";

export default function PreviousSection() {
  return (
    <section id="previous" className="scroll-mt-20">
      <PageContainer>
        <PageHeading>Previous</PageHeading>
        <SectionList heading="Work" items={previous.work} />
        <SectionList heading="Projects" items={previous.projects} />
        <div className="mb-12">
          <h2 className="mb-4 font-heading text-xl font-bold">Reading</h2>
          <Bookshelf books={books} />
        </div>
      </PageContainer>
    </section>
  );
}
