import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import NowSection from "@/components/sections/NowSection";
import PreviousSection from "@/components/sections/PreviousSection";
import WritingSection from "@/components/sections/WritingSection";

export default function Page() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <NowSection />
      <PreviousSection />
      <WritingSection />
    </main>
  );
}
