import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const PAGE_SIZE = 10;

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogList() {
  const [allPosts, setAllPosts] = useState([]);
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetch('/blogs/manifest.json')
      .then(r => r.json())
      .then(posts => {
        setAllPosts(posts);
        setVisible(posts.slice(0, PAGE_SIZE));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const loadMore = useCallback(() => {
    setVisible(prev => {
      const next = allPosts.slice(prev.length, prev.length + PAGE_SIZE);
      return [...prev, ...next];
    });
  }, [allPosts]);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && visible.length < allPosts.length) {
          loadMore();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visible.length, allPosts.length, loadMore]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
        <p className="font-serif text-[#3d3429]/50 text-lg italic">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <header className="bg-[#2c2a25] text-[#e8dcc8] py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-4 text-sm font-mono mb-4 opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">&larr; Home</Link>
          </nav>
          <h1
            className="text-3xl md:text-4xl font-serif italic tracking-tight"
            style={{ fontFamily: '"Courier Prime", monospace' }}
          >
            Shartaz Feeham's Diary
          </h1>
          <div className="w-24 h-px bg-[#e8dcc8]/20 mt-4" />
        </div>
      </header>

      {/* Blog List */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="space-y-0">
          {visible.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blogs/${post.slug}`}
              className="flex gap-5 py-6 group border-b border-[#3d3429]/10 last:border-b-0"
            >
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-28 h-20 rounded overflow-hidden bg-[#e8dcc8]">
                {post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#3d3429]/30 text-xs font-mono">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2
                  className="text-lg font-serif text-[#2c2a25] group-hover:text-[#5d4037] transition-colors leading-snug mb-1"
                  style={{ fontFamily: '"Courier Prime", monospace' }}
                >
                  {post.title}
                </h2>
                <time className="text-xs font-mono text-[#3d3429]/40 block mb-2">
                  {formatDate(post.date)}
                </time>
                <p className="text-sm text-[#3d3429]/70 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Infinite scroll trigger */}
        {visible.length < allPosts.length && (
          <div ref={loaderRef} className="py-10 text-center">
            <p className="font-mono text-xs text-[#3d3429]/30 italic">Loading more posts...</p>
          </div>
        )}
      </main>
    </div>
  );
}
