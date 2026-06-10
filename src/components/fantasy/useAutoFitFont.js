import { useCallback, useLayoutEffect, useEffect } from 'react';

const FONT_MIN = 6;
const FONT_MAX = 42;

export function useAutoFitFont({ open, reducedMotion, shellRef, innerRef, penRef, processedChildren }) {
  const fitFont = useCallback(() => {
    if (reducedMotion) return;
    const inner = innerRef.current;
    const shell = shellRef.current;
    if (!inner || !shell) return;

    const avail = shell.clientHeight;
    if (avail <= 0) return;

    const pen = penRef.current;
    const oldPenDisplay = pen ? pen.style.display : '';
    if (pen) pen.style.display = 'none';

    const measure = (px) => {
      inner.style.fontSize = `${px}px`;
      inner.style.height = 'auto';
      inner.style.maxHeight = 'none';
      inner.style.overflow = 'visible';
      void inner.offsetHeight;
      const h = inner.scrollHeight;
      inner.style.height = '';
      inner.style.maxHeight = '';
      inner.style.overflow = '';
      void inner.offsetHeight;
      return h;
    };

    const hMin = measure(FONT_MIN);
    if (hMin > avail + 1) {
      inner.style.fontSize = `${FONT_MIN}px`;
      if (pen) pen.style.display = oldPenDisplay;
      return FONT_MIN;
    }

    let lo = FONT_MIN, hi = FONT_MAX, best = FONT_MIN;
    for (let i = 0; i < 40 && hi - lo > 0.06; i++) {
      const mid = (lo + hi) / 2;
      if (measure(mid) <= avail + 1) { best = mid; lo = mid; }
      else { hi = mid; }
    }
    inner.style.fontSize = `${best}px`;
    if (pen) pen.style.display = oldPenDisplay;
    return Math.round(best * 100) / 100;
  }, [reducedMotion, shellRef, innerRef, penRef]);

  return { fitFont };
}
