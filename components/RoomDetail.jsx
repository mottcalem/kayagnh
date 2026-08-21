import { SpaceCard } from '@/components/ContentCard';
import RoomGallery from '@/components/RoomGallery';
import { BookDirectSave } from '@/components/Editorial';
import { getOtherRooms } from '@/lib/rooms';

export default function RoomDetail({ room }) {
  const otherRooms = getOtherRooms(room.slug);
  // Opens on a room view, then runs into the detail shots, skipping the image the hero gallery starts on
  const detailGallery = room.gallery.length > 1 ? room.gallery.slice(1) : room.gallery;

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
          <div className="room-essentials-editorial">
            <div className="reveal">
              <span className="editorial-eyebrow">In-Room Features</span>
              <h2>{room.essentialsTitle}</h2>
              <p>Considered details for sleeping, bathing, working and unwinding — all gathered in one calm, characterful space.</p>
              <div className="room-essentials-lists">
                {room.essentials.map((group) => (
                  <div key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              {room.fact ? <p className="room-detail-fact">{room.fact}</p> : null}
            </div>
            <div className="room-essentials-gallery reveal">
              <RoomGallery images={detailGallery} alt={`${room.title} details`} />
            </div>
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
