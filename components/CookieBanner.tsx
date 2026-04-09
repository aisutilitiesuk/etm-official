'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent-etm');
    if (!hasConsent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent-etm', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div className="mx-auto max-w-7xl pointer-events-auto">
        <div className="relative overflow-hidden rounded-2xl bg-primary/95 backdrop-blur-md p-6 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 animate-in slide-in-from-bottom duration-700">
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">Cookie Notification</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
              Read our <Link href="/cookies" className="text-accent hover:underline font-semibold">Cookie Policy</Link> for more details.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-8 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-accent/20"
            >
              Accept All
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
