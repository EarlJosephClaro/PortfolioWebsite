"use client";

import { personalInfo } from "@/data/resume";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            <div className="h-1 w-32 bg-primary-500 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-xl text-primary-600 font-semibold mb-4">
              @ {personalInfo.company}
            </p>
            <div className="flex items-center justify-center text-gray-600 mb-6">
              <FaMapMarkerAlt className="mr-2" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 italic">
            &quot;{personalInfo.mission}&quot;
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-3xl text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 font-semibold"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
