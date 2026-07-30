'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="preloader" className={`preloader${hidden ? ' hidden' : ''}`}>
      <div className="preloader-content">
        <img src="/img/basic/logo.webp" alt="Kaya GNH" className="preloader-logo-img" width={400} height={125} />
        <div className="preloader-line" />
        <p className="preloader-text">Since 1854</p>
      </div>
    </div>
  );
}
