import { personalInfo } from "@/data/resume";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const metrics = [
  { num: "90", suffix: "+", label: "HRIS tasks delivered" },
  { num: "85", suffix: "%", label: "PR approval in 1–2 rounds" },
  { num: "0", suffix: "", label: "critical production bugs" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-canvas pb-24 pt-32"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          {/* Status line */}
          <p
            className="rise mb-7 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-stone"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-terracotta" aria-hidden />
            {personalInfo.title} at Sun&#8288;-&#8288;Asterisk
          </p>

          {/* Name */}
          <h1
            className="rise mb-6 font-serif font-medium leading-[1.05] tracking-tight text-ink text-balance"
            style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)", animationDelay: "80ms" }}
          >
            {personalInfo.name}
          </h1>

          {/* Terracotta rule */}
          <div
            className="rise mb-8 h-0.5 w-12 rounded-full bg-terracotta"
            style={{ animationDelay: "140ms" }}
            aria-hidden
          />

          {/* Mission, in the serif italic voice */}
          <p
            className="rise mb-6 max-w-2xl font-serif italic leading-snug text-graphite"
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)", animationDelay: "200ms" }}
          >
            &ldquo;{personalInfo.mission}&rdquo;
          </p>

          {/* Intro */}
          <p
            className="rise mb-10 max-w-2xl text-lg leading-relaxed text-graphite text-pretty"
            style={{ animationDelay: "260ms" }}
          >
            I build reliable full-stack features across React, Next.js, and NestJS —
            clean, maintainable, and shipped with a delivery record to back it up.
          </p>

          {/* Proof metrics */}
          <dl
            className="rise mb-12 flex flex-wrap gap-x-10 gap-y-6"
            style={{ animationDelay: "320ms" }}
          >
            {metrics.map((m) => (
              <div key={m.label} className="min-w-[7rem]">
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-mono text-4xl font-semibold leading-none text-ink">
                  {m.num}
                  {m.suffix && <span className="text-ochre">{m.suffix}</span>}
                </dd>
                <p className="mt-2 text-sm leading-snug text-stone">{m.label}</p>
              </div>
            ))}
          </dl>

          {/* CTAs */}
          <div
            className="rise mb-11 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "380ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-terracotta-deep px-7 py-3.5 font-semibold text-canvas transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-md border border-hairline px-7 py-3.5 font-semibold text-ink transition-colors duration-200 hover:border-terracotta hover:text-terracotta"
            >
              View my experience
            </a>
          </div>

          {/* Location + socials */}
          <div
            className="rise flex flex-wrap items-center gap-x-6 gap-y-3 text-stone"
            style={{ animationDelay: "440ms" }}
          >
            <span className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-terracotta" aria-hidden />
              {personalInfo.location}
            </span>
            <span className="hidden h-4 w-px bg-hairline sm:inline-block" aria-hidden />
            <div className="flex items-center gap-5 text-xl">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors duration-200 hover:text-terracotta"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-200 hover:text-terracotta"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="transition-colors duration-200 hover:text-terracotta"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
