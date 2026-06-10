export default function DetectiveStamp({ text, x, y, rotation = 0 }) {
  return (
    <div className="evidence-stamp"
      style={{ left: `${x}%`, top: `${y}%`, transform: `rotate(${rotation}deg) translate(-50%, -50%)` }}>
      {text}
    </div>
  );
}
