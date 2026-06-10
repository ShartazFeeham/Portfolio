export default function SectionHeading({ id, anchor = '#index', children }) {
  return (
    <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
      <a href={anchor}>{children}</a>
    </h2>
  );
}
