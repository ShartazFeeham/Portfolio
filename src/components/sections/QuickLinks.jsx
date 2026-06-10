import { AnimatedQuickLinksEntry } from '../ui/AnimatedEntry';
import QuickLinkItem from './QuickLinkItem';
import { QUICK_LINKS } from '../../data/quickLinks';

export default function QuickLinks({ toggleQuickLinkInvert, flashQuickLinkInvert }) {
  return (
    <div className="w-full">
      <div className="border-b-2 border-[#2c2a25] mb-3 pb-1">
        <h2 className="font-headline font-black text-3xl md:text-4xl tracking-tighter uppercase leading-none">
          QUICK LINKS
        </h2>
      </div>
      <AnimatedQuickLinksEntry>
        <div className="quicklinks-float-wrap">
          {QUICK_LINKS.map(link => (
            <QuickLinkItem key={link.title} {...link}
              onClick={toggleQuickLinkInvert} onPointerDown={flashQuickLinkInvert} />
          ))}
        </div>
      </AnimatedQuickLinksEntry>
    </div>
  );
}
