'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What traffic management services does ETM provide?',
    answer: 'ETM provides comprehensive traffic management services including urban and rural traffic control, high-speed road management, planned and emergency works, event management, and equipment hire. We support projects from initial survey and design through to on-site delivery and demobilisation.',
  },
  {
    question: 'Do you support planned and emergency works?',
    answer: 'Yes, we provide full support for both planned works with comprehensive planning and permit management, as well as emergency works with 24/7 rapid mobilisation across the UK.',
  },
  {
    question: 'Can ETM provide in-house traffic management design?',
    answer: 'Absolutely. We have an experienced in-house design team that creates compliant CAD traffic management layouts tailored to your project requirements, ensuring full Chapter 8 compliance.',
  },
  {
    question: 'Which sectors does ETM work with?',
    answer: 'We work with utilities, infrastructure delivery teams, local authorities, principal contractors, civil engineering firms, highways teams, and event organisers across the UK.',
  },
  {
    question: 'Do you provide site surveys and traffic management planning?',
    answer: 'Yes, we provide comprehensive site surveys and traffic management planning services. Our team will assess your site, identify requirements, and develop detailed traffic management plans to ensure safe and compliant project delivery.',
  },
  {
    question: 'Can ETM support utility and infrastructure projects across the UK?',
    answer: 'Yes, we operate nationwide and have extensive experience supporting utility and infrastructure projects of all sizes. Our rapid mobilisation capabilities ensure we can respond quickly wherever you need us.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">FAQs</span>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Common questions about our traffic management services. Can't find what you're looking for?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center mt-6 text-sm font-semibold text-accent hover:underline"
            >
              Get in touch with our team
            </a>
          </div>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-accent/30 bg-white shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-accent' : 'text-primary'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full transition-all duration-300 ${
                      isOpen ? 'bg-accent text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
