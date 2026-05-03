import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ 
  title = "Ready to Streamline Your Business?",
  subtitle = "Get a free consultation and discover how Hedged can transform your financial operations.",
  buttonText = "Get Your Free Quote",
  dark = true
}) {
  return (
    <section className={`py-20 ${dark ? 'bg-foreground text-background' : 'bg-primary text-primary-foreground'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
        <p className={`text-lg mb-8 ${dark ? 'text-background/70' : 'text-primary-foreground/80'}`}>
          {subtitle}
        </p>
        <Link to="/contact">
          <Button size="lg" className={`font-semibold px-8 py-6 text-base ${dark ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-background hover:bg-background/90 text-foreground'}`}>
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}