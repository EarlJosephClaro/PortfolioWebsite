import { personalInfo } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";

const focus = [
  "Full-stack web development (React, Next.js, NestJS)",
  "Enterprise application development",
  "Agile / Scrum methodologies",
  "Code quality and maintainability",
];

const achievements = [
  "90+ HRIS tasks delivered successfully",
  "85% PR approval rate (1–2 rounds)",
  "Zero critical production bugs",
  "80%+ first-time acceptance rate",
];

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-hairline bg-surface p-7">
      <h3 className="mb-4 font-sans text-lg font-semibold text-ink">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-graphite">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  // Break the long summary into two balanced paragraphs for readable rhythm.
  const splitAt = personalInfo.summary.indexOf("Skilled in building");
  const paragraphs =
    splitAt > 0
      ? [personalInfo.summary.slice(0, splitAt).trim(), personalInfo.summary.slice(splitAt).trim()]
      : [personalInfo.summary];

  return (
    <section id="about" className="bg-canvas py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <SectionHeading title="About" />

          <div className="mb-14 max-w-[62ch] space-y-4">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-[1.0625rem] leading-relaxed text-graphite text-pretty">
                {para}
              </p>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <List title="Professional Focus" items={focus} />
            <List title="Key Achievements" items={achievements} />
          </div>
        </div>
      </div>
    </section>
  );
}
