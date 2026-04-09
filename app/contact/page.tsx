'use client';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        toast.success('Enquiry sent successfully! We will be in touch shortly.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send enquiry');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-primary pt-24 sm:pt-32 min-h-[50vh] flex items-center">
          <Image
            src="/Road_construction_zone_202603180101.jpeg"
            alt="Contact Us background"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-30 shadow-2xl"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
                Get in touch for a free quote, site survey, or to discuss your traffic management
                requirements
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <a href="tel:07547183741" className="text-muted-foreground hover:text-accent transition-colors">
                        07547 183741
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        For urgent or emergency works, call anytime
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address</h3>
                      <address className="text-muted-foreground not-italic">
                        The Courtyard, Alban Park<br />
                        St Albans<br />
                        AL4 0LA
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <div className="flex flex-col gap-1">
                        <a href="mailto:luke.stratton@etmtrafficmanagement.co.uk" className="text-muted-foreground hover:text-accent transition-colors break-all">
                          luke.stratton@etmtrafficmanagement.co.uk
                        </a>
                        <a href="mailto:mark.benham@etmtrafficmanagement.co.uk" className="text-muted-foreground hover:text-accent transition-colors break-all">
                          mark.benham@etmtrafficmanagement.co.uk
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Hours</h3>
                      <p className="text-muted-foreground">
                        24/7 Emergency Response Available
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Office hours: Monday - Friday, 8am - 6pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">Emergency Works?</h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent traffic management requirements, call us directly for immediate response.
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
                    <a href="tel:07547183741">
                      <Phone className="mr-2 h-4 w-4" />
                      Call 07547 183741 Now
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-muted p-8 rounded-lg">
                  <h2 className="text-2xl font-bold tracking-tight text-primary mb-6">
                    Request a Quote or Site Survey
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required className="mt-2" disabled={loading} />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" className="mt-2" disabled={loading} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required className="mt-2" disabled={loading} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" name="phone" type="tel" required className="mt-2" disabled={loading} />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Required</Label>
                      <Input id="service" name="service" placeholder="e.g., Planned Works, Emergency Response" className="mt-2" disabled={loading} />
                    </div>
                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Please provide details about your project, location, and requirements"
                        className="mt-2"
                        disabled={loading}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Enquiry'}
                    </Button>
                    {success && (
                      <p className="text-sm font-medium text-green-600 animate-pulse">
                        Successfully sent to ETM!
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to be contacted regarding your enquiry.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Whether you need a site survey, quotation, or have questions about our services, our
                experienced team is ready to help. Contact us today to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href="tel:07547183741">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <a href="mailto:luke.stratton@etmtrafficmanagement.co.uk">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
