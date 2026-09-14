import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, Zap, Shield, Users, BarChart2, ChevronRight, MessageSquare } from 'lucide-react';
import { Card } from '../common/Card';

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does JustReview collect reviews automatically?',
      answer: 'JustReview integrates with your CRM, POS, or email system to automatically send review requests to customers after a purchase or interaction. You can customize timing, templates, and channels (email, SMS, WhatsApp) to match your brand voice.',
      icon: Zap,
    },
    {
      question: 'Can I respond to reviews from within JustReview?',
      answer: 'Yes! Our unified inbox lets you respond to reviews from Google, Facebook, Yelp, and 50+ other platforms without leaving the dashboard. You can also set up auto-responses for common scenarios and assign reviews to team members.',
      icon: MessageSquare,
    },
    {
      question: 'How does the AI sentiment analysis work?',
      answer: 'Our AI analyzes review text in real-time to detect sentiment (positive, neutral, negative), key topics, and urgency. Negative reviews trigger instant alerts so your team can respond quickly. You also get weekly trend reports showing emerging issues.',
      icon: BarChart2,
    },
    {
      question: 'Is my data secure and GDPR/CCPA compliant?',
      answer: 'Absolutely. We\'re SOC 2 Type II certified, GDPR and CCPA compliant. All data is encrypted in transit and at rest. You control data retention policies and can export or delete data anytime. We never sell your data.',
      icon: Shield,
    },
    {
      question: 'Can I display reviews on my website?',
      answer: 'Yes! Our customizable widgets (carousel, grid, masonry, badge) embed with a single line of code. They\'re mobile-responsive, SEO-friendly with schema markup, and update in real-time. You can filter by rating, platform, or tags.',
      icon: CheckCircle,
    },
    {
      question: 'What platforms do you integrate with?',
      answer: 'We integrate with 100+ platforms including Salesforce, HubSpot, Shopify, Square, Toast, Slack, Microsoft Teams, Zapier, and major review sites (Google, Facebook, Yelp, TripAdvisor, Angie\'s List, etc.). Custom API access is available on Enterprise plans.',
      icon: Users,
    },
    {
      question: 'How long does setup take?',
      answer: 'Most businesses are live in under 30 minutes. Connect your review platforms, customize your request templates, and add the widget to your site. Our onboarding team offers free guided setup for all paid plans.',
      icon: Zap,
    },
    {
      question: 'What\'s included in the free trial?',
      answer: 'Our 14-day free trial includes all Pro features: unlimited review requests, 3 platform connections, AI sentiment analysis, 2 team seats, and basic widgets. No credit card required. Cancel anytime.',
      icon: HelpCircle,
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container" style={{ padding: '100px 24px 120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Frequently Asked Questions</h2>
        <p style={{ fontSize: '20px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
          Everything you need to know about JustReview. Can\'t find your answer? 
          <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Contact our team</a>
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {faqs.map((faq, idx) => (
          <Card 
            key={idx} 
            interactive={true} 
            style={{ 
              padding: '0', 
              overflow: 'hidden',
              border: openIndex === idx ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
              backgroundColor: openIndex === idx ? 'var(--color-bg)' : '#FFF'
            }}
          >
            <button
              onClick={() => toggleFaq(idx)}
              style={{
                width: '100%',
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              aria-expanded={openIndex === idx}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                <div className="glass" style={{ 
                  padding: '12px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--color-primary)'
                }}>
                  <faq.icon size={24} />
                </div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  margin: 0,
                  color: 'var(--color-text-dark)'
                }}>
                  {faq.question}
                </h3>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: openIndex === idx ? 'var(--color-primary)' : 'var(--color-bg)',
                color: openIndex === idx ? '#FFF' : 'var(--color-text-light)',
                transition: 'all 0.2s ease'
              }}>
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>

            {openIndex === idx && (
              <div style={{ 
                padding: '0 32px 32px',
                animation: 'slideDown 0.3s ease-out'
              }}>
                <div style={{ 
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border)',
                  color: 'var(--color-text-light)',
                  lineHeight: '1.7',
                  fontSize: '16px'
                }}>
                  {faq.answer}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ textAlign: 'center', marginTop: '64px' }}>
        <p style={{ 
          fontSize: '18px', 
          color: 'var(--color-text-light)', 
          marginBottom: '24px',
          maxWidth: '600px',
          margin: '0 auto 24px'
        }}>
          Still have questions? Our team is here to help.
        </p>
        <a 
          href="#" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px',
            padding: '18px 36px',
            backgroundColor: 'var(--color-primary)',
            color: '#FFF',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: '700',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Contact Support <ChevronRight size={24} />
        </a>
      </div>
    </section>
  );
};