'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <Link href="/" className="nav-logo" aria-label="Kaya GNH Home">
            <img src="/img/basic/logo.webp" alt="Kaya GNH" className="nav-logo-img" width={140} height={44} />
            <img src="/img/basic/logo-sticky.webp" alt="Kaya GNH" className="nav-logo-sticky" />
          </Link>
          <div className="nav-right">
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span className="hamburger-text">Menu</span>
              <span className="hamburger-icon">
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`menu-overlay${menuOpen ? ' active' : ''}`} id="menuOverlay" aria-hidden={!menuOpen}>
        <div className="menu-overlay-bg" onClick={() => setMenuOpen(false)} />
        <div className="menu-overlay-content">
          <div className="menu-header">
            <button className="menu-close-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <span className="close-line" />
              <span className="close-line" />
            </button>
          </div>
          <nav className="menu-nav" aria-label="Full screen navigation">
            <ul className="menu-list">
              {NAV_LINKS.map((link) => {
                const active = !link.target && (link.href === pathname || (link.href !== '/' && pathname.startsWith(link.href)));
                return (
                  <li className="menu-item" key={link.label}>
                    <Link
                      target={link.target}
                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                      href={link.href}
                      className={`menu-link${active ? ' active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="menu-lang">
            <span className="menu-lang-label">Language:</span>
            <div className="menu-lang-options">
              <button className="menu-lang-btn active" data-lang="en" aria-label="English" type="button">
                <span className="lang-flag">🇬🇧</span>
                <span className="lang-name">English</span>
              </button>
              <button className="menu-lang-btn" data-lang="tr" aria-label="Türkçe" type="button">
                <span className="lang-flag">🇹🇷</span>
                <span className="lang-name">Türkçe</span>
              </button>
            </div>
          </div>
          <div className="menu-footer">
            <div className="menu-contact">
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              <span className="menu-contact-sep">|</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
