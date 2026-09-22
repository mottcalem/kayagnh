import Link from 'next/link';
import EnquirySection from '@/components/EnquirySection';
import { EditorialIntro, SplitFaq } from '@/components/Editorial';

export const metadata = {
  title: 'Meetings & Private Events',
  description:
    "Meeting rooms and private events at Kaya Great Northern Hotel beside King's Cross and St Pancras — The Carriage, Lounge, Mezzanine and RAILS.",
};

const ENQUIRY_URL = '#enquiry';

const spaces = [
  {
    badge: 'The Carriage',
    image: '/img/basic/meetings-the-carriage.webp',
    imageAlt: 'The Carriage set up boardroom-style for a meeting',
    text: "Boardroom-style space for 16 seated guests or up to 30 standing, with views of the King's Cross canopy.",
    meta: '16 seated · 30 standing',
  },
  {
    badge: 'RAILS',
    image: '/img/basic/meetings-rails.webp',
    imageAlt: 'RAILS Restaurant set for a private dinner',
    text: 'RAILS Restaurant hosts up to 90 banquet guests, with a projector and screen available on request.',
    meta: 'Up to 90 banquet',
  },
  {
    badge: 'The Mezzanine',
    image: '/img/basic/meetings-mezzanine.webp',
    imageAlt: 'The Mezzanine laid out for a private lunch',
    text: 'Intimate semi-private space accommodating 8 seated or up to 15 standing, overlooking GNH Bar.',
    meta: '8 seated · 15 standing',
  },
  {
    badge: 'The Lounge',
    image: '/img/basic/meetings-lounge.webp',
    imageAlt: 'The Lounge at Kaya Great Northern Hotel lit by candlelight',
    text: 'First floor area leading off The Carriage — plush interiors and high ceilings for receptions and breakouts.',
    meta: 'Up to 60 combined',
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
      <EditorialIntro
        className="editorial-intro--top"
        headingFullWidth
        tag="Meeting Rooms & Private Events"
        title="Meeting Rooms in King’s Cross & St Pancras"
        image="/img/basic/meetings-carriage.webp"
        imageAlt="The Carriage meeting room at Kaya Great Northern Hotel"
      >
        <p>
          Kaya Great Northern Hotel offers meeting rooms King’s Cross, beside King’s Cross Station and St Pancras International — ideal for private events and private dining. Set within an original Victorian railway hotel built in 1854, our elegant interiors provide a distinctive backdrop for meetings, dinners and celebrations. Choose from four versatile spaces, adaptable from formal set-ups to private parties and dining rooms.
        </p>
        <div className="editorial-intro-actions">
          <a className="btn intro-btn-solid" href={ENQUIRY_URL}>Make an Enquiry</a>
          <a className="btn intro-btn-ghost" href="#spaces">Our Spaces</a>
        </div>
      </EditorialIntro>

      <section className="section bar-card-section bar-card-section--dark" id="spaces" aria-label="Our Spaces">
        <div className="container">
          <span className="editorial-eyebrow bar-card-section-eyebrow">Our Spaces</span>
          <div className="bar-card-grid reveal">
            {spaces.map((space) => (
              <article className="bar-card" key={space.badge}>
                <div className="bar-card-image">
                  <img src={space.image} alt={space.imageAlt} style={space.imagePosition ? { objectPosition: space.imagePosition } : undefined} loading="lazy" />
                </div>
                <div className="bar-card-body">
                  <span className="bar-card-badge">{space.badge}</span>
                  <p className="bar-card-text">{space.text}</p>
                  <p className="bar-card-meta">{space.meta}</p>
                </div>
                <a className="btn bar-card-btn" href={ENQUIRY_URL}>Make An Enquire</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection />

      <SplitFaq compact tag="FAQs" title="Planning your event." items={faqs} />
    </>
  );
}
