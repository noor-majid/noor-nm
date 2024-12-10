import Link from "next/link";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center row-start-2">
        <div>Under construction! -Noor</div>
        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
