import { useEffect } from 'react';

export function useIntersectionObserver(ref, { threshold = 0.1, rootMargin = '0px', onChange }) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => onChange(entry.isIntersecting),
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, onChange]);
}
