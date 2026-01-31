import { useRef, useEffect, type RefObject } from 'react';

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagneticEffect<T extends HTMLElement>(
  options: MagneticOptions = {}
): RefObject<T | null> {
  const { strength = 0.3, radius = 100 } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < radius) {
        const factor = 1 - distance / radius;
        const moveX = distanceX * strength * factor;
        const moveY = distanceY * strength * factor;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        element.style.transform = 'translate(0, 0)';
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, radius]);

  return ref;
}
