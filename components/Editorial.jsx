import Link from 'next/link';
import BookNowButton from '@/components/BookNowButton';
import FaqAccordion from '@/components/FaqAccordion';
import IntroImageCarousel from '@/components/IntroImageCarousel';

function Action({ href, children, className = 'editorial-link' }) {
  if (!href) return null;
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return (
      <a href={href} className={className} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={className}>{children}</Link>;
}

export function EditorialFeature({
  id,
  tag,
  title,
  text,
  image,
  imageAlt = '',
  href,
  cta,
  reverse = false,
  meta,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`editorial-feature${reverse ? ' editorial-feature--reverse' : ''} ${className}`.trim()}>
      <div className="container editorial-feature-grid">
        <div className="editorial-feature-media reveal">
          <img src={image} alt={imageAlt || title} loading="lazy" />
        </div>
        <div className="editorial-feature-copy reveal">
          {tag ? <span className="editorial-eyebrow">{tag}</span> : null}
          <h2>{title}</h2>
          {text ? <p>{text}</p> : null}
          {meta ? <div className="editorial-meta">{meta}</div> : null}
          {children}
          {href && cta ? <Action href={href}>{cta} <span aria-hidden="true">↗</span></Action> : null}
        </div>
      </div>
    </section>
  );
}

export function EditorialIntro({
  tag,
  title,
  text,
  image,
  imageAlt = '',
  images,
  imagePosition,
  href,
  cta,
  className = '',
  headingFullWidth = false,
  headingLevel = 'h2',
  children,
}) {
  const HeadingTag = headingLevel === 'h1' ? 'h1' : 'h2';
  const heading = (
    <>
      {tag ? <span className="editorial-eyebrow">{tag}</span> : null}
      <HeadingTag>{title}</HeadingTag>
    </>
  );
  const carouselSlides = images?.length
    ? images
    : image
      ? [{ src: image, alt: imageAlt || title, priority: true }]
      : null;

  const media = carouselSlides ? (
    <div
      className={`editorial-intro-image reveal${carouselSlides.length > 1 ? ' editorial-intro-image--carousel' : ''}`.trim()}
    >
      {carouselSlides.length > 1 ? (
        <IntroImageCarousel slides={carouselSlides} label={title} dotsPosition="bottom" autoplayMs={6000} />
      ) : (
        <img
          src={carouselSlides[0].src}
          alt={carouselSlides[0].alt || title}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          loading="eager"
        />
      )}
    </div>
  ) : null;
  const copy = (
    <div className="editorial-intro-copy reveal">
      {headingFullWidth ? null : heading}
      {text ? <p>{text}</p> : null}
      {children}
      {href && cta ? <Action href={href}>{cta} <span aria-hidden="true">↗</span></Action> : null}
    </div>
  );

  if (headingFullWidth) {
    return (
      <section className={`editorial-intro editorial-intro--stacked ${className}`.trim()}>
        <div className="container">
          <div className="editorial-intro-head reveal">{heading}</div>
          <div className="editorial-intro-grid">
            {media}
            {copy}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`editorial-intro ${className}`.trim()}>
      <div className="container editorial-intro-grid">
        {media}
        {copy}
      </div>
    </section>
  );
}

export function ImageCta({ image, tag, title, href, cta, description }) {
  return (
    <section className="editorial-image-cta" style={{ '--cta-image': `url("${image}")` }}>
      <div className="editorial-image-cta-overlay" />
      <div className="container editorial-image-cta-content reveal">
        {tag ? <span className="editorial-eyebrow">{tag}</span> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        <Action href={href} className="btn btn-outline">{cta}</Action>
      </div>
    </section>
  );
}

export function SplitFaq({ tag = 'Good To Know', title = 'Frequently Asked Questions', description, items, compact = false }) {
  return (
    <section className={`section editorial-faq${compact ? ' editorial-faq--compact' : ''}`}>
      <div className="container editorial-faq-grid">
        <div className="editorial-faq-heading reveal">
          <span className="editorial-eyebrow">{tag}</span>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}

export function BookDirectSave({ title = 'Book Direct & Save', text, benefits, compact = false }) {
  const items = benefits || ['Best available rate', '5% member saving', 'Flexible cancellation', 'Kaya Club Rewards'];
  return (
    <section className={`book-direct-editorial${compact ? ' book-direct-editorial--compact' : ''}`}>
      <div className="container book-direct-editorial-grid">
        <div className="reveal">
          <span className="editorial-eyebrow">Kaya Club Rewards</span>
          <h2>{title}</h2>
          <p>{text || 'Book through our official website for our best available rate and benefits designed to make every stay more rewarding.'}</p>
        </div>
        <div className="book-direct-editorial-actions reveal">
          <ul>
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div>
            <BookNowButton className="btn btn-primary">Book Direct</BookNowButton>
            <a className="editorial-link editorial-link--light" href="https://kayahotels.com/en/kaya-club/" target="_blank" rel="noopener">
              Discover Kaya Club Rewards <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
