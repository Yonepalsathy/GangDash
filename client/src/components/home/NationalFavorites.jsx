import React from 'react';
import { ChevronRight, Clock, Star } from 'lucide-react';
import { Card } from '../common/Card';

export const NationalFavorites = () => {
  return (
    <section style={{ backgroundColor: '#F4F1ED', padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '40px', margin: 0 }}>National Favorites</h2>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '18px' }}>See All <ChevronRight size={20}/></a>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {[
            { name: 'McDonald\'s', time: '15-25 min', rating: '4.8', delivery: '$0 with DashPass', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop' },
            { name: 'Taco Bell', time: '20-30 min', rating: '4.6', delivery: '$1.99 Delivery Fee', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop' },
            { name: 'Chick-fil-A', time: '10-20 min', rating: '4.9', delivery: '$0 with DashPass', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop' },
          ].map((store, idx) => (
            <Card key={idx} interactive={true} style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: '24px' }}>
              <div className="image-card-wrapper" style={{ height: '220px', borderRadius: '0' }}>
                <img src={store.img} alt={store.name} className="image-card-img" />
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  padding: '24px 20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  color: '#FFF'
                }}>
                  <h3 style={{ fontSize: '28px', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{store.name}</h3>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ color: 'var(--color-text-dark)', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} color="var(--color-primary)"/> {store.time}</span>
                    <span>•</span>
                    <span>{store.delivery}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#F0F0F0', padding: '6px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: '800' }}>
                    <Star size={14} fill="#111" /> {store.rating}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
