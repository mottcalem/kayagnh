export const WHATS_ON_EVENTS = [
  {
    id: 'jazz-wednesdays',
    slug: 'jazz-wednesdays',
    title: 'Jazz Wednesdays at GNH Bar',
    text: 'Jazz Wednesdays at GNH Bar — Wednesdays, 6pm–8pm. Join us in GNH Bar every Wednesday for live jazz, soul and good vibes.',
    image: '/img/basic/jazz-wednesdays.webp',
    imageAlt: 'Jodie Shankland singing live at GNH Bar',
    href: '/whats-on/jazz-wednesdays',
    detail: {
      schedule: 'Wednesdays, 6pm–8pm',
      metaTitle: 'Jazz Wednesdays at GNH Bar',
      metaDescription:
        'Join us in GNH Bar every Wednesday for live jazz, soul and good vibes from the wonderful Jodie Shankland.',
      cta: { label: 'GNH Bar', href: '/gnh-bar' },
    },
  },
  {
    id: 'rails-afternoon-tea',
    slug: 'rails-afternoon-tea',
    title: "RAILS' Afternoon Tea",
    text: "RAILS' Afternoon Tea — embark on a culinary journey with our Afternoon Tea menu, inspired by the romance of railway travel.",
    image: '/img/basic/rails-afternoon-tea.webp',
    imageAlt: 'Afternoon tea at RAILS Restaurant',
    href: '/whats-on/rails-afternoon-tea',
    detail: {
      metaTitle: "RAILS' Afternoon Tea",
      metaDescription:
        "Embark on a culinary journey with our Afternoon Tea menu, inspired by the iconic railways of the UK. Departing from King's Cross St Pancras.",
      paragraphs: [
        {
          text: 'Embark on a culinary journey with our Afternoon Tea menu, inspired by the iconic railways of the UK. Departing from King’s Cross St Pancras, this delectable experience celebrates regional delights from across the country.',
        },
        {
          text: 'Served with scones with jam and Cornish clotted cream and a pot of your chosen brew.',
        },
        {
          text: '*Vegetarian and Vegan Afternoon Tea also available on request with 24 hours notice*',
          italic: true,
        },
      ],
      ctas: [
        {
          label: 'Book Here',
          href: 'https://www.railslondon.com/reservations/',
          external: true,
        },
        {
          label: 'View Menu',
          href: 'https://kayagnhlondon.com/wp-content/uploads/2020/06/RAILS-AFT-2026-Digital.pdf',
          external: true,
        },
      ],
    },
  },
  {
    id: 'saturday-dj',
    slug: 'saturday-dj',
    title: 'Saturday DJ Sessions',
    text: 'Join us in Kaya GNH Bar every Saturday from 3pm – 8pm for live DJ sessions — funk, jazz, dance and more.',
    image: '/img/basic/saturday-dj.webp',
    imageAlt: 'Saturday DJ nights at GNH Bar',
    href: '/whats-on/saturday-dj',
    detail: {
      metaTitle: 'Saturday DJ Sessions',
      metaDescription:
        'Join us in Kaya GNH Bar every Saturday from 3pm – 8pm for live DJ sessions — funk, jazz, dance and more.',
    },
  },
  {
    id: 'day-use',
    slug: 'day-use',
    title: 'Day Use Rates',
    text: 'Available from 9am until 5pm. Rates from £165. Offer subject to availability.',
    image: '/img/basic/Couchette-Room-1.webp',
    imageAlt: 'Couchette room at Kaya Great Northern Hotel',
    href: '/whats-on/day-use',
    detail: {
      metaTitle: 'Day Use Rates',
      metaDescription:
        'Day use rooms at Kaya GNH — available from 9am until 5pm. Rates from £165. Offer subject to availability.',
      ctas: [
        {
          label: 'Stay connected for exclusive offers, news and updates',
          href: '#newsletter',
        },
      ],
    },
  },
];

export function getWhatsOnEvent(slug) {
  return WHATS_ON_EVENTS.find((event) => event.slug === slug);
}

export function getWhatsOnDetailSlugs() {
  return WHATS_ON_EVENTS.filter((event) => event.detail).map((event) => event.slug);
}

export function getWhatsOnEventHref(event) {
  if (event.detail) {
    return `/whats-on/${event.slug}`;
  }
  return event.href;
}
