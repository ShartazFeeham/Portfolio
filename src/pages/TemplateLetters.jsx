import { Link } from 'react-router-dom';
import { A2, A16 } from '../components/ascending/AscendingText';

export default function TemplateLetters() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/templates" className="inline-block mb-12 font-times text-sm text-[#2c2a25]/60 hover:text-[#2c2a25] transition-colors">
          &larr; Back to templates
        </Link>

        <h1 className="font-headline font-black text-3xl uppercase text-[#2c2a25] mb-4">Ascending Letters</h1>
        <p className="font-times text-sm text-[#2c2a25]/40 mb-16">Letters rise like smoke — the survivors spell their message</p>

        <div className="space-y-28">
          <Section n="L1" t="Reverse Rain — Colored"><A2 /></Section>
          <Section n="V1" t="Old Newspaper"><A16 /></Section>
        </div>
      </div>
    </div>
  );
}

function Section({ n, t, children }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-times text-xs tracking-[0.3em] text-[#2c2a25]/30 uppercase">{n}</span>
        <h2 className="font-headline font-bold text-lg uppercase text-[#2c2a25]/50 tracking-wide">{t}</h2>
      </div>
      {children}
    </section>
  );
}
