const PEN_EMOJI = '🖋️';

export default function BookPen({ penRef }) {
  return (
    <div ref={penRef} style={{ position: 'absolute', top: 0, left: 0, opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s ease, transform 0.05s linear', zIndex: 50 }}>
      <span style={{ fontSize: '24px', display: 'inline-block', transform: 'translate(2px, -24px)', filter: 'drop-shadow(3px 5px 3px rgba(0,0,0,0.4))' }}>{PEN_EMOJI}</span>
    </div>
  );
}
