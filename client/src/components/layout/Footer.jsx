import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#FFFFFF', 
      padding: '100px 24px 40px',
      marginTop: 'auto',
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', paddingBottom: '80px', borderBottom: '1px solid #222' }}>
        <div>
          <h4 style={{ marginBottom: '32px', color: '#FFF', fontSize: '20px' }}>Top Cities</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>New York City</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Los Angeles</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Chicago</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Houston</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '32px', color: '#FFF', fontSize: '20px' }}>Top Cuisines</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Pizza Near Me</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Chinese Food</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Sushi Near Me</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Mexican Food</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '32px', color: '#FFF', fontSize: '20px' }}>Get to Know Us</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>About Us</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Careers</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Investors</a></li>
            <li><a href="#" style={{ color: '#A0A0A0', fontWeight: '500', transition: 'color 0.2s' }}>Company Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ color: '#666', fontSize: '16px', fontWeight: '500' }}>
          &copy; 2026 GangDash Inc. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
           <a href="#" style={{ color: '#666', fontWeight: '500', fontSize: '16px' }}>Privacy Policy</a>
           <a href="#" style={{ color: '#666', fontWeight: '500', fontSize: '16px' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
