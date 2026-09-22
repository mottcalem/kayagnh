import PageHero from '@/components/PageHero';
import EditorialCarousel from '@/components/EditorialCarousel';
import { EditorialFeature, EditorialIntro } from '@/components/Editorial';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Local Guide',
  description: "London local guide from Kaya Great Northern Hotel — King's Cross favourites, Camden, seasonal guides and more.",
};

export default function LocalGuidePage() {
  return (
    <>
      <PageHero
        image="/img/basic/GNH-AerialView-1.webp"
        tag="Local Guide"
        title="London Starts Here"
        description="King's Cross at the centre, the rest of London within easy reach."
      />

      <EditorialIntro tag="01 · King's Cross" title="The neighbourhood that connects it all." text="Canals, culture, food and some of London's most exciting public spaces begin just outside our door. King's Cross is no longer somewhere to pass through — it is the first chapter of the trip." image="/img/basic/gnh-hero-exterior-1600_3.webp" href="https://kayagnhlondon.com/local-guide/" cta="Discover King's Cross" />

      <section className="section editorial-discover" aria-label="London inspiration">
        <div className="container">
          <span className="editorial-eyebrow">London, curated</span>
          <h2 className="editorial-section-title">Go further.</h2>
          <EditorialCarousel label="London guides">
            <a href="https://kayagnhlondon.com/local-guide/" className="editorial-carousel-card" target="_blank" rel="noopener">
              <img src="/img/basic/london-favourites.jpg" alt="London Favourites" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">London Favourites</span><h3>Five places worth the journey.</h3><p>Our edited list of capital essentials, all easy to reach from the hotel.</p><span className="editorial-link">Read the Guide ↗</span></div>
            </a>
            <a href="https://kayagnhlondon.com/local-guide/" className="editorial-carousel-card" target="_blank" rel="noopener">
              <img src="/img/basic/easter-480x321.webp" alt="Spring and Summer Guide" />
              <div className="editorial-carousel-card-copy"><span className="editorial-eyebrow">Seasonal</span><h3>Spring &amp; Summer Guide</h3><p>Longer days, open-air culture and the best of London in season.</p><span className="editorial-link">Read the Guide ↗</span></div>
            </a>
          </EditorialCarousel>
        </div>
      </section>

      <EditorialFeature reverse tag="Local Benefits" title="Local discounts." text="Stay with us and discover selected benefits around King's Cross — a little more from the neighbourhood." image="/img/basic/kings-cross-shops.jpg" href="https://kayagnhlondon.com/local-guide/" cta="Explore Local Discounts" />
      <EditorialFeature tag="North London" title="Why visit Camden." text="Markets, canals, music and a character unlike anywhere else in London — all within easy reach of the hotel." image="/img/basic/camden.jpg" href="https://kayagnhlondon.com/local-guide/" cta="Discover Camden" />

      <section className="section local-map-section">
        <div className="container">
          <span className="editorial-eyebrow">Find Your Bearings</span>
          <h2 className="editorial-section-title">At the heart of King&apos;s Cross.</h2>
          <div className="contact-map reveal"><iframe title="Kaya Great Northern Hotel map" src={SITE.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>
    </>
  );
}
