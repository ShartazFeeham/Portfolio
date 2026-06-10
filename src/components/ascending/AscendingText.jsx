import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const TARGET = 'READ MY BLOGS';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
const WORD_COLORS = ['#E63946','#2D8659','#1B4D8C']; // tomato, green, royal blue
function wordColor(col) {
  if (col <= 3) return WORD_COLORS[0]; // READ
  if (col === 5 || col === 6) return WORD_COLORS[1]; // MY
  if (col >= 8) return WORD_COLORS[2]; // BLOGS
  return '#2c2a25';
}

function randChar() { return CHARS[Math.floor(Math.random() * CHARS.length)]; }
function rand(a, b) { return a + Math.random() * (b - a); }

/* ═══════════════════════════════════════════════
   Reverse Rain — Colored
   Characters fall upward in vertical columns.
   Random chars streak past; target chars decelerate and stop.
   ═══════════════════════════════════════════════ */
export function A2() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cols = 14;
  const drops = [];
  for (let col = 0; col < cols; col++) {
    const charCount = 5 + Math.floor(Math.random() * 6);
    for (let row = 0; row < charCount; row++) {
      const isTarget = row === charCount - 1 && col < TARGET.length;
      const ch = isTarget ? TARGET[col] : randChar();
      drops.push(
        <span key={`${col}-${row}`} className={`a2-drop ${isTarget ? 'a2-hold' : 'a2-fly'}`}
          style={{'--col':col,'--row':row,'--delay':isTarget?`${rand(0,1.3)}s`:`${rand(0,6)}s`,'--speed':`${rand(2,5)}s`,
            '--wc':isTarget ? wordColor(col) : 'transparent',
            '--sz':isTarget?'1.5rem':[`1.5rem`,`1rem`,`.65rem`][Math.floor(Math.random()*3)]}}>
          {ch}
        </span>
      );
    }
  }
  return (<Link to="/blogs" ref={ref} className={`a2-link${visible?' a2-active':''}`}>
    <div className="a2-scene">{drops}
      <span className="a2-hover" aria-hidden="true">
        <span style={{color:WORD_COLORS[0]}}>Go</span>
        <span style={{color:WORD_COLORS[1]}}> To </span>
        <span style={{color:WORD_COLORS[2]}}>Blogs</span>
      </span>
    </div>
    <style>{`
      .a2-link{display:block;text-decoration:none;color:#2c2a25;width:100%;min-height:260px}
      .a2-scene{position:relative;min-height:260px;overflow:hidden;padding:1rem;
        display:grid;grid-template-columns:repeat(14,1fr);gap:0;align-items:center;width:100%;
        transition:transform .3s ease,box-shadow .3s ease;border-radius:8px}
      .a2-link:hover .a2-scene{transform:scale(1.03);box-shadow:0 0 30px rgba(44,42,37,.15)}
      .a2-drop{font-family:"Courier Prime",monospace;font-size:var(--sz);
        color:rgba(44,42,37,.25);text-align:center;transition:color .3s ease}
      .a2-active .a2-fly{animation:a2-loop var(--speed) var(--delay) linear infinite}
      .a2-active .a2-hold{animation:a2-stop 3s var(--delay) ease-out forwards,a2-shadow 1s calc(3s + var(--delay)) ease forwards}
      .a2-link:hover .a2-fly{animation-duration:calc(var(--speed) * .5);color:rgba(44,42,37,.45)}
      @keyframes a2-loop{0%{opacity:0;transform:translateY(200px)}15%{opacity:.5}
        80%{opacity:.3}100%{opacity:0;transform:translateY(-120px)}}
      @keyframes a2-stop{0%{opacity:0;transform:translateY(200px)}40%{opacity:.7;transform:translateY(10px)}
        70%{opacity:.8;transform:translateY(-3px)}100%{opacity:1;transform:translateY(0);color:var(--wc)}}
      .a2-hold{color:rgba(44,42,37,.15);font-weight:700;font-size:1.5rem;text-shadow:none;
        transition:opacity .3s ease}
      .a2-link:hover .a2-hold{opacity:0!important}
      .a2-hover{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
        font-family:"Courier Prime",monospace;font-weight:700;font-size:2.5rem;
        opacity:0;transition:opacity .3s ease;pointer-events:none;z-index:3;white-space:nowrap;
        text-shadow:2px 2px 0 #888,4px 4px 0 #aaa}
      .a2-link:hover .a2-hover{opacity:1}
      @keyframes a2-shadow{0%{text-shadow:none}100%{text-shadow:1px 1px 0 #999}}
      @keyframes a2-stop{0%{opacity:0;transform:translateY(200px)}40%{opacity:.7;transform:translateY(10px)}
        70%{opacity:.8;transform:translateY(-3px)}100%{opacity:1;transform:translateY(0);color:var(--wc)}}
    `}</style>
  </Link>);
}

