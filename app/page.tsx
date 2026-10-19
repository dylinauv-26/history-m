import React from 'react';
import Link from 'next/link';
import { Landmark, Info, Feather, Download } from 'lucide-react';
import { PersonDetail } from '@/components/PersonDetail';
import { IntroSlide } from '@/components/IntroSlide';
import { ConclusionSection } from '@/components/ConclusionSection';
import { SourcesSection } from '@/components/SourcesSection';
import { ImageWithCaption } from '@/components/ImageWithCaption';
import { PERSONS, PROJECT } from '@/lib/content';

const navLink = 'flex items-center gap-2 text-sm uppercase tracking-widest text-ink-soft hover:text-bordo transition-colors';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-parchment text-ink selection:bg-bordo selection:text-parchment-light">
      <IntroSlide />

      <nav className="w-full px-6 py-4 border-b border-ink/15 flex justify-between items-center sticky top-0 bg-parchment/90 backdrop-blur-sm z-50">
        <a href="#intro" className="text-2xl font-display font-bold tracking-wide text-bordo hover:text-bordo-dark transition-colors">
          {PROJECT.short}
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <a href="#project" className={`${navLink} hidden sm:flex`}>
            О музее
          </a>
          <a href="#halls" className={`${navLink} hidden md:flex`}>
            Залы
          </a>
          <a href="/files/project.docx" download="project.docx" className={navLink} title="Скачать текстовую информацию">
            <Download className="w-4 h-4" />
            <span className="hidden lg:inline">Материалы</span>
          </a>
          <Link
            href="/quiz"
            className="flex items-center gap-2 px-4 py-2 bg-bordo text-parchment-light text-sm uppercase tracking-widest hover:bg-bordo-dark transition-colors"
          >
            <Feather className="w-4 h-4" />
            Квиз
          </Link>
        </div>
      </nav>

      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <section id="project" className="w-full mb-24 flex flex-col items-center text-center scroll-mt-24">
          <p className="text-sm uppercase tracking-[0.3em] text-ink-muted mb-4">{PROJECT.title}</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 font-display leading-tight text-ink">
            {PROJECT.subtitle}
          </h1>
          <div className="ornament text-xl mb-12">✦</div>

          <ImageWithCaption
            src={PROJECT.heroImage}
            alt="Московский Кремль времён Ивана Калиты"
            caption={PROJECT.heroCaption}
            containerClassName="w-full mb-16"
            heightClassName="h-[300px] md:h-[500px]"
          />

          <div className="text-left w-full max-w-3xl mx-auto border-l-4 border-bordo pl-6 py-2 mb-12">
            <h2 className="text-2xl font-display font-bold mb-4 uppercase tracking-widest flex items-center gap-2 text-bordo">
              <Info className="w-6 h-6" /> Цель проекта
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-ink-soft">{PROJECT.goal}</p>
          </div>

          <Link href="/quiz" className="btn-primary text-xl md:text-2xl px-10 py-6 normal-case tracking-normal group">
            <Feather className="w-7 h-7 group-hover:-rotate-12 transition-transform" />
            Узнайте, кто вы из исторических деятелей
          </Link>
        </section>

        <hr className="border-ink/15 mb-24" />

        <section className="w-full mb-32 scroll-mt-24" id="halls">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center font-display">Залы музея</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PERSONS.map((p) => (
              <a
                key={p.key}
                href={`#person-${p.number}`}
                className="group flex flex-col p-6 border border-ink/15 bg-parchment-light hover:border-bordo hover:-translate-y-1 transition-all"
              >
                <span className="font-display text-5xl font-bold text-bordo/30 group-hover:text-bordo transition-colors">
                  {String(p.number).padStart(2, '0')}
                </span>
                <span className="mt-4 text-2xl font-display font-bold leading-tight">{p.name}</span>
                <span className="mt-2 text-base text-ink-muted">{p.years}</span>
                <span className="mt-auto pt-4 text-sm text-ink-soft">{p.role}</span>
              </a>
            ))}
          </div>
        </section>

        {PERSONS.map((p) => (
          <PersonDetail key={p.key} person={p} />
        ))}

        <hr className="border-ink/15 my-24" />

        <ConclusionSection />

        <hr className="border-ink/15 my-24" />

        <SourcesSection />
      </div>

      <footer className="w-full py-12 bg-bordo-dark text-parchment text-center">
        <div className="flex flex-col items-center gap-4 px-6">
          <Landmark className="w-6 h-6 mb-2 text-gold" />
          <p className="text-base md:text-lg">
            © {PROJECT.year} Виртуальный музей «{PROJECT.short}» · {PROJECT.group} · {PROJECT.city}
          </p>
          <div className="flex gap-4 text-xs uppercase tracking-widest text-parchment/60">
            <span>История</span>
            <span>Культура</span>
            <span>Наследие</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
