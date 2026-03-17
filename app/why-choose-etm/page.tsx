import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeatureCard } from '@/components/FeatureCard';
import { CTASection } from '@/components/CTASection';
import { Clock, Users, Lightbulb, Wrench, MessageSquare, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose ETM',
  description: 'Discover why utilities, contractors, and local authorities choose ETM Traffic Management for safe, reliable, and professional traffic management services.',
};

const features = [
  {
    icon: Clock,
    title: 'Rapid Mobilisation',
    description: 'Quick response times for both planned and emergency works across the UK. We understand that time is critical.',
  },
  {
    icon: Users,
    title: 'In-House Design Team',
    description: 'Expert CAD designers creating compliant traffic management layouts tailored to your specific project requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Utility & Infrastructure Specialists',
    description: 'Extensive experience supporting utility and infrastructure projects with deep sector knowledge and proven processes.',
  },
  {
    icon: Award,
    title: 'Dedicated Contract Managers',
    description: 'Experienced contract managers assigned to oversee your project, ensuring consistent quality and coordination.',
  },
  {
    icon: Wrench,
    title: 'Modern Fleet & Equipment',
    description: 'Well-maintained vehicles and equipment ensuring reliable service delivery and full Chapter 8 compliance.',
  },
  {
    icon: MessageSquare,
    title: 'Proactive Communication',
    description: 'Clear, consistent updates from initial survey through to demobilisation, keeping all stakeholders informed.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First Culture',
    description: 'Unwavering commitment to safety, compliance and operational excellence in every aspect of our work.',
  },
];

const differentiators = [
  {
    title: 'Professional Team',
    description: 'Qualified, experienced operatives and managers dedicated to delivering excellent service.',
  },
  {
    title: 'Proven Track Record',
    description: 'Successful delivery of complex, multi-phase projects across utilities and infrastructure.',
  },
  {
    title: 'Full Compliance',
    description: 'Complete adherence to Chapter 8, NRSWA, and all relevant traffic management regulations.',
  },
  {
    title: 'Flexible Approach',
    description: 'Adaptable solutions tailored to your specific requirements, constraints, and timelines.',
  },
  {
    title: 'Reliable Execution',
    description: 'Consistent delivery on time, to specification, and with minimal disruption.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Transparent, competitive rates with no hidden costs or surprises.',
  },
];

export default function WhyChooseETMPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary to-secondary" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Why Choose ETM Traffic Management
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                Combining skilled professionals, modern equipment, and proven processes to deliver
                traffic management that exceeds expectations
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                What Sets Us Apart
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Seven key strengths that make ETM the right choice for your project
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  The ETM Difference
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Additional reasons why clients choose to work with us
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {differentiators.map((item) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg border-2 border-border hover:border-accent/50 transition-colors">
                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Our Commitment to You
                </h2>
              </div>
              <blockquote className="relative">
                <div className="relative z-10 text-center">
                  <p className="text-xl sm:text-2xl text-gray-200 italic leading-relaxed">
                    "We pride ourselves on doing the basics brilliantly: the right people, the right
                    kit, the right paperwork — delivered with pace and professionalism. Whether it's
                    a short-duration job or a long-term programme, our focus is consistent: safety
                    first, minimal disruption, and reliable execution."
                  </p>
                  <footer className="mt-8">
                    <div className="font-semibold text-white text-lg">Mark Benham</div>
                    <div className="text-gray-300">Managing Director</div>
                  </footer>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        <CTASection
          title="Experience the ETM Difference"
          description="Contact us to discuss your requirements and discover how our professional approach can support your project."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
