import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

export default function BlogListItem({ post, onClick }) {
  return (
    <Link id={`blog-${post.slug}`} to={`/blogs/${post.slug}`}
      onClick={() => onClick(post.slug)}
      className="flex gap-5 py-6 px-3 -mx-3 border-b border-[#3d3429]/10 last:border-b-0 hover:bg-[#2c2a25]/[0.04] rounded-sm">
      <div className="flex-shrink-0 w-28 h-20 rounded overflow-hidden bg-[#e8dcc8]">
        {post.thumbnail ? (
          <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#3d3429]/30 text-xs font-mono">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-serif text-[#2c2a25] leading-snug mb-1" style={{ fontFamily: '"Courier Prime", monospace' }}>{post.title}</h2>
        <time className="text-xs font-mono text-[#3d3429]/40 block mb-2">{formatDate(post.date)}</time>
        <p className="text-sm text-[#3d3429]/70 leading-relaxed line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}
