import './globals.css';
import SiteShell from '@/components/SiteShell';

export const metadata = {
  title: {
    default: 'Kaya Great Northern Hotel | Since 1854 — King\'s Cross, London',
    template: '%s | Kaya Great Northern Hotel',
  },
  description:
    "Kaya Great Northern Hotel, an exquisite boutique hotel in King's Cross St Pancras, with on-site restaurant and bar close to Eurostar. Since 1854.",
  metadataBase: new URL('https://www.kayagnhlondon.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
