'use client';

import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  containerClassName?: string;
  heightClassName?: string;
  imageClassName?: string;
}

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
  containerClassName = '',
  heightClassName = 'h-[400px] md:h-[600px] lg:h-[700px] ultrawide:h-[800px]',
  imageClassName = 'w-full h-full object-cover sepia-[.35] group-hover:sepia-0 transition-all duration-700',
}) => {

  return (
    <figure className={containerClassName}>
      <div className={`overflow-hidden border border-ink/20 bg-parchment-dark group shadow-[0_10px_30px_-15px_rgba(43,29,22,0.45)] ${heightClassName}`}>
          <img src={src} alt={alt} className={imageClassName} />
      </div>
      <figcaption className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed border-l-2 border-bordo/60 pl-5 max-w-5xl text-left">
        {caption}
      </figcaption>
    </figure>
  );
};
