import React from 'react';

// Unified Telegraph Icon - Resized for better balance (w-12 h-12)
const TelegraphIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={`${className} fill-current text-[#2c2a25]`}>
    <path d="M10 80h80v10H10z" />
    <path d="M20 70h60v10H20z" />
    <path d="M70 40h10v30H70z" />
    <circle cx="75" cy="35" r="8" />
    <path d="M30 60 L70 45" stroke="currentColor" strokeWidth="4" />
    <rect x="25" y="55" width="10" height="15" />
    <circle cx="30" cy="50" r="5" />
    <path d="M85 70 Q95 60 90 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,2" />
    <path d="M80 60 Q95 40 85 30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,2" />
  </svg>
);

const GramophoneIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current text-[#2c2a25]">
    <path d="M20 60h40v30H20z" />
    <path d="M15 90h50v5H15z" />
    <circle cx="40" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="3" transform="scale(1, 0.3) translate(0, 100)" />
    <path d="M40 60 Q 70 30 90 10" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M80 5 Q 95 0 95 20 Q 95 35 75 25 Z" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current text-[#2c2a25]">
    <rect x="20" y="40" width="50" height="40" rx="2" />
    <circle cx="35" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="65" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
    <rect x="70" y="50" width="20" height="20" rx="2" />
    <circle cx="80" cy="60" r="6" fill="#e8e1cf" />
    <path d="M45 40 L50 30 L60 30" fill="none" stroke="currentColor" strokeWidth="3" />
  </svg>
);

