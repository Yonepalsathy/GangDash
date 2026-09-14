import React, { useState } from 'react';

export const Card = ({ children, className = '', style = {}, interactive = false, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--border-radius-card)',
        padding: '32px',
        border: '1px solid rgba(0,0,0,0.03)',
        boxShadow: (interactive && isHovered) ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'all var(--transition-smooth)',
        transform: (interactive && isHovered) ? 'translateY(-6px)' : 'translateY(0)',
        cursor: interactive ? 'pointer' : 'default',
        ...style
      }}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};
