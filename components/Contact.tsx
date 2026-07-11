import { personalInfo } from "@/data/resume";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

const channels = [
  { icon: FaEnvelope, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, external: false },
  { icon: FaPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, external: false },
  { icon: FaGithub, label: "GitHub", value: "EarlJosephClaro", href: personalInfo.github, external: true },
  { icon: FaLinkedin, label: "LinkedIn", value: "Earl Joseph Claro", href: personalInfo.linkedin, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-canvas py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <SectionHeading title="Get in Touch" />

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-graphite text-pretty">
            I&apos;m always open to discussing new opportunities, interesting projects, or just
            talking web development. Reach out through any of the channels below.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 rounded-xl border border-hairline bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-terracotta hover:shadow-lift"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-canvas text-xl text-terracotta">
                  <Icon aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-sans font-semibold text-ink">{label}</span>
                  <span className="block truncate text-sm text-stone">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-stone">
            <FaMapMarkerAlt className="text-terracotta" aria-hidden />
            <span>
              Based in {personalInfo.location}, originally from {personalInfo.hometown}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
