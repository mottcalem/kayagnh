import EnquiryWidget from '@/components/EnquiryWidget';

export default function EnquirySection({ className = '', tag = 'Enquire', title = 'Tell us about your event.', children }) {
  return (
    <section className={`section enquiry-section ${className}`.trim()} id="enquiry" aria-label="Meetings and events enquiry">
      <div className="container enquiry-grid">
        <div className="enquiry-copy reveal">
          <span className="editorial-eyebrow">{tag}</span>
          <h2>{title}</h2>
          {children || (
            <p>
              Share a few details — date, guest numbers and the kind of occasion — and our events team will come back to you with
              availability and menus.
            </p>
          )}
          <p className="enquiry-contact">
            <a href="tel:+442033880800">020 3388 0800</a>
            <a href="mailto:events@gnhlondon.com">events@gnhlondon.com</a>
          </p>
        </div>
        <EnquiryWidget />
      </div>
    </section>
  );
}
