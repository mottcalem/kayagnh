import Link from 'next/link';
import EnquirySection from '@/components/EnquirySection';

export const metadata = {
  title: 'Meetings & Events Enquiry',
  description:
    "Enquire about meetings, private dining and private events at Kaya Great Northern Hotel beside King's Cross and St Pancras.",
  alternates: { canonical: '/meetings-and-events-enquiry' },
};

export default function MeetingsEnquiryPage() {
  return (
    <EnquirySection
      className="enquiry-section--page"
      tag="Meetings & Events"
      title="Make an enquiry."
    >
      <p>
        Tell us about your event — the date, guest numbers and the kind of occasion — and our events team will come back to you with
        availability, menus and pricing.
      </p>
      <p>
        Prefer to see the spaces first? Browse <Link href="/meetings-and-events">Meetings &amp; Events</Link> for The Carriage, the
        Lounge, the Mezzanine and <Link href="/rails-restaurant">RAILS Restaurant</Link>.
      </p>
    </EnquirySection>
  );
}
