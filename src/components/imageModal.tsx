import React, { useState } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  width?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, width = '400px' }) => {
  const [open, setOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false); 
  
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
          onClick={() => {
            setOpen(false);
            setIsRotated(false);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
        >
          {/* Roter-knapp (øverst til venstre) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsRotated(!isRotated);
            }}
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '10px 16px',
              borderRadius: '8px',
              fontSize: '1rem',
              backdropFilter: 'blur(4px)',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            🔄
          </button>

          {/* Tilbake-knapp (øverst til høyre) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              setIsRotated(false);
            }}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '10px 16px',
              borderRadius: '8px',
              fontSize: '1rem',
              backdropFilter: 'blur(4px)',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            🔙
          </button>

          {/* Bildet */}
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: '12px',
              transform: isRotated ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        </div>
      )}
    </>
  );
};

export default ImageModal;