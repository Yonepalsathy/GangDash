import React, { useState } from 'react';

export const Button = ({ children, variant = 'primary', className = '', style = {}, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'inherit',
    transition: 'all var(--transition-smooth)',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
  };

  const variants = {
    primary: {
      backgroundColor: isHovered ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: '#FFFFFF',
      borderRadius: 'var(--border-radius-pill)',
      boxShadow: isHovered 
        ? `0 6px 16px var(--color-primary-glow)` 
        : `0 4px 10px rgba(235, 23, 0, 0.15)`,
    },
    secondary: {
      backgroundColor: isHovered ? '#EEEEEE' : '#F7F7F7',
      color: 'var(--color-text-dark)',
      borderRadius: 'var(--border-radius-pill)',
      boxShadow: isHovered ? 'var(--shadow-sm)' : 'none',
    },
    ghost: {
      backgroundColor: isHovered ? 'rgba(235, 23, 0, 0.05)' : 'transparent',
      color: 'var(--color-primary)',
      padding: '8px 16px',
      borderRadius: 'var(--border-radius-pill)',
    }
  };

  const combinedStyle = { ...baseStyles, ...variants[variant], ...style };

  return (
    <button 
      style={combinedStyle} 
      className={className} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};
