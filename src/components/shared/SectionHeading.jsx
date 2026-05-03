import React from 'react';

export default function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {eyebrow && <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}