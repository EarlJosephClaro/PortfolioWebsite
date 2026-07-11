import { experience } from "@/data/resume";
import { FaBriefcase } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-canvas-sunk py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <SectionHeading title="Professional Experience" />

          <div className="space-y-6">
            {experience.map((job) => (
              <article
                key={`${job.position}-${job.period}`}
                className="rounded-xl border border-hairline bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift md:p-8"
              >
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-sans text-xl font-bold text-ink">{job.position}</h3>
                    <div className="mt-1.5 flex items-center gap-2 font-medium text-terracotta">
                      <FaBriefcase className="text-sm" aria-hidden />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <div className="shrink-0 font-mono text-xs uppercase tracking-wide text-stone md:text-right">
                    <div>{job.period}</div>
                    <div className="mt-1">{job.location}</div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 text-graphite">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden />
                      <span className="leading-snug">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
