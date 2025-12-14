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
}

export const Loader: React.FC<LoaderProps> = ({ 
  text = 'Cargando...', 
  inline = false, 
  className 
}) => {
  const loaderClass = `${styles.loader} ${inline ? styles.inline : ''} ${className || ''}`.trim();
  
  return (
    <div className={loaderClass}>
      <div className={styles.content}>

        <div className={styles.spinner}>
        <Logo />
        </div>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};

export default Loader;