import BookSpine from "./BookSpine";

export default function Bookshelf({ books }) {
  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex w-max items-end gap-1 border-b-8 border-foreground/30 px-2 pb-0">
        {books.map((book) => (
          <BookSpine key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
