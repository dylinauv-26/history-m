import React from 'react';
import { BookOpen, ImageIcon } from 'lucide-react';
import { SOURCES, IMAGE_SOURCES } from '@/lib/sources';
import { SourceList } from './SourceList';

export const SourcesSection: React.FC = () => {
  return (
    <section id="sources" className="w-full mb-24 scroll-mt-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5 text-ink">
          <BookOpen className="w-8 h-8 text-bordo" />
          <h2 className="text-4xl md:text-6xl font-bold font-display">Источники</h2>
        </div>
        <div className="ornament text-xl">✦</div>
        <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-2xl mx-auto">
          Материалы, использованные при подготовке проекта
        </p>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold font-display text-center mb-8 text-ink-soft">
        Текстовые и справочные материалы
      </h3>
      <SourceList items={SOURCES} />

      <div className="mt-20 mb-10 flex items-center justify-center gap-3">
        <ImageIcon className="w-7 h-7 text-bordo" />
        <h3 className="text-2xl md:text-3xl font-bold font-display text-ink-soft">
          Источники изображений и 3D-моделей
        </h3>
      </div>
      <SourceList items={IMAGE_SOURCES} startIndex={SOURCES.length} />

      <p className="mt-10 text-center text-base md:text-lg text-ink-muted">
        Полный текст проекта доступен в разделе «Текстовая информация» на титульном слайде.
      </p>
    </section>
  );
};
