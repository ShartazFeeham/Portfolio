import { useCallback, useEffect } from 'react';
import { MAIN_NODES, MAIN_CONNECTIONS } from '../../data/detectiveNodes';
import RedThread from '../detective/RedThread';
import DoodleArrow from '../detective/DoodleArrow';
import DetectiveNode from './DetectiveNode';
import DetectiveChildItem from './DetectiveChildItem';
import DetectiveAnnotation from './DetectiveAnnotation';
import DetectiveStamp from './DetectiveStamp';

export default function DetectiveBoard({ boardRef, boardSize, hoveredNode, setHoveredNode }) {
  const getNodeCenter = useCallback((nodeId) => {
    const node = MAIN_NODES.find(n => n.id === nodeId);
    if (!node || !boardSize.w) return { x: 0, y: 0 };
    return { x: (node.x / 100) * boardSize.w + 70, y: (node.y / 100) * boardSize.h + 50 };
  }, [boardSize]);

  /* Canvas-based collision sparks */
  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'spark-canvas';
    board.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const sparks = [];
    const activeCollisions = new Set();
    const COOLDOWN = 600;

    const resize = () => {
      canvas.width = board.offsetWidth;
      canvas.height = board.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(board);

    function spawnSpark(x, y) {
      const count = 5 + Math.floor(Math.random() * 5);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 1.2;
        sparks.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          life: 1,
          decay: 0.018 + Math.random() * 0.025,
          size: 1.2 + Math.random() * 2,
          hue: 20 + Math.random() * 30,
        });
      }
    }

    let running = true;
    const lastSpark = new Map();

    const tick = () => {
      if (!running) return;
      const now = Date.now();

      const children = board.querySelectorAll('.detective-child');
      const br = board.getBoundingClientRect();
      const rects = [];
      children.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        rects.push({ left: r.left - br.left, right: r.right - br.left, top: r.top - br.top, bottom: r.bottom - br.top, idx: i });
      });

      for (let i = 0; i < rects.length; i++) {
        for (let j = i + 1; j < rects.length; j++) {
          const a = rects[i], b = rects[j];
          const pairKey = i * 100 + j;
          const colliding = a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

          if (colliding) {
            const last = lastSpark.get(pairKey) || 0;
            if (now - last > COOLDOWN) {
              activeCollisions.add(pairKey);
              lastSpark.set(pairKey, now);
              const cx = (Math.max(a.left, b.left) + Math.min(a.right, b.right)) / 2;
              const cy = (Math.max(a.top, b.top) + Math.min(a.bottom, b.bottom)) / 2;
              spawnSpark(cx, cy);
            }
          } else {
            activeCollisions.delete(pairKey);
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.03;
        s.life -= s.decay;

        if (s.life <= 0) { sparks.splice(i, 1); continue; }

        ctx.globalAlpha = s.life;
        ctx.fillStyle = `hsl(${s.hue}, 100%, ${50 + (1 - s.life) * 30}%)`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fill();

        /* tiny glow */
        ctx.globalAlpha = s.life * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return () => {
      running = false;
      ro.disconnect();
      canvas.remove();
    };
  }, [boardRef]);

  return (
    <div className="detective-board" ref={boardRef}>
      {boardSize.w > 0 && (
        <svg className="thread-svg" width={boardSize.w} height={boardSize.h}
          viewBox={`0 0 ${boardSize.w} ${boardSize.h}`}>
          <defs>
            <filter id="thread-shadow">
              <feDropShadow dx="0.5" dy="1" stdDeviation="0.8" floodColor="#000" floodOpacity="0.25" />
            </filter>
          </defs>
          {MAIN_CONNECTIONS.map(([from, to], i) => {
            const p1 = getNodeCenter(from), p2 = getNodeCenter(to);
            return <RedThread key={`mc-${i}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} sag={15 + (i % 3) * 8} />;
          })}
          <DoodleArrow x1={boardSize.w * 0.25} y1={boardSize.h * 0.45} x2={boardSize.w * 0.35} y2={boardSize.h * 0.52} />
          <DoodleArrow x1={boardSize.w * 0.7} y1={boardSize.h * 0.38} x2={boardSize.w * 0.78} y2={boardSize.h * 0.45} />
        </svg>
      )}

      {MAIN_NODES.map(node => (
        <div key={node.id}
          className={`detective-node-wrapper ${hoveredNode === node.id ? 'is-hovered' : ''}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}>
          <DetectiveNode id={node.id} icon={node.icon} label={node.label} rotation={node.rot} pinColor={node.pinColor}>
            {node.children.map((child, ci) => (
              <DetectiveChildItem key={ci} text={child.text} type={child.type} rotation={child.rot} pinColor={ci % 2 === 0 ? '#cc2222' : '#1a4f7a'} />
            ))}
          </DetectiveNode>
        </div>
      ))}

      <DetectiveAnnotation text="connects to..." x={40} y={6} rotation={-8} color="#8b1a1a" />
      <DetectiveAnnotation text="see also →" x={55} y={45} rotation={5} color="#1a1a6e" />
      <DetectiveAnnotation text="KEY LINK" x={22} y={52} rotation={-4} color="#2d6a2e" />
      <DetectiveAnnotation text="confirmed ✓" x={75} y={38} rotation={3} color="#b8860b" />
      <DetectiveAnnotation text="PRIMARY" x={8} y={42} rotation={-12} color="#cc2222" />
      <DetectiveStamp text="CLASSIFIED" x={50} y={96} rotation={-18} />
      <DetectiveStamp text="EVIDENCE" x={6} y={90} rotation={12} />
      <div className="question-circle" style={{ left: '48%', top: '28%', transform: 'rotate(-8deg)' }}>?</div>
      <div className="question-circle" style={{ left: '75%', top: '18%', transform: 'rotate(12deg)' }}>?</div>
    </div>
  );
}
