export default function ProjectCard({ title, period, description, technologies, links, borderClass = '' }) {
  return (
    <div className={borderClass ? `${borderClass}` : ''}>
      <div className="flex justify-between items-start mb-2">
        <h5 className="font-headline font-black text-sm uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">{title}</h5>
        <span className="text-[12px] md:text-[13px] font-bold font-times">{period}</span>
      </div>
      <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">{description}</p>
      {technologies && (
        <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify mb-2">
          <b>Technologies:</b> {technologies}
        </p>
      )}
      {links && (
        <div className={`grid grid-cols-1 ${links.length > 1 ? 'md:grid-cols-2 gap-4' : ''} border-t border-dashed border-[#2c2a25] pt-2`}>
          {links.map((link, i) => (
            <p key={i} className={`font-times text-[13px] md:text-[14px] leading-snug text-justify ${link.align === 'right' ? 'md:text-right' : ''}`}>
              <b>{link.label}:</b> {link.url}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
