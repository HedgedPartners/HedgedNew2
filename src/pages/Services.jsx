import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, Users, Briefcase, Settings, BarChart3, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import TrustSignals from '@/components/shared/TrustSignals';
import CTABanner from '@/components/shared/CTABanner';

const services = [
  {
    icon: Calculator,
    title: 'Accounting Services',
    desc: 'Our professional accountants can handle all your financial tasks, including bookkeeping, tax planning, and financial analysis. Let us ensure your business stays in compliance and maximises profitability.',
    features: ['Monthly bookkeeping & reconciliation', 'Financial statement preparation', 'Management accounts', 'Annual financial statements', 'Budgeting & cash flow management', 'CIPC annual returns'],
  },
  {
    icon: FileText,
    title: 'Taxation Services',
    desc: 'Efficient tax assistance for individuals and businesses. Simplify your tax obligations with our expert services. We provide full tax services for companies and individuals.',
    features: ['Company income tax returns', 'Individual tax returns', 'Provisional tax submissions', 'VAT registration & returns', 'PAYE reconciliation (EMP501)', 'Tax planning & advisory'],
  },
  {
    icon: Users,
    title: 'Payroll Services',
    desc: 'Say goodbye to payroll hassles with our comprehensive payroll services. We take care of everything, from calculating wages and taxes to generating payslips and handling year-end reporting.',
    features: ['Monthly payroll processing', 'Payslip generation', 'UIF & SDL submissions', 'IRP5 certificates', 'Leave management', 'Year-end reconciliation'],
  },
  {
    icon: Briefcase,
    title: 'Secretarial Services',
    desc: 'Leave your administrative burdens to us. Our secretarial services cover company formation, registration, document preparation, and more. Focus on your core business while we handle the paperwork.',
    features: ['Company registration (CIPC)', 'B-BBEE certification', 'Directors & member changes', 'Annual return filings', 'Share transfers', 'Deregistration of companies'],
  },
  {
    icon: Settings,
    title: 'Process Optimisation',
    desc: 'Our process optimisation service aims to improve the efficiency and effectiveness of your business processes. We analyse your current workflows, identify bottlenecks and provide practical solutions.',
    features: ['Workflow analysis & mapping', 'Bottleneck identification', 'Automation recommendations', 'Cost reduction strategies', 'Operational efficiency audits', 'Solution-based implementations'],
  },
  {
    icon: BarChart3,
    title: 'Business Analytics',
    desc: 'We can assist you gain valuable insights and make data-driven decisions about your business. We can assist you build budgets, forecasts and business plans for your business growth and sustainability.',
    features: ['Data analysis & reporting', 'Business intelligence dashboards', 'Budget preparation', 'Financial forecasting', 'Business plan development', 'KPI monitoring & tracking'],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">Comprehensive Business Solutions</h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">From bookkeeping to business analytics, we provide end-to-end solutions tailored to your unique needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              </div>
              <div className={`bg-card rounded-2xl p-8 border border-border ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">What's Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <TrustSignals />
      <CTABanner title="Need Help Choosing?" subtitle="Contact us for a free consultation and we'll recommend the perfect service package for your business." />
    </div>
  );
}