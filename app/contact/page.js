import PageHero from '@/components/PageHero';
import { CONTACT_DETAILS, SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description:
    "Contact Kaya Great Northern Hotel — reservations, events, RAILS Restaurant, GNH Bar and general enquiries. King's Cross St Pancras, London.",
};

const contactGroups = [
  { title: 'Stay & Reservations', items: CONTACT_DETAILS.slice(0, 3) },
  { title: 'Dining & Events', items: CONTACT_DETAILS.slice(3) },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/img/basic/GNH-AerialView-1.webp"
        tag="Get in Touch"
        title="Contact Kaya GNH"
        description="The right team, without the runaround."
        primaryHref={SITE.phoneHref}
        primaryLabel="Call Us"
        secondaryHref={`mailto:${CONTACT_DETAILS[0].email}`}
        secondaryLabel="Email Us"
      />

      <section className="section contact-section" aria-label="Contact details">
        <div className="container">
          <div className="contact-groups reveal">
            {contactGroups.map((group) => (
              <div className="contact-group" key={group.title}>
                <span className="editorial-eyebrow">Contact</span>
                <h2>{group.title}</h2>
              <ul className="contact-list">
                  {group.items.map((item) => (
                  <li className="contact-item" key={item.title}>
                    <h3 className="contact-item-title">{item.title}</h3>
                    <p className="contact-item-meta">
                      <a href={item.phoneHref}>{item.phone}</a>
                      <span className="contact-item-sep" aria-hidden="true">
                        /
                      </span>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </p>
                  </li>
                ))}
              </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-find-us">
        <div className="container">
          <span className="editorial-eyebrow">King&apos;s Cross, London</span>
          <h2 className="editorial-section-title">Find us in King&apos;s Cross.</h2>
          <div className="contact-find-grid reveal">
            <div className="contact-map">
              <iframe
                title="Kaya Great Northern Hotel location map"
                src={SITE.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="contact-find-copy">
              <h3>Between King&apos;s Cross and St Pancras.</h3>
              <p>{SITE.address}</p>
              <p>Step from train to hotel in minutes, with Underground, national rail and Eurostar connections at the door.</p>
              <a href={SITE.mapLink} className="editorial-link" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-small-cta"><div className="container"><p>Need something else?</p><a href={`mailto:${SITE.email}`} className="editorial-link">Contact us ↗</a></div></section>
    </>
  );
}
