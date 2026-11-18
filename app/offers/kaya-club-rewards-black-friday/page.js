import FestiveOfferDetail from '@/components/FestiveOfferDetail';
import { FESTIVE_OFFERS } from '@/lib/festive-offers';

const offer = FESTIVE_OFFERS['kaya-club-rewards-black-friday'];

export const metadata = {
  title: offer.title,
  description: offer.metaDescription,
};

export default function BlackFridayOfferPage() {
  return <FestiveOfferDetail offer={offer} />;
}
