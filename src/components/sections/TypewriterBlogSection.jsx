import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TypewriterNav from './TypewriterNav';
import TypewriterShadow from './TypewriterShadow';

function formatBlogDate(dateStr) {
  const date = new Date(dateStr);
  const timeStr = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase().replace(' ', '');
  const datePart = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  return `${timeStr} ${datePart}`;
}

export default function TypewriterBlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [isPaperVisible, setIsPaperVisible] = useState(false);
  const blogSectionRef = useRef(null);

  useEffect(() => {
    fetch('/blogs/manifest.json').then(r => r.json()).then(setBlogs).catch(() => {});
  }, []);

  useEffect(() => {
    const el = blogSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaperVisible(false);
        if (entry.isIntersecting) setTimeout(() => setIsPaperVisible(true), 50);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const flipTo = (index) => {
    setIsPaperVisible(false);
    setCurrentBlogIndex(index);
    setTimeout(() => setIsPaperVisible(true), 50);
  };
  const handleNext = () => { if (currentBlogIndex < blogs.length - 1) flipTo(currentBlogIndex + 1); };
  const handlePrev = () => { if (currentBlogIndex > 0) flipTo(currentBlogIndex - 1); };
  const blog = blogs[currentBlogIndex];

  return (
    <section id="blogs-articles" ref={blogSectionRef} className="flex flex-col gap-4 py-8 overflow-visible">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">BLOGS & ARTICLES</a>
      </h2>
      <div className="w-full flex justify-center m-0 p-0 relative">
        <div className="relative w-[90%] md:w-[60%] m-0 p-0 mt-[330px] md:mt-[350px]">
          <img src="/images/tw1.png" alt="Vintage Typewriter"
            className="w-full h-auto grayscale-0 brightness-110 contrast-125 z-10 relative left-[-5%] block m-0 p-0" />
          <TypewriterNav onPrev={handlePrev} onNext={handleNext}
            hasPrev={currentBlogIndex > 0} hasNext={currentBlogIndex < blogs.length - 1} />
          <TypewriterShadow />
          <div className="paper-container absolute bottom-[35%] left-[19.2%] w-[61.6%] h-auto">
            {isPaperVisible && blog && (
              <Link to={`/blogs/${blog.slug}`} className="paper-content block" key={currentBlogIndex}>
                <div className="w-full h-full m-0 p-0">
                  <div className="mb-4">
                    <h3 className="text-2xl font-headline font-black uppercase leading-none mb-0">{blog.title}</h3>
                    <div className="text-right -mt-3">
                      <span className="text-[10px] text-[#2c2a25]/50 font-mono italic">{formatBlogDate(blog.date)}</span>
                    </div>
                  </div>
                  <p>{blog.excerpt}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