/* ═══════════════════════════════════════════════
   Old Newspaper
   Cream paper, dark ink smudges, muted crimson /
   charcoal / indigo. Ink bleed texture.
   ═══════════════════════════════════════════════ */
const V2_COLORS = ['#7a2e2e','#3a3a3a','#1a1a4e'];
function v2Color(col) {
  if (col <= 3) return V2_COLORS[0];
  if (col === 5 || col === 6) return V2_COLORS[1];
  if (col >= 8) return V2_COLORS[2];
  return '#2a2a2a';
}
export function A16() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cols = 14;
  const drops = [];
  for (let col = 0; col < cols; col++) {
    const charCount = 5 + Math.floor(Math.random() * 6);
    for (let row = 0; row < charCount; row++) {
      const isTarget = row === charCount - 1 && col < TARGET.length;
      const ch = isTarget ? TARGET[col] : randChar();
      drops.push(
        <span key={`${col}-${row}`} className={`v2-drop ${isTarget ? 'v2-hold' : 'v2-fly'}`}
          style={{'--col':col,'--row':row,'--delay':isTarget?`${rand(0,1.3)}s`:`${rand(0,6)}s`,'--speed':`${rand(2,5)}s`,
            '--wc':isTarget ? v2Color(col) : 'transparent',
            '--sz':isTarget?'1.5rem':[`1.5rem`,`1rem`,`.65rem`][Math.floor(Math.random()*3)]}}>
          {ch}
        </span>
      );
    }
  }
  return (<Link to="/blogs" ref={ref} className={`v2-link${visible?' v2-active':''}`}>
    <div className="v2-scene">{drops}
      <span className="v2-hover" aria-hidden="true">
        <span style={{color:V2_COLORS[0]}}>Go</span>
        <span style={{color:V2_COLORS[1]}}> To </span>
        <span style={{color:V2_COLORS[2]}}>Blogs</span>
      </span>
    </div>
    <style>{`
      .v2-link{display:block;text-decoration:none;color:#2a2a2a;width:100%;min-height:260px}
      .v2-scene{position:relative;min-height:260px;overflow:hidden;padding:1rem;
        display:grid;grid-template-columns:repeat(14,1fr);gap:0;align-items:center;width:100%;
        background:#f2ede4;
        background-image:repeating-linear-gradient(0deg,transparent 0,transparent 23px,rgba(0,0,0,.03) 23px,rgba(0,0,0,.03) 24px);
        border-radius:2px;border:1px solid rgba(0,0,0,.08);
        transition:transform .3s ease,box-shadow .3s ease}
      .v2-link:hover .v2-scene{transform:scale(1.03);box-shadow:0 4px 20px rgba(0,0,0,.15)}
      .v2-drop{font-family:"Courier Prime",monospace;font-size:var(--sz);
        color:rgba(0,0,0,.15);text-align:center;transition:color .3s ease}
      .v2-active .v2-fly{animation:v2-loop var(--speed) var(--delay) linear infinite}
      .v2-active .v2-hold{animation:v2-stop 3s var(--delay) ease-out forwards,v2-shadow 1s calc(3s + var(--delay)) ease forwards}
      .v2-link:hover .v2-fly{animation-duration:calc(var(--speed) * .5);color:rgba(0,0,0,.35)}
      @keyframes v2-loop{0%{opacity:0;transform:translateY(200px)}15%{opacity:.5}
        80%{opacity:.3}100%{opacity:0;transform:translateY(-120px)}}
      @keyframes v2-stop{0%{opacity:0;transform:translateY(200px)}40%{opacity:.7;transform:translateY(10px)}
        70%{opacity:.8;transform:translateY(-3px)}100%{opacity:1;transform:translateY(0);color:var(--wc)}}
      .v2-hold{color:rgba(0,0,0,.1);font-weight:700;font-size:1.5rem;text-shadow:none;
        transition:opacity .3s ease}
      .v2-link:hover .v2-hold{opacity:0!important}
      .v2-hover{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
        font-family:"Courier Prime",monospace;font-weight:700;font-size:2.5rem;
        opacity:0;transition:opacity .3s ease;pointer-events:none;z-index:3;white-space:nowrap;
        text-shadow:2px 2px 0 rgba(0,0,0,.15),4px 4px 0 rgba(0,0,0,.08)}
      .v2-link:hover .v2-hover{opacity:1}
      @keyframes v2-shadow{0%{text-shadow:none}100%{text-shadow:1px 1px 0 rgba(0,0,0,.3)}}
      @keyframes v2-stop{0%{opacity:0;transform:translateY(200px)}40%{opacity:.7;transform:translateY(10px)}
        70%{opacity:.8;transform:translateY(-3px)}100%{opacity:1;transform:translateY(0);color:var(--wc)}}
    `}</style>
  </Link>);
}
