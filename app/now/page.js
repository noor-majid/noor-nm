import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import SectionList from "@/components/SectionList";
import { now } from "@/lib/data";

export default function Now() {
  return (
    <PageContainer>
      <PageHeading>Now</PageHeading>
      <SectionList heading="Work" items={now.work} />
      <SectionList heading="Reading" items={now.reading} />
      <SectionList heading="Projects" items={now.projects} />
    </PageContainer>
  );
}
