export default function DoodleArrow({ x1, y1, x2, y2 }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const headLen = 8;
  return (
    <g className="doodle-arrow">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.5" />
      <polygon
        points={`0,0 ${headLen},${headLen / 2.5} ${headLen},-${headLen / 2.5}`}
        fill="#333" opacity="0.5"
        transform={`translate(${x2},${y2}) rotate(${angle * (180 / Math.PI)})`}
      />
    </g>
  );
}
