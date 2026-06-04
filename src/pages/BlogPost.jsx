import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blogs/manifest.json')
      .then(r => r.json())
      .then(posts => {
        const found = posts.find(p => p.slug === slug);
        if (!found) { setLoading(false); return; }
        setPost(found);
        const folder = encodeURIComponent(found.folder);
        return fetch(`/blogs/${folder}/post.md`).then(r => r.text());
      })
      .then(md => {
        if (md) setMarkdown(md);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
        <p className="font-serif text-[#3d3429]/50 text-lg italic">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center flex-col gap-4">
        <p className="font-serif text-[#3d3429]/70 text-xl italic">Post not found</p>
        <Link to="/blogs" className="font-mono text-sm text-[#3d3429]/50 hover:text-[#2c2a25] transition-colors">
          &larr; Back to all posts
        </Link>
      </div>
    );
  }

  // Rewrite relative image paths to include the blog folder
  const folderPath = `/blogs/${encodeURIComponent(post.folder)}`;
  const transformUrl = (src) => {
    if (src.startsWith('http') || src.startsWith('/')) return src;
    return `${folderPath}/${src}`;
  };

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
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Home
            </Link>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#e8dcc8]/30 rounded-sm text-xs font-mono text-[#e8dcc8]/70 hover:bg-[#e8dcc8] hover:text-[#2c2a25] transition-all duration-300"
            >
              &larr; All Posts
            </Link>
          </nav>
        </div>
      </header>

      {/* Post Content */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        <article>
          <header className="mb-10">
            <h1
              className="text-3xl md:text-4xl font-serif text-[#2c2a25] leading-tight mb-3"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {post.title}
            </h1>
            <time className="text-sm font-mono text-[#3d3429]/40">
              {formatDate(post.date)}
            </time>
          </header>

          <div
            className="prose prose-stone max-w-none
              prose-headings:font-serif prose-headings:text-[#2c2a25]
              prose-p:text-[#3d3429] prose-p:leading-relaxed
              prose-a:text-[#5d4037] prose-a:no-underline hover:prose-a:underline
              prose-code:text-[#5d4037] prose-code:bg-[#e8dcc8]/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-[#2c2a25] prose-pre:text-[#e8dcc8] prose-pre:rounded-lg
              prose-blockquote:border-l-[#3d3429]/20 prose-blockquote:italic prose-blockquote:text-[#3d3429]/70
              prose-img:rounded-lg prose-img:shadow-md
              prose-hr:border-[#3d3429]/10
              prose-li:text-[#3d3429]
              prose-strong:text-[#2c2a25]"
            style={{ fontFamily: '"Merriweather", "Playfair Display", serif' }}
          >
            <ReactMarkdown
              urlTransform={(src) => transformUrl(src)}
              components={{
                img: ({ src, alt, ...props }) => (
                  <figure className="my-8">
                    <img src={transformUrl(src)} alt={alt || ''} className="rounded-lg shadow-md max-w-full" loading="lazy" {...props} />
                    {alt && <figcaption className="text-center text-sm text-[#3d3429]/50 mt-2 italic">{alt}</figcaption>}
                  </figure>
                ),
                h1: () => null, // Skip the first H1 since we render the title separately
                code: ({ className, children, ...props }) => {
                  const isBlock = className?.includes('language-');
                  if (isBlock) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                  return <code className={className} {...props}>{children}</code>;
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
