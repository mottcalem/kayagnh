import { SpaceCard } from '@/components/ContentCard';
import BookNowButton from '@/components/BookNowButton';
import RoomGallery from '@/components/RoomGallery';
import { getOtherRooms } from '@/lib/rooms';

export default function RoomDetail({ room }) {
  const otherRooms = getOtherRooms(room.slug);

  return (
    <>
      <section className="edwardian-detail" id="edwardian-detail" aria-label="Room Gallery & Overview">
        <div className="edwardian-detail-inner">
          <RoomGallery images={room.gallery} alt={room.title} />
          <div className="edwardian-detail-content">
            <h2 className="section-title">{room.overviewTitle}</h2>
            <div className="title-ornament" style={{ marginLeft: 0, marginRight: 0 }} />
            <p className="edwardian-detail-text">{room.overviewText}</p>
            <div className="edwardian-detail-sizes">
              {room.sizes.map((size) => (
                <div className="edwardian-detail-size" key={size.label}>
                  <span className="edwardian-detail-size-label">{size.label}</span>
                  <span className="edwardian-detail-size-value">{size.value}</span>
                </div>
              ))}
            </div>
            <div className="edwardian-detail-features">
              {room.features.map((feature) => (
                <div className="edwardian-detail-feature" key={feature.title}>
                  <span className="edwardian-detail-feature-icon">◆</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section edwardian-essentials" id="edwardian-essentials" aria-label="Room Essentials">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag" style={{ color: 'var(--color-gold)' }}>
              In-Room Features
            </span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              {room.essentialsTitle}
            </h2>
            <div className="title-ornament" />
          </div>
          <div className="edwardian-essentials-grid reveal">
            {room.essentials.map((group) => (
              <div className="edwardian-essentials-card" key={group.title}>
                <h4 className="edwardian-essentials-card-title">{group.title}</h4>
                <ul className="edwardian-essentials-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {room.fact ? (
            <p
              className="edwardian-detail-text"
              style={{
                color: 'rgba(255,255,255,0.75)',
                maxWidth: 760,
                margin: '36px auto 0',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              {room.fact}
            </p>
          ) : null}
        </div>
      </section>

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

      <section className="section edwardian-prompt" aria-label="Book Direct">
        <div className="container">
          <div className="edwardian-prompt-inner reveal">
            <div className="edwardian-prompt-content">
              <h2 className="edwardian-prompt-title">Book This Room Directly</h2>
              <p className="edwardian-prompt-desc">
                Best rate guaranteed, flexible cancellation, and exclusive KAYA CLUB perks when you book directly with us.
              </p>
            </div>
            <BookNowButton
              className="btn room-detail-book-btn"
              style={{ flexShrink: 0, background: 'var(--color-primary)', color: 'var(--color-white)' }}
            >
              Book Now
            </BookNowButton>
          </div>
        </div>
      </section>
    </>
  );
}
