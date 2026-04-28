import { useEffect, useRef, useState, useCallback } from "react";
import "./DetectiveWall.css";

/* ──────────────────────────────────────────────
   DETECTIVE WALL – "Skills & Expertise"
   A cork-board evidence wall straight out of a
   conspiracy thriller. Main nodes = polaroid
   photos, children = index cards & sticky notes,
   all connected by red yarn.
   ────────────────────────────────────────────── */

// ── SVG icon components ──
function CodeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <polyline points="22,16 10,32 22,48" />
      <polyline points="42,16 54,32 42,48" />
      <line x1="38" y1="12" x2="26" y2="52" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <ellipse cx="32" cy="16" rx="20" ry="8" />
      <path d="M12 16v32c0 4.4 8.95 8 20 8s20-3.6 20-8V16" />
      <path d="M12 28c0 4.4 8.95 8 20 8s20-3.6 20-8" />
      <path d="M12 40c0 4.4 8.95 8 20 8s20-3.6 20-8" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <path d="M14.7 14.7a2 2 0 013.2-.4l8.6 8.6a2 2 0 01-.1 2.9l-4 4a2 2 0 01-2.9.1l-8.6-8.6a2 2 0 01.4-3.2L6 8" />
      <path d="M56 56L34 34" />
      <path d="M56 56l-6-2-2-6 4-4 6 2 2 6z" />
      <circle cx="20" cy="44" r="12" />
      <path d="M16 44l8 8" />
    </svg>
  );
}

function MiscIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <path d="M32 8v48M8 32h48" />
      <circle cx="32" cy="32" r="6" />
      <path d="M18 14l4 6M46 14l-4 6M18 50l4-6M46 50l-4-6" />
    </svg>
  );
}

// ── Push Pin SVG ──
function PushPin({ color = "#cc2222", size = 22, style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} className="push-pin-svg">
      <defs>
        <radialGradient id={`pin-grad-${color.replace("#", "")}`} cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.4" />
        </filter>
      </defs>
      <circle cx="12" cy="12" r="8" fill={`url(#pin-grad-${color.replace("#", "")})`} filter="url(#pin-shadow)" />
      <circle cx="10" cy="10" r="2" fill="#fff" opacity="0.5" />
    </svg>
  );
}

// ── Tape Strip ──
function TapeStrip({ width = 80, rotation = 0, style }) {
  return (
    <div
      className="tape-strip"
      style={{
        width: `${width}px`,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    />
  );
}

// ── Red Thread SVG path between two points ──
function RedThread({ x1, y1, x2, y2, sag = 20, id }) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2 + sag;
  const pathD = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
  return (
    <path
      d={pathD}
      fill="none"
      stroke="#8b1a1a"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.85"
      className="red-thread-line"
    />
  );
}

// ── Main Node (Polaroid photo) ──
function MainNode({ id, icon: Icon, label, style, rotation, children, pinColor }) {
  return (
    <div
      className={`detective-node detective-node--main`}
      id={`node-${id}`}
      style={{
        ...style,
        "--node-rot": `${rotation}deg`,
      }}
    >
      <PushPin color={pinColor} size={20} style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", zIndex: 10 }} />
      <TapeStrip width={50} rotation={rotation > 0 ? -15 : 15} style={{ position: "absolute", top: -6, right: 10 }} />
      <div className="polaroid">
        <div className="polaroid-photo">
          <Icon />
        </div>
        <div className="polaroid-caption font-hand">{label}</div>
      </div>
      <div className="node-children">{children}</div>
    </div>
  );
}

// ── Child Item (index card / sticky note) ──
function ChildItem({ text, type = "card", rotation = 0, pinColor }) {
  return (
    <div
      className={`detective-child detective-child--${type}`}
      style={{ "--child-rot": `${rotation}deg` }}
    >
      {type === "sticky" && <PushPin color={pinColor || "#cc2222"} size={14} style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)" }} />}
      {type === "card" && <TapeStrip width={35} rotation={rotation > 0 ? -20 : 20} style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)" }} />}
      <span className="child-text font-hand">{text}</span>
    </div>
  );
}

// ── Annotation (handwritten note) ──
function Annotation({ text, x, y, rotation = 0, color = "#1a1a6e" }) {
  return (
    <div
      className="detective-annotation font-hand"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg)`,
        color,
      }}
    >
      {text}
    </div>
  );
}

// ── Evidence Stamp ──
function EvidenceStamp({ text, x, y, rotation = 0 }) {
  return (
    <div
      className="evidence-stamp"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg) translate(-50%, -50%)`,
      }}
    >
      {text}
    </div>
  );
}

// ── Arrow doodle SVG ──
function DoodleArrow({ x1, y1, x2, y2 }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const headLen = 8;
  return (
    <g className="doodle-arrow">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.5" />
      <polygon
        points={`0,0 ${headLen},${headLen / 2.5} ${headLen},-${headLen / 2.5}`}
        fill="#333"
        opacity="0.5"
        transform={`translate(${x2},${y2}) rotate(${angle * (180 / Math.PI)})`}
      />
    </g>
  );
}

