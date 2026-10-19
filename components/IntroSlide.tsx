import React from 'react';
import Link from 'next/link';
import { Feather, Download, ArrowDown } from 'lucide-react';
import { PROJECT } from '@/lib/content';

export const IntroSlide: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16 border-b border-ink/15 bg-parchment-light"
    >
      <div className="absolute inset-4 md:inset-8 border border-gold/40 pointer-events-none" />
      <div className="absolute inset-6 md:inset-10 border border-gold/20 pointer-events-none" />

      <div className="relative max-w-4xl w-full text-center">
        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-ink-muted mb-6">
          {PROJECT.discipline}
        </p>

        <div className="ornament mb-6 text-2xl">✦</div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4 leading-none text-bordo">
          {PROJECT.short}
        </h1>
        <p className="text-xl md:text-3xl font-display text-ink-soft">
          {PROJECT.title} · {PROJECT.subtitle}
        </p>

        <div className="my-10 space-y-1 text-lg md:text-xl text-ink-soft">
          <p>
            Группа <strong className="text-ink">{PROJECT.group}</strong>, {PROJECT.course}
          </p>
          <p>
            {PROJECT.city}, {PROJECT.year}
          </p>
        </div>

        <div className="mb-12 py-8 border-y border-ink/15">
          <p className="text-sm uppercase tracking-widest text-ink-muted mb-4">Авторы проекта</p>
          <ul className="space-y-2 text-lg md:text-xl text-ink">
            {PROJECT.authors.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a href="#project" className="btn-primary">
            К экспозиции
            <ArrowDown className="w-5 h-5" />
          </a>

          <Link href="/quiz" className="btn-outline">
            <Feather className="w-5 h-5" />
            Квиз
          </Link>

          <a
            href="/files/project.docx"
            download="project.docx"
            className="inline-flex items-center gap-2 px-6 py-4 text-ink-soft text-lg underline underline-offset-4 decoration-ink/30 hover:text-bordo hover:decoration-bordo transition-colors"
          >
            <Download className="w-5 h-5" />
            Текстовая информация
          </a>
        </div>
      </div>
    </section>
  );
};
