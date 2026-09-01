import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import WritingListItem from "@/components/WritingListItem";
import { writingPieces } from "@/lib/data";

export default function Writing() {
  return (
    <PageContainer>
      <PageHeading>Writing</PageHeading>
      <ul className="space-y-4">
        {writingPieces.map((piece) => (
          <WritingListItem key={piece.id} piece={piece} />
        ))}
      </ul>
    </PageContainer>
  );
}
