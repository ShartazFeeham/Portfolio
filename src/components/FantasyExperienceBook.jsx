import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useAutoFitFont } from './fantasy/useAutoFitFont';
import { useTypewriterReveal } from './fantasy/useTypewriterReveal';
import { usePaperDust } from './fantasy/usePaperDust';
import { processChildren } from './fantasy/processChildren.jsx';
import BookCover from './fantasy/BookCover';
import BookPen from './fantasy/BookPen';

export function FantasyExperienceBook({ volumeLine, companyLine, coverSubtitle, children }) {
  const [open, setOpen] = useState(false);
  const [fontPx, setFontPx] = useState(12);
  const uid = useId();
  const panelId = `${uid}-panel`;
  const shellRef = useRef(null);
  const innerRef = useRef(null);
  const spanRefs = useRef([]);
  const penRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const { processedChildren, totalChars } = useMemo(() => processChildren(children, spanRefs), [children]);
  const toggle = useCallback(() => setOpen(v => !v), []);
  const coverLabel = [volumeLine, companyLine, coverSubtitle].filter(Boolean).join('. ');
  const paperStyles = usePaperDust(coverLabel);
  const { fitFont } = useAutoFitFont({ open, reducedMotion, shellRef, innerRef, penRef, processedChildren });

  const applyFont = useCallback(() => {
    const result = fitFont();
    if (result != null) setFontPx(result);
  }, [fitFont]);

  useTypewriterReveal({ open, totalChars, spanRefs, penRef, innerRef, reducedMotion });

  useLayoutEffect(() => {
    if (!open || reducedMotion) return;
    let cancelled = false;
    requestAnimationFrame(() => requestAnimationFrame(() => { if (!cancelled) applyFont(); }));
    return () => { cancelled = true; };
  }, [open, reducedMotion, applyFont, processedChildren]);

  useEffect(() => {
    if (!open || reducedMotion) return;
    const shell = shellRef.current;
    if (!shell) return;
    const ro = new ResizeObserver(() => requestAnimationFrame(applyFont));
    ro.observe(shell);
    const t = setTimeout(applyFont, 1750);
    return () => { ro.disconnect(); clearTimeout(t); };
  }, [open, reducedMotion, applyFont, processedChildren]);

  const [hasHover, setHasHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)');
    setHasHover(mq.matches);
    const handler = e => setHasHover(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) { setFontPx(11); return; }
    applyFont();
  }, [applyFont, reducedMotion, open]);

  return (
    <div className="fantasy-book-scene mx-auto w-full">
      <button type="button"
        className="fantasy-book-hit block w-full cursor-pointer border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c2a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8e1cf]"
        aria-expanded={open} aria-controls={panelId} aria-label={coverLabel}
        onClick={hasHover ? undefined : toggle}
        onMouseEnter={hasHover ? () => setOpen(true) : undefined}
        onMouseLeave={hasHover ? () => setOpen(false) : undefined}>
        <div className="fantasy-book-3d">
          <div className={`fantasy-book-stage ${open ? 'is-open' : ''}`}>
            <div id={panelId} className="fantasy-book-paper" style={paperStyles} aria-hidden={!open}>
              <span className="fantasy-book-page-shade fantasy-book-page-shade--rb" aria-hidden="true" />
              <div ref={shellRef} className="fantasy-book-measure-shell">
                <div ref={innerRef}
                  className="fantasy-book-scroll-inner font-times italic leading-snug text-[#2c2a25] relative"
                  style={reducedMotion ? { fontSize: '11px' } : { fontSize: `${fontPx}px` }}>
                  <BookPen penRef={penRef} />
                  {processedChildren}
                  <span aria-hidden="true" style={{ display: 'block', height: '2.5em' }} />
                </div>
              </div>
            </div>
            <BookCover volumeLine={volumeLine} companyLine={companyLine} coverSubtitle={coverSubtitle} />
          </div>
        </div>
      </button>
      <p className="mt-1.5 text-center font-times text-[9px] uppercase tracking-[0.2em] text-[#2c2a25]/65">
        {hasHover ? (open ? 'Move away to close the tome' : 'Hover the tome to read') : (open ? 'Tap to close the tome' : 'Tap the tome to read')}
      </p>
    </div>
  );
}
