import { useMemo } from 'react';
import ExperienceCard from './ExperienceCard';

const EFFECTS = [
  'opacity-0 translate-y-16',
  'opacity-0 scale-75',
  'opacity-0 rotate-12 scale-90',
];

const EXPERIENCES = [
  {
    company: 'Exabyting', period: 'Oct 2025 – Pres.', title: 'Software Engineer',
    volumeLine: 'Experiance Diary Vol 3', coverSubtitle: 'Oct 2025 - present',
    content: (
      <>
        <p className="m-0">Working on one of Bangladesh&apos;s most used applications with an 80 million user base, contributing to end-to-end development across multiple microservices. Ensuring optimization and coding standards, while maintaining code quality and knowledge sharing.</p>
        <p className="mb-0 mt-2">Gathere requirements from the client and develop business logic &amp; REST API&apos;s ensuring optimization, coding-standards &amp; test coverage through Unit and Integration testing.</p>
        <p className="fantasy-book-tech">Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.</p>
      </>
    ),
  },
  {
    company: 'BJIT Limited', period: 'Aug 2023 – Sep 2025', title: 'Software Engineer',
    volumeLine: 'Experiance Diary Vol 2', coverSubtitle: 'Aug 2023 – Sep 2025',
    content: (
      <>
        <p className="m-0">Worked as an offshore member of a global team of a Japanese e-commerce giant platform&apos;s microservices projects. Responsibilities include -</p>
        <ul className="mb-0 mt-2">
          <li>Contributed in BFF (Backend for Frontend) and Generic Gateway application that communicates with various microservices &amp; aggregates results.</li>
          <li>Contributed in a migration of projects from Reactive (Java 11) to Virtual threads (Java 21).</li>
        </ul>
        <p className="fantasy-book-tech">Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.</p>
      </>
    ),
  },
  {
    company: 'Astha IT', period: 'Aug 2022 – Nov 2022', title: 'Intern Software Engineer',
    volumeLine: 'Experiance Diary Vol 1', coverSubtitle: 'Aug 2022 – Nov 2022',
    content: (
      <>
        <p className="m-0">Gained foundational experience in .NET and React development with C# and Javascript through hands-on training and project involvement.</p>
        <ul className="mb-0 mt-2">
          <li>Focused on learning core concepts of software lifecycle, front end &amp; back end development.</li>
          <li>Contributed to projects and participated in various challenges.</li>
        </ul>
        <p className="fantasy-book-tech">Tech stack: .NET, C#, React, Javascript</p>
      </>
    ),
  },
];

export function ProfessionalExperienceSection() {
  const chosenEffect = useMemo(() => EFFECTS[Math.floor(Math.random() * EFFECTS.length)], []);

  return (
    <section id="professional-experience" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">PROFESSIONAL EXPERIENCES</a>
      </h2>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-y-6">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={exp.company} {...exp} animationClass={chosenEffect} delay={i * 150}
            className={i < EXPERIENCES.length - 1 ? 'md:border-r-2 md:border-[#2c2a25] md:px-[10px]' : 'md:px-[10px]'} />
        ))}
      </div>
    </section>
  );
}
