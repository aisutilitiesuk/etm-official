import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Discover how ETM Traffic Management has delivered safe, compliant traffic management solutions for complex infrastructure and utility projects across the UK.',
};

const caseStudies = [
  {
    title: 'Urban Multi-Phase Utility Infrastructure Upgrade',
    description: 'Complex city-centre works with high pedestrian flow, local business access management, and multi-phase closures delivered with full Chapter 8 compliance and dedicated contract management.',
    image: '/Traffic_cones_on_202603180104.jpeg',
    href: '/case-studies/urban-infrastructure',
    tags: ['Utilities', 'Urban', 'Multi-Phase', 'Chapter 8'],
  },
  {
    title: '12km Multi-Borough Utility Infrastructure Scheme',
    description: 'Leading ICP project across two local authority boroughs over 52 weeks, involving complex permit management, out-of-hours works, and dynamic traffic reconfiguration.',
    image: '/Utility_worksite_in_202603180103.jpeg',
    href: '/case-studies/multi-borough',
    tags: ['Infrastructure', 'Multi-Borough', 'Long-Term', '52 Weeks'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32 min-h-[50vh] flex items-center">
          <Image
            src="/must_be_wearing_202603180104.jpeg"
            alt="Case Studies background"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-30 shadow-2xl"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Case Studies
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                Real projects demonstrating our expertise in delivering safe, compliant traffic
                management solutions for complex infrastructure works
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore how we've supported utilities and infrastructure projects across the UK
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.title} {...caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Have a Complex Project?"
          description="Contact us to discuss your traffic management requirements and discover how our experience can support your project delivery."
          dark={true}
        />
      </main>
      <Footer />
    </>
  );
}
