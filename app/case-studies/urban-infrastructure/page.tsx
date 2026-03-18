import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CircleCheck as CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Urban Multi-Phase Utility Infrastructure Upgrade',
  description: 'Complex city-centre utility infrastructure works with high pedestrian flow, business access management, and multi-phase closures.',
};

const challenges = [
  'Complex city-centre location with high pedestrian flow',
  'Multiple local businesses requiring maintained access',
  'Busy residential area with parking constraints',
  'Multi-phase lane closures and traffic diversions',
  'Tight project timelines and permit requirements',
  'Stakeholder engagement and communication needs',
];

const solutions = [
  'Dedicated contract manager assigned throughout',
  'In-house CAD design team creating compliant traffic layouts',
  'Phased implementation with clear traffic management plans',
  'Chapter 8 compliant signage and segregation',
  'Proactive stakeholder liaison and communication',
  'Temporary pedestrian diversion planning and implementation',
  '24/7 support and on-site presence',
  'Regular review and adjustment of traffic management',
];

const outcomes = [
  'Project delivered on time and to specification',
  'Full Chapter 8 compliance maintained throughout',
  'Minimal disruption to local businesses and residents',
  'Safe pedestrian and vehicle management throughout all phases',
  'Positive stakeholder feedback on communication and coordination',
  'Zero safety incidents across the entire programme',
];

export default function UrbanInfrastructurePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32 min-h-[50vh] flex items-center">
          <Image
            src="/Utility_worksite_in_202603180103.jpeg"
            alt="Urban infrastructure works background"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-30 shadow-2xl"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/case-studies">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  Utilities
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  Urban
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  Multi-Phase
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  Chapter 8
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Urban Multi-Phase Utility Infrastructure Upgrade
              </h1>
              <p className="text-xl leading-relaxed text-gray-200">
                Complex city-centre utility infrastructure works requiring expert traffic management
                to maintain access, safety, and business continuity throughout a multi-phase programme.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  This project involved comprehensive utility infrastructure upgrades in a busy city-centre
                  location. The works required careful coordination of multiple phases, each with specific
                  traffic management requirements to maintain safety, access, and business operations
                  throughout the programme.
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">The Challenge</h2>
                <div className="grid gap-4 sm:grid-cols-2 mb-12">
                  {challenges.map((challenge) => (
                    <div key={challenge} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">Our Solution</h2>
                <div className="space-y-3 mb-12">
                  {solutions.map((solution) => (
                    <div key={solution} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{solution}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">Outcomes</h2>
                <div className="grid gap-4 sm:grid-cols-2 mb-12">
                  {outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 p-4 bg-accent/5 border-2 border-accent/20 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Dedicated contract manager providing single point of contact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>In-house CAD design support for all phases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Proactive stakeholder communication throughout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>24/7 support and rapid response to site changes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Have a Similar Project?"
          description="Contact us to discuss how our experience with complex urban infrastructure works can support your project."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
