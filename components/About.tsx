"use client";

import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-12"></div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">
                  Professional Focus
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Full-stack web development (React, Next.js, NestJS)</li>
                  <li>✓ Enterprise application development</li>
                  <li>✓ Agile/Scrum methodologies</li>
                  <li>✓ Code quality and maintainability</li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">
                  Key Achievements
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 90+ HRIS tasks delivered successfully</li>
                  <li>✓ 85% PR approval rate (1-2 rounds)</li>
                  <li>✓ Zero critical production bugs</li>
                  <li>✓ 80%+ first-time acceptance rate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
