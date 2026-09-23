import LocalGuideOpener from '@/components/LocalGuideOpener';
import LocalGuideCarousel from '@/components/LocalGuideCarousel';
import { LOCAL_GUIDE_CARDS } from '@/lib/local-guide';

export const metadata = {
  title: 'Local Guide',
  description:
    "London local guide from Kaya Great Northern Hotel — cherry-picked delights, local gems and King's Cross favourites.",
};

export default function LocalGuidePage() {
  return (
    <>
      <LocalGuideOpener />

      <section
        className="section editorial-discover editorial-discover--dark local-guide-carousel-section"
        aria-label="Journeys worth making"
      >
        <div className="container">
          <h2 className="editorial-section-title local-guide-carousel-title">Journeys worth making</h2>
          <LocalGuideCarousel cards={LOCAL_GUIDE_CARDS} />
        </div>
      </section>
    </>
  );
}
