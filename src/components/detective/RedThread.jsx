export default function RedThread({ x1, y1, x2, y2, sag = 20 }) {
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
