import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { FeatureCard } from '@/components/FeatureCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTASection } from '@/components/CTASection';
import { LogoStrip } from '@/components/LogoStrip';
import { FaqSection } from '@/components/FaqSection';
import { Button } from '@/components/ui/button';
import {
  Building2, Zap, CalendarCheck, Phone, PartyPopper, HardHat,
  Clock, Users, Lightbulb, Wrench, MessageSquare, ShieldCheck,
  ArrowRight, ChevronDown, Quote, Leaf, Cpu, Settings, TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ETM Traffic Management | Professional Traffic Management Services UK',
  description: 'ETM Traffic Management provides safe, efficient and fully compliant traffic management services for utilities, infrastructure, local authorities and contractors across the UK.',
};

const services = [
  {
    icon: Building2,
    title: 'Urban & Rural Traffic Management',
    description: 'Expert traffic control solutions for complex city-centre and rural road projects.',
    features: ['Chapter 8 compliance', 'Pedestrian management', 'Business access maintained'],
  },
  {
    icon: Zap,
    title: 'High Speed Traffic Management',
    description: 'Specialist high-speed road traffic management for motorways and dual carriageways.',
    features: ['Motorway works', 'Dual carriageways', 'High-speed safety protocols'],
  },
  {
    icon: CalendarCheck,
    title: 'Planned Works',
    description: 'Comprehensive planning and execution for scheduled infrastructure projects.',
    features: ['Full survey and design', 'Permit management', 'Stakeholder liaison'],
  },
  {
    icon: Phone,
    title: 'Emergency Works',
    description: 'Rapid 24/7 mobilisation for urgent traffic management requirements.',
    features: ['24/7 availability', 'Rapid response', 'Emergency protocols'],
  },
  {
    icon: PartyPopper,
    title: 'Event Management & Signage',
    description: 'Professional traffic control and signage for events and temporary closures.',
    features: ['Event planning', 'Temporary signage', 'Crowd management'],
  },
  {
    icon: HardHat,
    title: 'Equipment Hire',
    description: 'Modern, well-maintained traffic management equipment available for hire.',
    features: ['Quality equipment', 'Flexible hire terms', 'Delivery available'],
  },
];

const features = [
  { icon: Clock, title: 'Rapid Mobilisation', description: 'Quick response times for both planned and emergency works across the UK.' },
  { icon: Users, title: 'In-House Design Team', description: 'Expert CAD designers creating compliant traffic management layouts.' },
  { icon: Lightbulb, title: 'Utility & Infrastructure Specialists', description: 'Extensive experience supporting utility and infrastructure projects.' },
  { icon: Wrench, title: 'Modern Fleet & Equipment', description: 'Well-maintained vehicles and equipment ensuring reliable service delivery.' },
  { icon: MessageSquare, title: 'Proactive Communication', description: 'Clear, consistent updates from initial survey through to demobilisation.' },
  { icon: ShieldCheck, title: 'Safety First Culture', description: 'Unwavering commitment to safety, compliance and operational excellence.' },
];

const caseStudies = [
  {
    title: 'Urban Multi-Phase Utility Infrastructure Upgrade',
    description: 'Complex city-centre works with high pedestrian flow, local business access management, and multi-phase closures delivered with full Chapter 8 compliance.',
    image: 'https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg',
    href: '/case-studies/urban-infrastructure',
    tags: ['Utilities', 'Urban', 'Multi-Phase'],
  },
  {
    title: '12km Multi-Borough Utility Infrastructure Scheme',
    description: 'Leading ICP project across two local authority boroughs over 52 weeks, involving complex permit management and dynamic traffic reconfiguration.',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg',
    href: '/case-studies/multi-borough',
    tags: ['Infrastructure', 'Multi-Borough', 'Long-Term'],
  },
];

const envCommitments = [
  { icon: TrendingUp, title: 'Efficient Planning', description: 'Reducing congestion and vehicle idling through intelligent route and deployment planning.' },
  { icon: Cpu, title: 'Digital First', description: 'Digital design and documentation to minimise paper waste across all projects.' },
  { icon: Settings, title: 'Equipment Lifecycle', description: 'Proactive equipment maintenance for performance and extended lifespan.' },
  { icon: Leaf, title: 'Future Fleet', description: 'Exploring low-emission and hybrid vehicle options for our growing fleet.' },
];

