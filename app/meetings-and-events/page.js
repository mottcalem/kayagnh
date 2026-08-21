import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { EditorialFeature, ImageCta, SplitFaq } from '@/components/Editorial';

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
    meta: ['16 seated · 30 standing', 'Boardroom & reception', 'King’s Cross canopy views'],
  },
  {
    title: 'RAILS',
    desc: 'RAILS Restaurant hosts up to 90 banquet guests, with a projector and screen available on request.',
    image: '/img/basic/ZDA_6282.webp',
    meta: ['Up to 90 banquet', 'Dining & celebration', 'Projector on request'],
  },
  {
    title: 'Mezzanine',
    desc: 'Intimate semi-private space accommodating 8 seated or up to 15 standing, overlooking GNH Bar.',
    image: '/img/basic/ZDA_6276.webp',
    meta: ['8 seated · 15 standing', 'Semi-private', '42″ TV with HDMI'],
  },
  {
    title: 'The Lounge',
    desc: 'First floor area leading off The Carriage — plush interiors and high ceilings for receptions and breakouts.',
    image: '/img/basic/full-dinner-table.webp',
    meta: ['Up to 60 combined', 'Reception & breakout', 'Flexible configuration'],
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
        image="https://kayagnhlondon.com/wp-content/uploads/2026/03/ME__0003_Layer-2.jpg"
        tag="Meetings & Events"
        title="Meetings & Events"
        description="Distinctive spaces for meeting, dining and celebrating at the best-connected address in London."
        primaryHref="mailto:reservations@kayagnhlondon.com"
        primaryLabel="Make an Enquiry"
      />

      {spaces.map((space, index) => (
        <EditorialFeature
          key={space.title}
          reverse={index % 2 === 1}
          tag={index === 0 ? 'Our Spaces' : 'Meet · Dine · Celebrate'}
          title={space.title}
          text={space.desc}
          image={space.image}
          href="mailto:reservations@kayagnhlondon.com"
          cta="Enquire About This Space"
          meta={space.meta.map((item) => <span key={item}>{item}</span>)}
        />
      ))}

      <section className="section experience-trio">
        <div className="container">
          <span className="editorial-eyebrow">Made for the moment</span>
          <h2 className="editorial-section-title">Meet. Dine. Celebrate.</h2>
          <div className="experience-trio-grid reveal">
            {[
              ['Meet', '/img/basic/GNH-AerialView-1.webp', 'Focused rooms, connected location.'],
              ['Dine', '/img/basic/full-dinner-table.webp', 'Menus shaped around your gathering.'],
              ['Celebrate', '/img/basic/ZDA_6282.webp', 'Service that makes the moment feel effortless.'],
            ].map(([title, image, text]) => (
              <article key={title}><img src={image} alt="" /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <SplitFaq compact title="Planning your event." items={faqs} />
      <ImageCta image="https://kayagnhlondon.com/wp-content/uploads/2026/03/ME__0003_Layer-2.jpg" tag="Meetings & Events" title="Make your next event memorable." href="mailto:reservations@kayagnhlondon.com" cta="Enquire Now" />
    </>
  );
}
