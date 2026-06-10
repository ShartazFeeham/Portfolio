import { Link } from 'react-router-dom';

export default function NavButton({ to, onClick, children, icon }) {
  const className = 'cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] active:bg-[#e8dcc8]/70 active:text-[#2c2a25] transition-all duration-300 touch-manipulation';

  if (to) {
    return <Link to={to} className={className}>{icon}{children}</Link>;
  }
  return <button onClick={onClick} className={className}>{icon}{children}</button>;
}