const stats = [
  { value: '24/7', label: 'Emergency Response' },
  { value: '100%', label: 'Chapter 8 Compliant' },
  { value: '10+', label: 'Years Experience' },
  { value: 'UK-Wide', label: 'Coverage' },
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ETM Traffic Management',
    url: 'https://etmtrafficmanagement.co.uk',
    logo: 'https://etmtrafficmanagement.co.uk/ETM-traffic-management.png',
    description: 'Safe, efficient and fully compliant traffic management solutions across the UK',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'The Courtyard, Alban Park',
      addressLocality: 'St Albans',
      postalCode: 'AL4 0LA',
      addressCountry: 'GB',
    },
    telephone: '+44-7360-690612',
    areaServed: 'GB',
    serviceType: ['Traffic Management', 'Temporary Traffic Control', 'Emergency Traffic Management', 'Event Traffic Management'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-primary min-h-screen flex items-center">
          <div className="absolute inset-0 z-10 bg-black/20" /> {/* Subtle tint for readability without heavy overlay */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/etm-traffic-management.mp4" type="video/mp4" />
            </video>
          </div>


          <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 lg:py-48 w-full z-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 mb-8">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                  UK-Wide Traffic Management Specialists
                </span>
              </div>

              <h1 className="text- balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05] mb-8">
                Safe, Compliant Traffic
                <span className="block text-accent">Management</span>
                That Keeps Projects Moving
              </h1>

              <p className="text-lg sm:text-xl leading-8 text-gray-200 max-w-2xl mx-auto mb-12">
                From survey and design through to on-site delivery and demobilisation — ETM keeps your projects moving with minimal disruption.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto shadow-2xl shadow-accent/30 text-base px-8">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request a Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white hover:text-primary w-full sm:w-auto backdrop-blur-sm text-base px-8"
                >
                  <Link href="/contact">Request a Site Survey</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent/60 text-accent hover:bg-accent hover:text-white w-full sm:w-auto backdrop-blur-sm text-base px-8"
                >
                  <a href="tel:07360690612" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Emergency? Call Now
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 z-20">
            <span className="text-xs">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </section>

        <LogoStrip />

        {/* Services */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Services</span>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Comprehensive Traffic Management Services
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                From planned works to emergency response, we deliver safe and compliant solutions tailored to your project.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl">
                <Link href="/services" className="flex items-center gap-2">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose ETM */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">Why ETM</span>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Why Choose ETM Traffic Management
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Skilled professionals, modern equipment and proven processes delivering traffic management that exceeds expectations.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl">
                <Link href="/why-choose-etm" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">Case Studies</span>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Featured Case Studies
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                See how we've delivered safe, compliant traffic management solutions for complex infrastructure projects.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.title} {...caseStudy} />
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Commitment */}
        <section className="py-24 sm:py-32 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/80 to-primary" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">Environmental</span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
                  Our Environmental Commitment
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We're committed to responsible traffic management and sustainable delivery — actively working to reduce our footprint on every project.
                </p>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-primary rounded-xl">
                  <Link href="/environmental" className="flex items-center gap-2">
                    Read Our Full Commitment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {envCommitments.map((item) => (
                  <div key={item.title} className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-white mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_rgba(241,245,249,0.8),_white)]" />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gray-50 border border-gray-100 p-10 sm:p-16 text-center overflow-hidden shadow-sm">
              <div className="absolute top-6 left-8 text-gray-100 pointer-events-none select-none">
                <Quote className="h-20 w-20" />
              </div>
              <div className="absolute bottom-6 right-8 text-gray-100 rotate-180 pointer-events-none select-none">
                <Quote className="h-20 w-20" />
              </div>

              <div className="relative">
                <p className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed font-medium max-w-3xl mx-auto mb-10">
                  "We pride ourselves on doing the basics brilliantly: the right people, the right kit, the right paperwork — delivered with pace and professionalism. Whether it's a short-duration job or a long-term programme, our focus is consistent: safety first, minimal disruption, and reliable execution."
                </p>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base">
                    MB
                  </div>
                  <div>
                    <div className="font-bold text-primary text-base">Mark Benham</div>
                    <div className="text-sm text-gray-500">Managing Director, ETM Traffic Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />

        <CTASection
          title="Ready to Discuss Your Traffic Management Requirements?"
          description="Get in touch for a free quote, site survey, or to discuss your project requirements with our experienced team."
          dark={true}
        />
      </main>
      <Footer />
    </>
  );
}
