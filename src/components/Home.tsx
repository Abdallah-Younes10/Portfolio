import { useEffect, useState, lazy, Suspense } from "react";

import { Hero } from "./Hero/Hero";
import { About } from "./About";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";

const LightBG = lazy(() => import("./Hero/LightBG"));

export const Home = () => {
  const [showBG, setShowBG] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBG(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Background Layer */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        {showBG && (
          <Suspense fallback={null}>
            <LightBG
              speed={2.8}
              rayColor1="#EAB308"
              rayColor2="#96c8ff"
              intensity={2.1}
              spread={0.2}
              origin="top-right"
              tilt={40}
              saturation={1.95}
              blend={1}
              falloff={1}
              opacity={1}
            />
          </Suspense>
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center top-0 lg:-top-40 left-0">
        <Hero />

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};