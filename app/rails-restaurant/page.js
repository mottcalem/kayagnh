import Link from 'next/link';
import { EditorialIntro, SplitFaq } from '@/components/Editorial';

export const metadata = {
  title: 'RAILS Restaurant & Little Bar',
  description:
    'RAILS is an intimate restaurant near King’s Cross Station and St Pancras, serving modern British classics with a French accent.',
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
    badge: 'RAILS’ Little Bar',
    image: '/img/basic/little-bar.webp',
    imageAlt: 'Champagne coupes at RAILS’ Little Bar',
    text: 'Inviting and snug. It boasts an extensive choice of digestifs, cocktails, champagne and wine.',
  },
];

const faqs = [
  {
    q: 'Where is RAILS Restaurant & Little Bar located?',
    a: (
      <p>
        RAILS Restaurant &amp; Little Bar is part of <Link href="/">Kaya Great Northern Hotel</Link>, just moments from King’s Cross and St Pancras.
        <br />
        Guests can also find full location details on the <Link href="/contact">Contact page</Link>.
      </p>
    ),
  },
  {
    q: 'What type of food does RAILS serve?',
    a: (
      <p>
        RAILS serves modern British classics with a French accent in a calm, refined setting near the station.
        <br />
        You can also explore <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>.
      </p>
    ),
  },
  {
    q: 'What kind of atmosphere can I expect at RAILS?',
    a: (
      <p>
        RAILS is designed as an intimate restaurant with warm lighting, art-filled interiors and attentive service, offering a more relaxed dining space above the bustle of King’s Cross.
        <br />
        For more of the hotel experience, visit <Link href="/our-rooms">Our Rooms</Link>.
      </p>
    ),
  },
  {
    q: 'Is RAILS suitable for pre-theatre dinners or business lunches?',
    a: (
      <p>
        Yes. RAILS is well suited to pre-theatre dinners, business lunches and relaxed evening dining near King’s Cross and St Pancras.
        <br />
        You can also see what’s happening at the hotel on the <Link href="/whats-on">What’s On page</Link>.
      </p>
    ),
  },
  {
    q: 'Can I view the menu before visiting RAILS?',
    a: (
      <p>
        Yes. View the current menus at <a href="https://railslondon.com/" target="_blank" rel="noopener noreferrer">railslondon.com</a>, or browse <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link> for drinks-led menus.
      </p>
    ),
  },
  {
    q: 'Does RAILS have a bar?',
    a: (
      <p>
        Yes. RAILS includes Little Bar, a snug adjoining space offering digestifs, cocktails, champagne and wine.
        <br />
        Guests looking for a more bustling drinks setting can also visit <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>.
      </p>
    ),
  },
  {
    q: 'Is RAILS only for hotel guests?',
    a: (
      <p>
        No. RAILS is a convenient dining option for hotel guests, visitors and those meeting near King’s Cross and St Pancras.
        <br />
        For broader stay information, visit <Link href="/faqs">FAQs</Link> or <Link href="/our-rooms">Our Rooms</Link>.
      </p>
    ),
  },
];

export default function RailsPage() {
  return (
    <>
      <EditorialIntro
        className="editorial-intro--top"
        headingFullWidth
        tag="RAILS Restaurant & Little Bar"
        title="RAILS Restaurant & Little Bar"
        image="/img/basic/rails-exterior.webp"
        imageAlt="RAILS Restaurant entrance at King’s Cross"
      >
        <p>
          RAILS is an intimate restaurant near King’s Cross Station and St Pancras, serving modern British classics with a French accent. Ideal for pre-theatre dinners, business lunches or relaxed evenings – a calm dining space just moments from the station.
        </p>
        <p>
          One floor above the bustle of King’s Cross Station, RAILS offers a calm setting where warm lighting, art-filled interiors and attentive service set the tone – a nod to travel, Paris and the romance of the railway.
        </p>
        <div className="editorial-intro-actions">
          <a className="btn intro-btn-solid" href="https://railslondon.com/reservations/" target="_blank" rel="noopener noreferrer">Book a Table</a>
          <a className="btn intro-btn-ghost" href="https://railslondon.com/" target="_blank" rel="noopener noreferrer">View Menu & More</a>
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
                {space.href ? (
                  <Link className="btn bar-card-btn" href={space.href}>Read More</Link>
                ) : (
                  <span className="btn bar-card-btn">Read More</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <SplitFaq compact tag="FAQs" title="Frequently asked questions." items={faqs} />
    </>
  );
}
