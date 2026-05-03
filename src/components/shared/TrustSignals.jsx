import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const signals = [
  { icon: Shield, label: 'SAIPA Registered', desc: 'Registered Professional Accountants' },
  { icon: Award, label: '10+ Years', desc: 'Of trusted experience' },
  { icon: Users, label: '500+ Clients', desc: 'Across South Africa' },
  { icon: Clock, label: 'Fast Turnaround', desc: 'Reliable & timely delivery' },
  { icon: CheckCircle, label: 'SARS Compliant', desc: '100% tax compliance' },
  { icon: Star, label: '5-Star Rated', desc: 'Client satisfaction guaranteed' },
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Hedged</p>
          <h2 className="text-2xl font-display font-bold text-foreground mt-2">Trusted by Businesses Across South Africa</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {signals.map((signal, i) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <signal.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{signal.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{signal.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}