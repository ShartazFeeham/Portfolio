export default function CinemaExcerpt({ blog }) {
  if (!blog) return null;
  return (
    <div className="cinema-excerpt font-hand">
      <div className="cinema-excerpt-title">{blog.title}</div>
      <div className="cinema-excerpt-date">{blog.date}</div>
      <div className="cinema-excerpt-text">{blog.excerpt}</div>
      <a href={`https://blog.feeham.com/${blog.slug}`} target="_blank" rel="noopener noreferrer"
        className="cinema-excerpt-link font-hand">Read Article →</a>
    </div>
  );
}
