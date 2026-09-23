'use client';

import { useEffect, useRef } from 'react';
import EditorialCarousel from '@/components/EditorialCarousel';
import IntroImageCarousel from '@/components/IntroImageCarousel';

function MeetingSpaceCard({ space, enquiryUrl }) {
  const slides = space.images?.length
    ? space.images
    : space.image
      ? [{ src: space.image, alt: space.imageAlt || space.badge }]
      : [];

  return (
    <article className="bar-card meetings-space-card">
      <div className="meetings-space-card-stack">
        {slides.length > 1 ? (
          <div className="bar-card-image bar-card-image--carousel">
            <IntroImageCarousel slides={slides} label={space.badge} dotsPosition="top" autoplayMs={5000} />
          </div>
        ) : (
          <div className="bar-card-image">
            <img
              src={slides[0]?.src}
              alt={slides[0]?.alt || space.badge}
              style={space.imagePosition ? { objectPosition: space.imagePosition } : undefined}
              loading="lazy"
            />
          </div>
        )}
        <div className="bar-card-body meetings-space-card-body">
          <span className="bar-card-badge">{space.badge}</span>
          <p className="bar-card-text">{space.text}</p>
          {space.meta ? <p className="bar-card-meta">{space.meta}</p> : null}
          <a className="btn bar-card-btn bar-card-btn--on-card" href={enquiryUrl}>
            Make An Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

function useEqualMeetingSlideHeights(rootRef, spaceCount) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const sync = () => {
      const slides = [...root.querySelectorAll('.meetings-space-slide')];
      if (!slides.length) return;

      slides.forEach((slide) => {
        slide.style.minHeight = '';
      });

      const maxHeight = Math.max(...slides.map((slide) => slide.offsetHeight));
      if (maxHeight <= 0) return;

      slides.forEach((slide) => {
        slide.style.minHeight = `${maxHeight}px`;
      });

      const bodies = slides.map((slide) => slide.querySelector('.bar-card-body')).filter(Boolean);
      bodies.forEach((body) => {
        body.style.minHeight = '';
      });
      const maxBodyHeight = Math.max(...bodies.map((body) => body.offsetHeight));
      if (maxBodyHeight > 0) {
        bodies.forEach((body) => {
          body.style.minHeight = `${maxBodyHeight}px`;
        });
      }
    };

    sync();

    const track = root.querySelector('.editorial-carousel-track');
    const observer = new ResizeObserver(sync);
    if (track) observer.observe(track);
    root.querySelectorAll('.meetings-space-slide').forEach((slide) => observer.observe(slide));

    window.addEventListener('load', sync);
    root.querySelectorAll('.meetings-space-slide img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', sync, { once: true });
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('load', sync);
    };
  }, [rootRef, spaceCount]);
}

export default function MeetingSpacesCarousel({ spaces, enquiryUrl }) {
  const rootRef = useRef(null);
  useEqualMeetingSlideHeights(rootRef, spaces.length);

  return (
    <div ref={rootRef}>
      <EditorialCarousel
        label="Meeting and event spaces"
        className="meetings-spaces-carousel editorial-carousel--duo"
        autoplay
        autoplayMs={8000}
      >
        {spaces.map((space) => (
          <div className="meetings-space-slide" key={space.badge}>
            <MeetingSpaceCard space={space} enquiryUrl={enquiryUrl} />
          </div>
        ))}
      </EditorialCarousel>
    </div>
  );
}
