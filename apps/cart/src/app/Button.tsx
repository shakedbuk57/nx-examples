import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const baseStyles = {
    padding: size === 'small' ? '6px 12px' : size === 'large' ? '12px 24px' : '8px 16px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    fontWeight: 500,
    transition: 'all 0.2s ease',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#007bff',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#ffffff',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#007bff',
      border: '2px solid #007bff',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyles}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
