import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import { Globe, MapPin, Shield, Users, FileCheck, AlertCircle } from "lucide-react";

const Compliance = () => {
  const complianceAreas = [
    {
      icon: Globe,
      title: "GDPR Compliance",
      description: "Full compliance with European Union data protection regulations, including lawful basis for processing and user rights.",
      region: "European Union"
    },
    {
      icon: MapPin,
      title: "CCPA Compliance", 
      description: "California Consumer Privacy Act compliance with transparent data practices and opt-out rights for all California residents.",
      region: "California, USA"
    },
    {
      icon: Users,
      title: "COPPA Compliance",
      description: "Children's Online Privacy Protection Act compliance for any services involving users under 13 years of age.",
      region: "United States"
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Comprehensive data protection measures that exceed regulatory requirements to ensure maximum privacy.",
      region: "Global"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
              <FileCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Regulatory Compliance</span>
            </div>
            <h1 className="text-display font-grotesk text-text-primary">Compliance Notices</h1>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              We maintain compliance with international data protection and privacy regulations to protect your rights and ensure responsible data handling.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {complianceAreas.map((area, index) => (
              <div 
                key={index}
                className="card-elegant p-6 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="mb-2">
                  <span className="text-xs text-accent font-medium">{area.region}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8 text-text-secondary">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">GDPR Compliance (European Union)</h2>
              <p>
                For users in the European Union, we comply with the General Data Protection Regulation (GDPR). This includes:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Lawful Basis for Data Processing</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Legitimate Interest:</strong> To provide AI consultation services and improve our platform</li>
                    <li><strong>Consent:</strong> When you voluntarily provide information through contact forms</li>
                    <li><strong>Contract Performance:</strong> To fulfill consultation agreements and service delivery</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Your GDPR Rights</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Right to Portability:</strong> Receive your data in a machine-readable format</li>
                    <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  </ul>
                </div>

                <div className="bg-background-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-text-primary mb-2">Exercise Your Rights</h3>
                  <p>To exercise any of your GDPR rights, contact us at:</p>
                  <p className="mt-2">Email: barryharris82@icloud.com</p>
                  <p>Subject: GDPR Rights Request - [Specify Your Request]</p>
                  <p className="text-sm text-text-muted mt-2">We will respond within 30 days as required by GDPR.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">CCPA Compliance (California)</h2>
              <p>
                For California residents, we comply with the California Consumer Privacy Act (CCPA). Your rights include:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Information We Collect</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Contact information (name, email) when you request consultations</li>
                    <li>Usage information about how you interact with our website</li>
                    <li>Technical information (IP address, device type, browser)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Your CCPA Rights</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Right to Know:</strong> What personal information we collect and how it's used</li>
                    <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                    <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information</li>
                    <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-blue-800 dark:text-blue-300">Data Sale Disclosure</h3>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    <strong>We do not sell personal information.</strong> However, California residents have the right to opt out of data sales. If our practices change, we will provide clear notice and opt-out mechanisms.
                  </p>
                </div>

                <div className="bg-background-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-text-primary mb-2">Exercise Your CCPA Rights</h3>
                  <p>To exercise your California privacy rights, contact us at:</p>
                  <p className="mt-2">Email: barryharris82@icloud.com</p>
                  <p>Subject: CCPA Rights Request - [Specify Your Request]</p>
                  <p className="text-sm text-text-muted mt-2">We may need to verify your identity before processing your request.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">COPPA Compliance (Children Under 13)</h2>
              <p>
                We comply with the Children's Online Privacy Protection Act (COPPA) for any services that may be accessed by children under 13.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Parental Consent Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>We require verifiable parental consent before collecting information from children under 13</li>
                    <li>Parents must approve any AI tutoring or educational services for their children</li>
                    <li>We provide clear notice to parents about what information we collect and how it's used</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Limited Data Collection</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>We collect only the minimum information necessary for educational services</li>
                    <li>No behavioral advertising or profiling of children</li>
                    <li>Educational content and progress tracking only with parental consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Parental Rights</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Review:</strong> Access your child's personal information</li>
                    <li><strong>Delete:</strong> Request deletion of your child's information</li>
                    <li><strong>Stop Collection:</strong> Refuse further collection or use of your child's information</li>
                  </ul>
                </div>

                <div className="bg-background-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-text-primary mb-2">Contact for Children's Privacy</h3>
                  <p>For questions about children's privacy or to exercise parental rights:</p>
                  <p className="mt-2">Email: barryharris82@icloud.com</p>
                  <p>Subject: COPPA/Children's Privacy - [Your Request]</p>
                  <p className="text-sm text-text-muted mt-2">Include proof of parental identity for verification.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">International Compliance</h2>
              <p>
                Beyond GDPR, CCPA, and COPPA, we strive to comply with privacy regulations worldwide, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Canada (PIPEDA):</strong> Personal Information Protection and Electronic Documents Act</li>
                <li><strong>Australia (Privacy Act):</strong> Australian Privacy Principles</li>
                <li><strong>Brazil (LGPD):</strong> Lei Geral de Proteção de Dados</li>
                <li><strong>UK (UK GDPR):</strong> Post-Brexit data protection regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Compliance Contact</h2>
              <p>
                For any compliance-related questions, requests, or concerns:
              </p>
              <div className="bg-background-muted p-4 rounded-lg">
                <p>Email: barryharris82@icloud.com</p>
                <p>Subject line: Compliance Inquiry - [Regulation/Concern]</p>
                <p className="text-sm text-text-muted mt-2">
                  Please specify which regulation your inquiry relates to (GDPR, CCPA, COPPA, etc.) for faster processing.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Updates to Compliance</h2>
              <p>
                We regularly review and update our compliance measures to reflect changes in regulations and best practices. This compliance notice was last updated on {new Date().toLocaleDateString()}.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compliance;