import { useEffect } from 'react';

export function useTypewriterReveal({ open, totalChars, spanRefs, penRef, innerRef, reducedMotion }) {
  useEffect(() => {
    if (reducedMotion) {
      spanRefs.current.forEach(span => { if (span) { span.style.visibility = 'visible'; span.style.opacity = '1'; } });
      return;
    }
    if (!open) { if (penRef.current) penRef.current.style.opacity = '0'; return; }

    spanRefs.current.forEach(span => { if (span) { span.style.visibility = 'hidden'; span.style.opacity = '1'; } });

    let start, frameId;
    const duration = 3000;
    let lastIndex = -1;

    const tick = (now) => {
      if (!start) start = now;
      const elapsed = now - start;
      let progress = Math.min(elapsed / duration, 1);
      const currentIndex = Math.min(Math.floor(progress * totalChars), totalChars - 1);

      for (let i = lastIndex + 1; i <= currentIndex; i++) {
        if (spanRefs.current[i]) spanRefs.current[i].style.visibility = 'visible';
      }

      if (currentIndex >= 0 && spanRefs.current[currentIndex] && penRef.current && innerRef.current) {
        const span = spanRefs.current[currentIndex];
        const spanRect = span.getBoundingClientRect();
        const innerRect = innerRef.current.getBoundingClientRect();
        penRef.current.style.opacity = '1';
        penRef.current.style.transform = `translate(${spanRect.left - innerRect.left + innerRef.current.scrollLeft}px, ${spanRect.top - innerRect.top + innerRef.current.scrollTop}px)`;
      }

      lastIndex = currentIndex;

      if (progress < 1) { frameId = requestAnimationFrame(tick); }
      else if (penRef.current && innerRef.current) {
        penRef.current.style.transform = `translate(${innerRef.current.clientWidth - 30}px, ${innerRef.current.scrollHeight - 50}px)`;
      }
    };

    const delayId = setTimeout(() => { frameId = requestAnimationFrame(tick); }, 600);
    return () => { clearTimeout(delayId); if (frameId) cancelAnimationFrame(frameId); };
  }, [open, totalChars, reducedMotion]);
}
