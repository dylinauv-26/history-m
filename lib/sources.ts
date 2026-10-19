export interface SourceLink {
  label: string;
  href: string;
}

export interface SourceItem {
  id: number;
  text: string;
  url?: string;
  links?: SourceLink[];
}

export const SOURCES: SourceItem[] = [
  {
    id: 1,
    text: 'Даниил Александрович Московский, Иван I Калита, Афанасий Никитин — статьи Большой российской энциклопедии.',
    url: 'https://bigenc.ru/',
  },
  {
    id: 2,
    text: 'Феофан Грек, Дионисий, Даниил Московский — статьи «Православной энциклопедии».',
    url: 'https://www.pravenc.ru/',
  },
  {
    id: 3,
    text: 'Свято-Данилов монастырь — официальный сайт.',
    url: 'https://msdm.ru/',
  },
  {
    id: 4,
    text: 'Архангельский собор — Музеи Московского Кремля.',
    url: 'https://www.kreml.ru/',
  },
  {
    id: 5,
    text: 'Церковь Спаса Преображения на Ильине улице — Новгородский государственный объединённый музей-заповедник.',
    url: 'https://novgorodmuseum.ru/',
  },
  {
    id: 6,
    text: 'Музей фресок Дионисия — Кирилло-Белозерский историко-архитектурный и художественный музей-заповедник.',
    url: 'https://www.dionisy.com/',
  },
  {
    id: 7,
    text: 'Афанасий Никитин. «Хождение за три моря» — текст памятника. Библиотека литературы Древней Руси, ИРЛИ РАН.',
    url: 'http://lib.pushkinskijdom.ru/',
  },
];

// Замените тексты и ссылки на реальные источники скачанных изображений и моделей (см. ASSETS.md).
export const IMAGE_SOURCES: SourceItem[] = [
  { id: 101, text: 'Изображение 1 — Московский Кремль времён Ивана Калиты (главный баннер). Источник: https://muzei-mira.com/kartini_russkih_hudojnikov/3049-moskovskij-kreml-pri-ivane-kalite-apollinarij-mihajlovich-vasnecov.html' },
  { id: 102, text: 'Изображение 2 — Свято-Данилов монастырь (Даниил Московский). Источник: https://ru.wikipedia.org/wiki/Данилов_монастырь' },
  { id: 103, text: 'Изображение 3 — Архангельский собор Кремля (Иван Калита). Источник: https://ru.wikipedia.org/wiki/Архангельский_собор_(Московский_Кремль)' },
  { id: 104, text: 'Изображение 4 — Церковь Спаса Преображения на Ильине улице (Феофан Грек). Источник: https://ru.wikipedia.org/wiki/Церковь_Спаса_Преображения_на_Ильине_улице' },
  { id: 105, text: 'Изображение 5 — Памятник Афанасию Никитину в Твери. Источник: https://ru.wikipedia.org/wiki/Памятник_Афанасию_Никитину_%28Тверь%29' },
  { id: 106, text: 'Изображение 6 — Ферапонтов монастырь (Дионисий). Источник: https://ru.wikipedia.org/wiki/Ферапонтов_Белозерский_монастырь' },
  { id: 107, text: '3D-модели деятелей. Источник: https://www.meshy.ai/ru/workspace?sidebar=agent' },
];
