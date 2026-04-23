export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">CONTACT</a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-times text-[13px] md:text-[14px]">
        <div className="md:border-r-2 md:border-[#2c2a25] md:pr-6">
          <div className="flex justify-between border-b border-dashed border-[#2c2a25] py-2">
            <span className="font-headline font-bold uppercase text-[11px] tracking-widest">E-mail</span>
            <a className="underline font-bold" href="mailto:mdfeeham@gmail.com">
              mdfeeham@gmail.com
            </a>
          </div>
          <div className="flex justify-between border-b border-dashed border-[#2c2a25] py-2">
            <span className="font-headline font-bold uppercase text-[11px] tracking-widest">Phone</span>
            <a className="underline font-bold" href="tel:+8801819853595">
              +8801819853595
            </a>
          </div>
          <div className="flex justify-between border-b border-dashed border-[#2c2a25] py-2">
            <span className="font-headline font-bold uppercase text-[11px] tracking-widest">
              Location
            </span>
            <span className="font-bold">Dhaka, Bangladesh</span>
          </div>
        </div>
        <div className="md:pl-6">
          <div className="flex justify-between border-b border-dashed border-[#2c2a25] py-2">
            <span className="font-headline font-bold uppercase text-[11px] tracking-widest">GitHub</span>
            <a
              className="underline font-bold"
              href="https://github.com/ShartazFeeham"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ShartazFeeham
            </a>
          </div>
          <div className="flex justify-between border-b border-dashed border-[#2c2a25] py-2">
            <span className="font-headline font-bold uppercase text-[11px] tracking-widest">
              LinkedIn
            </span>
            <a
              className="underline font-bold"
              href="https://www.linkedin.com/in/shartaz-feeham"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/shartaz-feeham
            </a>
          </div>
          <div className="flex justify-between border-b border-dashed border-[#2c2a25] py-2">
            <span className="font-headline font-bold uppercase text-[11px] tracking-widest">
              Date of birth
            </span>
            <span className="font-bold">13 July 2000</span>
          </div>
        </div>
      </div>
    </section>
  );
}

