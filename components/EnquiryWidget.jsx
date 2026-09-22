'use client';

import { useEffect, useRef } from 'react';

const STYLESHEET =
  'https://onsass.designmynight.com/?theme=default&body-text-color=%230a2340&primary-color=%230a2340&background-color=%23f5f0eb';

// The widget only boots from tags whose src attribute is the protocol-relative widgets.designmynight.com path
const SCRIPT_ATTRS = {
  src: '//widgets.designmynight.com/bookings-partner.min.js',
  'dmn-booking-form': 'true',
  venue: '640b48ca1a788a05b35862e3',
  'hide-offers': 'false',
  'hide-powered-by': 'false',
  'search-venues': 'false',
  'monday-first': 'true',
  'allowed-types':
    '64d39340f108c7717e159940,6483129bd77f6c4074092e9e,64d37d23f108c733af75133b,64831ca9b155093dab599563',
  'show-type-first': 'true',
};

export default function EnquiryWidget() {
  const holder = useRef(null);

  useEffect(() => {
    if (!document.querySelector(`link[href="${STYLESHEET}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = STYLESHEET;
      document.head.appendChild(link);
    }

    const node = holder.current;
    if (!node || node.dataset.loaded) return undefined;
    node.dataset.loaded = 'true';

    const script = document.createElement('script');
    Object.entries(SCRIPT_ATTRS).forEach(([name, value]) => script.setAttribute(name, value));
    // On client-side navigation the bundle is already running, so ask it to pick up the new tag
    script.onload = () => window.DMN?.BookingFormHelper?.findBookingFormScriptTags();
    node.appendChild(script);
    window.DMN?.BookingFormHelper?.findBookingFormScriptTags();

    return () => {
      node.innerHTML = '';
      delete node.dataset.loaded;
    };
  }, []);

  return <div className="enquiry-widget" ref={holder} />;
}
