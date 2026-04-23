import React from "react";
import { useVintageCursor } from "./hooks/useVintageCursor";
import { Masthead } from "./components/layout/Masthead";
import { BreakingNews } from "./components/layout/BreakingNews";
import { CursorPicker } from "./components/layout/CursorPicker";
import { ProfessionalExperienceSection } from "./components/sections/ProfessionalExperienceSection";
import { ProgrammingSkillsSection } from "./components/sections/ProgrammingSkillsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { OthersSection } from "./components/sections/OthersSection";

export default function App() {
  useVintageCursor();

  const toggleQuickLinkInvert = (e) => {
    const scrap = e.currentTarget?.closest?.(".paper-scrap");
    if (!scrap) return;
    scrap.classList.add("ql-invert");
    window.setTimeout(() => {
      scrap.classList.remove("ql-invert");
    }, 180);
  };

  // For mobile: trigger immediately on press, before navigation happens.
  const flashQuickLinkInvert = (e) => {
    const scrap = e.currentTarget?.closest?.(".paper-scrap");
    if (!scrap) return;

    scrap.classList.add("ql-invert");
    window.setTimeout(() => {
      scrap.classList.remove("ql-invert");
    }, 180);
  };

  const issueDateLabel = new Date().toLocaleDateString("en-GB", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).toUpperCase();

  const resumeRipPath = "polygon(1% 1%, 99% 0%, 96% 15%, 100% 30%, 94% 45%, 98% 60%, 91% 75%, 96% 88%, 85% 100%, 0% 100%)";

  return (
    <div className="min-h-screen bg-[#e8e1cf] px-0 pt-0 pb-[5px] md:px-8 md:pb-8 md:pt-[10px] lg:px-12 lg:pb-12 lg:pt-[10px] flex justify-center items-start font-serif selection:bg-[#2c2a25] selection:text-[#e8e1cf]">
      <style dangerouslySetInnerHTML={{__html: `
        .font-headline { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Merriweather', serif; }
        .font-body-straight { font-family: 'Merriweather', serif; font-style: normal; }
        .font-times { font-family: 'Tinos', 'Times New Roman', serif; }
        .font-hand { font-family: 'Caveat', 'Tinos', 'Times New Roman', serif; }
        
        .font-masthead { 
          font-family: 'UnifrakturMaguntia', cursive; 
          font-weight: 400;
        }

        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 18px; }

        /* Handwritten letter note */
        .vintage-letter {
          position: relative;
          transform: rotate(-0.6deg);
        }

        .vintage-letter::after { content: none; }

        .vintage-letter__paper {
          position: relative;
          filter: none;
          border-radius: 3px;
        }

        .vintage-letter__paper .vintage-letter__content { position: relative; }

        /* Bottom-right corner page stack (thin slivers, like right side) */
        .vintage-letter__paper .vintage-letter__content::after {
          content: "";
          position: absolute;
          right: -6px;
          bottom: -10px;
          width: 3px;
          height: 3px;
          border-radius: 2px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.12) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.07'/%3E%3C/svg%3E");
          background-color: #ead9b8;
          box-shadow:
            /* diagonal slivers extending left/down */
            -2px 2px 0 rgba(0,0,0,0.10),
            -4px 4px 0 rgba(0,0,0,0.08),
            -6px 6px 0 rgba(0,0,0,0.06),
            -8px 8px 0 rgba(0,0,0,0.05);
          pointer-events: none;
          z-index: 0;
        }

        .vintage-letter__paper::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 3px;
          background-color: #efe2c6;
          background-image:
            /* slightly darker ruled lines */
            repeating-linear-gradient(0deg, rgba(44,42,37,0.085) 0 1px, transparent 1px 22px),
            /* mild paper aging */
            radial-gradient(circle at 22% 18%, rgba(120, 70, 25, 0.10), transparent 60%),
            radial-gradient(circle at 78% 28%, rgba(120, 70, 25, 0.08), transparent 64%),
            radial-gradient(circle at 30% 86%, rgba(120, 70, 25, 0.07), transparent 68%),
            linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 55%, rgba(0,0,0,0.10) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.18'/%3E%3C/svg%3E");
          box-shadow:
            0 14px 18px rgba(0,0,0,0.22),
            0 1px 0 rgba(255,255,255,0.18) inset;
          pointer-events: none;
        }

        .vintage-letter__paper::after {
          content: "";
          position: absolute;
          /* stacked pages peeking ONLY on the right side */
          top: 8px;
          bottom: -8px;
          right: -3px;
          width: 3px;
          border-radius: 3px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.10) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.08'/%3E%3C/svg%3E");
          background-color: #ead9b8;
          box-shadow:
            /* thin stacked page edges */
            2px 2px 0 rgba(0,0,0,0.10),
            4px 4px 0 rgba(0,0,0,0.08),
            6px 6px 0 rgba(0,0,0,0.06),
            8px 8px 0 rgba(0,0,0,0.05),
            0 10px 14px rgba(0,0,0,0.12);
          pointer-events: none;
          z-index: 0;
        }

        .vintage-letter__content {
          font-family: 'Caveat', 'Tinos', 'Times New Roman', serif;
          position: relative;
          z-index: 2;
          padding: 18px 20px;
          font-size: 19px;
          line-height: 1.18;
          color: #2c2a25;
          filter: sepia(0.62) saturate(0.75) contrast(1.08);
        }

        .vintage-letter__content::before { content: none; }

        .vintage-letter__content p { margin: 0; }
        .vintage-letter__content p + p { margin-top: 8px; }
        .vintage-letter__content ul { margin: 8px 0 0; padding-left: 18px; }
        .vintage-letter__content li { margin: 4px 0; }

        .newspaper-texture {
            background-color: #e8e1cf;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }

        .masthead-title {
          font-size: clamp(1.5rem, 8vw, 5rem);
        }

        .drop-letter {
          font-size: 1.35em;
          vertical-align: middle;
          margin-right: -0.05em;
        }

        .wax-seal {
          background: radial-gradient(circle, #8b1a1a 60%, #5a0d0d 100%);
          box-shadow: 2px 2px 5px rgba(0,0,0,0.4), inset 0 0 10px rgba(0,0,0,0.5);
          border: 2px solid #a31f1f;
        }

        .skills-collage {
          position: relative;
          overflow: visible;
        }

        .skills-collage::before {
          content: none;
        }

        .paper-scrap {
          position: relative;
          filter: drop-shadow(0 18px 20px rgba(0,0,0,0.70));
        }

        /* Touch devices: avoid filter drop-shadow tap "square" artifacts */
        @media (hover: none) and (pointer: coarse) {
          .paper-scrap {
            filter: none !important;
            /* Bottom-only shadow (avoid side/top) */
            box-shadow: 0 20px 22px -18px rgba(0,0,0,0.55);
          }

          .paper-edge {
            /* paper-edge is clipped (tear masks), so avoid shadow here */
            box-shadow: none;
          }
        }

        .paper-edge {
          background:
            linear-gradient(180deg, rgba(95, 58, 24, 0.022) 0%, rgba(80, 48, 18, 0.028) 100%),
            linear-gradient(180deg, #fbf6ee 0%, #f4ebde 100%);
          padding: 7px;
        }

        .paper-edge::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 18% 10%, rgba(78, 50, 20, 0.16), transparent 48%),
            radial-gradient(circle at 82% 12%, rgba(78, 50, 20, 0.12), transparent 46%),
            radial-gradient(circle at 12% 88%, rgba(78, 50, 20, 0.13), transparent 50%),
            radial-gradient(circle at 90% 86%, rgba(78, 50, 20, 0.16), transparent 52%);
          mix-blend-mode: multiply;
          opacity: 0.28;
          pointer-events: none;
        }

        .paper-inner {
          position: relative;
          background-color: #e6d3ad;
          background-image:
            radial-gradient(circle at 18% 22%, rgba(135, 85, 35, 0.22), transparent 46%),
            radial-gradient(circle at 78% 28%, rgba(135, 85, 35, 0.18), transparent 48%),
            radial-gradient(circle at 32% 82%, rgba(135, 85, 35, 0.16), transparent 54%),
            radial-gradient(circle at 84% 86%, rgba(135, 85, 35, 0.20), transparent 56%),
            radial-gradient(circle at 26% 58%, rgba(110, 65, 22, 0.22), transparent 40%),
            radial-gradient(circle at 72% 66%, rgba(110, 65, 22, 0.18), transparent 44%),
            radial-gradient(circle at 58% 32%, rgba(255,255,255,0.20), transparent 52%),
            linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 45%, rgba(0,0,0,0.10) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.14'/%3E%3C/svg%3E");
          box-shadow:
            0 1px 0 rgba(255,255,255,0.55) inset,
            0 -1px 0 rgba(0,0,0,0.06) inset;
          filter: sepia(0.70) saturate(0.55) contrast(1.12) brightness(0.95);
        }

        .paper-inner::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            /* edge burn / grime */
            radial-gradient(closest-side at 10% 10%, rgba(0,0,0,0.22), transparent 70%),
            radial-gradient(closest-side at 90% 10%, rgba(0,0,0,0.18), transparent 68%),
            radial-gradient(closest-side at 10% 90%, rgba(0,0,0,0.18), transparent 72%),
            radial-gradient(closest-side at 90% 90%, rgba(0,0,0,0.22), transparent 74%),
            /* foxing spots */
            radial-gradient(circle at 22% 22%, rgba(110, 70, 25, 0.22) 0 6px, transparent 7px),
            radial-gradient(circle at 30% 18%, rgba(110, 70, 25, 0.18) 0 4px, transparent 5px),
            radial-gradient(circle at 64% 26%, rgba(110, 70, 25, 0.20) 0 5px, transparent 6px),
            radial-gradient(circle at 78% 22%, rgba(110, 70, 25, 0.16) 0 3px, transparent 4px),
            radial-gradient(circle at 26% 74%, rgba(110, 70, 25, 0.20) 0 5px, transparent 6px),
            radial-gradient(circle at 72% 78%, rgba(110, 70, 25, 0.18) 0 4px, transparent 5px);
          mix-blend-mode: multiply;
          opacity: 0.65;
          pointer-events: none;
        }

        .paper-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'%3E%3Cfilter id='s'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.25' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.15  0 0 0 0 0.12  0 0 0 0 0.06  0 0 0 0.45 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23s)' opacity='0.35'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.85;
          pointer-events: none;
        }

        /* Vintage tint variants (skills scraps only) */
        .paper-inner--tan { background-color: #d7b88f; filter: sepia(0.78) saturate(0.62) contrast(1.12) brightness(0.95) hue-rotate(-6deg); }
        .paper-inner--green { background-color: #bccaa0; filter: sepia(0.72) saturate(0.55) contrast(1.12) brightness(0.95) hue-rotate(-12deg); }
        .paper-inner--ivory { background-color: #e7d9bf; filter: sepia(0.70) saturate(0.52) contrast(1.12) brightness(0.96) hue-rotate(2deg); }
        .paper-inner--mint { background-color: #b8c9b0; filter: sepia(0.68) saturate(0.58) contrast(1.12) brightness(0.95) hue-rotate(-18deg); }
        .paper-inner--rose { background-color: #d2b6a4; filter: sepia(0.72) saturate(0.55) contrast(1.12) brightness(0.95) hue-rotate(10deg); }
        .paper-inner--kraft { background-color: #c7b096; filter: sepia(0.85) saturate(0.52) contrast(1.12) brightness(0.93) hue-rotate(-2deg); }
        .quicklinks-float-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: flex-start;
          justify-content: center;
          --pin-drop: 360px;
        }

        .quicklinks-float-wrap a {
          color: #2c2a25;
          -webkit-tap-highlight-color: transparent;
          transition: color 160ms ease;
          outline: none;
          touch-action: manipulation;
        }

        /* Quick Links: text + icon become the pin color */
        .quicklinks-float-wrap .paper-scrap:hover a,
        .quicklinks-float-wrap .paper-scrap:active a,
        .quicklinks-float-wrap .paper-scrap:focus-within a {
          color: var(--pin-color, #1a4f7a);
          text-shadow: 0 0.5px 0 rgba(0,0,0,0.18);
        }

        /* Mobile tap: prevent grey/square tap artifacts */
        .quicklinks-float-wrap .paper-scrap,
        .quicklinks-float-wrap .paper-edge,
        .quicklinks-float-wrap .paper-inner {
          -webkit-tap-highlight-color: transparent;
        }

        .quicklinks-float-wrap a:focus {
          outline: none;
        }

        .quicklinks-float-wrap a:active {
          background-color: transparent;
        }

        @media (hover: none) and (pointer: coarse) {
          /* iOS Safari can render filter/tap feedback as square; keep it stable on touch */
          .quicklinks-float-wrap .paper-scrap:active {
            filter: none;
          }

          /*
           * iOS/WebKit: mix-blend-mode on layers inside clip-path tears can fill concave
           * cutouts with a flat wash. Isolate + normal blending keeps tears visually empty.
           */
          .quicklinks-float-wrap .paper-edge,
          .quicklinks-float-wrap .paper-inner {
            isolation: isolate;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          .quicklinks-float-wrap .paper-inner::before {
            mix-blend-mode: normal;
            opacity: 0.38;
          }
          .quicklinks-float-wrap .paper-inner::after {
            mix-blend-mode: normal;
            opacity: 0.42;
          }
          .quicklinks-float-wrap .paper-edge::before {
            mix-blend-mode: normal;
            opacity: 0.1;
          }
        }

        .quicklinks-float-wrap .paper-edge,
        .quicklinks-float-wrap .paper-inner {
          transition: background-color 120ms linear, color 120ms linear;
        }

        /* Quick Links: stock border — very light + hint of sepia */
        .quicklinks-float-wrap .paper-edge {
          background:
            linear-gradient(180deg, rgba(90, 55, 22, 0.018) 0%, rgba(75, 45, 14, 0.024) 100%),
            linear-gradient(180deg, #fffefb 0%, #faf5eb 55%, #f3ebe0 100%);
        }

        .quicklinks-float-wrap .paper-edge::before {
          opacity: 0.14;
        }

        .quicklinks-float-wrap .paper-scrap.ql-invert .paper-inner {
          background-color: #ffffff !important;
          background-image: none !important;
          filter: none !important;
        }

        .quicklinks-float-wrap .paper-scrap.ql-invert .paper-edge {
          background: #e9d9bf !important;
        }

        .tear-mask-a { clip-path: polygon(2% 10%, 10% 2%, 98% 0%, 96% 18%, 100% 32%, 94% 48%, 99% 66%, 92% 84%, 98% 98%, 82% 100%, 0% 96%, 3% 74%, 0% 56%, 4% 36%); }
        .tear-mask-b { clip-path: polygon(6% 0%, 98% 6%, 94% 20%, 100% 34%, 93% 50%, 99% 62%, 91% 78%, 97% 94%, 78% 100%, 0% 95%, 3% 74%, 0% 58%, 4% 40%, 0% 18%); }
        .tear-mask-c { clip-path: polygon(6% 2%, 98% 0%, 95% 14%, 100% 26%, 92% 44%, 99% 60%, 92% 76%, 97% 90%, 86% 100%, 1% 97%, 0% 76%, 3% 58%, 0% 42%, 4% 24%); }
        .tear-mask-d { clip-path: polygon(4% 6%, 98% 1%, 100% 20%, 95% 36%, 99% 52%, 94% 68%, 98% 84%, 90% 98%, 74% 100%, 0% 94%, 3% 78%, 0% 60%, 5% 40%); }

        /*
         * Quick Links: same winding as tear-mask-a–d, but top/bottom use irregular “bitten”
         * tears (uneven x steps, varying notch depth) — not smooth waves.
         */
        .tear-mask-ql-a {
          clip-path: polygon(
            2% 10%, 10% 2%, 16% 9%, 23% 1%, 29% 8%, 37% 3%, 46% 11%, 53% 2%, 61% 7%, 71% 0%, 79% 6%, 88% 2%, 98% 0%,
            96% 18%, 100% 32%, 94% 48%, 99% 66%, 92% 84%, 98% 98%,
            82% 100%, 67% 96%, 54% 100%, 43% 93%, 31% 99%, 17% 95%, 7% 100%, 0% 96%,
            3% 74%, 0% 56%, 4% 36%
          );
        }
        .tear-mask-ql-b {
          clip-path: polygon(
            6% 0%, 15% 7%, 24% 1%, 33% 8%, 44% 2%, 56% 9%, 67% 3%, 79% 7%, 91% 1%, 98% 6%,
            94% 20%, 100% 34%, 93% 50%, 99% 62%, 91% 78%, 97% 94%,
            78% 100%, 63% 97%, 49% 100%, 35% 94%, 21% 99%, 9% 96%, 0% 95%,
            3% 74%, 0% 58%, 4% 40%, 0% 18%
          );
        }
        .tear-mask-ql-c {
          clip-path: polygon(
            /* Resume: angular tear + thin top/side branches + inner jags along the gash */
            6% 2%, 16% 0%, 30% 2%,
            36% 0%, 37.2% 5%, 36.3% 8%, 38.4% 4%, 39% 0%,
            40% 9%,
            42% 18%, 41.1% 26%, 42.9% 29%, 44.8% 39%, 47% 48%,
            41% 86%,
            54% 46%, 60% 10%,
            59% 5%, 61.2% 11%, 62.2% 6%, 64% 0%, 70% 1%,
            84% 0%, 93% 5%, 98% 0%,
            95% 14%, 100% 26%, 92% 44%, 99% 60%, 92% 76%, 97% 90%,
            86% 100%, 72% 96%, 58% 100%, 44% 94%, 31% 99%, 18% 95%, 5% 100%, 1% 97%,
            0% 76%, 3% 58%, 0% 42%, 4% 24%
          );
        }

        /* GitHub: top tears as before; bottom edge = branch tear (inner jags into gash, not mail rim) */
        .tear-mask-ql-gh {
          clip-path: polygon(
            2% 10%,
            12% 2%, 20% 10%,
            28% 0%,
            26.2% 6%, 27.8% 11%, 29.2% 7%, 31.2% 13%, 34% 18%,
            36.2% 12%, 38% 7%, 39.2% 4%, 40% 1%,
            62% 0%,
            64% 3%, 66% 9%, 68% 15%, 69% 19%,
            67.5% 24%, 68.4% 29%, 69.6% 26%, 71.2% 29%, 72% 24%,
            73% 16%, 75% 8%, 76% 2%,
            98% 0%,
            96% 18%, 100% 32%, 94% 48%, 99% 66%, 92% 84%, 98% 98%,
            92% 100%, 86% 97%, 80% 100%, 74% 98%, 68% 100%,
            64% 100%, 62.2% 88%, 60.8% 80%, 62.4% 84%, 61% 92%, 58.6% 86%, 57.2% 94%, 55% 100%,
            48% 99%, 40% 100%, 32% 97%, 24% 100%, 14% 98%, 4% 100%, 0% 99%,
            0% 96%, 3% 74%, 0% 56%, 4% 36%
          );
        }

        /* LinkedIn: top + deep bottom gash; bottom-left/right = extra branch tears (ql-c style micro jags) */
        .tear-mask-ql-li {
          clip-path: polygon(
            4% 6%,
            5% 2%, 11% 9%, 19% 2%,
            31% 2%,
            29.5% 7%, 31% 11%, 32.5% 6%, 34.2% 15%, 37% 30%,
            35.5% 37%, 36.4% 44%, 37.1% 38%, 38.6% 44%, 39.2% 32%, 41.6% 17%, 43% 1%,
            53% 8%, 65% 2%, 98% 1%,
            100% 20%, 95% 36%, 99% 52%, 94% 68%, 98% 84%, 90% 98%,
            86% 100%, 82% 96%, 78.5% 100%, 76% 97%, 74% 100%,
            78% 100%,
            76.8% 93%, 75% 89%, 76.2% 85%, 74.5% 100%, 72% 74%,
            71.2% 82%, 70.5% 88%, 71.6% 83%, 69.2% 100%, 66% 100%,
            62% 100%, 58.5% 94%, 56.2% 88%, 57.4% 92%, 55.1% 97%, 52% 100%,
            46% 100%, 32% 93%, 19% 99%, 6% 95%, 0% 94%,
            3% 78%, 0% 60%, 5% 40%
          );
        }

        /* E-mail: simple double top; fibrous bottom rim only (deep notch + inner jags unchanged below) */
        .tear-mask-ql-mail {
          clip-path: polygon(
            6% 0%,
            9% 2%, 14% 4%, 21% 12%,
            27% 0%, 32% 15%, 41% 3%,
            56% 1%, 64% 21%, 72% 4%,
            88% 2%, 98% 6%,
            94% 20%, 100% 34%, 93% 50%, 99% 62%, 91% 78%, 97% 94%,
            82% 100%, 80% 97.5%, 81.2% 100%, 79% 97%, 77.5% 100%, 76% 97.8%, 74.5% 100%, 73% 97%, 71.5% 100%, 70% 98.5%, 68.5% 100%, 67% 97.5%, 65.5% 100%, 64% 100%,
            62.5% 97.8%, 63.2% 100%, 61% 97.5%, 60% 100%, 58.5% 97%, 57.5% 100%, 56.2% 97.8%, 55% 99%, 54.2% 97%, 53.6% 88%,
            53.1% 83%, 53.8% 79%, 53% 75%, 53.6% 71%, 52.8% 67%, 53.3% 64%, 52.7% 62%,
            52.9% 66%, 52.4% 63%, 52.8% 58%, 52.2% 50%, 51.7% 45%, 52.3% 42%, 51.4% 38%, 51% 35%, 50.4% 31%, 50% 29%,
            49.4% 33%, 49.9% 39%, 49.1% 44%, 48.5% 48%, 47.9% 52%,
            48.1% 48%, 47.7% 50%, 47.2% 58%, 46.7% 70%, 46.3% 82%, 45.9% 90%, 45.4% 96%, 44.9% 99%, 44% 100%, 38% 100%,
            21% 99%, 9% 96%, 0% 95%,
            3% 74%, 0% 58%, 4% 40%, 0% 18%
          );
        }

        /*
         * Phone: all rips on top; bottom edge straight (no notch).
         * LinkedIn: desktop top + former bottom jag lifted to upper edge; flat bottom.
         * E-mail: desktop double top + full big bottom tear reflected to top; flat bottom.
         */
        @media (max-width: 767px) {
          .tear-mask-ql-li {
            clip-path: polygon(
              4% 6%,
              5% 2%, 11% 9%, 19% 2%,
              31% 2%,
              29.5% 7%, 31% 11%, 32.5% 6%, 34.2% 15%, 37% 30%,
              35.5% 37%, 36.4% 44%, 37.1% 38%, 38.6% 44%, 39.2% 32%, 41.6% 17%, 43% 1%,
              48% 0%,
              46.6% 6%, 48.2% 12%, 50% 7%, 51.6% 15%, 52% 10%,
              50.5% 18%, 51.4% 24%, 52.1% 18%, 53.6% 24%, 54% 12%, 56% 2%,
              62% 0%, 65% 2%,
              66.2% 12%, 65.4% 18%, 66.3% 14%, 67.8% 20%, 68.2% 11%, 71% 6%, 74% 1%, 98% 1%,
              100% 20%, 95% 36%, 99% 52%, 94% 68%, 98% 84%, 100% 100%,
              0% 100%,
              0% 94%, 3% 78%, 0% 60%, 5% 40%
            );
          }
          .tear-mask-ql-mail {
            clip-path: polygon(
              6% 0%,
              9% 2%, 14% 4%, 21% 12%,
              27% 0%,
              25.8% 5%, 27.3% 10%, 28.8% 5%, 30.6% 14%, 32% 15%,
              30.3% 21%, 31.2% 27%, 32% 22%, 33.6% 27%, 34.1% 17%, 37.5% 9%, 41% 3%,
              43% 1%, 44% 0%,
              44.9% 1%, 45.4% 4%, 45.9% 10%, 46.3% 18%, 46.7% 30%, 46.4% 36%, 47% 40%, 47.2% 42%, 47.7% 50%, 48.1% 52%, 47.9% 48%, 48.3% 56%, 48.9% 64%, 49.5% 69%, 50% 71%, 50.4% 69%, 51% 65%, 51.6% 58%, 52.2% 50%, 52.8% 42%, 52.4% 37%, 52.9% 34%, 52.7% 38%, 53.1% 26%, 53.6% 12%, 54.2% 3%, 55% 0%, 57% 0%,
              55.2% 4%, 56.8% 10%, 58.2% 5%, 60% 13%, 62% 17%, 64% 21%,
              62.3% 28%, 63.3% 34%, 64% 28%, 65.6% 34%, 66% 22%, 69% 12%, 72% 4%,
              88% 2%, 98% 6%,
              94% 20%, 100% 34%, 93% 50%, 99% 62%, 91% 78%, 97% 94%,
              100% 100%, 0% 100%,
              0% 95%, 3% 74%, 0% 58%, 4% 40%, 0% 18%
            );
          }
        }
        .tear-mask-ql-d {
          clip-path: polygon(
            4% 6%, 13% 1%, 21% 9%, 30% 2%, 40% 10%, 51% 3%, 62% 8%, 72% 1%, 83% 7%, 92% 2%, 98% 1%,
            100% 20%, 95% 36%, 99% 52%, 94% 68%, 98% 84%, 90% 98%,
            74% 100%, 59% 96%, 46% 100%, 32% 93%, 19% 99%, 6% 95%, 0% 94%,
            3% 78%, 0% 60%, 5% 40%
          );
        }

        .newsprint {
          background-image: none;
        }

        .scrap-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 12px;
        }

        .quicklink-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          text-transform: none;
          letter-spacing: 0.06em;
          font-size: 12px;
        }

        .scrap-body {
          font-family: 'Tinos', 'Times New Roman', serif;
          font-size: 12px;
          line-height: 1.25;
        }

        .scrap-columns {
          column-count: 2;
          column-gap: 14px;
        }

        .skills-float-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: flex-start;
          justify-content: center;
          padding: 6px 0;
        }

        .skills-float-wrap .paper-scrap {
          position: relative !important;
          left: auto !important;
          right: auto !important;
          top: auto !important;
          bottom: auto !important;
        }

        .skills-float-wrap .paper-scrap {
          transition: transform 180ms ease, filter 180ms ease;
        }

        /* Prevent "sticky hover" artifacts on touch devices */
        @media (hover: hover) and (pointer: fine) {
          .quicklinks-float-wrap .paper-scrap {
            transition: transform 220ms ease, filter 220ms ease;
            transform-origin: center;
          }

          /* Quick Links: "stretch" on hover without reflow */
          .quicklinks-float-wrap .paper-scrap:hover {
            transform: rotate(var(--rot, 0deg)) translateY(-8px) scaleX(1.5) !important;
            filter: drop-shadow(0 24px 26px rgba(0,0,0,0.65));
            z-index: 10;
          }

          .skills-float-wrap .paper-scrap:hover {
            transform: translateY(-6px) rotate(var(--rot, 0deg)) !important;
            filter: drop-shadow(0 26px 28px rgba(0,0,0,0.78));
          }
        }

        .paper-edge { position: relative; }

        .pin {
          position: absolute;
          width: 18px;
          height: 18px;
          z-index: 5;
          color: #7b0f0f; /* default vintage red */
          filter: drop-shadow(0 2px 1px rgba(0,0,0,0.45));
          transition: color 180ms ease, transform 180ms ease, filter 180ms ease, opacity 180ms ease;
          opacity: 1;
        }

        .pin--tl { top: 6px; left: 10px; transform: rotate(-12deg); }
        .pin--tr { top: 8px; right: 12px; transform: rotate(18deg); }
        .pin--tm { top: 6px; left: 50%; transform: translateX(-50%) rotate(8deg); }

        @media (hover: hover) and (pointer: fine) {
          /* Only apply the "hover ink" pin effect to the skills collage scraps */
          .skills-float-wrap .paper-scrap:hover .pin {
            color: #1a4f7a; /* hover blue-ish ink */
            filter: drop-shadow(0 3px 2px rgba(0,0,0,0.55));
            transform: translateY(-1px) rotate(var(--pinrot, 0deg));
          }

          .skills-float-wrap .paper-scrap:hover .pin--tl { --pinrot: -12deg; }
          .skills-float-wrap .paper-scrap:hover .pin--tr { --pinrot: 18deg; }
          .skills-float-wrap .paper-scrap:hover .pin--tm { --pinrot: 8deg; }
        }

        @media (hover: hover) and (pointer: fine) {
          .quicklinks-float-wrap .paper-scrap:hover > .pin {
            filter: drop-shadow(0 2px 1px rgba(0,0,0,0.35));
            opacity: 1;
            /* keep pin color; only animate movement */
            /* override generic .paper-scrap:hover pin transform */
            transform: none;
            will-change: transform, opacity;
          }

          .quicklinks-float-wrap .paper-scrap:hover > .pin--tl {
            animation-name: quicklinksPinSlashLeft;
            animation-duration: 720ms;
            animation-delay: 0ms;
            animation-timing-function: cubic-bezier(0.22, 0.9, 0.22, 1);
            animation-fill-mode: forwards;
          }

          .quicklinks-float-wrap .paper-scrap:hover > .pin--tr {
            animation-name: quicklinksPinSlashRight;
            animation-duration: 720ms;
            animation-delay: 0ms;
            animation-timing-function: cubic-bezier(0.22, 0.9, 0.22, 1);
            animation-fill-mode: forwards;
          }
        }

        /* Quick Links: each pin has its own dark color (set inline) */
        .quicklinks-float-wrap .paper-scrap > .pin {
          color: var(--pin-color, #2c2a25);
        }

        .scrap-body p { margin: 0; }

        /* Masthead ticker */
        @keyframes mastheadMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Quick Links pin "slash" animation (desktop hover only) */
        @keyframes quicklinksPinSlashLeft {
          0% { transform: translate(0, 0) rotate(-12deg); opacity: 1; }
          10% { transform: translate(-10px, 10px) rotate(-20deg); opacity: 1; }
          40% { transform: translate(-20px, 18px) rotate(-26deg); opacity: 1; }
          75% { transform: translate(-40px, 44px) rotate(-42deg); opacity: 0.9; }
          100% { transform: translate(-50px, 62px) rotate(-56deg); opacity: 0; }
        }

        @keyframes quicklinksPinSlashRight {
          0% { transform: translate(0, 0) rotate(18deg); opacity: 1; }
          10% { transform: translate(10px, 10px) rotate(26deg); opacity: 1; }
          40% { transform: translate(20px, 18px) rotate(32deg); opacity: 1; }
          75% { transform: translate(40px, 44px) rotate(48deg); opacity: 0.9; }
          100% { transform: translate(50px, 62px) rotate(62deg); opacity: 0; }
        }

        .masthead-ticker {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .masthead-ticker__track {
          display: flex;
          width: max-content;
          animation: mastheadMarquee 42s linear infinite;
        }

        .masthead-ticker__item {
          flex: 0 0 auto;
          padding-right: 48px;
        }

        @media (hover: hover) and (pointer: fine) {
          .masthead-ticker:hover .masthead-ticker__track {
            animation-play-state: paused;
          }
        }

        /* Vintage cursor (right-click cycles variants) */
        :root {
          --vintage-cursor: auto;
          --vintage-cursor-clickable: pointer;
        }

        body {
          cursor: var(--vintage-cursor);
        }

        a, button, [role='button'] {
          cursor: var(--vintage-cursor-clickable);
          -webkit-tap-highlight-color: transparent;
        }
      `}} />

      {/* Main Newspaper Container */}
      <div className="newspaper-texture text-[#2c2a25] w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#c1b59f] p-4 md:p-8 flex flex-col gap-4 relative overflow-hidden">
        <h1 className="sr-only">Shartaz Feeham (Feeham) — Software Engineer Portfolio</h1>
        
        {/* Page/book edge shading (all 4 sides) */}
        {/* Right */}
        {/* Mobile (strong book edge) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-10 md:hidden"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0) 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-2 opacity-70 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.10) 100%)",
          }}
        />

        {/* Desktop (subtle edge) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-10 md:w-12 hidden md:block"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 35%, rgba(0,0,0,0) 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-[1px] opacity-50 hidden md:block"
          style={{ background: "rgba(0,0,0,0.18)" }}
        />

        {/* Left */}
        {/* Mobile (match strong right edge on both sides) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-10 md:hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0) 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-2 opacity-70 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.10) 100%)",
          }}
        />

        {/* Desktop (current subtle left edge) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-7 md:w-9 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 35%, rgba(0,0,0,0) 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-[1px] opacity-50 hidden md:block"
          style={{ background: "rgba(0,0,0,0.18)" }}
        />

        {/* Top */}
        {/* Mobile (strong bevel) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-0 h-8 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0) 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-0 h-2 opacity-70 md:hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 45%, rgba(0,0,0,0.10) 100%)",
          }}
        />

        {/* Desktop/tablet (subtle) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-0 h-7 md:h-9 hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0) 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] opacity-60 hidden md:block"
          style={{ background: "rgba(255,255,255,0.30)" }}
        />

        {/* Bottom */}
        {/* Mobile (strong bevel) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 md:hidden"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 32%, rgba(0,0,0,0) 82%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-2 opacity-70 md:hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 45%, rgba(0,0,0,0.10) 100%)",
          }}
        />

        {/* Desktop/tablet (subtle) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-8 md:h-10 hidden md:block"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.09) 36%, rgba(0,0,0,0) 80%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-[1px] opacity-50 hidden md:block"
          style={{ background: "rgba(0,0,0,0.18)" }}
        />

        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/10 to-transparent"></div>

        <Masthead issueDateLabel={issueDateLabel} />

        {/* --- MAIN SECTION --- */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <BreakingNews />

          {/* --- RIGHT SIDE: QUICK LINKS & INDEX --- */}
          <aside className="lg:col-span-4 h-full lg:border-l-2 lg:border-[#2c2a25] lg:pl-6 lg:ml-2">
            <div className="flex flex-col items-center">
              
              {/* Quick Links (torn collage) */}
              <div className="w-full">
                <div className="border-b-2 border-[#2c2a25] mb-3 pb-1">
                  <h2 className="font-headline font-black text-3xl md:text-4xl tracking-tighter uppercase leading-none">
                    QUICK LINKS
                  </h2>
                </div>

                <div className="quicklinks-float-wrap">
                  <div className="paper-scrap w-[180px] md:w-[190px]" style={{ "--rot": "-2deg", "--pin-color": "#1f3a8a", transform: "rotate(-2deg) translateY(8px)" }}>
                      <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                      <svg className="pin pin--tr" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                    <div className="paper-edge tear-mask-ql-c">
                      <a className="paper-inner tear-mask-ql-c p-3 block" href="#" onPointerDown={flashQuickLinkInvert} onClick={(e) => { toggleQuickLinkInvert(e); e.preventDefault(); }}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="quicklink-title">Resume</div>
                          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                            <path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4.01 4a1 1 0 0 1-1.38 0l-4.01-4a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1z"/>
                            <path fill="currentColor" d="M5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="paper-scrap w-[180px] md:w-[190px]" style={{ "--rot": "-6deg", "--pin-color": "#15803d", transform: "rotate(-6deg) translateY(4px)" }}>
                    <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9 .2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                    <svg className="pin pin--tr" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9 .2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                    <div className="paper-edge tear-mask-ql-gh">
                      <a className="paper-inner tear-mask-ql-gh p-3 block" href="https://github.com/ShartazFeeham" target="_blank" rel="noreferrer" onPointerDown={flashQuickLinkInvert} onClick={toggleQuickLinkInvert}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="quicklink-title">GitHub</div>
                          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                            <path fill="currentColor" d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.18 9.43 7.6 10.96.56.11.77-.25.77-.56 0-.28-.01-1.02-.02-2-3.09.69-3.74-1.53-3.74-1.53-.5-1.32-1.24-1.67-1.24-1.67-1.01-.72.08-.71.08-.71 1.12.08 1.7 1.17 1.7 1.17.99 1.75 2.6 1.25 3.24.96.1-.74.38-1.25.7-1.54-2.46-.29-5.05-1.26-5.05-5.62 0-1.24.42-2.25 1.12-3.05-.11-.28-.49-1.42.11-2.96 0 0 .92-.3 3.01 1.16a10.2 10.2 0 0 1 2.74-.38c.93 0 1.87.13 2.74.38 2.09-1.46 3.01-1.16 3.01-1.16.6 1.54.22 2.68.11 2.96.7.8 1.12 1.81 1.12 3.05 0 4.37-2.6 5.33-5.08 5.61.39.35.74 1.05.74 2.12 0 1.53-.02 2.76-.02 3.14 0 .31.2.68.78.56 4.41-1.53 7.59-5.86 7.59-10.96C23.25 5.6 18.27.5 12 .5z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="paper-scrap w-[180px] md:w-[190px]" style={{ "--rot": "5deg", "--pin-color": "#5b21b6", transform: "rotate(5deg) translateY(-6px)" }}>
                    <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9 .2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                    <svg className="pin pin--tr" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9 .2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                    <div className="paper-edge tear-mask-ql-li">
                      <a className="paper-inner tear-mask-ql-li p-3 block" href="https://linkedin.com/in/shartaz-feeham" target="_blank" rel="noreferrer" onPointerDown={flashQuickLinkInvert} onClick={toggleQuickLinkInvert}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="quicklink-title">LinkedIn</div>
                          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                            <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8 7.98h3.83v2.12h.05c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.78 2.65 4.78 6.1v9.42h-4v-8.35c0-1.99-.04-4.56-2.78-4.56-2.78 0-3.2 2.17-3.2 4.41v8.5H8V7.98z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="paper-scrap w-[180px] md:w-[190px]" style={{ "--rot": "8deg", "--pin-color": "#c2410c", transform: "rotate(8deg) translateY(2px)" }}>
                    <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                    <svg className="pin pin--tr" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                    </svg>
                    <div className="paper-edge tear-mask-ql-mail">
                      <a className="paper-inner tear-mask-ql-mail p-3 block" href="mailto:mdfeeham@gmail.com" onPointerDown={flashQuickLinkInvert} onClick={toggleQuickLinkInvert}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="quicklink-title">E-mail</div>
                          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                            <path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2l8 5.3 8-5.3V8H4zm16 10V10.6l-7.5 5a1 1 0 0 1-1.1 0L4 10.6V18h16z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                
              </div>

              <div id="index" className="pt-8 w-full">
                <h4 className="font-headline text-sm font-black uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 mb-3">Index</h4>
                <ul className="font-headline text-xs font-bold uppercase space-y-3">
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]">
                    <a className="flex justify-between w-full" href="#professional-experience"><span>Professional experience</span><span>P. 1</span></a>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]">
                    <a className="flex justify-between w-full" href="#skills-expertise"><span>Skills & Expertise</span><span>P. 2</span></a>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]">
                    <a className="flex justify-between w-full" href="#education"><span>Education</span><span>P. 3</span></a>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]">
                    <a className="flex justify-between w-full" href="#programming-skills"><span>Programming skills</span><span>P. 4</span></a>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]">
                    <a className="flex justify-between w-full" href="#personal-projects"><span>Personal projects</span><span>P. 5</span></a>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]">
                    <a className="flex justify-between w-full" href="#contact"><span>Contact</span><span>P. 6</span></a>
                  </li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]">
                    <a className="flex justify-between w-full" href="#others"><span>Others</span><span>P. 7</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </main>

        <hr className="border-t-[3px] border-[#2c2a25] mt-2 mb-1" />

        <ProfessionalExperienceSection />

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        {/* --- SKILLS & EXPERTISE --- */}
        <section id="skills-expertise" className="flex flex-col gap-4">
          <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
            <a href="#index">SKILLS &amp; EXPERTISE</a>
          </h2>
          <div className="skills-collage p-2 md:p-4">
            <div className="skills-float-wrap">
              {/* Large scraps with actual resume content */}
              <div className="paper-scrap w-[230px] md:w-[280px]" style={{ "--rot": "-8deg", transform: "rotate(-8deg) translateY(4px)" }}>
                <div className="paper-edge tear-mask-a">
                  <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <svg className="pin pin--tr" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <div className="paper-inner paper-inner--tan newsprint tear-mask-a p-4">
                    <div className="scrap-title mb-2">Programming</div>
                    <div className="scrap-body scrap-columns">
                      <p><b>Languages</b> Java, Javascript, C#</p>
                      <p><b>Frameworks</b> Spring Boot, ReactJS, Bootstrap</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[250px] md:w-[310px]" style={{ "--rot": "5deg", transform: "rotate(5deg) translateY(-8px)" }}>
                <div className="paper-edge tear-mask-b">
                  <svg className="pin pin--tm" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <div className="paper-inner paper-inner--ivory newsprint tear-mask-b p-4">
                    <div className="scrap-title mb-2">Database &amp; ORM</div>
                    <div className="scrap-body">
                      PostgreSQL, MySQL, JPA, Hibernate
                      <div className="mt-2 scrap-title" style={{ fontSize: "11px", letterSpacing: "0.16em" }}>Miscellaneous</div>
                      <div className="mt-1">Data structures, Algorithms, Design patterns</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[210px] md:w-[260px]" style={{ "--rot": "12deg", transform: "rotate(12deg) translateY(10px)" }}>
                <div className="paper-edge tear-mask-c">
                  <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <div className="paper-inner paper-inner--green newsprint tear-mask-c p-4">
                    <div className="scrap-title mb-2">Tools</div>
                    <div className="scrap-body">
                      Kafka, Git, Jira, Confluence
                      <div className="mt-2 scrap-title" style={{ fontSize: "11px", letterSpacing: "0.16em" }}>DevOps</div>
                      <div className="mt-1">Docker, Jenkins, Kibana</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[220px] md:w-[260px]" style={{ "--rot": "-6deg", transform: "rotate(-6deg) translateY(-2px)" }}>
                <div className="paper-edge tear-mask-d">
                  <svg className="pin pin--tr" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <div className="paper-inner paper-inner--mint newsprint tear-mask-d p-4">
                    <div className="scrap-title mb-2">Languages</div>
                    <div className="scrap-body">
                      English (Fluent)
                      <br />
                      Bengali (Native)
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra dummy scraps to match the reference collage density */}
              <div className="paper-scrap w-[180px] md:w-[210px]" style={{ "--rot": "2deg", transform: "rotate(2deg) translateY(14px)" }}>
                <div className="paper-edge tear-mask-b">
                  <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <div className="paper-inner paper-inner--tan newsprint tear-mask-b p-3">
                    <div className="scrap-title mb-1">NEWS</div>
                    <div className="scrap-body scrap-columns" style={{ fontSize: "11px" }}>
                      <p>Classified listings and dispatches from the engineering desk.</p>
                      <p>Filed under: platforms, patterns, and production craft.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[170px] md:w-[200px]" style={{ "--rot": "-10deg", transform: "rotate(-10deg) translateY(-10px)" }}>
                <div className="paper-edge tear-mask-a">
                  <svg className="pin pin--tm" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <div className="paper-inner paper-inner--rose newsprint tear-mask-a p-3">
                    <div className="scrap-title mb-1">TOP NEWS</div>
                    <div className="scrap-body scrap-columns" style={{ fontSize: "11px" }}>
                      <p>Solid fundamentals. Practical tooling. Fast iteration.</p>
                      <p>Hand-set in serif, printed on worn paper.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[160px] md:w-[190px]" style={{ "--rot": "9deg", transform: "rotate(9deg) translateY(6px)" }}>
                <div className="paper-edge tear-mask-c">
                  <svg className="pin pin--tl" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <svg className="pin pin--tr" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 2c.6 0 1 .4 1 1v4.2l3.1 3.1c.3.3.4.8.2 1.2l-.9 1.8c-.2.4-.6.7-1.1.7H13v6.2l-1 1-1-1V16H7.7c-.5 0-.9-.3-1.1-.7l-.9-1.8c-.2-.4-.1-.9.2-1.2L9 7.2V3c0-.6.4-1 1-1h4z"/>
                  </svg>
                  <div className="paper-inner paper-inner--kraft newsprint tear-mask-c p-3">
                    <div className="scrap-title mb-1">BUSINESS</div>
                    <div className="scrap-body scrap-columns" style={{ fontSize: "11px" }}>
                      <p>Reliable systems, clear interfaces, durable delivery.</p>
                      <p>Always readable, always vintage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        {/* --- EDUCATION --- */}
        <section id="education" className="flex flex-col gap-4">
          <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
            <a href="#index">EDUCATION</a>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <article className="lg:col-span-8">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-headline font-black text-sm uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">Green University of Bangladesh</h5>
                <span className="text-[12px] md:text-[13px] font-bold font-times">Jan 2019 – Mar 2023</span>
              </div>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                <b>BSc. In Computer Science &amp; Engineering</b>
              </p>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                <b>CGPA:</b> 3.56 out of 4.00
              </p>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify">
                <b>Publication:</b> Risk Analysis and Support System for Autistic Children using IoT
              </p>
            </article>

            <aside className="lg:col-span-4 lg:border-l-2 lg:border-[#2c2a25] lg:pl-6 lg:ml-2">
              <div className="p-0.5 border-[3px] border-[#2c2a25] bg-[#e8e1cf] shadow-lg">
                <div className="relative w-full aspect-[4/3] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
                  <img
                    src="/images/campus.jpg"
                    alt="University archival photograph"
                    className="object-cover w-full h-full mix-blend-multiply"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="mt-3 font-headline text-[10px] uppercase tracking-widest font-bold opacity-70 text-center">
                Archival Campus Photograph
              </div>
            </aside>
          </div>
        </section>

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        <ProgrammingSkillsSection />

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        {/* --- PERSONAL PROJECTS --- */}
        <section id="personal-projects" className="flex flex-col gap-4">
          <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
            <a href="#index">PERSONAL PROJECTS</a>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <article className="lg:col-span-8">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-headline font-black text-sm uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">Open Forum</h5>
                <span className="text-[12px] md:text-[13px] font-bold font-times">Dec 2024 – Present · Solo</span>
              </div>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                A microservice-based, event-driven distributed application that focuses on a large-scale user base using Spring and Java technologies. The primary focus is on creating a highly scalable system capable of handling a significant user load, ensuring high availability, resilience, and fault tolerance.
              </p>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                <b>Technologies:</b> Java, Spring boot, Spring cloud, Caching, PostgreSQL, CQRS, Event Streaming (Kafka), Centralized logging (ELK), Monitoring, Tracing, Dockerizing, OAuth 2.0 &amp; more.
              </p>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify border-t border-dashed border-[#2c2a25] pt-2">
                <b>GitHub repository:</b> https://github.com/ShartazFeeham/Open_forum (Under Development)
              </p>

              <div className="mt-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-headline font-black text-sm uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">Healthcare Management System</h5>
                  <span className="text-[12px] md:text-[13px] font-bold font-times">Oct 2023 – Dec 2023 · Team: 4</span>
                </div>
                <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                  This is a multi-aspect healthcare platform that offers both doctor and patient-oriented services and functionalities including appointment scheduling, doctor &amp; patient profiles, progress &amp; achievement tracking, community forums, file storing, real-time notifications, secured account management, internationalization for multi-language support, admin dashboard, help/​search index &amp; more.
                </p>
                <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                  <b>Technologies:</b> [Backend] Java (21) &amp; Spring Boot, [Frontend] React, CSS, HTML, [Architecture] Microservices, [Database &amp; ORM] PostgreSQL, Spring Data JPA, [Inter-Service Communication] Feign Client, Discovery Server &amp; API Gateway [Security] Spring Security, JWT for user auth&apos;s
                </p>
                <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify border-t border-dashed border-[#2c2a25] pt-2">
                  <b>GitHub repository:</b> https://github.com/ShartazFeeham/Healthcare_management
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 lg:border-l-2 lg:border-[#2c2a25] lg:pl-6 lg:ml-2">
              <div className="p-0.5 border-[3px] border-[#2c2a25] bg-[#e8e1cf] shadow-lg">
                <div className="relative w-full aspect-[4/3] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
                  <img
                    src="/images/team.jpg"
                    alt="Project editorial photograph"
                    className="object-cover w-full h-full mix-blend-multiply"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="mt-6 p-0.5 border-[3px] border-[#2c2a25] bg-[#e8e1cf] shadow-lg">
                <div className="relative w-full aspect-[4/3] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
                  <img
                    src="/images/desk.jpg"
                    alt="Engineering desk photograph"
                    className="object-cover w-full h-full mix-blend-multiply"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="mt-3 font-headline text-[10px] uppercase tracking-widest font-bold opacity-70 text-center">
                Photographs from the engineering archives
              </div>
            </aside>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-headline font-black text-sm uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">Alhashor (Text-tag search engine)</h5>
              <span className="text-[12px] md:text-[13px] font-bold font-times">Mar 2022 – Dec 2022 · Solo</span>
            </div>
            <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
              Developed a Hadith search engine capable of indexing and searching extensive Bengali text corpora which can search by tag, keyword, and paragraph. The search process is highly optimized for quick and efficient searches in very large texts containing millions of words. Searching utilizes the LCS algorithm for keyword matching. Results are displayed with searching time complexity of O(1).
            </p>
            <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
              <b>Technologies:</b> [Programming language] Java &amp; Javascript, [DSA] Hash, Heap, Trie, Tree, LCS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-dashed border-[#2c2a25] pt-2">
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify">
                <b>GitHub repository:</b> https://github.com/ShartazFeeham/Alhashor_Search_Engine
              </p>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify md:text-right">
                <b>Live demo:</b> https://boikotha.netlify.app/
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        <ContactSection />

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        <OthersSection />

        {/* --- REVISED FOOTER --- */}
        <section className="flex items-center justify-between pb-4">
           <div />
           <div className="text-right">
              <div className="font-headline text-[10px] font-black uppercase border-b border-[#2c2a25] mb-1">Shartaz Feeham</div>
              <div className="font-times text-[9px] italic">All Rights Reserved © 2022-2026</div>
           </div>
        </section>

        <CursorPicker />
      </div>
    </div>
  );
}
