import { useState } from 'react';

export default function SearchBar({ value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex-1 flex justify-center">
      <div className={`relative flex items-center border rounded-sm w-full md:w-80 transition-colors duration-200 ${focused ? 'border-[#e8dcc8]/60' : 'border-[#e8dcc8]/20'}`}>
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#e8dcc8]/40 absolute left-2.5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder="Search posts..." className="bg-transparent text-base md:text-xs font-mono text-[#e8dcc8]/80 placeholder:text-[#e8dcc8]/30 pl-8 pr-3 py-1.5 w-full outline-none" />
        {value && (
          <button onClick={() => onChange('')} className="absolute right-2 text-[#e8dcc8]/40 hover:text-[#e8dcc8] transition-colors">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}
