import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
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

const expertiseItems = [
  'OSINT & Digital Investigation',
  'Anti-Piracy Monitoring',
  'Content & Infringement Identification',
  'Domain & URL Analysis',
  'Mirror Link Tracking',
  'Social Media Investigation',
  'Piracy Source Analysis',
  'Reporting & Takedown Support',
];

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // ============================================================
  // MOTION VALUES
  // ============================================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // ============================================================
  // 3D CARD PHYSICS
  // ============================================================

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [16, -16]),
    {
      damping: 18,
      stiffness: 220,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-16, 16]),
    {
      damping: 18,
      stiffness: 220,
    }
  );

  // ============================================================
  // HOLOGRAPHIC SPOTLIGHT
  // ============================================================

  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(212,175,55,0.18), transparent 80%)`
  );

  // ============================================================
  // MOUSE INTERACTION
  // ============================================================

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >

      {/* ========================================================
          BACKGROUND GLOWS
      ======================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#D4AF37] rounded-full blur-[160px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F] rounded-full blur-[170px] pointer-events-none"
      />

      {/* ========================================================
          SUBTLE GRID / TECHNICAL BACKGROUND
      ======================================================== */}

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ========================================================
          MAIN CONTAINER
      ======================================================== */}

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* ======================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center space-x-4 mb-12"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            01 / ABOUT ME
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />

          <span
            className="hidden sm:block text-[8px] tracking-[0.25em] uppercase text-[#645A52]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            DIGITAL INTELLIGENCE
          </span>
        </motion.div>

        {/* ======================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          {/* ====================================================
              LEFT CONTENT
          ==================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px',
            }}
            className="lg:col-span-7 flex flex-col justify-center"
          >

            {/* ==================================================
                MAIN HEADLINE
            ================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="relative mb-8 select-none"
            >
              <div
                className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent"
              />

              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.88]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
                  I DON'T JUST MONITOR.
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">
                  I INVESTIGATE.
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
                  I PROTECT.
                </span>
              </h2>
            </motion.div>

            {/* ==================================================
                INTRODUCTION
            ================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-7 max-w-2xl"
            >
              <p
                className="text-sm sm:text-[15px] md:text-[16px] font-light text-[#C0B4A8] leading-[1.9] tracking-wide"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                I'm{' '}
                <span className="text-[#F3DBB3] font-medium">
                  Vishal
                </span>
                , an{' '}
                <span className="text-[#D4AF37]">
                  Anti-Piracy & Digital Intelligence
                </span>{' '}
                professional focused on protecting digital content
                and intellectual property across the online ecosystem.
              </p>
            </motion.div>

            {/* ==================================================
                WHAT I DO
            ================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-7 max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[1px] bg-[#D4AF37]" />

                <span
                  className="text-[9px] tracking-[0.28em] uppercase text-[#D4AF37]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  WHAT I DO
                </span>
              </div>

              <p
                className="text-xs sm:text-sm md:text-[14px] font-light text-[#9F9287] leading-[1.9] tracking-wide"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                My work combines{' '}
                <span className="text-[#E4D4BF]">
                  OSINT, digital investigation, content monitoring
                </span>{' '}
                and infringement analysis to identify unauthorized
                distribution, investigate infringement sources and
                support effective content protection operations.
              </p>
            </motion.div>

            {/* ==================================================
                INVESTIGATION APPROACH
            ================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-9 max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[1px] bg-[#8C6D4F]" />

                <span
                  className="text-[9px] tracking-[0.28em] uppercase text-[#A8988B]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  MY APPROACH
                </span>
              </div>

              <p
                className="text-xs sm:text-sm md:text-[14px] font-light text-[#8F8378] leading-[1.9] tracking-wide"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                I work across{' '}
                <span className="text-[#E4D4BF]">
                  websites, search engines, social media,
                  video-sharing platforms and other digital ecosystems
                </span>{' '}
                to discover infringing content, trace sources,
                identify patterns and monitor the movement of
                unauthorized content.
              </p>

              <p
                className="text-xs sm:text-sm md:text-[14px] font-light text-[#8F8378] leading-[1.9] tracking-wide mt-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                From initial discovery and verification to evidence
                collection, reporting and takedown coordination, I
                approach content protection as an{' '}
                <span className="text-[#D4AF37]">
                  intelligence-driven operation
                </span>{' '}
                rather than simple monitoring.
              </p>
            </motion.div>

            {/* ==================================================
                EXPERTISE
            ================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="border-t border-[#8C6D4F]/25 pt-7"
            >

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-[#D4AF37]" />

                  <span
                    className="text-[9px] tracking-[0.28em] uppercase text-[#D4AF37]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    AREAS OF EXPERTISE
                  </span>
                </div>

                <span
                  className="text-[8px] tracking-[0.2em] uppercase text-[#514941]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  08 FOCUS AREAS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {expertiseItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                    }}
                    className="group flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37] group-hover:scale-150 transition-transform duration-300" />

                    <span
                      className="text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#968A80] group-hover:text-[#E4D4BF] transition-colors duration-300"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ==================================================
                CLOSING STATEMENT
            ================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="mt-8 relative pl-5 border-l border-[#D4AF37]/40"
            >
              <p
                className="text-[11px] sm:text-xs italic text-[#8E8176] leading-[1.8] tracking-wide max-w-xl"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                The goal isn't simply to find a pirated link.
                It's to understand the{' '}
                <span className="text-[#D4AF37] not-italic">
                  source, network, distribution pattern and impact
                </span>{' '}
                behind that infringement — so the right action can
                be taken faster and more effectively.
              </p>
            </motion.div>

          </motion.div>

          {/* ====================================================
              RIGHT PORTRAIT
          ==================================================== */}

          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px] lg:sticky lg:top-24">

            {/* ==================================================
                AMBIENT GOLD GLOW
            ================================================== */}

            <motion.div
              animate={{
                scale: isCardHovered ? 1.15 : 1,
                opacity: isCardHovered ? 0.35 : 0.15,
                rotate: isCardHovered ? 180 : 0,
              }}
              transition={{
                duration: 3,
                ease: 'easeOut',
              }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#D4AF37_0%,#8C6D4F_30%,transparent_60%,#D4AF37_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* ==================================================
                FLOATING PARTICLES
            ================================================== */}

            {isCardHovered && (
              <>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    x: -20,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -50,
                    x: -30,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="absolute top-1/4 -left-6 w-1.5 h-1.5 bg-[#F3DBB3] rounded-full blur-[1px] shadow-[0_0_8px_#D4AF37] pointer-events-none z-30"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    x: 20,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -60,
                    x: 40,
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 0.3,
                  }}
                  className="absolute bottom-1/3 -right-6 w-2 h-2 bg-[#D4AF37] rounded-full blur-[1px] shadow-[0_0_10px_#D4AF37] pointer-events-none z-30"
                />
              </>
            )}

            {/* ==================================================
                3D HOLOGRAPHIC CARD
            ================================================== */}

            <motion.div
              ref={cardRef}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-3.5 border border-[#8C6D4F]/40 rounded-sm bg-[#120F0C]/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] cursor-pointer group transition-colors duration-500 hover:border-[#D4AF37]/80"
            >

              {/* =================================================
                  LASER BORDER
              ================================================= */}

              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div
                  animate={{
                    x: isCardHovered
                      ? ['-100%', '200%']
                      : '-100%',
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent skew-x-12"
                />
              </div>

              {/* =================================================
                  CORNER BRACKETS
              ================================================= */}

              <div className="pointer-events-none">

                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />

                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />

                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />

                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />

              </div>

              {/* =================================================
                  PORTRAIT
              ================================================= */}

              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-black rounded-sm">

                <img
                  src={aboutImg}
                  alt="Vishal - Anti-Piracy & Digital Intelligence"
                  className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.06] saturate-[1.02] group-hover:brightness-105 group-hover:contrast-[1.12] transition-all duration-700 ease-out"
                />

                {/* =================================================
                    HOLOGRAPHIC SPOTLIGHT
                ================================================= */}

                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* =================================================
                    CINEMATIC SHADOW
                ================================================= */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* =================================================
                    PORTRAIT LABEL
                ================================================= */}

                <div className="absolute top-4 left-4 z-20">
                  <div
                    className="px-3 py-1.5 border border-[#D4AF37]/30 bg-black/40 backdrop-blur-sm"
                  >
                    <span
                      className="text-[7px] tracking-[0.22em] uppercase text-[#D4AF37]"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      DIGITAL INTELLIGENCE
                    </span>
                  </div>
                </div>

                {/* =================================================
                    IMAGE SIGNATURE
                ================================================= */}

                <div className="absolute bottom-4 right-4 z-20 select-none">
                  <span
                    className="text-3xl text-[#F2D8A7] drop-shadow-[0_0_12px_rgba(242,216,167,0.5)] transition-colors duration-300 group-hover:text-white"
                    style={{
                      fontFamily: "'Herr Von Muellerhoff', cursive",
                    }}
                  >
                    Vishal
                  </span>
                </div>

              </div>

              {/* =================================================
                  CARD FOOTER
              ================================================= */}

              <div className="flex items-center justify-between pt-3 px-1">

                <span
                  className="text-[7px] tracking-[0.22em] uppercase text-[#71655B]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  ANTI-PIRACY
                </span>

                <span
                  className="text-[7px] tracking-[0.22em] uppercase text-[#71655B]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  OSINT
                </span>

                <span
                  className="text-[7px] tracking-[0.22em] uppercase text-[#D4AF37]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  IP PROTECTION
                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;