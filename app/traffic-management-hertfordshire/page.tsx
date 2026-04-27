import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { HardHat, Timer, CheckCircle, MapPin } from 'lucide-react';
import { LogoStrip } from '@/components/LogoStrip';

export const metadata: Metadata = {
  title: 'Traffic Management Hertfordshire | Local Experts | ETM',
  description: 'Leading traffic management company in Hertfordshire. Fast response for road closures, temporary traffic lights, and utility works from our local HQ.',
  alternates: {
    canonical: 'https://etmtrafficmanagement.co.uk/traffic-management-hertfordshire',
  }
};

export default function TrafficManagementHertfordshire() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Traffic Management Hertfordshire',
    serviceType: 'Traffic Management',
    provider: {
      '@type': 'Organization',
      name: 'ETM Traffic Management Ltd',
      url: 'https://etmtrafficmanagement.co.uk',
      logo: 'https://etmtrafficmanagement.co.uk/ETM_Traffic_logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wellington House, 273-275 High Street',
        addressLocality: 'London Colney',
        addressRegion: 'Hertfordshire',
        postalCode: 'AL2 1HA',
        addressCountry: 'UK'
      }
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Hertfordshire',
      addressCountry: 'UK'
    },
    description: 'Expert traffic management services across Hertfordshire. From our local base, we provide rapid response road closures, temporary lights, and complete permit management.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Hertfordshire'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32 min-h-[60vh] flex items-center">
          <Image
            src="/Professional_editorial_photograph_202603180101.jpeg"
            alt="Traffic Management in Hertfordshire"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30">
                <MapPin className="w-4 h-4" />
                Local Hertfordshire Experts
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Traffic Management Hertfordshire
              </h1>
              <p className="text-lg leading-8 text-gray-200 sm:text-xl">
                As a locally-based traffic management provider, we offer unbeatable response times and deep local knowledge for all roadworks, utility projects, and events across the county.
              </p>
            </div>
          </div>
        </section>

        <LogoStrip />

        {/* Introduction / Core Content */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Timer className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Unmatched Response Times</h3>
                  <p className="text-gray-600 text-sm">Operating directly from our Hertfordshire HQ, we can mobilize our emergency teams to any site in the county faster than out-of-town competitors.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <CheckCircle className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Local Authority Approval</h3>
                  <p className="text-gray-600 text-sm">We have strong, established working relationships with Hertfordshire County Council, streamlining the permit and approval processes.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 sm:col-span-2">
                  <HardHat className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Rural & Urban Expertise</h3>
                  <p className="text-gray-600 text-sm">From narrow country lanes requiring sensitive stop/go systems to busy high streets in Watford or Stevenage, our teams have the specific experience Hertfordshire demands.</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                  Your Trusted Local Partner for Safe Roadworks
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    When you are undertaking highway maintenance, utility repairs, or organizing a community event in Hertfordshire, you need a traffic management partner who truly understands the local landscape.
                  </p>
                  <p>
                    ETM Traffic Management is proud to be headquartered in the heart of Hertfordshire. Our local presence isn't just a point of pride; it translates directly into tangible benefits for your projects. We offer reduced travel times, deeper knowledge of regional traffic flows, and seamless coordination with local stakeholders.
                  </p>
                  <p>
                    We provide a fully comprehensive service. Our in-house planning team utilizes state-of-the-art CAD software to design Chapter 8 compliant schemes, while our highly qualified operatives ensure rigorous safety standards are met on the ground, every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Services */}
        <section className="py-20 sm:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Comprehensive Services Across the County
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We support a wide range of clients including local councils, construction firms, and utility providers throughout Hertfordshire.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Full Road Closures',
                  desc: 'Complete closure management including comprehensive diversion routing and advanced warning signage.'
                },
                {
                  title: 'Multi-Phase Traffic Lights',
                  desc: 'Supply and operation of reliable temporary traffic lights for complex junctions and prolonged works.'
                },
                {
                  title: 'Stop/Go Operations',
                  desc: 'Manual traffic control ideal for mobile works or rural Hertfordshire roads where space is restricted.'
                },
                {
                  title: 'Event Traffic Management',
                  desc: 'Specialist services for local county shows, sporting events, and community gatherings ensuring safe access.'
                },
                {
                  title: 'Pedestrian Safety',
                  desc: 'Implementation of safe walkways and crossing points to protect the public around urban worksites.'
                },
                {
                  title: 'Permit Applications',
                  desc: 'We handle all necessary paperwork and liaison with Hertfordshire County Council for street works.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Planning Works in Hertfordshire?"
          description="Speak to our local team today for expert advice, fast quotations, and reliable traffic management services."
          dark={true}
          primaryButtonText="Contact Our Local Team"
        />
      </main>
      <Footer />
    </>
  );
}
