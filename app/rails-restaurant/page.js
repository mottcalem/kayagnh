import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { EditorialFeature, EditorialIntro, ImageCta, SplitFaq } from '@/components/Editorial';
import EditorialCarousel from '@/components/EditorialCarousel';

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
        secondaryLabel="View Menus"
      />

      <EditorialIntro
        tag="About RAILS"
        title="A dining room shaped by the romance of travel."
        text="One floor above the bustle of King's Cross, RAILS brings modern British classics and French accents together in a warm, art-filled room. Come for a business lunch, pre-theatre dinner or an evening that takes its time."
        image="/img/basic/ZDA_6282.webp"
        href="#menus"
        cta="View Menus"
      />

      <div id="menus">
        <EditorialFeature
          tag="RAILS"
          title="British at heart. French in spirit."
          text="Familiar flavours, seasonal produce and a carefully chosen global wine list — served with an easy sense of occasion from lunch through dinner."
          image="/img/basic/full-dinner-table.webp"
          href="https://kayagnhlondon.com/restaurants-and-bars/kings-cross-restaurant/"
          cta="View RAILS Menus"
        />
        <EditorialFeature
          reverse
          tag="Afternoon Tea"
          title="A pause worth travelling for."
          text="Fresh pastries, delicate sandwiches and tea poured at your pace. Our afternoon tea brings a little theatre to the heart of King's Cross."
          image="/img/basic/Main-picture-480x320.webp"
          href="/whats-on"
          cta="Discover Afternoon Tea"
        />
      </div>

      <section className="section editorial-discover">
        <div className="container">
          <span className="editorial-eyebrow">More to Discover</span>
          <h2 className="editorial-section-title">From dinner to drinks.</h2>
          <EditorialCarousel label="other dining spaces">
            <Link href="/gnh-bar" className="editorial-carousel-card">
              <img src="/img/GNH-Bar-Banner.webp" alt="GNH Bar and Terrace" />
              <div className="editorial-carousel-card-copy">
                <span className="editorial-eyebrow">GNH Bar &amp; Terrace</span>
                <h3>The day flows differently here.</h3>
                <p>Morning coffee, cocktails after dark and a terrace overlooking King&apos;s Cross Square.</p>
                <span className="editorial-link">Discover GNH Bar <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
            <Link href="/gnh-bar#venue-whatson" className="editorial-carousel-card">
              <img src="/img/basic/ZDA_6276.webp" alt="Live music at GNH Bar" />
              <div className="editorial-carousel-card-copy">
                <span className="editorial-eyebrow">Live at GNH</span>
                <h3>Music for the journey.</h3>
                <p>Jazz Wednesdays and Saturday DJ sessions in our lively railway bar.</p>
                <span className="editorial-link">See What&apos;s On <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          </EditorialCarousel>
        </div>
      </section>

      <SplitFaq compact title="Before your table." items={faqs} />
      <ImageCta image="/img/basic/ZDA_6282.webp" tag="RAILS Restaurant" title="Your table awaits." href="https://www.opentable.co.uk/" cta="Book a Table" />
    </>
  );
}
