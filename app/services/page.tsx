import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { Building2, Zap, CalendarCheck, Phone, PartyPopper, HardHat, ClipboardCheck, Pencil, Truck, Users as UsersIcon, MessageCircle, FlagOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Traffic Management Services',
  description: 'Comprehensive traffic management services including urban and rural works, high-speed management, planned and emergency works, events, and equipment hire across the UK.',
};

const services = [
  {
    icon: Building2,
    title: 'Urban & Rural Traffic Management',
    description: 'Expert traffic control solutions for complex city-centre and rural road projects, maintaining access and safety.',
    features: [
      'Chapter 8 compliant traffic management',
      'Pedestrian flow management',
      'Local business and resident access maintained',
      'Phased lane closures',
      'Temporary diversions',
      'Stakeholder liaison',
    ],
  },
  {
    icon: Zap,
    title: 'High Speed Traffic Management',
    description: 'Specialist high-speed road traffic management for motorways, dual carriageways, and major trunk roads.',
    features: [
      'Motorway and dual carriageway works',
      'High-speed safety protocols',
      'Lane rental compliance',
      'Convoy systems',
      'Rolling road closures',
      'Advanced warning signage',
    ],
  },
  {
    icon: CalendarCheck,
    title: 'Planned Works',
    description: 'Comprehensive planning and execution for scheduled infrastructure and utility projects with full permit management.',
    features: [
      'Full site survey and assessment',
      'In-house CAD design and layouts',
      'Permit application and management',
      'Stakeholder engagement',
      'Advanced notice coordination',
      'Phased delivery planning',
    ],
  },
  {
    icon: Phone,
    title: 'Emergency Works',
    description: 'Rapid 24/7 mobilisation for urgent traffic management requirements with immediate response capabilities.',
    features: [
      '24/7 emergency availability',
      'Rapid response and mobilisation',
      'Emergency protocols and procedures',
      'Immediate site attendance',
      'Emergency permit support',
      'Out-of-hours coordination',
    ],
  },
  {
    icon: PartyPopper,
    title: 'Event Management & Signage',
    description: 'Professional traffic control and signage solutions for events, festivals, and temporary road closures.',
    features: [
      'Event traffic management planning',
      'Temporary signage installation',
      'Crowd flow management',
      'Road closure management',
      'Parking and access control',
      'Event liaison and coordination',
    ],
  },
  {
    icon: HardHat,
    title: 'Equipment Hire',
    description: 'Modern, well-maintained traffic management equipment available for hire with flexible terms.',
    features: [
      'Chapter 8 compliant equipment',
      'Cones, barriers, and signs',
      'Temporary traffic signals',
      'Vehicle Mounted Attenuators (VMA)',
      'Flexible hire periods',
      'Delivery and collection available',
    ],
  },
];

const process = [
  {
    icon: ClipboardCheck,
    title: 'Survey & Assessment',
    description: 'Comprehensive site survey to identify requirements, constraints, and optimal traffic management approach.',
  },
  {
    icon: Pencil,
    title: 'Design & Planning',
    description: 'In-house CAD design team creates compliant traffic management layouts and detailed implementation plans.',
  },
  {
    icon: Truck,
    title: 'Mobilisation & Deployment',
    description: 'Rapid mobilisation with modern fleet and equipment, professionally installed to specification.',
  },
  {
    icon: UsersIcon,
    title: 'On-Site Management',
    description: 'Dedicated contract managers and operatives ensure safe, compliant site operation throughout the project.',
  },
  {
    icon: MessageCircle,
    title: 'Communication & Liaison',
    description: 'Proactive stakeholder communication, regular updates, and responsive coordination throughout.',
  },
  {
    icon: FlagOff,
    title: 'Demobilisation',
    description: 'Safe, efficient removal of all traffic management equipment and site reinstatement to original condition.',
  },
];

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Traffic Management Services',
    provider: {
      '@type': 'Organization',
      name: 'ETM Traffic Management',
    },
    areaServed: 'GB',
    description: 'Professional traffic management services across the UK including urban, rural, high-speed, planned and emergency works.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32 min-h-[50vh] flex items-center">
          <Image
            src="/Professional_editorial_photograph_202603180101.jpeg"
            alt="Services background"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-30 shadow-2xl"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Traffic Management Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                Comprehensive traffic management solutions delivered with professionalism, safety,
                and precision across the UK
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From planned works to emergency response, we deliver safe and compliant traffic
                management solutions
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From survey to demobilisation, we manage every stage with precision and care
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex flex-col p-6 rounded-lg border-2 border-border bg-white hover:border-accent/50 hover:shadow-lg transition-all h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <step.icon className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8 text-center">
                Why Choose Our Services
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 rounded-lg bg-muted">
                  <h3 className="font-semibold text-primary mb-2">Fully Compliant</h3>
                  <p className="text-sm text-muted-foreground">
                    All works delivered in full compliance with Chapter 8 and current regulations
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-muted">
                  <h3 className="font-semibold text-primary mb-2">Rapid Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick mobilisation for planned works and 24/7 emergency availability
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-muted">
                  <h3 className="font-semibold text-primary mb-2">In-House Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert CAD designers creating bespoke traffic management layouts
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-muted">
                  <h3 className="font-semibold text-primary mb-2">Dedicated Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced contract managers overseeing every aspect of delivery
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-muted">
                  <h3 className="font-semibold text-primary mb-2">Modern Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    Well-maintained fleet and equipment ensuring reliable service
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-muted">
                  <h3 className="font-semibold text-primary mb-2">Clear Communication</h3>
                  <p className="text-sm text-muted-foreground">
                    Proactive updates and stakeholder liaison throughout the project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Discuss Your Traffic Management Requirements"
          description="Contact us for a free site survey and quote. Our experienced team is ready to support your project."
          dark={true}
        />
      </main>
      <Footer />
    </>
  );
}
