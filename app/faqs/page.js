import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about Kaya Great Northern Hotel — check-in, pets, parking, amenities and more.',
};

const faqs = [
  {
    q: 'What are the check-in and check-out times at Kaya Great Northern Hotel?',
    a: (
      <p>
        The check-in time at Great Northern is <strong>15:00</strong> and the check-out time is{' '}
        <strong>11:00</strong>.
      </p>
    ),
  },
  {
    q: 'Does Kaya Great Northern Hotel allow pets?',
    a: (
      <p>
        Pets are allowed, but it is always best to call ahead to confirm. Maximum pet weight is 20kgs and the
        non-refundable pet fee per stay is £50.
      </p>
    ),
  },
  {
    q: 'What are the parking options at Kaya Great Northern Hotel?',
    a: (
      <p>
        There is no on-site parking at the hotel, but we recommend St. Pancras International Parking as a nearby
        option if you&apos;re driving:{' '}
        <a href="https://stpancras.com/parking" target="_blank" rel="noopener noreferrer">
          https://stpancras.com/parking
        </a>
      </p>
    ),
  },
  {
    q: 'What property amenities are available at Kaya Great Northern Hotel?',
    a: (
      <ul className="faq-amenities-list">
        <li>2 Restaurants</li>
        <li>3 Meeting Spaces</li>
        <li>Free Wi-Fi</li>
        <li>Room Service</li>
        <li>Wake-Up Calls</li>
        <li>Daily Housekeeping</li>
        <li>Turndown Service</li>
        <li>Digital Check In</li>
        <li>Service Request</li>
        <li>Guest Room Entertainment</li>
      </ul>
    ),
  },
  {
    q: 'Does Kaya Great Northern Hotel have in-room Wi-Fi?',
    a: <p>Yes, Kaya Great Northern Hotel has in-room Wi-Fi available to hotel guests.</p>,
  },
  {
    q: 'Does the hotel serve breakfast?',
    a: (
      <p>
        Yes, breakfast is available daily and can be enjoyed in our 1st floor restaurant, RAILS Restaurant &amp;
        Little Bar, or ordered via room service.
      </p>
    ),
  },
  {
    q: 'Is there a gym or fitness centre at the hotel?',
    a: (
      <p>
        The Kaya Great Northern Hotel does not have a fitness centre on-site, but we have partnered with a local gym
        located just a 5-minute walk from the hotel. Guests can enjoy complimentary access to their full range of
        facilities — please speak to our reception team for details on passes and opening hours.
      </p>
    ),
  },
  {
    q: 'Do you offer luggage storage?',
    a: <p>Yes, luggage storage is available for guests before check-in and after check-out.</p>,
  },
  {
    q: 'Is the hotel accessible for guests with reduced mobility?',
    a: (
      <p>
        Yes, we have accessible guest rooms and facilities. Please contact us in advance so we can make arrangements
        to meet your needs.
      </p>
    ),
  },
  {
    q: 'Does the hotel provide cots for children?',
    a: <p>Yes, cots are available free of charge on request.</p>,
  },
  {
    q: 'What is the closest airport to Kaya Great Northern Hotel?',
    a: (
      <p>
        The closest airport to Kaya Great Northern Hotel is Heathrow Airport (LHR). LHR is located approximately
        24.0 KM from the hotel.
      </p>
    ),
  },
  {
    q: 'Does Kaya Great Northern Hotel have electric vehicle charging stations?',
    a: <p>No, Kaya Great Northern Hotel does not have electric charging stations.</p>,
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        image="/img/basic/gnh-hero-exterior-1600_3.webp"
        tag="FAQ"
        title="Good to Know"
        description="Clear answers for a smoother stay."
      />

      <section className="section faq-categories faqs-page">
        <div className="container">
          <h2 className="faqs-page-title">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="contact-small-cta">
        <div className="container">
          <p>
            If you can&apos;t find the answer to your question here, please contact us on{' '}
            <a href={SITE.phoneHref}>{SITE.phone}</a> or email{' '}
            <a href="mailto:INFO@GNHLONDON.COM">INFO@GNHLONDON.COM</a>.
          </p>
          <Link href="/contact" className="editorial-link">
            Contact Us ↗
          </Link>
        </div>
      </section>
    </>
  );
}
