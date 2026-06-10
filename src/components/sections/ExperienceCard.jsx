import { FantasyExperienceBook } from '../FantasyExperienceBook';
import { AnimatedBookEntry } from '../ui/AnimatedEntry';

export default function ExperienceCard({ company, period, title, volumeLine, coverSubtitle, content, animationClass, delay, className }) {
  return (
    <div className={className}>
      <AnimatedBookEntry animationClass={animationClass} delay={delay}>
        <div className="mb-2 flex justify-between gap-2">
          <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block">{company}</h5>
          <span className="shrink-0 text-right text-[12px] font-bold font-times md:text-[13px]">{period}</span>
        </div>
        <p className="font-times mb-2 text-[10px] leading-snug text-justify">
          <b className="mb-1 block text-[13px] leading-none md:text-[14px]">{title}</b>
        </p>
        <FantasyExperienceBook volumeLine={volumeLine} companyLine={company} coverSubtitle={coverSubtitle}>
          {content}
        </FantasyExperienceBook>
      </AnimatedBookEntry>
    </div>
  );
}
