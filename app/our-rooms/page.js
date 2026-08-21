import Link from 'next/link';
import PageHero from '@/components/PageHero';
import EditorialCarousel from '@/components/EditorialCarousel';
import { BookDirectSave, SplitFaq } from '@/components/Editorial';
import { rooms, ROOM_AMENITIES } from '@/lib/rooms';

export const metadata = {
  title: 'Rooms & Suites',
  description:
    'Explore our beautifully designed rooms and suites at Kaya Great Northern Hotel. Victorian, Edwardian, Heritage and Couchette rooms — Victorian charm, modern comfort.',
};

const roomFaqs = [
  { q: 'What time are check-in and check-out?', a: <p>Check-in is from 3pm and check-out is by 11am. Early arrival and late departure are subject to availability.</p> },
  { q: 'Which room is the most spacious?', a: <p>Our Victorian rooms are the largest category, with a generous seating area and a bath or double dual shower in selected rooms.</p> },
  { q: 'Do all rooms include Wi-Fi?', a: <p>Yes. Complimentary Wi-Fi, air-conditioning, a flat-screen HDTV and an in-room safe are included in every room.</p> },
  { q: 'Can I request a bath?', a: <p>Baths are available in selected Victorian rooms. Please contact reservations before arrival and we will do our best to accommodate your preference.</p> },
  { q: 'What do I receive when booking direct?', a: <p>Direct bookings receive our best available rate, flexible booking options and access to Kaya Club member benefits.</p> },
  { q: 'Are accessible rooms available?', a: <p>Yes. Please contact the hotel before booking so our team can recommend the room that best suits your requirements.</p> },
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
              St Pancras. Choose from four distinct styles, each with its own personality.
            </p>
          </div>

          <EditorialCarousel label="room collection" className="reveal">
            {rooms.map((room) => (
              <article className="editorial-carousel-card" id={`${room.slug}-room`} key={room.slug}>
                <div>
                  <img src={room.cardImage} alt={room.title} loading="lazy" />
                </div>
                <div className="editorial-carousel-card-copy">
                  {room.listBadge ? (
                    <div className={`rooms-list-badge${room.listBadgeGold ? ' rooms-list-badge--gold' : ''}`}>
                      {room.listBadge}
                    </div>
                  ) : null}
                  <span className="rooms-list-category">{room.listCategory}</span>
                  <h3>{room.shortTitle}</h3>
                  <p>{room.cardDesc}</p>
                  <div className="editorial-meta">
                    {room.listMeta.slice(0, 2).map((item) => <span key={item.label}>{item.label}</span>)}
                  </div>
                  <Link href={`/rooms/${room.slug}`} className="editorial-link">Explore Room <span aria-hidden="true">↗</span></Link>
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
