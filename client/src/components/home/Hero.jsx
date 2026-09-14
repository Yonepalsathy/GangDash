import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

export const Hero = () => {
  return (
    <section className="hero-bg" style={{
      padding: '160px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
        zIndex: 1
      }}></div>

      <h1 style={{ 
        fontSize: '72px', 
        fontWeight: '900',
        maxWidth: '900px', 
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 10,
        textShadow: '0 4px 24px rgba(0,0,0,0.3)'
      }}>
        Restaurants and more, <br/>
        <span style={{ color: '#FFB800' }}>delivered to your door.</span>
      </h1>
      
      <div className="glass-card" style={{ 
        display: 'flex', 
        width: '100%', 
        maxWidth: '800px',
        gap: '12px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        padding: '12px',
        borderRadius: '99px',
        marginTop: '48px'
      }}>
        <div style={{ flex: 1 }}>
          <Input 
            icon={<MapPin size={24} />} 
            placeholder="Enter your delivery address" 
            style={{ fontSize: '18px', padding: '20px 24px 20px 60px' }}
            containerStyle={{ boxShadow: 'none', border: 'none', backgroundColor: 'transparent' }}
          />
        </div>
        <Button variant="primary" style={{ padding: '20px 48px', fontSize: '20px' }}>
          Search <ChevronRight size={24} style={{ marginLeft: '8px' }}/>
        </Button>
      </div>
      
      <p style={{ marginTop: '32px', fontSize: '18px', color: '#E0E0E0', position: 'relative', zIndex: 10, fontWeight: '500', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
        <a href="#" style={{ color: '#FFF', textDecoration: 'underline' }}>Sign in</a> for your recent addresses
      </p>
    </section>
  );
};
