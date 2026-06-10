"use client";

import { education, languages } from "@/data/resume";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar, FaLanguage } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Education & Languages
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaGraduationCap className="mr-3 text-primary-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-600 text-sm mb-1">
                      <FaMapMarkerAlt className="mr-2 text-primary-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaCalendar className="mr-2 text-primary-500" />
                      <span>Graduated {edu.graduation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaLanguage className="mr-3 text-primary-600" />
                Languages
              </h3>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-b-0"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {lang.name}
                      </span>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
