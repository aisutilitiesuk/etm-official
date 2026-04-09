import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Why Choose ETM', href: '/why-choose-etm' },
    { name: 'Environmental', href: '/environmental' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  legal: [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookies Policy', href: '/cookies' },
  ],
  services: [
    { name: 'Urban & Rural Traffic Management', href: '/services#urban-rural' },
    { name: 'High Speed Traffic Management', href: '/services#high-speed' },
    { name: 'Planned Works', href: '/services#planned' },
    { name: 'Emergency Works', href: '/services#emergency' },
    { name: 'Event Management', href: '/services#events' },
    { name: 'Equipment Hire', href: '/services#equipment' },
  ],
  sectors: [
    { name: 'Utilities', href: '/sectors#utilities' },
    { name: 'Infrastructure', href: '/sectors#infrastructure' },
    { name: 'Local Authorities', href: '/sectors#authorities' },
    { name: 'Principal Contractors', href: '/sectors#contractors' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="border-b border-white/10 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Ready to get started?</h3>
              <p className="text-gray-400 text-sm">Request a free quote or site survey from our expert team.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent/90 px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-lg shadow-accent/20"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:07547183741"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="py-12 sm:py-16">
          <div className="xl:grid xl:grid-cols-4 xl:gap-12">

            <div className="space-y-6 mb-12 xl:mb-0">
              <Image
                src="/etm-on-dark.png"
                alt="ETM Traffic Management"
                width={150}
                height={75}
                className="h-[60px] w-auto"
              />
              <p className="text-sm leading-6 text-gray-400 max-w-xs">
                Safe, efficient and fully compliant traffic management solutions across the UK.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">
                    The Courtyard, Alban Park,<br />St Albans, AL4 0LA
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href="tel:07547183741" className="text-sm text-gray-400 hover:text-white transition-colors">
                    07547 183741
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-2">
                    <a href="mailto:luke.stratton@etmtrafficmanagement.co.uk" className="text-xs text-gray-400 hover:text-white transition-colors break-all">
                      luke.stratton@etmtrafficmanagement.co.uk
                    </a>
                    <a href="mailto:mark.benham@etmtrafficmanagement.co.uk" className="text-xs text-gray-400 hover:text-white transition-colors break-all">
                      mark.benham@etmtrafficmanagement.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-5">Company</h3>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-5">Services</h3>
                <ul className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-5">Sectors</h3>
                <ul className="space-y-3">
                  {navigation.sectors.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-5">Legal</h3>
                <ul className="space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ETM Traffic Management Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-500">24/7 Emergency Response Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
