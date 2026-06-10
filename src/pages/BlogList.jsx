import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { lcsLength } from '../utils/lcsSearch';
import { PAGE_SIZE, CLICKED_BLOG_KEY } from '../data/sortOptions';
import BlogPageHeader from '../components/layout/BlogPageHeader';
import LoadingScreen from '../components/ui/LoadingScreen';
import BlogListItem from '../components/sections/BlogListItem';
import SearchBar from '../components/sections/SearchBar';
import SortDropdown from '../components/sections/SortDropdown';

export default function BlogList() {
  const [allPosts, setAllPosts] = useState([]);
  const [postContents, setPostContents] = useState({});
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('time-desc');
  const loaderRef = useRef(null);
  const restored = useRef(false);

  const saveClicked = useCallback((slug) => { sessionStorage.setItem(CLICKED_BLOG_KEY, slug); }, []);

  useEffect(() => {
    fetch('/blogs/manifest.json').then(r => r.json()).then(posts => {
      setAllPosts(posts);
      const savedSlug = sessionStorage.getItem(CLICKED_BLOG_KEY);
      let count = PAGE_SIZE;
      if (savedSlug) { const idx = posts.findIndex(p => p.slug === savedSlug); if (idx >= PAGE_SIZE) count = idx + 1; }
      setVisible(posts.slice(0, Math.min(count, posts.length)));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!searchQuery.trim() || Object.keys(postContents).length > 0) return;
    allPosts.forEach(post => {
      const folder = encodeURIComponent(post.folder);
      fetch(`/blogs/${folder}/post.md`).then(r => r.text()).then(md => setPostContents(prev => ({ ...prev, [post.slug]: md })));
    });
  }, [searchQuery, allPosts]);

  useEffect(() => {
    if (restored.current || loading || visible.length === 0) return;
    const slug = sessionStorage.getItem(CLICKED_BLOG_KEY);
    if (!slug) return;
    restored.current = true;
    const el = document.getElementById(`blog-${slug}`);
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    sessionStorage.removeItem(CLICKED_BLOG_KEY);
  }, [loading, visible.length]);

  const filteredPosts = useMemo(() => {
    let posts = [...allPosts];
    if (searchQuery.trim()) {
      const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
      posts = posts.map(post => {
        const title = post.title.toLowerCase();
        const content = (postContents[post.slug] || '').toLowerCase();
        let score = 0;
        for (const word of words) { score += lcsLength(word, title) * 20; if (content) score += lcsLength(word, content); }
        return { ...post, score };
      }).filter(p => p.score > 0).sort((a, b) => b.score - a.score);
    } else {
      switch (sortKey) {
        case 'time-desc': posts.sort((a, b) => new Date(b.date) - new Date(a.date)); break;
        case 'time-asc': posts.sort((a, b) => new Date(a.date) - new Date(b.date)); break;
        case 'alpha-asc': posts.sort((a, b) => a.title.localeCompare(b.title)); break;
        case 'alpha-desc': posts.sort((a, b) => b.title.localeCompare(a.title)); break;
      }
    }
    return posts;
  }, [allPosts, searchQuery, sortKey, postContents]);

  useEffect(() => { setVisible(filteredPosts.slice(0, PAGE_SIZE)); }, [filteredPosts]);

  const loadMore = useCallback(() => {
    setVisible(prev => [...prev, ...filteredPosts.slice(prev.length, prev.length + PAGE_SIZE)]);
  }, [filteredPosts]);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting && visible.length < filteredPosts.length) loadMore(); },
      { rootMargin: '200px' }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visible.length, filteredPosts.length, loadMore]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <BlogPageHeader>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <SortDropdown sortKey={sortKey} onChange={setSortKey} />
      </BlogPageHeader>
      <main className="max-w-3xl mx-auto px-2 py-2">
        <div className="border border-[#3d3429]/10 rounded-sm px-4 py-2">
          {searchQuery && <p className="text-xs font-mono text-[#3d3429]/40 mb-6">{filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchQuery}"</p>}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20"><p className="font-serif text-[#3d3429]/40 text-lg italic">{searchQuery ? 'No posts match your search.' : 'No posts yet.'}</p></div>
          ) : (
            <div className="space-y-0"
              onTouchStart={(e) => { const link = e.target.closest('a'); if (link) link.style.backgroundColor = 'rgba(61,52,41,0.18)'; }}
              onTouchEnd={(e) => { const link = e.target.closest('a'); if (link) link.style.backgroundColor = ''; }}
              onTouchCancel={(e) => { const link = e.target.closest('a'); if (link) link.style.backgroundColor = ''; }}
              onTouchMove={(e) => { e.currentTarget.querySelectorAll('a').forEach(a => a.style.backgroundColor = ''); }}>
              {visible.map(post => <BlogListItem key={post.slug} post={post} onClick={saveClicked} />)}
            </div>
          )}
          {visible.length < filteredPosts.length && (
            <div ref={loaderRef} className="py-10 text-center"><p className="font-mono text-xs text-[#3d3429]/30 italic">Loading more posts...</p></div>
          )}
        </div>
      </main>
    </div>
  );
}
