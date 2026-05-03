import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ quote, name, company }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{quote}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{company}</p>
      </div>
    </div>
  );
}