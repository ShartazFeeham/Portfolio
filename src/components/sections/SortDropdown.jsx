import { useState, useEffect, useRef } from 'react';
import { SORT_OPTIONS } from '../../data/sortOptions';

export default function SortDropdown({ sortKey, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const btnBase = "cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] active:bg-[#e8dcc8]/70 active:text-[#2c2a25] transition-all duration-300 touch-manipulation";

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className={btnBase}>
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={SORT_OPTIONS.find(o => o.key === sortKey).icon}/></svg>
        <span className="hidden sm:inline">Sort</span>
        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[#2c2a25] border border-[#e8dcc8]/20 rounded-sm overflow-hidden z-50 shadow-xl min-w-[160px]">
          {SORT_OPTIONS.map(opt => (
            <button key={opt.key} onClick={() => { onChange(opt.key); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-xs font-mono flex items-center gap-2.5 transition-colors ${sortKey === opt.key ? 'bg-[#e8dcc8]/10 text-[#e8dcc8]' : 'text-[#e8dcc8]/60 hover:bg-[#e8dcc8]/5 hover:text-[#e8dcc8]/80'}`}>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={opt.icon}/></svg>
              {opt.label}{sortKey === opt.key && <span className="ml-auto text-[#e8dcc8]/40">&#10003;</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
