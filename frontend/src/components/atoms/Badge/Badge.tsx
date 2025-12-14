import React from 'react';
import styles from './Badge.module.scss';

/**
 * Badge component props interface
 */
export interface BadgeProps {
  /** Badge text content */
  children: React.ReactNode;
  /** Badge variant/color */
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'default';
  /** Badge size */
  size?: 'small' | 'medium' | 'large';
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Reusable Badge component for displaying status, categories, or labels
 * @param props - Badge component props
 * @returns JSX element
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  onClick
}) => {
  const badgeClasses = [
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${size}`],
    onClick ? styles['badge--clickable'] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <span 
      className={badgeClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </span>
  );
};

export default Badge;