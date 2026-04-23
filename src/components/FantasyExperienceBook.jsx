import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const FONT_MIN = 8;
const FONT_MAX = 15;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

/**
 * Fantasy tome: cover hinges on the left and opens like a real board (RTL sweep).
 * Inner text auto-sizes to fill the page; corner shades on cover and parchment.
 */
export function FantasyExperienceBook({
  volumeLine,
  companyLine,
  coverSubtitle,
  children,
}) {
  const [open, setOpen] = useState(false);
  const [fontPx, setFontPx] = useState(12);
  const uid = useId();
  const panelId = `${uid}-panel`;
  const shellRef = useRef(null);
  const innerRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const coverLabel = [volumeLine, companyLine, coverSubtitle].filter(Boolean).join(". ");

  const fitFont = useCallback(() => {
    if (reducedMotion) return;
    const shell = shellRef.current;
    const inner = innerRef.current;
    if (!shell || !inner) return;

    const avail = shell.clientHeight - 1;
    if (avail <= 0) return;

    let best = FONT_MIN;
    for (let px = FONT_MAX; px >= FONT_MIN; px -= 0.25) {
      inner.style.fontSize = `${px}px`;
      if (inner.scrollHeight <= avail) {
        best = px;
        break;
      }
    }
    inner.style.fontSize = `${best}px`;
    setFontPx(Math.round(best * 100) / 100);
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (!open || reducedMotion) return;
    fitFont();
  }, [open, reducedMotion, fitFont, children]);

  useEffect(() => {
    if (!open || reducedMotion) return;
    const shell = shellRef.current;
    if (!shell) return;
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(fitFont);
    });
    ro.observe(shell);
    const t = window.setTimeout(fitFont, 1100);
    return () => {
      ro.disconnect();
      window.clearTimeout(t);
    };
  }, [open, reducedMotion, fitFont, children]);

  return (
    <div className="fantasy-book-scene mx-auto w-full">
      <button
        type="button"
        className="fantasy-book-hit block w-full cursor-pointer border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c2a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8e1cf]"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={coverLabel}
        onClick={toggle}
      >
        <div className="fantasy-book-3d">
          <div className={`fantasy-book-stage ${open ? "is-open" : ""}`}>
            <div
              id={panelId}
              className="fantasy-book-paper"
              aria-hidden={!open}
            >
              <span
                className="fantasy-book-page-shade fantasy-book-page-shade--rb"
                aria-hidden="true"
              />
              <div ref={shellRef} className="fantasy-book-measure-shell">
                <div
                  ref={innerRef}
                  className="fantasy-book-scroll-inner font-times leading-snug text-[#2c2a25]"
                  style={
                    reducedMotion
                      ? { fontSize: "11px" }
                      : { fontSize: `${fontPx}px` }
                  }
                >
                  {children}
                </div>
              </div>
            </div>

            <div className="fantasy-book-cover-wrap" aria-hidden={open}>
              <span
                className="fantasy-book-page-shade fantasy-book-page-shade--rb fantasy-book-page-shade--cover"
                aria-hidden="true"
              />
              <div className="fantasy-book-cover">
                <span className="fantasy-book-spine" aria-hidden="true" />
                <span
                  className="fantasy-book-ornament fantasy-book-ornament--tl"
                  aria-hidden="true"
                />
                <span
                  className="fantasy-book-ornament fantasy-book-ornament--tr"
                  aria-hidden="true"
                />
                <span
                  className="fantasy-book-ornament fantasy-book-ornament--bl"
                  aria-hidden="true"
                />
                <span
                  className="fantasy-book-ornament fantasy-book-ornament--br"
                  aria-hidden="true"
                />
                <div className="fantasy-book-cover-inner">
                  <span className="fantasy-book-sigil" aria-hidden="true">
                    ✦
                  </span>
                  <span className="fantasy-book-cover-title">
                    <span className="block">{volumeLine}</span>
                    <span className="fantasy-book-cover-company">{companyLine}</span>
                  </span>
                  {coverSubtitle ? (
                    <span className="fantasy-book-cover-sub">{coverSubtitle}</span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <p className="mt-1.5 text-center font-times text-[9px] uppercase tracking-[0.2em] text-[#2c2a25]/65">
        {open ? "Tap to close the tome" : "Tap the tome to read"}
      </p>
    </div>
  );
}
