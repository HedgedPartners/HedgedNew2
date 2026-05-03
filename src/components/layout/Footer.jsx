import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const services = [
  { name: 'Accounting', path: '/services' },
  { name: 'Taxation', path: '/services' },
  { name: 'Payroll', path: '/services' },
  { name: 'Secretarial', path: '/services' },
  { name: 'Process Optimisation', path: '/services' },
  { name: 'Business Analytics', path: '/services' },
];

const industries = [
  { name: 'Legal Services', path: '/industries/legal' },
  { name: 'Medical', path: '/industries/medical' },
  { name: 'Construction', path: '/industries/construction' },
  { name: 'Retail', path: '/industries/retail' },
  { name: 'Restaurant & Hospitality', path: '/industries/restaurant-hospitality' },
  { name: 'Schools', path: '/industries/schools' },
  { name: 'Non-Profit', path: '/industries/non-profit' },
  { name: 'IT & Business', path: '/industries/it-business' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold tracking-wider">HEDG</span>
              <span className="text-2xl font-bold tracking-wider text-primary">ED</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Leading provider of turnkey accounting, payroll, secretarial and process optimisation services in South Africa.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@hedged.co.za" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@hedged.co.za
              </a>
              <a href="tel:+27848469591" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +27 84 846 9591
              </a>
              <div className="flex items-start gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4 text-primary mt-0.5" /> 58 Columbia Road, Clubview, Centurion
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Clock className="w-4 h-4 text-primary" /> Mon–Fri: 08:00–17:00
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link to={s.path} className="text-sm text-background/60 hover:text-primary transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.name}>
                  <Link to={i.path} className="text-sm text-background/60 hover:text-primary transition-colors">{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-background/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-sm text-background/60 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-sm text-background/60 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-background/60 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
            <div className="mt-8 p-4 bg-background/5 rounded-xl border border-background/10">
              <p className="text-xs text-background/40 mb-1">Affiliated with</p>
              <p className="text-sm font-medium text-primary">SAIPA</p>
              <p className="text-xs text-background/40">South African Institute of Professional Accountants</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">© {new Date().getFullYear()} Hedged. All rights reserved.</p>
          <p className="text-xs text-background/40">Accounting, Taxation & Business Process Optimisation</p>
        </div>
      </div>
    </footer>
  );
}