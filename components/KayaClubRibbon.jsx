export default function KayaClubRibbon() {
  const benefits = [
    ['Welcome Bonus', 'Instant reward points on your first stay'],
    ['5% Member Discount', 'Best available rate on all bookings'],
    ['Earn up to 6% MoneyPoints', 'Earn points with every pound spent'],
    ['Priority Access', 'Early check-in and late check-out'],
  ];

  return (
    <section className="kaya-club-section" id="kaya-club" aria-label="Kaya Club Rewards">
      <div className="kaya-club-bg-pattern" />
      <div className="container">
        <div className="kaya-club-inner reveal">
          <div className="kaya-club-image-wrap">
            <img src="/img/basic/IC-SAYFA-BEYAZ-SAYFA.webp" alt="Kaya Club" className="kaya-club-image" loading="lazy" />
          </div>
          <div className="kaya-club-content">
            <span className="editorial-eyebrow">Book Direct &amp; Be Rewarded</span>
            <div className="kaya-club-benefits">
              {benefits.map(([title, description]) => (
                <div className="kaya-club-benefit" key={title}>
                  <span className="kaya-club-benefit-icon" aria-hidden="true">◆</span>
                  <div className="kaya-club-benefit-text">
                    <h4 className="kaya-club-benefit-title">{title}</h4>
                    <p className="kaya-club-benefit-desc">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="kaya-club-actions">
          <a href="https://kayahotels.com/en/kaya-club" className="btn-kaya-club-outline" target="_blank" rel="noopener noreferrer">Learn More</a>
          <a href="https://kayahotels.com/en/kaya-club" className="btn-kaya-club" target="_blank" rel="noopener noreferrer">Join Free Today</a>
        </div>
      </div>
    </section>
  );
}
