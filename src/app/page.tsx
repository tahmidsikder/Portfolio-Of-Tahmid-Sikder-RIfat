"use client";

import { useState } from "react";
import SmoothScroll from "@/components/portfolio/SmoothScroll";
import Preloader from "@/components/portfolio/Preloader";
import CustomCursor from "@/components/portfolio/CustomCursor";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Marquee from "@/components/portfolio/Marquee";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Certification from "@/components/portfolio/Certification";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" aria-hidden />
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      <SmoothScroll>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Hero />
            <About />
            <Marquee />
            <Projects />
            <Education />
            <Skills />
            <Certification />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
