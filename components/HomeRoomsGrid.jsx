'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const ROOMS = [
  {
    name: 'Couchette',
    bg: '/img/rooms/couchette/Couchette-Room-1.jpg',
    href: '/rooms/couchette',
    desc: 'The perfect short-stay sleeper, with a bespoke leather banquette, walk-in shower and beautifully used space.',
    size: '140 × 200 cm Hypnos bed',
    guests: '1–2 Guests',
  },
  {
    name: 'Edwardian',
    bg: '/img/basic/Edwardian-King-Room-1-1.webp',
    href: '/rooms/edwardian',
    desc: 'Tucked into the eaves, with rich walnut panelling, ingenious storage and a calm railway-carriage character.',
    size: '160 × 200 cm Hypnos bed',
    guests: '2 Guests',
  },
  {
    name: 'Heritage',
    bg: '/img/basic/Heritage-Room-3.webp',
    href: '/rooms/heritage',
    desc: "Bespoke walnut and leather furniture, tall sash windows and views towards historic King's Cross station.",
    size: '160 × 200 cm Hypnos bed',
    guests: '2 Guests',
  },
  {
    name: 'Victorian',
    bg: '/img/basic/Victorian-Room-1.webp',
    href: '/rooms/victorian',
    desc: 'Light-filled, beautifully crafted interiors with a standalone bath or an inviting double dual shower.',
    size: '200 × 200 cm Hypnos bed',
    guests: '2 Guests',
  },
];

export default function HomeRoomsGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const roomItems = gridRef.current?.querySelectorAll('.room-expandable');
    if (!roomItems?.length) return undefined;

    const handlers = [];

    roomItems.forEach((item) => {
      const onClick = () => {
        if (window.innerWidth <= 1024) {
          const isExpanded = item.classList.contains('expanded');
          roomItems.forEach((r) => r.classList.remove('expanded'));
          if (!isExpanded) item.classList.add('expanded');
        }
      };

      const onMouseLeave = () => {
        if (window.innerWidth <= 1024) {
          roomItems.forEach((r) => r.classList.remove('expanded'));
        }
      };

      item.addEventListener('click', onClick);
      item.addEventListener('mouseleave', onMouseLeave);
      handlers.push({ item, onClick, onMouseLeave });
    });

    return () => {
      handlers.forEach(({ item, onClick, onMouseLeave }) => {
        item.removeEventListener('click', onClick);
        item.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  const openBooking = (e) => {
    e.preventDefault();
    document.getElementById('bookNowBtn')?.click();
  };

  return (
    <>
      <div className="rooms-expandable-grid reveal" ref={gridRef}>
        {ROOMS.map((room) => (
          <div className="room-expandable" key={room.name}>
            <div className="room-exp-bg" style={{ backgroundImage: `url('${room.bg}')` }} />
            <div className="room-exp-gradient" />
            <div className="room-exp-front">
              <h3 className="room-exp-name">{room.name}</h3>
            </div>
            <div className="room-exp-back">
              <h3 className="room-exp-name room-exp-name--back">{room.name}</h3>
              <p className="room-exp-desc">{room.desc}</p>
              <div className="room-exp-meta">
                <span className="room-exp-size">{room.size}</span>
                <span className="room-exp-sep">|</span>
                <span className="room-exp-guests">{room.guests}</span>
              </div>
              <div className="room-exp-actions">
                <Link href={room.href} className="btn-exp btn-exp-primary">
                  Explore More
                </Link>
                <button type="button" className="btn-exp btn-exp-outline rooms-book-btn" onClick={openBooking}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rooms-explore-cta reveal">
        <Link href="/our-rooms#ourRoomsHeading" className="btn btn-primary">
          Explore Rooms
        </Link>
      </div>
    </>
  );
}
