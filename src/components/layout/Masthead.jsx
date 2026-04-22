export function Masthead({ issueDateLabel }) {
  return (
    <header className="flex flex-col items-center w-full border-t border-[#2c2a25] pt-4">
      <div className="w-full flex justify-between items-center mb-1">
        <div className="hidden md:block w-32 text-[9px] md:text-[10px] leading-[1.1] font-bold uppercase text-left">
          Largest Tech
          <br />
          Circulation
          <br />
          In South Asia
          <br />
          <span className="text-[7px] font-normal tracking-tighter opacity-70">Est. MCMXCIII</span>
        </div>

        <h1 className="font-masthead masthead-title text-center whitespace-nowrap px-4 leading-[1.0] flex-1">
          The <span className="drop-letter">s</span>ilicon{" "}
          <span className="drop-letter">t</span>imes
        </h1>

        <div className="hidden md:block w-32 text-[9px] md:text-[10px] leading-[1.1] font-bold uppercase text-right">
          Innovating
          <br />
          Since Birth,
          <br />
          Pages 15 and 16
          <br />
          <span className="text-[7px] font-normal tracking-tighter opacity-70">Only Today</span>
        </div>
      </div>

      <div className="w-full border-y-[2px] border-[#2c2a25] flex justify-between items-center py-1 px-4 mb-8 font-headline text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 gap-4">
        <span className="w-1/3 text-left">{issueDateLabel}</span>

        <span className="w-1/3 text-center masthead-ticker">
          <span className="masthead-ticker__track">
            <span className="masthead-ticker__item">
              Backend-focused software engineer with over 3 years of professional experience,
              Shartaz Feeham is a specialist in crafting highly scalable and resilient distributed
              systems. His technical arsenal is centered on the Java/Spring Boot ecosystem,
              complemented by a mastery of Microservices, Kafka, Docker, and PostgreSQL. Having
              contributed to the architectural backbone of a billion-dollar Japanese e-commerce
              giant and a Fintech platform serving 80 million users, Feeham’s track record in
              mission-critical environments is extensive
            </span>
            <span className="masthead-ticker__item" aria-hidden="true">
              Backend-focused software engineer with over 3 years of professional experience,
              Shartaz Feeham is a specialist in crafting highly scalable and resilient distributed
              systems. His technical arsenal is centered on the Java/Spring Boot ecosystem,
              complemented by a mastery of Microservices, Kafka, Docker, and PostgreSQL. Having
              contributed to the architectural backbone of a billion-dollar Japanese e-commerce
              giant and a Fintech platform serving 80 million users, Feeham’s track record in
              mission-critical environments is extensive
            </span>
          </span>
        </span>

        <span className="w-1/3 text-right">VOL. 127 · NO. 39</span>
      </div>
    </header>
  );
}

