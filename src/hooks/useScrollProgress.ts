import { useState, useEffect, useRef, type RefObject } from 'react';

interface ScrollProgress {
  progress: number;
  isInView: boolean;
}

export function useScrollProgress(ref: RefObject<HTMLElement | null>): ScrollProgress {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    isInView: false,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate progress from when element enters viewport to when it leaves
      const start = windowHeight;
      const end = -elementHeight;
      const current = rect.top;
      
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      
      setScrollProgress({ progress, isInView });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return scrollProgress;
}

export function useWindowScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
}
