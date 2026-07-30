'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    type: 'video',
    indicatorLabel: 'Video introduction',
    title: (
      <>
        Beautifully Connected,
        <br />
        Effortlessly Stylish
      </>
    ),
    subtitle: "At the heart of King's Cross St Pancras",
    actions: (
      <>
        <a href="#rooms" className="btn btn-primary">
          Explore Rooms
        </a>
        <a href="#story" className="btn btn-outline">
          Discover Our Story
        </a>
      </>
    ),
  },
  {
    type: 'image',
    bg: '/img/basic/ZDA_6276.webp',
    indicatorLabel: 'GNH Bar and Terrace',
    title: (
      <>
        Where Classic
        <br />
        Meets Boutique
      </>
    ),
    subtitle: 'A vibrant space in the heart of London',
    actions: (
      <>
        <a href="/rails-restaurant" className="btn btn-primary">
          Discover Dining
        </a>
        <Link href="/special-offers" className="btn btn-outline">
          View Offers
        </Link>
      </>
    ),
  },
  {
    type: 'image',
    bg: '/img/basic/Heritage-Room-3.webp',
    indicatorLabel: 'Heritage Rooms',
    title: (
      <>
        The Original
        <br />
        Railway Hotel
      </>
    ),
    subtitle: 'Where Victorian grandeur meets modern comfort',
    actions: (
      <>
        <a href="#rooms" className="btn btn-primary">
          View Rooms
        </a>
        <a href="#story" className="btn btn-outline">
          Our History
        </a>
      </>
    ),
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedBgs, setLoadedBgs] = useState({});
  const videoRef = useRef(null);
  const posterRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentSlide((index + SLIDES.length) % SLIDES.length);
  }, []);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    SLIDES.forEach((slide, index) => {
      if (slide.type !== 'image' || !slide.bg) return;
      const img = new Image();
      img.onload = () => {
        setLoadedBgs((prev) => ({ ...prev, [index]: slide.bg }));
      };
      img.src = slide.bg;
    });
  }, []);

  useEffect(() => {
    const heroVideo = videoRef.current;
    const videoPoster = posterRef.current;
    if (!heroVideo) return undefined;

    heroVideo.preload = 'auto';
    heroVideo.load();

    const startVideo = () => {
      heroVideo
        .play()
        .then(() => {
          heroVideo.classList.add('playing');
          videoPoster?.classList.add('hidden');
        })
        .catch(() => {
          const retry = () => {
            heroVideo
              .play()
              .then(() => {
                heroVideo.classList.add('playing');
                videoPoster?.classList.add('hidden');
              })
              .catch(() => {});
            document.removeEventListener('click', retry);
            document.removeEventListener('touchstart', retry);
          };
          document.addEventListener('click', retry, { once: true });
          document.addEventListener('touchstart', retry, { once: true });
          setTimeout(retry, 2000);
        });
    };

    if (heroVideo.readyState >= 2) {
      startVideo();
    } else {
      heroVideo.addEventListener('canplay', startVideo, { once: true });
      setTimeout(startVideo, 3000);
    }

    const onError = () => videoPoster?.classList.add('hidden');
    heroVideo.addEventListener('error', onError);

    return () => heroVideo.removeEventListener('error', onError);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="hero-slider" id="heroSlider">
        {SLIDES.map((slide, index) => {
          const isActive = currentSlide === index;
          const isVideo = slide.type === 'video';

          return (
            <div
              key={slide.indicatorLabel}
              className={`hero-slide${isVideo ? ' video-slide' : ''}${isActive ? ' active' : ''}`}
              style={!isVideo && loadedBgs[index] ? { backgroundImage: `url(${loadedBgs[index]})` } : undefined}
              data-bg={!isVideo ? slide.bg : undefined}
            >
              {isVideo ? (
                <div className="hero-video-container">
                  <div className="hero-video-poster" id="heroVideoPoster" ref={posterRef}>
                    <img src="/img/basic/gnh-hero-exterior-1600_3.webp" alt="Kaya Great Northern Hotel" />
                  </div>
                  <video
                    ref={videoRef}
                    id="heroVideo"
                    className="hero-video"
                    preload="auto"
                    muted
                    loop
                    playsInline
                    poster="/img/basic/gnh-hero-exterior-1600_3.webp"
                    aria-label="Welcome to Kaya Great Northern Hotel"
                  >
                    <source src="/img/basic/video.mp4" type="video/mp4" />
                  </video>
                  <div className="hero-video-overlay" />
                </div>
              ) : (
                <div className="hero-overlay" />
              )}

              <div className={`hero-content${isVideo ? ' video-hero-content' : ''}`}>
                <h1 className={`hero-title${isVideo && isActive ? ' reveal-text' : ''}`}>{slide.title}</h1>
                <p className={`hero-subtitle${isVideo && isActive ? ' reveal-text' : ''}`}>{slide.subtitle}</p>
                <div className="hero-actions">{slide.actions}</div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="hero-arrow hero-arrow--prev"
        id="heroPrev"
        aria-label="Previous slide"
        onClick={prevSlide}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow--next"
        id="heroNext"
        aria-label="Next slide"
        onClick={nextSlide}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="hero-indicators" id="heroIndicators" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.indicatorLabel}
            type="button"
            className={`indicator${currentSlide === index ? ' active' : ''}`}
            data-index={index}
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={slide.indicatorLabel}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
