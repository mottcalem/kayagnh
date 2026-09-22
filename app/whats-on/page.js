import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { WHATS_ON_EVENTS, getWhatsOnEventHref } from '@/lib/whats-on';

export const metadata = {
  title: "What's On",
  description: "Discover events at Kaya GNH — Jazz Wednesdays, Saturday DJ Sessions, Afternoon Tea and more.",
};

function EventCard({ event }) {
  const cta = (
    <span className="offer-link">
      Read More &rarr;
    </span>
  );

  const body = (
    <>
      <div className="offer-image">
        <span className="offer-image-badge">Events</span>
        <img src={event.image} alt={event.imageAlt} loading="lazy" />
      </div>
      <div className="offer-content">
        <h3 className="offer-title">{event.title}</h3>
        <p className="offer-desc">{event.text}</p>
        {cta}
      </div>
    </>
  );

  const href = getWhatsOnEventHref(event);

  if (event.external) {
    return (
      <a className="offer-card whats-on-event-card reveal" href={href}>
        {body}
      </a>
    );
  }

  return (
    <Link className="offer-card whats-on-event-card reveal" href={href}>
      {body}
    </Link>
  );
}

export default function WhatsOnPage() {
  return (
    <>
      <PageHero
        overlayDark
        image="/img/basic/whats-on-hero.webp"
        tag="What's On"
        title="Discover More"
        description="Connect with the heart of the area"
      />

      <section className="section offers whats-on-listing" aria-label="What's On at Kaya GNH">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Events</span>
            <h2 className="section-title">What&apos;s On at Kaya GNH</h2>
            <div className="title-ornament" />
          </div>
          <div className="offers-grid-simple whats-on-events-grid">
            {WHATS_ON_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
