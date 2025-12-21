import React from 'react';
import styles from './Loader.module.scss';
import { Logo } from '../Logo';

export interface LoaderProps {
  /** Texto a mostrar debajo del spinner */
  text?: string;
  /** Variante inline para uso dentro de contenedores específicos */
  inline?: boolean;
  /** Clase CSS adicional */
  className?: string;
  /** Aviso adicional */
  note?: string;
  /** Mostrar el aviso sobre el spinner */
  noteAbove?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ 
  text = 'Cargando...', 
  inline = false, 
  className,
  note,
  noteAbove = false,
}) => {
  const loaderClass = `${styles.loader} ${inline ? styles.inline : ''} ${className || ''}`.trim();
  
  return (
    <div className={loaderClass}>
      <div className={styles.content}>
        {note && noteAbove && (
          <div className={styles.note}>{note}</div>
        )}

        <div className={styles.spinner}>
        <Logo />
        </div>
        <span className={styles.text}>{text}</span>
        {note && !noteAbove && (
          <div className={styles.note}>{note}</div>
        )}
      </div>
    </div>
  );
};

export default Loader;
