import { useEffect, useRef, useState } from 'react';
import './DetectiveWall.css';
import DetectiveBoard from './DetectiveBoard';

export default function DetectiveWall() {
  const boardRef = useRef(null);
  const [boardSize, setBoardSize] = useState({ w: 0, h: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    if (!boardRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setBoardSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(boardRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="skills-expertise" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">SKILLS &amp; EXPERTISE</a>
      </h2>
      <div className="detective-wall-outer">
        <DetectiveBoard boardRef={boardRef} boardSize={boardSize}
          hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
        <div className="detective-frame" />
      </div>
    </section>
  );
}
