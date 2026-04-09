import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p className="text-sm italic">Last updated: April 9, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p>
                ETM Traffic Management Ltd ("we", "our", or "us") is committed to protecting your privacy. This 
                Privacy Policy explains how we collect, use, and safeguard your personal information when you 
                visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and company 
                details when you submit an enquiry through our contact forms or site survey requests. 
                We also collect technical data (IP addresses, cookie data) to improve our website experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Respond to your enquiries and provide quotations.</li>
                <li>Manage our business relationship with you.</li>
                <li>Improve our website and services.</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share information with trusted third-party service 
                providers (e.g., IT hosting, CRM systems) who assist us in operating our business, provided they 
                comply with strict data protection standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                from unauthorized access, loss, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p>
                Under UK GDPR, you have the right to access, correct, or request the deletion of your personal 
                information. You also have the right to object to or restrict certain processing activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
              <p>
                For any privacy-related queries, please contact our Data Protection Officer at:
                <br />
                <strong>Email:</strong> mark.benham@etmtrafficmanagement.co.uk
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
