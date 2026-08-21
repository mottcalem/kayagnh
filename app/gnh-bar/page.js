import Link from 'next/link';
import PageHero from '@/components/PageHero';
import EditorialCarousel from '@/components/EditorialCarousel';
import { EditorialFeature, EditorialIntro, ImageCta, SplitFaq } from '@/components/Editorial';

export const metadata = {
  title: 'GNH Bar & Terrace',
  description:
    "GNH Bar & Terrace at King's Cross — a reinvention of the traditional railway bar. Breakfast, small plates, cream tea, cocktails, live jazz and DJ sessions. Open daily 8am–11pm.",
};

const faqs = [
  {
    q: 'Where is GNH Bar & Terrace located?',
    a: (
      <p>
        GNH Bar &amp; Terrace is part of <Link href="/">Kaya Great Northern Hotel</Link>, right beside King&apos;s Cross and St Pancras.
        Guests can also find full location details on the <a href="/#contact">Contact page</a>.
      </p>
    ),
  },
  {
    q: 'What are the opening hours at GNH Bar & Terrace?',
    a: (
      <p>
        GNH Bar &amp; Terrace is open daily from 8am to 11pm, with breakfast served from 8am to 11am. For current happenings at the hotel, you can also visit the{' '}
        <Link href="/whats-on">What&apos;s On page</Link>.
      </p>
    ),
  },
  {
    q: 'What food is served at GNH Bar & Terrace?',
    a: (
      <p>
        The menu includes breakfast, small plates, cream tea and hearty British classics. For a more restaurant-led dining experience, guests can also explore{' '}
        <Link href="/rails-restaurant">RAILS Restaurant &amp; Little Bar</Link>.
      </p>
    ),
  },
  {
    q: 'What drinks are available at GNH Bar & Terrace?',
    a: (
      <p>
        Guests can enjoy classic and signature cocktails, beers, wines and spirits at GNH Bar &amp; Terrace. You can also explore the hotel&apos;s wider{' '}
        <Link href="/rails-restaurant">Food &amp; Drink offering</Link>.
      </p>
    ),
  },
  {
    q: 'Does GNH Bar & Terrace have live music or events?',
    a: (
      <p>
        Yes. GNH Bar &amp; Terrace hosts live jazz on Wednesdays and live DJ sessions on Saturdays. More hotel events can be found on the{' '}
        <Link href="/whats-on">What&apos;s On page</Link>.
      </p>
    ),
  },
  {
    q: 'Is GNH Bar & Terrace only for hotel guests?',
    a: (
      <p>
        No. The bar is a lively meeting point for travellers and locals alike. Visitors looking for broader stay information can also view{' '}
        <Link href="/our-rooms">Our Rooms</Link> or the hotel&apos;s main <Link href="/faqs">FAQs</Link>.
      </p>
    ),
  },
];

export default function GnhBarPage() {
  return (
    <>
      <PageHero image="/img/GNH-Bar-Banner.webp" tag="Bar & Terrace" title="GNH Bar & Terrace" description="From morning coffee to late-night cocktails, a railway bar reimagined for King's Cross today." primaryHref="#venue-menus" primaryLabel="View Menus" />

      <EditorialIntro tag="GNH Bar & Terrace" title="The day flows differently here." text="A lively meeting point for travellers and locals, moving easily from breakfast and coffee to small plates, champagne and cocktails after dark. Open daily 8am–11pm." image="/img/basic/ZDA_6276.webp" />

      <div id="venue-menus">
        <EditorialFeature tag="Food" title="All-day, at your pace." text="Breakfast, small plates, cream tea and hearty British classics — made for quick stops, long lunches and everything in between." image="/img/basic/full-dinner-table.webp" href="https://kayagnhlondon.com/wp-content/uploads/2020/06/GNH-Bar-April-2026-Food.pdf" cta="View Food Menu" />
        <EditorialFeature reverse tag="Drinks" title="Classics, signatures and a little theatre." text="Cocktails mixed with character, alongside champagne, wines, beers and spirits for every kind of arrival." image="/img/GNH-Bar-Banner.webp" href="https://kayagnhlondon.com/wp-content/uploads/2020/06/GNH-Bar-April-2026-Drinks.pdf" cta="View Drinks Menu" />
      </div>

      <section className="section editorial-discover editorial-discover--dark" id="venue-whatson">
        <div className="container">
          <span className="editorial-eyebrow">Live at GNH Bar</span>
          <h2 className="editorial-section-title">A soundtrack for King&apos;s Cross.</h2>
          <EditorialCarousel label="live events">
            <Link href="/whats-on" className="editorial-carousel-card">
              <img src="/img/basic/ZDA_6276.webp" alt="Jazz Wednesdays" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">Wednesdays · 6–8pm</span><h3>Jazz Wednesdays</h3><p>Live jazz, soul and good vibes from Jodie Shankland.</p><span className="editorial-link">Event Details ↗</span></div>
            </Link>
            <Link href="/whats-on" className="editorial-carousel-card">
              <img src="/img/GNH-Bar-Banner.webp" alt="Saturday DJ Sessions" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">Saturdays · 3–8pm</span><h3>Saturday DJ Sessions</h3><p>Afternoon into evening, from funk and jazz to dance.</p><span className="editorial-link">Event Details ↗</span></div>
            </Link>
          </EditorialCarousel>
        </div>
      </section>

      <EditorialFeature tag="More to Discover" title="Dinner is one floor away." text="Continue the evening at RAILS, our intimate dining room serving modern British classics with a French accent." image="/img/basic/ZDA_6282.webp" href="/rails-restaurant" cta="Discover RAILS" />
      <SplitFaq compact title="Good to know." items={faqs} />
      <ImageCta image="/img/GNH-Bar-Banner.webp" tag="GNH Bar & Terrace" title="From morning coffee to late-night cocktails." href="#venue-menus" cta="Discover GNH Bar" />
    </>
  );
}
