import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to log in');
    } finally {
      setIsLoading(false);
    }
  };

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
          <h1 style={{ fontSize: '32px', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Welcome back</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Enter your details to access your account.</p>
        </div>

        {error && (
          <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', color: 'red', padding: '12px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center', fontSize: '14px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-text-dark)' }}>Password</label>
              <a href="#" style={{ fontSize: '13px' }}>Forgot Password?</a>
            </div>
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

          <Button type="submit" variant="primary" style={{ width: '100%', padding: '16px', marginTop: '8px', fontSize: '16px' }} disabled={isLoading}>
            {isLoading ? 'Logging In...' : 'Log In'}
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: 'var(--color-text-light)' }}>
          Don't have an account? <span onClick={() => navigate('/signup')} style={{ color: 'var(--color-primary)', fontWeight: '700', cursor: 'pointer' }}>Sign up</span>
        </div>
      </div>
    </div>
  );
};
