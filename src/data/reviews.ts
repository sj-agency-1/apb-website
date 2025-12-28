/**
 * Reviews data
 * Restructured with localized content pattern
 */

import type { SupportedLanguage, LocalizedContent } from '@/types/i18n';

// =============================================================================
// TYPES
// =============================================================================

export interface ReviewProps {
  id: string;
  name: string;
  age: number;
  location: string;
  text: string;
  sex: 'male' | 'female';
  avatar: string;
  translated?: boolean;
}

// =============================================================================
// REVIEWS DATA
// =============================================================================

const reviewsData: LocalizedContent<ReviewProps[]> = {
  ru: [
    {
      id: 'review-1',
      name: 'Ирина',
      age: 45,
      location: 'Россия',
      text: 'Очень интересно. Увлеклась и создала себе 2 цифровых продукта. Сейчас на этапе бизнес-плана немного застопорилась. Вот на этом этапе вопросы для меня сложноваты. Читаю – вроде понятно, а ответить затрудняюсь. Но в целом очень довольна – много о себе узнала нового, о чем даже не подозревала',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-2',
      name: 'Helga',
      age: 62,
      location: 'Германия',
      text: 'По рекомендации воспользовалась сервисом. Я весьма скептична и никогда не думала о своём Личном Бренде. Мне кажется это довольно смешным в моем возрасте. Но я попробовала и увлеклась. Это интересно узнать о себе то, что не замечала 62 года своей жизни. Ради интереса продукт Закрытое сообщество стал приносить мне маленький доход по подписке. У меня больше 2 000 подписчиков. Но меня интересуют не деньги, а то, что я нашла людей, которым нравится то, что я делаю. Они ценят мои труды. Спасибо!',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
      translated: true,
    },
    {
      id: 'review-3',
      name: 'Егор',
      age: 39,
      location: 'Украина',
      text: 'Я всю жизнь занимаюсь видеопродакшеном. Уже много лет задумывался о своем личном бренде. Но никак «руки не доходили». Я знаю, что самому создать Личный бренд с нуля – это очень сложно и трудоемко, особенно когда опыта нет. Наблюдал за селебрити, политиками и пытался анализировать. Но это все бесполезно, если честно. Поэтому когда мне посоветовали этот сервис, я понял, что нашёл то, что так давно искал. Я очень благодарен разработчикам этого сервиса, потому что с его помощью я наконец-то создал себе Личный Бренд. И не просто бренд, а это действительно работающий бизнес, который приносит мне каждый день доход, а я занимаюсь любимым делом. Спасибо, вам ребята!',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
    {
      id: 'review-4',
      name: 'Марина',
      age: 34,
      location: 'Казахстан',
      text: 'Давно искала инструмент, который поможет структурировать мои знания и опыт в области психологии. AI-сервис «Архитектор Личных Брендов» превзошел все мои ожидания. За 3 месяца я создала линейку консультационных продуктов и запустила свой первый онлайн-курс. Особенно понравилась детальная проработка финансовой модели — теперь я точно знаю, сколько клиентов мне нужно для достижения своих целей.',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-5',
      name: 'Алексей',
      age: 51,
      location: 'Беларусь',
      text: 'Как бывший топ-менеджер крупной компании, я скептически относился к идее создания Личного Бренда. Казалось, что это что-то для молодых блогеров. Но сервис показал совсем другой подход — системный, бизнесовый, с четкими расчетами. Сейчас я веду консалтинговую практику и зарабатываю больше, чем на найме, при этом работаю когда хочу и с кем хочу. Рекомендую всем, кто задумывается о своем деле.',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-6',
      name: 'Ольга',
      age: 28,
      location: 'Россия',
      text: 'Сначала думала, что это очередной курс по продвижению в соцсетях. Оказалось совсем не то! Сервис реально помог мне понять, в чём моя уникальность и как это монетизировать. Уже запустила два гайда и веду платные консультации. За первый месяц заработала больше, чем за три на прошлой работе.',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-7',
      name: 'Дмитрий',
      age: 43,
      location: 'Россия',
      text: 'Работаю программистом уже 20 лет. Всегда хотел делиться опытом, но не знал как это оформить. Благодаря «Архитектору» создал систему обучения для начинающих разработчиков. Теперь у меня есть пассивный доход от курсов, а основную работу я не бросаю. Идеальный баланс!',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-8',
      name: 'Анна',
      age: 56,
      location: 'Узбекистан',
      text: 'Мне 56 лет, и я думала, что поздно начинать что-то новое. Этот сервис доказал обратное. Мой опыт в педагогике оказался очень ценным. Сейчас веду онлайн-школу для родителей, помогаю им находить общий язык с детьми-подростками. Никогда не думала, что буду так востребована!',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-9',
      name: 'Виктор',
      age: 37,
      location: 'Молдова',
      text: 'Честно говоря, был настроен скептически. Но решил попробовать из-за низкой стоимости первого этапа. И не пожалел! Аудит открыл мне глаза на то, какие навыки у меня есть и как их можно применить. Сейчас развиваю своё направление в сфере финансового консалтинга.',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-10',
      name: 'Елена',
      age: 41,
      location: 'Латвия',
      text: 'Как мама троих детей, я искала возможность работать из дома. Сервис помог мне создать бизнес на основе моего хобби — рукоделия. Теперь я не просто продаю изделия, а обучаю других мастериц и продаю свои мастер-классы. Доход вырос в 4 раза!',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
      translated: true,
    },
    {
      id: 'review-11',
      name: 'Сергей',
      age: 48,
      location: 'Россия',
      text: 'После сокращения на работе решил попробовать создать свой бизнес. «Архитектор Личных Брендов» стал моим проводником в этом. Пошаговая система, понятные инструкции, готовые шаблоны — всё это помогло мне за 4 месяца выйти на стабильный доход.',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-12',
      name: 'Наталья',
      age: 33,
      location: 'Грузия',
      text: 'Работала бухгалтером и мечтала о чём-то своём. Сервис помог понять, что мои знания в финансах можно превратить в продукты для малого бизнеса. Теперь консультирую предпринимателей и веду свой блог. Жалею только, что не узнала об этом раньше!',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
      translated: true,
    },
    {
      id: 'review-13',
      name: 'Артём',
      age: 29,
      location: 'Армения',
      text: 'Я фитнес-тренер, и конкуренция в этой сфере огромная. Благодаря «Архитектору» я нашёл свою нишу — работа с людьми после травм. Создал уникальную программу реабилитации, которую теперь продаю онлайн. Клиенты приходят сами, без рекламы.',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
    {
      id: 'review-14',
      name: 'Людмила',
      age: 52,
      location: 'Россия',
      text: 'Всю жизнь работала врачом. На пенсии решила, что хочу помогать людям иначе — через профилактику и здоровый образ жизни. Сервис помог мне создать структурированную программу и найти свою аудиторию. Теперь веду вебинары и продаю курсы.',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-15',
      name: 'Максим',
      age: 35,
      location: 'Киргизия',
      text: 'Занимаюсь фотографией как хобби уже 10 лет. Никогда не думал, что это может стать бизнесом. После прохождения всех этапов сервиса у меня появились онлайн-курс, серия пресетов и закрытое сообщество фотографов. Хобби превратилось в основной источник дохода.',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
    {
      id: 'review-16',
      name: 'Татьяна',
      age: 44,
      location: 'Россия',
      text: 'Я интроверт и боялась публичности. Этот сервис показал, что можно строить личный бренд, не показывая лицо. Сейчас у меня успешный Telegram-канал и платное сообщество. Работаю анонимно, и это не мешает мне зарабатывать.',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-17',
      name: 'Андрей',
      age: 31,
      location: 'Таджикистан',
      text: 'Пробовал разные курсы по заработку в интернете — ничего не работало. «Архитектор» — это совсем другое. Здесь нет пустых обещаний, только конкретные шаги и инструменты. За полгода построил бизнес в сфере копирайтинга с командой из 5 человек.',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
  ],
  en: [
    {
      id: 'review-1',
      name: 'Irina',
      age: 45,
      location: 'Russia',
      text: "Very interesting. I got carried away and created 2 digital products for myself. I'm currently a bit stuck at the business plan stage. The questions at this stage are a bit difficult for me. I read them and they seem clear, but I struggle to answer. But overall I'm very satisfied - I learned a lot of new things about myself that I didn't even suspect.",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-2',
      name: 'Helga',
      age: 62,
      location: 'Germany',
      text: "I used the service on recommendation. I'm quite skeptical and never thought about my Personal Brand. It seems rather funny at my age. But I tried it and got hooked. It's interesting to learn about yourself what you haven't noticed in 62 years of your life. Out of curiosity, the Closed Community product started bringing me a small subscription income. I have over 2,000 subscribers. But I'm not interested in money, but in finding people who like what I do. They appreciate my efforts. Thank you!",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
      translated: true,
    },
    {
      id: 'review-3',
      name: 'Egor',
      age: 39,
      location: 'Ukraine',
      text: "I've been doing video production all my life. For many years I've been thinking about my personal brand. But I never got around to it. I know that creating a Personal Brand from scratch on your own is very difficult and time-consuming, especially when you have no experience. I observed celebrities, politicians and tried to analyze. But it's all useless, honestly. So when I was recommended this service, I realized I found what I had been looking for so long. I'm very grateful to the developers of this service, because with its help I finally created my Personal Brand. And not just a brand, but a truly working business that brings me income every day, and I do what I love. Thank you, guys!",
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
    {
      id: 'review-4',
      name: 'Marina',
      age: 34,
      location: 'Kazakhstan',
      text: "I've been looking for a tool to help structure my knowledge and experience in psychology for a long time. The AI-service 'Architect of Personal Brands' exceeded all my expectations. In 3 months, I created a line of consulting products and launched my first online course. I especially liked the detailed financial model development — now I know exactly how many clients I need to achieve my goals.",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-5',
      name: 'Alexey',
      age: 51,
      location: 'Belarus',
      text: 'As a former top manager of a large company, I was skeptical about creating a Personal Brand. It seemed like something for young bloggers. But the service showed a completely different approach — systematic, business-oriented, with clear calculations. Now I run a consulting practice and earn more than I did as an employee, while working when I want and with whom I want. I recommend it to everyone who is thinking about their own business.',
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-6',
      name: 'Olga',
      age: 28,
      location: 'Russia',
      text: "At first I thought it was another course on social media promotion. It turned out to be completely different! The service really helped me understand what makes me unique and how to monetize it. I've already launched two guides and run paid consultations. In the first month, I earned more than in three months at my previous job.",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-7',
      name: 'Dmitry',
      age: 43,
      location: 'Russia',
      text: "I've been working as a programmer for 20 years. I always wanted to share my experience but didn't know how to package it. Thanks to 'Architect' I created a training system for beginner developers. Now I have passive income from courses, and I don't quit my main job. Perfect balance!",
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-8',
      name: 'Anna',
      age: 56,
      location: 'Uzbekistan',
      text: "I'm 56 years old, and I thought it was too late to start something new. This service proved otherwise. My experience in pedagogy turned out to be very valuable. Now I run an online school for parents, helping them find common ground with their teenage children. I never thought I would be so in demand!",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-9',
      name: 'Viktor',
      age: 37,
      location: 'Moldova',
      text: "Honestly, I was skeptical. But I decided to try because of the low cost of the first stage. And I don't regret it! The audit opened my eyes to what skills I have and how they can be applied. Now I'm developing my own direction in financial consulting.",
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-10',
      name: 'Elena',
      age: 41,
      location: 'Latvia',
      text: "As a mother of three children, I was looking for an opportunity to work from home. The service helped me create a business based on my hobby — handicrafts. Now I don't just sell products, I teach other craftswomen and sell my master classes. Income increased 4 times!",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
      translated: true,
    },
    {
      id: 'review-11',
      name: 'Sergey',
      age: 48,
      location: 'Russia',
      text: "After being laid off, I decided to try to create my own business. 'Architect of Personal Brands' became my guide in this. Step-by-step system, clear instructions, ready-made templates — all this helped me reach a stable income in 4 months.",
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
    },
    {
      id: 'review-12',
      name: 'Natalia',
      age: 33,
      location: 'Georgia',
      text: "I worked as an accountant and dreamed of something of my own. The service helped me understand that my knowledge in finance can be turned into products for small businesses. Now I consult entrepreneurs and run my own blog. I only regret that I didn't learn about this earlier!",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
      translated: true,
    },
    {
      id: 'review-13',
      name: 'Artem',
      age: 29,
      location: 'Armenia',
      text: "I'm a fitness trainer, and the competition in this field is huge. Thanks to 'Architect' I found my niche — working with people after injuries. I created a unique rehabilitation program that I now sell online. Clients come by themselves, without advertising.",
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
    {
      id: 'review-14',
      name: 'Lyudmila',
      age: 52,
      location: 'Russia',
      text: 'I worked as a doctor all my life. In retirement, I decided that I want to help people differently — through prevention and healthy lifestyle. The service helped me create a structured program and find my audience. Now I conduct webinars and sell courses.',
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-15',
      name: 'Maxim',
      age: 35,
      location: 'Kyrgyzstan',
      text: "I've been doing photography as a hobby for 10 years. I never thought it could become a business. After going through all the stages of the service, I got an online course, a series of presets, and a closed community of photographers. My hobby has become my main source of income.",
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
    {
      id: 'review-16',
      name: 'Tatiana',
      age: 44,
      location: 'Russia',
      text: "I'm an introvert and was afraid of publicity. This service showed that you can build a personal brand without showing your face. Now I have a successful Telegram channel and paid community. I work anonymously, and it doesn't stop me from earning.",
      sex: 'female',
      avatar: '/src/assets/images/reviews/review-1.webp',
    },
    {
      id: 'review-17',
      name: 'Andrey',
      age: 31,
      location: 'Tajikistan',
      text: "I tried various courses on making money online — nothing worked. 'Architect' is completely different. There are no empty promises here, only specific steps and tools. In six months, I built a copywriting business with a team of 5 people.",
      sex: 'male',
      avatar: '/src/assets/images/reviews/review-2.webp',
      translated: true,
    },
  ],
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get reviews for a specific language
 */
export function getReviews(lang: SupportedLanguage): ReviewProps[] {
  return reviewsData[lang];
}

// Legacy exports for backward compatibility
export const reviews = reviewsData.ru;
export const reviewsRu = reviewsData.ru;
export const reviewsEn = reviewsData.en;
