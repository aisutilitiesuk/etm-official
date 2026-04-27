import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { ShieldCheck, Clock, Navigation, MapPin } from 'lucide-react';
import { LogoStrip } from '@/components/LogoStrip';

export const metadata: Metadata = {
  title: 'Traffic Management London | 24/7 Road Closures & Control | ETM',
  description: 'Reliable 24/7 traffic management services in London. Expert road closures, traffic control, temporary lights, and event management. TfL and Chapter 8 compliant.',
  alternates: {
    canonical: 'https://etmtrafficmanagement.co.uk/traffic-management-london',
  }
};

export default function TrafficManagementLondon() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Traffic Management London',
    serviceType: 'Traffic Management',
    provider: {
      '@type': 'Organization',
      name: 'ETM Traffic Management Ltd',
      url: 'https://etmtrafficmanagement.co.uk',
      logo: 'https://etmtrafficmanagement.co.uk/ETM_Traffic_logo.png'
    },
    areaServed: {
      '@type': 'City',
      name: 'London',
      addressCountry: 'UK'
    },
    description: 'Reliable 24/7 traffic management services in London including road closures, temporary traffic lights, and event traffic management. Fully compliant with Transport for London (TfL) regulations.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'London'
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
            alt="Traffic Management in London"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30">
                <MapPin className="w-4 h-4" />
                Serving Greater London
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Expert Traffic Management London
              </h1>
              <p className="text-lg leading-8 text-gray-200 sm:text-xl">
                Reliable 24/7 traffic management services across the capital. From complex TfL-regulated road closures to rapid emergency response, we keep London moving safely.
              </p>
            </div>
          </div>
        </section>

        <LogoStrip />

        {/* Introduction / Core Content */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                  Trusted Traffic Control Solutions in the Heart of the Capital
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Navigating the complexities of London's road network requires specialized knowledge, precision planning, and flawless execution. At ETM Traffic Management, we provide comprehensive, end-to-end traffic solutions tailored specifically for the capital's unique demands.
                  </p>
                  <p>
                    Whether you are conducting planned utility works on a busy high street, require an emergency road closure due to an incident, or need expert pedestrian management for a major London event, our highly trained operatives are ready to deploy. 
                  </p>
                  <p>
                    We handle everything from initial site surveys and CAD design to securing the necessary permits from local London borough councils and Transport for London (TfL), ensuring your project starts on time and remains fully compliant.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Clock className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">24/7 Rapid Response</h3>
                  <p className="text-gray-600 text-sm">Our emergency response teams are on standby day and night, capable of mobilizing swiftly to secure hazardous areas across all London boroughs.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <ShieldCheck className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">TfL & Chapter 8 Compliant</h3>
                  <p className="text-gray-600 text-sm">Every scheme we design and install rigorously adheres to the latest Chapter 8 guidelines and specific Transport for London requirements.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 sm:col-span-2">
                  <Navigation className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Complete Permit Management</h3>
                  <p className="text-gray-600 text-sm">We take the stress out of London street works by managing all TTROs (Temporary Traffic Regulation Orders), bus stop suspensions, and council liaison on your behalf.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Services for London */}
        <section className="py-20 sm:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our London Traffic Management Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Delivering safe, compliant, and efficient traffic control for contractors, utilities, and event organizers across Greater London.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Urban Road Closures',
                  desc: 'Full and partial road closures with clearly signed, approved diversion routes designed to minimize disruption to London traffic.'
                },
                {
                  title: 'Temporary Traffic Lights',
                  desc: 'Deployment of multi-phase temporary traffic signals, manually operated or automated, to manage complex junctions during works.'
                },
                {
                  title: 'Pedestrian Management',
                  desc: 'Safe pedestrian walkways and crossings, crucial for high-footfall areas in central London and busy high streets.'
                },
                {
                  title: 'Event Traffic Control',
                  desc: 'Comprehensive management for London marathons, parades, and street parties, including crowd control barriers and marshalling.'
                },
                {
                  title: 'Lane Closures & Stop/Go',
                  desc: 'Efficient lane reductions and stop/go board operations for short-duration works, maximizing safety for both operatives and drivers.'
                },
                {
                  title: 'CAD Design & Planning',
                  desc: 'Bespoke traffic management plans drawn by our in-house experts, ensuring swift approval from London Highway Authorities.'
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
          title="Need Traffic Management in London?"
          description="Contact our expert team today for a free consultation, site survey, or rapid emergency deployment."
          dark={true}
          primaryButtonText="Get a Free Quote"
        />
      </main>
      <Footer />
    </>
  );
}
