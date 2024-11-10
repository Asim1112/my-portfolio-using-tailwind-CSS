"use client";

import { useEffect } from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 800,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,

    });
    AOS.refresh()

  }, []);

  
  return (
  <main>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <About />
  </main>
  )
}


