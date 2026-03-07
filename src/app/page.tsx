'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import LoadingScreen from '@/components/ui/LoadingScreen';
import CursorEffect from '@/components/ui/CursorEffect';
import BackToTop from '@/components/ui/BackToTop';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorEffect />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
