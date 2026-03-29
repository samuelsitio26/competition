import React from 'react';
import AnimatedSection from './AnimatedSection';
import ImageCard from './ImageCard';

const ImageShowcase = ({ images = [], title, description, columns = 3 }) => {
  const colClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {(title || description) && (
            <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
              {title && <h2 className="heading-2">{title}</h2>}
              {description && <p className="body-text">{description}</p>}
            </AnimatedSection>
          )}

          <div className={`grid ${colClass[columns] || colClass[3]} gap-6`}>
            {images.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <ImageCard
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                  aspectRatio={image.aspectRatio || 'aspect-[4/3]'}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
