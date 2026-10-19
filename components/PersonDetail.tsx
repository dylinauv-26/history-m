import React from 'react';
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ImageWithCaption } from './ImageWithCaption';
import type { Person } from '@/lib/content';

const Model3DViewer = dynamic(() => import('./Model3DViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] ultrawide:h-[800px] bg-parchment-dark border border-ink/20 flex items-center justify-center">
      <span className="text-ink-muted text-lg italic">Загрузка 3D-модели...</span>
    </div>
  ),
});

interface PersonDetailProps {
  person: Person;
}

export const PersonDetail: React.FC<PersonDetailProps> = ({ person }) => {
  const [first, ...rest] = person.paragraphs;

  return (
    <section className="w-full mb-32 scroll-mt-24" id={`person-${person.number}`}>
      <div className="mb-16 text-center">
        <div className="inline-block bg-bordo text-parchment-light px-4 py-1 text-xs uppercase tracking-[0.2em] mb-5">
          Зал {person.number}
        </div>
        <h2 className="text-5xl md:text-7xl font-bold font-display mb-3 text-ink">{person.name}</h2>
        <p className="text-lg md:text-xl text-ink-muted mb-5">
          {person.years} · {person.role}
        </p>
        <div className="ornament text-xl">✦</div>
      </div>

      <div className="w-full mb-16">
        <Model3DViewer modelPath={person.modelPath} autoRotate={true} />
        <p className="mt-4 text-lg md:text-xl text-ink-muted text-center italic">{person.modelAlt}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-10 gap-12 ultrawide:gap-20">
        <div className="lg:col-span-4 xl:col-span-3">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display text-bordo sticky top-28">
            Биография и роль
          </h3>
        </div>

        <div className="lg:col-span-8 xl:col-span-7 text-ink-soft text-xl md:text-[1.3rem] leading-relaxed [&_p]:mb-6">
          <p className="first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-bordo first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
            {first}
          </p>
          {rest.map((text, i) => (
            <p key={i}>{text}</p>
          ))}

          {person.quote && (
            <blockquote className="my-10 px-8 py-8 border-l-4 border-bordo bg-parchment-dark/60">
              <p className="italic font-display text-2xl md:text-3xl leading-snug text-ink !mb-3">
                «{person.quote}»
              </p>
              {person.quoteAuthor && (
                <footer className="text-base text-ink-muted not-italic">— {person.quoteAuthor}</footer>
              )}
            </blockquote>
          )}

          <div className="mt-12 flex flex-col md:flex-row items-start gap-6 p-6 border border-ink/20 bg-parchment-light">
            <MapPin className="w-8 h-8 flex-shrink-0 mt-1 text-bordo" />
            <div>
              <p className="text-xl md:text-2xl !mb-0">
                {person.locationTitle}
                <strong className="text-ink font-display text-3xl md:text-4xl block mt-2 leading-tight">
                  {person.locationName}
                </strong>
              </p>
              <p className="text-base md:text-lg text-ink-muted uppercase tracking-wide mt-3 !mb-0">
                {person.locationCity}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ImageWithCaption
        src={person.locationImage}
        alt={person.locationName}
        caption={person.locationImageCaption}
        containerClassName="mt-16"
      />
    </section>
  );
};
