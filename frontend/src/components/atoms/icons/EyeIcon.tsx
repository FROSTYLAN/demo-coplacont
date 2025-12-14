import React from 'react';

export interface EyeIconProps {
  /**
   * Ancho del ícono en píxeles
   */
  width?: number;
  /**
   * Alto del ícono en píxeles
   */
  height?: number;
  /**
   * Color del trazo del ícono
   */
  color?: string;
  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente de ícono de ojo abierto (mostrar contraseña)
 */
export const EyeIcon: React.FC<EyeIconProps> = ({
  width = 23,
  height = 23,
  color = 'var(--text-color)',
  className
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 23 23" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M20.6462 10.5848C20.9375 10.993 21.0832 11.1981 21.0832 11.5C21.0832 11.8028 20.9375 12.0069 20.6462 12.4152C19.3371 14.2514 15.9935 18.2083 11.4998 18.2083C7.00525 18.2083 3.66259 14.2504 2.3535 12.4152C2.06217 12.0069 1.9165 11.8019 1.9165 11.5C1.9165 11.1972 2.06217 10.993 2.3535 10.5848C3.66259 8.74862 7.00621 4.79166 11.4998 4.79166C15.9944 4.79166 19.3371 8.74957 20.6462 10.5848Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14.375 11.5C14.375 10.7375 14.0721 10.0062 13.5329 9.46707C12.9938 8.9279 12.2625 8.625 11.5 8.625C10.7375 8.625 10.0062 8.9279 9.46707 9.46707C8.9279 10.0062 8.625 10.7375 8.625 11.5C8.625 12.2625 8.9279 12.9938 9.46707 13.5329C10.0062 14.0721 10.7375 14.375 11.5 14.375C12.2625 14.375 12.9938 14.0721 13.5329 13.5329C14.0721 12.9938 14.375 12.2625 14.375 11.5Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;