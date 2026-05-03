import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industryOptions = [
  { value: 'legal', label: 'Legal Services' },
  { value: 'medical', label: 'Medical' },
  { value: 'construction', label: 'Construction' },
  { value: 'retail', label: 'Retail' },
  { value: 'restaurant_hospitality', label: 'Restaurant & Hospitality' },
  { value: 'schools', label: 'Schools' },
  { value: 'non_profit', label: 'Non-Profit' },
  { value: 'it_business', label: 'IT & Business Services' },
  { value: 'other', label: 'Other' },
];

const serviceOptions = [
  { value: 'accounting', label: 'Accounting' },
  { value: 'taxation', label: 'Taxation' },
  { value: 'payroll', label: 'Payroll' },
  { value: 'secretarial', label: 'Secretarial' },
  { value: 'process_optimization', label: 'Process Optimisation' },
  { value: 'business_analytics', label: 'Business Analytics' },
  { value: 'multiple', label: 'Multiple Services' },
];

export default function LeadCaptureForm({ sourcePage = 'contact', preselectedIndustry, preselectedService, compact = false }) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    industry: preselectedIndustry || '',
    service_interest: preselectedService || '',
    message: '',
    source_page: sourcePage,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.Lead.create(formData);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-display font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We've received your enquiry and will be in touch within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name *</Label>
          <Input id="full_name" required placeholder="Your full name" value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required placeholder="your@email.co.za" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+27 XX XXX XXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company / Business Name</Label>
          <Input id="company" placeholder="Your business name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Industry</Label>
          <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
            <SelectTrigger><SelectValue placeholder="Select your industry" /></SelectTrigger>
            <SelectContent>
              {industryOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Service of Interest</Label>
          <Select value={formData.service_interest} onValueChange={(v) => setFormData({ ...formData, service_interest: v })}>
            <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
            <SelectContent>
              {serviceOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      {!compact && (
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={4} placeholder="Tell us about your needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        </div>
      )}
      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" disabled={loading}>
        {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
        {loading ? 'Sending...' : 'Send Enquiry'}
      </Button>
    </form>
  );
}