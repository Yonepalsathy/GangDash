import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="glass-panel" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '16px 32px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div 
        onClick={() => navigate('/')}
        style={{ 
          fontSize: '28px', 
          fontWeight: '900', 
          color: 'var(--color-primary)', 
          letterSpacing: '-1.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}
      >
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--color-primary)', 
          borderRadius: '10px',
          transform: 'rotate(15deg)'
        }}></div>
        Gang<span style={{ color: 'var(--color-text-dark)' }}>Dash</span>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {user ? (
          <>
            <div style={{ fontWeight: '600', color: 'var(--color-text-dark)' }}>
              Welcome, {user.name}
            </div>
            <Button variant="ghost" style={{ fontWeight: '600', color: 'red' }} onClick={logout}>Log Out</Button>
          </>
        ) : (
          <>
            <Button variant="ghost" style={{ fontWeight: '600' }} onClick={() => navigate('/login')}>Log In</Button>
            <Button variant="primary" style={{ padding: '12px 24px' }} onClick={() => navigate('/signup')}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};
