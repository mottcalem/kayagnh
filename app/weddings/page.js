import Link from 'next/link';
import { EditorialFeature, EditorialIntro, SplitFaq } from '@/components/Editorial';

export const metadata = {
  title: 'Weddings',
  description:
    "Wedding venue in King's Cross at Kaya Great Northern Hotel — civil ceremonies, receptions, wedding menus and elegant event spaces.",
};

const features = [
  { title: 'Ceremonies', text: 'Kaya Great Northern is fully licensed by Camden Council to host civil wedding ceremonies.', image: '/img/basic/weddings-ceremonies.webp', imageAlt: 'Wedding place setting with a personalised menu card' },
  { title: 'Event Spaces', text: 'Choose from three beautifully designed event spaces to celebrate your special day.', image: '/img/basic/weddings-spaces.webp', imageAlt: 'The Carriage dressed for a wedding dinner' },
  { title: 'Wedding Menus', text: 'Our menus are thoughtfully designed to elevate your celebration with exceptional flavours and seasonal ingredients.', image: '/img/basic/weddings-menus.webp', imageAlt: 'Canapés served beside a bridal bouquet' },
  { title: 'A Final Flourish', text: 'From stunning bouquets to curated cakes — we’ve got the finishing touches to make your day truly unforgettable.', image: '/img/basic/weddings-flourish.webp', imageAlt: 'Gold wedding bands on marble' },
];

const faqs = [
  {
    q: 'Is this a London hotel wedding venue licensed for civil ceremonies?',
    a: <p>Yes. Kaya Great Northern Hotel is fully licensed by <strong>Camden Council</strong> to host civil wedding ceremonies.</p>,
  },
  {
    q: 'Where is this Kings Cross wedding venue located?',
    a: (
      <p>
        Kaya Great Northern Hotel is located at <strong>King’s Cross St Pancras Station, Pancras Road, London, N1C 4TB</strong>. Just by the
        station.
      </p>
    ),
  },
  {
    q: 'What wedding spaces are available at this London hotel wedding venue?',
    a: (
      <>
        <p>
          You can choose from <strong>The Carriage</strong>, <strong>The Lounge</strong>, <strong>The Mezzanine</strong>, and{' '}
          <strong>RAILS Restaurant</strong> for celebrations and dining.
        </p>
        <p>
          Related: <Link href="/rails-restaurant">RAILS Restaurant</Link> | <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link> |{' '}
          <Link href="/meetings-and-events">Event Spaces</Link>
        </p>
      </>
    ),
  },
  {
    q: 'What are the guest capacities for this Kings Cross wedding venue?',
    a: (
      <>
        <p>Capacity depends on the space:</p>
        <ul>
          <li><strong>The Carriage:</strong> <strong>16 seated / 30 standing</strong></li>
          <li><strong>The Lounge:</strong> <strong>up to 20 guests per lounge</strong>, or <strong>up to 60</strong> when combined</li>
          <li><strong>RAILS Restaurant:</strong> <strong>up to 90 guests</strong> (banquet style)</li>
        </ul>
      </>
    ),
  },
  {
    q: 'Do you offer wedding menus and packages?',
    a: (
      <>
        <p>
          Yes. Packages include <strong>amuse bouche + 3/4/5 courses</strong>, <strong>a glass of prosecco for the toast</strong>,{' '}
          <strong>bottled water</strong>, and <strong>coffee/tea with petit fours</strong>, plus a <strong>complimentary menu tasting for the couple</strong>.
          Prices are <strong>£110 / £130 / £145 per person</strong> depending on the courses chosen.
        </p>
        <p>
          Dining: <Link href="/rails-restaurant">RAILS Restaurant</Link>
        </p>
      </>
    ),
  },
  {
    q: 'Can we host a drinks reception at the hotel?',
    a: (
      <>
        <p>
          Yes. The <strong>Lounge</strong> works well for a <strong>cocktail party or drinks reception</strong>, and the <strong>Mezzanine</strong> suits
          an <strong>intimate drinks party</strong> and sits partly open to the double-height space of <strong>GNH Bar &amp; Terrace</strong> below.
        </p>
        <p>
          Drinks: <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>
        </p>
      </>
    ),
  },
  {
    q: 'Can you help with decorations, cakes and flowers?',
    a: (
      <p>
        Yes. Options include <strong>balloon decoration packages</strong> (£150 / £250 / £350), <strong>cakes</strong> (£60 for 6–8 guests or £85 for
        10 guests, with personalised message available), and <strong>flowers</strong> via Roseur (Coal Drop’s Yard), including items such as vase
        arrangements, centrepieces, bouquets and installations.
      </p>
    ),
  },
  {
    q: 'What are the deposit and cancellation terms?',
    a: (
      <>
        <p>
          A <strong>25% deposit</strong> is required to secure your date/venue, with the <strong>remaining balance due 30 days</strong> before the event.
          If you cancel:
        </p>
        <ul>
          <li><strong>90+ days:</strong> full refund of deposit</li>
          <li><strong>60–89 days:</strong> 50% of deposit is retained</li>
          <li><strong>Under 60 days:</strong> full deposit is retained</li>
        </ul>
      </>
    ),
  },
  {
    q: 'Does this London wedding venue have rooms, a bar and a restaurant - and is it by the Kings Cross station?',
    a: (
      <>
        <p>
          Yes. The hotel’s address is <strong>King’s Cross St Pancras Station</strong> (Pancras Road, London), making it a practical choice for guests
          travelling by train. You can also keep everything in one place with <strong>on-site rooms</strong>, <strong>GNH Bar &amp; Terrace</strong> for
          drinks, and <strong>RAILS Restaurant</strong> for dining.
        </p>
        <p>
          Links: <Link href="/our-rooms">Hotel Rooms</Link> | <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link> |{' '}
          <Link href="/rails-restaurant">RAILS Restaurant</Link>
        </p>
      </>
    ),
  },
];