export default function App() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).toUpperCase();

  const resumeRipPath = "polygon(1% 1%, 99% 0%, 96% 15%, 100% 30%, 94% 45%, 98% 60%, 91% 75%, 96% 88%, 85% 100%, 0% 100%)";

  return (
    <div className="min-h-screen bg-[#2a241d] p-4 md:p-8 lg:p-12 flex justify-center items-start font-serif selection:bg-[#2c2a25] selection:text-[#e8e1cf]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=UnifrakturMaguntia&family=Tinos:ital,wght@0,400;0,700;1,400&display=swap');
        
        .font-headline { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Merriweather', serif; }
        .font-body-straight { font-family: 'Merriweather', serif; font-style: normal; }
        .font-times { font-family: 'Tinos', 'Times New Roman', serif; }
        
        .font-masthead { 
          font-family: 'UnifrakturMaguntia', cursive; 
          font-weight: 400;
        }

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

        .paper-edge {
          background: linear-gradient(180deg, #ffffff 0%, #f7f3ea 100%);
          padding: 9px;
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

        .paper-inner--green { background-color: #c8d1aa; }
        .paper-inner--tan { background-color: #dcc09b; }

        .paper-inner--green { filter: sepia(0.70) saturate(0.50) contrast(1.12) brightness(0.95); }
        .paper-inner--tan { filter: sepia(0.75) saturate(0.55) contrast(1.12) brightness(0.95); }

        .tear-mask-a { clip-path: polygon(2% 10%, 10% 2%, 98% 0%, 96% 18%, 100% 32%, 94% 48%, 99% 66%, 92% 84%, 98% 98%, 82% 100%, 0% 96%, 3% 74%, 0% 56%, 4% 36%); }
        .tear-mask-b { clip-path: polygon(6% 0%, 98% 6%, 94% 20%, 100% 34%, 93% 50%, 99% 62%, 91% 78%, 97% 94%, 78% 100%, 0% 95%, 3% 74%, 0% 58%, 4% 40%, 0% 18%); }
        .tear-mask-c { clip-path: polygon(6% 2%, 98% 0%, 95% 14%, 100% 26%, 92% 44%, 99% 60%, 92% 76%, 97% 90%, 86% 100%, 1% 97%, 0% 76%, 3% 58%, 0% 42%, 4% 24%); }
        .tear-mask-d { clip-path: polygon(4% 6%, 98% 1%, 100% 20%, 95% 36%, 99% 52%, 94% 68%, 98% 84%, 90% 98%, 74% 100%, 0% 94%, 3% 78%, 0% 60%, 5% 40%); }

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

        .scrap-body p { margin: 0; }
      `}} />

      {/* Main Newspaper Container */}
      <div className="newspaper-texture text-[#2c2a25] w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#c1b59f] p-4 md:p-8 flex flex-col gap-4 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/10 to-transparent"></div>

        {/* --- MASTHEAD --- */}
        <header className="flex flex-col items-center w-full border-t border-[#2c2a25] pt-4">
          <div className="w-full flex justify-between items-center mb-1">
            <div className="hidden md:block w-32 text-[9px] md:text-[10px] leading-[1.1] font-bold uppercase text-left">
              Largest Tech<br/>Circulation<br/>In South Asia<br/>
              <span className="text-[7px] font-normal tracking-tighter opacity-70">Est. MCMXCIII</span>
            </div>

            <h1 className="font-masthead masthead-title text-center whitespace-nowrap px-4 leading-[1.0] flex-1">
              The <span className="drop-letter">s</span>ilicon <span className="drop-letter">t</span>imes
            </h1>

            <div className="hidden md:block w-32 text-[9px] md:text-[10px] leading-[1.1] font-bold uppercase text-right">
              Innovating<br/>Since Birth,<br/>Pages 15 and 16<br/>
              <span className="text-[7px] font-normal tracking-tighter opacity-70">Only Today</span>
            </div>
          </div>

          <div className="w-full border-y-[2px] border-[#2c2a25] flex justify-between items-center py-1 px-4 mb-8 font-headline text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">
            <span className="w-1/3 text-left">VOL. 127 · NO. 39</span>
            <span className="w-1/3 text-center">DHAKA, {currentDate}</span>
            <span className="w-1/3 text-right">PRICE 10 CENTS</span>
          </div>
        </header>

        {/* --- MAIN SECTION --- */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: BREAKING NEWS */}
          <article className="lg:col-span-8 flex flex-col gap-4">
            <div className="text-center mb-6">
              <h3 className="font-headline text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                BREAKING NEWS!
              </h3>
              <div className="mt-2 mb-1 px-6">
                <p className="font-body-straight text-xl md:text-2xl leading-tight text-gray-800">
                  Elusive Software Engineer Found After Years of Searching
                </p>
              </div>
              <div className="mt-1">
                <h4 className="font-headline text-2xl md:text-4xl font-black uppercase tracking-normal">
                  Shartaz Feeham
                </h4>
              </div>
            </div>
            
            <div className="block text-sm md:text-base text-justify leading-relaxed">
              <div className="float-left mr-6 mb-2 w-1/4 max-w-[180px]">
                <div className="p-0.5 border-[4px] border-[#2c2a25] bg-[#e8e1cf] relative shadow-lg">
                  <div className="absolute -top-4 -right-4 wax-seal w-16 h-16 rounded-full flex items-center justify-center rotate-12 z-20 border-double border-2 border-[#ffebcc]/40">
                    <div className="text-[#ffebcc] font-headline font-black text-center leading-none flex flex-col items-center">
                      <span className="mb-0.5 border-b border-[#ffebcc]/50 pb-0.5 text-[10px] uppercase">WANTED</span>
                      <span className="text-xs">$$$</span>
                    </div>
                  </div>
                  
                  <div className="relative w-full aspect-[4/5] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" 
                      alt="Portrait of Shartaz Feeham" 
                      className="object-cover w-full h-full mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="font-times text-[16px] md:text-[18px]">
                <p className="mb-4">
                  <span className="float-left text-5xl font-headline font-black leading-none pr-2 pt-1">B</span>
                  ackend-focused software engineer with over 3 years of professional experience, Shartaz Feeham is a specialist in crafting highly scalable and resilient distributed systems. His technical arsenal is centered on the <b>Java/Spring Boot</b> ecosystem, complemented by a mastery of <b>Microservices, Kafka, Docker, and PostgreSQL</b>. Having contributed to the architectural backbone of a <b>billion-dollar Japanese e-commerce giant</b> and a <b>Fintech platform serving 80 million users</b>, Feeham’s track record in mission-critical environments is extensive. 
                </p>

                <p className="font-body italic text-sm text-center my-4">
                  "Programming is more art than engineering. And a programmer is nothing but an artist who draws solutions."
                </p>
              </div>
            </div>
          </article>

          {/* --- RIGHT SIDE: QUICK LINKS & INDEX --- */}
          <aside className="lg:col-span-4 h-full border-l-2 border-[#2c2a25] pl-6 ml-2">
            <div className="flex flex-col items-center">
              
              <div className="relative w-full transition-transform hover:rotate-0" style={{ transform: 'rotate(2deg)' }}>
                <div className="absolute -top-3 -left-4 w-12 h-6 bg-cyan-400/30 border border-cyan-300/10 backdrop-blur-[1px] z-30 rotate-[-25deg]"></div>
                <div className="absolute -top-2 right-12 w-10 h-6 bg-cyan-400/30 border border-cyan-300/10 backdrop-blur-[1px] z-30 rotate-[15deg]"></div>

                <div className="bg-white p-[2px] shadow-xl" style={{ clipPath: resumeRipPath }}>
                  <div 
                    className="bg-[#f2f0e6] p-5 pr-8 min-h-[350px]" 
                    style={{ 
                      clipPath: resumeRipPath,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`
                    }}
                  >
                    <div className="border-b-2 border-[#2c2a25] mb-4 pb-1">
                      <h2 className="font-headline font-black text-3xl md:text-4xl tracking-tighter uppercase leading-none">
                        QUICK LINKS
                      </h2>
                    </div>

                    <div className="font-times text-[11px] md:text-[12.5px] leading-[1.4] text-justify text-[#2c2a25] space-y-4">
                      <p>Feeham's personal works and opensource projects are a good place to find his skills and programming detail.</p>
                      <p>In his <a href="#" className="underline decoration-2 font-bold">GitHub Profile</a>, he contributes consistently to building robust backend utilities.</p>
                      <p>For a detailed professional history, his <a href="#" className="underline decoration-2 font-bold">LinkedIn Profile</a> provides a view into his journey.</p>
                      <p>Alternatively, <a href="#" className="underline decoration-2 font-bold italic">Download the Resume</a> for a concise summary of his technical expertise.</p>
                    </div>
                    
                    <div className="mt-8 pt-2 border-t border-[#2c2a25]/20 text-[7px] uppercase tracking-tighter font-bold opacity-60">
                      End of Dispatches · Reference 402-A
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 w-full">
                <h4 className="font-headline text-sm font-black uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 mb-3">Today's Index</h4>
                <ul className="font-headline text-xs font-bold uppercase space-y-3">
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]"><span>Professional experience</span><span>P. 2</span></li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]"><span>Skills & Expertise</span><span>P. 4</span></li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]"><span>Education</span><span>P. 5</span></li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]"><span>Programming skills</span><span>P. 7</span></li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]"><span>Personal projects</span><span>P. 9</span></li>
                  <li className="flex justify-between border-b border-dashed border-[#2c2a25]"><span>Others</span><span></span></li>
                </ul>
              </div>
            </div>
          </aside>
        </main>

        <hr className="border-t-[3px] border-[#2c2a25] mt-2 mb-1" />

        {/* --- PROFESSIONAL EXPERIENCES SECTION --- */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
            PROFESSIONAL EXPERIENCES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Exabyting */}
            <div className="md:border-r-2 md:border-[#2c2a25] md:pr-6">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">Exabyting</h5>
                <span className="text-[12px] md:text-[13px] font-bold font-times">Oct 2025 – Pres.</span>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-grow">
                  <p className="font-times text-[10px] leading-snug text-justify mb-2">
                    <b className="block text-[13px] md:text-[14px] leading-none mb-1">Software Engineer</b>
                  </p>
                  <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                    Working on one of Bangladesh&apos;s most used applications with an 80 million user base, contributing to end-to-end development across multiple microservices. Ensuring optimization and coding standards, while maintaining code quality and knowledge sharing.
                  </p>
                  <ul className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2 list-disc pl-4">
                    <li>Gathere requirements from the client and develop business logic & REST API&apos;s ensuring optimization, coding-standards & test coverage through Unit and Integration testing.</li>
                  </ul>
                  <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-tighter border-t border-dashed border-[#2c2a25] pt-1">
                    Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: BJIT Limited */}
            <div className="md:border-r-2 md:border-[#2c2a25] md:px-6">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">BJIT Limited</h5>
                <span className="text-[12px] md:text-[13px] font-bold font-times">Aug 2023 – Sep 2025</span>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-grow">
                  <p className="font-times text-[10px] leading-snug text-justify mb-2">
                    <b className="block text-[13px] md:text-[14px] leading-none mb-1">Software Engineer</b>
                  </p>
                  <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                    Worked as an offshore member of a global team of a Japanese e-commerce giant platform&apos;s microservices projects. Responsibilities include -
                  </p>
                  <ul className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2 list-disc pl-4">
                    <li>Contributed in BFF (Backend for Frontend) and Generic Gateway application that communicates with various microservices & aggregates results.</li>
                    <li>Contributed in a migration of projects from Reactive (Java 11) to Virtual threads (Java 21).</li>
                  </ul>
                  <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-tighter border-t border-dashed border-[#2c2a25] pt-1">
                    Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Astha IT */}
            <div className="md:pl-6">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">Astha IT</h5>
                <span className="text-[12px] md:text-[13px] font-bold font-times">Aug 2022 – Nov 2022</span>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-grow">
                  <p className="font-times text-[10px] leading-snug text-justify mb-2">
                    <b className="block text-[13px] md:text-[14px] leading-none mb-1">Intern Software Engineer</b>
                  </p>
                  <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
                    Gained foundational experience in .NET and React development with C# and Javascript through hands-on training and project involvement.
                  </p>
                  <ul className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2 list-disc pl-4">
                    <li>Focused on learning core concepts of software lifecycle, front end & back end development.</li>
                    <li>Contributed to projects and participated in various challenges.</li>
                  </ul>
                  <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-tighter border-t border-dashed border-[#2c2a25] pt-1">
                    Tech stack: .NET, C#, React, Javascript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        {/* --- SKILLS & EXPERTISE --- */}
        <section className="flex flex-col gap-4">
          <div className="skills-collage p-2 md:p-4">
            <div className="skills-float-wrap">
              {/* Large scraps with actual resume content */}
              <div className="paper-scrap w-[230px] md:w-[280px]" style={{ transform: "rotate(-8deg) translateY(4px)" }}>
                <div className="paper-edge tear-mask-a">
                  <div className="paper-inner paper-inner--tan newsprint tear-mask-a p-4">
                    <div className="scrap-title mb-2">Programming</div>
                    <div className="scrap-body scrap-columns">
                      <p><b>Languages</b> Java, Javascript, C#</p>
                      <p><b>Frameworks</b> Spring Boot, ReactJS, Bootstrap</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[250px] md:w-[310px]" style={{ transform: "rotate(5deg) translateY(-8px)" }}>
                <div className="paper-edge tear-mask-b">
                  <div className="paper-inner newsprint tear-mask-b p-4">
                    <div className="scrap-title mb-2">Database &amp; ORM</div>
                    <div className="scrap-body">
                      PostgreSQL, MySQL, JPA, Hibernate
                      <div className="mt-2 scrap-title" style={{ fontSize: "11px", letterSpacing: "0.16em" }}>Miscellaneous</div>
                      <div className="mt-1">Data structures, Algorithms, Design patterns</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[210px] md:w-[260px]" style={{ transform: "rotate(12deg) translateY(10px)" }}>
                <div className="paper-edge tear-mask-c">
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

              <div className="paper-scrap w-[220px] md:w-[260px]" style={{ transform: "rotate(-6deg) translateY(-2px)" }}>
                <div className="paper-edge tear-mask-d">
                  <div className="paper-inner paper-inner--green newsprint tear-mask-d p-4">
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
              <div className="paper-scrap w-[180px] md:w-[210px]" style={{ transform: "rotate(2deg) translateY(14px)" }}>
                <div className="paper-edge tear-mask-b">
                  <div className="paper-inner paper-inner--tan newsprint tear-mask-b p-3">
                    <div className="scrap-title mb-1">NEWS</div>
                    <div className="scrap-body scrap-columns" style={{ fontSize: "11px" }}>
                      <p>Classified listings and dispatches from the engineering desk.</p>
                      <p>Filed under: platforms, patterns, and production craft.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[170px] md:w-[200px]" style={{ transform: "rotate(-10deg) translateY(-10px)" }}>
                <div className="paper-edge tear-mask-a">
                  <div className="paper-inner newsprint tear-mask-a p-3">
                    <div className="scrap-title mb-1">TOP NEWS</div>
                    <div className="scrap-body scrap-columns" style={{ fontSize: "11px" }}>
                      <p>Solid fundamentals. Practical tooling. Fast iteration.</p>
                      <p>Hand-set in serif, printed on worn paper.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="paper-scrap w-[160px] md:w-[190px]" style={{ transform: "rotate(9deg) translateY(6px)" }}>
                <div className="paper-edge tear-mask-c">
                  <div className="paper-inner paper-inner--green newsprint tear-mask-c p-3">
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
        <section className="flex flex-col gap-4">
          <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
            EDUCATION
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

            <aside className="lg:col-span-4 border-l-2 border-[#2c2a25] pl-6 ml-2">
              <div className="p-0.5 border-[3px] border-[#2c2a25] bg-[#e8e1cf] shadow-lg">
                <div className="relative w-full aspect-[4/3] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"
                    alt="University archival photograph"
                    className="object-cover w-full h-full mix-blend-multiply"
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

        {/* --- PROGRAMMING SKILLS --- */}
        <section className="flex flex-col gap-3">
          <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
            PROGRAMMING SKILLS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <article className="lg:col-span-8 font-times text-[13px] md:text-[14px] leading-relaxed text-justify">
              <p>
                My passion for DSA is exemplified through my expertise on LeetCode, GFG, and HackerRank, where I have solved over 700 problems. I’m committed to expanding my knowledge and skills in DSA to continue tackling complex problems. See my online Judges profiles &amp; stats:
              </p>
              <p className="mt-3 border-t border-dashed border-[#2c2a25] pt-2 font-headline text-[11px] md:text-[12px] uppercase tracking-widest font-bold">
                Leetcode: Handle - Feeham · Hackerrank: Handle - Feeham · GFG: Handle - Feeham
              </p>
            </article>

            <aside className="lg:col-span-4 border-l-2 border-[#2c2a25] pl-6 ml-2">
              <h4 className="font-headline text-sm font-black uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 mb-3">Editor’s Note</h4>
              <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify">
                A steady appetite for algorithms, careful problem decomposition, and consistency in practice — the quiet habits behind reliable engineering.
              </p>
            </aside>
          </div>
        </section>

        <hr className="border-t-[3px] border-[#2c2a25] my-2" />

        {/* --- PERSONAL PROJECTS --- */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
            PERSONAL PROJECTS
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

            <aside className="lg:col-span-4 border-l-2 border-[#2c2a25] pl-6 ml-2">
              <div className="p-0.5 border-[3px] border-[#2c2a25] bg-[#e8e1cf] shadow-lg">
                <div className="relative w-full aspect-[4/3] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                    alt="Project editorial photograph"
                    className="object-cover w-full h-full mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="mt-6 p-0.5 border-[3px] border-[#2c2a25] bg-[#e8e1cf] shadow-lg">
                <div className="relative w-full aspect-[4/3] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
                  <img
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=600&auto=format&fit=crop"
                    alt="Engineering desk photograph"
                    className="object-cover w-full h-full mix-blend-multiply"
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

        {/* --- REVISED FOOTER --- */}
        <section className="flex items-center justify-between pb-4">
           <div />
           <div className="text-right">
              <div className="font-headline text-[10px] font-black uppercase border-b border-[#2c2a25] mb-1">Shartaz Feeham</div>
              <div className="font-times text-[9px] italic">All Rights Reserved © 2022-2026</div>
           </div>
        </section>
      </div>
    </div>
  );
}
