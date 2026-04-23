import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const FONT_MIN = 6;
const FONT_MAX = 42;

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
    const inner = innerRef.current;
    const shell = shellRef.current;
    if (!inner || !shell) return;

    const avail = shell.clientHeight;
    if (avail <= 0) return;

    const measureContentHeight = (px) => {
      inner.style.fontSize = `${px}px`;
      inner.style.height = "auto";
      inner.style.maxHeight = "none";
      inner.style.overflow = "visible";
      void inner.offsetHeight;
      const h = inner.scrollHeight;
      inner.style.height = "";
      inner.style.maxHeight = "";
      inner.style.overflow = "";
      void inner.offsetHeight;
      return h;
    };

    const hMin = measureContentHeight(FONT_MIN);
    if (hMin > avail + 1) {
      inner.style.fontSize = `${FONT_MIN}px`;
      setFontPx(FONT_MIN);
      return;
    }

    let lo = FONT_MIN;
    let hi = FONT_MAX;
    let best = FONT_MIN;
    for (let i = 0; i < 40 && hi - lo > 0.06; i += 1) {
      const mid = (lo + hi) / 2;
      if (measureContentHeight(mid) <= avail + 1) {
        best = mid;
        lo = mid;
      } else {
        hi = mid;
      }
    }
    inner.style.fontSize = `${best}px`;
    setFontPx(Math.round(best * 100) / 100);
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (!open || reducedMotion) return;
    let cancelled = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) fitFont();
      });
    });
    return () => {
      cancelled = true;
    };
  }, [open, reducedMotion, fitFont, children]);

  useEffect(() => {
    if (!open || reducedMotion) return;
    const shell = shellRef.current;
    if (!shell) return;
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(fitFont);
    });
    ro.observe(shell);
    const t = window.setTimeout(fitFont, 1750);
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
