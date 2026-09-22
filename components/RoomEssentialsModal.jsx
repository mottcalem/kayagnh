'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function RoomEssentialsModal({ title, items, label = 'Room Essentials' }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" className="btn btn-outline room-opener-essentials" onClick={() => setOpen(true)}>
        {label}
      </button>

      {mounted
        ? createPortal(
            <div className={`essentials-modal${open ? ' active' : ''}`} role="dialog" aria-modal="true" aria-label={title}>
              <div className="essentials-modal-overlay" onClick={() => setOpen(false)} />
              <div className="essentials-modal-content">
                <button
                  type="button"
                  className="essentials-modal-close"
                  aria-label="Close room essentials"
                  onClick={() => setOpen(false)}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <span className="editorial-eyebrow">Good to Know</span>
                <h2 className="essentials-modal-title">{title}</h2>
                <ul className="essentials-modal-list">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
