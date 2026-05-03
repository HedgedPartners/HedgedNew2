import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import CTABanner from '@/components/shared/CTABanner';

const packages = [
  {
    name: 'Starter',
    subtitle: 'For small businesses & sole proprietors',
    price: 'From R2,500',
    period: '/month',
    features: [
      'Monthly bookkeeping',
      'Bank reconciliation',
      'Annual tax return (1 entity)',
      'Payslip generation (up to 5 employees)',
      'Quarterly financial reports',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    subtitle: 'For growing businesses & SMEs',
    price: 'From R5,500',
    period: '/month',
    features: [
      'Everything in Starter, plus:',
      'Full accounting & tax compliance',
      'VAT registration & returns',
      'Payroll (up to 25 employees)',
      'Secretarial services (CIPC)',
      'Monthly management accounts',
      'Dedicated account manager',
      'Priority support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For established businesses & corporates',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Everything in Professional, plus:',
      'Unlimited payroll processing',
      'Process optimisation consulting',
      'Business analytics & dashboards',
      'Budget & forecast preparation',
      'B-BBEE certification assistance',
      'On-site consultations',
      'Strategic advisory services',
      '24/7 priority support',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">Transparent, Tiered Pricing</h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">Choose a package that fits your business needs. All packages are customisable — contact us for a tailored quote.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative rounded-2xl p-8 border ${
                  pkg.popular
                    ? 'bg-foreground text-background border-foreground shadow-2xl scale-105'
                    : 'bg-card text-foreground border-border'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <p className={`text-sm ${pkg.popular ? 'text-background/60' : 'text-muted-foreground'}`}>{pkg.subtitle}</p>
                </div>
                <div className="mb-8">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className={`text-sm ${pkg.popular ? 'text-background/60' : 'text-muted-foreground'}`}>{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-primary' : 'text-primary'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className={`w-full font-semibold ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : 'bg-foreground hover:bg-foreground/90 text-background'
                    }`}
                    size="lg"
                  >
                    {pkg.cta} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12">All prices exclude VAT. Custom packages available on request.</p>
        </div>
      </section>

      <CTABanner title="Not Sure Which Package?" subtitle="Let's chat — we'll help you find the right fit for your business size and needs." buttonText="Get a Custom Quote" />
    </div>
  );
}