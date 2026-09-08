import React from 'react';
import { motion } from 'framer-motion';

import {
  ArrowUpRight,
  Terminal,
} from 'lucide-react';

import {
  SiYoutube,
  SiInstagram,
  SiTelegram,
  SiTiktok,
  SiVk,
  SiDailymotion,
  SiOdnoklassniki,
} from '@icons-pack/react-simple-icons';

interface TechnicalProject {
  number: string;
  platform: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  technologies: string[];
  capability: string;
}

const technicalProjects: TechnicalProject[] = [
  {
    number: '01',
    platform: 'YOUTUBE',
    title: 'YouTube Scraper',
    description:
      'Platform intelligence tool designed to collect publicly available video and channel information for content monitoring and investigation workflows.',
    icon: <SiYoutube size={38} color="#FF0000" />,
    accent: '#FF0000',
    technologies: ['Python', 'Scraping', 'Metadata', 'Automation'],
    capability: 'VIDEO INTELLIGENCE',
  },
  {
    number: '02',
    platform: 'INSTAGRAM',
    title: 'Instagram Scraper',
    description:
      'Data collection tool focused on publicly available Instagram information to support OSINT, content discovery and social media investigation workflows.',
    icon: <SiInstagram size={38} color="#E1306C" />,
    accent: '#E1306C',
    technologies: ['Python', 'OSINT', 'Scraping', 'Data Extraction'],
    capability: 'SOCIAL INTELLIGENCE',
  },
  {
    number: '03',
    platform: 'TELEGRAM',
    title: 'Telegram Scraper',
    description:
      'Platform-focused collection tool for extracting publicly available channel and post information to support monitoring and digital investigation.',
    icon: <SiTelegram size={38} color="#229ED9" />,
    accent: '#229ED9',
    technologies: ['Python', 'Telegram', 'API', 'Automation'],
    capability: 'CHANNEL INTELLIGENCE',
  },
  {
    number: '04',
    platform: 'TIKTOK',
    title: 'TikTok Scraper',
    description:
      'Automated data collection workflow for publicly available TikTok content and profile information used in platform monitoring and investigation.',
    icon: <SiTiktok size={38} color="#FFFFFF" />,
    accent: '#FFFFFF',
    technologies: ['Python', 'Scraping', 'Automation', 'Data'],
    capability: 'SHORT-FORM INTELLIGENCE',
  },
  {
    number: '05',
    platform: 'VKVIDEO',
    title: 'VKVideo Scraper',
    description:
      'Video intelligence tool focused on collecting publicly available VKVideo information for content discovery, monitoring and source analysis.',
    icon: <SiVk size={38} color="#4C75A3" />,
    accent: '#4C75A3',
    technologies: ['Python', 'Web Scraping', 'Video Data', 'Automation'],
    capability: 'VIDEO DISCOVERY',
  },
  {
    number: '06',
    platform: 'DAILYMOTION',
    title: 'Dailymotion Scraper',
    description:
      'Platform-specific scraper designed to collect publicly available video information and support structured content discovery and monitoring.',
    icon: <SiDailymotion size={38} color="#0066FF" />,
    accent: '#0066FF',
    technologies: ['Python', 'Scraping', 'Metadata', 'Automation'],
    capability: 'VIDEO MONITORING',
  },
  {
    number: '07',
    platform: 'OK.RU',
    title: 'OK.ru Scraper',
    description:
      'Social and video intelligence tool for collecting publicly available information from OK.ru to support content monitoring and investigation workflows.',
    icon: <SiOdnoklassniki size={38} color="#EE8208" />,
    accent: '#EE8208',
    technologies: ['Python', 'OSINT', 'Scraping', 'Data Collection'],
    capability: 'PLATFORM INTELLIGENCE',
  },
];

export const TechnicalProjects: React.FC = () => {
  return (
    <section
      id="technical-projects"
      className="relative w-full bg-black text-[#E8DFD8] font-sans overflow-hidden py-28 px-6 sm:px-12 lg:px-20"
    >
      {/* Ambient Background */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECHNICAL PROJECTS
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              PLATFORM
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              INTELLIGENCE.
            </span>
          </h2>

          <div className="max-w-md mt-6 lg:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={15} className="text-[#D4AF37]" />

              <span
                className="text-[9px] tracking-[0.28em] uppercase text-[#8C6D4F]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                INVESTIGATION TOOLKIT
              </span>
            </div>

            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Technical tools built to automate platform data collection,
              content discovery and digital investigation workflows.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {technicalProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >

              {/* Card */}
              <div className="relative h-full min-h-[430px] rounded-2xl border border-[#8C6D4F]/35 bg-[#0B0908] overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/70 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]">

                {/* Accent Glow */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[70px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: project.accent }}
                />

                {/* Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                <div className="relative p-7 sm:p-8 flex flex-col h-full">

                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-8">

                    <span
                      className="text-[10px] font-mono tracking-[0.18em] text-[#D4AF37]"
                    >
                      {project.number} //
                    </span>

                    <span
                      className="text-[8px] tracking-[0.22em] uppercase text-[#6F6258]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.capability}
                    </span>

                  </div>

                  {/* Platform Icon */}
                  <div className="relative mb-7">

                    <div
                      className="w-[74px] h-[74px] rounded-xl border flex items-center justify-center bg-[#11100E] transition-all duration-500 group-hover:scale-105"
                      style={{
                        borderColor: `${project.accent}40`,
                        color: project.accent,
                      }}
                    >
                      {project.icon}
                    </div>

                    {/* Icon Glow */}
                    <div
                      className="absolute inset-0 w-[74px] h-[74px] rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: project.accent }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl sm:text-4xl text-white uppercase leading-[0.9] mb-4 group-hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[12px] text-[#9E9186] leading-[1.8] font-light mb-7"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-[#8C6D4F]/20">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-2.5 py-1 rounded-sm border border-[#8C6D4F]/30 bg-[#12100D] text-[8px] tracking-[0.13em] uppercase text-[#BDB0A4]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* Bottom Action */}
                  <div className="flex items-center justify-between mt-6">

                    <span
                      className="text-[9px] tracking-[0.22em] uppercase text-[#D4AF37]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      PLATFORM TOOL
                    </span>

                    <div className="flex items-center gap-2 text-[#D4AF37] group-hover:text-[#F7E7C4] transition-colors">

                      <span
                        className="text-[9px] tracking-[0.18em] uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        VIEW PROJECT
                      </span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />

                    </div>

                  </div>

                </div>
              </div>
            </motion.article>
          ))}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 pt-8 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <p
            className="text-[9px] tracking-[0.22em] uppercase text-[#6F6258]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            AUTOMATION • DATA COLLECTION • PLATFORM INTELLIGENCE
          </p>

          <p
            className="text-[9px] tracking-[0.18em] uppercase text-[#8C6D4F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BUILT FOR INVESTIGATION WORKFLOWS
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnicalProjects;