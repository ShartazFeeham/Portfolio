import { VintageLetter } from "../VintageLetter";

export function ProfessionalExperienceSection() {
  return (
    <section id="professional-experience" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">PROFESSIONAL EXPERIENCES</a>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:border-r-2 md:border-[#2c2a25] md:pr-6">
          <div className="flex justify-between items-start mb-2">
            <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">
              Exabyting
            </h5>
            <span className="text-[12px] md:text-[13px] font-bold font-times">
              Oct 2025 – Pres.
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex-grow">
              <p className="font-times text-[10px] leading-snug text-justify mb-2">
                <b className="block text-[13px] md:text-[14px] leading-none mb-1">
                  Software Engineer
                </b>
              </p>
              <VintageLetter className="mb-2">
                <p>
                  Working on one of Bangladesh&apos;s most used applications with an 80 million
                  user base, contributing to end-to-end development across multiple microservices.
                  Ensuring optimization and coding standards, while maintaining code quality and
                  knowledge sharing.
                </p>
                <ul>
                  <li>
                    Gathere requirements from the client and develop business logic &amp; REST
                    API&apos;s ensuring optimization, coding-standards &amp; test coverage through
                    Unit and Integration testing.
                  </li>
                </ul>
              </VintageLetter>
              <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-tighter border-t border-dashed border-[#2c2a25] pt-1">
                Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.
              </p>
            </div>
          </div>
        </div>

        <div className="md:border-r-2 md:border-[#2c2a25] md:px-6">
          <div className="flex justify-between items-start mb-2">
            <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">
              BJIT Limited
            </h5>
            <span className="text-[12px] md:text-[13px] font-bold font-times">
              Aug 2023 – Sep 2025
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex-grow">
              <p className="font-times text-[10px] leading-snug text-justify mb-2">
                <b className="block text-[13px] md:text-[14px] leading-none mb-1">
                  Software Engineer
                </b>
              </p>
              <VintageLetter className="mb-2">
                <p>
                  Worked as an offshore member of a global team of a Japanese e-commerce giant
                  platform&apos;s microservices projects. Responsibilities include -
                </p>
                <ul>
                  <li>
                    Contributed in BFF (Backend for Frontend) and Generic Gateway application that
                    communicates with various microservices &amp; aggregates results.
                  </li>
                  <li>
                    Contributed in a migration of projects from Reactive (Java 11) to Virtual
                    threads (Java 21).
                  </li>
                </ul>
              </VintageLetter>
              <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-tighter border-t border-dashed border-[#2c2a25] pt-1">
                Tech stack: Java, Spring Boot, Microservices, PostgreSQL, Git, Jira, Confluence.
              </p>
            </div>
          </div>
        </div>

        <div className="md:pl-6">
          <div className="flex justify-between items-start mb-2">
            <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">
              Astha IT
            </h5>
            <span className="text-[12px] md:text-[13px] font-bold font-times">
              Aug 2022 – Nov 2022
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex-grow">
              <p className="font-times text-[10px] leading-snug text-justify mb-2">
                <b className="block text-[13px] md:text-[14px] leading-none mb-1">
                  Intern Software Engineer
                </b>
              </p>
              <VintageLetter className="mb-2">
                <p>
                  Gained foundational experience in .NET and React development with C# and
                  Javascript through hands-on training and project involvement.
                </p>
                <ul>
                  <li>
                    Focused on learning core concepts of software lifecycle, front end &amp; back end
                    development.
                  </li>
                  <li>Contributed to projects and participated in various challenges.</li>
                </ul>
              </VintageLetter>
              <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-tighter border-t border-dashed border-[#2c2a25] pt-1">
                Tech stack: .NET, C#, React, Javascript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

