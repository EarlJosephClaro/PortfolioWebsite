"use client";

import { personalInfo } from "@/data/resume";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-12"></div>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-4">
              I&apos;m always open to discussing new opportunities, interesting projects,
              or just having a chat about web development!
            </p>
            <p className="text-gray-600">
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <FaEnvelope className="text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-primary-100">{personalInfo.email}</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <FaPhone className="text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-green-100">{personalInfo.phone}</p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <FaGithub className="text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-1">GitHub</h3>
                  <p className="text-gray-300">EarlJosephClaro</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <FaLinkedin className="text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                  <p className="text-blue-200">Earl Joseph Claro</p>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center text-gray-600">
              <FaMapMarkerAlt className="mr-2 text-primary-500" />
              <span>
                Based in {personalInfo.location}, Originally from {personalInfo.hometown}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
