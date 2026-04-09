import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-8">
            Cookies Policy
          </h1>
          
          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p className="text-sm italic">Last updated: April 9, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">What are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a 
                website. They are widely used to make websites work more efficiently and provide information to 
                the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website, 
                helping us improve performance and content.</li>
                <li><strong>Functional Cookies:</strong> To remember your preferences and settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Specific Cookies We Use</h2>
              <table className="min-w-full divide-y divide-gray-200 mt-4 border border-gray-100 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Cookie Type</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Purpose</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-primary text-xs">Session</td>
                    <td className="px-6 py-4">Internal session management for website navigation.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-primary text-xs">Google Analytics</td>
                    <td className="px-6 py-4">Anonymous tracking of visitor numbers and paths.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-primary text-xs">Cookie Consent</td>
                    <td className="px-6 py-4">Remembers if you have acknowledged our cookie banner.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can choose to block 
                or delete cookies, but this may affect your ability to use certain features of our website.
              </p>
              <p className="mt-4">
                To find out more about cookies, including how to see what cookies have been set and how to manage 
                and delete them, visit <a href="https://www.aboutcookies.org" target="_blank" className="text-accent hover:underline">aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" className="text-accent hover:underline">allaboutcookies.org</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
                <br />
                <strong>Email:</strong> luke.stratton@etmtrafficmanagement.co.uk
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
