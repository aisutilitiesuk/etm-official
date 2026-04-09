import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p className="text-sm italic">Last updated: April 9, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the services of ETM Traffic Management Ltd ("ETM", "we", "us", or "our"), 
                including our website at etmtrafficmanagement.co.uk, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Services</h2>
              <p>
                ETM provides professional traffic management services, including but not limited to urban and rural 
                traffic management, high-speed works, and site surveys. All services are subject to separate service 
                agreements and professional standards (e.g., Chapter 8 compliance).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Website</h2>
              <p>
                The content on this website is for general information purposes only. While we strive for accuracy, 
                we do not guarantee that the information is complete or up-to-date. Unauthorized use of this website 
                may give rise to a claim for damages and/or be a criminal offence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
              <p>
                All content, logos, and materials on this site are the property of ETM Traffic Management Ltd or our 
                licensors and are protected by copyright and intellectual property laws. Reproduction is prohibited 
                other than in accordance with the copyright notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
              <p>
                ETM will not be liable for any loss or damage (including without limitation, indirect or consequential 
                loss or damage) arising from the use of this website or our services, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of England and Wales. 
                Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the 
                courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                <strong>Email:</strong> luke.stratton@etmtrafficmanagement.co.uk
                <br />
                <strong>Address:</strong> The Courtyard, Alban Park, St Albans, AL4 0LA
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
