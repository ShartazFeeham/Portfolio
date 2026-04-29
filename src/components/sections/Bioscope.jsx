import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./Bioscope.css";

/* ──────────────────────────────────────────────
   BIOSCOPE — Blog Section
   A vintage movie projector/bioscope that opens
   into a fullscreen cinema experience showing
   blog posts in a dock-style carousel.
   ────────────────────────────────────────────── */

// Blog data (static, parsed from markdown frontmatter)
const BLOGS = [
  {
    title: "The Art of Writing Clean Code",
    slug: "art-of-writing-clean-code",
    date: "Mar 15, 2026",
    excerpt: "Clean code is not just about making things work — it's about crafting software that tells a story.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
  },
  {
    title: "Building Resilient Microservices with Spring Boot",
    slug: "resilient-microservices-spring-boot",
    date: "Feb 28, 2026",
    excerpt: "Microservices architecture promises scalability, but without resilience patterns, failures cascade.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop",
  },
  {
    title: "React Performance: Beyond the Basics",
    slug: "react-performance-beyond-basics",
    date: "Feb 10, 2026",
    excerpt: "Deep dive into React's rendering model and unlock hidden performance gains.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop",
  },
  {
    title: "Database Indexing: The Complete Guide",
    slug: "database-indexing-complete-guide",
    date: "Jan 22, 2026",
    excerpt: "Indexes are the difference between a query that takes milliseconds and one that takes minutes.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=400&fit=crop",
  },
  {
    title: "Docker in Production: Lessons Learned",
    slug: "docker-in-production-lessons-learned",
    date: "Jan 05, 2026",
    excerpt: "Moving from local Docker to production containers is a journey filled with hard-won lessons.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=400&fit=crop",
  },
  {
    title: "The Psychology of Code Reviews",
    slug: "psychology-of-code-reviews",
    date: "Dec 18, 2025",
    excerpt: "Code reviews are a social contract, a teaching tool, and one of the most impactful practices.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
  },
  {
    title: "Kafka at Scale: Patterns That Survive",
    slug: "kafka-at-scale-patterns-that-survive",
    date: "Dec 01, 2025",
    excerpt: "Apache Kafka powers the largest event-driven systems. Here are the patterns that keep them running.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=400&fit=crop",
  },
  {
    title: "Design Patterns Every Developer Should Know",
    slug: "design-patterns-every-developer-should-know",
    date: "Nov 15, 2025",
    excerpt: "Design patterns are reusable solutions to recurring problems — the shared vocabulary of architecture.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop",
  },
];

// ── Film Strip Perforation ──
function FilmPerf({ side }) {
  return (
    <div className={`film-perf film-perf--${side}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="film-perf-hole" />
      ))}
    </div>
  );
}

// ── Bioscope Reel SVG ──
function FilmReel({ size = 60, spinning = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`film-reel-svg ${spinning ? "film-reel-spinning" : ""}`}
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="#1a1710" strokeWidth="4" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#1a1710" strokeWidth="2" />
      <circle cx="50" cy="50" r="12" fill="#1a1710" />
      <circle cx="50" cy="50" r="6" fill="#3a3525" />
      {/* Spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="14"
          x2="50"
          y2="86"
          stroke="#1a1710"
          strokeWidth="2"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      {/* Sprocket holes */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <circle
          key={angle}
          cx="50"
          cy="42"
          r="4"
          fill="#2a2518"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}

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
          {/* Top reel */}
          <div className="bioscope-reel-row">
            <FilmReel size={50} spinning={isOpen} />
            <FilmReel size={50} spinning={isOpen} />
          </div>

          {/* Screen viewport */}
          <div className="bioscope-screen">
            <FilmPerf side="left" />
            <div className="bioscope-screen-content">
              <div className="bioscope-screen-text">
                <div className="bioscope-title font-headline">THE PRESS</div>
                <div className="bioscope-subtitle font-hand">Latest Writings & Reflections</div>
                <div className="bioscope-cta font-hand">Click to View</div>
              </div>
              {/* Film grain overlay */}
              <div className="bioscope-grain" />
              {/* Flicker effect */}
              <div className="bioscope-flicker" />
            </div>
            <FilmPerf side="right" />
          </div>

          {/* Lens / projector bell */}
          <div className="bioscope-lens-housing">
            <div className="bioscope-lens">
              <div className="bioscope-lens-glass" />
            </div>
          </div>

          {/* Base / stand */}
          <div className="bioscope-base">
            <div className="bioscope-base-leg bioscope-base-leg--left" />
            <div className="bioscope-base-leg bioscope-base-leg--right" />
          </div>
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
