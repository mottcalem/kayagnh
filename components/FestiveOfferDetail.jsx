import Link from 'next/link';

function FestiveOfferCta({ cta }) {
  const className = 'btn btn-whats-on-detail';

  if (cta.external || cta.href.startsWith('http')) {
    return (
      <a href={cta.href} className={className} target="_blank" rel="noopener noreferrer">
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

export default function FestiveOfferDetail({ offer }) {
  return (
    <section className="section whats-on-event-detail festive-offer-detail editorial-intro--top" aria-label={offer.title}>
      <div className="container">
        <p className="festive-offer-back reveal">
          <Link href={offer.backHref} className="offer-link">
            &larr; {offer.backLabel}
          </Link>
        </p>
      </div>
      <div className="container whats-on-event-detail-inner">
        <figure className="whats-on-event-detail-media reveal">
          <img src={offer.image} alt={offer.imageAlt} />
        </figure>
        <div className="whats-on-event-detail-copy reveal">
          <h1 className="whats-on-event-detail-title">{offer.title}</h1>
          <div className="whats-on-event-detail-body">
            {offer.paragraphs.map((text) => (
              <p key={text.slice(0, 48)} className="whats-on-event-detail-lede">
                {text}
              </p>
            ))}
          </div>
          {offer.ctas?.length ? (
            <div
              className={`whats-on-event-detail-actions${
                offer.ctas.length > 1 ? ' whats-on-event-detail-actions--stack' : ''
              }`}
            >
              {offer.ctas.map((cta) => (
                <FestiveOfferCta key={`${cta.label}-${cta.href}`} cta={cta} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <section className="section festive-season-contact" aria-label="Festive enquiries">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Connect</span>
            <h2 className="section-title">Connect with Kaya GNH</h2>
            <div className="title-ornament" />
            <div className="editorial-intro-actions festive-season-actions--centered">
              <Link className="btn btn-primary" href="/contact">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