export default function WeddingsPage() {
  return (
    <>
      <EditorialIntro
        className="editorial-intro--top"
        headingFullWidth
        headingLevel="h1"
        tag="A London Hotel Wedding Venue"
        title="Weddings at Kaya GNH"
        image="/img/basic/weddings-carriage.webp"
        imageAlt="The Carriage dressed for a wedding dinner"
      >
        <p>
          <strong>Welcome to Kaya Great Northern Hotel, a London hotel wedding venue in the heart of Kings Cross &amp; St Pancras.</strong>
        </p>
        <p>
          Nestled beside King’s Cross and St Pancras, the hotel blends historic elegance with modern luxury for wedding ceremonies and receptions. It’s the ideal wedding venue in Kings Cross. Whether you’re planning an intimate gathering or a larger celebration, our beautifully restored spaces, exceptional cuisine and bespoke service create a day that feels personal from start to finish.
        </p>
        <p>
          Please contact <a href="mailto:events@gnhlondon.com">events@gnhlondon.com</a> to book your Kings Cross wedding venue.
        </p>
        <div className="editorial-intro-actions">
          <a className="btn intro-btn-solid" href="mailto:events@gnhlondon.com">Make an Enquiry</a>
        </div>
      </EditorialIntro>

      {features.map((feature, index) => (
        <EditorialFeature
          key={feature.title}
          reverse={index % 2 === 0}
          title={feature.title}
          text={feature.text}
          image={feature.image}
          imageAlt={feature.imageAlt}
          href="mailto:weddings@kayagnhlondon.com"
          cta="Talk to Our Wedding Team"
          className="editorial-feature--square"
        />
      ))}

      <SplitFaq compact tag="FAQs" title="Kaya GNH | Wedding FAQs" items={faqs} />
    </>
  );
}
