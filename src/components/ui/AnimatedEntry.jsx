import React, { useState, useEffect, useRef } from 'react';

export function AnimatedQuickLinksEntry({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-110 blur-[2px]'
      }`}>
      {children}
    </div>
  );
}

export function AnimatedBookEntry({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0 blur-none skew-x-0 skew-y-0' : animationClass
      }`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function AnimatedIndex({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="font-headline text-xs font-bold uppercase space-y-3 overflow-hidden index-list">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
            },
          });
        }
        return child;
      })}
    </ul>
  );
}
