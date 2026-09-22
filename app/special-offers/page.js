import PageHero from '@/components/PageHero';
import BookNowButton from '@/components/BookNowButton';
import { OFFERS } from '@/lib/offers';

export const metadata = {
  title: 'Special Offers',
  description: 'Special offers at Kaya Great Northern Hotel — Kaya Club Rewards and 5% off flexible stays when you book direct.',
};

export default function SpecialOffersPage() {
  return (
    <>
      <PageHero
        overlayLight
        image="/img/basic/offers-hero.jpg"
        tag="Offers"
        title="Special Offers"
        description="More from every London stay — member rewards and direct booking benefits."
      />

      <section className="section bar-card-section" aria-label="Special Offers">
        <div className="container">
          <span className="editorial-eyebrow bar-card-section-eyebrow">Special Offers</span>
          <div className="bar-card-grid reveal">
            {OFFERS.map((offer) => (
              <article className="bar-card" id={offer.id} key={offer.id}>
                <div className={`bar-card-image${offer.fitContain ? ' bar-card-image--contain' : ''}`}>
                  <img src={offer.image} alt={offer.imageAlt} loading="lazy" />
                </div>
                <div className="bar-card-body">
                  <span className="bar-card-badge">{offer.badge}</span>
                  <h2 className="offer-card-title">{offer.title}</h2>
                  <p className="bar-card-text">{offer.text}</p>
                </div>
                {offer.book ? (
                  <BookNowButton className="btn bar-card-btn">{offer.cta}</BookNowButton>
                ) : (
                  <a className="btn bar-card-btn" href={offer.href} target="_blank" rel="noopener noreferrer">
                    {offer.cta}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
