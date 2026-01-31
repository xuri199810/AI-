import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

export function useRelativeMousePosition(ref: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      setPosition({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, [ref]);

  return position;
}
