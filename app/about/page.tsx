import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { ShieldCheck, Target, Eye, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'ETM Traffic Management delivers safe, efficient and fully compliant traffic management solutions across the UK. Learn about our mission, vision, and values.',
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Safety Above All',
    description: 'The safety of our team, the public, and everyone affected by our work is our absolute priority.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    description: 'We maintain the highest standards in every aspect of our service delivery and client interactions.',
  },
  {
    icon: Target,
    title: 'Reliability',
    description: 'Our clients depend on us to deliver consistently excellent service, on time, every time.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We operate with honesty, transparency and ethical conduct in all our business relationships.',
  },
  {
    icon: Eye,
    title: 'Teamwork',
    description: 'We work collaboratively, supporting each other and our clients to achieve shared goals.',
  },
  {
    icon: Target,
    title: 'Continuous Improvement',
    description: 'We constantly review and refine our processes, equipment, and approaches to deliver better outcomes.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary to-secondary" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                About ETM Traffic Management
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                Built on professionalism, reliability and operational excellence
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8">
                Who We Are
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  At ETM Traffic Management, we deliver safe, efficient and fully compliant traffic
                  management solutions across the UK.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Built on professionalism, reliability and operational excellence, ETM supports
                  infrastructure projects, utilities, local authorities and principal contractors with
                  expertly planned and executed traffic control services.
                </p>
                <p className="text-lg leading-relaxed">
                  From initial site survey and design through to on-site delivery and demobilisation,
                  we ensure minimal disruption and maximum safety at every stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-6">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-primary mb-4">
                    Our Mission
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    To deliver safe, reliable and professionally managed traffic management solutions
                    that protect communities, support infrastructure delivery and enable projects to
                    move forward without disruption.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                    We are committed to operational excellence, regulatory compliance and providing
                    clients with dependable, responsive service every time.
                  </p>
                </div>
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-6">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-primary mb-4">
                    Our Vision
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    To become a leading and trusted traffic management partner across the UK —
                    recognised for safety, professionalism and performance.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                    We aim to set the benchmark in our industry by combining skilled people, strong
                    leadership and intelligent planning to deliver traffic management that exceeds
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="relative group">
                  <div className="flex flex-col p-8 rounded-lg border-2 border-border bg-white hover:border-accent/50 hover:shadow-lg transition-all h-full">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
                Our Approach
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                We pride ourselves on doing the basics brilliantly: the right people, the right kit,
                the right paperwork — delivered with pace and professionalism. Whether it's a
                short-duration job or a long-term programme, our focus is consistent: safety first,
                minimal disruption, and reliable execution.
              </p>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Work with a Professional Traffic Management Partner?"
          description="Contact us to discuss your requirements and discover how our expertise can support your project."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
