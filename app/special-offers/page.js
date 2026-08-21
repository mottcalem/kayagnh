import Link from 'next/link';
import PageHero from '@/components/PageHero';
import BookNowButton from '@/components/BookNowButton';
import { EditorialFeature } from '@/components/Editorial';
import { OFFERS, OFFER_CARDS } from '@/lib/offers';

export const metadata = {
  title: 'Special Offers',
  description: 'Special offers at Kaya Great Northern Hotel — Kaya Club Rewards and 5% off flexible stays when you book direct.',
};

function OfferCard({ offer, featured = false }) {
  return (
    <article className={`offer-card${featured ? ' featured' : ''} reveal`}>
      <div className="offer-image">
        <img src={offer.image} alt={offer.imageAlt || offer.title} loading="lazy" />
      </div>
      <div className="offer-content">
        <span className="offer-category">{offer.tag}</span>
        <h3 className="offer-title">{offer.title}</h3>
        {offer.text ? <p className="offer-desc">{offer.text}</p> : null}
        {offer.href ? (
          <Link href={offer.href} className="offer-link">{offer.cta || 'Discover More'} &rarr;</Link>
        ) : null}
      </div>
    </article>
  );
}

export default function SpecialOffersPage() {
  const [lead, supporting] = OFFERS;

  return (
    <>
      <PageHero
        image="/img/basic/offers-hero.jpg"
        tag="Offers"
        title="Special Offers"
        description="More from every London stay — member rewards and direct booking benefits."
      />

      <EditorialFeature
        id={lead.id}
        className="editorial-feature--dark"
        tag={lead.tag}
        title={lead.title}
        text={lead.text}
        image={lead.image}
        imageAlt={lead.imageAlt}
        href={lead.href}
        cta={lead.cta}
      >
        <ul className="offer-benefits">
          {lead.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
      </EditorialFeature>

      <EditorialFeature
        id={supporting.id}
        reverse
        tag={supporting.tag}
        title={supporting.title}
        text={supporting.text}
        image={supporting.image}
        imageAlt={supporting.imageAlt}
        meta={supporting.meta?.map((item) => <span key={item}>{item}</span>)}
      >
        {supporting.book ? (
          <BookNowButton className="btn btn-primary">{supporting.cta}</BookNowButton>
        ) : null}
      </EditorialFeature>

      {OFFER_CARDS.length > 0 && (
        <section className="section offers" id="more-offers" aria-label="More offers">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">More to Discover</span>
              <h2 className="section-title">Experiences Worth Travelling For</h2>
              <div className="title-ornament" />
            </div>
            <div className="offers-grid">
              {OFFER_CARDS.map((offer, index) => (
                <OfferCard key={offer.id} offer={offer} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
