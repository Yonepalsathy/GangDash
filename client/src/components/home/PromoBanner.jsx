import React from 'react';
import { Ticket } from 'lucide-react';
import { Button } from '../common/Button';

export const PromoBanner = () => {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div className="container">
        <div className="image-card-wrapper" style={{ 
          borderRadius: '32px', 
          color: '#FFF',
          position: 'relative',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" alt="Delicious Food" className="image-card-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)', zIndex: -1 }}></div>
          
          <div style={{ padding: '64px', maxWidth: '600px', position: 'relative', zIndex: 1 }}>
            <div className="glass-dark" style={{ padding: '8px 16px', borderRadius: '99px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontWeight: '700' }}>
              <Ticket size={20} color="#FFB800" /> Exclusive Member Benefits
            </div>
            <h2 style={{ fontSize: '48px', color: '#FFF', marginBottom: '24px', lineHeight: '1.1' }}>Unlock $0 delivery fees</h2>
            <p style={{ fontSize: '20px', color: '#E0E0E0', marginBottom: '40px', fontWeight: '400' }}>
              Get DashPass for exclusive deals, $0 delivery fees on eligible orders, and 5% back on pickup orders.
            </p>
            <Button variant="primary" style={{ padding: '20px 40px', fontSize: '20px' }}>
              Try DashPass Free for 30 Days
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
