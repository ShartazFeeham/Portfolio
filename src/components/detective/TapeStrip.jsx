export default function TapeStrip({ width = 80, rotation = 0, style }) {
  return (
    <div
      className="tape-strip"
      style={{ width: `${width}px`, transform: `rotate(${rotation}deg)`, ...style }}
    />
  );
}
