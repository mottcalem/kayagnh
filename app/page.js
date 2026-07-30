import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import HomeRoomsGrid from '@/components/HomeRoomsGrid';
import HomeTestimonials from '@/components/HomeTestimonials';

export const metadata = {
  title: "Kaya Great Northern Hotel | Since 1854 — King's Cross, London",
  description:
    "Kaya Great Northern Hotel, an exquisite boutique hotel in King's Cross St Pancras, with on-site restaurant and bar close to Eurostar. Since 1854.",
  keywords: [
    'Kaya Great Northern Hotel',
    'Great Northern Hotel London',
    'boutique hotel Kings Cross',
    'hotel near St Pancras',
    'London railway hotel',
  ],
  openGraph: {
    title: 'Kaya Great Northern Hotel | Since 1854',
    description: "Beautifully Connected, Effortlessly Stylish. Boutique hotel at King's Cross St Pancras.",
    type: 'website',
    url: 'https://www.kayagnhlondon.com',
    images: [{ url: '/img/basic/gnh-hero-exterior-1600_3.webp' }],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Story */}
      <section className="section story" id="story" aria-label="Our Story">
        <div className="container">
          <div className="story-section-header">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">
              The Original
              <br />
              Railway Hotel
            </h2>
            <div className="title-ornament" />
          </div>
          <div className="story-grid">
            <div className="story-image reveal">
              <img
                src="/img/basic/clock.webp"
                alt=""
                className="story-clock"
                aria-hidden="true"
                style={{ width: '20%', height: 'unset' }}
              />
              <img
                src="/img/basic/GNH-AerialView-1.webp"
                alt="Kaya Great Northern Hotel aerial view"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="story-image-badge">
                <span className="badge-year">1854</span>
                <span className="badge-text">Established</span>
              </div>
            </div>
            <div className="story-content reveal">
              <p className="story-text">
                Welcome to the <strong>original railway hotel</strong>. Since 1854, Kaya Great Northern Hotel has been creating
                wonderful experiences for discerning travellers. Built as the grandest of a series of hotels supporting the
                <strong> Great Northern Railway</strong> company&apos;s route to Yorkshire and Lincolnshire, no other was as magnificent.
              </p>
              <p className="story-text">
                Our Italianate brick façade with its characteristically tall rectangular windows and decorative trim
                stands as a reminder of our <strong>Victorian heritage</strong>. Today, we remain one of the best-connected
                hotels in the world — sitting between Kings Cross and St Pancras Stations, our doors lead to the North
                and Scotland, France and Europe, and to the very heart of London.
              </p>
              <blockquote className="story-quote">
                &ldquo;Where classic meets boutique — rooms that evoke the magic, charm and sophistication of the heyday of the railways, brought right up-to-date.&rdquo;
              </blockquote>
              <Link href="/our-rooms" className="btn btn-secondary">
                Explore Our Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="section rooms" id="rooms" aria-label="Rooms & Suites">
        <div className="container">
          <div className="section-header rooms-header reveal">
            <span className="section-tag">Accommodation</span>
            <h2 className="section-title">Rooms &amp; Suites</h2>
            <div className="title-ornament" />
            <p className="section-desc">
              Beautifully designed to emphasise space, comfort, and the character of our Victorian heritage.
              Each room tells a story of London&apos;s golden age of railways.
            </p>
            <img src="/img/basic/key.webp" alt="" className="rooms-key-figure" aria-hidden="true" />
          </div>

          <HomeRoomsGrid />
        </div>
      </section>

      {/* Parallax divider */}
      <section className="parallax-section" aria-label="Parallax divider">
        <div
          className="parallax-bg"
          style={{ backgroundImage: "url('/img/basic/full-dinner-table.webp')" }}
        />
        <div className="parallax-overlay" />
        <div className="parallax-content reveal">
          <span className="parallax-tag">RAILS Restaurant</span>
          <blockquote className="parallax-quote">
            &ldquo;A great British grill restaurant with touches of French flair&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Dining */}
      <section className="section dining" id="dining" aria-label="Dining Experience">
        <div className="container">
          <div className="dining-grid">
            <div className="dining-content reveal">
              <span className="section-tag">Dining</span>
              <h2 className="section-title">
                RAILS Restaurant
                <br />
                &amp; GNH Bar
              </h2>
              <div className="title-ornament" />
              <p className="dining-text">
                Our restaurants and bars are in tune with the ebb and flow of our location at King&apos;s Cross.
                Throughout the day we provide a vibrant and contemporary space to meet friends or colleagues,
                grab a coffee or light meal, or settle in for an exquisite dinner.
              </p>
              <div className="dining-features">
                <div className="dining-feature">
                  <span className="feature-icon">◆</span>
                  <div>
                    <h4>
                      <Link href="/rails-restaurant">RAILS Restaurant</Link>
                    </h4>
                    <p>British grill with French flair. Over 100 global wines.</p>
                  </div>
                </div>
                <div className="dining-feature">
                  <span className="feature-icon">◆</span>
                  <div>
                    <h4>
                      <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>
                    </h4>
                    <p>Signature cocktails, afternoon tea, and alfresco dining.</p>
                  </div>
                </div>
                <div className="dining-feature">
                  <span className="feature-icon">◆</span>
                  <div>
                    <h4>Afternoon Tea</h4>
                    <p>Bloom Garden Afternoon Tea — fresh pastries on pretty plates.</p>
                  </div>
                </div>
              </div>
              <Link href="/rails-restaurant" className="btn btn-secondary">
                Discover Dining
              </Link>
            </div>
            <div className="dining-image reveal">
              <img
                src="/img/basic/ZDA_6282.webp"
                alt="RAILS Restaurant interior"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="dining-image-secondary">
                <img
                  src="/img/basic/ZDA_6276.webp"
                  alt="GNH Bar"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="section offers" id="offers" aria-label="Offers & Events">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Offers &amp; Events</span>
            <h2 className="section-title">Experiences Worth Travelling For</h2>
            <div className="title-ornament" />
          </div>

          <div className="offers-grid">
            <article className="offer-card featured reveal">
              <div className="offer-image">
                <img
                  src="/img/basic/Main-picture-480x320.webp"
                  alt="Spring Afternoon Tea"
                  loading="lazy"
                  width={480}
                  height={320}
                />
              </div>
              <div className="offer-content">
                <span className="offer-category">Seasonal</span>
                <h3 className="offer-title">A Blooming Garden Afternoon Tea</h3>
                <p className="offer-desc">Celebrate spring with our floral-inspired afternoon tea in the GNH Bar.</p>
                <Link href="/whats-on" className="offer-link">
                  Discover More &rarr;
                </Link>
              </div>
            </article>

            <article className="offer-card reveal">
              <div className="offer-image">
                <div className="offer-image-placeholder">
                  <div className="placeholder-content">
                    <img
                      src="/img/basic/KAYA-CLUB-SAYFASI-LOGO-DEGISIMI.webp"
                      alt="KAYA CLUB"
                      className="placeholder-logo"
                      width={150}
                      height={45}
                    />
                    <span className="placeholder-text">Exclusive Benefits</span>
                  </div>
                </div>
              </div>
              <div className="offer-content">
                <span className="offer-category">Membership</span>
                <h3 className="offer-title">KAYA CLUB Loyalty</h3>
                <p className="offer-desc">
                  Exclusive benefits: Welcome bonus, 5% discount, 3% MoneyPoints, and priority updates.
                </p>
                <a href="#kaya-club" className="offer-link">
                  Join Free &rarr;
                </a>
              </div>
            </article>

            <article className="offer-card reveal">
              <div className="offer-image">
                <img
                  src="/img/basic/ZDA_6276.webp"
                  alt="GNH Bar & Terrace"
                  loading="lazy"
                  width={480}
                  height={320}
                />
              </div>
              <div className="offer-content">
                <span className="offer-category">Experience</span>
                <h3 className="offer-title">GNH Bar &amp; Terrace</h3>
                <p className="offer-desc">Relax in our elegant surroundings with crafted cocktails and fine wines.</p>
                <Link href="/gnh-bar" className="offer-link">
                  Discover More &rarr;
                </Link>
              </div>
            </article>

            <div className="offers-bottom-row">
              <div className="offer-card-horizontal reveal">
                <div className="offer-image">
                  <img
                    src="/img/basic/easter-480x321.webp"
                    alt="Easter Celebrations"
                    loading="lazy"
                    width={480}
                    height={321}
                  />
                </div>
                <div className="offer-content">
                  <span className="offer-category">Event</span>
                  <h3 className="offer-title">Easter at Kaya GNH</h3>
                  <p className="offer-desc">Easter Sunday Roast, egg hunt for little ones, and special afternoon tea.</p>
                  <Link href="/whats-on" className="offer-link">
                    Discover More &rarr;
                  </Link>
                </div>
              </div>

              <article className="offer-card bottom-card reveal">
                <div className="offer-image">
                  <img
                    src="/img/basic/Heritage-Room-3.webp"
                    alt="Heritage Room Experience"
                    loading="lazy"
                    width={480}
                    height={320}
                  />
                </div>
                <div className="offer-content">
                  <span className="offer-category">Stay</span>
                  <h3 className="offer-title">
                    Heritage Room
                    <br />
                    City Break
                  </h3>
                  <p className="offer-desc">Experience Victorian charm with modern comfort in our Heritage Rooms.</p>
                  <Link href="/special-offers" className="offer-link">
                    View Offers &rarr;
                  </Link>
                </div>
              </article>
            </div>
          </div>

        </div>
      </section>

      {/* KAYA CLUB */}
      <section className="kaya-club-section" id="kaya-club" aria-label="KAYA CLUB Loyalty">
        <div className="kaya-club-bg-pattern" />
        <div className="container">
          <div className="kaya-club-inner reveal">
            <div className="kaya-club-image-wrap">
              <img
                src="/img/basic/IC-SAYFA-BEYAZ-SAYFA.webp"
                alt="KAYA CLUB"
                className="kaya-club-image"
                loading="lazy"
              />
            </div>
            <div className="kaya-club-content">
              <div className="kaya-club-benefits">
                <div className="kaya-club-benefit">
                  <div className="kaya-club-benefit-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="kaya-club-benefit-text">
                    <h4 className="kaya-club-benefit-title">Welcome Bonus</h4>
                    <p className="kaya-club-benefit-desc">Instant reward points on your first stay</p>
                  </div>
                </div>
                <div className="kaya-club-benefit">
                  <div className="kaya-club-benefit-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 12H4m16 0a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2m16 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />
                    </svg>
                  </div>
                  <div className="kaya-club-benefit-text">
                    <h4 className="kaya-club-benefit-title">5% Member Discount</h4>
                    <p className="kaya-club-benefit-desc">Best available rate on all bookings</p>
                  </div>
                </div>
                <div className="kaya-club-benefit">
                  <div className="kaya-club-benefit-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="kaya-club-benefit-text">
                    <h4 className="kaya-club-benefit-title">3% MoneyPoints</h4>
                    <p className="kaya-club-benefit-desc">Earn points with every pound spent</p>
                  </div>
                </div>
                <div className="kaya-club-benefit">
                  <div className="kaya-club-benefit-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 15V3m0 12a2 2 0 100 4 2 2 0 000-4zm-8 6h16" />
                    </svg>
                  </div>
                  <div className="kaya-club-benefit-text">
                    <h4 className="kaya-club-benefit-title">Priority Access</h4>
                    <p className="kaya-club-benefit-desc">Early check-in, late check-out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kaya-club-actions">
            <a href="https://kayahotels.com/en/kaya-club" className="btn-kaya-club-outline" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
            <a href="https://kayahotels.com/en/kaya-club" className="btn-kaya-club" target="_blank" rel="noopener noreferrer">
              Join Free Today
            </a>
          </div>
        </div>
      </section>

      <HomeTestimonials />
    </>
  );
}
