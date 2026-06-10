import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Bioscope.css';
import BioscopeTrigger from './BioscopeTrigger';
import CinemaOverlay from './CinemaOverlay';

const VISIBLE_COUNT = 5;

export default function Bioscope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    fetch('/blogs/manifest.json').then(r => r.json()).then(setBlogs).catch(() => {});
  }, []);

  const getVisibleBlogs = useCallback(() => {
    if (!blogs.length) return [];
    const half = Math.floor(VISIBLE_COUNT / 2);
    const arr = [];
    for (let offset = -half; offset <= half; offset++) {
      let idx = centerIndex + offset;
      if (idx < 0) idx += blogs.length;
      if (idx >= blogs.length) idx -= blogs.length;
      arr.push({ ...blogs[idx], originalIndex: idx });
    }
    return arr;
  }, [centerIndex, blogs]);

  const visibleBlogs = useMemo(() => getVisibleBlogs(), [getVisibleBlogs]);

  const openBioscope = useCallback(() => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  }, []);

  const closeBioscope = useCallback(() => {
    setIsAnimatingOut(true);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsAnimatingOut(false);
      document.body.style.overflow = '';
    }, 600);
  }, []);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCenterIndex(prev => (prev + 1) % blogs.length);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [isTransitioning, blogs.length]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCenterIndex(prev => (prev - 1 + blogs.length) % blogs.length);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [isTransitioning, blogs.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeBioscope();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, closeBioscope, goNext, goPrev]);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <BioscopeTrigger onClick={openBioscope} />
      {(isOpen || isAnimatingOut) && (
        <CinemaOverlay isOpen={isOpen} isAnimatingOut={isAnimatingOut} onClose={closeBioscope}
          visibleBlogs={visibleBlogs} visibleCount={VISIBLE_COUNT}
          onPrev={goPrev} onNext={goNext}
          onCardClick={(blog) => window.open(`https://blog.feeham.com/${blog.slug}`, '_blank')}
          centerIndex={centerIndex} totalBlogs={blogs.length} />
      )}
    </>
  );
}
