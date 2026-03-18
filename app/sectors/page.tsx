import { Metadata } from 'next';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { LogoStrip } from '@/components/LogoStrip';
import { Lightbulb, Building, Landmark, HardHat, PartyPopper } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sectors We Serve',
  description: 'ETM Traffic Management serves utilities, infrastructure, local authorities, principal contractors, and event organisers across the UK.',
};

const sectors = [
  {
    icon: Lightbulb,
    title: 'Utilities',
    description: 'Supporting utility companies with traffic management for essential infrastructure works.',
    features: [
      'Gas, electric, water, and telecoms works',
      'Permit and NRSWA compliance',
      'Multi-phase utility schemes',
      'Emergency utility repairs',
      'Network installation and maintenance',
      'Minimising service disruption',
    ],
  },
  {
    icon: Building,
    title: 'Infrastructure',
    description: 'Enabling major infrastructure delivery with comprehensive traffic management solutions.',
    features: [
      'Major infrastructure programmes',
      'Road and highway improvements',
      'Railway and transport projects',
      'Long-term infrastructure schemes',
      'Complex multi-phase delivery',
      'Stakeholder and community liaison',
    ],
  },
  {
    icon: Landmark,
    title: 'Local Authorities',
    description: 'Supporting local authorities with compliant traffic management for public works.',
    features: [
      'Highway maintenance and improvements',
      'Public realm works',
      'Section 278 agreements',
      'Permit scheme compliance',
      'Community engagement',
      'Coordinated works programmes',
    ],
  },
  {
    icon: HardHat,
    title: 'Principal Contractors',
    description: 'Partnering with principal contractors to deliver safe, compliant traffic management.',
    features: [
      'Construction and civils projects',
      'Development and housebuilding',
      'Section 38 and 278 works',
      'Site access management',
      'Phased construction programmes',
      'Contract-specific solutions',
    ],
  },
  {
    icon: PartyPopper,
    title: 'Events',
    description: 'Professional traffic management for festivals, sporting events, and public gatherings.',
    features: [
      'Festival and concert traffic control',
      'Sporting event management',
      'Road closures and diversions',
      'Temporary signage and barriers',
      'Crowd and parking management',
      'Event liaison and coordination',
    ],
  },
];

export default function SectorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32 min-h-[50vh] flex items-center">
          <Image
            src="/Professional_editorial_photograph_202603180101.jpeg"
            alt="Sectors background"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-30 shadow-2xl"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Sectors We Serve
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                Delivering professional traffic management solutions across utilities, infrastructure,
                local authorities, contractors, and events
              </p>
            </div>
          </div>
        </section>

        <LogoStrip />

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Who We Work With
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide tailored traffic management solutions for a diverse range of sectors
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {sectors.map((sector) => (
                <div key={sector.title} className="border-2 border-border rounded-lg p-8 hover:border-accent/50 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                        <sector.icon className="h-7 w-7 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-3">{sector.title}</h3>
                      <p className="text-base text-muted-foreground mb-6">{sector.description}</p>
                      <ul className="space-y-2">
                        {sector.features.map((feature) => (
                          <li key={feature} className="flex items-start text-sm text-muted-foreground">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8">
                Sector Experience
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-12">
                With extensive experience across utilities, infrastructure, local authorities, principal
                contractors, and events, we understand the unique requirements and challenges of each
                sector. Our team brings sector-specific knowledge, proven processes, and a flexible
                approach to deliver traffic management solutions that work for your industry.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Response</div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Chapter 8 Compliant</div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">UK Wide</div>
                  <div className="text-sm text-muted-foreground">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Partner with ETM?"
          description="Whatever your sector, we have the expertise and resources to deliver professional traffic management for your projects."
          dark={true}
        />
      </main>
      <Footer />
    </>
  );
}
