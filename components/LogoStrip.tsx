'use client';

const clients = [
  'Castle Kelly Utilities',
  'NDA',
  'UKPS',
  'UNS',
  'AIS Utilities',
  'Energeyes',
  'Baileys Building Contractors',
  'Castle Kelly Utilities',
  'NDA',
  'UKPS',
  'UNS',
  'AIS Utilities',
  'Energeyes',
  'Baileys Building Contractors',
];

export function LogoStrip() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Trusted by leading contractors and utility providers across the UK
        </p>
      </div>
      <div className="relative flex">
        <div className="flex animate-marquee gap-12 whitespace-nowrap items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center min-w-[160px] h-12 rounded-xl border border-gray-200 bg-white px-5 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200"
            >
              <span className="text-sm font-semibold text-primary/70 hover:text-primary transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
