'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/constants';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-[#94a3b8] text-lg">My academic background</p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#B3A369] to-[#003057] flex items-center justify-center">
              <AcademicCapIcon className="w-10 h-10 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#f8fafc]">
                {education.institution}
              </h3>
              <p className="text-[#6366f1] font-medium">{education.degree}</p>
              <p className="text-[#94a3b8]">Minor in {education.minor}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 rounded-lg bg-[#1a1a24]/50">
              <p className="text-3xl font-bold gradient-text">{education.gpa}</p>
              <p className="text-[#94a3b8] text-sm">GPA</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-[#1a1a24]/50">
              <p className="text-lg font-bold text-[#f8fafc]">
                {education.graduationDate}
              </p>
              <p className="text-[#94a3b8] text-sm">Expected Graduation</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-6 text-[#94a3b8]">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {education.location}
          </div>

          {/* Relevant Courses */}
          <div>
            <h4 className="text-sm font-semibold text-[#f8fafc] mb-3 text-center">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {education.courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-[#6366f1]/10 text-[#6366f1] rounded-full border border-[#6366f1]/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
