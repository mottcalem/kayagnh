import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about Kaya Great Northern Hotel — check-in, pets, parking, amenities and more.',
};

const faqs = [
  {
    q: 'What are the check-in and check-out times?',
    a: <p>The check-in time at Great Northern is <strong>15:00</strong> and the check-out time is <strong>11:00</strong>.</p>,
  },
  {
    q: 'Does Kaya Great Northern Hotel allow pets?',
    a: <p>Pets are allowed, but it is always best to call ahead to confirm. Maximum pet weight is 20kgs and the non-refundable pet fee per stay is £50.</p>,
  },
  {
    q: 'What are the parking options?',
    a: (
      <p>
        There is no on-site parking at the hotel, but we recommend{' '}
        <a href="https://stpancras.com/parking" target="_blank" rel="noopener">St. Pancras International Parking</a> as a nearby option.
      </p>
    ),
  },
  {
    q: 'What property amenities are available?',
    a: (
      <p>
        2 Restaurants · 3 Meeting Spaces · Free Wi-Fi · Room Service · Wake-Up Calls · Daily Housekeeping · Turndown Service · Digital Check In · Guest Room Entertainment.
      </p>
    ),
  },
  {
    q: 'Does the hotel have in-room Wi-Fi?',
    a: <p>Yes, Kaya Great Northern Hotel has in-room Wi-Fi available to hotel guests.</p>,
  },
  {
    q: 'Does the hotel serve breakfast?',
    a: (
      <p>
        Yes, breakfast is available daily and can be enjoyed in our 1st floor restaurant,{' '}
        <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link>, or ordered via room service.
      </p>
    ),
  },
  {
    q: 'Is there a gym or fitness centre?',
    a: (
      <p>
        The hotel does not have a fitness centre on-site, but we have partnered with a local gym located just a 5-minute walk away.
        Guests can enjoy complimentary access — please speak to reception for details.
      </p>
    ),
  },
  {
    q: 'Do you offer luggage storage?',
    a: <p>Yes, luggage storage is available for guests before check-in and after check-out.</p>,
  },
  {
    q: 'Is the hotel accessible for guests with reduced mobility?',
    a: <p>Yes, we have accessible guest rooms and facilities. Please contact us in advance so we can make arrangements to meet your needs.</p>,
  },
  {
    q: 'Does the hotel provide cots for children?',
    a: <p>Yes, cots are available free of charge on request.</p>,
  },
  {
    q: 'What is the closest airport?',
    a: <p>The closest airport is Heathrow Airport (LHR), approximately 24.0 KM from the hotel.</p>,
  },
  {
    q: 'Does the hotel have electric vehicle charging stations?',
    a: <p>No, Kaya Great Northern Hotel does not have electric charging stations.</p>,
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        image="/img/basic/IC-SAYFA-BEYAZ-SAYFA.webp"
        tag="Help"
        title="Frequently Asked Questions"
        description="Everything you need to know before your stay. Still unsure? Call 020 3388 0800."
      />

      <section className="section faq-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Good To Know</span>
            <h2 className="section-title">FAQs</h2>
            <div className="title-ornament" />
          </div>
          <FaqAccordion items={faqs} />
          <p className="section-desc" style={{ marginTop: 40, textAlign: 'center' }}>
            If you can&apos;t find the answer here, please contact us on{' '}
            <a href="tel:+442033880800">020 3388 0800</a> or email{' '}
            <a href="mailto:reservations@kayagnhlondon.com">reservations@kayagnhlondon.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
