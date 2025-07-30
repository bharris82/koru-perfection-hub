import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import { Shield, Lock, Cloud, CreditCard, Eye, AlertTriangle } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "SSL Encryption",
      description: "All data transmission between your browser and our servers is protected with industry-standard SSL/TLS encryption, ensuring your information remains secure in transit."
    },
    {
      icon: Cloud,
      title: "Secure Cloud Infrastructure", 
      description: "Our platform is hosted on enterprise-grade cloud infrastructure with advanced security measures, regular security audits, and 99.9% uptime guarantees."
    },
    {
      icon: CreditCard,
      title: "Payment Security",
      description: "We never store payment details on our servers. All payment processing is handled securely by Stripe, a PCI DSS Level 1 certified payment processor."
    },
    {
      icon: Eye,
      title: "Minimal Data Collection",
      description: "We follow data minimization principles, collecting only essential personally identifiable information (PII) needed to provide our services effectively."
    },
    {
      icon: AlertTriangle,
      title: "Abuse Protection",
      description: "Our systems include rate limiting and continuous monitoring to detect and prevent abuse, ensuring platform stability and user security."
    },
    {
      icon: Shield,
      title: "Access Controls",
      description: "Strict access controls and authentication measures protect your data, with regular security reviews and updates to maintain the highest standards."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Security First</span>
            </div>
            <h1 className="text-display font-grotesk text-text-primary">Security Policy</h1>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Your security and privacy are our top priorities. Learn how we protect your data and maintain the highest security standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="card-elegant p-6 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8 text-text-secondary">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Infrastructure Security</h2>
              <p>
                Our platform is built on enterprise-grade cloud infrastructure that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Physical Security:</strong> Data centers with 24/7 monitoring, biometric access controls, and environmental protections</li>
                <li><strong>Network Security:</strong> Advanced firewalls, DDoS protection, and network segmentation</li>
                <li><strong>Encryption at Rest:</strong> All stored data is encrypted using AES-256 encryption standards</li>
                <li><strong>Regular Backups:</strong> Automated, encrypted backups with geographic redundancy</li>
                <li><strong>Compliance:</strong> SOC 2 Type II, ISO 27001, and other industry-standard certifications</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Data Protection</h2>
              <p>
                We implement comprehensive data protection measures:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Data Minimization:</strong> We collect only the minimum data necessary for service delivery</li>
                <li><strong>Secure Storage:</strong> Personal data is stored in encrypted databases with restricted access</li>
                <li><strong>Data Retention:</strong> Automatic deletion of data according to our retention policies</li>
                <li><strong>Access Logging:</strong> All data access is logged and monitored for unusual activity</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Payment Security</h2>
              <p>
                Your financial information is protected through:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Stripe Integration:</strong> All payments processed by PCI DSS Level 1 certified Stripe</li>
                <li><strong>No Card Storage:</strong> We never store credit card numbers or payment details on our servers</li>
                <li><strong>Tokenization:</strong> Payment information is tokenized for additional security</li>
                <li><strong>Fraud Protection:</strong> Advanced fraud detection and prevention measures</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Monitoring and Protection</h2>
              <p>
                Our security monitoring includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Rate Limiting:</strong> Automatic protection against abuse and DDoS attacks</li>
                <li><strong>Real-time Monitoring:</strong> 24/7 security monitoring and incident response</li>
                <li><strong>Vulnerability Scanning:</strong> Regular security scans and penetration testing</li>
                <li><strong>Security Updates:</strong> Immediate deployment of critical security patches</li>
                <li><strong>Intrusion Detection:</strong> Advanced systems to detect and prevent unauthorized access</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Incident Response</h2>
              <p>
                In the unlikely event of a security incident:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We have a documented incident response plan with immediate containment procedures</li>
                <li>Affected users will be notified within 72 hours as required by applicable regulations</li>
                <li>We work with security experts and law enforcement when necessary</li>
                <li>Post-incident reviews ensure continuous improvement of our security measures</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Your Security Responsibilities</h2>
              <p>
                Help us keep your account secure by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Using strong, unique passwords for your accounts</li>
                <li>Not sharing account credentials with others</li>
                <li>Reporting suspicious activity immediately</li>
                <li>Keeping your contact information up to date</li>
                <li>Using secure networks when accessing our services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Security Contact</h2>
              <p>
                If you discover a security vulnerability or have security concerns, please contact us immediately:
              </p>
              <div className="bg-background-muted p-4 rounded-lg">
                <p>Email: barryharris82@icloud.com</p>
                <p>Subject line: Security Concern - [Brief Description]</p>
                <p className="text-sm text-text-muted mt-2">
                  For security vulnerabilities, please include detailed information to help us address the issue quickly.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Security Updates</h2>
              <p>
                This security policy is reviewed and updated regularly to reflect current best practices and regulatory requirements. Last updated: {new Date().toLocaleDateString()}.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Security;