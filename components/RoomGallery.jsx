'use client';

import { useState } from 'react';

export default function RoomGallery({ images, alt }) {
  const [idx, setIdx] = useState(0);

  const goTo = (n) => {
    setIdx((n + images.length) % images.length);
  };

  return (
    <div className="edwardian-detail-gallery">
      <div className="edwardian-detail-slider">
        {images.map((src, i) => (
          <div key={src} className={`edwardian-detail-slide${i === idx ? ' active' : ''}`}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
      <button
        className="edwardian-detail-arrow edwardian-detail-arrow--prev"
        aria-label="Previous"
        type="button"
        onClick={() => goTo(idx - 1)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        className="edwardian-detail-arrow edwardian-detail-arrow--next"
        aria-label="Next"
        type="button"
        onClick={() => goTo(idx + 1)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="edwardian-detail-counter">
        <span>{idx + 1}</span> / {images.length}
      </div>
    </div>
  );
}
