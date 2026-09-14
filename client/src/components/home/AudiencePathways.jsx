import React from 'react';
import { Bike, ChevronRight, Smartphone, Store } from 'lucide-react';
import { Card } from '../common/Card';

export const AudiencePathways = () => {
  return (
    <section className="container" style={{ padding: '80px 24px 120px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        <Card interactive={true} style={{ display: 'flex', flexDirection: 'column', height: '100%', border: 'none', background: 'linear-gradient(to bottom, #FFF, #FEF1EE)' }}>
          <div style={{ padding: '20px', backgroundColor: '#FFF', borderRadius: '50%', width: 'fit-content', marginBottom: '32px', boxShadow: 'var(--shadow-sm)' }}>
            <Bike size={36} color="var(--color-primary)" />
          </div>
          <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Become a Dasher</h3>
          <p style={{ marginBottom: '40px', color: 'var(--color-text-light)', flex: 1, fontSize: '18px' }}>
            As a delivery driver, you'll make reliable money—working anytime, anywhere.
          </p>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '20px', color: 'var(--color-primary)' }}>
            Start earning <ChevronRight size={24} />
          </a>
        </Card>
        
        <Card interactive={true} style={{ display: 'flex', flexDirection: 'column', height: '100%', border: 'none', background: 'linear-gradient(to bottom, #FFF, #FEF1EE)' }}>
          <div style={{ padding: '20px', backgroundColor: '#FFF', borderRadius: '50%', width: 'fit-content', marginBottom: '32px', boxShadow: 'var(--shadow-sm)' }}>
            <Store size={36} color="var(--color-primary)" />
          </div>
          <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Become a Partner</h3>
          <p style={{ marginBottom: '40px', color: 'var(--color-text-light)', flex: 1, fontSize: '18px' }}>
            Grow your business and reach new customers by partnering with us.
          </p>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '20px', color: 'var(--color-primary)' }}>
            Sign up your store <ChevronRight size={24} />
          </a>
        </Card>

        <Card interactive={true} style={{ display: 'flex', flexDirection: 'column', height: '100%', border: 'none', background: 'linear-gradient(to bottom, #FFF, #FEF1EE)' }}>
          <div style={{ padding: '20px', backgroundColor: '#FFF', borderRadius: '50%', width: 'fit-content', marginBottom: '32px', boxShadow: 'var(--shadow-sm)' }}>
            <Smartphone size={36} color="var(--color-primary)" />
          </div>
          <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Get the App</h3>
          <p style={{ marginBottom: '40px', color: 'var(--color-text-light)', flex: 1, fontSize: '18px' }}>
            Experience the best your neighborhood has to offer, all in one app.
          </p>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '20px', color: 'var(--color-primary)' }}>
            Get the app <ChevronRight size={24} />
          </a>
        </Card>
      </div>
    </section>
  );
};
