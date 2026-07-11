import { skills } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  { title: "Frontend", skills: skills.frontend },
  { title: "Backend", skills: skills.backend },
  { title: "Databases", skills: skills.databases },
  { title: "AI & AIDD", skills: skills.aiTools },
  { title: "Deployment", skills: skills.deployment },
  { title: "Tools", skills: skills.tools },
  { title: "Methodologies", skills: skills.methodologies },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-canvas py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <SectionHeading title="Technical Skills" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-hairline bg-surface p-6"
              >
                <h3 className="mb-4 font-sans text-base font-semibold text-ink">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-hairline bg-canvas px-3 py-1 font-mono text-xs text-graphite"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
