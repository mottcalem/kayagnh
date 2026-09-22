import { notFound } from 'next/navigation';
import WhatsOnEventDetail from '@/components/WhatsOnEventDetail';
import { getWhatsOnEvent, getWhatsOnDetailSlugs } from '@/lib/whats-on';

export function generateStaticParams() {
  return getWhatsOnDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getWhatsOnEvent(slug);

  if (!event?.detail) {
    return { title: "What's On" };
  }

  return {
    title: event.detail.metaTitle || event.title,
    description: event.detail.metaDescription || event.text,
  };
}

export default async function WhatsOnEventPage({ params }) {
  const { slug } = await params;
  const event = getWhatsOnEvent(slug);

  if (!event?.detail) {
    notFound();
  }

  return <WhatsOnEventDetail event={event} />;
}
