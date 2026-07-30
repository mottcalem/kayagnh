'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.visible)'));
    if (!els.length) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0 so sections taller than the viewport still trigger
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));

    // Content must never stay hidden if the observer misses an element
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add('visible'));
    }, 2500);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
