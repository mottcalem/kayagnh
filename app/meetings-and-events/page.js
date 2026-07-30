import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Meetings & Private Events',
  description:
    "Meeting rooms and private events at Kaya Great Northern Hotel beside King's Cross and St Pancras — The Carriage, Lounge, Mezzanine and RAILS.",
};

const spaces = [
  {
    title: 'The Carriage',
    desc: "Boardroom-style space for 16 seated guests or up to 30 standing, with views of the King's Cross canopy.",
    image: 'https://kayagnhlondon.com/wp-content/uploads/2026/03/ME__0003_Layer-2.jpg',
  },
  {
    title: 'RAILS',
    desc: 'RAILS Restaurant hosts up to 90 banquet guests, with a projector and screen available on request.',
    image: '/img/basic/ZDA_6282.webp',
  },
  {
    title: 'Mezzanine',
    desc: 'Intimate semi-private space accommodating 8 seated or up to 15 standing, overlooking GNH Bar.',
    image: '/img/basic/ZDA_6276.webp',
  },
  {
    title: 'The Lounge',
    desc: 'First floor area leading off The Carriage — plush interiors and high ceilings for receptions and breakouts.',
    image: '/img/basic/full-dinner-table.webp',
  },
];

const faqs = [
  {
    q: 'Where are your meeting rooms in Kings Cross located?',
    a: <p>Kaya Great Northern Hotel is nested <strong>between St Pancras International (Eurostar) and King&apos;s Cross station</strong>, with easy access to the Underground, buses and taxis.</p>,
  },
  {
    q: 'What meeting venues in Kings Cross do you offer?',
    a: <p>You can choose from <strong>The Carriage</strong>, <strong>Lounge 1 &amp; Lounge 2</strong>, and <strong>The Mezzanine</strong>, plus dining-led options in <Link href="/rails-restaurant">RAILS Restaurant</Link> and Little Bar.</p>,
  },
  {
    q: 'What capacity does The Carriage have for meetings and events?',
    a: <p>The Carriage accommodates <strong>16 boardroom</strong> (seated meeting), and <strong>up to 30</strong> for a cocktail reception.</p>,
  },
  {
    q: 'Can the Lounge be used for breakout space or drinks receptions?',
    a: <p>Yes – <strong>Lounge 1</strong> and <strong>Lounge 2</strong> can host <strong>25</strong> each for a cocktail reception, or <strong>up to 60</strong> when combined.</p>,
  },
  {
    q: 'What is the Mezzanine best for, and what’s the capacity?',
    a: <p>The Mezzanine is suited to an intimate drinks party or work catch-up. It can host <strong>12</strong> for a cocktail reception or <strong>8 boardroom</strong>, and has a <strong>42” TV with HDMI</strong>.</p>,
  },
  {
    q: 'Do you have hotel rooms, a bar and a restaurant for meeting attendees?',
    a: (
      <p>
        Yes – attendees can stay on-site in our <Link href="/our-rooms">hotel rooms</Link>, with options for drinks at{' '}
        <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link> and dining at <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link>.
      </p>
    ),
  },
];

export default function MeetingsPage() {
  return (
    <>
      <PageHero
        image="/img/basic/GNH-AerialView-1.webp"
        tag="Private Events"
        title="Meeting Rooms & Private Events"
        description="Elegant Victorian interiors for meetings, dinners and celebrations beside King's Cross and St Pancras."
        primaryHref="mailto:reservations@kayagnhlondon.com"
        primaryLabel="Enquiry Form"
        secondaryHref="https://kayagnhlondon.com/meetings-and-private-events/"
        secondaryLabel="Digital Brochure"
      />

      <section className="venue-intro">
        <div className="container">
          <div className="venue-intro-card reveal">
            <h2 className="venue-intro-title">Meetings &amp; Private Events in King&apos;s Cross</h2>
            <div className="title-ornament" />
            <p className="venue-intro-text">
              Kaya Great Northern Hotel offers meeting rooms beside King&apos;s Cross Station and St Pancras International — ideal for private events and private dining.
              Set within an original Victorian railway hotel built in 1854, our elegant interiors provide a distinctive backdrop for meetings, dinners and celebrations.
            </p>
            <p className="venue-intro-text">
              Choose from four versatile spaces, adaptable from formal set-ups to private parties and dining rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="section venue-menus" aria-label="Event Spaces">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Our Spaces</span>
            <h2 className="section-title">Meeting &amp; Event Spaces</h2>
            <div className="title-ornament" />
          </div>
          <div className="venue-menu-grid reveal" style={{ maxWidth: 1100 }}>
            {spaces.map((s) => (
              <article className="venue-menu-card" key={s.title}>
                <div className="venue-menu-card-image">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="venue-menu-card-body">
                  <span className="venue-menu-card-badge">{s.title}</span>
                  <p className="venue-menu-card-text">{s.desc}</p>
                </div>
                <a href="mailto:reservations@kayagnhlondon.com" className="btn btn-primary venue-menu-card-btn">Make an Enquiry</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Good To Know</span>
            <h2 className="section-title">Meeting Rooms FAQs</h2>
            <div className="title-ornament" />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
