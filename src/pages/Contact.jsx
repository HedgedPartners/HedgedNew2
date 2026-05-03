import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import LeadCaptureForm from '@/components/shared/LeadCaptureForm';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@hedged.co.za', link: 'mailto:info@hedged.co.za' },
  { icon: Phone, label: 'Phone', value: '+27 84 846 9591', link: 'tel:+27848469591' },
  { icon: MapPin, label: 'Address', value: '58 Columbia Road, Clubview Forum, Centurion, South Africa', link: null },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 08:00–17:00', link: null },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">Get in Touch</h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">Ready to streamline your business operations? Fill in the form below and we'll get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">Send Us an Enquiry</h2>
                <p className="text-muted-foreground mb-8">Fill in the form and our team will get back to you within 24 hours.</p>
                <LeadCaptureForm sourcePage="contact" />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="font-semibold text-foreground hover:text-primary transition-colors text-sm">{info.value}</a>
                      ) : (
                        <p className="font-semibold text-foreground text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Book a free 30-minute consultation to discuss your business needs and how Hedged can help you grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}