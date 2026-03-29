import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({
  src,
  alt,
  caption,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  placeholder = null,
}) => {
  // If no src provided, show a beautiful placeholder
  const showPlaceholder = !src;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`image-card ${aspectRatio} ${className}`}
    >
      {showPlaceholder ? (
        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
          {placeholder || (
            <div className="text-center space-y-3 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground font-medium">{alt || 'Tambahkan gambar'}</p>
            </div>
          )}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      {caption && (
        <div className="image-overlay flex items-end p-6">
          <p className="text-white font-medium text-sm">{caption}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ImageCard;
