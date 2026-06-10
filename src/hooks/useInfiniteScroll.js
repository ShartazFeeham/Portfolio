import { useEffect, useCallback } from 'react';

export function useInfiniteScroll(loaderRef, { visibleCount, totalCount, onLoadMore, pageSize = 10 }) {
  const loadMore = useCallback(() => {
    onLoadMore(prev => {
      const start = prev.length;
      const end = Math.min(start + pageSize, totalCount);
      return [...prev, ...Array.from({ length: end - start }, (_, i) => start + i)];
    });
  }, [onLoadMore, totalCount, pageSize]);

  useEffect(() => {
    if (!loaderRef.current || visibleCount >= totalCount) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore(); },
      { rootMargin: '200px' }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loaderRef, visibleCount, totalCount, loadMore]);
}
