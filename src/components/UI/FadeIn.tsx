import { useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  once?: boolean;
}>;

export function FadeIn({ children, className = '', once = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add('active');
          if (once) obs.unobserve(el);
        } else if (!once) {
          el.classList.remove('active');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={`fade ${className}`.trim()}>
      {children}
    </div>
  );
}
