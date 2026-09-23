'use client';

import EditorialCarousel from '@/components/EditorialCarousel';

function emphasiseText(text, phrases = []) {
  if (!phrases.length) {
    return text;
  }

  const pattern = new RegExp(`(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    phrases.some((phrase) => phrase.toLowerCase() === part.toLowerCase()) ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    ),
  );
}

function LocalGuideCard({ card }) {
  const body = (
    <div className="local-guide-card-shell">
      <div className="local-guide-card-media">
        <img src={card.image} alt={card.imageAlt} loading="lazy" />
      </div>
      <div className="local-guide-card-footer">
        <p className="local-guide-card-badge">
          <span>{card.badge}</span>
        </p>
        <div className="local-guide-card-panel">
          <p className="local-guide-card-text">{emphasiseText(card.text, card.textEmphasis)}</p>
          <span className="local-guide-card-cta">Read More</span>
        </div>
      </div>
    </div>
  );

  if (card.external) {
    return (
      <a
        className="local-guide-card"
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <a className="local-guide-card" href={card.href}>
      {body}
    </a>
  );
}

export default function LocalGuideCarousel({ cards }) {
  return (
    <EditorialCarousel
      label="Local guide articles"
      className="local-guide-carousel local-guide-carousel--duo editorial-carousel--duo"
    >
      {cards.map((card) => (
        <LocalGuideCard key={card.id} card={card} />
      ))}
    </EditorialCarousel>
  );
}
