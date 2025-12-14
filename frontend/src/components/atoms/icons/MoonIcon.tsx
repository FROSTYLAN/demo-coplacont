import React, { useContext } from "react";
import { ThemeContext } from '../../../shared/context/ThemeContext';

type LogoMarkProps = React.SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
};

export const MoonIcon: React.FC<LogoMarkProps> = ({
  width = 18,
  height = 18,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const strokeColor = theme === 'dark' ? '#F6F6F6' : '#00000040';

  return(
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 1.49402C7.64228 1.49427 6.31009 1.86307 5.14554 2.56109C3.98099 3.25911 3.02777 4.26016 2.38755 5.45746C1.74733 6.65475 1.44412 8.00338 1.51028 9.35949C1.57645 10.7156 2.00949 12.0283 2.76322 13.1576C3.51695 14.2869 4.56309 15.1904 5.79006 15.7717C7.01702 16.3531 8.37878 16.5905 9.73008 16.4585C11.0814 16.3266 12.3715 15.8304 13.4629 15.0227C14.5543 14.215 15.4059 13.1263 15.927 11.8725C16.1827 11.2575 15.57 10.6395 14.9535 10.89C13.8969 11.318 12.7237 11.3622 11.6379 11.0148C10.5521 10.6675 9.62232 9.95059 9.0103 8.98878C8.39829 8.02698 8.1427 6.8811 8.28798 5.75038C8.43326 4.61966 8.97022 3.57562 9.8055 2.79977L9.86325 2.73977C10.2765 2.26727 9.948 1.50002 9.29475 1.50002H9.09525L9.04425 1.49552L9 1.49402Z"
      fill={strokeColor}
    />
  </svg>
)};
