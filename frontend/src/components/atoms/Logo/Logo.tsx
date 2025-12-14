import './Logo.scss';

export interface LogoProps {
  /**
   * Size of the logo (width and height in pixels)
   * @default 40
   */
  size?: number;
  /**
   * Alternative text for accessibility
   * @default "Logo"
   */
  alt?: string;
  /**
   * Width of the logo (in pixels)
   * @default 40
   */
  width?: number;
  /**
   * Height of the logo (in pixels)
   * @default 40
   */
  height?: number;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Custom image source path
   * @default "/images/logo.png"
   */
  src?: string;
  /**
   * Click handler for the logo
   */
  onClick?: () => void;
}

/**
 * Reusable Logo component for displaying square logo images
 * @param props - Logo component props
 * @returns JSX element containing the logo image
 */
export const Logo = ({
  size = 40,
  alt = "Logo",
  className = "",
  src = "/images/logo.png",
  width,
  height,
  onClick
}: LogoProps) => {
  // Determine size variant class
  const getSizeVariant = (size: number) => {
    if (size <= 24) return 'logo--small';
    if (size >= 64) return 'logo--large';
    return '';
  };

  const logoClasses = [
    'logo',
    getSizeVariant(size),
    onClick ? 'logo--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={logoClasses}
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt}
        width={width || size}
        height={height || size} 
        style={{
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};