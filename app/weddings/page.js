import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Weddings',
  description:
    "Wedding venue in King's Cross at Kaya Great Northern Hotel — civil ceremonies, receptions, wedding menus and elegant event spaces.",
};

const features = [
  { title: 'Ceremonies', text: 'Fully licensed by Camden Council to host civil wedding ceremonies.' },
  { title: 'Event Spaces', text: 'Three beautifully designed event spaces to celebrate your special day.' },
  { title: 'Wedding Menus', text: 'Thoughtfully designed menus with exceptional flavours and seasonal ingredients.' },
  { title: 'A Final Flourish', text: 'From stunning bouquets to curated cakes — finishing touches for an unforgettable day.' },
];

const faqs = [
  {
    q: 'Is this a London hotel wedding venue licensed for civil ceremonies?',
    a: <p>Yes. Kaya Great Northern Hotel is fully licensed by <strong>Camden Council</strong> to host civil wedding ceremonies.</p>,
  },
  {
    q: 'Where is this Kings Cross wedding venue located?',
    a: <p>Kaya Great Northern Hotel is located at <strong>King&apos;s Cross St Pancras Station, Pancras Road, London, N1C 4TB</strong>.</p>,
  },
  {
    q: 'What wedding spaces are available?',
    a: (
      <p>
        Choose from <strong>The Carriage</strong>, <strong>The Lounge</strong>, <strong>The Mezzanine</strong>, and{' '}
        <Link href="/rails-restaurant">RAILS Restaurant</Link> for celebrations and dining.
      </p>
    ),
  },
  {
    q: 'What are the guest capacities?',
    a: (
      <p>
        <strong>The Carriage:</strong> 16 seated / 30 standing. <strong>The Lounge:</strong> up to 20 per lounge, or up to 60 combined.{' '}
        <strong>RAILS Restaurant:</strong> up to 90 banquet style.
      </p>
    ),
  },
  {
    q: 'Do you offer wedding menus and packages?',
    a: (
      <p>
        Yes. Packages include amuse bouche + 3/4/5 courses, prosecco for the toast, bottled water, coffee/tea with petit fours, plus a complimentary
        menu tasting for the couple. Prices from £110 / £130 / £145 per person.
      </p>
    ),
  },
  {
    q: 'Can we host a drinks reception at the hotel?',
    a: (
      <p>
        Yes. The Lounge works well for a cocktail party, and the Mezzanine suits an intimate drinks party overlooking{' '}
        <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>.
      </p>
    ),
  },
  {
    q: 'What are the deposit and cancellation terms?',
    a: (
      <p>
        A <strong>25% deposit</strong> secures your date, with the remaining balance due 30 days before. Cancel 90+ days: full deposit refund;
        60–89 days: 50% retained; under 60 days: full deposit retained.
      </p>
    ),
  },
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        image="/img/basic/full-dinner-table.webp"
        tag="Celebrate"
        title="Weddings at Kaya GNH"
        description="Historic elegance with modern luxury for ceremonies and receptions beside King's Cross & St Pancras."
        primaryHref="mailto:weddings@kayagnhlondon.com"
        primaryLabel="Enquire Now"
      />

      <section className="venue-intro">
        <div className="container">
          <div className="venue-intro-card reveal">
            <h2 className="venue-intro-title">A London Hotel Wedding Venue in King&apos;s Cross</h2>
            <div className="title-ornament" />
            <p className="venue-intro-text">
              Nestled beside King&apos;s Cross and St Pancras, the hotel blends historic elegance with modern luxury for wedding ceremonies and receptions.
              Whether you&apos;re planning an intimate gathering or a larger celebration, our beautifully restored spaces, exceptional cuisine and bespoke
              service create a day that feels personal from start to finish.
            </p>
            <p className="venue-intro-text">
              Please contact <a href="mailto:weddings@kayagnhlondon.com">weddings@kayagnhlondon.com</a> to book your King&apos;s Cross wedding venue.
            </p>
          </div>
        </div>
      </section>

      <section className="section venue-whatson" aria-label="Wedding Features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag" style={{ color: 'var(--color-gold)' }}>Your Day</span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Everything You Need</h2>
            <div className="title-ornament" />
          </div>
          <div className="venue-whatson-grid reveal" style={{ maxWidth: 1100, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {features.map((f) => (
              <article className="venue-whatson-card" key={f.title}>
                <h3 className="venue-whatson-title">{f.title}</h3>
                <p className="venue-whatson-text">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Good To Know</span>
            <h2 className="section-title">Wedding FAQs</h2>
            <div className="title-ornament" />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
