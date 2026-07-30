import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { rooms, ROOM_AMENITIES } from '@/lib/rooms';

export const metadata = {
  title: 'Rooms & Suites',
  description:
    'Explore our beautifully designed rooms and suites at Kaya Great Northern Hotel. Victorian, Edwardian, Heritage and Couchette rooms — Victorian charm, modern comfort.',
};

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

          <div className="reveal">
            {rooms.map((room, index) => (
              <div
                className={`rooms-list-item${index % 2 === 1 ? ' rooms-list-item--reverse' : ''}`}
                id={`${room.slug}-room`}
                key={room.slug}
              >
                <div className="rooms-list-image">
                  <img src={room.cardImage} alt={room.title} loading="lazy" />
                </div>
                <div className="rooms-list-content">
                  {room.listBadge ? (
                    <div className={`rooms-list-badge${room.listBadgeGold ? ' rooms-list-badge--gold' : ''}`}>
                      {room.listBadge}
                    </div>
                  ) : null}
                  <span className="rooms-list-category">{room.listCategory}</span>
                  <h3 className="rooms-list-title">{room.shortTitle}</h3>
                  <p className="rooms-list-desc">{room.listDescription}</p>
                  <div className="rooms-list-meta">
                    {room.listMeta.map((item) => (
                      <div className="rooms-list-meta-item" key={item.label}>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rooms-list-actions">
                    <Link href={`/rooms/${room.slug}`} className="btn btn-primary">
                      Explore Room
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}
