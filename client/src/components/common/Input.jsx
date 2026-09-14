import React, { useState } from 'react';

export const Input = ({ icon, className = '', style = {}, containerStyle = {}, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div 
      style={{ 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%',
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--border-radius-pill)',
        border: `2px solid ${isFocused ? 'var(--color-primary)' : 'transparent'}`,
        boxShadow: isFocused ? '0 0 0 4px var(--color-primary-glow)' : 'var(--shadow-md)',
        transition: 'all var(--transition-smooth)',
        ...containerStyle
      }}
    >
      {icon && (
        <div style={{ 
          position: 'absolute', 
          left: '20px', 
          color: isFocused ? 'var(--color-primary)' : 'var(--color-text-light)',
          transition: 'color var(--transition-smooth)'
        }}>
          {icon}
        </div>
      )}
      <input
        style={{
          width: '100%',
          padding: `18px 24px 18px ${icon ? '52px' : '24px'}`,
          fontSize: '16px',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          color: 'var(--color-text-dark)',
          fontFamily: 'inherit',
          ...style
        }}
        className={className}
        onFocus={(e) => {
          setIsFocused(true);
          if (props.onFocus) props.onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (props.onBlur) props.onBlur(e);
        }}
        {...props}
      />
    </div>
  );
};
