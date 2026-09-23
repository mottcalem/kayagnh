export default function LocalGuideOpener() {
  return (
    <section className="local-guide-opener" aria-label="Local Guide introduction">
      <div className="container local-guide-opener-grid">
        <figure className="local-guide-opener-media reveal">
          <img
            src="/img/basic/local-guide-opener.webp"
            alt="Couple enjoying a view of the London Eye from the Thames"
            loading="eager"
            fetchPriority="high"
          />
        </figure>
        <div className="local-guide-opener-copy-wrap reveal">
          <p className="local-guide-opener-eyebrow">
            <span>Make it a trip to remember</span>
          </p>
          <p className="local-guide-opener-copy">
            Whether you&apos;re planning an <strong>extra special weekend away</strong> or{' '}
            <strong>visiting London for the first time</strong>, let us inspire you with our cherry-picked
            delights from around the capital. We <strong>uncover local gems</strong> and highlight some of{' '}
            <strong>our favourite, and London&apos;s finest, attractions.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
