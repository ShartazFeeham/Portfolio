import { Link } from 'react-router-dom';

export default function BrowseBlogsLink() {
  return (
    <div className="flex justify-center py-10">
      <Link to="/blogs"
        className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#2c2a25] rounded-sm bg-[#2c2a25] text-[#e8dcc8] hover:bg-transparent hover:text-[#2c2a25] transition-all duration-500"
        style={{ fontFamily: '"Courier Prime", monospace' }}>
        <span className="text-sm uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500">
          Browse All Blogs &rarr;
        </span>
      </Link>
    </div>
  );
}
