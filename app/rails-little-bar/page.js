import Link from 'next/link';
import { EditorialIntro, SplitFaq } from '@/components/Editorial';

export const metadata = {
  title: "RAILS' Little Bar",
  description:
    "RAILS' Little Bar at Kaya Great Northern Hotel — French-inspired digestifs and cocktails, an extensive wine list and intimate service beside King's Cross.",
};

const spaces = [
  {
    badge: 'GNH Bar and Terrace',
    image: '/img/basic/gnh-bar-cocktail.webp',
    imageAlt: 'Signature cocktail at GNH Bar',
    text: 'Our take on the railway bar. Bustling, vibrant and welcoming.',
    href: '/gnh-bar',
  },
  {
    badge: 'RAILS Restaurant',
    image: '/img/basic/rails-interior-1.jpg',
    imageAlt: 'RAILS Restaurant dining room',
    text: 'Modern British classics with a French accent, moments from King’s Cross Station.',
    href: '/rails-restaurant',
  },
];

const faqs = [
  {
    q: "Where is RAILS' Little Bar?",
    a: (
      <p>
        RAILS&apos; Little Bar sits within <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link> at{' '}
        <Link href="/">Kaya Great Northern Hotel</Link>, one floor above King&apos;s Cross Station.
        <br />
        Full directions are on the <Link href="/contact">Contact page</Link>.
      </p>
    ),
  },
  {
    q: "What is served at RAILS' Little Bar?",
    a: (
      <p>
        The bar focuses on French-inspired digestifs and cocktails, with an extensive French and global wine list,
        including English sparkling wine.
        <br />
        For full dining, visit <Link href="/rails-restaurant">RAILS Restaurant</Link> or{' '}
        <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>.
      </p>
    ),
  },
  {
    q: 'Can I view the drinks menu before visiting?',
    a: (
      <p>
        Yes. Menus and reservations are available at{' '}
        <a href="https://railslondon.com/" target="_blank" rel="noopener noreferrer">
          railslondon.com
        </a>
        .
      </p>
    ),
  },
  {
    q: "Is RAILS' Little Bar only for hotel guests?",
    a: (
      <p>
        No. The bar welcomes hotel guests, travellers and locals meeting near King&apos;s Cross and St Pancras.
        <br />
        See <Link href="/faqs">FAQs</Link> for wider stay information.
      </p>
    ),
  },
];

export default function RailsLittleBarPage() {
  return (
    <>
      <EditorialIntro
        className="editorial-intro--top editorial-intro--cover"
        headingFullWidth
        headingLevel="h1"
        tag="Food & Drink"
        title="RAILS' Little Bar"
        image="/img/basic/rails-little-bar-interior.webp"
        imageAlt="Velvet seating and art at RAILS' Little Bar"
      >
        <p>
          A creative menu specialising in French-inspired digestifs and cocktails. It includes an extensive French and
          global wine selection, complete with English sparkling wine. This is a journey of discovery in intimate
          settings and personal service.
        </p>
        <div className="editorial-intro-actions">
          <a
            className="btn intro-btn-solid"
            href="https://railslondon.com/reservations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Table
          </a>
          <a className="btn intro-btn-ghost" href="https://railslondon.com/" target="_blank" rel="noopener noreferrer">
            View Menu &amp; More
          </a>
        </div>
      </EditorialIntro>

      <section className="section bar-card-section bar-card-section--dark" aria-label="Other Spaces">
        <div className="container">
          <span className="editorial-eyebrow bar-card-section-eyebrow">Other Spaces</span>
          <div className="bar-card-grid reveal">
            {spaces.map((space) => (
              <article className="bar-card" key={space.badge}>
                <div className="bar-card-image">
                  <img src={space.image} alt={space.imageAlt} loading="lazy" />
                </div>
                <div className="bar-card-body">
                  <span className="bar-card-badge">{space.badge}</span>
                  <p className="bar-card-text">{space.text}</p>
                </div>
                <Link className="btn bar-card-btn" href={space.href}>
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SplitFaq compact tag="FAQs" title="Frequently asked questions." items={faqs} />
    </>
  );
}
