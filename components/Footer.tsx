"use client";

import { personalInfo } from "@/data/resume";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center justify-center">
            Built with <FaHeart className="mx-2 text-red-500" /> using Next.js & Tailwind CSS
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">
            &quot;{personalInfo.mission}&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
