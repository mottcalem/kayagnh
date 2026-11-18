'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'gnh-black-friday-popup';

export default function BlackFridayPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return undefined;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setOpen(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="bf-popup" role="dialog" aria-modal="true" aria-labelledby="bf-popup-title">
      <button type="button" className="bf-popup-overlay" aria-label="Close offer" onClick={() => setOpen(false)} />
      <div className="bf-popup-content">
        <button type="button" className="bf-popup-close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>
        <h2 id="bf-popup-title" className="bf-popup-title">
          Black Friday Enjoy 25% Off!
        </h2>
        <img
          className="bf-popup-image"
          src="/img/basic/black-friday-offer.webp"
          alt="Black Friday offer at Kaya Great Northern Hotel"
        />
        <p className="bf-popup-text">
          Enjoy exclusive booking offer for Kaya Club Rewards members, available from 19–30 November 2026!
        </p>
        <Link href="/offers/kaya-club-rewards-black-friday" className="bf-popup-cta" onClick={() => setOpen(false)}>
          Read More
        </Link>
      </div>
    </div>
  );
}
