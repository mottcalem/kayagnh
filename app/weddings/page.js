import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { EditorialFeature, EditorialIntro, ImageCta, SplitFaq } from '@/components/Editorial';

export const metadata = {
  title: 'Weddings',
  description:
    "Wedding venue in King's Cross at Kaya Great Northern Hotel — civil ceremonies, receptions, wedding menus and elegant event spaces.",
};

const features = [
  { title: 'Ceremonies', text: 'Fully licensed by Camden Council to host civil wedding ceremonies.', image: 'https://kayagnhlondon.com/wp-content/uploads/2026/03/ME__0003_Layer-2.jpg' },
  { title: 'Event Spaces', text: 'Three beautifully designed event spaces to celebrate your special day.', image: '/img/basic/ZDA_6282.webp' },
  { title: 'Wedding Menus', text: 'Thoughtfully designed menus with exceptional flavours and seasonal ingredients.', image: '/img/basic/full-dinner-table.webp' },
  { title: 'A Final Flourish', text: 'From stunning bouquets to curated cakes — finishing touches for an unforgettable day.', image: '/img/basic/Main-picture-480x320.webp' },
];

const faqs = [
  {
    q: 'Is this a London hotel wedding venue licensed for civil ceremonies?',
    a: <p>Yes. Kaya Great Northern Hotel is fully licensed by <strong>Camden Council</strong> to host civil wedding ceremonies.</p>,
  },
  {
    q: 'Where is this Kings Cross wedding venue located?',
    a: <p>Kaya Great Northern Hotel is located at <strong>King&apos;s Cross St Pancras Station, Pancras Road, London, N1C 4TB</strong>.</p>,
  },
  {
    q: 'What wedding spaces are available?',
    a: (
      <p>
        Choose from <strong>The Carriage</strong>, <strong>The Lounge</strong>, <strong>The Mezzanine</strong>, and{' '}
        <Link href="/rails-restaurant">RAILS Restaurant</Link> for celebrations and dining.
      </p>
    ),
  },
  {
    q: 'What are the guest capacities?',
    a: (
      <p>
        <strong>The Carriage:</strong> 16 seated / 30 standing. <strong>The Lounge:</strong> up to 20 per lounge, or up to 60 combined.{' '}
        <strong>RAILS Restaurant:</strong> up to 90 banquet style.
      </p>
    ),
  },
  {
    q: 'Do you offer wedding menus and packages?',
    a: (
      <p>
        Yes. Packages include amuse bouche + 3/4/5 courses, prosecco for the toast, bottled water, coffee/tea with petit fours, plus a complimentary
        menu tasting for the couple. Prices from £110 / £130 / £145 per person.
      </p>
    ),
  },
  {
    q: 'Can we host a drinks reception at the hotel?',
    a: (
      <p>
        Yes. The Lounge works well for a cocktail party, and the Mezzanine suits an intimate drinks party overlooking{' '}
        <Link href="/gnh-bar">GNH Bar &amp; Terrace</Link>.
      </p>
    ),
  },
  {
    q: 'What are the deposit and cancellation terms?',
    a: (
      <p>
        A <strong>25% deposit</strong> secures your date, with the remaining balance due 30 days before. Cancel 90+ days: full deposit refund;
        60–89 days: 50% retained; under 60 days: full deposit retained.
      </p>
    ),
  },
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        image="https://kayagnhlondon.com/wp-content/uploads/2026/03/ME__0003_Layer-2.jpg"
        tag="Weddings"
        title="Weddings at Kaya GNH"
        description="Historic character, modern London and a celebration shaped entirely around your story."
        primaryHref="mailto:weddings@kayagnhlondon.com"
        primaryLabel="Enquire Now"
      />

      <EditorialIntro
        tag="A London Hotel Wedding"
        title="A landmark setting. A day that feels like yours."
        text="Beside King's Cross and St Pancras, our restored Victorian spaces bring historic elegance and warm, personal service to intimate ceremonies and larger celebrations."
        image="/img/basic/GNH-AerialView-1.webp"
        href="mailto:weddings@kayagnhlondon.com"
        cta="Begin Planning"
      />

      {features.map((feature, index) => (
        <EditorialFeature
          key={feature.title}
          reverse={index % 2 === 1}
          tag={`0${index + 1}`}
          title={feature.title}
          text={feature.text}
          image={feature.image}
          href="mailto:weddings@kayagnhlondon.com"
          cta="Talk to Our Wedding Team"
          className={feature.title === 'A Final Flourish' ? 'asset-placeholder' : ''}
        />
      ))}

      <SplitFaq compact title="Your wedding, answered." items={faqs} />
      <ImageCta image="https://kayagnhlondon.com/wp-content/uploads/2026/03/ME__0003_Layer-2.jpg" tag="Weddings at Kaya GNH" title="Your day. Your story." href="mailto:weddings@kayagnhlondon.com" cta="Make an Enquiry" />
    </>
  );
}
