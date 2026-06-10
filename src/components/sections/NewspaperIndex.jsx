import { AnimatedIndex } from '../ui/AnimatedEntry';

const INDEX_ITEMS = [
  { label: 'Professional experience', href: '#professional-experience', page: 'P. 1', delay: '0s' },
  { label: 'Skills & Expertise', href: '#skills-expertise', page: 'P. 2', delay: '0.5s' },
  { label: 'Education', href: '#education', page: 'P. 3', delay: '1s' },
  { label: 'Programming skills', href: '#programming-skills', page: 'P. 4', delay: '1.5s' },
  { label: 'From the Press', href: '#blogs', page: 'P. 5', delay: '2s' },
  { label: 'Personal projects', href: '#personal-projects', page: 'P. 6', delay: '2.5s' },
  { label: 'Contact', href: '#contact', page: 'P. 7', delay: '3s' },
  { label: 'Others', href: '#others', page: 'P. 8', delay: '3.5s' },
];

export default function NewspaperIndex() {
  return (
    <div id="index" className="pt-8 w-full">
      <h4 className="font-headline text-sm font-black uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 mb-3">Index</h4>
      <AnimatedIndex>
        {INDEX_ITEMS.map(item => (
          <li key={item.href} className="flex justify-between border-b border-dashed border-[#2c2a25]">
            <a className="flex justify-between w-full index-item-text" style={{ animationDelay: item.delay }} href={item.href}>
              <span>☛ {item.label}</span><span>{item.page}</span>
            </a>
          </li>
        ))}
      </AnimatedIndex>
    </div>
  );
}
