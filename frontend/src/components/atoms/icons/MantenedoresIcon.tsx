import React, { useContext } from "react";
import { ThemeContext } from '../../../shared/context/ThemeContext';

export const MantenedoresIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { theme } = useContext(ThemeContext);
  const strokeColor = theme === 'dark' ? '#fff' : '#1F1F1F';
  
  return (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.66667 10.667H10.6667M13.3333 4.00033V12.0003C13.3333 12.3539 13.1929 12.6931 12.9428 12.9431C12.6928 13.1932 12.3536 13.3337 12 13.3337H5.33333C4.97971 13.3337 4.64057 13.1932 4.39052 12.9431C4.14048 12.6931 4 12.3539 4 12.0003V4.00033C4 3.6467 4.14048 3.30756 4.39052 3.05752C4.64057 2.80747 4.97971 2.66699 5.33333 2.66699H12C12.3536 2.66699 12.6928 2.80747 12.9428 3.05752C13.1929 3.30756 13.3333 3.6467 13.3333 4.00033Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66663 5.33398H4.66663M2.66663 8.00065H4.66663M2.66663 10.6673H4.66663M7.33329 7.33398C7.33329 7.68761 7.47377 8.02674 7.72382 8.27679C7.97387 8.52684 8.313 8.66732 8.66663 8.66732C9.02025 8.66732 9.35939 8.52684 9.60943 8.27679C9.85948 8.02674 9.99996 7.68761 9.99996 7.33398C9.99996 6.98036 9.85948 6.64122 9.60943 6.39118C9.35939 6.14113 9.02025 6.00065 8.66663 6.00065C8.313 6.00065 7.97387 6.14113 7.72382 6.39118C7.47377 6.64122 7.33329 6.98036 7.33329 7.33398Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};
