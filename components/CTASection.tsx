import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showPhoneButton?: boolean;
  dark?: boolean;
}

export function CTASection({
  title,
  description,
  primaryButtonText = 'Get a Quote',
  primaryButtonHref = '/contact',
  secondaryButtonText,
  secondaryButtonHref,
  showPhoneButton = true,
  dark = false,
}: CTASectionProps) {
  if (dark) {
    return (
      <section className="relative py-20 sm:py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/40" />
        <div className="absolute bottom-8 left-12 w-3 h-3 rounded-full bg-white/20" />
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full bg-accent/30" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto shadow-lg shadow-accent/20">
              <Link href={primaryButtonHref} className="flex items-center gap-2">
                {primaryButtonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-primary w-full sm:w-auto backdrop-blur-sm"
              >
                <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
              </Button>
            )}
            {showPhoneButton && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-primary w-full sm:w-auto backdrop-blur-sm"
              >
                <a href="tel:07547183741" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call 07547 183741
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-500 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto shadow-md">
            <Link href={primaryButtonHref} className="flex items-center gap-2">
              {primaryButtonText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {secondaryButtonText && secondaryButtonHref && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
            >
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          )}
          {showPhoneButton && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary w-full sm:w-auto"
            >
              <a href="tel:07360690612" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call 07360 690612
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
