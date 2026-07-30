import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Modern Slavery and Human Trafficking Statement',
  description:
    'Modern Slavery and Human Trafficking Statement for Kaya Great Northern Hotel (Aries GNH (Operations) Ltd) for the financial year ended 31 December 2024.',
};

const sections = [
  {
    title: 'Our Business & Supply Chain',
    items: [
      {
        label: 'Operations',
        text: 'A single-site luxury hotel offering accommodation, food & beverage, in-room dining, and event services.',
      },
      {
        label: 'Employees',
        text: 'Approximately 100 staff members.',
      },
      {
        label: 'Turnover',
        text: 'Around £11 million in 2024.',
      },
      {
        label: 'Supply Chain',
        text: 'Includes food & beverage, amenities, facilities maintenance, and professional services—majority UK-based, with some international sourcing. Heightened vigilance applies to higher-risk geographies.',
      },
    ],
  },
  {
    title: 'Our Commitment',
    paragraphs: [
      'We conduct business ethically, with zero tolerance for forced labour, child labour, or human trafficking. All suppliers and partners must:',
    ],
    bullets: [
      'Treat workers fairly',
      'Provide safe working conditions',
      'Comply with all applicable laws',
      'Prohibit forced, bonded, or prison labour',
    ],
    after: 'Actions will be taken to terminate relationships with anyone found in breach.',
  },
  {
    title: 'Our Policy & Due Diligence',
    paragraphs: ['We adopt a risk-based supplier due diligence approach:'],
    bullets: [
      'Identify high-risk geographies or sectors',
      'Request documentation of anti-slavery policies',
      'Monitor suppliers continuously',
      'Use reputable employment agencies with verified ethical practices',
    ],
  },
  {
    title: 'Risk Management & Governance',
    items: [
      {
        label: 'Mapping',
        text: 'Identify and engage with higher-risk suppliers.',
      },
      {
        label: 'Governance',
        text: 'Modern slavery risk is reviewed quarterly by the Executive team.',
      },
      {
        label: 'Procurement',
        text: 'Integrated checks in tendering and audits.',
      },
      {
        label: 'Right to Work',
        text: 'Obligatory compliance for all hires.',
      },
      {
        label: 'Training',
        text: 'Managers and procurement staff receive training to detect exploitation concerns.',
      },
    ],
  },
];

export default function ModernSlaveryPage() {
  return (
    <>
      <PageHero
        image="/img/basic/IC-SAYFA-BEYAZ-SAYFA.webp"
        tag="Legal"
        title="Modern Slavery Statement"
        description="For the financial year ended 31 December 2024"
      />

      <section className="section legal-section" aria-label="Modern Slavery Statement">
        <div className="container">
          <article className="legal-article reveal">
            <header className="legal-header">
              <h2 className="legal-title">Modern Slavery and Human Trafficking Statement</h2>
              <p className="legal-subtitle">(for the financial year ended 31 December 2024)</p>
              <p className="legal-lead">
                This statement is made pursuant to Section 54(1) of the Modern Slavery Act 2015. It is made on behalf of
                Kaya Great Northern Hotel (Aries GNH (Operations) Ltd), a fully serviced luxury hotel in King&apos;s
                Cross, London. The Hotel is owned by Kaya Hotels UK Ltd.
              </p>
            </header>

            {sections.map((section) => (
              <section className="legal-block" key={section.title}>
                <h3 className="legal-block-title">{section.title}</h3>

                {section.paragraphs?.map((p) => (
                  <p className="legal-text" key={p}>
                    {p}
                  </p>
                ))}

                {section.items ? (
                  <ul className="legal-defs">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <strong>{item.label}:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.bullets ? (
                  <ul className="legal-bullets">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {section.after ? <p className="legal-text">{section.after}</p> : null}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
