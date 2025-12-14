import React from 'react';
import styles from './Text.module.scss';

/**
 * Propiedades del componente Text
 */
export interface TextProps {
  /** Contenido del texto */
  children: React.ReactNode;
  /** Tamaño del texto */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  /** Peso de la fuente (400, 500, 600) */
    weight?: 400 | 500 | 600;
    /** Color del texto */
    color?: 'primary' | 'secondary' | 'neutral-primary' | 'neutral-secondary' | 'disabled' | 'success' | 'danger' | 'warning' | 'info';
  /** Elemento HTML a renderizar */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'|'label';
  /** Clases CSS adicionales */
  className?: string;
  /** Alineación del texto */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Altura de línea */
  lineHeight?: 'tight' | 'normal' | 'relaxed';
}

/**
 * Componente Text reutilizable para mostrar cualquier texto en el proyecto
 * Soporta diferentes tamaños, colores, pesos de fuente y elementos HTML
 */
export const Text: React.FC<TextProps> = ({
  children,
  size = 'md',
  weight = 400,
  color = 'primary',
  as: Component = 'p',
  className = '',
  align = 'left',
  lineHeight = 'normal'
}) => {
  /**
   * Genera las clases CSS basadas en las props
   */
  const getTextClasses = (): string => {
    const classes = [
      styles.text,
      styles[`text--size-${size}`],
      styles[`text--weight-${weight}`],
      styles[`text--color-${color}`],
      styles[`text--align-${align}`],
      styles[`text--line-height-${lineHeight}`]
    ];

    if (className) {
      classes.push(className);
    }

    return classes.filter(Boolean).join(' ');
  };

  return (
    <Component className={getTextClasses()}>
      {children}
    </Component>
  );
};