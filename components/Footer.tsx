import { personalInfo } from "@/data/resume";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-canvas">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-xl font-medium">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-stone">
              {personalInfo.title} · {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-5 text-xl">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-stone transition-colors duration-200 hover:text-terracotta"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-stone transition-colors duration-200 hover:text-terracotta"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-stone transition-colors duration-200 hover:text-terracotta"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 font-mono text-xs text-stone">
          © {year} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
