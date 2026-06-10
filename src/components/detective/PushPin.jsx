export default function PushPin({ color = '#cc2222', size = 22, style }) {
  const gradId = `pin-grad-${color.replace('#', '')}`;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} className="push-pin-svg">
      <defs>
        <radialGradient id={gradId} cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.4" />
        </filter>
      </defs>
      <circle cx="12" cy="12" r="8" fill={`url(#${gradId})`} filter="url(#pin-shadow)" />
      <circle cx="10" cy="10" r="2" fill="#fff" opacity="0.5" />
    </svg>
  );
}
