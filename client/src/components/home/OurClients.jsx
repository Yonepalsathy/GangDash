import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { Card } from '../common/Card';

export const OurClients = () => {
  const clients = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'JustReview transformed how we collect and showcase customer feedback. Our conversion rate increased 34% in the first quarter.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder & CEO',
      company: 'GreenLeaf Naturals',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'The automated review requests saved us 15+ hours per week. Our Google rating went from 4.2 to 4.8 in just two months.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Lead',
      company: 'ScaleUp Labs',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Best investment for our client-facing teams. The sentiment analysis helps us catch issues before they escalate.',
    },
    {
      name: 'David Park',
      role: 'Operations Manager',
      company: 'FreshBite Delivery',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Integration with our existing CRM was seamless. The team loves the real-time alerts for negative reviews.',
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Growth',
      company: 'UrbanFit Studios',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Review widgets on our landing pages boosted trust signals. A/B tests showed 22% higher signup rates.',
    },
    {
      name: 'James Wilson',
      role: 'Owner',
      company: 'Artisan Coffee Co.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Simple, powerful, and the support team is incredible. We\'ve recommended JustReview to every business in our network.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#F4F1ED', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Trusted by Industry Leaders</h2>
          <p style={{ fontSize: '20px', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
            See what our clients have to say about their experience with JustReview
          </p>
        </div>

        <div className="clients-carousel" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '32px' 
        }}>
          {clients.map((client, idx) => (
            <Card key={idx} interactive={true} style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <img 
                  src={client.avatar} 
                  alt={client.name} 
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{client.name}</h4>
                  <p style={{ margin: '4px 0 0', color: 'var(--color-text-light)', fontSize: '14px' }}>
                    {client.role}, {client.company}
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
                ))}
              </div>

              <p style={{ 
                flex: 1, 
                color: 'var(--color-text-dark)', 
                lineHeight: '1.6',
                fontSize: '16px',
                fontStyle: 'italic'
              }}>
                "{client.text}"
              </p>

              <div style={{ 
                marginTop: '24px', 
                paddingTop: '20px', 
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-primary)',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                <MessageSquare size={18} /> Read full case study
              </div>
            </Card>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '64px',
          paddingTop: '48px',
          borderTop: '1px solid var(--color-border)'
        }}>
          <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>About JustReview</h3>
          <p style={{ 
            fontSize: '18px', 
            color: 'var(--color-text-light)', 
            maxWidth: '700px', 
            margin: '0 auto 32px',
            lineHeight: '1.7'
          }}>
            JustReview is the leading review management platform helping businesses of all sizes 
            collect, manage, and showcase authentic customer feedback. Founded in 2019, we've 
            helped over 10,000 businesses build trust and grow through the power of social proof.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--color-primary)' }}>10K+</div>
              <div style={{ color: 'var(--color-text-light)' }}>Businesses</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--color-primary)' }}>2M+</div>
              <div style={{ color: 'var(--color-text-light)' }}>Reviews Collected</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--color-primary)' }}>94%</div>
              <div style={{ color: 'var(--color-text-light)' }}>Retention Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--color-primary)' }}>4.9/5</div>
              <div style={{ color: 'var(--color-text-light)' }}>Avg. Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};