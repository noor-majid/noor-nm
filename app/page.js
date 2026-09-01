import PostcardStack from "@/components/PostcardStack";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center px-6 py-32">
      <PostcardStack>
        <div className="max-w-md text-center">
          <h1 className="mb-4 font-script text-6xl sm:text-7xl">Noor Majid</h1>
          <p className="font-serif text-lg text-foreground/90">
            Software engineer, violinist, reader, aspiring crocheter, terrible
            golfer, lover of cats.
          </p>
        </div>
      </PostcardStack>
    </main>
  );
}
