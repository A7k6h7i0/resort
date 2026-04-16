import SEO from '../../components/common/SEO';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Privacy Policy | Dew Dale Resorts" 
        description="Learn about how Dew Dale Resorts collects, uses and protects visitor information on our website." 
        canonical="/privacy-policy"
        noIndex
      />
      <Navbar />

      {/* HERO HEADER WITH BACKGROUND IMAGE */}
       <section className="mt-20 relative h-[320px] md:h-[380px]">
          <img
          src="/images/Jolly Buoy Island.png"
          alt="Policy Banner"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide uppercase">
            Privacy Policy
          </h1>
          {/* <p className="text-gray-200 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            This Privacy Policy explains how Dew Dale Resorts collects, uses,
            and protects information obtained through our website.
          </p> */}
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          
          <div>
            <p className="text-gray-500 font-medium mb-2">Effective Date: 9th April 2026</p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Dew Dale Resorts (“we”, “our”, “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website: <strong>www.dewdaleresorts.com</strong>.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may collect the following information:</p>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">a) Personal Information (provided by you):</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Booking or enquiry details</li>
              </ul>
            </div>
          </div>

          {/* 2. How We Use */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Respond to enquiries and booking requests</li>
              <li>Provide customer support</li>
              <li>Improve website functionality and user experience</li>
              <li>Analyze traffic and performance</li>
              <li>Send important service-related updates</li>
            </ul>
            <p className="text-gray-700 mt-4 font-medium italic">We do not send spam or unsolicited promotional emails.</p>
          </div>

          {/* 3. Cookies */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">3. Cookies & Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Improve website performance</li>
              <li>Understand visitor behavior</li>
              <li>Deliver relevant advertisements</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              You can disable cookies in your browser settings at any time.
            </p>
          </div>

          {/* 4. Google Ads */}
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">4. Google Ads & Third-Party Advertising</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use advertising services such as Google Ads and Google Analytics. These services may use cookies, tracking pixels, and similar technologies to show relevant ads based on your browsing behavior.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google may collect data as per its own privacy policies. You can control ad personalization by visiting: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://adssettings.google.com</a>
            </p>
          </div>

          {/* 5. Information Sharing */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">5. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We only share information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With your consent</li>
              <li>When required by law</li>
              <li>To protect against fraud or misuse</li>
            </ul>
          </div>

          {/* 6. Data Security */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable technical and organizational measures to protect your personal information. However, no online system is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* 7. User Rights */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">7. User Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, contact us at: <a href="mailto:dewdale.resorts@gmail.com" className="text-blue-600 underline font-medium">dewdale.resorts@gmail.com</a>
            </p>
          </div>

          {/* 8. Transparency */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">8. Transparency & Authenticity</h2>
            <p className="text-gray-700 leading-relaxed">
              Dew Dale Resorts is a legitimate hospitality service provider. We do not engage in misleading practices, fake offers, or impersonation. All information provided on this website is accurate to the best of our knowledge.
            </p>
          </div>

          {/* 9. External Links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">9. External Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </div>

          {/* 10. Updates */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">10. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this policy periodically. Changes will be posted on this page.
            </p>
          </div>

          {/* 11. Contact */}
          <div className="pt-8 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions regarding this Privacy Policy:<br />
              <strong>Website:</strong> <a href="https://www.dewdaleresorts.com" className="text-blue-600 underline">www.dewdaleresorts.com</a><br />
              <strong>Email:</strong> <a href="mailto:dewdale.resorts@gmail.com" className="text-blue-600 underline">dewdale.resorts@gmail.com</a>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
