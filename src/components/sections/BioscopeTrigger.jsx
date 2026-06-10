export default function BioscopeTrigger({ onClick }) {
  return (
    <section id="blogs" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">FROM THE PRESS</a>
      </h2>
      <div className="bioscope-trigger" onClick={onClick} role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()} aria-label="Open bioscope to view blog posts">
        <img src="/images/vintage_bioscope.png" alt="Vintage Bioscope" className="bioscope-image" />
      </div>
    </section>
  );
}
