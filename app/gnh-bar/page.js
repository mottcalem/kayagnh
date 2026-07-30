import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import { SpaceCard } from '@/components/ContentCard';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'GNH Bar & Terrace',
  description:
    "GNH Bar & Terrace at King's Cross — a reinvention of the traditional railway bar. Breakfast, small plates, cream tea, cocktails, live jazz and DJ sessions. Open daily 8am–11pm.",
};

const faqs = [
  {
    q: 'Where is GNH Bar & Terrace located?',
    a: (
      <p>
        GNH Bar &amp; Terrace is part of <Link href="/">Kaya Great Northern Hotel</Link>, right beside King&apos;s Cross and St Pancras.
        Guests can also find full location details on the <a href="/#contact">Contact page</a>.
      </p>
    ),
  },
  {
    q: 'What are the opening hours at GNH Bar & Terrace?',
    a: (
      <p>
        GNH Bar &amp; Terrace is open daily from 8am to 11pm, with breakfast served from 8am to 11am. For current happenings at the hotel, you can also visit the{' '}
        <Link href="/whats-on">What&apos;s On page</Link>.
      </p>
    ),
  },
  {
    q: 'What food is served at GNH Bar & Terrace?',
    a: (
      <p>
        The menu includes breakfast, small plates, cream tea and hearty British classics. For a more restaurant-led dining experience, guests can also explore{' '}
        <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link>.
      </p>
    ),
  },
  {
    q: 'What drinks are available at GNH Bar & Terrace?',
    a: (
      <p>
        Guests can enjoy classic and signature cocktails, beers, wines and spirits at GNH Bar &amp; Terrace. You can also explore the hotel&apos;s wider{' '}
        <Link href="/rails-restaurant">Food &amp; Drink offering</Link>.
      </p>
    ),
  },
  {
    q: 'Does GNH Bar & Terrace have live music or events?',
    a: (
      <p>
        Yes. GNH Bar &amp; Terrace hosts live jazz on Wednesdays and live DJ sessions on Saturdays. More hotel events can be found on the{' '}
        <Link href="/whats-on">What&apos;s On page</Link>.
      </p>
    ),
  },
  {
    q: 'Is GNH Bar & Terrace only for hotel guests?',
    a: (
      <p>
        No. The bar is a lively meeting point for travellers and locals alike. Visitors looking for broader stay information can also view{' '}
        <Link href="/our-rooms">Our Rooms</Link> or the hotel&apos;s main <Link href="/faqs">FAQs</Link>.
      </p>
    ),
  },
];

