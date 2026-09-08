import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const technicalSkills = [
  {
    title: 'WEB & DOMAIN INTELLIGENCE',
    badge: 'TECHNICAL SKILL',
    items: [
      'Domain Analysis',
      'URL Analysis',
      'WHOIS',
      'DNS Records',
      'IP / ASN Investigation',
      'Hosting Infrastructure Analysis',
      'Mirror / Clone Domain Identification',
    ],
    description:
      'Technical analysis of domains, URLs and hosting infrastructure to support source investigation, verification and piracy tracking.',
    stat: 'INFRASTRUCTURE',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'AUTOMATION & DATA',
    badge: 'TECHNICAL SKILL',
    items: [
      'Python',
      'Web Scraping',
      'API Integration',
      'Metadata Extraction',
      'Data Processing',
      'Excel',
      'Automated Monitoring Workflows',
    ],
    description:
      'Automation and data-processing workflows used to collect, structure and analyze information across digital platforms.',
    stat: 'AUTOMATION',
    colSpan: 'lg:col-span-5',
  },
];

const discoveryMethods = [
  'Title Names',
  'Alternative Titles',
  'Episode Numbers',
  'Season / Episode Combinations',
  'Cast / Actor Names',
  'Character Names',
  'Release Terminology',
  'Language Variations',
  'Transliteration',
  'Common Piracy-Related Terms',
  'Domain-Specific Search Patterns',
  'Platform-Specific Search Queries',
];

const infrastructureIndicators = [
  'Domain Registration Information',
  'DNS Records',
  'IP Addresses',
  'ASN Information',
  'Hosting Providers',
  'Nameservers',
  'SSL / TLS Certificate Information',
  'Domain History',
  'Shared Infrastructure Indicators',
  'URL Patterns',
  'Redirect Relationships',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

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
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
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
            05 / TECH MATRIX
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Main Header */}
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              TECHNICAL
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              INTELLIGENCE.
            </span>
          </h2>

          <div className="max-w-md mt-7 lg:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-[1px] bg-[#D4AF37]" />

              <span
                className="text-[9px] tracking-[0.28em] uppercase text-[#8C6D4F]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                TECHNICAL CAPABILITIES
              </span>
            </div>

            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Technical capabilities and investigation methods used to
              discover, analyze and track digital content infringement.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            PART 01 — TECHNICAL SKILLS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] tracking-[0.32em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PART 01
            </span>

            <div className="h-[1px] w-10 bg-[#D4AF37]/50" />

            <span
              className="text-[10px] tracking-[0.28em] uppercase text-[#8C7B6D]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              TECHNICAL SKILLS
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {technicalSkills.map((block) => (
            <motion.article
              key={block.title}
              variants={cardVariants}
              className={`${block.colSpan} group relative`}
            >
              <div className="relative h-full min-h-[360px] p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/75 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(212,175,55,0.12)]">

                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner details */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

                {/* Card Header */}
                <div className="flex items-center justify-between mb-7">
                  <span
                    className="text-[9px] tracking-[0.28em] uppercase text-[#D4AF37]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {block.badge}
                  </span>

                  <span
                    className="px-2.5 py-1 border border-[#8C6D4F]/35 bg-[#17130F] text-[8px] tracking-[0.18em] uppercase text-[#8C7B6D]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {block.stat}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl sm:text-4xl text-white uppercase leading-[0.9] mb-5 group-hover:text-[#F7E7C4] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {block.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[12px] sm:text-[13px] text-[#9E9186] leading-[1.8] font-light mb-8 max-w-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {block.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-[#8C6D4F]/20">
                  {block.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-sm border border-[#8C6D4F]/30 bg-[#171310] text-[8.5px] sm:text-[9px] tracking-[0.12em] uppercase text-[#D5CBC0] group-hover:border-[#D4AF37]/45 group-hover:text-white transition-all duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* =========================================================
            PART 02 — INVESTIGATION METHODOLOGY
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 mb-10"
        >
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-[10px] tracking-[0.32em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PART 02
            </span>

            <div className="h-[1px] w-10 bg-[#D4AF37]/50" />

            <span
              className="text-[10px] tracking-[0.28em] uppercase text-[#8C7B6D]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              INVESTIGATION METHODOLOGY
            </span>
          </div>

          <p
            className="max-w-2xl text-xs sm:text-sm text-[#8F8177] leading-relaxed font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A structured approach to discovering potentially infringing
            content and analyzing publicly available technical indicators
            associated with digital sources.
          </p>
        </motion.div>

        {/* Methodology Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >

          {/* CONTENT DISCOVERY */}
          <motion.article
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative h-full p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#0D0B0A]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/75 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(212,175,55,0.12)]">

              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

              <div className="flex items-center justify-between mb-7">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37]">
                  01 //
                </span>

                <span
                  className="text-[8px] tracking-[0.22em] uppercase text-[#6F6258]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  DISCOVERY
                </span>
              </div>

              <h3
                className="text-4xl sm:text-5xl text-white uppercase leading-[0.9] mb-5 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                CONTENT
                <br />
                DISCOVERY
              </h3>

              <p
                className="text-[12px] text-[#9E9186] leading-[1.8] font-light mb-7"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Discovery can combine title variations, episode information,
                names, language variations and platform-specific search
                patterns to locate potentially infringing content.
              </p>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-[#8C6D4F]/20">
                {discoveryMethods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1.5 rounded-sm border border-[#8C6D4F]/30 bg-[#171310] text-[8.5px] tracking-[0.11em] uppercase text-[#C8B9AC] group-hover:border-[#D4AF37]/45 group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {method}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#D4AF37]/60" />

                <span
                  className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  DISCOVER → VERIFY
                </span>
              </div>
            </div>
          </motion.article>

          {/* INFRASTRUCTURE INTELLIGENCE */}
          <motion.article
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative h-full p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#0D0B0A]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/75 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(212,175,55,0.12)]">

              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

              <div className="flex items-center justify-between mb-7">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37]">
                  02 //
                </span>

                <span
                  className="text-[8px] tracking-[0.22em] uppercase text-[#6F6258]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SOURCE ANALYSIS
                </span>
              </div>

              <h3
                className="text-4xl sm:text-5xl text-white uppercase leading-[0.9] mb-5 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                INFRASTRUCTURE
                <br />
                INTELLIGENCE
              </h3>

              <p
                className="text-[12px] text-[#9E9186] leading-[1.8] font-light mb-7"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Publicly available technical indicators can help analyze
                digital sources and identify potential relationships between
                domains, services and infrastructure.
              </p>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-[#8C6D4F]/20">
                {infrastructureIndicators.map((indicator) => (
                  <span
                    key={indicator}
                    className="px-3 py-1.5 rounded-sm border border-[#8C6D4F]/30 bg-[#171310] text-[8.5px] tracking-[0.11em] uppercase text-[#C8B9AC] group-hover:border-[#D4AF37]/45 group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {indicator}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#D4AF37]/60" />

                <span
                  className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  ANALYZE → CORRELATE
                </span>
              </div>
            </div>
          </motion.article>

        </motion.div>

        {/* Bottom Methodology Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-14 pt-7 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#6F6258]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            DISCOVER • ANALYZE • VERIFY • DOCUMENT
          </p>

          <p
            className="text-[9px] tracking-[0.18em] uppercase text-[#8C6D4F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            PUBLIC-SOURCE INTELLIGENCE
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;