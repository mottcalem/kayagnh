import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BookingWidget from '@/components/BookingWidget';
import RevealInit from '@/components/RevealInit';

export default function SiteShell({ children }) {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BookingWidget />
      <RevealInit />
    </>
  );
}
