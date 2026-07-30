import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Special Offers',
  description: 'Discover special packages and deals at Kaya Great Northern Hotel — Kaya Club Rewards and website exclusive offers.',
};

const offers = [
  {
    tag: 'Rewards',
    title: 'Kaya Club Rewards',
    desc: 'Designed to enhance every stay, Kaya Club Rewards offers privileged access to exclusive events and seasonal campaigns across Kaya Hotels & Resorts and Kaya Palazzo Hotels & Resorts.',
    href: 'https://kayahotels.com/en/kaya-club/',
    image: '/img/basic/KAYA-CLUB-SAYFASI-LOGO-DEGISIMI.webp',
  },
  {
    tag: 'Website Special',
    title: 'Website Special | 5% Off',
    desc: 'Enjoy 5% Off on Flexible Stays when booking directly through our official website.',
    href: '/#',
    image: '/img/basic/gnh-hero-exterior-1600_3.webp',
  },
];

export default function SpecialOffersPage() {
  return (
    <>
      <PageHero
        image="/img/basic/Main-picture-480x320.webp"
        tag="Plan Your Stay"
        title="Special Offers"
        description="Discover special packages and deals at Kaya Great Northern Hotel."
      />

      <section className="section offers" aria-label="Offers">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Offers</span>
            <h2 className="section-title">Packages &amp; Deals</h2>
            <div className="title-ornament" />
          </div>
          <div className="offers-grid-simple reveal">
            {offers.map((o) => (
              <article className="offer-card" key={o.title}>
                <div className="offer-image">
                  <img src={o.image} alt={o.title} loading="lazy" />
                </div>
                <div className="offer-content">
                  <span className="offer-category">{o.tag}</span>
                  <h3 className="offer-title">{o.title}</h3>
                  <p className="offer-desc">{o.desc}</p>
                  <Link href={o.href} className="offer-link">Read more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
