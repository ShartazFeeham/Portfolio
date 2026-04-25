import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const FONT_MIN = 6;
const FONT_MAX = 42;

// Choose between '🖋️' and '🪶' for the writing pen
const SELECTED_PEN_EMOJI = '🖋️'; 

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
  const spanRefs = useRef([]);
  const penRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const { processedChildren, totalChars } = useMemo(() => {
    spanRefs.current = [];
    let charCounter = 0;

    const processNode = (node) => {
      if (node == null || typeof node === 'boolean') return null;
      if (typeof node === 'string' || typeof node === 'number') {
        const text = String(node);
        const wordsAndSpaces = text.match(/(\S+|\s+)/g) || [];
        return wordsAndSpaces.map((part, pIdx) => {
          if (/^\s+$/.test(part)) {
            return part.split('').map((char, i) => {
              const index = charCounter++;
              return (
                <span 
                  key={`${pIdx}-${i}`} 
                  ref={el => spanRefs.current[index] = el} 
                  style={{ visibility: 'hidden' }}
                >
                  {char}
                </span>
              );
            });
          }
          return (
            <span key={pIdx} style={{ whiteSpace: 'nowrap' }}>
              {part.split('').map((char, i) => {
                const index = charCounter++;
                return (
                  <span 
                    key={i} 
                    ref={el => spanRefs.current[index] = el}
                    style={{ 
                      visibility: 'hidden',
                      display: 'inline-block',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          );
        });
      }
      if (React.isValidElement(node)) {
        return React.cloneElement(
          node,
          { ...node.props },
          React.Children.map(node.props.children, processNode)
        );
      }
      if (Array.isArray(node)) {
        return node.map((n, i) => <React.Fragment key={i}>{processNode(n)}</React.Fragment>);
      }
      return node;
    };

    const tree = React.Children.map(children, processNode);
    return { processedChildren: tree, totalChars: charCounter };
  }, [children]);

  const [hasHover, setHasHover] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const coverLabel = [volumeLine, companyLine, coverSubtitle].filter(Boolean).join(". ");

  const paperStyles = useMemo(() => {
    // Generate pseudo-random dust coordinates based on coverLabel
    let seed = 0;
    for (let i = 0; i < coverLabel.length; i++) {
      seed += coverLabel.charCodeAt(i);
    }
    const rand = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const vars = {};
    for (let i = 1; i <= 18; i++) {
      vars[`--pos${i}`] = `${Math.floor(rand() * 100)}% ${Math.floor(rand() * 100)}%`;
    }
    return vars;
  }, [coverLabel]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setHasHover(mq.matches);
    const handler = (e) => setHasHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const fitFont = useCallback(() => {
    if (reducedMotion) return;
    const inner = innerRef.current;
    const shell = shellRef.current;
    if (!inner || !shell) return;

    const avail = shell.clientHeight;
    if (avail <= 0) return;

    const pen = penRef.current;
    const oldPenDisplay = pen ? pen.style.display : "";
    if (pen) pen.style.display = "none";

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
      if (pen) pen.style.display = oldPenDisplay;
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

    if (pen) pen.style.display = oldPenDisplay;
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
  }, [open, reducedMotion, fitFont, processedChildren]);

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
  }, [open, reducedMotion, fitFont, processedChildren]);

  useEffect(() => {
    if (reducedMotion) {
      spanRefs.current.forEach(span => {
        if (span) {
          span.style.visibility = 'visible';
          span.style.opacity = '1';
        }
      });
      return;
    }

    if (!open) {
      if (penRef.current) penRef.current.style.opacity = '0';
      return;
    }

    spanRefs.current.forEach(span => {
      if (span) {
        span.style.visibility = 'hidden';
        span.style.opacity = '1';
      }
    });

    let start;
    let frameId;
    const duration = 3000;
    let lastIndex = -1;

    const tick = (now) => {
      if (!start) start = now;
      const elapsed = now - start;
      let progress = elapsed / duration;
      if (progress > 1) progress = 1;
      
      const currentIndex = Math.min(Math.floor(progress * totalChars), totalChars - 1);
      
      for (let i = lastIndex + 1; i <= currentIndex; i++) {
        if (spanRefs.current[i]) {
          spanRefs.current[i].style.visibility = 'visible';
        }
      }
      
      if (currentIndex >= 0 && spanRefs.current[currentIndex] && penRef.current && innerRef.current) {
        const span = spanRefs.current[currentIndex];
        const spanRect = span.getBoundingClientRect();
        const innerRect = innerRef.current.getBoundingClientRect();
        
        penRef.current.style.opacity = '1';
        const left = spanRect.left - innerRect.left + innerRef.current.scrollLeft;
        const top = spanRect.top - innerRect.top + innerRef.current.scrollTop;
        penRef.current.style.transform = `translate(${left}px, ${top}px)`;
      }

      lastIndex = currentIndex;

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        if (penRef.current && innerRef.current) {
          const x = innerRef.current.clientWidth - 30;
          const y = innerRef.current.scrollHeight - 50;
          penRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      }
    };

    const delayId = setTimeout(() => {
      frameId = requestAnimationFrame(tick);
    }, 600); 

    return () => {
      clearTimeout(delayId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [open, totalChars, reducedMotion]);

  return (
    <div className="fantasy-book-scene mx-auto w-full">
      <button
        type="button"
        className="fantasy-book-hit block w-full cursor-pointer border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c2a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8e1cf]"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={coverLabel}
        onClick={hasHover ? undefined : toggle}
        onMouseEnter={hasHover ? () => setOpen(true) : undefined}
        onMouseLeave={hasHover ? () => setOpen(false) : undefined}
      >
        <div className="fantasy-book-3d">
          <div className={`fantasy-book-stage ${open ? "is-open" : ""}`}>
            <div
              id={panelId}
              className="fantasy-book-paper"
              style={paperStyles}
              aria-hidden={!open}
            >
              <span
                className="fantasy-book-page-shade fantasy-book-page-shade--rb"
                aria-hidden="true"
              />
              <div ref={shellRef} className="fantasy-book-measure-shell">
                <div
                  ref={innerRef}
                  className="fantasy-book-scroll-inner font-times italic leading-snug text-[#2c2a25] relative"
                  style={
                    reducedMotion
                      ? { fontSize: "11px" }
                      : { fontSize: `${fontPx}px` }
                  }
                >
                  <div 
                    ref={penRef}
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      opacity: 0, 
                      pointerEvents: 'none', 
                      transition: 'opacity 0.3s ease, transform 0.05s linear',
                      zIndex: 50,
                    }}
                  >
                    <span style={{ 
                      fontSize: '24px', 
                      display: 'inline-block',
                      transform: 'translate(2px, -24px)', 
                      filter: 'drop-shadow(3px 5px 3px rgba(0,0,0,0.4))'
                    }}>
                      {SELECTED_PEN_EMOJI}
                    </span>
                  </div>
                  {processedChildren}
                  <span aria-hidden="true" style={{ display: "block", height: "2.5em" }} />
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
        {hasHover
          ? (open ? "Move away to close the tome" : "Hover the tome to read")
          : (open ? "Tap to close the tome" : "Tap the tome to read")}
      </p>
    </div>
  );
}
