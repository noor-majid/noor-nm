export default function PageHeading({ children }) {
  return (
    <h1 className="mb-10 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
      {children}
    </h1>
  );
}
