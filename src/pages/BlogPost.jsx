import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import CTABanner from '@/components/shared/CTABanner';

export default function BlogPostPage() {
  const pathParts = window.location.pathname.split('/blog/');
  const postId = pathParts.length > 1 ? pathParts[1] : null;

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }),
    enabled: true,
  });

  const post = posts.find(p => p.id === postId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Post not found.</p>
        <Link to="/blog"><Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" />Back to Blog</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <section className="py-32 bg-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          {post.category && <Badge variant="secondary" className="mb-4">{post.category.replace(/_/g, ' ')}</Badge>}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-background mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-background/60">
            {post.author && <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>}
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{format(new Date(post.created_date), 'MMMM d, yyyy')}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.cover_image && <img src={post.cover_image} alt={post.title} className="w-full rounded-2xl mb-10 shadow-lg" />}
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>

      <CTABanner title="Need Expert Financial Help?" subtitle="Contact Hedged today for a free consultation." />
    </div>
  );
}