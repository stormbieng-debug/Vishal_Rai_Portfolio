// src/App.tsx

import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechnicalProjects } from './components/TechnicalProjects';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationCertificationsSection } from './components/EducationCertificationsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">

      {/* 01 — Hero */}
      <HeroSection />

      {/* 02 — About */}
      <AboutSection />

      {/* 03 — Featured Work */}
      <ProjectsSection />

      {/* 04 — Technical Projects */}
      <TechnicalProjects />

      {/* 05 — Tech Matrix */}
      <SkillsSection />

      {/* 06 — Experience */}
      <ExperienceSection />

      {/* 07 — Education & Certifications */}
      <EducationCertificationsSection />

      {/* 08 — Contact */}
      <ContactSection />

    </div>
  );
}

export default App;