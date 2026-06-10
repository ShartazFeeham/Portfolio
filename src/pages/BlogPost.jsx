import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import BlogPageHeader from '../components/layout/BlogPageHeader';
import BlogPostContent from './BlogPostContent';
import LoadingScreen from '../components/ui/LoadingScreen';
import Toast from '../components/ui/Toast';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    fetch('/blogs/manifest.json')
      .then(r => r.json())
      .then(posts => {
        const found = posts.find(p => p.slug === slug);
        if (!found) { setLoading(false); return; }
        setPost(found);
        document.title = `Shartaz Feeham — ${found.title}`;
        const folder = encodeURIComponent(found.folder);
        return fetch(`/blogs/${folder}/post.md`).then(r => r.text());
      })
      .then(md => { if (md) setMarkdown(md); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  const handleShare = async () => {
    const url = window.location.href;
    const data = { title: post.title, text: post.excerpt, url };
    let shared = false;
    if (navigator.share) {
      try { await navigator.share(data); shared = true; } catch (err) { if (err.name === 'AbortError') return; }
    }
    if (!shared) {
      try { await navigator.clipboard.writeText(url); } catch {}
      setToast(true);
      setTimeout(() => setToast(false), 2500);
    }
  };

  if (loading) return <LoadingScreen />;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center flex-col gap-4">
        <p className="font-serif text-[#3d3429]/70 text-xl italic">Post not found</p>
        <Link to="/blogs" className="font-mono text-sm text-[#3d3429]/50 hover:text-[#2c2a25] transition-colors">&larr; Back to all posts</Link>
      </div>
    );
  }

  const folderPath = `/blogs/${encodeURIComponent(post.folder)}`;

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <BlogPageHeader>
        <Link to="/blogs" className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] active:bg-[#e8dcc8]/70 active:text-[#2c2a25] transition-all duration-300 touch-manipulation">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> All Posts
        </Link>
        <button onClick={handleShare} className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] active:bg-[#e8dcc8]/70 active:text-[#2c2a25] transition-all duration-300 touch-manipulation">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share
        </button>
      </BlogPageHeader>

      <main className="max-w-3xl mx-auto px-2 py-2">
        <article>
          <header className="mb-1 flex gap-6 items-start border border-[#3d3429]/10 rounded-sm px-4 py-3 bg-white">
            {post.thumbnail ? (
              <div className="flex-shrink-0 w-24 h-24 rounded overflow-hidden">
                <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="flex-shrink-0 w-24 h-24 rounded overflow-hidden bg-[#e8dcc8] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3d3429" strokeWidth="1.5" opacity="0.3"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-[#2c2a25] leading-tight mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>{post.title}</h1>
              <time className="text-sm font-mono text-[#3d3429]/60">{formatDate(post.date)}</time>
            </div>
          </header>
          <div className="border border-[#3d3429]/10 rounded-sm px-4 py-2">
            <BlogPostContent markdown={markdown} folderPath={folderPath} />
          </div>
        </article>
      </main>

      <Toast message="Link copied to clipboard" visible={toast} />
    </div>
  );
}
