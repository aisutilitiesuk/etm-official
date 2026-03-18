'use client';

import Image from 'next/image';

const clients = [
  { name: 'AIS Utilities', logo: '/clients/ais-company-logo-300x300.png' },
  { name: 'Baileys', logo: '/clients/builtbybaileys.jpg' },
  { name: 'Energeyes', logo: '/clients/energeyes.png' },
  { name: 'M&E Connect', logo: '/clients/mandeconnectlogo-300x300.jpg' },
  { name: 'NDA', logo: '/clients/nda-company-logo-300x300.png' },
  { name: 'UNS', logo: '/clients/uns-logo-andrew-300x300.png' },
];

// Duplicate for smooth marquee
const allClients = [...clients, ...clients, ...clients, ...clients];

export function LogoStrip() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Trusted by leading contractors and utility providers across the UK
        </p>
      </div>
      <div className="relative flex">
        <div className="flex animate-marquee gap-24 whitespace-nowrap items-center py-12">
          {allClients.map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center min-w-[150px] transition-all duration-300 group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
