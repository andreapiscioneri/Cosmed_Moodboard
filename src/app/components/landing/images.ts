import testImage from "../../../assets/test.png";
import imageA from "../../../assets/a.jpg";
import imageB from "../../../assets/b.jpg";
import imageC from "../../../assets/c.jpg";
import imageD from "../../../assets/d.jpg";
import imageE from "../../../assets/e.jpg";
import performanceVittoria from "../../../assets/PERFORMANCE - DA SOSTITUIRE.jpg";
import wellnessHeroD2 from "../../../assets/d2.jpg";
import wellnessTileD1 from "../../../assets/d1.jpg";
import wellnessTileD3 from "../../../assets/d3.jpg";
import wellnessTileD4 from "../../../assets/d4.jpg";
import wellnessPostD5 from "../../../assets/d5.jpg";
import wellnessPostD6 from "../../../assets/d6.jpeg";

// All image URLs for the landing page
export const IMGS = {
  // Performance — 2 realistiche + 2 astratte
  vo2test:    testImage, // REALISTICA: test VO2/maschera
  physio:     "https://images.unsplash.com/photo-1709880754445-8ffbd7e6ab3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // REALISTICA: fisioterapia clinica
  dataflow:   "https://images.unsplash.com/photo-1762279388956-1c098163a2a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // ASTRATTA: data flow blu
  molecular:  performanceVittoria, // ASTRATTA: molecolare

  // Wellness — healthy lifestyle
  food:       "https://images.unsplash.com/photo-1535229398509-70179087ac75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // cibo sano colorato
  running:    "https://images.unsplash.com/photo-1508497740046-762dd5f711be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // running outdoor
  yoga:       "https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // yoga meditazione
  wellness:   "https://images.unsplash.com/photo-1611441085337-56f4d0ea0ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // spa wellness

  // Shared
  fluid:      "https://images.unsplash.com/photo-1770954098074-da95ccdf33e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  sand:       "https://images.unsplash.com/photo-1566598578758-d4f24d544c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  grid:       "https://images.unsplash.com/photo-1703600178903-aed2471a38d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

export const PERFORMANCE_SHOWCASE = {
  hero: testImage,
  tiles: [
    imageA,
    imageB,
    performanceVittoria,
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=85",
  ],
  post: [
    imageD,
    imageE,
  ],
};

export const WELLNESS_SHOWCASE = {
  hero: wellnessPostD6,
  tiles: [
    wellnessTileD1,
    wellnessTileD3,
    wellnessPostD5,
  ],
  post: [
    wellnessTileD4,
    wellnessHeroD2,
  ],
};

// ─── Bridged palette (no oro, no nero puro) ─────────────────────────────────
// Mediated between Performance Tech-Blue and Wellness Teal
export const P = {
  // Accent bridge
  accent:      "#1E7A8A",   // teal-blue bridge
  accentLight: "#4A9FAF",   // lighter teal-blue
  accentDim:   "rgba(30,122,138,0.10)",

  // Dark (replaces pure charcoal — warm teal-navy)
  dark:        "#1A2D36",
  darkMid:     "#213845",
  darkBorder:  "rgba(255,255,255,0.07)",

  // Light
  bg:          "#F0F4F2",   // slightly teal-tinted sand
  surface:     "#FFFFFF",
  surfaceAlt:  "#F5F8F6",
  border:      "#D6E2E6",
  borderMid:   "#B8CCCE",

  // Text (deep navy-teal)
  text:        "#1C2E3A",
  textSub:     "#5F7684",
  textMuted:   "#91A8B4",
  textInv:     "#EEF4F6",

  // Sub-brand specific (kept)
  perfBlue:    "#0B6FFF",
  wellTeal:    "#0E6B6B",
  wellGold:    "#B8922E",
};