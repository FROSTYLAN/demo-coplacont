import React from 'react';

interface UnderConstructionProps {
  title?: string;
  message?: string;
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title = "Page in Construction",
  message = "This section is currently under construction. Please check back soon."
}) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div style={{ fontSize: '50px', marginBottom: '20px' }}>🚧</div>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        {title}
      </h1>
      <p style={{ fontSize: '16px', color: '#666' }}>
        {message}
      </p>
    </div>
  );
};

export default UnderConstruction;
