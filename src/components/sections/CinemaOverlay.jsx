import CinemaFilmStrip from './CinemaFilmStrip';
import CinemaHeader from './CinemaHeader';
import CinemaDock from './CinemaDock';
import CinemaExcerpt from './CinemaExcerpt';

export default function CinemaOverlay({ isOpen, isAnimatingOut, onClose, visibleBlogs, visibleCount, onPrev, onNext, onCardClick, centerIndex, totalBlogs }) {
  return (
    <div className={`bioscope-cinema ${isOpen && !isAnimatingOut ? 'bioscope-cinema--open' : ''} ${isAnimatingOut ? 'bioscope-cinema--closing' : ''}`}>
      <div className="cinema-bg"><div className="cinema-grain" /></div>
      <CinemaFilmStrip position="top" />
      <CinemaFilmStrip position="bottom" />
      <button className="cinema-close" onClick={onClose} aria-label="Close bioscope">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>
      <CinemaHeader />
      <CinemaDock visibleBlogs={visibleBlogs} visibleCount={visibleCount} onPrev={onPrev} onNext={onNext} onCardClick={onCardClick} />
      <CinemaExcerpt blog={visibleBlogs[Math.floor(visibleCount / 2)]} />
      <div className="cinema-counter font-hand">{centerIndex + 1} / {totalBlogs}</div>
    </div>
  );
}
