'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function EditorialCarousel({ children, label = 'Carousel', className = '' }) {
  const trackRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);

  const readScrollable = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setScrollable(track.scrollWidth - track.clientWidth > 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    readScrollable();
    const observer = new ResizeObserver(readScrollable);
    observer.observe(track);
    return () => observer.disconnect();
  }, [readScrollable]);

  // Wraps around at either end so the arrows never dead-end
  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const item = track.firstElementChild;
    const distance = item ? item.getBoundingClientRect().width + 24 : track.clientWidth * 0.85;

    if (direction > 0 && track.scrollLeft >= max - 4) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    if (direction < 0 && track.scrollLeft <= 4) {
      track.scrollTo({ left: max, behavior: 'smooth' });
      return;
    }

    const target = Math.min(Math.max(track.scrollLeft + distance * direction, 0), max);
    track.scrollTo({ left: target, behavior: 'smooth' });
  };

  return (
    <div className={`editorial-carousel ${className}`.trim()} aria-label={label}>
      <div className="editorial-carousel-viewport">
        <div className="editorial-carousel-track" ref={trackRef}>
          {children}
        </div>
        {scrollable ? (
          <>
            <button type="button" className="editorial-carousel-nav editorial-carousel-nav--prev" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="editorial-carousel-nav editorial-carousel-nav--next" onClick={() => move(1)} aria-label={`Next ${label}`}>
              <span aria-hidden="true">→</span>
            </button>
          </>
        ) : null}
      </div>
      {scrollable ? (
        <div className="editorial-carousel-controls">
          <span className="editorial-carousel-hint">Drag to discover</span>
        </div>
      ) : null}
    </div>
  );
}
