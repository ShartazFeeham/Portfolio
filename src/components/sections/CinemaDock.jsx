import BlogCard from './BlogCard';

export default function CinemaDock({ visibleBlogs, visibleCount, onPrev, onNext, onCardClick }) {
  return (
    <div className="cinema-dock-wrapper">
      <button className="cinema-nav cinema-nav--prev" onClick={onPrev} aria-label="Previous">
        <svg viewBox="0 0 40 40" width="40" height="40">
          <polyline points="26,8 12,20 26,32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="cinema-dock">
        {visibleBlogs.map((blog, i) => {
          const isCenter = i === Math.floor(visibleCount / 2);
          return (
            <div key={`${blog.slug}-${i}`}
              className={`cinema-dock-item ${isCenter ? 'cinema-dock-item--center' : ''}`}
              style={{ '--dock-i': i, transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease' }}>
              <BlogCard blog={blog} isActive={isCenter} onClick={() => onCardClick(blog)} />
            </div>
          );
        })}
      </div>
      <button className="cinema-nav cinema-nav--next" onClick={onNext} aria-label="Next">
        <svg viewBox="0 0 40 40" width="40" height="40">
          <polyline points="14,8 28,20 14,32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
