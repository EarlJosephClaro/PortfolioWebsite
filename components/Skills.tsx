"use client";

import { skills } from "@/data/resume";

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: skills.frontend, color: "bg-blue-100 text-blue-700" },
    { title: "Backend", skills: skills.backend, color: "bg-green-100 text-green-700" },
    { title: "Databases", skills: skills.databases, color: "bg-purple-100 text-purple-700" },
    { title: "AI Tools", skills: skills.aiTools, color: "bg-cyan-100 text-cyan-700" },
    { title: "Deployment", skills: skills.deployment, color: "bg-orange-100 text-orange-700" },
    { title: "Tools", skills: skills.tools, color: "bg-pink-100 text-pink-700" },
    { title: "Methodologies", skills: skills.methodologies, color: "bg-indigo-100 text-indigo-700" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
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
