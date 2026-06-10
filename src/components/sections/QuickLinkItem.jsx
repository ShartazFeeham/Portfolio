import PinSvg from '../ui/PinSvg';

export default function QuickLinkItem({ title, href, rot, pinColor, translateY, tearMask, icon, external, onPointerDown, onClick }) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <div className="paper-scrap w-[180px] md:w-[190px]"
      style={{ '--rot': rot, '--pin-color': pinColor, transform: `rotate(${rot}) translateY(${translateY})` }}>
      <PinSvg className="pin pin--tl" />
      <PinSvg className="pin pin--tr" />
      <div className={`paper-edge ${tearMask}`}>
        <a className={`paper-inner ${tearMask} p-3 block`} href={href}
          onPointerDown={onPointerDown} onClick={onClick} {...props}>
          <div className="flex items-center justify-between gap-2">
            <div className="quicklink-title">{title}</div>
            <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
              <path fill="currentColor" d={icon} />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
