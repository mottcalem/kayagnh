import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';
import { SpaceCard } from '@/components/ContentCard';

export const metadata = {
  title: 'RAILS Restaurant & Little Bar',
  description:
    "RAILS is an intimate restaurant near King's Cross Station and St Pancras, serving modern British classics with a French accent.",
};

const faqs = [
  {
    q: 'Where is RAILS Restaurant & Little Bar located?',
    a: (
      <p>
        RAILS Restaurant &amp; Little Bar is part of <Link href="/">Kaya Great Northern Hotel</Link>, just moments from King&apos;s Cross and St Pancras.
        Guests can also find full location details on the <a href="/#contact">Contact page</a>.
      </p>
    ),
  },
  {
    q: 'What type of food does RAILS serve?',
    a: (
      <p>
        RAILS serves modern British classics with a French accent in a calm, refined setting near the station.
        You can also explore <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>.
      </p>
    ),
  },
  {
    q: 'What kind of atmosphere can I expect at RAILS?',
    a: (
      <p>
        RAILS is designed as an intimate restaurant with warm lighting, art-filled interiors and attentive service,
        offering a more relaxed dining space above the bustle of King&apos;s Cross. For more of the hotel experience, visit{' '}
        <Link href="/our-rooms">Our Rooms</Link>.
      </p>
    ),
  },
  {
    q: 'Is RAILS suitable for pre-theatre dinners or business lunches?',
    a: (
      <p>
        Yes. RAILS is well suited to pre-theatre dinners, business lunches and relaxed evening dining near King&apos;s Cross and St Pancras.
        You can also see what&apos;s happening at the hotel on the <Link href="/whats-on">What&apos;s On page</Link>.
      </p>
    ),
  },
  {
    q: 'Can I view the menu before visiting RAILS?',
    a: (
      <p>
        Yes. Use the Menus &amp; more links on this page, or browse <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link> for drinks-led menus.
      </p>
    ),
  },
  {
    q: 'Does RAILS have a bar?',
    a: (
      <p>
        Yes. RAILS includes Little Bar, a snug adjoining space offering digestifs, cocktails, champagne and wine.
        Guests looking for a more bustling drinks setting can also visit <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>.
      </p>
    ),
  },
  {
    q: 'Is RAILS only for hotel guests?',
    a: (
      <p>
        No. RAILS is a convenient dining option for hotel guests, visitors and those meeting near King&apos;s Cross and St Pancras.
        For broader stay information, visit <Link href="/faqs">FAQs</Link> or <Link href="/our-rooms">Our Rooms</Link>.
      </p>
    ),
  },
];

export default function RailsPage() {
  return (
    <>
      <PageHero
        image="/img/basic/ZDA_6282.webp"
        tag="Dining"
        title="RAILS Restaurant & Little Bar"
        description="Modern British classics with a French accent — calm dining just moments from King's Cross and St Pancras."
        primaryHref="https://www.opentable.co.uk/"
        primaryLabel="Book a Table"
        secondaryHref="#menus"
        secondaryLabel="Menus & More"
      />

      <section className="venue-intro" aria-label="About RAILS">
        <div className="container">
          <div className="venue-intro-card reveal">
            <span className="venue-intro-tag">About Rails</span>
            <h2 className="venue-intro-title">An Intimate Restaurant Near King&apos;s Cross</h2>
            <div className="title-ornament" />
            <p className="venue-intro-text">
              RAILS is an intimate restaurant near King&apos;s Cross Station and St Pancras, serving modern British classics with a French accent.
              Ideal for pre-theatre dinners, business lunches or relaxed evenings – a calm dining space just moments from the station.
            </p>
            <p className="venue-intro-text">
              One floor above the bustle of King&apos;s Cross Station, RAILS offers a calm setting where warm lighting, art-filled interiors and
              attentive service set the tone – a nod to travel, Paris and the romance of the railway.
            </p>
            <div className="rooms-page-hero-actions" style={{ marginTop: 28 }}>
              <a href="https://www.opentable.co.uk/" className="btn btn-secondary" target="_blank" rel="noopener">Book a Table</a>
              <a href="#menus" className="btn btn-primary">Menus &amp; More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section venue-menus" id="menus" aria-label="Menus">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Food &amp; Drink</span>
            <h2 className="section-title">Menus &amp; More</h2>
            <div className="title-ornament" />
          </div>
          <div className="venue-menu-grid reveal">
            <article className="venue-menu-card">
              <div className="venue-menu-card-image">
                <img src="/img/basic/full-dinner-table.webp" alt="RAILS dining" loading="lazy" />
              </div>
              <div className="venue-menu-card-body">
                <span className="venue-menu-card-badge">Restaurant</span>
                <p className="venue-menu-card-text">British inspired menu with a French accent, full of familiarities.</p>
              </div>
              <a href="https://kayagnhlondon.com/restaurants-and-bars/kings-cross-restaurant/" className="btn btn-primary venue-menu-card-btn" target="_blank" rel="noopener">
                View Menus
              </a>
            </article>
            <article className="venue-menu-card">
              <div className="venue-menu-card-image">
                <img src="/img/basic/Main-picture-480x320.webp" alt="Afternoon Tea" loading="lazy" />
              </div>
              <div className="venue-menu-card-body">
                <span className="venue-menu-card-badge">Afternoon Tea</span>
                <p className="venue-menu-card-text">Bloom Garden Afternoon Tea — fresh pastries on pretty plates.</p>
              </div>
              <Link href="/whats-on" className="btn btn-primary venue-menu-card-btn">Discover Afternoon Tea</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section other-rooms venue-spaces" aria-label="Other Spaces">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Other Spaces</h2>
            <div className="title-ornament" />
          </div>
          <div className="venue-spaces-grid reveal">
            <SpaceCard
              href="/gnh-bar"
              image="/img/GNH-Bar-Banner.webp"
              tag="GNH Bar & Terrace"
              title="Our Take On The Railway Bar"
              desc="Bustling, vibrant and welcoming."
            />
            <SpaceCard
              href="/rails-restaurant#menus"
              image="/img/basic/ZDA_6276.webp"
              tag="Little Bar"
              title="RAILS' Little Bar"
              desc="Inviting and snug — digestifs, cocktails, champagne and wine."
            />
          </div>
        </div>
      </section>

      <section className="section faq-section" aria-label="FAQs">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Good To Know</span>
            <h2 className="section-title">FAQs</h2>
            <div className="title-ornament" />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
