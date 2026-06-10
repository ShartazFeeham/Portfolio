import { useCallback } from 'react';
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
