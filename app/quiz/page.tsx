'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Church, Coins, Flame, Compass, Palette, RotateCcw, type LucideIcon } from 'lucide-react';
import { PERSONS, PROJECT, type PersonKey } from '@/lib/content';

interface Question {
  question: string;
  answers: { text: string; person: PersonKey }[];
}

// Порядок ответов в каждом вопросе разный, чтобы буква не подсказывала результат
const questions: Question[] = [
  {
    question: 'Какое занятие вам ближе всего?',
    answers: [
      { text: 'Путешествовать и узнавать новые страны', person: 'nikitin' },
      { text: 'Закладывать основы чего-то нового', person: 'daniil' },
      { text: 'Создавать яркие, светлые образы', person: 'dionisiy' },
      { text: 'Считать, копить и договариваться', person: 'kalita' },
      { text: 'Выражать сильные чувства в искусстве', person: 'feofan' },
    ],
  },
  {
    question: 'Вам досталось самое маленькое наследство. Что вы сделаете?',
    answers: [
      { text: 'Терпеливо буду его приумножать, без лишних ссор', person: 'daniil' },
      { text: 'Найду союзников посильнее и выгодно вложу каждую монету', person: 'kalita' },
      { text: 'Уеду туда, где меня никто не знает, и начну всё заново', person: 'feofan' },
      { text: 'Рискну и отправлюсь за удачей за три моря', person: 'nikitin' },
      { text: 'Соберу команду единомышленников и возьмусь за большой заказ', person: 'dionisiy' },
    ],
  },
  {
    question: 'Что вы цените в людях больше всего?',
    answers: [
      { text: 'Бережливость и расчётливость', person: 'kalita' },
      { text: 'Смелость и любопытство', person: 'nikitin' },
      { text: 'Миролюбие и надёжность', person: 'daniil' },
      { text: 'Чувство красоты и гармонии', person: 'dionisiy' },
      { text: 'Глубину и искренность', person: 'feofan' },
    ],
  },
  {
    question: 'Как вы работаете?',
    answers: [
      { text: 'Быстро и свободно, без образцов, по вдохновению', person: 'feofan' },
      { text: 'Вместе с семьёй и учениками, одной артелью', person: 'dionisiy' },
      { text: 'Медленно, но верно, шаг за шагом', person: 'daniil' },
      { text: 'Записываю всё, что вижу, в дневник', person: 'nikitin' },
      { text: 'По плану, просчитывая выгоду на годы вперёд', person: 'kalita' },
    ],
  },
  {
    question: 'Ваш идеальный выходной?',
    answers: [
      { text: 'Рисовать на природе у озера', person: 'dionisiy' },
      { text: 'Спокойный день дома, в кругу семьи', person: 'daniil' },
      { text: 'Поход на рынок: поторговаться и что-нибудь выгодно купить', person: 'kalita' },
      { text: 'Сесть в поезд и уехать в незнакомый город', person: 'nikitin' },
      { text: 'Долгий разговор с друзьями о смысле жизни', person: 'feofan' },
    ],
  },
  {
    question: 'Как вы решаете конфликты?',
    answers: [
      { text: 'Договариваюсь с тем, у кого власть', person: 'kalita' },
      { text: 'Стараюсь вообще не ввязываться в ссоры', person: 'daniil' },
      { text: 'Говорю прямо всё, что думаю', person: 'feofan' },
      { text: 'Пытаюсь понять чужие обычаи и найти общий язык', person: 'nikitin' },
      { text: 'Сглаживаю острые углы, ищу гармонию', person: 'dionisiy' },
    ],
  },
  {
    question: 'Какой цвет вам ближе?',
    answers: [
      { text: 'Нежно-голубой и розовый', person: 'dionisiy' },
      { text: 'Золотой, как монета', person: 'kalita' },
      { text: 'Тёмная охра с белыми вспышками', person: 'feofan' },
      { text: 'Цвет морской волны', person: 'nikitin' },
      { text: 'Белый, как камень первых храмов', person: 'daniil' },
    ],
  },
  {
    question: 'Что вы хотите оставить после себя?',
    answers: [
      { text: 'Книгу о своих странствиях', person: 'nikitin' },
      { text: 'Город, который станет столицей', person: 'daniil' },
      { text: 'Стены храма, расписанные моими руками', person: 'dionisiy' },
      { text: 'Богатое и сильное княжество для детей', person: 'kalita' },
      { text: 'Учеников, которые превзойдут меня', person: 'feofan' },
    ],
  },
  {
    question: 'Как вы принимаете важные решения?',
    answers: [
      { text: 'Слушаю внутренний голос', person: 'feofan' },
      { text: 'Считаю, что выгоднее', person: 'kalita' },
      { text: 'Не тороплюсь, жду подходящего момента', person: 'daniil' },
      { text: 'Советуюсь с близкими', person: 'dionisiy' },
      { text: 'Иду на риск — будь что будет', person: 'nikitin' },
    ],
  },
  {
    question: 'Что вас вдохновляет?',
    answers: [
      { text: 'Мир и покой на родной земле', person: 'kalita' },
      { text: 'Красота и праздник', person: 'dionisiy' },
      { text: 'Дальние дороги и неизвестность', person: 'nikitin' },
      { text: 'Сила человеческого духа', person: 'feofan' },
      { text: 'Возможность построить что-то с нуля', person: 'daniil' },
    ],
  },
];

