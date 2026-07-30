import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { SpaceCard } from '@/components/ContentCard';

export const metadata = {
  title: 'Local Guide',
  description: "London local guide from Kaya Great Northern Hotel — King's Cross favourites, Camden, seasonal guides and more.",
};

const guides = [
  {
    title: 'Spring & Summer Guide',
    desc: 'Discover the best things to do in London in spring and summer 2026.',
    href: 'https://kayagnhlondon.com/local-guide/',
    image: 'https://kayagnhlondon.com/wp-content/uploads/2020/06/southbank-london-eye.jpg',
    local: '/img/basic/gnh-hero-exterior-1600_3.webp',
  },
  {
    title: 'Local Discounts',
    desc: "Explore King's Cross and enjoy exclusive local discounts as our guest.",
    href: 'https://kayagnhlondon.com/local-guide/',
    local: '/img/basic/key.webp',
  },
  {
    title: 'London Favourites',
    desc: 'Our top 5 must-visits for London — plan your perfect visit from our door.',
    href: 'https://kayagnhlondon.com/local-guide/',
    local: '/img/basic/clock.webp',
  },
  {
    title: "King's Cross",
    desc: 'Local favourites that make your trip all the more colourful.',
    href: 'https://kayagnhlondon.com/local-guide/',
    local: '/img/basic/GNH-AerialView-1.webp',
  },
  {
    title: 'Why Visit Camden',
    desc: 'Dazzling markets, quaint canals and vibrant scenery — a must-visit whatever the weather.',
    href: 'https://kayagnhlondon.com/local-guide/',
    local: '/img/basic/background.webp',
  },
  {
    title: 'London in Autumn/Winter',
    desc: 'Download our handy guide on how to make the most of Autumn & Winter in London.',
    href: 'https://kayagnhlondon.com/local-guide/',
    local: '/img/basic/easter-480x321.webp',
  },
];

export default function LocalGuidePage() {
  return (
    <>
      <PageHero
        image="/img/basic/gnh-hero-exterior-1600_3.webp"
        tag="Explore London"
        title="London Local Guide"
        description="Cherry-picked delights from around the capital — local gems and London's finest attractions."
      />

      <section className="venue-intro">
        <div className="container">
          <div className="venue-intro-card reveal">
            <h2 className="venue-intro-title">Make It A Trip To Remember</h2>
            <div className="title-ornament" />
            <p className="venue-intro-text">
              Whether you&apos;re planning an extra special weekend away or visiting London for the first time, let us inspire you with our
              cherry-picked delights from around the capital. We uncover local gems and highlight some of our favourite — and London&apos;s finest — attractions.
            </p>
          </div>
        </div>
      </section>

      <section className="section other-rooms venue-spaces" aria-label="Journeys Worth Making">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Journeys Worth Making</span>
            <h2 className="section-title">Guides &amp; Inspiration</h2>
            <div className="title-ornament" />
          </div>
          <div className="venue-spaces-grid reveal" style={{ maxWidth: 1100, gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {guides.map((g) => (
              <div className="other-room-card" key={g.title}>
                <div className="other-room-card-image">
                  <img src={g.local} alt={g.title} loading="lazy" />
                </div>
                <div className="other-room-card-body">
                  <span className="other-room-card-tag">Guide</span>
                  <h3 className="other-room-card-title">{g.title}</h3>
                  <p className="other-room-card-desc">{g.desc}</p>
                </div>
              </div>
         
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }} className="reveal">
            <Link href="/our-rooms" className="btn btn-secondary">Discover The Hotel</Link>
          </div>
        </div>
      </section>
    </>
  );
}
