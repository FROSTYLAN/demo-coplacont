import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const DownloadIcon: React.FC<IconProps> = (props) => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 10.5V11.125C2.5 11.6223 2.69754 12.0992 3.04917 12.4508C3.40081 12.8025 3.87772 13 4.375 13H10.625C11.1223 13 11.5992 12.8025 11.9508 12.4508C12.3025 12.0992 12.5 11.6223 12.5 11.125V10.5M10 8L7.5 10.5M7.5 10.5L5 8M7.5 10.5V3"
      stroke="#26C954"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UploadIcon: React.FC<IconProps> = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10.5V11.125C3 11.6223 3.19754 12.0992 3.54917 12.4508C3.90081 12.8025 4.37772 13 4.875 13H11.125C11.6223 13 12.0992 12.8025 12.4508 12.4508C12.8025 12.0992 13 11.6223 13 11.125V10.5M10.5 5.5L8 3M8 3L5.5 5.5M8 3V10.5"
      stroke="#F74747"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
