import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Work from '@/components/sections/Work';
import Experience from '@/components/sections/Experience';
import Awards from '@/components/sections/Awards';
import Contact from '@/components/sections/Contact';
import { siteConfig } from '@/lib/constants';
import { ProjectService } from '@/services/projectService';
import { ExperienceService, AwardService } from '@/services/experienceService';

export default async function Home() {
  // Fetch data in parallel on the server
  const [projects, experience, awards] = await Promise.all([
    ProjectService.getAllProjects(),
    ExperienceService.getAllExperience(),
    AwardService.getAllAwards(),
  ]);

  // Merge dynamic data with static configuration
  const config = {
    ...siteConfig,
    projects,
    experience,
    awards,
  };

  return (
    <main className="relative">
      <Navbar config={config} />
      <Hero config={config} />
      <About config={config} />
      <Work config={config} />
      <Experience config={config} />
      <Awards config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </main>
  );
}