// ──────────────────────────────────────
// Main DetectiveWall Component
// ──────────────────────────────────────
export default function DetectiveWall() {
  const boardRef = useRef(null);
  const [boardSize, setBoardSize] = useState({ w: 0, h: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);

  // Measure the board for SVG overlay
  useEffect(() => {
    if (!boardRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setBoardSize({
        w: entry.contentRect.width,
        h: entry.contentRect.height,
      });
    });
    ro.observe(boardRef.current);
    return () => ro.disconnect();
  }, []);

  // Node positions (percentage-based for responsive)
  const mainNodes = [
    { id: "programming", label: "PROGRAMMING", icon: CodeIcon, x: 14, y: 12, rot: -6, pinColor: "#cc2222",
      children: [
        { text: "Java", type: "sticky", rot: -12 },
        { text: "JavaScript", type: "card", rot: 4 },
        { text: "C#", type: "sticky", rot: 14 },
        { text: "Spring Boot", type: "card", rot: -8 },
        { text: "ReactJS", type: "sticky", rot: 7 },
        { text: "Bootstrap", type: "card", rot: -3 },
      ],
    },
    { id: "database", label: "DATABASE & ORM", icon: DatabaseIcon, x: 62, y: 8, rot: 5, pinColor: "#1a4f7a",
      children: [
        { text: "PostgreSQL", type: "card", rot: -5 },
        { text: "MySQL", type: "sticky", rot: 10 },
        { text: "JPA", type: "card", rot: -14 },
        { text: "Hibernate", type: "sticky", rot: 3 },
      ],
    },
    { id: "tools", label: "TOOLS & DEVOPS", icon: ToolsIcon, x: 38, y: 58, rot: -3, pinColor: "#2d6a2e",
      children: [
        { text: "Kafka", type: "sticky", rot: 8 },
        { text: "Git", type: "card", rot: -10 },
        { text: "Jira", type: "sticky", rot: 4 },
        { text: "Confluence", type: "card", rot: -6 },
        { text: "Docker", type: "sticky", rot: 12 },
        { text: "Jenkins", type: "card", rot: -4 },
        { text: "Kibana", type: "sticky", rot: 7 },
      ],
    },
    { id: "misc", label: "CORE SKILLS", icon: MiscIcon, x: 82, y: 52, rot: 7, pinColor: "#b8860b",
      children: [
        { text: "Data Structures", type: "card", rot: -7 },
        { text: "Algorithms", type: "sticky", rot: 11 },
        { text: "Design Patterns", type: "card", rot: -3 },
      ],
    },
  ];

  // Connection definitions: [fromNodeId, toNodeId]
  const mainConnections = [
    ["programming", "database"],
    ["programming", "tools"],
    ["database", "tools"],
    ["database", "misc"],
    ["tools", "misc"],
  ];

  // Compute pixel positions for SVG threads
  const getNodeCenter = useCallback(
    (nodeId) => {
      const node = mainNodes.find((n) => n.id === nodeId);
      if (!node || !boardSize.w) return { x: 0, y: 0 };
      return {
        x: (node.x / 100) * boardSize.w + 70,
        y: (node.y / 100) * boardSize.h + 50,
      };
    },
    [boardSize]
  );

  return (
    <section id="skills-expertise" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">SKILLS &amp; EXPERTISE</a>
      </h2>

      <div className="detective-wall-outer">
        {/* Cork board */}
        <div className="detective-board" ref={boardRef}>
          {/* SVG overlay for threads */}
          {boardSize.w > 0 && (
            <svg
              className="thread-svg"
              width={boardSize.w}
              height={boardSize.h}
              viewBox={`0 0 ${boardSize.w} ${boardSize.h}`}
            >
              <defs>
                <filter id="thread-shadow">
                  <feDropShadow dx="0.5" dy="1" stdDeviation="0.8" floodColor="#000" floodOpacity="0.25" />
                </filter>
              </defs>
              {/* Main node connections */}
              {mainConnections.map(([from, to], i) => {
                const p1 = getNodeCenter(from);
                const p2 = getNodeCenter(to);
                return (
                  <RedThread
                    key={`mc-${i}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    sag={15 + (i % 3) * 8}
                    id={`${from}-${to}`}
                  />
                );
              })}
              {/* Decorative arrows */}
              <DoodleArrow x1={boardSize.w * 0.25} y1={boardSize.h * 0.45} x2={boardSize.w * 0.35} y2={boardSize.h * 0.52} />
              <DoodleArrow x1={boardSize.w * 0.7} y1={boardSize.h * 0.38} x2={boardSize.w * 0.78} y2={boardSize.h * 0.45} />
            </svg>
          )}

          {/* Main nodes with children */}
          {mainNodes.map((node) => (
            <div
              key={node.id}
              className={`detective-node-wrapper ${hoveredNode === node.id ? "is-hovered" : ""}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <MainNode
                id={node.id}
                icon={node.icon}
                label={node.label}
                rotation={node.rot}
                pinColor={node.pinColor}
              >
                {node.children.map((child, ci) => (
                  <ChildItem
                    key={ci}
                    text={child.text}
                    type={child.type}
                    rotation={child.rot}
                    pinColor={node.pinColor}
                  />
                ))}
              </MainNode>
            </div>
          ))}

          {/* Handwritten annotations */}
          <Annotation text="connects to..." x={40} y={6} rotation={-8} color="#8b1a1a" />
          <Annotation text="see also →" x={55} y={45} rotation={5} color="#1a1a6e" />
          <Annotation text="KEY LINK" x={22} y={52} rotation={-4} color="#2d6a2e" />
          <Annotation text="confirmed ✓" x={75} y={38} rotation={3} color="#b8860b" />
          <Annotation text="PRIMARY" x={8} y={42} rotation={-12} color="#cc2222" />

          {/* Evidence stamps */}
          <EvidenceStamp text="CLASSIFIED" x={50} y={96} rotation={-18} />
          <EvidenceStamp text="EVIDENCE" x={6} y={90} rotation={12} />

          {/* Question mark circles */}
          <div className="question-circle" style={{ left: "48%", top: "28%", transform: "rotate(-8deg)" }}>?</div>
          <div className="question-circle" style={{ left: "75%", top: "18%", transform: "rotate(12deg)" }}>?</div>
        </div>

        {/* Frame border */}
        <div className="detective-frame" />
      </div>
    </section>
  );
}
