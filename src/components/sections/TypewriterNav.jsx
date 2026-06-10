export default function TypewriterNav({ onPrev, onNext, hasPrev, hasNext }) {
  return (
    <div className="absolute top-[-40px] left-[-5%] right-[-5%] flex justify-between px-4 z-30 pointer-events-none">
      <button onClick={onPrev} disabled={!hasPrev}
        className={`pointer-events-auto transition-all duration-300 font-headline font-black uppercase px-4 py-2 border-2 border-[#2c2a25] flex items-center gap-2 ${
          !hasPrev ? 'opacity-30 cursor-not-allowed bg-transparent text-[#2c2a25]' : 'bg-[#2c2a25] text-[#e8e1cf] hover:bg-transparent hover:text-[#2c2a25] shadow-lg hover:shadow-none'}`}>
        <span className="text-lg">←</span><span className="hidden md:inline">PREV</span>
      </button>
      <button onClick={onNext} disabled={!hasNext}
        className={`pointer-events-auto transition-all duration-300 font-headline font-black uppercase px-4 py-2 border-2 border-[#2c2a25] flex items-center gap-2 ${
          !hasNext ? 'opacity-30 cursor-not-allowed bg-transparent text-[#2c2a25]' : 'bg-[#2c2a25] text-[#e8e1cf] hover:bg-transparent hover:text-[#2c2a25] shadow-lg hover:shadow-none'}`}>
        <span className="hidden md:inline">NEXT</span><span className="text-lg">→</span>
      </button>
    </div>
  );
}
