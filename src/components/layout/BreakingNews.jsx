export function BreakingNews() {
  return (
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
                <span className="mb-0.5 border-b border-[#ffebcc]/50 pb-0.5 text-[10px] uppercase">
                  WANTED
                </span>
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
            <span className="float-left text-5xl font-headline font-black leading-none pr-2 pt-1">
              B
            </span>
            ackend-focused software engineer with over 3 years of professional experience, Shartaz
            Feeham is a specialist in crafting highly scalable and resilient distributed systems.
            His technical arsenal is centered on the <b>Java/Spring Boot</b> ecosystem,
            complemented by a mastery of <b>Microservices, Kafka, Docker, and PostgreSQL</b>.
            Having contributed to the architectural backbone of a{" "}
            <b>billion-dollar Japanese e-commerce giant</b> and a{" "}
            <b>Fintech platform serving 80 million users</b>, Feeham’s track record in
            mission-critical environments is extensive.
          </p>

          <p className="font-body italic text-sm text-center my-4">
            "Programming is more art than engineering. And a programmer is nothing but an artist
            who draws solutions."
          </p>
        </div>
      </div>
    </article>
  );
}

