import Link from 'next/link';
import BookNowButton from '@/components/BookNowButton';

function isExternal(href = '') {
  return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#');
}

export default function PageHero({
  image,
  tag,
  title,
  description,
  primaryHref,
  primaryLabel,
  primaryBook,
  secondaryHref,
  secondaryLabel,
  overlayLight = false,
  overlayDark = false,
}) {
  const Primary = () => {
    if (primaryBook) {
      return <BookNowButton className="btn btn-primary">{primaryLabel || 'Book Now'}</BookNowButton>;
    }
    if (!primaryHref) return null;
    if (isExternal(primaryHref)) {
      return (
        <a href={primaryHref} className="btn btn-primary" target={primaryHref.startsWith('http') ? '_blank' : undefined} rel="noopener">
          {primaryLabel}
        </a>
      );
    }
    return (
      <Link href={primaryHref} className="btn btn-primary">
        {primaryLabel}
      </Link>
    );
  };

  return (
    <section
      className={`rooms-page-hero${overlayLight ? ' rooms-page-hero--light' : ''}${overlayDark ? ' rooms-page-hero--dark' : ''}`.trim()}
      aria-label={title}
    >
      <div className="rooms-page-hero-bg" style={{ backgroundImage: `url('${image}')` }} />
      <div className="rooms-page-hero-overlay" />
      <div className="rooms-page-hero-content">
        {tag ? <span className="rooms-page-hero-tag">{tag}</span> : null}
        <h1 className="rooms-page-hero-title">{title}</h1>
        {description ? <p className="rooms-page-hero-desc">{description}</p> : null}
        {(primaryHref || primaryBook || secondaryHref) && (
          <div className="rooms-page-hero-actions">
            <Primary />
            {secondaryHref ? (
              isExternal(secondaryHref) ? (
                <a href={secondaryHref} className="btn btn-outline" target={secondaryHref.startsWith('http') ? '_blank' : undefined} rel="noopener">
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref} className="btn btn-outline">
                  {secondaryLabel}
                </Link>
              )
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
