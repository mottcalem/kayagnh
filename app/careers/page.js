import PageHero from '@/components/PageHero';
import { EditorialIntro, ImageCta } from '@/components/Editorial';
import { CAREERS_INTRO, VACANCIES } from '@/lib/careers';

export const metadata = {
  title: 'Careers',
  description:
    'Careers at Kaya Great Northern Hotel — current vacancies at a luxury boutique hotel in the heart of King\'s Cross St Pancras.',
};

export default function CareersPage() {
  const [vacancy] = VACANCIES;

  return (
    <>
      <PageHero
        image="/img/IMG_2831.webp"
        tag="Careers"
        title="Join the Team"
        description="Honest, thoughtful hospitality with fun, friendly and natural charm."
        secondaryHref="#vacancies"
        secondaryLabel="Current Vacancies"
      />

      <EditorialIntro
        tag={CAREERS_INTRO.tag}
        title={CAREERS_INTRO.title}
        text={CAREERS_INTRO.text}
        image={CAREERS_INTRO.image}
      />

      <section className="section job-section" id="vacancies" aria-label="Current vacancies">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Current Vacancies</span>
            <h2 className="section-title">Open Positions</h2>
            <div className="title-ornament" />
          </div>

          <article className="job-lead reveal">
            <span className="editorial-eyebrow">{vacancy.location}</span>
            <h3 className="job-title">{vacancy.title}</h3>
            <p className="job-tagline">{vacancy.tagline}</p>

            <div className="job-meta">
              {vacancy.meta.map((item) => (
                <div key={item.label}>
                  <span className="job-meta-label">{item.label}</span>
                  <span className="job-meta-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="job-intro">
              {vacancy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <a className="btn btn-primary" href={vacancy.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply via Caterer
            </a>
          </article>

          {vacancy.blocks.map((block, index) => (
            <div className="job-block reveal" key={block.title}>
              <div className="job-block-label">
                <span className="editorial-eyebrow">{String(index + 1).padStart(2, '0')}</span>
                <h3>{block.title}</h3>
              </div>
              <div className="job-block-body">
                {block.text?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {block.items ? (
                  <ul className={`job-list${block.twoColumns ? '' : ' job-list--single'}`}>
                    {block.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImageCta
        image="/img/basic/gnh-hero-exterior-1600_3.webp"
        tag="Ready to join the team?"
        title={`Apply for the ${vacancy.title} position.`}
        description="Please note that applications will only be accepted via Caterer."
        href={vacancy.applyUrl}
        cta="Apply via Caterer"
      />
    </>
  );
}
