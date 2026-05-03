import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import SectionHeading from '@/components/shared/SectionHeading';
import CTABanner from '@/components/shared/CTABanner';

const categoryLabels = {
  accounting: 'Accounting',
  taxation: 'Taxation',
  payroll: 'Payroll',
  business_tips: 'Business Tips',
  industry_insights: 'Industry Insights',
  compliance: 'Compliance',
  technology: 'Technology',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-created_date'),
    initialData: [],
  });

  const filtered = activeCategory === 'all' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Blog & Insights</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background mb-6">Expert Financial Insights</h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">Stay informed with the latest accounting tips, tax updates, and business advice from our team of experts.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <Button size="sm" variant={activeCategory === 'all' ? 'default' : 'outline'} onClick={() => setActiveCategory('all')}>All</Button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Button key={key} size="sm" variant={activeCategory === key ? 'default' : 'outline'} onClick={() => setActiveCategory(key)}>{label}</Button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3].map(i => (
                <div key={i} className="bg-card rounded-2xl border border-border p-6 animate-pulse">
                  <div className="h-48 bg-muted rounded-xl mb-4" />
                  <div className="h-4 bg-muted rounded w-1/3 mb-3" />
                  <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link to={`/blog/${post.id}`} className="block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all group h-full">
                    {post.cover_image && (
                      <div className="h-48 overflow-hidden">
                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && <Badge variant="secondary" className="mb-3 text-xs">{categoryLabels[post.category] || post.category}</Badge>}
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {post.author && <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>}
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{format(new Date(post.created_date), 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No blog posts yet — check back soon!</p>
              <p className="text-sm text-muted-foreground">We're working on expert content to help your business thrive.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner title="Want Personalised Advice?" subtitle="Our team of experts is ready to help your business. Get a free consultation today." />
    </div>
  );
}