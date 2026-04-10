import { useEffect } from "react";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { MetodoSection } from "./components/landing/MetodoSection";
import { ObiettiviSection } from "./components/landing/ObiettiviSection";
import { BridgeBefore } from "./components/landing/BridgeSection";
import { PerformanceMoodboard } from "./components/landing/PerformanceMoodboard";
import { PerformanceWebMockup } from "./components/landing/PerformanceWebMockup";
import { PerformanceLinkedInPost } from "./components/landing/PerformanceLinkedInPost";
import { PerformanceManifesto } from "./components/landing/PerformanceManifesto";
import { WellnessMoodboard } from "./components/landing/WellnessMoodboard";
import { WellnessWebMockup } from "./components/landing/WellnessWebMockup";
import { WellnessInstagramPost } from "./components/landing/WellnessInstagramPost";
import { WellnessManifesto } from "./components/landing/WellnessManifesto";
import { StrategiaSection } from "./components/landing/StrategiaSection";
import { PacchettiSection } from "./components/landing/PacchettiSection";
import { ROISection } from "./components/landing/ROISection";
import { BrochureSection } from "./components/landing/BrochureSection";
import { ConclusionsSection } from "./components/landing/ConclusionsSection";

// ─── Scroll-reveal animation via IntersectionObserver ───────────────────────
function useScrollReveal() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.65s ease, transform 0.65s ease;
      }
      .reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .reveal-left {
        opacity: 0;
        transform: translateX(-24px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .reveal-left.visible {
        opacity: 1;
        transform: translateX(0);
      }
      .reveal-right {
        opacity: 0;
        transform: translateX(24px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .reveal-right.visible {
        opacity: 1;
        transform: translateX(0);
      }
      .reveal-scale {
        opacity: 0;
        transform: scale(0.97);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .reveal-scale.visible {
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("visible");
          } else {
            el.classList.remove("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);
}

// ─── Wrap sections in reveal divs ───────────────────────────────────────────
function Reveal({ children, className = "reveal", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={className} data-delay={String(delay)}>
      {children}
    </div>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <div className="w-full" style={{ fontFamily: "'Inter', sans-serif", background: "#10232C", overflowX: "clip" }}>
      {/* Sticky navigation */}
      <Header />

      {/* 01 · Hero — no reveal (always visible) */}
      <HeroSection />

      {/* 01b · Metodo DeNani — Artigiani del Digitale */}
      <Reveal>
        <MetodoSection />
      </Reveal>

      {/* 02 · La Proposta — Obiettivi */}
      <Reveal>
        <ObiettiviSection />
      </Reveal>


            {/* 05 · Strategia Brand & Web + Step Operativi */}
      <Reveal>
        <StrategiaSection />
      </Reveal>

      {/* Bridge intro to moodboards */}
      <Reveal className="reveal-scale">
        <BridgeBefore />
      </Reveal>

      {/* 03 · MOODBOARD PERFORMANCE — no reveal (full viewport) */}
      <PerformanceMoodboard />

  {/* 03d · Performance — Brand Manifesto */}
  <PerformanceManifesto />

      {/* 03b · Performance — Mockup Sito Web */}
      <Reveal>
        <PerformanceWebMockup />
      </Reveal>

      {/* 03c · Performance — Mockup Post LinkedIn */}
      <Reveal>
        <PerformanceLinkedInPost />
      </Reveal>
      {/* 04 · MOODBOARD WELLNESS — no reveal */}
      <WellnessMoodboard />

  {/* 04d · Wellness — Brand Manifesto */}
  <WellnessManifesto />

      {/* 04b · Wellness — Mockup Sito Web */}
      <Reveal>
        <WellnessWebMockup />
      </Reveal>

      {/* 04c · Wellness — Mockup Post Instagram */}
      <Reveal>
        <WellnessInstagramPost />
      </Reveal>

      {/* 06 · Piani d'Investimento */}
      <Reveal>
        <PacchettiSection />
      </Reveal>

      {/* 07 · Prospetti ROI */}
      <Reveal>
        <ROISection />
      </Reveal>

      {/* 08 · Scarica Brochure */}
      <Reveal className="reveal-scale">
        <BrochureSection />
      </Reveal>

      {/* 09 · Conclusioni + Contatti + Footer */}
      <Reveal>
        <ConclusionsSection />
      </Reveal>
    </div>
  );
}
