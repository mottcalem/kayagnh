'use client';

import { useRef } from 'react';

export default function EditorialCarousel({ children, label = 'Carousel', className = '' }) {
  const trackRef = useRef(null);

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.firstElementChild;
    const distance = item ? item.getBoundingClientRect().width + 24 : track.clientWidth * 0.85;
    track.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  return (
    <div className={`editorial-carousel ${className}`.trim()} aria-label={label}>
      <div className="editorial-carousel-track" ref={trackRef}>
        {children}
      </div>
      <div className="editorial-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
          <span aria-hidden="true">←</span>
        </button>
        <span className="editorial-carousel-hint">Drag to discover</span>
        <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
