import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-display font-grotesk text-text-primary">Privacy Policy</h1>
            <p className="text-body text-text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="space-y-8 text-text-secondary">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Purpose</h2>
              <p>
                This Privacy Policy explains how we collect, use, and protect your personal data when you use our services. We are committed to maintaining your privacy and ensuring the security of your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">What We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address when you contact us or request consultations</li>
                <li><strong>Usage Data:</strong> How you interact with our website and services</li>
                <li><strong>Technical Information:</strong> IP address, device type, browser information</li>
                <li><strong>Communication Data:</strong> Messages you send through our contact forms</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">How We Use Your Data</h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personalize guidance and recommendations for your private AI setup</li>
                <li>Improve our services and website functionality</li>
                <li>Send updates and communications (only if you've opted-in)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Data Retention</h2>
              <p>
                We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy. Specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact form submissions: 2 years for follow-up purposes</li>
                <li>Usage analytics: 13 months for service improvement</li>
                <li>Email communications: Until you unsubscribe or request deletion</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Third-Party Tools</h2>
              <p>We may use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>OpenAI:</strong> For AI-powered recommendations and guidance</li>
                <li><strong>Google Analytics:</strong> For website usage analytics</li>
                <li><strong>Stripe:</strong> For payment processing (if applicable)</li>
                <li><strong>Resend:</strong> For email communications</li>
                <li><strong>Supabase:</strong> For secure data storage and management</li>
              </ul>
              <p>
                Each of these services has their own privacy policies, and we encourage you to review them. We only share the minimum necessary data required for service functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Children's Privacy (COPPA Compliance)</h2>
              <p>
                Our services are not intended for children under 13 years of age. If our services are ever used in educational contexts involving children under 13 (such as tutoring applications), we require explicit parental consent before collecting any personal information.
              </p>
              <p>
                Parents have the right to review, request deletion of, or refuse further collection of their child's personal information. If you believe we have inadvertently collected information from a child under 13 without proper consent, please contact us immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Security</h2>
              <p>
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL encryption for all data transmission</li>
                <li>Minimal data collection - we only collect what's necessary</li>
                <li>Secure cloud storage with encryption at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication for our team</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Your Rights</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your data for certain purposes</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-background-muted p-4 rounded-lg">
                <p>Email: barryharris82@icloud.com</p>
                <p>Subject line: Privacy Policy Inquiry</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a new effective date.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;