export default function GnhBarPage() {
  return (
    <>
      <section className="venue-banner" aria-label="GNH Bar & Terrace">
        <div className="venue-banner-image">
          <img src="/img/GNH-Bar-Banner.webp" alt="GNH Bar & Terrace at King's Cross" width={1600} height={1043} />
        </div>
      </section>

      <section className="venue-intro" id="venue-intro" aria-label="About GNH Bar & Terrace">
        <div className="container">
          <div className="venue-intro-card reveal">
            <span className="venue-intro-tag">Bar &amp; Terrace</span>
            <h1 className="venue-intro-title">Great Northern Hotel Bar in King&apos;s Cross &amp; St Pancras</h1>
            <div className="title-ornament" />
            <p className="venue-intro-text">
              A reinvention of the traditional railway bar — where business is done, journeys pause and friendships are built.
              Located beside King&apos;s Cross and St Pancras stations, GNH Bar is the hotel&apos;s lively meeting point for travellers and locals alike.
            </p>
            <p className="venue-intro-text">
              Blending British heritage with global influences, it&apos;s as suited to a morning coffee or quick beer as it is to cocktails
              and champagne, moving seamlessly from relaxed daytime spot to vibrant evening destination.
            </p>
            <div className="venue-hours">
              <div className="venue-hours-item">
                <span className="venue-hours-label">Open Daily</span>
                <span className="venue-hours-value">8am – 11pm</span>
              </div>
              <span className="venue-hours-divider" aria-hidden="true" />
              <div className="venue-hours-item">
                <span className="venue-hours-label">Breakfast</span>
                <span className="venue-hours-value">8am – 11am</span>
              </div>
            </div>
            <img src="/img/GNH-GNHBar-Logo.webp" alt="GNH Bar King's Cross" className="venue-intro-logo" width={200} height={70} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section venue-menus" id="venue-menus" aria-label="Food & Drink">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Food &amp; Drink</span>
            <h2 className="section-title">Menus At GNH Bar</h2>
            <div className="title-ornament" />
          </div>
          <div className="venue-menu-grid reveal">
            <article className="venue-menu-card">
              <div className="venue-menu-card-image">
                <img src="/img/basic/full-dinner-table.webp" alt="Food at GNH Bar" loading="lazy" width={600} height={400} />
              </div>
              <div className="venue-menu-card-body">
                <span className="venue-menu-card-badge">Food</span>
                <p className="venue-menu-card-text">Breakfast, small plates, cream tea and hearty British classics.</p>
                <img src="/img/GNH-GNHBar-Logo.webp" alt="" className="venue-menu-card-logo" width={120} height={42} loading="lazy" />
              </div>
              <a
                href="https://kayagnhlondon.com/wp-content/uploads/2020/06/GNH-Bar-April-2026-Food.pdf"
                className="btn btn-primary venue-menu-card-btn"
                target="_blank"
                rel="noopener"
              >
                Food Menu
              </a>
            </article>
            <article className="venue-menu-card">
              <div className="venue-menu-card-image">
                <img src="/img/basic/ZDA_6276.webp" alt="Drinks at GNH Bar" loading="lazy" width={600} height={400} />
              </div>
              <div className="venue-menu-card-body">
                <span className="venue-menu-card-badge">Drinks</span>
                <p className="venue-menu-card-text">Classic &amp; signature cocktails, beers, wines &amp; spirits.</p>
                <img src="/img/GNH-GNHBar-Logo.webp" alt="" className="venue-menu-card-logo" width={120} height={42} loading="lazy" />
              </div>
              <a
                href="https://kayagnhlondon.com/wp-content/uploads/2020/06/GNH-Bar-April-2026-Drinks.pdf"
                className="btn btn-primary venue-menu-card-btn"
                target="_blank"
                rel="noopener"
              >
                Drinks Menu
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section venue-whatson" id="venue-whatson" aria-label="What's On">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag" style={{ color: 'var(--color-gold)' }}>
              What&apos;s On
            </span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              Live At GNH Bar
            </h2>
            <div className="title-ornament" />
          </div>
          <div className="venue-whatson-grid reveal">
            <article className="venue-whatson-card">
              <span className="venue-whatson-day">Wednesdays</span>
              <h3 className="venue-whatson-title">Jazz Wednesdays</h3>
              <span className="venue-whatson-time">6pm – 8pm</span>
              <p className="venue-whatson-text">
                Join us every Wednesday for live jazz, soul and good vibes from the wonderful Jodie Shankland.
              </p>
            </article>
            <article className="venue-whatson-card">
              <span className="venue-whatson-day">Saturdays</span>
              <h3 className="venue-whatson-title">Saturday Live DJ</h3>
              <span className="venue-whatson-time">3pm – 8pm</span>
              <p className="venue-whatson-text">
                Live DJ sessions every Saturday in GNH Bar — a range of genres from funk to jazz to dance.
              </p>
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
              href="/rails-restaurant"
              image="/img/basic/Main-picture-480x320.webp"
              tag="Little Bar"
              title="A Stylish Escape"
              desc="A stylish escape from the hustle and bustle of King's Cross."
            />
            <SpaceCard
              href="/rails-restaurant"
              image="/img/basic/ZDA_6282.webp"
              tag="RAILS Restaurant"
              title="British With A French Accent"
              desc="British inspired menu, with a french accent, full of familiarities."
            />
          </div>
        </div>
      </section>

      <section className="section faq-section" id="gnh-bar-faqs" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Good To Know</span>
            <h2 className="section-title">FAQs</h2>
            <div className="title-ornament" />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="section edwardian-prompt" aria-label="Book a Table">
        <div className="container">
          <div className="edwardian-prompt-inner reveal">
            <div className="edwardian-prompt-content">
              <h2 className="edwardian-prompt-title">Join Us At GNH Bar &amp; Terrace</h2>
              <p className="edwardian-prompt-desc">
                From morning coffee to late-night cocktails, our terrace looks out across King&apos;s Cross Square — just 25 metres from the Eurostar terminal.
              </p>
            </div>
            <a href={SITE.phoneHref} className="btn" style={{ flexShrink: 0, background: 'var(--color-primary)', color: 'var(--color-white)' }}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
