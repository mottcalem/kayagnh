import FestiveOfferDetail from '@/components/FestiveOfferDetail';
import { FESTIVE_OFFERS } from '@/lib/festive-offers';

const offer = FESTIVE_OFFERS.nyedinnerjazz;

export const metadata = {
  title: offer.title,
  description: offer.metaDescription,
};

export default function NyeDinnerJazzPage() {
  return <FestiveOfferDetail offer={offer} />;
}
