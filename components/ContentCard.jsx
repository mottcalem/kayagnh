import Link from 'next/link';

export default function ContentCard({ title, children, logo }) {
  return (
    <section className="venue-intro" id="venue-intro" aria-label={title}>
      <div className="container">
        <div className="venue-intro-card reveal">
          <h1 className="venue-intro-title">{title}</h1>
          <div className="title-ornament" />
          {children}
          {logo ? <img src={logo} alt="" className="venue-intro-logo" width={200} height={70} loading="lazy" /> : null}
        </div>
      </div>
    </section>
  );
}

export function SpaceCard({ href, image, tag, title, desc, cta = 'Read More →' }) {
  return (
    <Link href={href} className="other-room-card">
      <div className="other-room-card-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="other-room-card-body">
        <span className="other-room-card-tag">{tag}</span>
        <h3 className="other-room-card-title">{title}</h3>
        <p className="other-room-card-desc">{desc}</p>
        <span className="other-room-card-cta">{cta}</span>
      </div>
    </Link>
  );
}
