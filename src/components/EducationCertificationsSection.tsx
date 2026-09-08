// src/components/EducationCertificationsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface EducationItem {
  year: string;
  title: string;
  organization: string;
  type: string;
}

interface CertificationItem {
  title: string;
  organization: string;
  type: string;
}

const education: EducationItem[] = [
  {
    year: '2016',
    title: 'HIGH SCHOOL',
    organization: 'UP BOARD',
    type: 'SECONDARY EDUCATION',
  },
  {
    year: '2019',
    title: 'INTERMEDIATE',
    organization: 'UP BOARD',
    type: 'HIGHER SECONDARY',
  },
  {
    year: '2022',
    title: 'BACHELOR OF SCIENCE — B.Sc.',
    organization: 'VEER BAHADUR SINGH PURVANCHAL UNIVERSITY',
    type: 'GRADUATION',
  },
];

const certifications: CertificationItem[] = [
  {
    title: 'OSINT',
    organization: 'CYBERX',
    type: 'CERTIFICATION',
  },
  {
    title: 'ADCA',
    organization: 'FUTURE COMPUTER INSTITUTE',
    type: 'CERTIFICATION',
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const EducationCertificationsSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/[0.025] rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/[0.025] rounded-full blur-[150px] pointer-events-none" />

      {/* Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            07 / EDUCATION
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              EDUCATION
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              &amp; CERTIFICATIONS.
            </span>
          </h2>

          <div className="max-w-md mt-7 lg:mt-0">

            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-[1px] bg-[#D4AF37]" />

              <span
                className="text-[9px] tracking-[0.28em] uppercase text-[#8C6D4F]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                QUALIFICATIONS
              </span>
            </div>

            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Academic background and professional certifications supporting
              my work across digital intelligence, investigation and
              technology.
            </p>

          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT GRID
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ===================================================
              EDUCATION
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >

            {/* Education Heading */}
            <div className="flex items-center gap-4 mb-7">

              <span
                className="text-[10px] tracking-[0.32em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ACADEMIC BACKGROUND
              </span>

              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

            </div>

            {/* Education Timeline */}
            <div className="relative">

              {/* Timeline Background */}
              <div className="absolute left-[7px] top-3 bottom-3 w-[1px] bg-[#8C6D4F]/25" />

              {/* Gold Timeline */}
              <div className="absolute left-[7px] top-3 h-[35%] w-[1px] bg-gradient-to-b from-[#D4AF37] to-[#8C6D4F]/10" />

              <div className="space-y-6">

                {education.map((item, index) => (
                  <motion.article
                    key={`${item.year}-${item.title}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      margin: '-50px',
                    }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="relative pl-8 group"
                  >

                    {/* Timeline Node */}
                    <div className="absolute left-0 top-7 -translate-x-1/2 flex items-center justify-center">

                      <div className="absolute w-7 h-7 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/35 group-hover:scale-150 transition-all duration-700" />

                      <div className="w-3 h-3 rounded-full bg-[#100D0B] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-all duration-300" />

                    </div>

                    {/* Education Card */}
                    <div className="relative p-6 sm:p-7 rounded-sm border border-[#8C6D4F]/30 bg-[#0D0B0A]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-[#D4AF37]/70 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.09)]">

                      {/* Top Accent */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Corner Detail */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                        {/* Education Information */}
                        <div>

                          {/* Education Type */}
                          <span
                            className="text-[8px] tracking-[0.25em] uppercase text-[#D4AF37]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {item.type}
                          </span>

                          {/* Degree / Qualification */}
                          <h3
                            className="mt-2 text-2xl sm:text-3xl text-white uppercase leading-none group-hover:text-[#F7E7C4] transition-colors"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                          >
                            {item.title}
                          </h3>

                          {/* Institution */}
                          <p
                            className="mt-2 text-[10px] tracking-[0.16em] uppercase text-[#8C7B6D]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {item.organization}
                          </p>

                        </div>

                        {/* Year Badge */}
                        <div className="shrink-0">

                          <span
                            className="inline-block px-3 py-1.5 border border-[#8C6D4F]/35 bg-[#17130F] text-[9px] tracking-[0.2em] text-[#D4AF37]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {item.year}
                          </span>

                        </div>

                      </div>

                    </div>

                  </motion.article>
                ))}

              </div>
            </div>

          </motion.div>

          {/* ===================================================
              CERTIFICATIONS
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5"
          >

            {/* Certification Heading */}
            <div className="flex items-center gap-4 mb-7">

              <span
                className="text-[10px] tracking-[0.32em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CERTIFICATIONS
              </span>

              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

            </div>

            {/* Certification Cards */}
            <div className="space-y-6">

              {certifications.map((cert, index) => (
                <motion.article
                  key={`${cert.title}-${cert.organization}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: '-50px',
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="group relative"
                >

                  <div className="relative min-h-[210px] p-7 sm:p-8 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-[#D4AF37]/75 group-hover:-translate-y-1 group-hover:shadow-[0_20px_55px_rgba(212,175,55,0.12)]">

                    {/* Top Line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top Left Corner */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

                    {/* Bottom Right Corner */}
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

                    {/* Certification Header */}
                    <div className="flex items-center justify-between mb-8">

                      {/* Certificate Mark */}
                      <div className="w-11 h-11 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#17130F] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.12)] transition-all duration-500">

                        <span
                          className="text-sm text-[#D4AF37]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          ✓
                        </span>

                      </div>

                      {/* Badge */}
                      <span
                        className="text-[8px] tracking-[0.25em] uppercase text-[#6F6258]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        CERTIFIED
                      </span>

                    </div>

                    {/* Certification Title */}
                    <h3
                      className="text-4xl sm:text-5xl text-white uppercase leading-[0.85] group-hover:text-[#F7E7C4] transition-colors"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {cert.title}
                    </h3>

                    {/* Certification Organization */}
                    <p
                      className="mt-3 text-[10px] tracking-[0.2em] uppercase text-[#C99E5D]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {cert.organization}
                    </p>

                    {/* Certification Type */}
                    <div className="mt-7 pt-4 border-t border-[#8C6D4F]/20">

                      <span
                        className="text-[8px] tracking-[0.22em] uppercase text-[#6F6258]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {cert.type}
                      </span>

                    </div>

                  </div>

                </motion.article>
              ))}

            </div>

            {/* Continuous Learning Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-6 p-5 border border-[#8C6D4F]/20 bg-[#0B0908]/70"
            >

              <div className="flex items-center gap-3">

                <div className="w-6 h-[1px] bg-[#D4AF37]" />

                <span
                  className="text-[8px] tracking-[0.22em] uppercase text-[#8C7B6D]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  CONTINUOUS LEARNING
                </span>

              </div>

              <p
                className="mt-3 text-[11px] text-[#7F736A] leading-[1.7]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Building practical knowledge across OSINT, digital
                investigation, automation and content protection.
              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 pt-7 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >

          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#6F6258]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            EDUCATION • CERTIFICATION • DEVELOPMENT
          </p>

          <p
            className="text-[9px] tracking-[0.18em] uppercase text-[#8C6D4F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            KNOWLEDGE → APPLICATION
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default EducationCertificationsSection;