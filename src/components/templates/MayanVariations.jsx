import { Link } from 'react-router-dom';

const LABEL = 'Enter the Archives';
const SUB = 'All blogs await within';

/* ═══════════════════════════════════════════════
   M1 — Split Pyramid
   Two halves pulled apart revealing the doorway between them
   ═══════════════════════════════════════════════ */
export function M1() {
  return (<Link to="/blogs" className="m1-link"><div className="m1-wrap">
    <div className="m1-half m1-left">
      {[...Array(6)].map((_, i) => <div key={i} className="m1-step" style={{width:`${100-i*14}%`}}/>)}
    </div>
    <div className="m1-void">
      <div className="m1-crack-glow"/>
      <span className="m1-label">{LABEL}</span>
      <div className="m1-light-beam"/>
      <span className="m1-sub">{SUB}</span>
    </div>
    <div className="m1-half m1-right">
      {[...Array(6)].map((_, i) => <div key={i} className="m1-step" style={{width:`${100-i*14}%`}}/>)}
    </div>
  </div>
  <style>{`
    .m1-link{display:block;text-decoration:none;color:#2c2a25;max-width:480px;margin:0 auto}
    .m1-wrap{display:flex;overflow:hidden}
    .m1-half{display:flex;flex-direction:column;align-items:flex-end;width:38%;flex-shrink:0;transition:width .6s}
    .m1-left{align-items:flex-start}
    .m1-link:hover .m1-left{width:32%}
    .m1-link:hover .m1-right{width:32%}
    .m1-step{height:20px;border:2px solid rgba(44,42,37,.4);background:repeating-linear-gradient(90deg,transparent 0,transparent 18px,rgba(0,0,0,.05) 18px,rgba(0,0,0,.05) 20px),
      linear-gradient(180deg,#8a8a7a,#7a7a6a);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
    .m1-void{flex:1;min-height:140px;background:linear-gradient(180deg,#1a1a15,#0a0a05);
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;
      padding:1rem;position:relative;box-shadow:inset 0 0 30px rgba(0,0,0,.6)}
    .m1-crack-glow{position:absolute;inset:0;
      background:linear-gradient(90deg,rgba(200,180,120,.06),transparent 20%,transparent 80%,rgba(200,180,120,.06));
      transition:all .6s}
    .m1-link:hover .m1-crack-glow{background:linear-gradient(90deg,rgba(200,180,120,.15),transparent 15%,transparent 85%,rgba(200,180,120,.15))}
    .m1-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.08em;text-transform:uppercase;color:#c8b888;text-align:center;
      text-shadow:0 0 10px rgba(200,180,120,.2);transition:letter-spacing .5s;z-index:1}
    .m1-link:hover .m1-label{letter-spacing:.16em}
    .m1-light-beam{width:2px;height:30px;background:linear-gradient(180deg,rgba(200,180,120,.3),transparent);z-index:1}
    .m1-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(200,180,120,.3);z-index:1}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M2 — Tunnel Perspective
   Nested rectangles creating a vanishing-point tunnel
   ═══════════════════════════════════════════════ */
export function M2() {
  return (<Link to="/blogs" className="m2-link"><div className="m2-wrap">
    {[...Array(7)].map((_, i) => <div key={i} className="m2-frame" style={{
      padding:`${8+i*12}px`, borderWidth:`${3-i*0.3}px`,
      margin:`${i*3}%`
    }}/>)}
    <div className="m2-core">
      <span className="m2-label">{LABEL}</span>
      <span className="m2-sub">{SUB}</span>
    </div>
  </div>
  <style>{`
    .m2-link{display:block;text-decoration:none;color:#2c2a25;max-width:420px;margin:0 auto}
    .m2-wrap{position:relative;padding:2rem;display:flex;align-items:center;justify-content:center}
    .m2-frame{position:absolute;border-style:solid;border-color:rgba(44,42,37,1);
      opacity:calc(1 - var(--i)*0.12);transition:all .4s}
    .m2-link:hover .m2-frame{opacity:calc(1 - var(--i)*0.05)}
    .m2-core{display:flex;flex-direction:column;align-items:center;gap:.4rem;z-index:1;
      padding:1.5rem}
    .m2-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.2rem;
      letter-spacing:.12em;text-transform:uppercase;color:#2c2a25;text-align:center;
      transition:letter-spacing .5s}
    .m2-link:hover .m2-label{letter-spacing:.2em}
    .m2-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(44,42,37,.4)}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M3 — Stepped Arch with Hanging Vines
   Inverted step layers forming an arch, vines draping down
   ═══════════════════════════════════════════════ */
export function M3() {
  const vines = [
    {l:'8%',h:60,r:-5,d:0},{l:'22%',h:40,r:3,d:1},{l:'42%',h:55,r:-2,d:2},
    {l:'58%',h:35,r:4,d:3},{l:'75%',h:50,r:-3,d:4},{l:'90%',h:45,r:2,d:5}
  ];
  return (<Link to="/blogs" className="m3-link"><div className="m3-wrap">
    <div className="m3-arch">
      {[...Array(5)].map((_, i) => <div key={i} className="m3-layer" style={{
        width:`${60+i*10}%`, height:`${28-i*2}px`
      }}/>)}
    </div>
    <div className="m3-doorway">
      {vines.map((v,i) => <div key={i} className="m3-vine" style={{
        left:v.l, height:`${v.h}%`, transform:`rotate(${v.r}deg)`,
        animationDelay:`${v.d*0.3}s`
      }}/>)}
      <div className="m3-text">
        <span className="m3-label">{LABEL}</span>
        <span className="m3-sub">{SUB}</span>
      </div>
    </div>
    <div className="m3-base"/>
  </div>
  <style>{`
    .m3-link{display:block;text-decoration:none;color:#2c2a25;max-width:480px;margin:0 auto}
    .m3-wrap{display:flex;flex-direction:column;align-items:center;overflow:hidden}
    .m3-arch{display:flex;flex-direction:column;align-items:center;width:100%}
    .m3-layer{border:2px solid rgba(44,42,37,.5);background:repeating-linear-gradient(90deg,transparent 0,transparent 14px,rgba(0,0,0,.04) 14px,rgba(0,0,0,.04) 16px),
      linear-gradient(180deg,#9a9488,#8a8478);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
    .m3-doorway{width:60%;min-height:160px;background:linear-gradient(180deg,#1a1815,#0a0908);
      border:2px solid rgba(44,42,37,.5);display:flex;align-items:center;justify-content:center;
      position:relative;box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
    .m3-vine{position:absolute;top:0;width:3px;border-radius:2px;
      background:linear-gradient(180deg,#5a7a3a,transparent);
      animation:m3-sway 3s ease-in-out infinite alternate}
    @keyframes m3-sway{0%{transform:rotate(-3deg)}100%{transform:rotate(3deg)}}
    .m3-text{display:flex;flex-direction:column;align-items:center;gap:.5rem;z-index:1;padding:1rem}
    .m3-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.1em;text-transform:uppercase;color:#b8a888;text-align:center;
      text-shadow:0 0 8px rgba(180,160,130,.2);transition:letter-spacing .5s}
    .m3-link:hover .m3-label{letter-spacing:.18em}
    .m3-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(180,160,130,.3)}
    .m3-base{width:100%;height:8px;background:linear-gradient(180deg,#8a8478,#9a9488)}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M4 — Collapsed Staircase
   Steps falling apart at angles, rubble scattered below
   ═══════════════════════════════════════════════ */
export function M4() {
  return (<Link to="/blogs" className="m4-link"><div className="m4-wrap">
    <div className="m4-collapsed">
      <div className="m4-step m4-cs1"/><div className="m4-step m4-cs2"/>
      <div className="m4-step m4-cs3"/><div className="m4-step m4-cs4"/>
    </div>
    <div className="m4-doorway">
      <div className="m4-crack-overlay"/>
      <span className="m4-label">{LABEL}</span>
      <div className="m4-divider"><span>&#x2B22;</span></div>
      <span className="m4-sub">{SUB}</span>
    </div>
    <div className="m4-rubble">
      {[...Array(8)].map((_, i) => <div key={i} className="m4-block" style={{
        width:`${10+Math.sin(i*2.1)*6}px`, height:`${6+Math.cos(i*1.7)*3}px`,
        transform:`rotate(${Math.sin(i*3.5)*15}deg)`,
        marginLeft:`${i*8}px`, marginTop:`${Math.sin(i)*4}px`
      }}/>)}
    </div>
  </div>
  <style>{`
    .m4-link{display:block;text-decoration:none;color:#2c2a25;max-width:480px;margin:0 auto}
    .m4-wrap{display:flex;flex-direction:column;align-items:center;overflow:visible}
    .m4-collapsed{display:flex;flex-direction:column;align-items:center;width:100%;position:relative}
    .m4-step{border:2px solid rgba(44,42,37,.4);background:repeating-linear-gradient(90deg,transparent 0,transparent 14px,rgba(0,0,0,.04) 14px,rgba(0,0,0,.04) 16px),
      linear-gradient(180deg,#9a9488,#8a8478)}
    .m4-cs1{width:100%;height:22px}.m4-cs2{width:85%;height:20px;transform:rotate(-2deg);margin-left:8%}
    .m4-cs3{width:70%;height:20px;transform:rotate(3deg);margin-right:5%}
    .m4-cs4{width:55%;height:18px;transform:rotate(-1deg)}
    .m4-doorway{width:40%;min-height:160px;background:linear-gradient(180deg,#1a1815,#0a0908);
      border:2px solid rgba(44,42,37,.5);display:flex;flex-direction:column;align-items:center;
      justify-content:center;gap:.5rem;padding:1.5rem 1rem;position:relative;
      box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
    .m4-crack-overlay{position:absolute;inset:0;pointer-events:none;
      background:linear-gradient(135deg,transparent 45%,rgba(44,42,37,.05) 50%,transparent 55%)}
    .m4-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.1em;text-transform:uppercase;color:#b8a888;text-align:center;
      text-shadow:0 0 8px rgba(180,160,130,.15);transition:letter-spacing .5s;z-index:1}
    .m4-link:hover .m4-label{letter-spacing:.18em}
    .m4-divider{display:flex;align-items:center;gap:.6rem;width:100%;justify-content:center}
    .m4-divider::before,.m4-divider::after{content:'';flex:1;max-width:40px;height:1px;background:rgba(180,160,130,.2)}
    .m4-divider span{font-size:.5rem;color:rgba(180,160,130,.25)}
    .m4-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(180,160,130,.3);z-index:1}
    .m4-rubble{display:flex;flex-wrap:wrap;justify-content:center;gap:2px;padding:.5rem 1rem}
    .m4-block{background:#8a8478;border:1px solid rgba(44,42,37,.3);border-radius:1px}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M5 — Circular Calendar Pyramid
   Concentric stone rings like the Mayan calendar, doorway at center
   ═══════════════════════════════════════════════ */
export function M5() {
  return (<Link to="/blogs" className="m5-link"><div className="m5-wrap">
    <div className="m5-calendar">
      <div className="m5-ring m5-r1">
        <div className="m5-glyphs-top">· · · · · · · · · · · ·</div>
      </div>
      <div className="m5-ring m5-r2">
        <div className="m5-ticks">
          {[...Array(20)].map((_, i) => <div key={i} className="m5-tick" style={{transform:`rotate(${i*18}deg)`}}/>)}
        </div>
      </div>
      <div className="m5-ring m5-r3"/>
      <div className="m5-center">
        <span className="m5-label">{LABEL}</span>
        <span className="m5-sub">{SUB}</span>
      </div>
    </div>
  </div>
  <style>{`
    .m5-link{display:block;text-decoration:none;color:#2c2a25;max-width:360px;margin:0 auto}
    .m5-wrap{display:flex;justify-content:center;padding:1.5rem 0}
    .m5-calendar{position:relative;width:300px;height:300px;display:flex;align-items:center;justify-content:center}
    .m5-ring{position:absolute;border-radius:50%;border:3px solid rgba(44,42,37,.6)}
    .m5-r1{inset:0;background:repeating-linear-gradient(0deg,transparent 0,transparent 12px,rgba(0,0,0,.03) 12px,rgba(0,0,0,.03) 14px)}
    .m5-r2{inset:30px;border-width:2px}
    .m5-r3{inset:60px;border-width:1.5px;border-style:dashed}
    .m5-glyphs-top{position:absolute;top:8px;left:50%;transform:translateX(-50%);
      font-size:.5rem;letter-spacing:.3em;color:rgba(44,42,37,.3);white-space:nowrap}
    .m5-ticks{position:absolute;inset:0}
    .m5-tick{position:absolute;top:0;left:50%;width:1.5px;height:10px;
      background:rgba(44,42,37,.2);transform-origin:0 120px}
    .m5-center{position:relative;z-index:1;display:flex;flex-direction:column;
      align-items:center;gap:.4rem;padding:1rem}
    .m5-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.1em;text-transform:uppercase;color:#2c2a25;text-align:center;
      transition:letter-spacing .5s}
    .m5-link:hover .m5-label{letter-spacing:.18em}
    .m5-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(44,42,37,.4)}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M6 — Bridge to Temple
   Stone bridge leading to a dark temple entrance
   ═══════════════════════════════════════════════ */
export function M6() {
  return (<Link to="/blogs" className="m6-link"><div className="m6-wrap">
    <div className="m6-temple-top">
      {[...Array(4)].map((_, i) => <div key={i} className="m6-tstep" style={{width:`${90-i*15}%`}}/>)}
    </div>
    <div className="m6-door"/>
    <div className="m6-bridge">
      <div className="m6-bridge-text">
        <span className="m6-label">{LABEL}</span>
        <span className="m6-sub">{SUB}</span>
      </div>
    </div>
    <div className="m6-bridge-rail m6-br-l"/>
    <div className="m6-bridge-rail m6-br-r"/>
    <div className="m6-abyss"/>
  </div>
  <style>{`
    .m6-link{display:block;text-decoration:none;color:#2c2a25;max-width:500px;margin:0 auto}
    .m6-wrap{position:relative;display:flex;flex-direction:column;align-items:center}
    .m6-temple-top{display:flex;flex-direction:column;align-items:center;width:100%}
    .m6-tstep{height:18px;border:2px solid rgba(44,42,37,.4);background:repeating-linear-gradient(90deg,transparent 0,transparent 14px,rgba(0,0,0,.04) 14px,rgba(0,0,0,.04) 16px),
      linear-gradient(180deg,#9a9488,#8a8478)}
    .m6-door{width:30%;height:16px;background:linear-gradient(180deg,#1a1815,#0a0908);
      border:2px solid rgba(44,42,37,.5);border-bottom:none}
    .m6-bridge{width:100%;padding:1.2rem 2rem;border:2px solid rgba(44,42,37,.4);
      border-radius:0 0 4px 4px;position:relative;
      background:repeating-linear-gradient(90deg,transparent 0,transparent 20px,rgba(0,0,0,.04) 20px,rgba(0,0,0,.04) 22px),
      linear-gradient(180deg,#a09888,#8a8478)}
    .m6-bridge-text{display:flex;flex-direction:column;align-items:center;gap:.3rem}
    .m6-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.12em;text-transform:uppercase;color:#2c2a25;text-align:center;
      transition:letter-spacing .5s}
    .m6-link:hover .m6-label{letter-spacing:.2em}
    .m6-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(44,42,37,.4)}
    .m6-bridge-rail{position:absolute;top:0;width:3px;height:100%;background:rgba(44,42,37,.3)}
    .m6-br-l{left:14%}.m6-br-r{right:14%}
    .m6-abyss{width:120%;height:6px;background:linear-gradient(180deg,rgba(44,42,37,.15),transparent)}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M7 — Spiral Temple
   Steps arranged in a spiral ascending pattern
   ═══════════════════════════════════════════════ */
export function M7() {
  return (<Link to="/blogs" className="m7-link"><div className="m7-wrap">
    <div className="m7-spiral">
      {[...Array(12)].map((_, i) => {
        const angle = i * 30;
        const dist = 10 + i * 8;
        return <div key={i} className="m7-block" style={{
          transform:`rotate(${angle}deg) translateX(${dist}px)`,
          width:`${20-i}px`, height:`${12-i*0.3}px`
        }}/>;
      })}
    </div>
    <div className="m7-center">
      <span className="m7-label">{LABEL}</span>
      <span className="m7-sub">{SUB}</span>
    </div>
  </div>
  <style>{`
    .m7-link{display:block;text-decoration:none;color:#2c2a25;max-width:360px;margin:0 auto}
    .m7-wrap{position:relative;display:flex;align-items:center;justify-content:center;
      min-height:320px;padding:2rem}
    .m7-spiral{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
    .m7-block{position:absolute;border:1.5px solid rgba(44,42,37,.4);
      background:repeating-linear-gradient(90deg,transparent 0,transparent 10px,rgba(0,0,0,.04) 10px,rgba(0,0,0,.04) 12px),
      linear-gradient(180deg,#9a9488,#8a8478);
      transform-origin:50% 50%;transition:transform .6s}
    .m7-link:hover .m7-block{filter:brightness(1.05)}
    .m7-center{position:relative;z-index:1;display:flex;flex-direction:column;
      align-items:center;gap:.5rem;padding:1rem;
      background:linear-gradient(180deg,#1a1815,#0a0908);
      border:2px solid rgba(44,42,37,.5);box-shadow:0 0 30px rgba(0,0,0,.3)}
    .m7-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.1em;text-transform:uppercase;color:#b8a888;text-align:center;
      transition:letter-spacing .5s}
    .m7-link:hover .m7-label{letter-spacing:.18em}
    .m7-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(180,160,130,.3)}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M8 — Totem Pole Entrance
   Stacked carved faces with the doorway at the base
   ═══════════════════════════════════════════════ */
export function M8() {
  const faces = ['꩜', '꩝', '꩞', '꩟'];
  return (<Link to="/blogs" className="m8-link"><div className="m8-wrap">
    {faces.map((f, i) => <div key={i} className="m8-face-block" style={{
      width:`${90-i*8}%`
    }}>
      <div className="m8-face">{f}</div>
      <div className="m8-carving"/>
    </div>)}
    <div className="m8-door">
      <span className="m8-label">{LABEL}</span>
      <span className="m8-sub">{SUB}</span>
    </div>
  </div>
  <style>{`
    .m8-link{display:block;text-decoration:none;color:#2c2a25;max-width:380px;margin:0 auto}
    .m8-wrap{display:flex;flex-direction:column;align-items:center}
    .m8-face-block{border:2px solid rgba(44,42,37,.5);padding:.5rem;
      background:repeating-linear-gradient(0deg,transparent 0,transparent 8px,rgba(0,0,0,.03) 8px,rgba(0,0,0,.03) 10px),
      linear-gradient(180deg,#9a9488,#8a8478);text-align:center;position:relative}
    .m8-face{font-size:1.8rem;color:rgba(44,42,37,.35);transition:color .5s}
    .m8-link:hover .m8-face{color:rgba(44,42,37,.6)}
    .m8-carving{position:absolute;inset:4px;border:1px solid rgba(44,42,37,.08);pointer-events:none}
    .m8-door{width:74%;background:linear-gradient(180deg,#1a1815,#0a0908);
      border:2px solid rgba(44,42,37,.5);display:flex;flex-direction:column;
      align-items:center;gap:.4rem;padding:1.2rem;
      box-shadow:inset 0 0 30px rgba(0,0,0,.5)}
    .m8-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.05rem;
      letter-spacing:.1em;text-transform:uppercase;color:#b8a888;text-align:center;
      transition:letter-spacing .5s}
    .m8-link:hover .m8-label{letter-spacing:.18em}
    .m8-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(180,160,130,.3)}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M9 — Zigzag Earthquake
   Steps shifted laterally as if by earthquake, diagonal cracks
   ═══════════════════════════════════════════════ */
export function M9() {
  return (<Link to="/blogs" className="m9-link"><div className="m9-wrap">
    {[...Array(6)].map((_, i) => <div key={i} className="m9-step" style={{
      width:`${100-i*12}%`,
      transform:`translateX(${(i%2?-1:1)*i*4}px) rotate(${(i%2?-1:1)*i*0.5}deg)`
    }}/>)}
    <div className="m9-door">
      <div className="m9-crack m9-crack-1"/><div className="m9-crack m9-crack-2"/>
      <span className="m9-label">{LABEL}</span>
      <span className="m9-sub">{SUB}</span>
    </div>
    <div className="m9-rubble">
      {[...Array(5)].map((_, i) => <div key={i} className="m9-block" style={{
        transform:`rotate(${(i%2?-1:1)*(10+i*5)}deg)`,
        width:`${14+i*2}px`}}/>)}
    </div>
  </div>
  <style>{`
    .m9-link{display:block;text-decoration:none;color:#2c2a25;max-width:460px;margin:0 auto}
    .m9-wrap{display:flex;flex-direction:column;align-items:center;overflow:visible}
    .m9-step{height:18px;border:2px solid rgba(44,42,37,.4);background:repeating-linear-gradient(90deg,transparent 0,transparent 14px,rgba(0,0,0,.04) 14px,rgba(0,0,0,.04) 16px),
      linear-gradient(180deg,#9a9488,#8a8478);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
    .m9-door{width:30%;min-height:140px;background:linear-gradient(180deg,#1a1815,#0a0908);
      border:2px solid rgba(44,42,37,.5);display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:.5rem;padding:1rem;position:relative;
      box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
    .m9-crack{position:absolute;background:rgba(44,42,37,.15)}
    .m9-crack-1{top:0;left:30%;width:1.5px;height:45%;transform:rotate(8deg)}
    .m9-crack-2{bottom:0;right:25%;width:1.5px;height:35%;transform:rotate(-6deg)}
    .m9-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1rem;
      letter-spacing:.08em;text-transform:uppercase;color:#b8a888;text-align:center;
      transition:letter-spacing .5s;z-index:1}
    .m9-link:hover .m9-label{letter-spacing:.16em}
    .m9-sub{font-family:"Courier Prime",monospace;font-size:.5rem;letter-spacing:.15em;
      text-transform:uppercase;color:rgba(180,160,130,.3);z-index:1}
    .m9-rubble{display:flex;gap:4px;padding:4px 20%}
    .m9-block{height:8px;background:#8a8478;border:1px solid rgba(44,42,37,.3);border-radius:1px}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   M10 — Waterfall Staircase
   Steps cascading down like a waterfall, water flowing over them
   ═══════════════════════════════════════════════ */
export function M10() {
  return (<Link to="/blogs" className="m10-link"><div className="m10-wrap">
    <div className="m10-steps">
      {[...Array(6)].map((_, i) => <div key={i} className="m10-step" style={{
        width:`${100-i*12}%`
      }}>
        <div className="m10-water" style={{animationDelay:`${i*0.15}s`}}/>
      </div>)}
    </div>
    <div className="m10-door">
      <div className="m10-mist"/>
      <span className="m10-label">{LABEL}</span>
      <span className="m10-sub">{SUB}</span>
    </div>
    <div className="m10-pool">
      <div className="m10-ripple m10-r1"/><div className="m10-ripple m10-r2"/>
    </div>
  </div>
  <style>{`
    .m10-link{display:block;text-decoration:none;color:#2c2a25;max-width:460px;margin:0 auto}
    .m10-wrap{display:flex;flex-direction:column;align-items:center;overflow:hidden}
    .m10-steps{display:flex;flex-direction:column;align-items:center;width:100%;position:relative}
    .m10-step{height:20px;border:2px solid rgba(44,42,37,.4);position:relative;overflow:hidden;
      background:linear-gradient(180deg,#9a9488,#8a8478)}
    .m10-water{position:absolute;top:0;left:30%;width:12%;height:100%;
      background:linear-gradient(180deg,rgba(120,160,180,.2),rgba(120,160,180,.05));
      animation:m10-flow 2s ease-in-out infinite}
    @keyframes m10-flow{0%{transform:translateX(-10px);opacity:.3}50%{opacity:.6}100%{transform:translateX(10px);opacity:.3}}
    .m10-door{width:32%;min-height:140px;background:linear-gradient(180deg,#1a1815,#0a0908);
      border:2px solid rgba(44,42,37,.5);display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:.5rem;padding:1rem;position:relative;
      box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
    .m10-mist{position:absolute;inset:0;
      background:radial-gradient(ellipse at 50% 0%,rgba(160,180,200,.08),transparent 50%);pointer-events:none}
    .m10-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.05rem;
      letter-spacing:.08em;text-transform:uppercase;color:#b8a888;text-align:center;
      text-shadow:0 0 8px rgba(180,160,130,.15);transition:letter-spacing .5s;z-index:1}
    .m10-link:hover .m10-label{letter-spacing:.16em}
    .m10-sub{font-family:"Courier Prime",monospace;font-size:.5rem;letter-spacing:.15em;
      text-transform:uppercase;color:rgba(180,160,130,.3);z-index:1}
    .m10-pool{width:80%;height:12px;position:relative;
      background:linear-gradient(180deg,rgba(120,160,180,.15),rgba(120,160,180,.05));
      border:1px solid rgba(44,42,37,.15);border-radius:0 0 4px 4px;overflow:hidden}
    .m10-ripple{position:absolute;top:50%;left:50%;border:1px solid rgba(120,160,180,.15);
      border-radius:50%;transform:translate(-50%,-50%)}
    .m10-r1{width:40px;height:8px;animation:m10-expand 3s ease infinite}
    .m10-r2{width:20px;height:4px;animation:m10-expand 3s ease 1.5s infinite}
    @keyframes m10-expand{0%{opacity:.5;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(2.5)}}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   MC — Collapsed Mayan Pyramid
   Stepped pyramid top + dark chamber + massive rubble field
   ═══════════════════════════════════════════════ */
export function MC() {
  const rubble = [
    {w:28,h:12,r:-8,x:5,y:0},{w:18,h:8,r:14,x:22,y:4},{w:34,h:14,r:-3,x:38,y:1},
    {w:14,h:6,r:22,x:60,y:6},{w:22,h:10,r:-12,x:75,y:2},{w:10,h:7,r:6,x:88,y:5},
    {w:26,h:11,r:-18,x:8,y:14},{w:16,h:9,r:10,x:30,y:16},{w:30,h:13,r:-5,x:48,y:12},
    {w:12,h:6,r:28,x:68,y:18},{w:20,h:8,r:-14,x:82,y:15},{w:18,h:10,r:8,x:12,y:26},
    {w:24,h:7,r:-9,x:35,y:28},{w:10,h:5,r:16,x:55,y:24},{w:32,h:12,r:-6,x:65,y:22},
    {w:14,h:8,r:20,x:85,y:27},{w:22,h:9,r:-22,x:5,y:36},{w:16,h:6,r:12,x:28,y:34},
    {w:28,h:11,r:-4,x:44,y:38},{w:12,h:5,r:18,x:64,y:32},{w:20,h:8,r:-10,x:78,y:36},
    {w:18,h:7,r:7,x:18,y:44},{w:26,h:10,r:-15,x:40,y:42},{w:10,h:6,r:24,x:58,y:40},
    {w:24,h:9,r:-8,x:72,y:46},{w:14,h:6,r:11,x:90,y:43}
  ];
  return (<Link to="/blogs" className="mc-link"><div className="mc-wrap">
    <div className="mc-steps">
      <div className="mc-step" style={{width:'100%'}}/>
      <div className="mc-step" style={{width:'88%'}}/>
      <div className="mc-step" style={{width:'76%'}}/>
      <div className="mc-step" style={{width:'64%'}}/>
      <div className="mc-step" style={{width:'52%'}}/>
    </div>
    <div className="mc-chamber">
      <div className="mc-mask">꩜</div>
      <span className="mc-label">{LABEL}</span>
      <span className="mc-sub">{SUB}</span>
      <div className="mc-vine mc-vine-l"/>
      <div className="mc-vine mc-vine-r"/>
    </div>
    <div className="mc-rubble-field">
      {rubble.map((b, i) => <div key={i} className="mc-block" style={{
        width:`${b.w}px`, height:`${b.h}px`,
        transform:`rotate(${b.r}deg)`,
        left:`${b.x}%`, top:`${b.y}px`
      }}/>)}
    </div>
    <div className="mc-dust"/>
  </div>
  <style>{`
    .mc-link{display:block;text-decoration:none;color:#2c2a25;max-width:460px;margin:0 auto}
    .mc-wrap{display:flex;flex-direction:column;align-items:center}
    .mc-steps{display:flex;flex-direction:column;align-items:center;width:100%}
    .mc-step{height:22px;border:2px solid rgba(44,42,37,.4);position:relative;
      background:repeating-linear-gradient(90deg,transparent 0,transparent 18px,rgba(0,0,0,.06) 18px,rgba(0,0,0,.06) 20px),
      linear-gradient(180deg,#8a8478,#7a7a6a);
      box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
    .mc-chamber{width:40%;min-height:160px;
      background:linear-gradient(180deg,#2c2a25,#1a1815);
      border:2px solid rgba(44,42,37,.5);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      gap:.5rem;padding:1.5rem 1rem;position:relative;
      box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
    .mc-mask{font-size:2rem;color:#b8a888;opacity:.5;
      filter:drop-shadow(0 0 6px rgba(180,160,130,.2));transition:all .6s}
    .mc-link:hover .mc-mask{opacity:.9;filter:drop-shadow(0 0 12px rgba(180,160,130,.4))}
    .mc-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.1em;text-transform:uppercase;color:#b8a888;text-align:center;
      text-shadow:0 0 8px rgba(180,160,130,.2);transition:letter-spacing .5s}
    .mc-link:hover .mc-label{letter-spacing:.18em}
    .mc-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(180,160,130,.35)}
    .mc-vine{position:absolute;width:3px;
      background:linear-gradient(180deg,#5a7a3a,transparent);border-radius:2px}
    .mc-vine-l{top:0;left:12%;height:35%;transform:rotate(6deg)}
    .mc-vine-r{top:0;right:15%;height:28%;transform:rotate(-4deg)}
    .mc-rubble-field{position:relative;width:100%;height:55px;padding:6px 0;
      background:linear-gradient(180deg,#8a8478,#9a9488,#a8a090);overflow:hidden}
    .mc-block{position:absolute;border-radius:1px;
      background:linear-gradient(180deg,#9a9488,#7a7a6a);
      border:1px solid rgba(44,42,37,.3);
      box-shadow:1px 1px 2px rgba(0,0,0,.1)}
    .mc-dust{height:6px;background:linear-gradient(180deg,#a8a090,rgba(168,160,144,0))}
  `}</style></Link>);
}
