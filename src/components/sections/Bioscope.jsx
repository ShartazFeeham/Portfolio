import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./Bioscope.css";

/* ──────────────────────────────────────────────
   BIOSCOPE — Blog Section
   A vintage movie projector/bioscope that opens
   into a fullscreen cinema experience showing
   blog posts in a dock-style carousel.
   ────────────────────────────────────────────── */

// Blog data (parsed from markdown frontmatter)
const mdFiles = import.meta.glob('../../content/blogs/*.md', { query: '?raw', import: 'default', eager: true });

const BLOGS = Object.values(mdFiles)
  .map(rawText => {
    const frontmatterMatch = rawText.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return null;
    
    const data = {};
    frontmatterMatch[1].split('\n').forEach(line => {
      const colonIdx = line.indexOf(':');
      if (colonIdx > -1) {
        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        data[key] = value;
      }
    });
    
    // Format date string to match previous style (e.g., "Mar 15, 2026")
    if (data.date) {
      try {
        const d = new Date(data.date);
        if (!isNaN(d.getTime())) {
          data.dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        } else {
          data.dateStr = data.date;
        }
      } catch (e) {
        data.dateStr = data.date;
      }
    }
    
    return data;
  })
  .filter(Boolean)
  .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

// Map dateStr to date so the existing components work without change
BLOGS.forEach(blog => {
  if (blog.dateStr) {
    blog.date = blog.dateStr;
  }
});

// ── Blog Card (circular image in dock) ──
function BlogCard({ blog, isActive, onClick }) {
  return (
    <a
      href={`https://blog.feeham.com/${blog.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`bioscope-blog-card ${isActive ? "bioscope-blog-card--active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      title={blog.title}
    >
      <div className="blog-card-circle">
        <img src={blog.image} alt={blog.title} loading="lazy" />
        <div className="blog-card-circle-overlay" />
      </div>
      <span className="blog-card-title font-hand">{blog.title}</span>
    </a>
  );
}

// ──────────────────────────────────────
// Main Bioscope Component
// ──────────────────────────────────────
export default function Bioscope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  // Visible window of blogs (5 at a time for dock effect)
  const visibleCount = 5;

  // Calculate visible blogs centered on centerIndex
  const getVisibleBlogs = useCallback(() => {
    const half = Math.floor(visibleCount / 2);
    const blogs = [];
    for (let offset = -half; offset <= half; offset++) {
      let idx = centerIndex + offset;
      if (idx < 0) idx += BLOGS.length;
      if (idx >= BLOGS.length) idx -= BLOGS.length;
      blogs.push({ ...BLOGS[idx], originalIndex: idx });
    }
    return blogs;
  }, [centerIndex]);

  const visibleBlogs = useMemo(() => getVisibleBlogs(), [getVisibleBlogs]);

  const openBioscope = useCallback(() => {
    setIsAnimatingIn(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      setIsOpen(true);
      timeoutRef.current = setTimeout(() => {
        setIsAnimatingIn(false);
      }, 800);
    });
  }, []);

  const closeBioscope = useCallback(() => {
    setIsAnimatingOut(true);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsAnimatingOut(false);
      document.body.style.overflow = "";
    }, 600);
  }, []);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCenterIndex((prev) => (prev + 1) % BLOGS.length);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCenterIndex((prev) => (prev - 1 + BLOGS.length) % BLOGS.length);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeBioscope();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeBioscope, goNext, goPrev]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Section Header + Bioscope Trigger */}
      <section id="blogs" className="flex flex-col gap-4">
        <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
          <a href="#index">FROM THE PRESS</a>
        </h2>

        {/* Bioscope Machine */}
        <div className="bioscope-trigger" onClick={openBioscope} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openBioscope()}
          aria-label="Open bioscope to view blog posts"
        >
          <img src="/images/vintage_bioscope.png" alt="Vintage Bioscope" className="bioscope-image" />
        </div>
      </section>

      {/* Fullscreen Cinema Overlay */}
      {(isOpen || isAnimatingOut) && (
        <div
          className={`bioscope-cinema ${isOpen && !isAnimatingOut ? "bioscope-cinema--open" : ""} ${isAnimatingOut ? "bioscope-cinema--closing" : ""}`}
        >
          {/* Cinema background with film grain */}
          <div className="cinema-bg">
            <div className="cinema-grain" />
          </div>

          {/* Film strip borders */}
          <div className="cinema-film-strip cinema-film-strip--top">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="cinema-sprocket" />
            ))}
          </div>
          <div className="cinema-film-strip cinema-film-strip--bottom">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="cinema-sprocket" />
            ))}
          </div>

          {/* Close button */}
          <button className="cinema-close" onClick={closeBioscope} aria-label="Close bioscope">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="24" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* "NOW SHOWING" header */}
          <div className="cinema-header font-headline">
            <span className="cinema-header-ornament">★</span>
            <span className="cinema-header-text">NOW SHOWING</span>
            <span className="cinema-header-ornament">★</span>
          </div>

          {/* Dock carousel */}
          <div className="cinema-dock-wrapper">
            {/* Prev button */}
            <button className="cinema-nav cinema-nav--prev" onClick={goPrev} aria-label="Previous">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <polyline points="26,8 12,20 26,32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Blog cards dock */}
            <div className="cinema-dock">
              {visibleBlogs.map((blog, i) => {
                const isCenter = i === Math.floor(visibleCount / 2);
                return (
                  <div
                    key={`${blog.slug}-${i}`}
                    className={`cinema-dock-item ${isCenter ? "cinema-dock-item--center" : ""}`}
                    style={{
                      "--dock-i": i,
                      transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease",
                    }}
                  >
                    <BlogCard
                      blog={blog}
                      isActive={isCenter}
                      onClick={() => {
                        window.open(`https://blog.feeham.com/${blog.slug}`, "_blank");
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Next button */}
            <button className="cinema-nav cinema-nav--next" onClick={goNext} aria-label="Next">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <polyline points="14,8 28,20 14,32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Center blog excerpt */}
          {visibleBlogs[Math.floor(visibleCount / 2)] && (
            <div className="cinema-excerpt font-hand">
              <div className="cinema-excerpt-title">
                {visibleBlogs[Math.floor(visibleCount / 2)].title}
              </div>
              <div className="cinema-excerpt-date">
                {visibleBlogs[Math.floor(visibleCount / 2)].date}
              </div>
              <div className="cinema-excerpt-text">
                {visibleBlogs[Math.floor(visibleCount / 2)].excerpt}
              </div>
              <a
                href={`https://blog.feeham.com/${visibleBlogs[Math.floor(visibleCount / 2)].slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cinema-excerpt-link font-hand"
              >
                Read Article →
              </a>
            </div>
          )}

          {/* Counter */}
          <div className="cinema-counter font-hand">
            {centerIndex + 1} / {BLOGS.length}
          </div>
        </div>
      )}
    </>
  );
}
