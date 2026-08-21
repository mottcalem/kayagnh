// Rendered as full-width editorial blocks. The first entry is the page's lead
// offer and gets the largest treatment.
export const OFFERS = [
  {
    id: 'kaya-club-rewards',
    tag: 'Kaya Club Rewards',
    title: 'Rewards that travel with you.',
    text: 'Privileged access to member rates, seasonal campaigns and exclusive events across Kaya Hotels & Resorts.',
    image: '/img/basic/ZDA_6276.webp',
    imageAlt: 'Kaya Club Rewards at Kaya Great Northern Hotel',
    benefits: [
      'Welcome reward points',
      '5% member rate',
      'Up to 6% MoneyPoints',
      'Up to 20% dining & spa savings',
    ],
    href: 'https://kayahotels.com/en/kaya-club/',
    cta: 'Discover Kaya Club Rewards',
  },
  {
    id: 'website-special',
    tag: 'Website Special',
    title: '5% off flexible stays.',
    text: 'Book direct on our official website and save 5% on flexible rates.',
    image: '/img/basic/Heritage-Room-3.webp',
    imageAlt: 'Heritage Room at Kaya Great Northern Hotel',
    meta: ['5% saving', 'Flexible rate', 'Direct support'],
    book: true,
    cta: 'Check Availability',
  },
];

// Rendered in the 1 large + 2 small card grid. New offers go here — the first
// entry always takes the large slot.
export const OFFER_CARDS = [
  {
    id: 'afternoon-tea',
    tag: 'Seasonal',
    title: 'A Blooming Garden Afternoon Tea',
    text: 'Floral-inspired afternoon tea served in the GNH Bar.',
    image: '/img/basic/Main-picture-480x320.webp',
    imageAlt: 'Afternoon tea at Kaya Great Northern Hotel',
    href: '/whats-on',
    cta: 'Discover More',
  },
  {
    id: 'gnh-bar',
    tag: 'Experience',
    title: 'GNH Bar & Terrace',
    text: 'Crafted cocktails and fine wines, from afternoon into evening.',
    image: '/img/basic/ZDA_6282.webp',
    imageAlt: 'GNH Bar & Terrace',
    href: '/gnh-bar',
    cta: 'Discover More',
  },
  {
    id: 'city-break',
    tag: 'Stay',
    title: 'Victorian Room City Break',
    text: 'Victorian character, modern comfort, King’s Cross on your doorstep.',
    image: '/img/basic/Victorian-Room-1.webp',
    imageAlt: 'Victorian Room at Kaya Great Northern Hotel',
    href: '/our-rooms',
    cta: 'View Rooms',
  },
];
