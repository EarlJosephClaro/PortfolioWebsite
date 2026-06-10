"use client";

import { experience } from "@/data/resume";
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-12"></div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="border-l-4 border-primary-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.position}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <FaBriefcase className="mr-2" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="text-gray-600 space-y-1">
                      <div className="flex items-center">
                        <FaCalendar className="mr-2 text-primary-500" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-primary-500" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">▪</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
