import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: "What's On",
  description: "Discover events at Kaya GNH — Jazz Wednesdays, Saturday DJ Sessions, Afternoon Tea and more.",
};

const events = [
  {
    tag: 'Events',
    title: 'Jazz Wednesdays at GNH Bar',
    desc: 'Join us in GNH Bar every Wednesday from 6pm–8pm for live jazz, soul and good vibes from Jodie Shankland.',
    image: '/img/basic/ZDA_6276.webp',
    href: '/gnh-bar#venue-whatson',
  },
  {
    tag: 'Events',
    title: 'RAILS Afternoon Tea',
    desc: "Embark on a culinary journey with our Afternoon Tea menu, inspired by the romance of railway travel.",
    image: '/img/basic/Main-picture-480x320.webp',
    href: '/rails-restaurant',
  },
  {
    tag: 'Events',
    title: 'Saturday DJ Sessions',
    desc: 'Join us in GNH Bar every Saturday from 3pm–8pm for live DJ sessions — funk to jazz to dance.',
    image: '/img/GNH-Bar-Banner.webp',
    href: '/gnh-bar#venue-whatson',
  },
  {
    tag: 'Offers',
    title: 'Day Use Rates',
    desc: 'Available from 9am until 5pm. Rates from £165. Offer subject to availability.',
    image: '/img/basic/Heritage-Room-3.webp',
    href: 'mailto:reservations@kayagnhlondon.com',
  },
];

export default function WhatsOnPage() {
  return (
    <>
      <PageHero
        image="/img/basic/easter-480x321.webp"
        tag="Discover More"
        title="What's On at Kaya GNH"
        description="Connect with the heart of the area — live music, afternoon tea and seasonal moments."
      />

      <section className="section offers" aria-label="What's On">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Events</span>
            <h2 className="section-title">Happening Now</h2>
            <div className="title-ornament" />
          </div>
          <div className="offers-grid-simple reveal">
            {events.map((e) => (
              <article className="offer-card" key={e.title}>
                <div className="offer-image">
                  <img src={e.image} alt={e.title} loading="lazy" />
                </div>
                <div className="offer-content">
                  <span className="offer-category">{e.tag}</span>
                  <h3 className="offer-title">{e.title}</h3>
                  <p className="offer-desc">{e.desc}</p>
                  {e.href.startsWith('mailto:') ? (
                    <a href={e.href} className="offer-link">Enquire Now →</a>
                  ) : (
                    <Link href={e.href} className="offer-link">Read more →</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
