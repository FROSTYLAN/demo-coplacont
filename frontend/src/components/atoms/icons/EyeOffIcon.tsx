import React from 'react';

export interface EyeOffIconProps {
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
 * Componente de ícono de ojo tachado (ocultar contraseña)
 */
export const EyeOffIcon: React.FC<EyeOffIconProps> = ({
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
        d="M2.875 7.66669C3.17914 8.25093 3.63997 8.79292 4.22757 9.27448C5.87506 10.6247 8.5191 11.5 11.5 11.5C14.4809 11.5 17.1249 10.6247 18.7724 9.27448C19.36 8.79292 19.8209 8.25093 20.125 7.66669" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.8853 11.5L14.8774 15.2027" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M17.8989 10.2319L20.6095 12.9425" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M2.396 12.9425L5.10657 10.2319" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8.11133 15.2028L9.10344 11.5001" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeOffIcon;