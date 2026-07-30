'use client';

import { useState } from 'react';

export default function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list reveal">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className="faq-item" key={item.q} aria-expanded={open}>
            <button
              className="faq-question"
              aria-expanded={open}
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true">+</span>
            </button>
            <div className={`faq-answer${open ? ' open' : ''}`}>
              <div className="faq-answer-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
