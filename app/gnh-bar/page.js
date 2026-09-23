import Link from 'next/link';
import EditorialCarousel from '@/components/EditorialCarousel';
import GnhBarOpener from '@/components/GnhBarOpener';
import { SplitFaq } from '@/components/Editorial';

export const metadata = {
  title: 'GNH Bar & Terrace',
  description:
    "GNH Bar & Terrace at King's Cross — a reinvention of the traditional railway bar. Breakfast, small plates, cream tea, cocktails, live jazz and DJ sessions. Open daily 8am–11pm.",
};

const menus = [
  {
    badge: 'Food',
    image: '/img/basic/gnh-bar-food.webp',
    imageAlt: 'Cheese board, bread and wine at GNH Bar',
    text: 'Breakfast, small plates, cream tea and hearty British classics.',
    href: 'https://kayagnhlondon.com/wp-content/uploads/2020/06/GNH-Bar-April-2026-Food.pdf',
    cta: 'Food Menu',
  },
  {
    badge: 'Drinks',
    image: '/img/basic/gnh-bar-drinks.webp',
    imageAlt: 'Champagne on ice at GNH Bar',
    text: 'Classic & signature cocktails, beers, wines & spirits.',
    href: 'https://kayagnhlondon.com/wp-content/uploads/2020/06/GNH-Bar-April-2026-Drinks.pdf',
    cta: 'Drinks Menu',
  },
];

const spaces = [
  {
    badge: "RAILS' Little Bar",
    image: '/img/basic/rails-little-bar-cover.webp',
    imageAlt: "Champagne coupes at RAILS' Little Bar",
    text: 'French-inspired digestifs and cocktails in an intimate setting above King’s Cross.',
    href: '/rails-little-bar',
  },
  {
    badge: 'RAILS Restaurant',
    image: '/img/basic/ZDA_6282.webp',
    imageAlt: 'RAILS Restaurant dining room',
    imagePosition: '50% 78%',
    text: 'British inspired menu, with a French accent, full of familiarities.',
    href: '/rails-restaurant',
  },
];

const faqs = [
  {
    q: 'Where is GNH Bar & Terrace located?',
    a: (
      <p>
        GNH Bar &amp; Terrace is part of <Link href="/">Kaya Great Northern Hotel</Link>, right beside King’s Cross and St Pancras.
        <br />
        Guests can also find full location details on the <Link href="/contact">Contact page</Link>.
      </p>
    ),
  },
  {
    q: 'What are the opening hours at GNH Bar & Terrace?',
    a: (
      <p>
        GNH Bar &amp; Terrace is open daily from 8am to 11pm, with breakfast served from 8am to 11am.
        <br />
        For current happenings at the hotel, you can also visit the <Link href="/whats-on">What’s On page</Link>.
      </p>
    ),
  },
  {
    q: 'What food is served at GNH Bar & Terrace?',
    a: (
      <p>
        The menu includes breakfast, small plates, cream tea and hearty British classics.
        <br />
        For a more restaurant-led dining experience, guests can also explore <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link>.
      </p>
    ),
  },
  {
    q: 'What drinks are available at GNH Bar & Terrace?',
    a: (
      <p>
        Guests can enjoy classic and signature cocktails, beers, wines and spirits at GNH Bar &amp; Terrace.
        <br />
        You can also explore the hotel’s wider <Link href="/rails-restaurant">Food &amp; Drink offering</Link>.
      </p>
    ),
  },
  {
    q: 'Does GNH Bar & Terrace have live music or events?',
    a: (
      <p>
        Yes. GNH Bar &amp; Terrace hosts live jazz on Wednesdays and live DJ sessions on Saturdays.
        <br />
        More hotel events can be found on the <Link href="/whats-on">What’s On page</Link>.
      </p>
    ),
  },
  {
    q: 'Is GNH Bar & Terrace only for hotel guests?',
    a: (
      <p>
        No. The bar is a lively meeting point for travellers and locals alike.
        <br />
        Visitors looking for broader stay information can also view <Link href="/our-rooms">Our Rooms</Link> or the hotel’s main <Link href="/faqs">FAQs</Link>.
      </p>
    ),
  },
];

export default function GnhBarPage() {
  return (
    <>
      <GnhBarOpener />

      <section className="section bar-card-section" id="venue-menus" aria-label="Food & Drink">
        <div className="container">
          <span className="editorial-eyebrow bar-card-section-eyebrow">Food &amp; Drink</span>
          <div className="bar-card-grid reveal">
            {menus.map((menu) => (
              <article className="bar-card" key={menu.badge}>
                <div className="bar-card-image">
                  <img src={menu.image} alt={menu.imageAlt} loading="lazy" />
                </div>
                <div className="bar-card-body">
                  <span className="bar-card-badge">{menu.badge}</span>
                  <p className="bar-card-text">{menu.text}</p>
                  <img className="bar-card-logo" src="/img/basic/gnh-bar-logo.webp" alt="GNH Bar, King's Cross" width={160} height={56} loading="lazy" />
                </div>
                <a className="btn bar-card-btn" href={menu.href} target="_blank" rel="noopener noreferrer">
                  {menu.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial-discover editorial-discover--dark" id="venue-whatson">
        <div className="container">
          <span className="editorial-eyebrow">Live at GNH Bar</span>
          <h2 className="editorial-section-title">A soundtrack for King&apos;s Cross.</h2>
          <EditorialCarousel label="live events">
            <article className="editorial-carousel-card">
              <img src="/img/basic/jazz-wednesdays.webp" alt="Jodie Shankland singing live at GNH Bar" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">Wednesdays · 6–8pm</span><h3>Jazz Wednesdays</h3><p>Join us every Wednesday from 6–8pm for live jazz, soul and good vibes from the wonderful Jodie Shankland.</p></div>
            </article>
            <article className="editorial-carousel-card">
              <img src="/img/basic/saturday-dj.webp" alt="DJ playing a live set at GNH Bar" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">Saturdays · 3–8pm</span><h3>Saturday Live DJ</h3><p>Live DJ sessions every Saturday in GNH Bar from 3–8pm — a range of genres from funk to jazz to dance!</p></div>
            </article>
          </EditorialCarousel>
        </div>
      </section>

      <section className="section bar-card-section" aria-label="Other Spaces">
        <div className="container">
          <span className="editorial-eyebrow bar-card-section-eyebrow">Other Spaces</span>
          <div className="bar-card-grid reveal">
            {spaces.map((space) => (
              <article className="bar-card" key={space.badge}>
                <div className="bar-card-image">
                  <img src={space.image} alt={space.imageAlt} style={space.imagePosition ? { objectPosition: space.imagePosition } : undefined} loading="lazy" />
                </div>
                <div className="bar-card-body">
                  <span className="bar-card-badge">{space.badge}</span>
                  <p className="bar-card-text">{space.text}</p>
                </div>
                <Link className="btn bar-card-btn" href={space.href}>Read More</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SplitFaq compact tag="FAQs" title="Frequently asked questions." items={faqs} />
    </>
  );
}
