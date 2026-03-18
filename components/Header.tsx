'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Sectors', href: '/sectors' },
  { name: 'Why Choose ETM', href: '/why-choose-etm' },
  { name: 'Environmental', href: '/environmental' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

function DropdownItem({ item }: { item: typeof navigation[number] & { dropdown: { name: string; href: string }[] } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 hover:text-accent hover:bg-gray-50 transition-all"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.name}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-64 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden z-50">
          <div className="p-2">
            <Link
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors font-semibold border-b border-gray-100 mb-1"
              onClick={() => setOpen(false)}
            >
              All {item.name}
            </Link>
            {item.dropdown.map((sub) => (
              <Link
                key={sub.name}
                href={sub.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-2 -m-1.5 p-1.5">
            <Image
              src="/etm-logo.png"
              alt="ETM Traffic Management"
              width={180}
              height={50}
              className="h-10 w-auto transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 hover:text-accent hover:bg-gray-50 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3 lg:items-center">
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-lg shadow-sm">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/etm-logo.png"
                  alt="ETM Traffic Management"
                  width={160}
                  height={44}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                type="button"
                className="rounded-xl p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-4 pb-6 pt-2 border-t border-gray-100">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
