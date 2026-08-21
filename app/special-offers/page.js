import PageHero from '@/components/PageHero';
import { EditorialFeature, EditorialIntro } from '@/components/Editorial';

export const metadata = {
  title: 'Special Offers',
  description: 'Discover special packages and deals at Kaya Great Northern Hotel — Kaya Club Rewards and website exclusive offers.',
};

export default function SpecialOffersPage() {
  return (
    <>
      <PageHero
        image="/img/basic/gnh-hero-exterior-1600_3.webp"
        tag="Offers"
        title="Special Offers"
        description="More from your London stay — thoughtful rewards, direct booking benefits and seasonal reasons to return."
      />

      <EditorialIntro
        tag="Featured Reward"
        title="Kaya Club Rewards"
        text="A warmer welcome, member-only savings and rewards that grow with every stay — bringing Kaya's generous hospitality to the heart of London."
        image="/img/basic/IC-SAYFA-BEYAZ-SAYFA.webp"
        href="https://kayahotels.com/en/kaya-club/"
        cta="Discover Kaya Club Rewards"
      />
      <EditorialFeature
        reverse
        tag="Book Direct"
        title="5% off flexible stays."
        text="Book through our official website to enjoy 5% off flexible stays, our best available rate and direct access to the hotel team."
        image="/img/basic/Heritage-Room-3.webp"
        href="/#hero"
        cta="Book Direct"
        meta={<><span>5% saving</span><span>Flexible rate</span><span>Direct support</span></>}
      />
    </>
  );
}
