import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './TypewriterBlog.css';
import { loadBlogs } from '../../utils/blogLoader';

const TypewriterBlog = () => {
  const [blogStack, setBlogStack] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedBlogs = loadBlogs();
    setBlogStack(loadedBlogs);
    setIsLoading(false);
  }, []);

  const shuffleNext = () => {
    setBlogStack(prev => {
      if (prev.length === 0) return prev;
      const newStack = [...prev];
      const top = newStack.shift();
      newStack.push(top);
      return newStack;
    });
  };

  const shufflePrev = () => {
    setBlogStack(prev => {
      if (prev.length === 0) return prev;
      const newStack = [...prev];
      const bottom = newStack.pop();
      newStack.unshift(bottom);
      return newStack;
    });
  };

  // Only show top 5 for the stack effect
  const visibleBlogs = blogStack.slice(0, 5).reverse();

  return (
    <section id="typewriter-desk" className="typewriter-section bg-[#e8e1cf] relative overflow-hidden flex flex-col items-center py-24 min-h-screen">
      {/* Background Image with Deep Sepia and Smooth Fade */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          backgroundImage: 'url("/images/typewriter_desk.png")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'sepia(1) contrast(1.1) brightness(0.6) saturate(0.7)',
          opacity: 0.6,
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <header className="mb-24 text-center">
          <h2 className="text-6xl font-serif text-[#2c2a25] tracking-tight uppercase italic mb-2" style={{ fontFamily: '"Courier Prime", monospace' }}>
            Blogs & Articles
          </h2>
          <div className="w-32 h-0.5 bg-[#2c2a25] mx-auto opacity-20"></div>
          <p className="mt-4 text-[#2c2a25]/60 font-mono text-xs uppercase tracking-widest">Mechanical Musings • Vol. I</p>
        </header>

        <div className="relative w-full max-w-4xl flex justify-center items-center h-[650px]">
          {/* Navigation Arrows - Using larger, vintage-styled buttons */}
          <button 
            onClick={shufflePrev}
            className="absolute left-0 lg:-left-20 z-50 p-6 rounded-full border-2 border-[#2c2a25]/20 text-[#2c2a25] hover:bg-[#2c2a25] hover:text-[#e8e1cf] transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl bg-[#e8e1cf]/50 backdrop-blur-sm"
            aria-label="Previous Manuscript"
          >
            <span className="text-4xl">←</span>
          </button>

          <button 
            onClick={shuffleNext}
            className="absolute right-0 lg:-right-20 z-50 p-6 rounded-full border-2 border-[#2c2a25]/20 text-[#2c2a25] hover:bg-[#2c2a25] hover:text-[#e8e1cf] transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl bg-[#e8e1cf]/50 backdrop-blur-sm"
            aria-label="Next Manuscript"
          >
            <span className="text-4xl">→</span>
          </button>

          {/* Manuscript Stack */}
          <div className="manuscript-container relative w-[480px] h-[620px]">
            {visibleBlogs.map((blog, index) => {
              const isTop = index === 4;
              const offset = index - 2; 
              
              return (
                <div 
                  key={blog.id} 
                  className={`manuscript-page ${isTop ? 'is-top' : ''}`}
                  style={{ 
                    '--rotation': `${offset * 3}deg`,
                    '--offset-x': `${offset * 12}px`,
                    '--offset-y': `${Math.abs(offset) * 6}px`,
                    zIndex: 10 + index,
                    opacity: isTop ? 1 : 0.4 + (index * 0.12)
                  }}
                >
                  <div className="page-inner p-12 h-full flex flex-col relative overflow-hidden">
                    {/* Weathering & Stains */}
                    {isTop && (
                      <>
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#6d4c41] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-20 -right-10 w-32 h-32 bg-[#4e342e] opacity-[0.04] rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#1a1a1a] opacity-[0.08] rounded-full blur-sm pointer-events-none" />
                      </>
                    )}

                    <div className="flex justify-between items-start mb-12 border-b border-[#3d3429]/20 pb-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#3d3429]/50 italic">
                        No. 00{blog.id}
                      </span>
                    </div>

                    <h3 className="text-4xl font-serif text-[#2c261f] mb-0 leading-none italic hover:text-[#5d4037] transition-colors" style={{ fontFamily: '"Courier Prime", monospace', textShadow: '0.5px 0.5px 0px rgba(0,0,0,0.1)' }}>
                      <a href={blog.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-1 underline-offset-4">
                        {blog.title}
                      </a>
                    </h3>
                    <div className="text-right -mt-5 mb-10">
                      <span className="font-mono text-[10px] text-[#3d3429]/50 italic">
                        {(() => {
                          const date = new Date(blog.timestamp);
                          const timeStr = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase().replace(' ', '');
                          const dateStr = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                          return `${timeStr} ${dateStr}`;
                        })()}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-xl text-[#3d3429] font-serif leading-relaxed text-justify opacity-90" style={{ fontFamily: '"Courier Prime", monospace', textShadow: '0.3px 0.3px 0.5px rgba(0,0,0,0.05)' }}>
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-[#2c2a25]/10 flex justify-between items-center">
                      <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-1 h-1 bg-[#2c2a25]/20 rounded-full" />
                        ))}
                      </div>
                      <button 
                        onClick={() => setSelectedBlog(blog)}
                        className="read-more-btn group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#2c2a25] transition-all hover:tracking-[0.3em]"
                      >
                        Inspect Details <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Page Modal */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#2c2a25]/40 backdrop-blur-sm animate-in fade-in duration-500"
          onClick={() => setSelectedBlog(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] bg-[#e2d7b5] shadow-2xl rounded-sm flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500"
            style={{ 
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 100px rgba(84, 72, 45, 0.1)'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Vintage Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-[#3d3429]/20 bg-[#dccfa3]/30">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#3d3429]/60">Manuscript No. 00{selectedBlog.id}</span>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="text-[#2c2a25]/60 hover:text-[#2c2a25] transition-colors p-2 hover:bg-[#2c2a25]/5 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-grow px-12 py-10 scrollbar-vintage">
              <h1 className="text-4xl font-serif text-[#2c2a25] mb-4 italic leading-tight" style={{ fontFamily: '"Courier Prime", monospace' }}>
                {selectedBlog.title}
              </h1>
              <div className="mb-8 font-mono text-[11px] text-[#3d3429]/50 italic">
                {new Date(selectedBlog.timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              
              <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-[#2c2a25] prose-p:text-[#3d3429] prose-p:leading-relaxed prose-p:text-lg prose-blockquote:border-l-[#3d3429]/20 prose-blockquote:italic" style={{ fontFamily: '"Courier Prime", monospace' }}>
                <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
              </div>
            </div>

            {/* Vintage Footer */}
            <div className="px-8 py-6 border-t border-[#3d3429]/10 bg-[#dccfa3]/10 flex justify-center">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-1 h-1 bg-[#2c2a25]/10 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TypewriterBlog;
