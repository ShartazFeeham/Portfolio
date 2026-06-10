import { useEffect, useRef, useState } from 'react';
import { MAIN_NODES, MAIN_CONNECTIONS } from '../../data/detectiveNodes';
import CrimeBoardBase from './CrimeBoardBase';
import './Effect0Combined.css';

export default function Effect0Combined() {
  const boardRef = useRef(null);
  const overlayRef = useRef(null);
  const [boardSize, setBoardSize] = useState({ w: 0, h: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!boardRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setBoardSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(boardRef.current);
    return () => ro.disconnect();
  }, []);

  function handleMouseMove(e) {
    if (!overlayRef.current) return;
    const rect = overlayRef.current.parentElement.getBoundingClientRect();
    overlayRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    overlayRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  const getNodeCenter = (nodeId) => {
    const node = MAIN_NODES.find(n => n.id === nodeId);
    if (!node || !boardSize.w) return { x: 0, y: 0 };
    return { x: (node.x / 100) * boardSize.w + 70, y: (node.y / 100) * boardSize.h + 50 };
  };

  const activeThreads = hoveredNode
    ? MAIN_CONNECTIONS.filter(([a, b]) => a === hoveredNode || b === hoveredNode)
    : [];

  return (
    <div className="combined-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => { setActive(false); setHoveredNode(null); }}>
      <CrimeBoardBase boardRef={boardRef} boardSize={boardSize} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
      <div className={`combined-overlay ${active ? 'is-active' : ''}`} ref={overlayRef} />
      {boardSize.w > 0 && activeThreads.length > 0 && (
        <svg className="glow-thread-svg" width={boardSize.w} height={boardSize.h}
          viewBox={`0 0 ${boardSize.w} ${boardSize.h}`}>
          <defs>
            <filter id="combined-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {activeThreads.map(([from, to], i) => {
            const p1 = getNodeCenter(from), p2 = getNodeCenter(to);
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2 + 15 + (MAIN_CONNECTIONS.findIndex(c => c[0] === from && c[1] === to) % 3) * 8;
            return (
              <path key={`glow-${i}`}
                d={`M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`}
                fill="none" stroke="#ff4444" strokeWidth="3" strokeLinecap="round"
                filter="url(#combined-glow)" className="pulse-thread" />
            );
          })}
        </svg>
      )}
      <div className="detective-frame" />
    </div>
  );
}
