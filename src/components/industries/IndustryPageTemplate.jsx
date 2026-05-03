import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import TrustSignals from '@/components/shared/TrustSignals';
import LeadCaptureForm from '@/components/shared/LeadCaptureForm';
import CTABanner from '@/components/shared/CTABanner';

export default function IndustryPageTemplate({
  industry,
  heroImage,
  heroTitle,
  heroSubtitle,
  overview,
  challenges,
  solutions,
  benefits,
  industryKey,
}) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Industries We Serve</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background leading-tight">{heroTitle}</h1>
            <p className="mt-6 text-lg text-background/70 leading-relaxed">{heroSubtitle}</p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  Get a Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Industry Overview" title={`Accounting & Financial Services for ${industry}`} />
          <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-4">
            {overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Common Challenges</h3>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Financial Challenges in {industry}</h2>
              <ul className="space-y-4">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-destructive text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Solutions</h3>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">How Hedged Can Help</h2>
              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Hedged" title={`Benefits for ${industry}`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <p className="font-semibold text-foreground text-sm">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Lead Capture */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Get Started" title={`Ready to Optimise Your ${industry} Finances?`} description="Fill in the form below for a free consultation tailored to your industry needs." />
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm">
            <LeadCaptureForm sourcePage={`industry-${industryKey}`} preselectedIndustry={industryKey} />
          </div>
        </div>
      </section>
    </div>
  );
}