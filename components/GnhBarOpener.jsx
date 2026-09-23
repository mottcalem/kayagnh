export default function GnhBarOpener() {
  return (
    <section className="gnh-bar-opener editorial-intro--top" aria-label="GNH Bar & Terrace">
      <div className="container">
        <span className="editorial-eyebrow reveal">GNH Bar &amp; Terrace</span>

        <h1 className="gnh-bar-opener-lead reveal">
          From morning coffee to late-night cocktails, GNH Bar reimagines the traditional railway bar at
          King&apos;s Cross.
        </h1>

        <figure className="gnh-bar-opener-media reveal">
          <img
            src="/img/basic/gnh-bar-terrace.webp"
            alt="GNH Bar terrace at King's Cross"
            width={1400}
            height={900}
            loading="eager"
          />
        </figure>

        <div className="gnh-bar-opener-body reveal">
          <div className="gnh-bar-opener-prose">
            <p>
              A reinvention of the traditional railway bar – where business is done, journeys pause and friendships are
              built. Located beside King&apos;s Cross and St Pancras stations, GNH Bar is the hotel&apos;s lively meeting
              point for travellers and locals alike.
            </p>
            <p>
              Blending British heritage with global influences, it&apos;s as suited to a morning coffee or quick beer as
              it is to cocktails and champagne, moving seamlessly from relaxed daytime spot to vibrant evening destination.
            </p>
          </div>

          <aside className="gnh-bar-opener-aside" aria-label="Opening hours">
            <div className="bar-hours bar-hours--compact">
              <p>
                <span>Open Daily</span> 8am – 11pm
              </p>
              <p>
                <span>Breakfast</span> 8am – 11am
              </p>
            </div>
            <img
              className="bar-intro-logo"
              src="/img/basic/gnh-bar-logo.webp"
              alt="GNH Bar, King's Cross"
              width={200}
              height={70}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
