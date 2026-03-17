'use client';

import { Phone } from 'lucide-react';

export function EmergencyCallout() {
  return (
    <a
      href="tel:07547183741"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 group"
      aria-label="Emergency Callout - Call 07547 183741"
    >
      <div className="flex items-center bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-2xl rounded-r-xl overflow-hidden">
        <div className="flex items-center justify-center w-10 h-auto py-4 shrink-0">
          <Phone className="h-4 w-4 text-white" />
        </div>
        <div
          className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="pr-4 pl-1 whitespace-nowrap">
            <p className="text-xs font-bold text-white uppercase tracking-wider leading-tight">Emergency</p>
            <p className="text-xs font-bold text-white uppercase tracking-wider leading-tight">Callout</p>
            <p className="text-xs text-red-200 font-medium mt-0.5">07547 183741</p>
          </div>
        </div>
      </div>
    </a>
  );
}
