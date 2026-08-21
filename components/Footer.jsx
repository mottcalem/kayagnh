'use client';

import Link from 'next/link';
import { FOOTER_MORE, FOOTER_QUICK, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer" id="contact" aria-label="Footer">
      <div className="footer-bg-pattern" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand reveal">
            <div className="footer-logo">
              <img src="/img/basic/logo.webp" alt="Kaya GNH" className="footer-logo-img" width={380} height={120} />
            </div>
            <p className="footer-desc">
              Since 1854, the original railway hotel. Beautifully connected at the heart of King&apos;s Cross St Pancras.
            </p>
          </div>
          <div className="footer-links reveal">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {FOOTER_QUICK.map((l) => (
                <li key={l.href + l.label}>
                  <Link target={l.target} rel={l.target === '_blank' ? 'noopener noreferrer' : undefined} href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-links reveal">
            <h4 className="footer-heading">More</h4>
            <ul>
              {FOOTER_MORE.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-newsletter reveal">
            <p className="newsletter-text">Be the first to hear about exclusive offers, events, and happenings.</p>
            <form className="newsletter-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="newsletter-input" placeholder="Your email address" required aria-label="Email" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <div className="footer-partners">
              <div className="footer-partner-item">
                <img src="/img/basic/rails.webp" alt="RAILS" width={120} height={50} loading="lazy" />
              </div>
              <div className="footer-partner-item">
                <img src="/img/basic/gnhbar.webp" alt="GNH Bar" width={120} height={50} loading="lazy" />
              </div>
              <div className="footer-partner-item">
                <img src="/img/basic/squaremeal.webp" alt="Square Meal" width={120} height={50} loading="lazy" />
              </div>
              <div className="footer-partner-item">
                <img src="/img/basic/greenkey.webp" alt="Green Key" width={120} height={50} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-address">{SITE.address}</div>
          <div className="footer-contact">
            <a href={SITE.phoneHref}>T: {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>E: {SITE.email}</a>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            &copy; {new Date().getFullYear()} Kaya Great Northern Hotel. Part of <strong>Kaya Hotels &amp; Resorts</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
