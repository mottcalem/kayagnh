import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Careers',
  description:
    'Careers at Kaya Great Northern Hotel — a boutique hotel in King\'s Cross offering thoughtful hospitality, seriously good food and drinks.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        image="/img/IMG_2831.webp"
        tag="Join Our Team"
        title="Careers"
        description="Honest, thoughtful hospitality with fun, friendly and natural charm."
        primaryHref="mailto:info@gnhlondon.com"
        primaryLabel="Get In Touch"
      />

      <section className="venue-intro" aria-label="Our Hotel">
        <div className="container">
          <div className="venue-intro-card reveal">
            <span className="venue-intro-tag">Our Hotel</span>
            <h2 className="venue-intro-title">Kaya Great Northern Hotel</h2>
            <div className="title-ornament" />
            <p className="venue-intro-text">
              Kaya Great Northern Hotel is a small, independent boutique hotel restored with timeless elegance.
            </p>
            <p className="venue-intro-text">
              For the discerning and cultured guest seeking comfort, quality and recognition. Offering seriously good
              food and drinks from our bar and restaurant.
            </p>
            <p className="venue-intro-text">
              Our team delivers honest, thoughtful hospitality with fun, friendly and natural charm.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
