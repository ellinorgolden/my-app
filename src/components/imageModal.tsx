import React, { useState } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  width?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, width = '400px' }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{
          width,
          cursor: 'pointer',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          margin: '1rem'
        }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation(); // Hindrer at modal lukkes når man klikker på knappen
              setOpen(false);
            }}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🔙 Tilbake
          </button>
        </div>
      )}
    </>
  );
};

export default ImageModal;