const resultInfo: Record<PersonKey, { description: string; icon: LucideIcon }> = {
  daniil: {
    description:
      'Вы — основатель. Вам не нужно много, чтобы начать: из маленького наследства вы терпеливо, без лишних ссор строите то, что со временем станет большим и важным.',
    icon: Church,
  },
  kalita: {
    description:
      'Вы — расчётливый стратег. Вы умеете беречь ресурсы, договариваться с сильными и шаг за шагом собирать вокруг себя всё больше возможностей.',
    icon: Coins,
  },
  feofan: {
    description:
      'Вы — яркая творческая личность. Вы работаете по вдохновению, говорите то, что думаете, и умеете заражать своей энергией учеников и друзей.',
    icon: Flame,
  },
  nikitin: {
    description:
      'Вы — исследователь и путешественник. Неудачи не останавливают вас, а только зовут дальше. Вам интересно всё новое, и вы умеете рассказать об увиденном.',
    icon: Compass,
  },
  dionisiy: {
    description:
      'Вы — мастер гармонии. Вы видите красоту в мире и людях, любите работать в команде и создаёте то, что радует других.',
    icon: Palette,
  },
};

const answerOrder: PersonKey[] = PERSONS.map((p) => p.key);

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, PersonKey>>({});
  const [result, setResult] = useState<PersonKey | null>(null);

  const handleAnswer = (person: PersonKey) => {
    const newAnswers = { ...answers, [currentQuestion]: person };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, PersonKey>) => {
    const counts = Object.fromEntries(answerOrder.map((k) => [k, 0])) as Record<PersonKey, number>;
    Object.values(finalAnswers).forEach((person) => {
      counts[person] += 1;
    });
    const best = answerOrder.reduce((a, b) => (counts[b] > counts[a] ? b : a));
    setResult(best);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nav = (right: React.ReactNode) => (
    <nav className="w-full px-6 py-4 border-b border-ink/15 flex justify-between items-center">
      <Link
        href="/"
        className="text-2xl font-display font-bold tracking-wide text-bordo hover:text-bordo-dark transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        {PROJECT.short}
      </Link>
      <div className="text-sm uppercase tracking-widest text-ink-muted">{right}</div>
    </nav>
  );

  if (result) {
    const person = PERSONS.find((p) => p.key === result)!;
    const { description, icon: Icon } = resultInfo[result];
    return (
      <main className="flex min-h-screen flex-col items-center bg-parchment text-ink">
        {nav('Результат')}

        <div className="w-full max-w-3xl px-6 py-12 md:py-20 flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full bg-bordo text-parchment-light flex items-center justify-center mb-8 ring-8 ring-gold/20">
            <Icon className="w-14 h-14" strokeWidth={1.5} />
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-ink-muted mb-3">Вы похожи на</p>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-3 text-ink">{person.name}</h1>
          <p className="text-lg text-ink-muted mb-6">
            {person.years} · {person.role}
          </p>
          <div className="ornament text-xl mb-10">✦</div>

          <p className="text-xl md:text-2xl text-ink-soft leading-relaxed mb-12 max-w-2xl">{description}</p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link href={`/#person-${person.number}`} className="btn-primary text-base">
              В зал «{person.name}»
            </Link>
            <button onClick={resetQuiz} className="btn-outline text-base">
              <RotateCcw className="w-4 h-4" />
              Пройти ещё раз
            </button>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="flex min-h-screen flex-col items-center bg-parchment text-ink">
      {nav(`${currentQuestion + 1} / ${questions.length}`)}

      <div className="w-full bg-parchment-deep/60 h-1.5">
        <div className="bg-bordo h-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="w-full max-w-3xl px-6 py-12 md:py-20">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-ink-muted mb-4">
          Кто вы из деятелей Средневековой Руси?
        </p>
        <h1 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center leading-tight">
          {question.question}
        </h1>

        <div className="space-y-3 mb-12">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.person)}
              className="w-full p-5 md:p-6 border border-ink/15 bg-parchment-light hover:border-bordo hover:bg-bordo hover:text-parchment-light transition-all text-left text-lg md:text-xl group flex items-baseline"
            >
              <span className="font-display font-bold text-bordo mr-4 group-hover:text-gold transition-colors">
                {String.fromCharCode(1040 + index)}.
              </span>
              {answer.text}
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-ink-muted hover:text-bordo transition-colors uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </button>
        )}
      </div>
    </main>
  );
}
