// src/components/ContactSection.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, UserRound } from 'lucide-react';
import {
  SiWhatsapp,
  SiInstagram,
} from '@icons-pack/react-simple-icons';

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between">

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
                08 / CONTACT
              </span>

              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2
                className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  LET'S
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  CONNECT.
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              If you are looking to discuss anti-piracy operations, digital
              investigations, content protection, OSINT or a professional
              collaboration, feel free to reach out directly.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-xs sm:text-[13px] font-light text-[#8C6D4F] leading-relaxed max-w-md mt-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Direct communication is preferred for professional inquiries,
              project discussions and collaboration opportunities.
            </motion.p>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
            >

              {/* Top Gold Horizon Edge */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

              {/* Corner Crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

              {/* Contact Header */}
              <div className="mb-8">
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-3">
                  // DIRECT COMMUNICATION
                </span>

                <h3
                  className="text-3xl sm:text-4xl text-white uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  CONTACT DETAILS
                </h3>
              </div>

              {/* NAME */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative mb-5"
              >
                <div className="flex items-center gap-5 p-5 bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37]/70 transition-all duration-300">

                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                    <UserRound size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <span className="block text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                      NAME
                    </span>

                    <span
                      className="text-base sm:text-lg text-[#F1E7D8]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Vishal Rai
                    </span>
                  </div>

                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.a
                href="mailto:gunjanrai9598@gmail.com"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative flex items-center gap-5 p-5 mb-5 bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37]/70 transition-all duration-300"
              >

                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                  <Mail size={21} strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <span className="block text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                    EMAIL
                  </span>

                  <span
                    className="block text-sm sm:text-base text-[#F1E7D8] break-all group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    gunjanrai9598@gmail.com
                  </span>
                </div>

                <span className="ml-auto text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                  ↗
                </span>

              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                href="https://wa.me/919598615012"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative flex items-center gap-5 p-5 mb-5 bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37]/70 transition-all duration-300"
              >

                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <SiWhatsapp size={24} color="#25D366" />
                </div>

                <div>
                  <span className="block text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                    WHATSAPP
                  </span>

                  <span
                    className="block text-sm sm:text-base text-[#F1E7D8] group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    +91 9598615012
                  </span>
                </div>

                <span className="ml-auto text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                  ↗
                </span>

              </motion.a>

              {/* SOCIAL PROFILES */}
              <div className="mt-8">

                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-4">
                  // PROFESSIONAL PROFILES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* LINKEDIN */}
                  <motion.a
                    href="https://www.linkedin.com/in/vishalrai-digitalprotection/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group flex items-center gap-4 p-4 bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#0A66C2]/70 transition-all duration-300"
                  >

                    <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-[#0A66C2]/30 group-hover:border-[#0A66C2] transition-colors">
                      <div
  className="text-[#0A66C2] font-bold text-xl"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
>
  in
</div>
                    </div>

                    <div>
                      <span className="block text-[8px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                        LINKEDIN
                      </span>

                      <span
                        className="text-sm text-[#F1E7D8] group-hover:text-[#0A66C2] transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Professional Profile
                      </span>
                    </div>

                    <span className="ml-auto text-[#8C6D4F] group-hover:text-[#0A66C2] transition-colors">
                      ↗
                    </span>

                  </motion.a>

                  {/* INSTAGRAM */}
                  <motion.a
                    href="https://www.instagram.com/vishalrai6555"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="group flex items-center gap-4 p-4 bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#E1306C]/70 transition-all duration-300"
                  >

                    <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-[#E1306C]/30 group-hover:border-[#E1306C] transition-colors">
                      <SiInstagram size={22} color="#E1306C" />
                    </div>

                    <div>
                      <span className="block text-[8px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                        INSTAGRAM
                      </span>

                      <span
                        className="text-sm text-[#F1E7D8] group-hover:text-[#E1306C] transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        @vishalrai6555
                      </span>
                    </div>

                    <span className="ml-auto text-[#8C6D4F] group-hover:text-[#E1306C] transition-colors">
                      ↗
                    </span>

                  </motion.a>

                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 pt-6 border-t border-[#8C6D4F]/15">
                <p
                  className="text-[10px] uppercase tracking-[0.18em] text-[#8C6D4F] leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Available for professional inquiries • Collaboration •
                  Content Protection • Digital Investigation
                </p>
              </div>

            </motion.div>

          </div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">

          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>

          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>

        </div>

      </div>
    </footer>
  );
};

export default ContactSection;