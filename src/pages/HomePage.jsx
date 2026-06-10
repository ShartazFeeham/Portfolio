import { Masthead } from '../components/layout/Masthead';
import { BreakingNews } from '../components/layout/BreakingNews';
import EdgeShading from '../components/sections/EdgeShading';
import QuickLinks from '../components/sections/QuickLinks';
import NewspaperIndex from '../components/sections/NewspaperIndex';
import SectionDivider from '../components/ui/SectionDivider';
import { ProfessionalExperienceSection } from '../components/sections/ProfessionalExperienceSection';
import DetectiveWall from '../components/sections/DetectiveWall';
import TypewriterBlogSection from '../components/sections/TypewriterBlogSection';
import BrowseBlogsLink from '../components/sections/BrowseBlogsLink';
import PersonalProjects from '../components/sections/PersonalProjects';
import { ContactSection } from '../components/sections/ContactSection';
import { OthersSection } from '../components/sections/OthersSection';
import Footer from '../components/sections/Footer';
import SkipToMain from '../components/ui/SkipToMain';

const quickLinkHandlers = {
  toggleQuickLinkInvert: (e) => {
    const scrap = e.currentTarget?.closest?.('.paper-scrap');
    if (!scrap) return;
    scrap.classList.add('ql-invert');
    window.setTimeout(() => scrap.classList.remove('ql-invert'), 180);
  },
  flashQuickLinkInvert: (e) => {
    const scrap = e.currentTarget?.closest?.('.paper-scrap');
    if (!scrap) return;
    scrap.classList.add('ql-invert');
    window.setTimeout(() => scrap.classList.remove('ql-invert'), 180);
  },
};

export default function HomePage({ issueDateLabel }) {
  return (
    <div className="min-h-screen bg-[#f8f8f8] px-0 pt-0 pb-[5px] md:px-8 md:pb-8 md:pt-[10px] lg:px-12 lg:pb-12 lg:pt-[10px] flex justify-center items-start font-serif selection:bg-[#2c2a25] selection:text-[#e8e1cf]">
      <SkipToMain />
      <div className="newspaper-texture text-[#2c2a25] w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#c1b59f] p-4 md:p-8 flex flex-col gap-4 relative overflow-hidden">
        <h1 className="sr-only">Shartaz Feeham (Feeham) — Software Engineer Portfolio</h1>
        <EdgeShading />
        <Masthead issueDateLabel={issueDateLabel} />

        <main id="main-content" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <BreakingNews />
          <aside className="lg:col-span-4 h-full lg:border-l-2 lg:border-[#2c2a25] lg:pl-6 lg:ml-2">
            <div className="flex flex-col items-center">
              <QuickLinks {...quickLinkHandlers} />
              <NewspaperIndex />
            </div>
          </aside>
        </main>

        <hr className="border-t-[3px] border-[#2c2a25] mt-2 mb-1" />
        <ProfessionalExperienceSection />
        <SectionDivider />
        <DetectiveWall />
        <SectionDivider />
        <TypewriterBlogSection />
        <BrowseBlogsLink />
        <PersonalProjects />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
        <OthersSection />
        <Footer />
      </div>
    </div>
  );
}
