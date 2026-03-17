import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, features, href }: ServiceCardProps) {
  return (
    <div className="group relative h-full flex flex-col rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-8 translate-x-8 group-hover:bg-accent/10 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/3 rounded-full translate-y-6 -translate-x-6" />

      <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <Icon className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="relative text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="relative text-sm text-gray-500 leading-relaxed mb-4 flex-1">{description}</p>

      {features && features.length > 0 && (
        <ul className="relative space-y-1.5 mb-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <div className="relative mt-auto pt-4 border-t border-gray-100">
          <Link
            href={href}
            className="flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
