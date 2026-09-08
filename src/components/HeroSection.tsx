import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED PROFILE IMAGE LAYER ================= */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">

  {/* Profile Image */}
<div className="absolute inset-0 flex items-center justify-end">
  <img
    src={`${import.meta.env.BASE_URL}images/Profile.png`}
    alt="Professional portrait"
    className="h-[92vh] w-auto max-w-none object-contain origin-right translate-y-8 md:translate-x-0"
  />
</div>

  {/* Overall Cinematic Darkening */}
  <div className="absolute inset-0 bg-black/20 pointer-events-none" />

  {/* Strong Left Blend - separates image from text */}
  <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />

  {/* Right-side dark gradient - improves quote visibility */}
  <div className="absolute inset-y-0 right-0 w-[48%] bg-gradient-to-l from-black/75 via-black/35 to-transparent pointer-events-none" />

  {/* Bottom cinematic shadow */}
  <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />


</div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            VISHAL RAI.
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I BUILD */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
  I PROTECT
</span>

<span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
  DIGITAL
</span>

<span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
  CONTENT
</span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
              ANTI-PIRACY SPECIALIST <span className="text-[#8C6D4F] mx-1">•</span> OSINT <span className="text-[#8C6D4F] mx-1">•</span> CONTENT PROTECTION
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
  I identify, investigate and help protect digital content from online piracy.
  <br />
  Combining OSINT, monitoring and digital intelligence to support content protection.
</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
<motion.a
  href={`${import.meta.env.BASE_URL}Vishal_Rai_CV.pdf`}
  download="Vishal_Rai_Resume.pdf"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  whileHover={{ scale: 1.02 }}
  className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
>
  <span>DOWNLOAD RESUME</span>

  <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
    ↓
  </span>
</motion.a>
            </motion.div>
          </motion.div>

         {/* RIGHT: Bottom Chest-Level Quote */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.8,
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1]
  }}
  className="hidden lg:flex absolute right-8 xl:right-[30px] bottom-[5px] xl:bottom-[10px] z-30 pointer-events-auto select-none"
>
  <div className="relative flex items-center gap-7 px-6 py-3.5 min-w-[480px] bg-black/70 backdrop-blur-md border border-[#D4AF37]/20 shadow-[0_15px_50px_rgba(0,0,0,0.6)]">

    {/* Gold Left Accent */}
    <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />

    {/* Quote */}
    <div className="flex flex-col justify-center">

      <span className="text-lg text-[#D4AF37] leading-none font-serif mb-0.5">
        “
      </span>

      <div
        className="text-[8.5px] font-medium tracking-[0.20em] uppercase text-[#F1E7D8] leading-relaxed whitespace-nowrap"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <p>INTELLIGENCE DRIVES ACTION.</p>
        <p>PROTECTION IS THE GOAL.</p>
      </div>

    </div>

    {/* Divider */}
    <div className="h-9 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/60 to-transparent" />

    {/* Signature */}
    <div className="flex flex-col justify-center min-w-[125px]">

      <div
        className="text-[1.9rem] text-[#D8AB64] font-normal leading-none"
        style={{
          fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
          letterSpacing: '0.04em',
        }}
      >
        Vishal
      </div>

      <div
        className="mt-1.5 text-[6.5px] tracking-[0.16em] uppercase text-[#AFA092] whitespace-nowrap"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Anti-Piracy & Digital Intelligence
      </div>

    </div>

  </div>
</motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;