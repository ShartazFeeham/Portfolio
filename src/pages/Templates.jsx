import { Link } from 'react-router-dom';
import { M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, MC } from '../components/templates/MayanVariations';

export default function Templates() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-12 font-times text-sm text-[#2c2a25]/60 hover:text-[#2c2a25] transition-colors">
          &larr; Back home
        </Link>

        <h1 className="font-headline font-black text-3xl uppercase text-[#2c2a25] mb-12">Templates</h1>

        <div className="space-y-24">
          <T n="01" t="Collapsed Temple Doorway"><R1 /></T>
          <T n="02" t="Egyptian Tomb Entrance"><R2 /></T>
          <T n="03" t="Weathered Roman Arch"><R3 /></T>
          <T n="04" t="Mayan Stone Steps"><R4 /></T>
          <T n="05" t="Celtic Dolmen"><R5 /></T>
          <T n="06" t="Babylonian Gate"><R6 /></T>
          <T n="07" t="Greek Temple Ruin"><R7 /></T>
          <T n="08" t="Jungle-Covered Ruin"><R8 /></T>
          <T n="09" t="Rose-Red Rock Carving"><R9 /></T>
          <T n="10" t="Viking Rune Stone"><R10 /></T>
        </div>

        <div className="mt-24 pt-12 border-t-2 border-[#2c2a25]/10">
          <h2 className="font-headline font-black text-2xl uppercase text-[#2c2a25] mb-4">Mayan Variations</h2>
          <p className="font-times text-sm text-[#2c2a25]/40 mb-12">10 structurally diverse takes on the stepped pyramid</p>

          <div className="space-y-24">
            <T n="M1" t="Split Pyramid"><M1 /></T>
            <T n="M2" t="Tunnel Perspective"><M2 /></T>
            <T n="M3" t="Hanging Vine Arch"><M3 /></T>
            <T n="M4" t="Collapsed Staircase"><M4 /></T>
            <T n="M5" t="Circular Calendar"><M5 /></T>
            <T n="M6" t="Bridge to Temple"><M6 /></T>
            <T n="M7" t="Spiral Temple"><M7 /></T>
            <T n="M8" t="Totem Pole Entrance"><M8 /></T>
            <T n="M9" t="Zigzag Earthquake"><M9 /></T>
            <T n="M10" t="Waterfall Staircase"><M10 /></T>
            <T n="★" t="Collapsed Mayan (Pick)"><MC /></T>
          </div>
        </div>
      </div>
    </div>
  );
}

function T({ n, t, children }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-times text-xs tracking-[0.3em] text-[#2c2a25]/30 uppercase">{n}</span>
        <h2 className="font-headline font-bold text-lg uppercase text-[#2c2a25]/50 tracking-wide">{t}</h2>
      </div>
      {children}
    </section>
  );
}

const LABEL = 'Enter the Archives';
const SUB = 'All blogs await within';

/* ═══════════════════════════════════════════════
   01 — Collapsed Temple Doorway
   Broken pediment, cracked columns, rubble at base
   ═══════════════════════════════════════════════ */
