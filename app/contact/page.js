import PageHero from '@/components/PageHero';
import { CONTACT_DETAILS, SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description:
    "Contact Kaya Great Northern Hotel — reservations, events, RAILS Restaurant, GNH Bar and general enquiries. King's Cross St Pancras, London.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/img/basic/GNH-AerialView-1.webp"
        tag="Get In Touch"
        title="Contact Us"
        description="We're here to help with reservations, events, dining and anything else you need."
        primaryHref={SITE.phoneHref}
        primaryLabel="Call Us"
        secondaryHref={`mailto:${CONTACT_DETAILS[0].email}`}
        secondaryLabel="Email Us"
      />

      <section className="section contact-section" aria-label="Contact details">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Reach Us</span>
            <h2 className="section-title">Contact Details</h2>
            <div className="title-ornament" />
          </div>

          <div className="contact-layout reveal">
            <div className="contact-details">
              <ul className="contact-list">
                {CONTACT_DETAILS.map((item) => (
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

              <div className="contact-address">
                <h3 className="contact-item-title">Address</h3>
                <p>{SITE.address}</p>
                <a
                  href={SITE.mapLink}
                  className="contact-map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Kaya Great Northern Hotel location map"
                src={SITE.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
