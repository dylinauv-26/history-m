import React from 'react';
import { CONCLUSION } from '@/lib/content';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="w-full mb-32 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-5 text-ink">Что их объединяло</h2>
        <div className="ornament text-xl">✦</div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 text-xl md:text-2xl text-ink-soft leading-relaxed">
        <p>
          {CONCLUSION.intro} <strong className="text-bordo">{CONCLUSION.goal}</strong>. Их вклад
          складывается в единый путь:
        </p>

        <ol className="space-y-6">
          {CONCLUSION.points.map((item, i) => (
            <li key={item.name} className="flex gap-6">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-bordo text-parchment-light font-display font-bold text-2xl flex items-center justify-center">
                {i + 1}
              </span>
              <span className="pt-1">
                <strong className="text-ink">{item.name}</strong> {item.text}
              </span>
            </li>
          ))}
        </ol>

        <p className="pt-8 border-t border-ink/15 text-ink italic">{CONCLUSION.outro}</p>
      </div>
    </section>
  );
};
