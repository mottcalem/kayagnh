import Link from 'next/link';
import PageHero from '@/components/PageHero';
import BookNowButton from '@/components/BookNowButton';
import EditorialCarousel from '@/components/EditorialCarousel';
import { BookDirectSave, SplitFaq } from '@/components/Editorial';
import { rooms, ROOM_AMENITIES } from '@/lib/rooms';

export const metadata = {
  title: 'Rooms & Suites',
  description:
    'Explore our beautifully designed rooms and suites at Kaya Great Northern Hotel. Victorian, Edwardian, Heritage and Couchette rooms — Victorian charm, modern comfort.',
};

const roomFaqs = [
  {
    q: 'What time is check-in and check-out?',
    a: <p>Check-in is <strong>15:00</strong> and check-out is <strong>11:00</strong>.</p>,
  },
  {
    q: 'What amenities are included in the rooms?',
    a: (
      <p>
        Rooms include essentials like <strong>air-conditioning</strong>, <strong>Wi-Fi</strong>, <strong>USB ports</strong>,{' '}
        <strong>in-room safe</strong>, <strong>flat-screen HDTV</strong>, <strong>coffee facilities</strong>, <strong>bathrobes</strong>, and{' '}
        <strong>in-room dining</strong>.
      </p>
    ),
  },
  {
    q: 'Is breakfast available at Kaya Great Northern Hotel, and where is it served?',
    a: (
      <p>
        Yes — breakfast is available daily in <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link> (1st floor) or via{' '}
        <strong>room service</strong>.
      </p>
    ),
  },
  {
    q: 'Can I store luggage before check-in or after check-out?',
    a: (
      <p>
        Yes — <strong>luggage storage</strong> is available for guests before check-in and after check-out (ideal if you arrive early or have a
        later train).
      </p>
    ),
  },
  {
    q: 'Do you provide cots for children?',
    a: <p>Yes — <strong>cots are available free of charge on request</strong>.</p>,
  },
  {
    q: 'Is Kaya Great Northern Hotel one of the best hotels near King’s Cross Station and St Pancras Station?',
    a: (
      <p>
        Yes — <Link href="/">Kaya Great Northern Hotel</Link> is a convenient base if you’re looking for{' '}
        <strong>hotels near King’s Cross station</strong>, <strong>hotels near St Pancras station</strong>, or{' '}
        <strong>hotels near King’s Cross St Pancras station</strong>.
      </p>
    ),
  },
  {
    q: 'Do rooms at Kaya Great Northern Hotel include free Wi-Fi and air conditioning?',
    a: <p>Yes — rooms include <strong>Wi-Fi</strong> and <strong>air conditioning</strong>, plus key in-room essentials.</p>,
  },
  {
    q: 'Does this London wedding venue have rooms, a bar and a restaurant — and is it by the King’s Cross station?',
    a: (
      <p>
        Yes — if you’re searching for <strong>hotels near Eurostar London</strong>, our location by King’s Cross and St Pancras makes travel
        simple. You can view <Link href="/">the hotel</Link> and plan your stay around your Eurostar arrival or departure.
      </p>
    ),
  },
  {
    q: 'Do you have a hotel bar near King’s Cross?',
    a: (
      <p>
        Yes — <Link href="/gnh-bar">GNH Bar</Link> is our on-site <strong>hotel bar in King’s Cross</strong>, ideal for a relaxed drink before
        heading out or winding down after a day in London.
      </p>
    ),
  },
  {
    q: 'Do you have a wedding venue?',
    a: (
      <p>
        Yes — Kaya Great Northern Hotel is a great option if you’re looking for a <strong>London hotel wedding venue</strong>. Visit{' '}
        <Link href="/weddings">Weddings at Kaya GNH</Link> to explore the spaces and enquire.
      </p>
    ),
  },
  {
    q: 'Do you offer a King’s Cross events space for meetings or private hire?',
    a: (
      <p>
        Yes — if you need a <strong>King’s Cross events space</strong>, we host events and private gatherings in the hotel. Start with{' '}
        <Link href="/meetings-and-events">Events at Kaya GNH</Link> to discuss your date and requirements.
      </p>
    ),
  },
];

export default function OurRoomsPage() {
  return (
    <>
      <PageHero
        image="/img/basic/Victorian-Room-1.webp"
        tag="Accommodation"
        title="Rooms & Suites"
        description="Beautifully designed to emphasise space, comfort, and the character of our Victorian heritage. Each room tells a story of London's golden age of railways, reimagined for the modern traveller."
        primaryBook
        primaryLabel="Book Now"
      />

      <section className="section rooms-list-section" id="rooms-list" aria-label="Our Rooms">
        <div className="container">
          <div className="rooms-list-intro reveal" id="ourRoomsHeading" tabIndex={-1}>
            <span className="section-tag">Our Collection</span>
            <h2 className="section-title">Our Rooms</h2>
            <div className="title-ornament" />
            <p className="rooms-list-intro-text">
              Individual and bespoke, our boutique hotel rooms are just a minute&apos;s walk from King&apos;s Cross and
              St Pancras. Set within our Victorian landmark, each room blends period character with modern amenities
              for a comfortable stay in the heart of London. Choose from four distinct styles – Couchette, Edwardian,
              Heritage and Victorian – each designed with its own personality.
            </p>
          </div>

          <EditorialCarousel label="room collection" className="reveal editorial-carousel--duo">
            {rooms.map((room) => (
              <article className="editorial-carousel-card" id={`${room.slug}-room`} key={room.slug}>
                <div className="editorial-carousel-card-media">
                  <img src={room.cardImage} alt={room.title} loading="lazy" />
                  {room.listBadge ? (
                    <div className={`rooms-list-badge${room.listBadgeGold ? ' rooms-list-badge--gold' : ''}`}>
                      {room.listBadge}
                    </div>
                  ) : null}
                </div>
                <div className="editorial-carousel-card-copy">
                  <span className="rooms-list-category">{room.listCategory}</span>
                  <h3>{room.shortTitle}</h3>
                  <p>{room.cardDesc}</p>
                  <div className="editorial-meta">
                    {room.listMeta.slice(0, 2).map((item) => <span key={item.label}>{item.label}</span>)}
                  </div>
                  <div className="editorial-carousel-card-actions">
                    <Link href={`/rooms/${room.slug}`} className="editorial-link">Explore Room <span aria-hidden="true">↗</span></Link>
                    <BookNowButton className="editorial-link editorial-link--solid">Book Now</BookNowButton>
                  </div>
                </div>
              </article>
            ))}
          </EditorialCarousel>
        </div>
      </section>

      <BookDirectSave />

      <section className="section amenities-section" aria-label="Inside Our Rooms">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">In-Room Amenities</span>
            <h2 className="section-title">Inside Your Room</h2>
            <div className="title-ornament" />
            <p className="rooms-list-intro-text" style={{ maxWidth: 640, margin: '0 auto' }}>
              Our rooms are carefully designed to make every visit a comfortable, relaxing and rewarding one.
              Welcoming and cosy, but stylish and contemporary, they are equipped with everything the modern traveller needs.
              With wonderful options for in-room dining, you may not want to leave.
            </p>
          </div>

          <div className="amenities-grid reveal">
            {ROOM_AMENITIES.map((amenity) => (
              <div className="amenity-card" style={{ '--amenity-image': `url('${amenity.image}')` }} key={amenity.title}>
                <h4 className="amenity-title">{amenity.title}</h4>
                <p className="amenity-text">{amenity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitFaq
        title="Rooms, answered."
        description="Everything you need to choose the room that feels right for your London stay."
        items={roomFaqs}
      />
    </>
  );
}
