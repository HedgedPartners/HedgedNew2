import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, FileText, Users, Settings, BarChart3, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import TrustSignals from '@/components/shared/TrustSignals';
import CTABanner from '@/components/shared/CTABanner';
import TestimonialCard from '@/components/shared/TestimonialCard';

const services = [
  { icon: Calculator, title: 'Accounting Services', desc: 'Bookkeeping, financial analysis, and compliance management to maximise profitability.', link: '/services' },
  { icon: FileText, title: 'Taxation Services', desc: 'Comprehensive tax assistance for individuals and businesses. Full SARS compliance.', link: '/services' },
  { icon: Users, title: 'Payroll Services', desc: 'From calculating wages and taxes to generating payslips and year-end reporting.', link: '/services' },
  { icon: Briefcase, title: 'Secretarial Services', desc: 'Company formation, registration, document preparation, and more.', link: '/services' },
  { icon: Settings, title: 'Process Optimisation', desc: 'Improve efficiency through automation, streamlining, and reengineering.', link: '/services' },
  { icon: BarChart3, title: 'Business Analytics', desc: 'Data-driven insights, budgets, forecasts and business plans.', link: '/services' },
];

const industries = [
  { name: 'Legal Services', path: '/industries/legal' },
  { name: 'Medical', path: '/industries/medical' },
  { name: 'Construction', path: '/industries/construction' },
  { name: 'Retail', path: '/industries/retail' },
  { name: 'Restaurant & Hospitality', path: '/industries/restaurant-hospitality' },
  { name: 'Schools', path: '/industries/schools' },
  { name: 'Non-Profit', path: '/industries/non-profit' },
  { name: 'IT & Business Services', path: '/industries/it-business' },
];

const testimonials = [
  { quote: "Hedged has been a lifesaver for my business. With their accounting and payroll expertise, I can focus on growing my company without worrying about financial management.", name: "Zeal Shops", company: "Online Retailer" },
  { quote: "I highly recommend Hedged for their exceptional secretarial services. They helped me navigate the complex process of company registration smoothly and efficiently.", name: "John Kinte", company: "Entrepreneur" },
  { quote: "Hedged made payroll processing a breeze for my small business. Their streamlined system and attention to detail ensure that everything is done accurately and on time.", name: "DW Attorneys", company: "Law Consulting Firm" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/08ab0f45d_generated_81d3c2ca.png" alt="Professional business operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SAIPA Registered Accountants
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-background leading-tight">
              Streamline Your <span className="text-primary">Business</span> Operations
            </h1>
            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-xl">
              The experts in Accounting, Taxation and Business Process Optimisation. Focus on growth — leave the rest to us.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base">
                  Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 px-8 py-6 text-base">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <TrustSignals />

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Comprehensive Business Services" description="From bookkeeping to business analytics, we provide end-to-end solutions that let you focus on what matters most — growing your business." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={service.link} className="block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all group h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/8dc50d522_generated_6914d480.png" alt="Hedged team" className="rounded-2xl shadow-2xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading eyebrow="About Hedged" title="Your Trusted Financial Partner" center={false} />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hedged is a leading provider of turnkey accounting, payroll, secretarial and process optimisation services. We specialise in supporting busy business owners and entrepreneurs by taking care of their financial and administrative needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With our commitment to excellence, we have set the standard for consistency and quality that you can trust. Based in Centurion, we serve businesses across South Africa with dedication and professionalism.
            </p>
            <Link to="/about">
              <Button variant="outline" className="font-semibold">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Industries We Serve" title="Tailored Solutions for Every Sector" description="We understand that every industry has unique financial challenges. Our team brings specialised expertise to each sector." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={ind.path} className="block bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{ind.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Client Testimonials" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}