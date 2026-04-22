export function OthersSection() {
  return (
    <section id="others" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">OTHERS</a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:border-r-2 md:border-[#2c2a25] md:pr-6">
          <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block mb-2">
            Languages
          </h5>
          <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify">
            English (Fluent), Bengali (Native)
          </p>
        </div>
        <div className="md:border-r-2 md:border-[#2c2a25] md:px-6">
          <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block mb-2">
            Publication
          </h5>
          <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify">
            Risk Analysis and Support System for Autistic Children using IoT
          </p>
        </div>
        <div className="md:pl-6">
          <h5 className="font-headline font-black text-xs uppercase bg-[#2c2a25] text-[#e8e1cf] px-2 py-1 inline-block mb-2">
            Note
          </h5>
          <p className="font-times text-[13px] md:text-[14px] leading-snug text-justify">
            Clippings, pins, and dispatches are editorial style elements — arranged to mimic a
            broadsheet special edition.
          </p>
        </div>
      </div>
    </section>
  );
}

