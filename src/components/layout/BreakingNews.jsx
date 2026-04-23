import { useEffect, useRef, useState } from "react";

const BREAKING_NAME = "Shartaz Feeham";
/** Active “wave” crosses the name in this many ms */
const NAME_SWEEP_MS = 500;
/** Full loop: sweep + pause before repeat */
const NAME_CYCLE_MS = 3000;
/** Width of the bump (Gaussian σ); higher = more neighbor letters pick up scale */
const NAME_GAUSS_SIGMA = 0.72;
/** Peak scale bonus at the center of the bump (e.g. 0.34 → max scale ~1.34) */
const NAME_GAUSS_PEAK = 0.34;

function letterScale(i, n, phaseMs, reduceMotion) {
  if (reduceMotion || n <= 1) return 1;
  if (phaseMs >= NAME_SWEEP_MS) return 1;
  const waveCenter = (phaseMs / NAME_SWEEP_MS) * (n - 1);
  const d = i - waveCenter;
  return (
    1 +
    NAME_GAUSS_PEAK *
      Math.exp(-(d * d) / (2 * NAME_GAUSS_SIGMA * NAME_GAUSS_SIGMA))
  );
}

function BreakingNameHeading() {
  const [phaseMs, setPhaseMs] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const startMs = useRef(
    typeof performance !== "undefined" ? performance.now() : 0,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    let id;
    const tick = () => {
      const t = (performance.now() - startMs.current) % NAME_CYCLE_MS;
      setPhaseMs(t);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [reduceMotion]);

  const chars = BREAKING_NAME.split("");
  const n = chars.length;

  return (
    <h4
      className="font-headline text-2xl md:text-4xl font-black uppercase tracking-normal"
      aria-label={BREAKING_NAME}
    >
      <span className="inline-block" aria-hidden="true">
        {chars.map((ch, i) => {
          const s = letterScale(i, n, phaseMs, reduceMotion);
          return (
            <span
              key={i}
              className="inline-block align-baseline"
              style={{
                transform: `scale(${s})`,
                transformOrigin: "50% 60%",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          );
        })}
      </span>
    </h4>
  );
}

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
          <BreakingNameHeading />
        </div>
      </div>

      <div className="block text-sm md:text-base text-justify leading-relaxed">
        <div className="float-left mr-6 mb-2 w-1/4 max-w-[180px]">
          <div className="p-0.5 border-[4px] border-[#2c2a25] bg-[#e8e1cf] relative shadow-lg">
            <div className="wanted-seal-pendulum wax-seal absolute -bottom-7 -right-4 top-auto z-20 flex h-16 w-16 items-center justify-center rounded-full border-double border-2 border-[#ffebcc]/40 md:-top-4 md:bottom-auto md:-right-4">
              <div className="text-[#ffebcc] font-headline font-black text-center leading-none flex flex-col items-center">
                <span className="mb-0.5 border-b border-[#ffebcc]/50 pb-0.5 text-[10px] uppercase">
                  WANTED
                </span>
                <span className="text-xs">$$$</span>
              </div>
            </div>

            <div className="relative w-full aspect-[4/5] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
              <img
                src="/images/portrait.jpg"
                alt="Portrait of Shartaz Feeham"
                className="object-cover w-full h-full mix-blend-multiply"
                decoding="async"
                fetchPriority="high"
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
