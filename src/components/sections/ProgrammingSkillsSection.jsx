export function ProgrammingSkillsSection() {
  return (
    <section id="programming-skills" className="flex flex-col gap-3">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">PROGRAMMING SKILLS</a>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <article className="lg:col-span-8 font-times text-[13px] md:text-[14px] leading-relaxed text-justify">
          <p>
            My passion for DSA is exemplified through my expertise on LeetCode, GFG, and HackerRank,
            where I have solved over 700 problems. I’m committed to expanding my knowledge and
            skills in DSA to continue tackling complex problems. See my online Judges profiles &amp;
            stats:
          </p>
          <p className="mt-3 border-t border-dashed border-[#2c2a25] pt-2 font-headline text-[11px] md:text-[12px] uppercase tracking-widest font-bold">
            Leetcode: Handle - Feeham · Hackerrank: Handle - Feeham · GFG: Handle - Feeham
          </p>
        </article>

        <aside className="lg:col-span-4 border-l-2 border-[#2c2a25] pl-6 ml-2">
          <h4 className="font-headline text-sm font-black uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 mb-3">
            Editor’s Note
          </h4>
          <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify">
            A steady appetite for algorithms, careful problem decomposition, and consistency in
            practice — the quiet habits behind reliable engineering.
          </p>
        </aside>
      </div>
    </section>
  );
}

