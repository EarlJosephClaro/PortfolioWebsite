import { education, languages } from "@/data/resume";
import { FaGraduationCap, FaMapMarkerAlt, FaLanguage } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="bg-[#F4F1EC] py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <SectionHeading title="Education & Languages" />

          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <div>
              <h3 className="mb-6 flex items-center gap-3 font-sans text-lg font-semibold text-ink">
                <FaGraduationCap className="text-terracotta" aria-hidden />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={`${edu.degree}-${edu.institution}`}
                    className="rounded-xl border border-hairline bg-surface p-6"
                  >
                    <h4 className="font-sans text-base font-semibold text-ink">{edu.degree}</h4>
                    <p className="mt-1 font-medium text-terracotta">{edu.institution}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-stone">
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt aria-hidden />
                        {edu.location}
                      </span>
                      <span>Graduated {edu.graduation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="mb-6 flex items-center gap-3 font-sans text-lg font-semibold text-ink">
                <FaLanguage className="text-terracotta" aria-hidden />
                Languages
              </h3>
              <div className="rounded-xl border border-hairline bg-surface p-6">
                <ul className="space-y-4">
                  {languages.map((lang, index) => (
                    <li
                      key={lang.name}
                      className={`flex items-center justify-between ${
                        index < languages.length - 1 ? "border-b border-hairline pb-4" : ""
                      }`}
                    >
                      <span className="font-sans font-medium text-ink">{lang.name}</span>
                      <span className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-graphite">
                        {lang.proficiency}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
