export default function BlogCard({ blog, isActive, onClick }) {
  return (
    <a href={`https://blog.feeham.com/${blog.slug}`} target="_blank" rel="noopener noreferrer"
      className={`bioscope-blog-card ${isActive ? 'bioscope-blog-card--active' : ''}`}
      onClick={(e) => { e.preventDefault(); onClick(); }} title={blog.title}>
      <div className="blog-card-circle">
        <img src={blog.image} alt={blog.title} loading="lazy" />
        <div className="blog-card-circle-overlay" />
      </div>
      <span className="blog-card-title font-hand">{blog.title}</span>
    </a>
  );
}
