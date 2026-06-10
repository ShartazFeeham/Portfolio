export default function Toast({ message, visible }) {
  if (!visible) return null;
  return (
    <div className="fixed top-6 right-6 z-50 animate-[fadeInUp_0.3s_ease-out]">
      <div className="bg-[#2c2a25] text-[#e8dcc8] px-5 py-3 rounded-sm shadow-lg flex items-center gap-2 font-mono text-sm">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        {message}
      </div>
    </div>
  );
}
