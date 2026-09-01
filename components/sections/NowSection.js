import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import SectionList from "@/components/SectionList";
import BookStack from "@/components/BookStack";
import { now, nowReading } from "@/lib/data";

export default function NowSection() {
  return (
    <section id="now" className="scroll-mt-20">
      <PageContainer>
        <PageHeading>Now</PageHeading>
        <SectionList heading="Work" items={now.work} />
        <div className="mb-12">
          <h2 className="mb-4 font-heading text-xl font-bold">Reading</h2>
          <BookStack books={nowReading} />
        </div>
        <SectionList heading="Projects" items={now.projects} />
      </PageContainer>
    </section>
  );
}
