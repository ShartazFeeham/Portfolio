export default function DetectiveAnnotation({ text, x, y, rotation = 0, color = '#1a1a6e' }) {
  return (
    <div className="detective-annotation font-hand"
      style={{ left: `${x}%`, top: `${y}%`, transform: `rotate(${rotation}deg)`, color }}>
      {text}
    </div>
  );
}
