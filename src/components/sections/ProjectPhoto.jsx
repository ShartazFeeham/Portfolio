export default function ProjectPhoto({ src, alt }) {
  return (
    <div className="p-0.5 border-[3px] border-[#2c2a25] bg-[#e8e1cf] shadow-lg">
      <div className="relative w-full aspect-[4/3] bg-[#d3c9b3] overflow-hidden grayscale contrast-125 brightness-90">
        <img src={src} alt={alt} className="object-cover w-full h-full mix-blend-multiply" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
}
