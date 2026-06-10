import { Link } from 'react-router-dom';

const BTN_BASE = "cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] active:bg-[#e8dcc8]/70 active:text-[#2c2a25] transition-all duration-300 touch-manipulation";

export default function BlogPageHeader({ children }) {
  return (
    <header className="bg-[#2c2a25] text-[#e8dcc8] py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif tracking-tight" style={{ fontFamily: '"Courier Prime", monospace' }}>
          SHARTAZ FEEHAM'S DIARY
        </h1>
        <nav className="flex items-center gap-3 mt-6">
          <Link to="/" className={BTN_BASE}>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Home
          </Link>
          {children}
        </nav>
      </div>
    </header>
  );
}
