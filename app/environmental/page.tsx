import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Leaf, MapPin, FileText, Wrench, TrendingDown, Truck, Battery } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Environmental Commitment',
  description: 'ETM Traffic Management is committed to responsible traffic management and sustainable delivery, minimising environmental impact through efficient planning and operations.',
};

const commitments = [
  {
    icon: MapPin,
    title: 'Efficient Planning to Reduce Disruption',
    description: 'Intelligent traffic management design and route planning to reduce congestion, vehicle idling, and unnecessary delays.',
  },
  {
    icon: TrendingDown,
    title: 'Reduced Congestion and Idling',
    description: 'Proactive management minimises traffic congestion and reduces vehicle emissions from idling at roadworks.',
  },
  {
    icon: Truck,
    title: 'Efficient Mobilisation Routes',
    description: 'Optimised mobilisation and demobilisation routes to minimise fuel consumption and reduce our operational carbon footprint.',
  },
  {
    icon: FileText,
    title: 'Digital Design and Documentation',
    description: 'Digital-first approach to design, documentation, and reporting to reduce paper waste and improve efficiency.',
  },
  {
    icon: Wrench,
    title: 'Equipment Maintenance for Lifecycle Efficiency',
    description: 'Proactive equipment maintenance to maximise performance, extend lifespan, and reduce waste.',
  },
  {
    icon: Leaf,
    title: 'Process Improvement for Reduced Impact',
    description: 'Continuous review of our processes to identify opportunities to reduce environmental impact.',
  },
  {
    icon: TrendingDown,
    title: 'Reduced Unnecessary Vehicle Movements',
    description: 'Careful planning to eliminate unnecessary vehicle movements and reduce fuel consumption.',
  },
  {
    icon: Battery,
    title: 'Future Low-Emission Fleet Options',
    description: 'Exploring and evaluating low-emission and hybrid vehicle options for our future fleet.',
  },
];

export default function EnvironmentalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary to-secondary" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Environmental & Community Commitment
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                Responsible traffic management and sustainable delivery
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                Our Environmental Approach
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At ETM Traffic Management, we recognise the importance of minimising environmental
                impact while delivering safe and effective traffic management solutions. We're
                committed to responsible operations and continuous improvement in our environmental
                performance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Environmental Commitments
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Practical steps we take to reduce our environmental footprint
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {commitments.map((commitment) => (
                <div key={commitment.title} className="bg-white p-6 rounded-lg border-2 border-border hover:border-accent/50 hover:shadow-lg transition-all">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <commitment.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2 leading-tight">{commitment.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8 text-center">
                Key Focus Areas
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Reducing Emissions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through efficient planning, optimised routes, and exploring low-emission vehicle
                    options, we're working to reduce our operational carbon footprint. By minimising
                    congestion and vehicle idling at our sites, we also help reduce emissions from
                    other road users.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Minimising Waste</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our digital-first approach to design and documentation significantly reduces
                    paper waste. We also maintain our equipment proactively to extend lifespan and
                    reduce waste from premature equipment replacement.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Continuous Improvement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We regularly review our processes and operations to identify opportunities for
                    environmental improvement. This includes evaluating new technologies, refining
                    our planning approaches, and adopting best practices from across the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Responsible Operations
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                Environmental responsibility is embedded in how we operate. From initial planning
                through to demobilisation, we consider the environmental impact of our decisions and
                strive to minimise our footprint while delivering safe, effective traffic management.
              </p>
            </div>
          </div>
        </section>

        <CTASection
          title="Work with a Responsible Traffic Management Partner"
          description="Contact us to discuss your project and learn more about our approach to sustainable traffic management delivery."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
