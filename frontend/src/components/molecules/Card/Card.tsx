import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  variant = 'default',
  padding = 'medium',
  onClick,
  className = '',
}) => {
  const cardClassName = `card card--${variant} card--padding-${padding} ${onClick ? 'card--clickable' : ''} ${className}`;

  return (
    <div className={cardClassName} onClick={onClick}>
      {(title || subtitle) && (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      )}
      
      <div className="card__content">
        {children}
      </div>
      
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;