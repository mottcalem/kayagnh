import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Kaya Great Northern Hotel — how we collect, use and protect your personal data across our websites and services.',
};

const websites = [
  'https://kayagnhlondon.com',
  'https://gnhlondon.com',
  'https://www.railslondon.com',
  'https://gnhbar.com',
];

const providers = [
  { name: 'Oracle', role: 'Hotel reservations', url: 'https://www.oracle.com/legal/privacy/index.html' },
  { name: 'OpenTable', role: 'Restaurant reservations', url: 'https://www.opentable.co.uk/legal/privacy-policy' },
  { name: 'Mailchimp', role: 'Marketing emails', url: 'https://mailchimp.com/about/security/' },
  { name: 'Fydelia', role: 'Public access Wi-Fi', url: 'https://www.fydelia.com/privacy-policy/' },
  { name: 'D3R', role: 'Digital services', url: 'https://d3r.com/privacy-policy' },
  { name: 'Kaya Hotels & Resorts', role: null, url: 'https://kayahotels.com/en/kisisel-verilerin-korunmasi' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        image="/img/basic/IC-SAYFA-BEYAZ-SAYFA.webp"
        tag="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect your personal information."
      />

      <section className="section legal-section" aria-label="Privacy Policy">
        <div className="container">
          <article className="legal-article reveal">
            <header className="legal-header">
              <h2 className="legal-title">Kaya Great Northern Hotel</h2>
              <p className="legal-text">
                <strong>Registered address:</strong> Kaya Great Northern Hotel, King&apos;s Cross St Pancras International
                Station, Pancras Road, London, England, N1C 4TB
              </p>
              <p className="legal-text">This privacy notice applies to the following websites:</p>
              <ul className="legal-bullets">
                {websites.map((url) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </header>

            <section className="legal-block">
              <h3 className="legal-block-title">About this policy</h3>
              <p className="legal-text">
                Kaya Great Northern Hotel is committed to protecting your privacy and ensuring your personal information
                is handled in a safe and responsible way. This policy explains how we collect, use, and safeguard your
                data, including when:
              </p>
              <ul className="legal-bullets">
                <li>You use our websites</li>
                <li>You make a booking through our website</li>
                <li>You make enquiries on our website</li>
                <li>You use our public access Wi-Fi</li>
              </ul>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Definition of Personal Data</h3>
              <p className="legal-text">
                Personal data refers to any information that identifies an individual, directly or indirectly. By
                providing your personal data, you agree that it may be used in accordance with this policy.
              </p>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Data Collected</h3>
              <p className="legal-text">We collect information in various ways, such as when:</p>
              <ul className="legal-bullets">
                <li>You make a booking</li>
                <li>You visit our restaurants or bars (e.g., preferences, allergies)</li>
                <li>You make an enquiry</li>
                <li>You sign up to marketing emails</li>
                <li>You use our Wi-Fi</li>
                <li>You browse our websites</li>
              </ul>
              <p className="legal-text">
                We generally keep this data for a minimum of 24 months after your last visit, unless we are required by
                law to retain it longer.
              </p>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">How We Use Your Information</h3>
              <p className="legal-text">We only use your personal data for legitimate purposes, such as:</p>
              <ul className="legal-bullets">
                <li>Internal record keeping</li>
                <li>Sending booking confirmations and post-visit feedback</li>
                <li>Improving our products and services</li>
                <li>Sending marketing communications (where you have opted in)</li>
                <li>Customising website content</li>
                <li>Evaluating promotions and business initiatives</li>
              </ul>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Who Has Access to Your Information</h3>
              <p className="legal-text">
                We do not sell, distribute, or lease your personal information to third parties. Your data may be shared
                only with service providers who deliver services on our behalf, such as:
              </p>
              <ul className="legal-defs">
                {providers.map((p) => (
                  <li key={p.name}>
                    <strong>{p.name}</strong>
                    {p.role ? ` – ${p.role}` : ''}
                    {' · '}
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      Privacy policy
                    </a>
                  </li>
                ))}
              </ul>
              <p className="legal-text">
                Some providers may store data outside the EU, such as in the US. In these cases, they are certified under
                the EU–US Privacy Shield framework or are bound by equivalent contractual safeguards.
              </p>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Cookies</h3>
              <p className="legal-text">Our websites use cookies to:</p>
              <ul className="legal-bullets">
                <li>Verify and secure logins</li>
                <li>Personalise your experience</li>
                <li>Analyse site performance and usage</li>
                <li>Prevent fraudulent activity</li>
              </ul>
              <p className="legal-text">
                You may opt out of cookies via your browser settings, though some features may not function as intended.
              </p>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Your Choices</h3>
              <p className="legal-text">
                You will only receive marketing communications if you have given prior consent. You can change your
                preferences or unsubscribe at any time by using the link in our emails or contacting us at{' '}
                <a href="mailto:data.protection@gnhlondon.com">data.protection@gnhlondon.com</a>.
              </p>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Your Rights</h3>
              <p className="legal-text">Under GDPR, you have the right to:</p>
              <ul className="legal-bullets">
                <li>Access, correct, or delete your data</li>
                <li>Restrict or object to certain processing</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="legal-text">
                To exercise these rights, please email{' '}
                <a href="mailto:gm@gnhlondon.com">gm@gnhlondon.com</a>. We will verify your identity before processing
                any requests.
              </p>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Complaints</h3>
              <p className="legal-text">
                If you have concerns about how we handle your data, please contact{' '}
                <a href="mailto:gm@gnhlondon.com">gm@gnhlondon.com</a>.
              </p>
              <p className="legal-text">
                You can also contact the Information Commissioner&apos;s Office at{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                  https://ico.org.uk
                </a>
                .
              </p>
            </section>

            <section className="legal-block">
              <h3 className="legal-block-title">Updates to This Policy</h3>
              <p className="legal-text">
                We may update this Privacy Policy from time to time. The latest version will always be available on our
                websites.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
