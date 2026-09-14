import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '440px', padding: '48px', borderRadius: '32px', position: 'relative' }}>
        <div 
          onClick={() => navigate('/')} 
          style={{ position: 'absolute', top: '24px', left: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)', fontWeight: '600', fontSize: '14px', transition: 'color var(--transition-fast)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
        >
          <ArrowLeft size={16} /> Back
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '16px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Create Account</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Join GangDash and start your journey.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); console.log('Signup', { name, email, password }); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
                <User size={20} />
              </div>
              <input 
                type="text" 
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  borderRadius: '16px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  fontSize: '16px',
                  transition: 'all var(--transition-fast)',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  borderRadius: '16px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  fontSize: '16px',
                  transition: 'all var(--transition-fast)',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
                <Lock size={20} />
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  borderRadius: '16px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  fontSize: '16px',
                  transition: 'all var(--transition-fast)',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
          </div>

          <Button type="submit" variant="primary" style={{ width: '100%', padding: '16px', marginTop: '8px', fontSize: '16px' }}>
            Create Account
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: 'var(--color-text-light)' }}>
          Already have an account? <span onClick={() => navigate('/login')} style={{ color: 'var(--color-primary)', fontWeight: '700', cursor: 'pointer' }}>Log in</span>
        </div>
      </div>
    </div>
  );
};
