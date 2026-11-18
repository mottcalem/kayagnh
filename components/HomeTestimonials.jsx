'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const EXPEDIA_REVIEWS_URL =
  'https://www.expedia.com/London-Hotels-Kaya-Great-Northern-Hotel.h5921175.Hotel-Information?pwaDialog=summary-reviews-5921175';

const TESTIMONIALS = [
  {
    text: '"Excellent location. Very clean. Dressing gown, slippers, and shower gel etc. Less to carry on my trip to London."',
    author: 'Katherine',
    initial: 'K',
    date: 'November 2026',
    stars: 5,
  },
  {
    text: '"Small but clean room, helpful and personable staff, breakfast very good, bar staff professional."',
    author: 'Pauline',
    initial: 'P',
    date: 'September 2026',
    stars: 5,
  },
  {
    text: '"Lovely hotel, decor is top quality and has a very premium feel. Also location is great."',
    author: 'James',
    initial: 'J',
    date: 'September 2026',
    stars: 5,
  },
  {
    text: '"Great location, very clean."',
    author: 'Subodh',
    initial: 'S',
    date: 'September 2026',
    stars: 5,
  },
  {
    text: '"Perfect, great location, lovely hotel."',
    author: 'William',
    initial: 'W',
    date: 'August 2026',
    stars: 5,
  },
];

function ReviewQuote({ text, open, onToggle }) {
  const quoteRef = useRef(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const quote = quoteRef.current;
    if (!quote || open) return undefined;

    const measure = () => {
      setOverflows(quote.scrollHeight > quote.clientHeight + 1);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [text, open]);

  return (
    <>
      <blockquote ref={quoteRef} className={`testimonial-text${open ? '' : ' is-clamped'}`}>
        {text}
      </blockquote>
      {overflows ? (
        <button type="button" className="testimonial-more" aria-expanded={open} onClick={onToggle}>
          {open ? 'Less' : 'More'}
        </button>
      ) : null}
    </>
  );
}

export default function HomeTestimonials() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const updateTestimonial = useCallback((index) => {
    setExpanded(false);
    setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setExpanded(false);
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  }, []);

  useEffect(() => {
    if (expanded) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return undefined;
    }

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
  }, [expanded, startAutoPlay]);

  return (
    <section className="section testimonials" id="testimonials" aria-label="Kaya Hotels and guest testimonials" ref={sectionRef}>
      <div className="testimonials-bg-pattern" />
      <div className="container">
        <div className="kaya-reviews-grid">
          <div className="kaya-brand-story reveal">
            <span className="section-tag">Part of Kaya Hotels &amp; Resorts</span>
            <h2 className="section-title">
            London Heritage, 
              <br />
              Kaya Hospitality
            </h2>
            <div className="title-ornament" />
            <p>
            Kaya Great Northern Hotel combines the character and history of one of London’s original railway hotels with the warmth and personal service of Kaya Hotels & Resorts. Together, we create a distinctive stay in the heart of King’s Cross.
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
                {TESTIMONIALS.map((t, index) => {
                  const isOpen = expanded && current === index;

                  return (
                  <article className="testimonial-card" key={t.author}>
                    <div className="testimonial-stars" aria-label={`${t.stars} out of 5`}>
                      {'★'.repeat(t.stars)}
                      <span className="testimonial-stars-empty">{'★'.repeat(5 - t.stars)}</span>
                    </div>
                    <ReviewQuote
                      text={t.text}
                      open={isOpen}
                      onToggle={() => setExpanded((open) => (current === index ? !open : true))}
                    />
                    <div className="testimonial-author">
                      <div className="author-avatar">{t.initial}</div>
                      <div>
                        <span className="author-name">{t.author}</span>
                        <span className="author-date">{t.date}</span>
                      </div>
                    </div>
                  </article>
                  );
                })}
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
            <a
              className="testimonial-see-more"
              href={EXPEDIA_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              See More
            </a>
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
