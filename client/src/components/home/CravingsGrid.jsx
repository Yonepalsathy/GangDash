import React from 'react';

export const CravingsGrid = () => {
  return (
    <section className="container" style={{ padding: '100px 24px' }}>
      <h2 style={{ fontSize: '40px', textAlign: 'left', marginBottom: '48px' }}>What's on the menu?</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '32px',
      }}>
        {[
          { name: 'Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop' },
          { name: 'Sushi', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop' },
          { name: 'Burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
          { name: 'Healthy', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop' },
          { name: 'Desserts', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop' },
          { name: 'Coffee', img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop' },
        ].map((cat, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', cursor: 'pointer' }} className="image-card-wrapper">
            <div style={{ width: '100%', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={cat.img} alt={cat.name} className="image-card-img" />
            </div>
            <span style={{ fontWeight: '800', fontSize: '18px' }}>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
