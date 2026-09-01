export default function SectionList({ heading, items }) {
  return (
    <section className="mb-12">
      <h2 className="mb-3 font-heading text-xl font-bold">{heading}</h2>
      <ul className="space-y-2 font-serif text-foreground/90">
        {items.map((item, i) => {
          const text = typeof item === "string" ? item : item.text;
          const href = typeof item === "string" ? null : item.href;
          return (
            <li key={i} className="flex gap-2">
              <span className="text-foreground/40">–</span>
              {href ? (
                <a href={href} className="underline-offset-4 hover:underline">
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
