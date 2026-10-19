import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { SourceItem } from '@/lib/sources';

interface SourceListProps {
  items: SourceItem[];
  startIndex?: number;
}

const linkClass =
  'inline-flex items-center gap-2 text-base text-bordo hover:text-bordo-dark transition-colors underline underline-offset-4 decoration-bordo/40 break-all';

export const SourceList: React.FC<SourceListProps> = ({ items, startIndex = 0 }) => {
  return (
    <ol className="max-w-5xl mx-auto space-y-4">
      {items.map((source, index) => (
        <li
          key={source.id}
          className="flex gap-4 p-5 md:p-6 border border-ink/15 bg-parchment-light hover:border-bordo/40 transition-colors"
        >
          <span className="flex-shrink-0 font-display font-bold text-2xl text-bordo/70 w-10">
            {String(startIndex + index + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed">{source.text}</p>
            {source.url && (
              <a href={source.url} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-3`}>
                {source.url}
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            )}
            {source.links && source.links.length > 0 && (
              <ul className="mt-3 space-y-2">
                {source.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {link.label}
                      <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};
