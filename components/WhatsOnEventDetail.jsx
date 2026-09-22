import Link from 'next/link';

function EventDetailBody({ event }) {
  const { detail } = event;

  if (event.id === 'jazz-wednesdays') {
    return (
      <p className="whats-on-event-detail-lede">
        Join us in GNH Bar every Wednesday for live jazz, soul and good vibes from the wonderful{' '}
        <a href="https://jodieshankland.com/" target="_blank" rel="noopener noreferrer">
          Jodie Shankland
        </a>
        .
      </p>
    );
  }

  if (event.id === 'saturday-dj') {
    return (
      <p className="whats-on-event-detail-lede">
        Join us in{' '}
        <Link href="/gnh-bar" className="whats-on-event-detail-strong-link">
          <strong>Kaya GNH Bar</strong>
        </Link>{' '}
        every Saturday from 3pm – 8pm for live DJ sessions, playing a range of genres — from funk, to jazz to
        dance!
      </p>
    );
  }

  if (event.id === 'day-use') {
    return (
      <div className="whats-on-event-detail-body">
        <p className="whats-on-event-detail-lede">Available from 9am until 5pm. Rates from £165</p>
        <p className="whats-on-event-detail-enquire">
          <a href="mailto:reservations@kayagnhlondon.com">
            <strong>Enquire now</strong>
          </a>
        </p>
        <p className="whats-on-event-detail-lede whats-on-event-detail-lede--bold">
          <strong>Offer subject to availability.</strong>
        </p>
      </div>
    );
  }

  if (detail?.paragraphs?.length) {
    return (
      <div className="whats-on-event-detail-body">
        {detail.paragraphs.map((paragraph) => (
          <p
            key={paragraph.text}
            className={`whats-on-event-detail-lede${paragraph.italic ? ' whats-on-event-detail-lede--italic' : ''}`}
          >
            {paragraph.text}
          </p>
        ))}
      </div>
    );
  }

  if (detail?.description) {
    return <p className="whats-on-event-detail-lede">{detail.description}</p>;
  }

  return null;
}

function EventDetailCta({ cta, wide = false }) {
  const className = `btn btn-whats-on-detail${wide ? ' btn-whats-on-detail--wide' : ''}`;

  if (cta.href.startsWith('#')) {
    return (
      <a href={cta.href} className={className}>
        {cta.label}
      </a>
    );
  }

  if (cta.external || cta.href.startsWith('http') || cta.href.startsWith('mailto:')) {
    return (
      <a
        href={cta.href}
        className={className}
        target={cta.href.startsWith('mailto:') ? undefined : '_blank'}
        rel={cta.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      >
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export default function WhatsOnEventDetail({ event }) {
  const { detail } = event;
  const image = detail.detailImage || event.image;
  const ctas = detail.ctas ?? (detail.cta ? [detail.cta] : []);

  return (
    <section className="section whats-on-event-detail" aria-label={event.title}>
      <div className="container whats-on-event-detail-inner">
        <figure className="whats-on-event-detail-media reveal">
          <img src={image} alt={event.imageAlt} />
        </figure>
        <div className="whats-on-event-detail-copy reveal">
          <h1 className="whats-on-event-detail-title">{event.title}</h1>
          {detail.schedule ? (
            <p className="whats-on-event-detail-schedule">{detail.schedule}</p>
          ) : null}
          <EventDetailBody event={event} />
          {ctas.length ? (
            <div
              className={`whats-on-event-detail-actions${
                ctas.length > 1 ? ' whats-on-event-detail-actions--stack' : ''
              }`}
            >
              {ctas.map((cta) => (
                <EventDetailCta
                  key={`${cta.label}-${cta.href}`}
                  cta={cta}
                  wide={cta.href === '#newsletter'}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
