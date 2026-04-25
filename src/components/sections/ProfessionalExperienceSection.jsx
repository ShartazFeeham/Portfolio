import React, { useEffect, useRef, useState, useMemo } from "react";
import { FantasyExperienceBook } from "../FantasyExperienceBook";

function AnimatedBookEntry({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset animation on scroll out so it replays on arrival
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0 blur-none skew-x-0 skew-y-0"
          : animationClass
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const EFFECTS = [
  "opacity-0 translate-y-16",      // Fade Up
  "opacity-0 scale-75",            // Zoom In
  "opacity-0 rotate-12 scale-90",  // Spin Zoom
];

export function ProfessionalExperienceSection() {
  const chosenEffect = useMemo(() => EFFECTS[Math.floor(Math.random() * EFFECTS.length)], []);

  return (
    <section id="professional-experience" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">PROFESSIONAL EXPERIENCES</a>
      </h2>

      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-y-6">
        {/* Real Book 1 */}
        <div className="md:border-r-2 md:border-[#2c2a25] md:px-[10px]">
          <AnimatedBookEntry animationClass={chosenEffect}>
            <div className="mb-2 flex justify-between gap-2">
              <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">
                Exabyting
              </h5>
              <span className="shrink-0 text-right text-[12px] font-bold font-times md:text-[13px]">
                Oct 2025 – Pres.
              </span>
            </div>
            <p className="font-times mb-2 text-[10px] leading-snug text-justify">
              <b className="mb-1 block text-[13px] leading-none md:text-[14px]">Software Engineer</b>
            </p>
            <FantasyExperienceBook
              volumeLine="Experiance Diary Vol 3"
              companyLine="Exabyting"
              coverSubtitle="Oct 2025 - present"
            >
              <p className="m-0">
                Working on one of Bangladesh&apos;s most used applications with an 80 million user
                base, contributing to end-to-end development across multiple microservices. Ensuring
                optimization and coding standards, while maintaining code quality and knowledge
                sharing.
              </p>
              <p className="mb-0 mt-2">
                Gathere requirements from the client and develop business logic &amp; REST
                API&apos;s ensuring optimization, coding-standards &amp; test coverage through Unit
                and Integration testing.
              </p>
              <p className="fantasy-book-tech">
                Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.
              </p>
            </FantasyExperienceBook>
          </AnimatedBookEntry>
        </div>

        {/* Real Book 2 */}
        <div className="md:border-r-2 md:border-[#2c2a25] md:px-[10px]">
          <AnimatedBookEntry animationClass={chosenEffect} delay={150}>
            <div className="mb-2 flex justify-between gap-2">
              <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">
                BJIT Limited
              </h5>
              <span className="shrink-0 text-right text-[12px] font-bold font-times md:text-[13px]">
                Aug 2023 – Sep 2025
              </span>
            </div>
            <p className="font-times mb-2 text-[10px] leading-snug text-justify">
              <b className="mb-1 block text-[13px] leading-none md:text-[14px]">Software Engineer</b>
            </p>
            <FantasyExperienceBook
              volumeLine="Experiance Diary Vol 2"
              companyLine="BJIT Limited"
              coverSubtitle="Aug 2023 – Sep 2025"
            >
              <p className="m-0">
                Worked as an offshore member of a global team of a Japanese e-commerce giant
                platform&apos;s microservices projects. Responsibilities include -
              </p>
              <ul className="mb-0 mt-2">
                <li>
                  Contributed in BFF (Backend for Frontend) and Generic Gateway application that
                  communicates with various microservices &amp; aggregates results.
                </li>
                <li>
                  Contributed in a migration of projects from Reactive (Java 11) to Virtual threads
                  (Java 21).
                </li>
              </ul>
              <p className="fantasy-book-tech">
                Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.
              </p>
            </FantasyExperienceBook>
          </AnimatedBookEntry>
        </div>

        {/* Real Book 3 */}
        <div className="md:px-[10px]">
          <AnimatedBookEntry animationClass={chosenEffect} delay={300}>
            <div className="mb-2 flex justify-between gap-2">
              <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">
                Astha IT
              </h5>
              <span className="shrink-0 text-right text-[12px] font-bold font-times md:text-[13px]">
                Aug 2022 – Nov 2022
              </span>
            </div>
            <p className="font-times mb-2 text-[10px] leading-snug text-justify">
              <b className="mb-1 block text-[13px] leading-none md:text-[14px]">
                Intern Software Engineer
              </b>
            </p>
            <FantasyExperienceBook
              volumeLine="Experiance Diary Vol 1"
              companyLine="Astha IT"
              coverSubtitle="Aug 2022 – Nov 2022"
            >
              <p className="m-0">
                Gained foundational experience in .NET and React development with C# and Javascript
                through hands-on training and project involvement.
              </p>
              <ul className="mb-0 mt-2">
                <li>
                  Focused on learning core concepts of software lifecycle, front end &amp; back end
                  development.
                </li>
                <li>Contributed to projects and participated in various challenges.</li>
              </ul>
              <p className="fantasy-book-tech">Tech stack: .NET, C#, React, Javascript</p>
            </FantasyExperienceBook>
          </AnimatedBookEntry>
        </div>
      </div>
    </section>
  );
}
