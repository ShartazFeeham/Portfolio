import { useEffect, useRef, useState } from 'react';

const NAME = 'Shartaz Feeham';
const SWEEP_MS = 500;
const CYCLE_MS = 3000;
const GAUSS_SIGMA = 0.72;
const GAUSS_PEAK = 0.34;

function letterScale(i, n, phaseMs, reduceMotion) {
  if (reduceMotion || n <= 1) return 1;
  if (phaseMs >= SWEEP_MS) return 1;
  const waveCenter = (phaseMs / SWEEP_MS) * (n - 1);
  const d = i - waveCenter;
  return 1 + GAUSS_PEAK * Math.exp(-(d * d) / (2 * GAUSS_SIGMA * GAUSS_SIGMA));
}

export default function BreakingNameHeading() {
  const [phaseMs, setPhaseMs] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const startMs = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    startMs.current = performance.now();
    let id;
    const tick = () => {
      setPhaseMs((performance.now() - startMs.current) % CYCLE_MS);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [reduceMotion]);

  const chars = NAME.split('');
  const n = chars.length;

  return (
    <h4 className="font-headline text-2xl md:text-4xl font-black uppercase tracking-normal" aria-label={NAME}>
      <span className="inline-block" aria-hidden="true">
        {chars.map((ch, i) => {
          const s = letterScale(i, n, phaseMs, reduceMotion);
          return (
            <span key={i} className="inline-block align-baseline"
              style={{ transform: `scale(${s})`, transformOrigin: '50% 60%' }}>
              {ch === ' ' ? ' ' : ch}
            </span>
          );
        })}
      </span>
    </h4>
  );
}
