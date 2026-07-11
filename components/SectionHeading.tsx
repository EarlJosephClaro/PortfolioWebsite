export default function SectionHeading({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="font-serif text-3xl font-medium leading-tight text-ink text-balance md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-0.5 w-12 rounded-full bg-terracotta" aria-hidden />
    </div>
  );
}
