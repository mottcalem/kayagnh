import Link from 'next/link';
import PageHero from '@/components/PageHero';
import EditorialCarousel from '@/components/EditorialCarousel';
import { EditorialFeature, EditorialIntro } from '@/components/Editorial';

export const metadata = {
  title: "What's On",
  description: "Discover events at Kaya GNH — Jazz Wednesdays, Saturday DJ Sessions, Afternoon Tea and more.",
};

export default function WhatsOnPage() {
  return (
    <>
      <PageHero
        image="/img/GNH-Bar-Banner.webp"
        tag="What's On"
        title="What's Happening at Kaya GNH"
        description="Connect with the heart of the area — live music, afternoon tea and seasonal moments."
      />

      <EditorialIntro
        tag="Featured Event · Wednesdays 6–8pm"
        title="Jazz Wednesdays"
        text="Live jazz, soul and good vibes from Jodie Shankland take over GNH Bar every Wednesday — an easy midweek ritual beside King's Cross."
        image="/img/basic/ZDA_6276.webp"
        href="/gnh-bar#venue-whatson"
        cta="Discover Jazz Wednesdays"
      />

      <section className="section editorial-discover" aria-label="More events">
        <div className="container">
          <span className="editorial-eyebrow">Also Happening</span>
          <h2 className="editorial-section-title">Stay for something more.</h2>
          <EditorialCarousel label="hotel events">
            <Link href="/rails-restaurant" className="editorial-carousel-card">
              <img src="/img/basic/Main-picture-480x320.webp" alt="RAILS Afternoon Tea" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">Afternoon Tea</span><h3>RAILS Afternoon Tea</h3><p>A culinary journey inspired by the romance of railway travel.</p><span className="editorial-link">Discover More ↗</span></div>
            </Link>
            <Link href="/gnh-bar#venue-whatson" className="editorial-carousel-card">
              <img src="/img/GNH-Bar-Banner.webp" alt="Saturday DJ Sessions" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">Saturdays · 3–8pm</span><h3>Saturday DJ Sessions</h3><p>Funk, jazz and dance take the bar from afternoon into evening.</p><span className="editorial-link">Discover More ↗</span></div>
            </Link>
          </EditorialCarousel>
        </div>
      </section>

      <EditorialFeature tag="Hotel Offers" title="A room for the day." text="Day use rooms are available from 9am until 5pm, with rates from £165 and subject to availability." image="/img/basic/Heritage-Room-3.webp" href="mailto:reservations@kayagnhlondon.com" cta="Enquire About Day Use" />
      <EditorialFeature reverse tag="Beyond the Hotel" title="London starts at our door." text="Explore selected happenings around King's Cross, Camden and the capital with our local guide." image="/img/basic/GNH-AerialView-1.webp" href="/local-guide" cta="Explore the Local Guide" />
    </>
  );
}
