'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function IntroImageCarousel({
  slides,
  label = 'Gallery',
  autoplay = true,
  autoplayMs = 5500,
  dotsPosition = 'bottom',
}) {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const readIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const slideWidth = track.firstElementChild.getBoundingClientRect().width;
    if (slideWidth <= 0) return;
    setIndex(Math.round(track.scrollLeft / slideWidth));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    readIndex();
    track.addEventListener('scroll', readIndex, { passive: true });
    const observer = new ResizeObserver(readIndex);
    observer.observe(track);
    return () => {
      track.removeEventListener('scroll', readIndex);
      observer.disconnect();
    };
  }, [readIndex, count]);

  const goTo = useCallback((slideIndex) => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const slideWidth = track.firstElementChild.getBoundingClientRect().width;
    track.scrollTo({ left: slideWidth * slideIndex, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!autoplay || count <= 1) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let paused = false;
    const root = rootRef.current;

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    root?.addEventListener('mouseenter', pause);
    root?.addEventListener('mouseleave', resume);
    root?.addEventListener('focusin', pause);
    root?.addEventListener('focusout', resume);

    const timer = window.setInterval(() => {
      if (paused) return;
      const track = trackRef.current;
      if (!track || !track.firstElementChild) return;
      const slideWidth = track.firstElementChild.getBoundingClientRect().width;
      if (slideWidth <= 0) return;
      const current = Math.round(track.scrollLeft / slideWidth);
      goTo((current + 1) % count);
    }, autoplayMs);

    return () => {
      window.clearInterval(timer);
      root?.removeEventListener('mouseenter', pause);
      root?.removeEventListener('mouseleave', resume);
      root?.removeEventListener('focusin', pause);
      root?.removeEventListener('focusout', resume);
    };
  }, [autoplay, autoplayMs, count, goTo]);

  if (!count) return null;

  return (
    <div
      ref={rootRef}
      className={`intro-image-carousel intro-image-carousel--dots-${dotsPosition}`.trim()}
      aria-label={label}
    >
      <div className="intro-image-carousel-viewport">
        <div className="intro-image-carousel-track" ref={trackRef}>
          {slides.map((slide) => (
            <figure className="intro-image-carousel-slide" key={slide.src}>
              <img src={slide.src} alt={slide.alt || ''} loading={slide.priority ? 'eager' : 'lazy'} decoding="async" />
            </figure>
          ))}
        </div>
        {count > 1 ? (
          <div className="intro-image-carousel-dots" role="tablist" aria-label={`${label} slides`}>
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                className={i === index ? 'is-active' : undefined}
                aria-selected={i === index}
                aria-label={`Slide ${i + 1} of ${count}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
