import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PAGE_SIZE = 10;
const CLICKED_BLOG_KEY = 'blog-list-clicked';

const SORT_OPTIONS = [
  { key: 'time-desc', label: 'Newest First', icon: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' },
  { key: 'time-asc', label: 'Oldest First', icon: 'M5 21l7-5 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z' },
  { key: 'alpha-asc', label: 'A → Z', icon: 'M3 11l6-6 6 6M3 19l6-6 6 6' },
  { key: 'alpha-desc', label: 'Z → A', icon: 'M3 5l6 6 6-6M3 13l6 6 6-6' },
];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function lcsLength(a, b) {
  const m = a.length, n = b.length;
  const dp = new Uint16Array((m + 1) * (n + 1));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i * (n + 1) + j] = a[i - 1] === b[j - 1]
        ? dp[(i - 1) * (n + 1) + (j - 1)] + 1
        : Math.max(dp[(i - 1) * (n + 1) + j], dp[i * (n + 1) + (j - 1)]);
    }
  }
  return dp[m * (n + 1) + n];
}

export default function BlogList() {
  const [allPosts, setAllPosts] = useState([]);
  const [postContents, setPostContents] = useState({});
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('time-desc');
  const [sortOpen, setSortOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const loaderRef = useRef(null);
  const sortRef = useRef(null);
  const restored = useRef(false);

  // Save clicked blog slug
  const saveClicked = useCallback((slug) => {
    sessionStorage.setItem(CLICKED_BLOG_KEY, slug);
  }, []);

  useEffect(() => {
    fetch('/blogs/manifest.json')
      .then(r => r.json())
      .then(posts => {
        setAllPosts(posts);
        // If returning to a clicked blog, load enough posts to include it
        const savedSlug = sessionStorage.getItem(CLICKED_BLOG_KEY);
        let count = PAGE_SIZE;
        if (savedSlug) {
          const idx = posts.findIndex(p => p.slug === savedSlug);
          if (idx >= PAGE_SIZE) count = idx + 1;
        }
        setVisible(posts.slice(0, Math.min(count, posts.length)));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Load post contents when searching
  useEffect(() => {
    if (!searchQuery.trim() || Object.keys(postContents).length > 0) return;
    allPosts.forEach(post => {
      const folder = encodeURIComponent(post.folder);
      fetch(`/blogs/${folder}/post.md`)
        .then(r => r.text())
        .then(md => setPostContents(prev => ({ ...prev, [post.slug]: md })));
    });
  }, [searchQuery, allPosts]);

  // Scroll to last clicked blog after posts render
  useEffect(() => {
    if (restored.current || loading || visible.length === 0) return;
    const slug = sessionStorage.getItem(CLICKED_BLOG_KEY);
    if (!slug) return;

    restored.current = true;
    const el = document.getElementById(`blog-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
    sessionStorage.removeItem(CLICKED_BLOG_KEY);
  }, [loading, visible.length]);

  // Close sort dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Filtered + sorted posts
  const filteredPosts = useMemo(() => {
    let posts = [...allPosts];

    if (searchQuery.trim()) {
      const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
      posts = posts
        .map(post => {
          const title = post.title.toLowerCase();
          const content = (postContents[post.slug] || '').toLowerCase();
          let score = 0;
          for (const word of words) {
            score += lcsLength(word, title) * 20;
            if (content) score += lcsLength(word, content) * 1;
          }
          return { ...post, score };
        })
        .filter(p => p.score > 0)
        .sort((a, b) => b.score - a.score);
    } else {
      switch (sortKey) {
        case 'time-desc':
          posts.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'time-asc':
          posts.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        case 'alpha-asc':
          posts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'alpha-desc':
          posts.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
    }

    return posts;
  }, [allPosts, searchQuery, sortKey, postContents]);

  // Reset visible when filter/sort changes
  useEffect(() => {
    setVisible(filteredPosts.slice(0, PAGE_SIZE));
  }, [filteredPosts]);

  const loadMore = useCallback(() => {
    setVisible(prev => {
      const next = filteredPosts.slice(prev.length, prev.length + PAGE_SIZE);
      return [...prev, ...next];
    });
  }, [filteredPosts]);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && visible.length < filteredPosts.length) {
          loadMore();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visible.length, filteredPosts.length, loadMore]);

  const btnBase = "inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] transition-all duration-300";

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
          <h1
            className="text-3xl md:text-4xl font-serif tracking-tight"
            style={{ fontFamily: '"Courier Prime", monospace' }}
          >
            SHARTAZ FEEHAM'S DIARY
          </h1>
          <nav className="flex items-center gap-3 mt-6">
            {/* Home - Left */}
            <Link to="/" className={btnBase}>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Home
            </Link>

            {/* Search - Center */}
            <div className="flex-1 flex justify-center">
              <div className={`relative flex items-center border rounded-sm w-full md:w-80 transition-colors duration-200 ${searchFocused ? 'border-[#e8dcc8]/60' : 'border-[#e8dcc8]/20'}`}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#e8dcc8]/40 absolute left-2.5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search posts..."
                  className="bg-transparent text-base md:text-xs font-mono text-[#e8dcc8]/80 placeholder:text-[#e8dcc8]/30 pl-8 pr-3 py-1.5 w-full outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 text-[#e8dcc8]/40 hover:text-[#e8dcc8] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                )}
              </div>
            </div>

            {/* Sort - Right */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className={btnBase}
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={SORT_OPTIONS.find(o => o.key === sortKey).icon}/></svg>
                <span className="hidden sm:inline">Sort</span>
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-[#2c2a25] border border-[#e8dcc8]/20 rounded-sm overflow-hidden z-50 shadow-xl min-w-[160px]">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => { setSortKey(opt.key); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-mono flex items-center gap-2.5 transition-colors ${
                        sortKey === opt.key ? 'bg-[#e8dcc8]/10 text-[#e8dcc8]' : 'text-[#e8dcc8]/60 hover:bg-[#e8dcc8]/5 hover:text-[#e8dcc8]/80'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={opt.icon}/></svg>
                      {opt.label}
                      {sortKey === opt.key && <span className="ml-auto text-[#e8dcc8]/40">&#10003;</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Blog List */}
      <main className="max-w-3xl mx-auto px-2 py-2">
        <div className="border border-[#3d3429]/10 rounded-sm px-4 py-2">
        {searchQuery && (
          <p className="text-xs font-mono text-[#3d3429]/40 mb-6">
            {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        )}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-[#3d3429]/40 text-lg italic">
              {searchQuery ? 'No posts match your search.' : 'No posts yet.'}
            </p>
          </div>
        ) : (
          <div className="space-y-0">
            {visible.map((post) => (
              <Link
                key={post.slug}
                id={`blog-${post.slug}`}
                to={`/blogs/${post.slug}`}
                onClick={() => saveClicked(post.slug)}
                className="flex gap-5 py-6 px-3 -mx-3 group border-b border-[#3d3429]/10 last:border-b-0 rounded-sm transition-all duration-300 hover:bg-[#2c2a25]/[0.03] hover:shadow-sm hover:border-transparent active:bg-[#2c2a25]/[0.06] active:scale-[0.995]"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-28 h-20 rounded overflow-hidden bg-[#e8dcc8] transition-transform duration-300 group-hover:scale-105">
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
        )}

        {/* Infinite scroll trigger */}
        {visible.length < filteredPosts.length && (
          <div ref={loaderRef} className="py-10 text-center">
            <p className="font-mono text-xs text-[#3d3429]/30 italic">Loading more posts...</p>
          </div>
        )}
        </div>
      </main>
    </div>
  );
}
