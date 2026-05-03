import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Users, Award, Heart } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import TrustSignals from '@/components/shared/TrustSignals';
import CTABanner from '@/components/shared/CTABanner';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We uphold the highest ethical standards in every engagement.' },
  { icon: Target, title: 'Excellence', desc: 'We strive for the highest quality in all our services.' },
  { icon: Users, title: 'Client-Focused', desc: 'Your success is our success. We tailor solutions to your needs.' },
  { icon: Award, title: 'Professionalism', desc: 'SAIPA registered with continuous professional development.' },
  { icon: Heart, title: 'Dedication', desc: 'We treat every client\'s business as if it were our own.' },
  { icon: Eye, title: 'Transparency', desc: 'Clear communication, honest advice, no hidden surprises.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">About Hedged</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">Your Trusted Financial Partner</h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">Supporting South African businesses with world-class accounting, taxation, and business optimisation services.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://media.base44.com/images/public/69f76456c020c38b5edf4ff8/8dc50d522_generated_6914d480.png" alt="Hedged team collaborating" className="rounded-2xl shadow-2xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Story" title="Built on Trust, Driven by Excellence" center={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Hedged is a leading provider of turnkey accounting, payroll, secretarial and process optimisation services. We specialise in supporting busy business owners and entrepreneurs by taking care of their financial and administrative needs.</p>
              <p>With our commitment to excellence, we have set the standard for consistency and quality that you can trust. Our team of SAIPA-registered professionals brings decades of combined experience to every engagement.</p>
              <p>Based in Centurion, Pretoria, we serve businesses across South Africa — from small startups to established enterprises. Whether you're a law firm, medical practice, construction company, or non-profit organisation, we have the expertise to support your unique needs.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="What Drives Us Every Day" description="Our core values guide every decision we make and every service we deliver." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading eyebrow="Professional Affiliation" title="SAIPA Registered" description="We are proud members of the South African Institute of Professional Accountants (SAIPA), ensuring our services meet the highest professional standards." />
        </div>
      </section>

      <TrustSignals />
      <CTABanner title="Let's Work Together" subtitle="Partner with Hedged and experience the difference that professional financial management can make." />
    </div>
  );
}