function R1() {
  return (<Link to="/blogs" className="r1-link"><div className="r1-gate">
    <div className="r1-pediment">
      <svg viewBox="0 0 500 70" preserveAspectRatio="none" className="r1-pediment-svg">
        <path d="M0,70 L0,55 L30,55 L30,45 L60,45 L60,38 L100,38 L100,32 L140,32 L140,28 L200,28 L200,22 L250,8 L300,22 L300,28 L340,28 L340,35 L380,35 L380,42 L420,42 L420,50 L460,50 L460,58 L500,58 L500,70 Z" fill="#8a7e6e" stroke="#2c2a25" strokeWidth="1.5"/>
        <line x1="80" y1="38" x2="120" y2="42" stroke="#2c2a25" strokeWidth="0.8" opacity="0.4"/>
        <line x1="350" y1="36" x2="400" y2="40" stroke="#2c2a25" strokeWidth="0.8" opacity="0.3"/>
        <rect x="140" y="14" width="1.5" height="20" fill="#2c2a25" opacity="0.2" transform="rotate(-3 140 14)"/>
      </svg>
    </div>
    <div className="r1-body">
      <div className="r1-col r1-col-l">
        <div className="r1-flute"/><div className="r1-flute"/><div className="r1-flute"/>
        <div className="r1-crack r1-cr-l1"/><div className="r1-crack r1-cr-l2"/>
        <div className="r1-moss r1-moss-l"/>
      </div>
      <div className="r1-door">
        <div className="r1-door-inner">
          <div className="r1-vine r1-vine-l"/>
          <div className="r1-vine r1-vine-r"/>
          <div className="r1-stone-text">
            <span className="r1-label">{LABEL}</span>
            <div className="r1-divider"><span className="r1-dia">◆</span></div>
            <span className="r1-sub">{SUB}</span>
          </div>
        </div>
      </div>
      <div className="r1-col r1-col-r">
        <div className="r1-flute"/><div className="r1-flute"/><div className="r1-flute"/>
        <div className="r1-crack r1-cr-r1"/>
        <div className="r1-moss r1-moss-r"/>
        <div className="r1-chip r1-chip-r"/>
      </div>
    </div>
    <div className="r1-rubble">
      <div className="r1-stone r1-stone-1"/><div className="r1-stone r1-stone-2"/>
      <div className="r1-stone r1-stone-3"/><div className="r1-stone r1-stone-4"/>
      <div className="r1-stone r1-stone-5"/>
    </div>
    <div className="r1-dust"/>
  </div>
  <style>{`
    .r1-link{display:block;text-decoration:none;color:#2c2a25;max-width:520px;margin:0 auto}
    .r1-gate{position:relative;background:linear-gradient(180deg,#a89878,#968868);overflow:visible}
    .r1-pediment{position:relative;height:70px}
    .r1-pediment-svg{width:100%;height:100%;display:block}
    .r1-body{display:flex;gap:0}
    .r1-col{width:44px;background:linear-gradient(90deg,#9a8c72,#b8a888,#9a8c72);position:relative;
      border:2px solid #2c2a25;min-height:180px;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}
    .r1-col-l{border-right-width:3px}.r1-col-r{border-left-width:3px}
    .r1-flute{width:2px;flex:1;background:rgba(44,42,37,.12);border-radius:1px;max-height:40px}
    .r1-crack{position:absolute;background:rgba(0,0,0,.2)}
    .r1-cr-l1{left:15px;top:20px;width:1.5px;height:45px;transform:rotate(3deg)}
    .r1-cr-l2{left:25px;top:90px;width:1px;height:35px;transform:rotate(-4deg)}
    .r1-cr-r1{right:10px;top:40px;width:1.5px;height:55px;transform:rotate(-2deg)}
    .r1-moss{position:absolute;border-radius:40% 50% 20% 30%}
    .r1-moss-l{top:0;left:-3px;width:16px;height:22px;background:radial-gradient(ellipse,#4a6a2a,#2d4a15);opacity:.6}
    .r1-moss-r{top:4px;right:-4px;width:14px;height:18px;background:radial-gradient(ellipse,#5a7a3a,#3d5a28);opacity:.5}
    .r1-chip{position:absolute;bottom:0;right:0;width:18px;height:14px;
      background:linear-gradient(135deg,transparent 50%,#968868 50%);border-top:1px solid #2c2a25;border-left:1px solid #2c2a25}
    .r1-door{flex:1;background:linear-gradient(180deg,#3d3832,#2c2a25 40%,#1a1815);
      position:relative;overflow:hidden}
    .r1-door-inner{position:absolute;inset:8px;display:flex;align-items:center;justify-content:center;
      border:1px solid rgba(232,225,207,.08)}
    .r1-vine{position:absolute;width:3px;background:linear-gradient(180deg,#5a7a3a,#3d5a28);border-radius:2px}
    .r1-vine-l{left:15%;top:0;height:60%;transform:rotate(8deg)}
    .r1-vine-l::after{content:'';position:absolute;bottom:0;left:-8px;width:16px;height:16px;
      background:radial-gradient(ellipse,#5a7a3a,transparent);border-radius:50%;opacity:.7}
    .r1-vine-r{right:20%;top:10%;height:50%;transform:rotate(-5deg)}
    .r1-vine-r::after{content:'';position:absolute;top:20px;right:-10px;width:14px;height:14px;
      background:radial-gradient(ellipse,#4a6a2a,transparent);border-radius:50%;opacity:.6}
    .r1-stone-text{display:flex;flex-direction:column;align-items:center;gap:.5rem;z-index:1;padding:1rem}
    .r1-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#e8dcc8;text-align:center;
      text-shadow:0 0 8px rgba(232,225,207,.3);transition:all .5s}
    .r1-link:hover .r1-label{letter-spacing:.2em;text-shadow:0 0 16px rgba(232,225,207,.5)}
    .r1-divider{display:flex;align-items:center;gap:.8rem;width:100%;justify-content:center}
    .r1-divider::before,.r1-divider::after{content:'';flex:1;max-width:50px;height:1px;background:rgba(232,225,207,.25)}
    .r1-dia{color:rgba(232,225,207,.3);font-size:.5rem}
    .r1-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(232,225,207,.4)}
    .r1-rubble{display:flex;justify-content:center;align-items:flex-end;gap:4px;padding:0 30px;
      height:20px;background:linear-gradient(180deg,#968868,#8a7e6e)}
    .r1-stone{background:#8a7e6e;border:1px solid rgba(44,42,37,.4);border-radius:1px}
    .r1-stone-1{width:22px;height:12px;transform:rotate(-3deg)}.r1-stone-2{width:16px;height:9px;transform:rotate(5deg);margin-bottom:2px}
    .r1-stone-3{width:28px;height:10px;transform:rotate(-1deg);margin-bottom:1px}.r1-stone-4{width:14px;height:8px;transform:rotate(4deg)}
    .r1-stone-5{width:20px;height:11px;transform:rotate(-6deg);margin-bottom:1px}
    .r1-dust{height:4px;background:linear-gradient(180deg,#8a7e6e,#a89878);opacity:.5}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   02 — Egyptian Tomb Entrance
   Hieroglyphic borders, sandstone, sloped walls
   ═══════════════════════════════════════════════ */
function R2() {
  return (<Link to="/blogs" className="r2-link"><div className="r2-gate">
    <div className="r2-wing r2-wing-l"/>
    <div className="r2-center">
      <div className="r2-lintel">
        <span>𓂀 𓁹 𓃭 𓆣 𓋹 𓆣 𓃭 𓁹 𓂀</span>
      </div>
      <div className="r2-frame">
        <div className="r2-hiero r2-hiero-l">
          <span>𓊖</span><span>𓏏</span><span>𓈖</span><span>𓊝</span><span>𓋴</span><span>𓐍</span>
        </div>
        <div className="r2-entrance">
          <div className="r2-eye-of-horus">𓂀</div>
          <span className="r2-label">{LABEL}</span>
          <div className="r2-scarab">𓆣</div>
          <span className="r2-sub">{SUB}</span>
        </div>
        <div className="r2-hiero r2-hiero-r">
          <span>𓐍</span><span>𓋴</span><span>𓊝</span><span>𓈖</span><span>𓏏</span><span>𓊖</span>
        </div>
      </div>
      <div className="r2-base"/>
    </div>
    <div className="r2-wing r2-wing-r"/>
    <div className="r2-sand"/>
  </div>
  <style>{`
    .r2-link{display:block;text-decoration:none;color:#2c2a25;max-width:540px;margin:0 auto}
    .r2-gate{display:flex;position:relative}
    .r2-wing{width:28px;background:linear-gradient(90deg,#c4a050,#b8944a);
      border:2px solid #5c4a20;min-height:220px;position:relative}
    .r2-wing::after{content:'';position:absolute;inset:0;
      background:repeating-linear-gradient(180deg,transparent 0,transparent 10px,rgba(44,42,37,.08) 10px,rgba(44,42,37,.08) 11px)}
    .r2-wing-l{border-right-width:3px;clip-path:polygon(0 0,100% 8%,100% 100%,0 100%)}
    .r2-wing-r{border-left-width:3px;clip-path:polygon(0 8%,100% 0,100% 100%,0 100%)}
    .r2-center{flex:1;border-top:3px solid #5c4a20;border-bottom:3px solid #5c4a20}
    .r2-lintel{background:linear-gradient(180deg,#a88030,#947228);padding:.6rem 1rem;
      text-align:center;border-bottom:2px solid #5c4a20;box-shadow:inset 0 -2px 4px rgba(0,0,0,.15)}
    .r2-lintel span{font-size:.85rem;letter-spacing:.4em;color:#e8dcc8}
    .r2-frame{display:flex;background:linear-gradient(180deg,#c4a050,#b8944a)}
    .r2-hiero{width:36px;display:flex;flex-direction:column;align-items:center;justify-content:space-around;
      padding:.5rem 0;background:rgba(44,42,37,.06);border-left:1px solid rgba(92,74,32,.3);border-right:1px solid rgba(92,74,32,.3)}
    .r2-hiero span{font-size:.7rem;color:#5c4a20;opacity:.5}
    .r2-entrance{flex:1;background:linear-gradient(180deg,#2a1f10,#1a1208);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      gap:.5rem;padding:2rem 1.5rem;position:relative;
      box-shadow:inset 0 0 40px rgba(0,0,0,.4)}
    .r2-eye-of-horus{font-size:2.2rem;color:#c4a050;opacity:.7;filter:drop-shadow(0 0 8px rgba(196,160,80,.3));
      transition:all .6s}
    .r2-link:hover .r2-eye-of-horus{opacity:1;filter:drop-shadow(0 0 16px rgba(196,160,80,.5))}
    .r2-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#c4a050;text-align:center;
      text-shadow:0 0 6px rgba(196,160,80,.2);transition:letter-spacing .5s}
    .r2-link:hover .r2-label{letter-spacing:.2em}
    .r2-scarab{font-size:1rem;color:#c4a050;opacity:.4}
    .r2-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(196,160,80,.35)}
    .r2-base{height:10px;background:linear-gradient(180deg,#947228,#7a5e20)}
    .r2-sand{position:absolute;bottom:0;left:0;right:0;height:6px;
      background:linear-gradient(180deg,rgba(194,170,110,.6),rgba(194,170,110,0))}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   03 — Weathered Roman Arch
   Keystone arch, worn stone blocks, partial collapse
   ═══════════════════════════════════════════════ */
function R3() {
  return (<Link to="/blogs" className="r3-link"><div className="r3-gate">
    <svg viewBox="0 0 500 120" preserveAspectRatio="none" className="r3-arch-top">
      {[...Array(13)].map((_, i) => {
        const cx = 250, cy = 100, rx = 220, ry = 90;
        const step = Math.PI / 14;
        const a1 = Math.PI + i * step, a2 = Math.PI + (i + 1) * step;
        const x1 = cx + rx * Math.cos(a1), y1 = cy + ry * Math.sin(a1);
        const x2 = cx + rx * Math.cos(a2), y2 = cy + ry * Math.sin(a2);
        const kx = (x1 + x2) / 2, ky = Math.min(y1, y2) - 6;
        return <rect key={i} x={Math.min(x1,x2)} y={Math.min(y1,y2)-2} width={Math.abs(x2-x1)+1} height={12}
          fill="none" stroke="#2c2a25" strokeWidth="1.2" rx="0.5" opacity="0.6"
          transform={`rotate(${(a1+a2)/2*180/Math.PI - 90} ${kx} ${ky})`}/>;
      })}
      <rect x="245" y="2" width="10" height="14" fill="#2c2a25" opacity="0.4" rx="0.5"/>
      <line x1="60" y1="110" x2="60" y2="100" stroke="#2c2a25" strokeWidth="2" opacity="0.15"/>
      <line x1="440" y1="110" x2="440" y2="102" stroke="#2c2a25" strokeWidth="2" opacity="0.12"/>
    </svg>
    <div className="r3-walls">
      <div className="r3-wall r3-wall-l">
        {[...Array(8)].map((_, i) => <div key={i} className="r3-brick" style={{height: i%2?'22px':'20px', marginLeft: i%2?'8px':'0'}}/>)}
      </div>
      <div className="r3-dark">
        <div className="r3-content">
          <span className="r3-label">{LABEL}</span>
          <div className="r3-line"/>
          <span className="r3-sub">{SUB}</span>
        </div>
      </div>
      <div className="r3-wall r3-wall-r">
        {[...Array(8)].map((_, i) => <div key={i} className="r3-brick" style={{height: i%2?'20px':'22px', marginLeft: i%2?'0':'8px'}}/>)}
        <div className="r3-gap"/>
      </div>
    </div>
    <div className="r3-ground"/>
  </div>
  <style>{`
    .r3-link{display:block;text-decoration:none;color:#2c2a25;max-width:520px;margin:0 auto}
    .r3-gate{position:relative;background:linear-gradient(180deg,#b8a888,#a09070)}
    .r3-arch-top{display:block;width:100%;height:120px;background:linear-gradient(180deg,#a09070,#b8a888)}
    .r3-walls{display:flex}
    .r3-wall{width:50px;background:linear-gradient(90deg,#a89878,#b8a888,#a89878);
      display:flex;flex-direction:column;justify-content:flex-start;overflow:hidden;position:relative}
    .r3-brick{width:100%;border-bottom:1px solid rgba(44,42,37,.2);border-right:1px solid rgba(44,42,37,.15)}
    .r3-gap{position:absolute;bottom:10px;right:0;width:20px;height:24px;background:#a09070;
      border-left:1px solid rgba(44,42,37,.2)}
    .r3-dark{flex:1;background:linear-gradient(180deg,#2c2a25,#1a1815);min-height:160px;
      display:flex;align-items:center;justify-content:center;position:relative;
      box-shadow:inset 0 0 50px rgba(0,0,0,.5)}
    .r3-content{display:flex;flex-direction:column;align-items:center;gap:.6rem;z-index:1}
    .r3-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#e8dcc8;text-align:center;
      text-shadow:0 0 8px rgba(232,225,207,.2);transition:letter-spacing .5s}
    .r3-link:hover .r3-label{letter-spacing:.2em;text-shadow:0 0 14px rgba(232,225,207,.4)}
    .r3-line{width:60px;height:1px;background:rgba(232,225,207,.2)}
    .r3-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(232,225,207,.3)}
    .r3-ground{height:8px;background:linear-gradient(180deg,#8a7e6e,#a09070);
      display:flex;justify-content:center;gap:6px;align-items:flex-start;padding-top:2px}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   04 — Mayan Stone Steps
   Stepped pyramid silhouette, vine-covered stone
   ═══════════════════════════════════════════════ */
function R4() {
  return (<Link to="/blogs" className="r4-link"><div className="r4-pyramid">
    <div className="r4-step r4-s1"/><div className="r4-step r4-s2"/><div className="r4-step r4-s3"/>
    <div className="r4-step r4-s4"/><div className="r4-step r4-s5"/>
    <div className="r4-chamber">
      <div className="r4-mask">꩜</div>
      <span className="r4-label">{LABEL}</span>
      <span className="r4-sub">{SUB}</span>
      <div className="r4-vine-t r4-vine-tl"/><div className="r4-vine-t r4-vine-tr"/>
    </div>
    <div className="r4-ground">
      <div className="r4-root r4-root-l"/><div className="r4-root r4-root-r"/>
    </div>
  </div>
  <style>{`
    .r4-link{display:block;text-decoration:none;color:#2c2a25;max-width:460px;margin:0 auto}
    .r4-pyramid{position:relative;display:flex;flex-direction:column;align-items:center;
      padding-top:0;overflow:hidden}
    .r4-step{width:100%;border:2px solid rgba(44,42,37,.4);position:relative;
      background:linear-gradient(180deg,#7a8a60,#6a7a50)}
    .r4-step::after{content:'';position:absolute;inset:0;
      background:repeating-linear-gradient(90deg,transparent 0,transparent 18px,rgba(0,0,0,.06) 18px,rgba(0,0,0,.06) 20px)}
    .r4-s1{height:24px;width:100%}.r4-s2{height:24px;width:88%}.r4-s3{height:24px;width:76%}
    .r4-s4{height:24px;width:64%}.r4-s5{height:22px;width:52%}
    .r4-chamber{width:40%;min-height:160px;background:linear-gradient(180deg,#3d3832,#1a1815);
      border:2px solid rgba(44,42,37,.5);display:flex;flex-direction:column;align-items:center;
      justify-content:center;gap:.5rem;padding:1.5rem 1rem;position:relative;
      box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
    .r4-mask{font-size:2rem;color:#a09070;opacity:.6;filter:drop-shadow(0 0 6px rgba(160,144,112,.2));transition:all .6s}
    .r4-link:hover .r4-mask{opacity:1;filter:drop-shadow(0 0 12px rgba(160,144,112,.4))}
    .r4-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.1rem;
      letter-spacing:.1em;text-transform:uppercase;color:#a09070;text-align:center;transition:letter-spacing .5s}
    .r4-link:hover .r4-label{letter-spacing:.18em}
    .r4-sub{font-family:"Courier Prime",monospace;font-size:.55rem;letter-spacing:.18em;
      text-transform:uppercase;color:rgba(160,144,112,.35)}
    .r4-vine-t{position:absolute;width:3px;background:linear-gradient(180deg,#5a7a3a,transparent);border-radius:2px}
    .r4-vine-tl{top:0;left:12%;height:35%;transform:rotate(6deg)}
    .r4-vine-tr{top:0;right:15%;height:28%;transform:rotate(-4deg)}
    .r4-ground{width:100%;height:10px;background:linear-gradient(180deg,#5a6a40,#7a8a60);position:relative}
    .r4-root{position:absolute;bottom:0;height:20px;width:30px;
      background:radial-gradient(ellipse at bottom,#4a3a20,transparent 70%);opacity:.5}
    .r4-root-l{left:10%}.r4-root-r{right:15%}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   05 — Celtic Dolmen
   Two standing stones supporting a massive capstone
   ═══════════════════════════════════════════════ */
function R5() {
  return (<Link to="/blogs" className="r5-link"><div className="r5-dolmen">
    <div className="r5-capstone">
      <div className="r5-lichen r5-lichen-l"/><div className="r5-lichen r5-lichen-r"/>
      <div className="r5-crack-cap"/>
    </div>
    <div className="r5-pillars">
      <div className="r5-pillar r5-pillar-l">
        <div className="r5-ogham">
          <span>᚛ᚑᚌᚐᚋ᚜</span>
        </div>
        <div className="r5-moss-pillar"/>
      </div>
      <div className="r5-space">
        <div className="r5-mist"/>
        <div className="r5-text">
          <span className="r5-label">{LABEL}</span>
          <div className="r5-triple">☬</div>
          <span className="r5-sub">{SUB}</span>
        </div>
      </div>
      <div className="r5-pillar r5-pillar-r">
        <div className="r5-ogham">
          <span>᚛ᚁᚓᚂᚔ᚜</span>
        </div>
        <div className="r5-moss-pillar r5-moss-pillar-r"/>
      </div>
    </div>
    <div className="r5-earth"/>
  </div>
  <style>{`
    .r5-link{display:block;text-decoration:none;color:#2c2a25;max-width:480px;margin:0 auto}
    .r5-dolmen{display:flex;flex-direction:column;align-items:center}
    .r5-capstone{width:105%;height:28px;background:linear-gradient(180deg,#8a8070,#7a7060,#6a6050);
      border:2px solid #2c2a25;border-radius:2px 2px 0 0;position:relative;
      box-shadow:0 4px 12px rgba(44,42,37,.3);transform:rotate(-1deg)}
    .r5-lichen{position:absolute;width:28px;height:14px;border-radius:40%;opacity:.5}
    .r5-lichen-l{top:2px;left:8px;background:radial-gradient(ellipse,#8aaa5a,#5a7a2a)}
    .r5-lichen-r{top:4px;right:12px;width:22px;height:10px;background:radial-gradient(ellipse,#7a9a4a,#4a6a1a)}
    .r5-crack-cap{position:absolute;bottom:0;left:35%;width:1.5px;height:60%;background:rgba(0,0,0,.2)}
    .r5-pillars{display:flex;gap:0;width:100%}
    .r5-pillar{width:50px;min-height:180px;background:linear-gradient(90deg,#7a7060,#9a9080,#7a7060);
      border:2px solid #2c2a25;position:relative}
    .r5-pillar-l{transform:rotate(1.5deg);border-radius:2px 0 0 0}
    .r5-pillar-r{transform:rotate(-1deg);border-radius:0 2px 0 0}
    .r5-ogham{position:absolute;top:20px;writing-mode:vertical-rl;left:50%;transform:translateX(-50%)}
    .r5-ogham span{font-size:.65rem;color:#2c2a25;opacity:.3;letter-spacing:.3em}
    .r5-moss-pillar{position:absolute;top:-2px;left:-3px;width:18px;height:30px;
      background:radial-gradient(ellipse at top,#5a7a3a,transparent 70%);opacity:.5;border-radius:40% 40% 0 0}
    .r5-moss-pillar-r{left:auto;right:-3px;width:14px;height:24px}
    .r5-space{flex:1;min-height:180px;background:linear-gradient(180deg,#4a4840,#2c2a25 40%,#1a1815);
      display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
    .r5-mist{position:absolute;inset:0;
      background:radial-gradient(ellipse at 50% 60%,rgba(160,150,130,.08),transparent 60%)}
    .r5-text{display:flex;flex-direction:column;align-items:center;gap:.5rem;z-index:1}
    .r5-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#c8baa0;text-align:center;transition:letter-spacing .5s}
    .r5-link:hover .r5-label{letter-spacing:.2em}
    .r5-triple{font-size:1.3rem;color:#c8baa0;opacity:.4;transition:opacity .5s}
    .r5-link:hover .r5-triple{opacity:.7}
    .r5-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(200,186,160,.3)}
    .r5-earth{width:110%;height:8px;background:linear-gradient(180deg,#5a5040,#4a4030);
      border-radius:0 0 3px 3px}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   06 — Babylonian Gate
   Glazed brick bands, worn animal relief, desert sand
   ═══════════════════════════════════════════════ */
function R6() {
  return (<Link to="/blogs" className="r6-link"><div className="r6-gate">
    <div className="r6-crenellation">
      {[...Array(10)].map((_, i) => <div key={i} className="r6-merlon"/>)}
    </div>
    <div className="r6-bands">
      <div className="r6-band r6-band-gold"/>
      <div className="r6-band r6-band-blue"/>
      <div className="r6-band r6-band-gold r6-band-thin"/>
      <div className="r6-band r6-band-blue"/>
    </div>
    <div className="r6-portal">
      <div className="r6-beast">𒌑</div>
      <div className="r6-inner">
        <span className="r6-label">{LABEL}</span>
        <div className="r6-cuneiform">𒀭 𒊩 𒌆</div>
        <span className="r6-sub">{SUB}</span>
      </div>
    </div>
    <div className="r6-bands">
      <div className="r6-band r6-band-blue"/>
      <div className="r6-band r6-band-gold r6-band-thin"/>
      <div className="r6-band r6-band-blue"/>
      <div className="r6-band r6-band-gold"/>
    </div>
    <div className="r6-sand"/>
  </div>
  <style>{`
    .r6-link{display:block;text-decoration:none;color:#2c2a25;max-width:480px;margin:0 auto}
    .r6-gate{border:3px solid #2c2a25;background:#8b7a50;overflow:hidden}
    .r6-crenellation{display:flex;justify-content:space-around;padding:0 4px}
    .r6-merlon{width:24px;height:16px;background:#8b7a50;border:2px solid #2c2a25;border-bottom:none}
    .r6-bands{display:flex;flex-direction:column}
    .r6-band{height:6px;position:relative}
    .r6-band::after{content:'';position:absolute;inset:0;
      background:repeating-linear-gradient(90deg,transparent 0,transparent 14px,rgba(0,0,0,.1) 14px,rgba(0,0,0,.1) 16px)}
    .r6-band-gold{background:linear-gradient(180deg,#c4a050,#a88030)}
    .r6-band-blue{background:linear-gradient(180deg,#2a4a7a,#1a3a6a)}
    .r6-band-thin{height:3px}
    .r6-portal{background:linear-gradient(180deg,#1a3a6a,#0f2850);min-height:180px;
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;
      padding:1.5rem;position:relative;
      box-shadow:inset 0 0 60px rgba(0,0,0,.4)}
    .r6-beast{font-size:2.5rem;color:#c4a050;opacity:.5;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3));transition:all .6s}
    .r6-link:hover .r6-beast{opacity:.8;filter:drop-shadow(0 2px 8px rgba(196,160,80,.4))}
    .r6-inner{display:flex;flex-direction:column;align-items:center;gap:.4rem}
    .r6-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#c4a050;text-align:center;
      text-shadow:0 0 6px rgba(196,160,80,.2);transition:letter-spacing .5s}
    .r6-link:hover .r6-label{letter-spacing:.2em}
    .r6-cuneiform{font-size:.8rem;color:#c4a050;opacity:.35;letter-spacing:.4em}
    .r6-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(196,160,80,.3)}
    .r6-sand{height:6px;background:linear-gradient(180deg,#c4a050,#d4b870,transparent);opacity:.6}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   07 — Greek Temple Ruin
   Broken columns, fallen entablature, olive grove feel
   ═══════════════════════════════════════════════ */
function R7() {
  return (<Link to="/blogs" className="r7-link"><div className="r7-temple">
    <div className="r7-entablature">
      <div className="r7-triglyphs">
        {[...Array(8)].map((_, i) => <div key={i} className="r7-triglyph">
          <div className="r7-groove"/><div className="r7-groove"/><div className="r7-groove"/>
        </div>)}
      </div>
    </div>
    <div className="r7-colonnade">
      <div className="r7-col">
        <div className="r7-fluting"/><div className="r7-fluting"/><div className="r7-fluting"/>
        <div className="r7-fluting"/><div className="r7-fluting"/>
        <div className="r7-olive r7-olive-l"/>
      </div>
      <div className="r7-naos">
        <div className="r7-text">
          <span className="r7-greek">ΑΡΧΕΙΟΝ</span>
          <span className="r7-label">{LABEL}</span>
          <div className="r7-meander">
            <span>╍</span><span>╍</span><span>╍</span><span>╍</span><span>╍</span>
          </div>
          <span className="r7-sub">{SUB}</span>
        </div>
      </div>
      <div className="r7-col r7-col-broken">
        <div className="r7-fluting"/><div className="r7-fluting"/><div className="r7-fluting"/>
        <div className="r7-break-mark"/>
      </div>
    </div>
    <div className="r7-stylobate"/>
    <div className="r7-fallen">
      <div className="r7-drum"/><div className="r7-drum r7-drum-2"/>
    </div>
  </div>
  <style>{`
    .r7-link{display:block;text-decoration:none;color:#2c2a25;max-width:520px;margin:0 auto}
    .r7-temple{border:2px solid #2c2a25;overflow:visible}
    .r7-entablature{background:linear-gradient(180deg,#d8ccb8,#c8b8a0);border-bottom:3px solid #2c2a25;padding:0}
    .r7-triglyphs{display:flex;justify-content:space-around;padding:6px 8px}
    .r7-triglyph{display:flex;gap:2px}
    .r7-groove{width:3px;height:20px;background:rgba(44,42,37,.15);border-radius:0 0 1px 1px}
    .r7-colonnade{display:flex}
    .r7-col{width:48px;min-height:180px;background:linear-gradient(90deg,#d0c4a8,#e0d4b8,#d0c4a8);
      border-right:2px solid #2c2a25;display:flex;flex-direction:column;align-items:center;
      justify-content:space-around;padding:8px 0;position:relative}
    .r7-fluting{width:2px;height:28px;background:rgba(44,42,37,.08);border-radius:1px}
    .r7-olive{position:absolute;width:22px;height:18px;border-radius:40%;opacity:.45}
    .r7-olive-l{top:-4px;left:-6px;background:radial-gradient(ellipse,#6a8a4a,#3a5a1a)}
    .r7-col-broken{min-height:120px;clip-path:polygon(0 0,100% 0,100% 70%,90% 85%,100% 90%,95% 100%,0 100%)}
    .r7-break-mark{position:absolute;bottom:36px;left:0;right:0;height:2px;background:rgba(44,42,37,.15)}
    .r7-naos{flex:1;min-height:180px;background:linear-gradient(180deg,#3d3832,#1a1815);
      display:flex;align-items:center;justify-content:center;
      box-shadow:inset 0 0 50px rgba(0,0,0,.4)}
    .r7-text{display:flex;flex-direction:column;align-items:center;gap:.5rem}
    .r7-greek{font-family:"Playfair Display",serif;font-size:.7rem;letter-spacing:.4em;color:#d0c4a8;opacity:.4}
    .r7-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#d0c4a8;text-align:center;
      text-shadow:0 0 8px rgba(208,196,168,.2);transition:letter-spacing .5s}
    .r7-link:hover .r7-label{letter-spacing:.2em;text-shadow:0 0 14px rgba(208,196,168,.4)}
    .r7-meander{display:flex;gap:.3rem;color:#d0c4a8;opacity:.25}
    .r7-meander span{font-size:.6rem}
    .r7-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(208,196,168,.3)}
    .r7-stylobate{height:10px;background:linear-gradient(180deg,#c8b8a0,#b8a888);border-top:2px solid #2c2a25}
    .r7-fallen{display:flex;justify-content:flex-end;gap:6px;padding:4px 20px 0;position:relative}
    .r7-drum{width:36px;height:16px;background:linear-gradient(180deg,#d0c4a8,#c0b498);
      border:1.5px solid rgba(44,42,37,.3);border-radius:2px;transform:rotate(12deg)}
    .r7-drum-2{transform:rotate(-5deg);width:30px;height:14px;margin-top:4px}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   08 — Jungle-Covered Ruin (Angkor style)
   Roots splitting stone, dense moss, tropical decay
   ═══════════════════════════════════════════════ */
function R8() {
  return (<Link to="/blogs" className="r8-link"><div className="r8-ruin">
    <div className="r8-canopy">
      <div className="r8-leaf r8-leaf-1"/><div className="r8-leaf r8-leaf-2"/>
      <div className="r8-leaf r8-leaf-3"/><div className="r8-leaf r8-leaf-4"/>
    </div>
    <div className="r8-structure">
      <div className="r8-root r8-root-top-l"/><div className="r8-root r8-root-top-r"/>
      <div className="r8-face">꩝</div>
      <div className="r8-opening">
        <span className="r8-label">{LABEL}</span>
        <div className="r8-root-split"/>
        <span className="r8-sub">{SUB}</span>
      </div>
      <div className="r8-moss-mat"/>
    </div>
    <div className="r8-roots-base">
      <div className="r8-root-b r8-root-b1"/><div className="r8-root-b r8-root-b2"/>
      <div className="r8-root-b r8-root-b3"/>
    </div>
  </div>
  <style>{`
    .r8-link{display:block;text-decoration:none;color:#2c2a25;max-width:480px;margin:0 auto}
    .r8-ruin{position:relative;border:3px solid #2a3820;background:linear-gradient(180deg,#4a5838,#3a4828);overflow:hidden}
    .r8-canopy{position:absolute;top:0;left:0;right:0;height:50px;z-index:2}
    .r8-leaf{position:absolute;border-radius:0 60% 0 60%;opacity:.6}
    .r8-leaf-1{width:40px;height:22px;background:linear-gradient(135deg,#5a8a3a,#3a6a1a);top:2px;left:10%;transform:rotate(-15deg)}
    .r8-leaf-2{width:34px;height:18px;background:linear-gradient(135deg,#6a9a4a,#4a7a2a);top:6px;right:15%;transform:rotate(20deg)}
    .r8-leaf-3{width:28px;height:15px;background:linear-gradient(135deg,#4a7a2a,#2a5a0a);top:0;left:40%;transform:rotate(-8deg)}
    .r8-leaf-4{width:32px;height:16px;background:linear-gradient(135deg,#5a8a3a,#3a6a1a);top:10px;left:65%;transform:rotate(12deg)}
    .r8-structure{position:relative;padding:3rem 1.5rem 2rem;z-index:1}
    .r8-root{position:absolute;height:4px;border-radius:2px;
      background:linear-gradient(90deg,#5a4a30,#4a3a20)}
    .r8-root-top-l{top:30px;left:8%;width:35%;transform:rotate(8deg);z-index:3}
    .r8-root-top-r{top:25px;right:5%;width:40%;transform:rotate(-5deg);z-index:3}
    .r8-face{font-size:2.5rem;text-align:center;color:#7a8a60;opacity:.4;
      filter:drop-shadow(0 2px 4px rgba(0,0,0,.3));transition:all .6s;margin-bottom:.5rem}
    .r8-link:hover .r8-face{opacity:.7;filter:drop-shadow(0 2px 8px rgba(122,138,96,.4))}
    .r8-opening{display:flex;flex-direction:column;align-items:center;gap:.5rem;
      background:linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.7));padding:1.5rem;
      border:1px solid rgba(42,56,32,.5)}
    .r8-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#8aaa6a;text-align:center;
      text-shadow:0 0 8px rgba(138,170,106,.2);transition:letter-spacing .5s}
    .r8-link:hover .r8-label{letter-spacing:.2em}
    .r8-root-split{width:80%;height:3px;background:linear-gradient(90deg,transparent,#5a4a30 20%,#4a3a20 80%,transparent);
      border-radius:2px}
    .r8-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(138,170,106,.35)}
    .r8-moss-mat{position:absolute;bottom:0;left:0;right:0;height:20px;
      background:linear-gradient(180deg,transparent,rgba(74,106,42,.4));z-index:2}
    .r8-roots-base{display:flex;justify-content:center;gap:2px;padding:0 10%}
    .r8-root-b{height:14px;border-radius:0 0 40% 40%;opacity:.6}
    .r8-root-b1{width:20px;background:linear-gradient(180deg,#5a4a30,#4a3a20)}
    .r8-root-b2{width:16px;background:linear-gradient(180deg,#6a5a40,#5a4a30);margin-top:2px}
    .r8-root-b3{width:22px;background:linear-gradient(180deg,#5a4a30,#4a3a20)}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   09 — Rose-Red Rock Carving (Petra style)
   Carved into cliff face, Nabataean facade
   ═══════════════════════════════════════════════ */
function R9() {
  return (<Link to="/blogs" className="r9-link"><div className="r9-cliff">
    <div className="r9-rock r9-rock-l"/><div className="r9-rock r9-rock-r"/>
    <div className="r9-facade">
      <div className="r9-crown">
        <div className="r9-urn">🏛</div>
      </div>
      <div className="r9-frieze"/>
      <div className="r9-columns">
        <div className="r9-col-facade"/>
        <div className="r9-doorway">
          <div className="r9-shadow">
            <span className="r9-label">{LABEL}</span>
            <div className="r9-sand-line"/>
            <span className="r9-sub">{SUB}</span>
          </div>
        </div>
        <div className="r9-col-facade r9-col-facade-broken"/>
      </div>
      <div className="r9-steps">
        <div className="r9-step-s"/><div className="r9-step-s"/><div className="r9-step-s"/>
      </div>
    </div>
    <div className="r9-desert"/>
  </div>
  <style>{`
    .r9-link{display:block;text-decoration:none;color:#2c2a25;max-width:500px;margin:0 auto}
    .r9-cliff{position:relative;display:flex;justify-content:center;padding:1rem 0;
      background:linear-gradient(180deg,#c8785a,#b86848,#a85838)}
    .r9-rock{position:absolute;top:0;bottom:0;width:60px;z-index:2}
    .r9-rock-l{left:0;background:linear-gradient(90deg,rgba(160,80,50,.6),transparent)}
    .r9-rock-r{right:0;background:linear-gradient(-90deg,rgba(160,80,50,.6),transparent)}
    .r9-facade{width:80%;position:relative;z-index:1}
    .r9-crown{text-align:center;padding:.5rem 0}
    .r9-urn{font-size:1.5rem;opacity:.4;filter:grayscale(.3);transition:all .6s}
    .r9-link:hover .r9-urn{opacity:.7}
    .r9-frieze{height:6px;background:rgba(44,42,37,.15);margin-bottom:2px}
    .r9-columns{display:flex}
    .r9-col-facade{width:30px;min-height:150px;
      background:linear-gradient(90deg,#b06040,#c87858,#b06040);
      border:2px solid rgba(80,40,20,.4);position:relative}
    .r9-col-facade::after{content:'';position:absolute;inset:4px;
      border-left:1px solid rgba(80,40,20,.15);border-right:1px solid rgba(80,40,20,.15)}
    .r9-col-facade-broken{min-height:110px;clip-path:polygon(0 0,100% 0,100% 80%,70% 100%,0 90%)}
    .r9-doorway{flex:1;min-height:150px;
      background:linear-gradient(180deg,rgba(60,30,15,.9),rgba(30,15,5,.95));
      display:flex;align-items:center;justify-content:center;
      box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
    .r9-shadow{display:flex;flex-direction:column;align-items:center;gap:.5rem}
    .r9-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;color:#c8785a;text-align:center;
      text-shadow:0 0 8px rgba(200,120,90,.2);transition:letter-spacing .5s}
    .r9-link:hover .r9-label{letter-spacing:.2em;text-shadow:0 0 14px rgba(200,120,90,.4)}
    .r9-sand-line{width:50px;height:1px;background:rgba(200,120,90,.2)}
    .r9-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;color:rgba(200,120,90,.3)}
    .r9-steps{display:flex;flex-direction:column;align-items:center}
    .r9-step-s{width:80%;height:5px;background:rgba(80,40,20,.2);margin-top:1px}
    .r9-step-s:first-child{width:90%}.r9-step-s:last-child{width:70%}
    .r9-desert{position:absolute;bottom:0;left:0;right:0;height:8px;
      background:linear-gradient(180deg,rgba(200,160,100,.5),rgba(200,160,100,0))}
  `}</style></Link>);
}

/* ═══════════════════════════════════════════════
   10 — Viking Rune Stone
   Standing stone with runic inscription, lichen, weathered
   ═══════════════════════════════════════════════ */
function R10() {
  return (<Link to="/blogs" className="r10-link"><div className="r10-stone-wrap">
    <div className="r10-stone">
      <div className="r10-lichen r10-lichen-tl"/><div className="r10-lichen r10-lichen-tr"/>
      <div className="r10-rune-band">
        <div className="r10-rune-border">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ</div>
        <div className="r10-rune-content">
          <div className="r10-knot">
            <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="20" cy="20" r="14"/>
              <path d="M20,6 L20,34 M6,20 L34,20"/>
              <circle cx="20" cy="20" r="6"/>
            </svg>
          </div>
          <span className="r10-label">{LABEL}</span>
          <span className="r10-sub">{SUB}</span>
        </div>
        <div className="r10-rune-border">ᛋ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ</div>
      </div>
      <div className="r10-crack-r10 r10-cr-v1"/><div className="r10-crack-r10 r10-cr-v2"/>
      <div className="r10-moss-base"/>
    </div>
    <div className="r10-earth"/>
  </div>
  <style>{`
    .r10-link{display:block;text-decoration:none;color:#2c2a25;max-width:380px;margin:0 auto}
    .r10-stone-wrap{display:flex;flex-direction:column;align-items:center}
    .r10-stone{position:relative;width:90%;padding:2rem 1.5rem;
      background:
        repeating-linear-gradient(170deg,transparent 0,transparent 20px,rgba(44,42,37,.03) 20px,rgba(44,42,37,.03) 21px),
        linear-gradient(180deg,#9a9080,#8a8070,#7a7060);
      border:3px solid #2c2a25;clip-path:polygon(3% 0,12% 2%,25% 0,50% 1%,75% 0,88% 2%,97% 0,100% 4%,100% 96%,97% 100%,3% 100%,0 96%);
      box-shadow:0 6px 24px rgba(44,42,37,.3);transition:all .6s}
    .r10-link:hover .r10-stone{box-shadow:0 10px 36px rgba(44,42,37,.4)}
    .r10-lichen{position:absolute;border-radius:50%;opacity:.45}
    .r10-lichen-tl{top:8px;left:10px;width:20px;height:14px;background:radial-gradient(ellipse,#8aaa5a,#4a6a2a)}
    .r10-lichen-tr{top:12px;right:15px;width:16px;height:12px;background:radial-gradient(ellipse,#7a9a4a,#3a5a1a)}
    .r10-rune-band{display:flex;flex-direction:column;align-items:center;gap:1rem;padding:1rem 0}
    .r10-rune-border{font-size:.65rem;letter-spacing:.35em;color:#2c2a25;opacity:.25;text-align:center;width:100%}
    .r10-rune-content{display:flex;flex-direction:column;align-items:center;gap:.6rem;
      border:1.5px solid rgba(44,42,37,.15);padding:1.2rem 1.5rem;width:100%}
    .r10-knot{color:#2c2a25;opacity:.35;transition:opacity .5s}
    .r10-link:hover .r10-knot{opacity:.6}
    .r10-label{font-family:"Playfair Display",serif;font-weight:800;font-size:1.3rem;
      letter-spacing:.12em;text-transform:uppercase;text-align:center;transition:letter-spacing .5s}
    .r10-link:hover .r10-label{letter-spacing:.2em}
    .r10-sub{font-family:"Courier Prime",monospace;font-size:.6rem;letter-spacing:.2em;
      text-transform:uppercase;opacity:.4}
    .r10-crack-r10{position:absolute;background:rgba(0,0,0,.15);border-radius:1px}
    .r10-cr-v1{left:25%;top:15%;width:1.5px;height:30%;transform:rotate(3deg)}
    .r10-cr-v2{right:20%;top:40%;width:1px;height:25%;transform:rotate(-4deg)}
    .r10-moss-base{position:absolute;bottom:0;left:0;right:0;height:18px;
      background:linear-gradient(180deg,transparent,rgba(74,106,42,.3));
      clip-path:polygon(0 40%,15% 20%,30% 50%,50% 10%,70% 40%,85% 15%,100% 35%,100% 100%,0 100%)}
    .r10-earth{width:100%;height:8px;background:linear-gradient(180deg,#5a5040,#6a6050,#5a5040);
      border-radius:0 0 4px 4px}
  `}</style></Link>);
}
