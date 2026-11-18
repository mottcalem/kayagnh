'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function NewsletterSignupButton({ label, className }) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} aria-haspopup="dialog">
        {label}
      </button>

      {open
        ? createPortal(
            <div className="bf-popup newsletter-popup" role="dialog" aria-modal="true" aria-labelledby="newsletter-popup-title">
              <button type="button" className="bf-popup-overlay" aria-label="Close newsletter sign up" onClick={() => setOpen(false)} />
              <div className="bf-popup-content newsletter-popup-content">
                <button type="button" className="bf-popup-close" aria-label="Close" onClick={() => setOpen(false)}>
                  ×
                </button>
                <h2 id="newsletter-popup-title" className="bf-popup-title">
                  Sign up for the newsletter
                </h2>
                <p className="bf-popup-text">Be the first to hear about exclusive offers, events, and happenings.</p>
                <form className="newsletter-popup-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" className="newsletter-input" placeholder="Your email address" required aria-label="Email" />
                  <button type="submit" className="newsletter-btn">Subscribe</button>
                </form>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
