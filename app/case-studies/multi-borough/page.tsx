import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CircleCheck as CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '12km Multi-Borough Utility Infrastructure Scheme',
  description: 'Leading ICP project across two local authority boroughs over 52 weeks with complex permit management and dynamic traffic reconfiguration.',
};

const challenges = [
  'Leading ICP project spanning 12km across two local authority boroughs',
  '52-week programme duration requiring sustained coordination',
  'Complex permit requirements across two local authority areas',
  'Frequent out-of-hours works to minimise disruption',
  'Extensive residential stakeholder engagement required',
  'Emergency access considerations throughout the route',
  'Sectional delivery with overlapping phases',
  'Dynamic traffic reconfiguration as works progressed',
];

const solutions = [
  'Dedicated contract management team for full programme',
  'Comprehensive permit management across both boroughs',
  'Coordinated planning and scheduling of all phases',
  'Out-of-hours traffic management deployment and monitoring',
  'Proactive residential stakeholder communication',
  'Emergency access protocols maintained throughout',
  'Temporary traffic signals and convoy systems',
  'Rolling road closures with advance notice coordination',
  'Dynamic reconfiguration to respond to programme changes',
  'Regular liaison with both local authority teams',
];

const outcomes = [
  '52-week programme delivered successfully',
  'Full compliance across two permit schemes',
  'Minimal disruption to residential communities',
  'Emergency access maintained at all times',
  'Effective coordination across multiple phases',
  'Positive feedback from both local authorities',
  'Zero safety incidents across the entire scheme',
  'Successful delivery of complex infrastructure upgrade',
];

export default function MultiBoroughPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32 min-h-[50vh] flex items-center">
          <Image
            src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg"
            alt="Multi-borough infrastructure scheme background"
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
                  Infrastructure
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  Multi-Borough
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  Long-Term
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  52 Weeks
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                12km Multi-Borough Utility Infrastructure Scheme
              </h1>
              <p className="text-xl leading-relaxed text-gray-200">
                Leading ICP project spanning 12km across two local authority boroughs, requiring
                sustained coordination, complex permit management, and dynamic traffic management
                over a 52-week programme.
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
                  This major infrastructure project involved a 12km utility upgrade for a leading
                  Independent Connection Provider (ICP) across two local authority boroughs. The 52-week
                  programme required sustained traffic management coordination, complex permit compliance,
                  and dynamic reconfiguration as the works progressed through residential areas.
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
                  <h3 className="text-2xl font-bold mb-4">Programme Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>12km of utility infrastructure successfully delivered</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Coordinated permit compliance across two local authorities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Extensive out-of-hours works to minimise community impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Dynamic traffic management responding to programme evolution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Sustained coordination over 52-week programme</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Planning a Long-Term Infrastructure Project?"
          description="Contact us to discuss how our experience with complex, multi-phase programmes can support your infrastructure delivery."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
