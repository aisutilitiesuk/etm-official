import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { MapPin, Navigation2, ShieldCheck, PhoneCall } from 'lucide-react';
import { LogoStrip } from '@/components/LogoStrip';

export const metadata: Metadata = {
  title: 'Traffic Management St Albans | Local HQ Response | ETM',
  description: 'ETM Traffic Management is headquartered in St Albans. We provide immediate, expert traffic control, road closures, and utility works management across the city.',
  alternates: {
    canonical: 'https://etmtrafficmanagement.co.uk/traffic-management-st-albans',
  }
};

export default function TrafficManagementStAlbans() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Traffic Management St Albans',
    serviceType: 'Traffic Management',
    provider: {
      '@type': 'Organization',
      name: 'ETM Traffic Management Ltd',
      url: 'https://etmtrafficmanagement.co.uk',
      logo: 'https://etmtrafficmanagement.co.uk/ETM_Traffic_logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wellington House, 273-275 High Street',
        addressLocality: 'London Colney, St Albans',
        addressRegion: 'Hertfordshire',
        postalCode: 'AL2 1HA',
        addressCountry: 'UK'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'St Albans',
      addressCountry: 'UK'
    },
    description: 'Providing immediate, expert traffic control, road closures, and utility works management directly from our St Albans headquarters.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'St Albans'
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
            alt="Traffic Management in St Albans"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30">
                <MapPin className="w-4 h-4" />
                Based in St Albans
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Traffic Management St Albans
              </h1>
              <p className="text-lg leading-8 text-gray-200 sm:text-xl">
                Immediate response, local expertise, and full compliance. We manage roadworks, events, and emergencies right on our doorstep.
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
                  Expert Traffic Control from Your Local Specialists
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    St Albans is more than just an area we serve; it's our home. Operating from our headquarters in London Colney, ETM Traffic Management provides the city and surrounding villages with unparalleled speed and local insight.
                  </p>
                  <p>
                    Because we navigate these roads daily, we inherently understand the specific challenges of St Albans traffic—from the bustling historic city centre to the busy arterial routes connecting to the M25 and M1. This hyper-local knowledge allows us to design traffic management schemes that maximize safety while effectively minimizing disruption for residents and commuters.
                  </p>
                  <p>
                    Whether you're a local construction firm requiring long-term lane closures, a utility company needing rapid emergency response, or organizing a community event around Verulamium Park, our locally stationed operatives are ready to deliver flawlessly.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Navigation2 className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Hyper-Local Knowledge</h3>
                  <p className="text-gray-600 text-sm">Our intimate understanding of St Albans' road networks ensures diversions and closures are planned with maximum efficiency.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <PhoneCall className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Fastest Emergency Deployment</h3>
                  <p className="text-gray-600 text-sm">Being based locally means our 24/7 emergency response units can be on-site in St Albans faster than anyone else.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 sm:col-span-2">
                  <ShieldCheck className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Community Focused</h3>
                  <p className="text-gray-600 text-sm">We take pride in keeping our local community safe. Every layout we install prioritizes the safety of local pedestrians, cyclists, and drivers in accordance with strict Chapter 8 guidelines.</p>
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
                Services Tailored for St Albans
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Delivering reliable, fully compliant traffic solutions for any project size within our local community.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Utility Works Management',
                  desc: 'Comprehensive support for water, gas, and broadband infrastructure works happening throughout the city.'
                },
                {
                  title: 'City Centre Road Closures',
                  desc: 'Carefully managed closures in the historic centre, ensuring minimal impact on local businesses and public transport.'
                },
                {
                  title: 'Temporary Lights Supply',
                  desc: 'Deployment of smart, battery-operated temporary traffic lights to keep traffic flowing smoothly during works.'
                },
                {
                  title: 'Local Event Traffic',
                  desc: 'Expert planning and physical traffic control for St Albans half marathons, markets, and seasonal events.'
                },
                {
                  title: 'Stop/Go Boards',
                  desc: 'Responsive, manual traffic control for short duration works on quieter residential streets and approaches.'
                },
                {
                  title: 'Permit & Council Liaison',
                  desc: 'Direct communication with local authorities to secure necessary permits quickly and efficiently.'
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
          title="Looking for a Local Traffic Management Partner?"
          description="Because we are based in St Albans, we can offer site visits and competitive quotes faster. Get in touch today."
          dark={true}
          primaryButtonText="Request a Local Quote"
        />
      </main>
      <Footer />
    </>
  );
}
