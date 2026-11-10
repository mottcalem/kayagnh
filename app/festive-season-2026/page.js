import Link from 'next/link';
import { GIFT_VOUCHERS_URL } from '@/lib/site';

const WP_UPLOADS = 'https://kayagnhlondon.com/wp-content/uploads';

export const metadata = {
  title: 'Festive Season 2026',
  description:
    'Celebrate the season at Kaya Great Northern Hotel, King’s Cross — festive dining at RAILS Restaurant & Little Bar, Christmas Day, New Year’s Eve and private events.',
};

const brochureLinks = [
  {
    href: `${WP_UPLOADS}/2020/06/ChristmasBrochure2026-KayaGNH.pdf`,
    label: 'Christmas Brochure',
    external: true,
  },
  {
    href: `${WP_UPLOADS}/2020/06/FestiveSeatedAlaCarte2026-Kaya-GNH.pdf`,
    label: 'Festive Menu – Groups Over 6',
    external: true,
  },
  {
    href: GIFT_VOUCHERS_URL,
    label: 'Gift Vouchers',
    external: true,
  },
];

const seasonalHighlights = [
  {
    badge: 'Christmas Day Menu',
    image: '/img/basic/festive-christmas-day.jpg',
    imageAlt: 'Festive place setting at RAILS Restaurant',
    text: 'Savour a decadent Christmas Day banquet, set within the luxurious surrounds and enduring allure of RAILS Restaurant.',
    href: '/offers/christmas-day-at-gnh',
    cta: 'Discover More',
  },
  {
    badge: 'New Years Eve Dinner & Jazz',
    image: '/img/basic/nye-dinner-jazz.webp',
    imageAlt: 'New Year’s Eve dining at Kaya Great Northern Hotel',
    text: 'Ring in the New Year with an unforgettable evening of fine dining, sparkling bubbles, and smooth live jazz.',
    href: '/events/nyedinnerjazz',
    cta: 'Discover More',
  },
  {
    badge: 'Gift Vouchers',
    image: '/img/basic/festive-gift-vouchers.jpg',
    imageAlt: 'Dining at Kaya Great Northern Hotel',
    text: 'Choose from our range of gift vouchers and treat your loved ones to a culinary delight!',
    href: GIFT_VOUCHERS_URL,
    cta: 'Discover More',
    external: true,
  },
];

export default function FestiveSeason2026Page() {
  return (
    <>
      <section className="festive-season-opener editorial-intro--top" aria-label="Festive Season 2026">
        <div className="container festive-season-opener-inner">
          <figure className="festive-season-opener-media reveal">
            <img
              src="/img/basic/festive-season-opener.webp"
              alt="Festive table setting at Kaya Great Northern Hotel"
              width={2500}
              height={1669}
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>
        <div className="container festive-season-intro-wrap">
          <div className="section-header reveal festive-season-intro">
            <span className="section-tag">King&apos;s Cross</span>
            <h1 className="section-title">Your festive plans start here</h1>
            <div className="title-ornament" />
            <p className="section-desc">
              Celebrate the season in style at Kaya Great Northern Hotel, perfectly positioned in the heart of King&apos;s
              Cross — London&apos;s vibrant hub of culture and connection. Indulge in our festive menus at{' '}
              <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link>, or host a private celebration in
              one of our elegant <Link href="/meetings-and-events">event spaces</Link> for a truly memorable occasion.
            </p>
            <div className="editorial-intro-actions festive-season-brochures">
              {brochureLinks.map((item) => (
                <a
                  key={item.label}
                  className="btn btn-secondary"
                  href={item.href}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bar-card-section bar-card-section--dark" aria-label="Christmas Day and New Years Eve">
        <div className="container">
          <span className="editorial-eyebrow bar-card-section-eyebrow">Christmas Day &amp; New Years Eve</span>
          <div className="bar-card-grid reveal">
            {seasonalHighlights.map((item) => (
              <article className="bar-card" key={item.badge}>
                <div className="bar-card-image">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </div>
                <div className="bar-card-body">
                  <span className="bar-card-badge">{item.badge}</span>
                  <p className="bar-card-text">{item.text}</p>
                </div>
                {item.external ? (
                  <a
                    className="btn bar-card-btn"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.cta}
                  </a>
                ) : (
                  <Link className="btn bar-card-btn" href={item.href}>
                    {item.cta}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section festive-season-contact" aria-label="Festive enquiries">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Connect</span>
            <h2 className="section-title">Connect with Kaya GNH</h2>
            <div className="title-ornament" />
            <p className="section-desc">
              For festive bookings and private celebrations, our team will be happy to help.
            </p>
            <div className="editorial-intro-actions festive-season-actions--centered">
              <Link className="btn btn-primary" href="/contact">
                Get in touch
              </Link>
              <a
                className="btn btn-secondary"
                href="https://railslondon.com/reservations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a table at RAILS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
