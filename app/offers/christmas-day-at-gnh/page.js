import FestiveOfferDetail from '@/components/FestiveOfferDetail';
import { FESTIVE_OFFERS } from '@/lib/festive-offers';

const offer = FESTIVE_OFFERS['christmas-day-at-gnh'];

export const metadata = {
  title: offer.title,
  description: offer.metaDescription,
};

export default function ChristmasDayAtGnhPage() {
  return <FestiveOfferDetail offer={offer} />;
}
