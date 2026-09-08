import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Work {
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  workflow: { label: string; value: string }[];
}

const works: Work[] = [
  {
    number: '01',
    title: 'Content Monitoring & Infringement Detection',
    category: 'ANTI-PIRACY / CONTENT MONITORING',
    description:
      'Structured monitoring workflows designed to discover unauthorized distribution of digital content across websites, search engines, social platforms and video-sharing ecosystems. Focused on identifying relevant infringements, validating findings and organizing actionable results.',
    capabilities: [
      'Content Monitoring',
      'Infringement Identification',
      'URL Discovery',
      'Content Verification',
      'Source Documentation',
    ],
    workflow: [
      { label: 'DISCOVERY', value: 'Online Ecosystem' },
      { label: 'VERIFICATION', value: 'Content Analysis' },
      { label: 'OUTPUT', value: 'Structured Findings' },
    ],
  },
  {
    number: '02',
    title: 'OSINT & Digital Investigation',
    category: 'OSINT / DIGITAL INTELLIGENCE',
    description:
      'Open-source investigation workflows used to collect, correlate and analyze publicly available information. The objective is to move beyond individual URLs and understand the people, sources, platforms and connections surrounding online infringement.',
    capabilities: [
      'OSINT',
      'Digital Investigation',
      'Source Correlation',
      'Information Discovery',
      'Pattern Analysis',
    ],
    workflow: [
      { label: 'COLLECT', value: 'Public Sources' },
      { label: 'CORRELATE', value: 'Digital Evidence' },
      { label: 'ANALYZE', value: 'Investigation Leads' },
    ],
  },
  {
    number: '03',
    title: 'Piracy Source & Mirror Tracking',
    category: 'SOURCE INTELLIGENCE / URL TRACKING',
    description:
      'Investigation of recurring piracy sources, duplicate URLs and mirror networks to understand how unauthorized content moves across the web. Tracking relationships between sources helps identify patterns that may be missed through single-URL monitoring.',
    capabilities: [
      'Mirror Link Tracking',
      'Source Analysis',
      'URL Correlation',
      'Distribution Mapping',
      'Recurring Source Identification',
    ],
    workflow: [
      { label: 'TRACE', value: 'Source Discovery' },
      { label: 'MAP', value: 'Mirror Relationships' },
      { label: 'MONITOR', value: 'Source Activity' },
    ],
  },
  {
    number: '04',
    title: 'Domain & URL Intelligence',
    category: 'DOMAIN ANALYSIS / INFRASTRUCTURE',
    description:
      'Domain and URL analysis focused on understanding the infrastructure behind potentially infringing websites. Investigation can include domain relationships, hosting information, technical indicators and connections between multiple online properties.',
    capabilities: [
      'Domain Analysis',
      'URL Intelligence',
      'Hosting Investigation',
      'Infrastructure Research',
      'Technical Correlation',
    ],
    workflow: [
      { label: 'IDENTIFY', value: 'Domain / URL' },
      { label: 'ANALYZE', value: 'Infrastructure' },
      { label: 'CORRELATE', value: 'Related Sources' },
    ],
  },
  {
    number: '05',
    title: 'Social Media Piracy Investigation',
    category: 'SOCIAL MEDIA / PLATFORM INTELLIGENCE',
    description:
      'Platform-focused investigation across social networks and video-sharing ecosystems to identify unauthorized content, suspicious profiles, reposting activity and distribution patterns. Combines monitoring with OSINT techniques to build a clearer picture of platform activity.',
    capabilities: [
      'YouTube Investigation',
      'Instagram Investigation',
      'Telegram Monitoring',
      'TikTok Investigation',
      'Social Source Analysis',
    ],
    workflow: [
      { label: 'MONITOR', value: 'Platform Activity' },
      { label: 'INVESTIGATE', value: 'Accounts / Sources' },
      { label: 'DOCUMENT', value: 'Relevant Evidence' },
    ],
  },
  {
    number: '06',
    title: 'Evidence, Reporting & Enforcement Support',
    category: 'EVIDENCE / REPORTING / TAKEDOWN SUPPORT',
    description:
      'Transforming investigation findings into structured, actionable intelligence. This includes documenting URLs and sources, organizing evidence, preparing reports and supporting content protection or enforcement workflows with clear and traceable information.',
    capabilities: [
      'Evidence Collection',
      'URL Documentation',
      'Investigation Reporting',
      'Infringement Records',
      'Takedown Support',
    ],
    workflow: [
      { label: 'DOCUMENT', value: 'Evidence' },
      { label: 'REPORT', value: 'Actionable Data' },
      { label: 'SUPPORT', value: 'Enforcement Workflow' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              INVESTIGATION
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              WORK.
            </span>
          </h2>

          <div className="max-w-md mt-5 md:mt-0">
            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Selected investigation workflows focused on discovering,
              analyzing and documenting online content infringement.
            </p>

            {/* Investigation Pipeline */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-5">
              {[
                'DISCOVER',
                'VERIFY',
                'TRACE',
                'DOCUMENT',
                'REPORT',
              ].map((step, index) => (
                <React.Fragment key={step}>
                  <span
                    className="text-[8px] tracking-[0.18em] text-[#D4AF37]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step}
                  </span>

                  {index < 4 && (
                    <span className="text-[#8C6D4F] text-[9px]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ScrollStack */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {works.map((work) => (
            <ScrollStackItem key={work.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Background Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {work.number}
                </span>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* LEFT */}
                  <div className="lg:col-span-7 flex flex-col justify-between">

                    <div>

                      {/* Number + Category */}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {work.number} //
                        </span>

                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {work.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-5 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {work.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {work.description}
                      </p>

                    </div>

                    {/* Capabilities */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {work.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">

                    {/* Investigation Workflow */}
                    <div className="space-y-3">

                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-3">
                        // INVESTIGATION WORKFLOW
                      </span>

                      {work.workflow.map((step, index) => (
                        <div
                          key={step.label}
                          className="p-4 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] transition-all duration-300 group-hover:border-[#8C6D4F]/50"
                        >
                          <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">
                              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#D4AF37]/40 text-[9px] font-mono text-[#D4AF37]">
                                0{index + 1}
                              </span>

                              <span
                                className="text-[10px] font-mono tracking-[0.15em] text-[#A8988B]"
                              >
                                {step.label}
                              </span>
                            </div>

                            <span className="text-[10px] font-mono font-medium text-[#F7E7C4] text-right">
                              {step.value}
                            </span>

                          </div>
                        </div>
                      ))}

                    </div>

                    {/* Bottom Intelligence Label */}
                    <div className="pt-5 border-t border-[#8C6D4F]/25">

                      <div className="flex items-center justify-between">

                        <span
                          className="text-[8px] tracking-[0.25em] uppercase text-[#6F6258]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          INTELLIGENCE-DRIVEN OPERATIONS
                        </span>

                        <span className="text-[#D4AF37] text-sm">
                          ↗
                        </span>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;