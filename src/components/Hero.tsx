'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(at_40%_20%,rgba(99,102,241,0.15)_0px,transparent_50%),radial-gradient(at_80%_0%,rgba(139,92,246,0.15)_0px,transparent_50%),radial-gradient(at_0%_50%,rgba(6,182,212,0.1)_0px,transparent_50%)]" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-[#94a3b8] text-lg mb-2">Hi, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-[#f8fafc] font-semibold mb-6">
              {personalInfo.title}
            </h2>
            <div className="text-[#94a3b8] text-lg mb-8 h-8">
              <TypeAnimation
                sequence={personalInfo.taglines.flatMap((tagline) => [
                  tagline,
                  2000,
                ])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('experience')}
                className="btn-glow px-8 py-3 text-white font-semibold rounded-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-[#6366f1]/50 text-[#f8fafc] font-semibold rounded-lg hover:border-[#6366f1] hover:bg-[#6366f1]/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] blur-2xl opacity-30 animate-pulse" />
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#6366f1]/30 hover:border-[#6366f1]/60 transition-colors duration-300">
                <Image
                  src="/images/profile_picture.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#6366f1]/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
