import { SpaceCard } from '@/components/ContentCard';
import RoomGallery from '@/components/RoomGallery';
import BookNowButton from '@/components/BookNowButton';
import RoomEssentialsModal from '@/components/RoomEssentialsModal';
import { BookDirectSave } from '@/components/Editorial';
import { getOtherRooms } from '@/lib/rooms';

// listMeta is authored in this order for every room
const META_LABELS = ['Bathroom', 'Occupancy', 'Bedding'];

export default function RoomDetail({ room }) {
  const otherRooms = getOtherRooms(room.slug);
  const facts = [
    ...room.sizes.map((size) => ({ label: size.label, value: size.value })),
    ...room.listMeta.map((item, index) => ({ label: META_LABELS[index] || 'Detail', value: item.label })),
  ];

  return (
    <>
      <section className="room-opener" id="room-opener" aria-label={`${room.title} gallery`}>
        <div className="room-opener-inner">
          <div className="room-opener-gallery">
            <RoomGallery images={room.gallery} alt={room.title} />
          </div>
          <div className="room-opener-content">
            <span className="editorial-eyebrow">{room.listCategory}</span>
            <h1>{room.title}</h1>
            <p className="room-opener-lead">{room.heroDescription}</p>
            <div className="room-opener-facts">
              {facts.map((fact) => (
                <div key={fact.value}>
                  <span className="room-opener-fact-label">{fact.label}</span>
                  <span className="room-opener-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
            <div className="room-opener-actions">
              <BookNowButton className="btn btn-primary room-opener-book">Book This Room</BookNowButton>
              {room.essentialsList ? (
                <RoomEssentialsModal title={`${room.shortTitle} Essentials`} items={room.essentialsList} />
              ) : null}
              <a className="editorial-link" href="#room-story">Room Details <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section room-story" id="room-story" aria-label={room.overviewTitle}>
        <div className="container room-story-grid">
          <div className="reveal">
            <span className="editorial-eyebrow">{room.overviewTitle}</span>
            <h2>{room.title}, in detail.</h2>
            <p className="room-story-text">{room.overviewText}</p>
            {room.fact ? <p className="room-story-fact">{room.fact}</p> : null}
          </div>
          <div className="room-story-features reveal">
            {room.features.map((feature) => (
              <div className="room-story-feature" key={feature.title}>
                <span className="room-story-feature-icon" aria-hidden="true">◆</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookDirectSave compact title="Book Direct & Save" />

      <section className="section other-rooms" aria-label="Other Rooms">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Other Rooms</h2>
            <div className="title-ornament" />
          </div>
          <div className="other-rooms-grid reveal">
            {otherRooms.map((other) => (
              <SpaceCard
                key={other.slug}
                href={`/rooms/${other.slug}`}
                image={other.cardImage}
                tag={other.cardTag}
                title={other.title}
                desc={other.cardDesc}
                cta="View Room →"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
