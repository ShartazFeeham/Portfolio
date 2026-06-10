export default function EdgeShading() {
  return (
    <>
      {/* Right edge — mobile */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 right-0 w-10 md:hidden"
        style={{ background: 'linear-gradient(270deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0) 78%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 right-0 w-2 opacity-70 md:hidden"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.10) 100%)' }} />
      {/* Right edge — desktop */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 right-0 w-10 md:w-12 hidden md:block"
        style={{ background: 'linear-gradient(270deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 35%, rgba(0,0,0,0) 78%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 right-0 w-[1px] opacity-50 hidden md:block"
        style={{ background: 'rgba(0,0,0,0.18)' }} />
      {/* Left edge — mobile */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 left-0 w-10 md:hidden"
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0) 78%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 left-0 w-2 opacity-70 md:hidden"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.10) 100%)' }} />
      {/* Left edge — desktop */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 left-0 w-7 md:w-9 hidden md:block"
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 35%, rgba(0,0,0,0) 78%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 left-0 w-[1px] opacity-50 hidden md:block"
        style={{ background: 'rgba(0,0,0,0.18)' }} />
      {/* Top edge — mobile */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-0 h-8 md:hidden"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0) 78%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-0 h-2 opacity-70 md:hidden"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 45%, rgba(0,0,0,0.10) 100%)' }} />
      {/* Top edge — desktop */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-0 h-7 md:h-9 hidden md:block"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0) 78%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] opacity-60 hidden md:block"
        style={{ background: 'rgba(255,255,255,0.30)' }} />
      {/* Bottom edge — mobile */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 md:hidden"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 32%, rgba(0,0,0,0) 82%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 bottom-0 h-2 opacity-70 md:hidden"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 45%, rgba(0,0,0,0.10) 100%)' }} />
      {/* Bottom edge — desktop */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 bottom-0 h-8 md:h-10 hidden md:block"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.09) 36%, rgba(0,0,0,0) 80%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 bottom-0 h-[1px] opacity-50 hidden md:block"
        style={{ background: 'rgba(0,0,0,0.18)' }} />
      {/* Corner gradient */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/10 to-transparent" />
    </>
  );
}
