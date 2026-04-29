import React, { useState } from 'react';
import './TypewriterBlog.css';
import { blogs as initialBlogs } from '../../data/blogs';

const TypewriterBlog = () => {
  const [blogStack, setBlogStack] = useState(initialBlogs);

  const shuffleNext = () => {
    setBlogStack(prev => {
      const newStack = [...prev];
      const top = newStack.shift();
      newStack.push(top);
      return newStack;
    });
  };

  const shufflePrev = () => {
    setBlogStack(prev => {
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
            Drafts & Desiderata
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
                      <span className="font-mono text-[10px] text-[#3d3429]/50">
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="text-4xl font-serif text-[#2c261f] mb-10 leading-tight italic" style={{ fontFamily: '"Courier Prime", monospace', textShadow: '0.5px 0.5px 0px rgba(0,0,0,0.1)' }}>
                      {blog.title}
                    </h3>
                    
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
                      <button className="read-more-btn group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#2c2a25] transition-all hover:tracking-[0.3em]">
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
    </section>
  );
};

export default TypewriterBlog;
