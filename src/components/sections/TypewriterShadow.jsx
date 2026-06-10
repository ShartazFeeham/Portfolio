export default function TypewriterShadow() {
  return (
    <div className="absolute bottom-[1%] left-[-20%] w-[140%] h-[20px] z-0 pointer-events-none overflow-visible">
      <div className="absolute inset-0 bg-black/20 rounded-[50%]" style={{ filter: 'blur(25px)', transform: 'scaleY(0.5)' }} />
      <div className="absolute inset-0 bg-black/45 rounded-[50%] left-[15%] w-[70%]" style={{ filter: 'blur(10px)', transform: 'scaleY(0.25) translateY(4px)' }} />
    </div>
  );
}
