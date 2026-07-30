'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const TESTIMONIALS = [
  {
    text: '"A fine place to pitch in London. The perfect blend of Victorian charm and modern comfort. The location is unbeatable — steps from King\'s Cross and St Pancras."',
    author: 'James G.',
    initial: 'J',
    date: 'September 2024',
  },
  {
    text: '"The RAILS restaurant is exceptional. The beef wellington is a must-try, and the wine list is impressive. A true gem in King\'s Cross."',
    author: 'Sarah M.',
    initial: 'S',
    date: 'August 2024',
  },
  {
    text: '"We had our wedding reception in the Mezzanine — a stunning semi-private space. The team made our day truly magical."',
    author: 'Emma & Tom',
    initial: 'E',
    date: 'July 2024',
  },
];

export default function HomeTestimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const updateTestimonial = useCallback((index) => {
    setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    const section = sectionRef.current;
    if (!section) return undefined;

    const onEnter = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    const onLeave = () => startAutoPlay();

    section.addEventListener('mouseenter', onEnter);
    section.addEventListener('mouseleave', onLeave);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      section.removeEventListener('mouseenter', onEnter);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, [startAutoPlay]);

  return (
    <section className="section testimonials" id="testimonials" aria-label="Kaya Hotels and guest testimonials" ref={sectionRef}>
      <div className="testimonials-bg-pattern" />
      <div className="container">
        <div className="kaya-reviews-grid">
          <div className="kaya-brand-story reveal">
            <span className="section-tag">Part of Kaya Hotels &amp; Resorts</span>
            <h2 className="section-title">
              Turkish Hospitality,
              <br />
              In the Heart of London
            </h2>
            <div className="title-ornament" />
            <p>
              Kaya Great Northern Hotel brings the warmth and care of Kaya Hotels &amp; Resorts to one of
              London&apos;s most storied railway landmarks. Across distinctive destinations, the Kaya family
              creates stays shaped by generous hospitality, thoughtful detail and a true sense of place.
            </p>
            <a href="https://kayahotels.com/en" className="btn kaya-brand-cta" target="_blank" rel="noopener noreferrer">
              Discover Kaya Hotels &amp; Resorts
            </a>
          </div>

          <div className="guest-reviews-panel reveal">
            <div className="guest-reviews-heading">
              <span className="section-tag">Guest Reviews</span>
              <h2 className="section-title">What Our Guests Say</h2>
            </div>
            <div className="testimonials-slider" id="testimonialSlider">
              <div
                className="testimonial-track"
                id="testimonialTrack"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <article className="testimonial-card" key={t.author}>
                    <div className="testimonial-stars">★★★★★</div>
                    <blockquote className="testimonial-text">{t.text}</blockquote>
                    <div className="testimonial-author">
                      <div className="author-avatar">{t.initial}</div>
                      <div>
                        <span className="author-name">{t.author}</span>
                        <span className="author-date">{t.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="testimonial-controls">
                <button
                  type="button"
                  className="testimonial-btn prev"
                  id="testPrev"
                  aria-label="Previous review"
                  onClick={() => updateTestimonial(current - 1)}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div className="testimonial-dots" id="testDots">
                  {TESTIMONIALS.map((t, index) => (
                    <span
                      key={t.author}
                      className={`dot${current === index ? ' active' : ''}`}
                      data-index={index}
                      role="button"
                      tabIndex={0}
                      aria-label={`Review ${index + 1}`}
                      onClick={() => updateTestimonial(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') updateTestimonial(index);
                      }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="testimonial-btn next"
                  id="testNext"
                  aria-label="Next review"
                  onClick={() => updateTestimonial(current + 1)}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="review-platforms" aria-label="Review Kaya Great Northern Hotel">
              <span>Share your stay</span>
              <a
                href="https://www.booking.com/reviews/gb/hotel/great-northern-london.en-gb.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Review on Booking.com
              </a>
              <a
                href="https://www.expedia.com/London-Hotels-Kaya-Great-Northern-Hotel.h5921175.Hotel-Information"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Review on Expedia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
