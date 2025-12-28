/**
 * Home page content data
 * This file contains all the translatable content for the home page.
 * Non-technical users can edit this file to update the content.
 */

export interface TocItem {
  id: string;
  chapter: string;
  text: string;
}

export interface Chapter {
  id: string;
  chapter: string;
  title: string;
  content: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
  secondaryDescription: string;
}

export interface LaunchStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CtaContent {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export interface HeroContent {
  tagline: string;
  title: string;
  ctaText: string;
  ctaHref: string;
}

export interface SectionTitles {
  about: string;
  advantages: string;
  advantagesSubtitle: string;
  steps: string;
  stepsSubtitle: string;
  faq: string;
  faqSubtitle: string;
  reviews: string;
  reviewsSubtitle: string;
}

export interface HomePageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroContent;
  sectionTitles: SectionTitles;
  tocItems: TocItem[];
  chapters: Chapter[];
  advantages: Advantage[];
  launchSteps: LaunchStep[];
  faqItems: FaqItem[];
  cta: {
    create: CtaContent;
    advantages: CtaContent;
    steps: CtaContent;
    faq: CtaContent;
    reviews: CtaContent;
  };
  sidebar: {
    blogTitle: string;
    ctaText: string;
  };
}

// Step icons (shared between languages)
const stepIcons = {
  1: '/src/assets/images/steps-to-create-business/1-audit.webp',
  2: '/src/assets/images/steps-to-create-business/2-positioning.webp',
  3: '/src/assets/images/steps-to-create-business/3-monetization.webp',
  4: '/src/assets/images/steps-to-create-business/4-create-product.webp',
  5: '/src/assets/images/steps-to-create-business/5-research.webp',
  6: '/src/assets/images/steps-to-create-business/6-pack.webp',
  7: '/src/assets/images/steps-to-create-business/7-content-strategy.webp',
  8: '/src/assets/images/steps-to-create-business/8-strategy.webp',
  9: '/src/assets/images/steps-to-create-business/9-business-plan.webp',
  10: '/src/assets/images/steps-to-create-business/10-content-production.webp',
};

// Advantage icons (shared between languages)
const advantageIcons = {
  1: '/src/assets/images/advantages/1.webp',
  2: '/src/assets/images/advantages/2.webp',
  3: '/src/assets/images/advantages/3.webp',
  4: '/src/assets/images/advantages/4.webp',
};

// =============================================================================
// RUSSIAN CONTENT
// =============================================================================

export const homeContentRu: HomePageContent = {
  meta: {
    title: 'Архитектор Личных Брендов - Создайте свой онлайн бизнес',
    description: 'AI-сервис для создания личного бренда и онлайн бизнеса за 10 шагов',
  },

  hero: {
    tagline: 'AI-сервис Архитектор Личных Брендов',
    title: 'Создайте свой самый надёжный онлайн-бизнес',
    ctaText: 'За 10 шагов',
    ctaHref: '#steps',
  },

  sectionTitles: {
    about: 'АРХИТЕКТОР ЛИЧНЫХ БРЕНДОВ',
    advantages: 'Достоинства',
    advantagesSubtitle: 'AI-сервиса «Архитектор Личных Брендов»',
    steps: '10 ШАГОВ',
    stepsSubtitle: 'К созданию своего онлайн бизнеса',
    faq: 'Часто задаваемые вопросы',
    faqSubtitle: 'О AI-сервисе «Архитектор Личных Брендов»',
    reviews: 'Отзывы',
    reviewsSubtitle: 'О AI-сервисе «Архитектор Личных Брендов»',
  },

  tocItems: [
    {
      id: 'chapter-1',
      chapter: 'Глава 1',
      text: 'Добро пожаловать на официальный сайт AI-сервиса «Архитектор Личных Брендов».',
    },
    {
      id: 'chapter-2',
      chapter: 'Глава 2',
      text: 'Главный секрет: Зарабатывайте на своих навыках и скрытых возможностях, а не на публичности',
    },
    { id: 'chapter-3', chapter: 'Глава 3', text: 'От потенциала к прибыльному бизнес-плану' },
    { id: 'chapter-4', chapter: 'Глава 4', text: 'Ваше преимущество: скорость и доступная цена' },
    {
      id: 'chapter-5',
      chapter: 'Глава 5',
      text: 'Почему стоит создать онлайн бизнес с AI-сервисом «Архитектор Личных Брендов»',
    },
  ],

  chapters: [
    {
      id: 'chapter-1',
      chapter: 'Глава 1',
      title: 'Добро пожаловать на официальный сайт AI-сервиса «Архитектор Личных Брендов».',
      content:
        '<p>Вы давно мечтаете о финансовой свободе и о том, чтобы создать стабильный, масштабируемый источник дохода, который работает на Вас, где бы Вы не находились? Вы уже давно хотите жить и путешествовать по всему миру и зарабатывать без привязки к месту работы?</p><p>Это возможно. С сервисом «Архитектор Личных Брендов». И для этого совершенно НЕ нужно становится публичной медийной персоной и ежедневно «показывать себя» в социальных сетях</p>',
    },
    {
      id: 'chapter-2',
      chapter: 'Глава 2',
      title: 'Главный секрет: Зарабатывайте на своих навыках и скрытых возможностях, а не на публичности',
      content:
        '<p>Большинство людей заблуждаются, когда полагают, что Личный бренд могут создать только интересные, яркие и талантливые люди. Что для успеха нужно обязательно постоянно быть на виду, преодолевать страх камеры и бороться со стеснением. Из-за этого многие и отказываются от идеи создать онлайн бизнес, который основывается на личных качествах</p><p>С AI-сервисом «Архитектор Личных Брендов» Вы убедитесь, что Личный Бренд – это не «красивый костюм», а самое настоящее коммерческое предприятие, которое приносит прибыль. Истинный источник дохода основывается не на Вашей внешности, а на ваших уникальных, зачастую скрытых интеллектуальных активах</p>',
    },
    {
      id: 'chapter-3',
      chapter: 'Глава 3',
      title: 'От потенциала к прибыльному бизнес-плану',
      content:
        '<p>Как правило, специалисты по Личному Бренду – это пиарщики и рекламщики. Их задача – создать «шум» и повысить узнаваемость. И логика их проста: чем больше аудитория у Личного Бренда, тем выше гонорары за рекламу. Но! До этого «светлого будущего» много лет и нужно много денег. И очень много-много личного времени. Да и то не факт, что рекламодатели выстроятся в очередь</p><p>AI-сервис «Архитектор Личных Брендов» работает иначе: сначала он с нуля помогает разработать эффективную и просчитанную бизнес-модель с конкретными источниками дохода (цифровыми продуктами) и только потом разрабатывает маркетинговые и рекламные стратегии</p>',
    },
    {
      id: 'chapter-4',
      chapter: 'Глава 4',
      title: 'Ваше преимущество: скорость и доступная цена',
      content:
        '<p>Создание такого бизнес-плана, включающего аудит, исследование, финансовое моделирование и разработку продуктовой линейки требует нескольких месяцев командной работы профессиональных экспертов: бизнес-аналитиков, маркетологов, финансовых аудиторов, юристов, продакт-менеджеров и рекламщиков (читайте – «нужны колоссальные инвестиции»)</p><p>«Архитектор Личных Брендов» выполняет эту сложнейшую аналитическую работу за одно мгновение. От Вас ожидается лишь одно: честно и развернуто отвечать на вопросы анкет каждого этапа. Вам не нужно быть экспертом или опытным предпринимателем – все свои знания и умения Вам предоставит ИИ.</p><p><strong>Помните:</strong> ни один бизнес-консультант или пиарщик (а тем более целое консалтинговое агентство) не станет заниматься столь глубокой, пошаговой проработкой с клиентом, у которого нет «кругленькой» суммы для оплаты их весьма дорогих услуг</p>',
    },
    {
      id: 'chapter-5',
      chapter: 'Глава 5',
      title: 'Почему стоит создать онлайн бизнес с AI-сервисом «Архитектор Личных Брендов»',
      content:
        '<p>За алгоритмами сервиса стоит не фантазия экспертов по IT и AI, а 28-летний, многогранный опыт Бизнес-Следопыта в кризис-менеджменте, M&A сделках, создании с нуля и вывода бизнесов на международные рынки. Только такой опыт гарантирует, что каждый этап сервиса досконально проработан с точки зрения реальной финансовой и бизнесовой логики</p><p>Создайте для себя свой самый надёжный источник онлайн-заработка – бизнес, который называется «Личный бренд». Сделайте первый шаг прямо сейчас – пройдите АУДИТ, чтобы выявить ваш скрытый потенциал и возможности. Найдите свои «бриллианты», которые навсегда изменят вашу жизнь</p><p><strong>Стоимость первого этапа всего $9! А по промо-коду БЕСПЛАТНО!</strong></p><p>Узнать подробнее обо всех этапах и всех ценах Вы можете на странице <a href="/how-it-works">«Как это работает»</a></p>',
    },
  ],

  advantages: [
    {
      icon: advantageIcons[1],
      title: 'Поиск Ваших «Бриллиантов»',
      description:
        'AI-сервис проведет глубокий аудит. Находит скрытый потенциал и таланты, которые станут основой для уникального позиционирования',
      secondaryDescription:
        '«Архитектор Личных Брендов» — это безличный ИИ. Это исключает человеческий фактор и избавит Вас от чувства неловкости отвечать на некоторые вопросы',
    },
    {
      icon: advantageIcons[2],
      title: 'Бизнес-Модель',
      description:
        'Сервис разрабатывает стратегию монетизации, продуктовые линейки, финансовый и бизнес планы. С помощью сервиса вы разработаете маркетинговую стратегию, контент-стратегию и воронки продаж',
      secondaryDescription:
        'Сервис заменяет целую команду экспертов: бизнес-аналитиков, финансовых аудиторов, маркетологов, рекламщиков и пиарщиков. Мгновенный результат',
    },
    {
      icon: advantageIcons[3],
      title: 'Создание Цифровых Продуктов',
      description:
        'С помощью «Ахитектора Личных Брендов» вы можете создать авторские цифровые продукты (онлайн-курс, онлайн консультация или тренинг), которые будут приносить Вам доход',
      secondaryDescription:
        'Вам не нужно быть экспертом в разработке цифровых продуктов. Вам нужно просто отвечать на вопросы анкеты',
    },
    {
      icon: advantageIcons[4],
      title: 'Доступность & Скорость',
      description:
        'С помощью AI-сервиса «Архитектор Личных Брендов» Вы за считанные часы можете разработать бизнес-модель, которая будет приносить доход',
      secondaryDescription:
        'У команды экспертов на это уйдут месяцы работы. И стоимость такой команды очень высокая. АЛБ сделает всё быстро и по очень доступной цене',
    },
  ],

  launchSteps: [
    {
      step: 1,
      icon: stepIcons[1],
      title: 'АУДИТ',
      description: 'AI поможет найти Ваш скрытый потенциал – ваши «бриллианты»',
    },
    {
      step: 2,
      icon: stepIcons[2],
      title: 'Позиционирование',
      description: 'Узнайте, как и с чем выйти в мир и кто Ваша ЦА',
    },
    {
      step: 3,
      icon: stepIcons[3],
      title: 'Монетизация',
      description: 'Определите модели монетизации, которые наиболее точно подходят именно для Вас',
    },
    {
      step: 4,
      icon: stepIcons[4],
      title: 'Создание продукта',
      description: 'Создайте свой первый цифровой продукт, который будет приносить вам доход',
    },
    {
      step: 5,
      icon: stepIcons[5],
      title: 'Исследование и маркетинговая стратегия',
      description:
        'Проанализируем рынок и конкурентов, определим правильную цену на Ваш продукт, чтобы он «выстрелил». Разработаем маркетинговую стратегию',
    },
    {
      step: 6,
      icon: stepIcons[6],
      title: 'Упаковка',
      description:
        'Визуализация Вашего Личного Бренда. Это первое впечатление, которое вы произведете на вашу Целевую Аудиторию',
    },
    {
      step: 7,
      icon: stepIcons[7],
      title: 'Контент-Стратегия',
      description: 'Контент – это топливо для вашего бизнеса. Разработаем четкий план: что, куда и когда публиковать',
    },
    {
      step: 8,
      icon: stepIcons[8],
      title: 'Стратегия продвижения и медиаплан',
      description:
        'Это план захвата рынка. Рассчитаем воронку продаж и разработаем детальный календарный план активностей',
    },
    {
      step: 9,
      icon: stepIcons[9],
      title: 'Бизнес-План',
      description:
        'Это Ваш путеводитель и компас. Соберем всю проделанную работу в один подробный документ – гарантию жизнеспособности бизнеса',
    },
    {
      step: 10,
      icon: stepIcons[10],
      title: 'Производство Контента',
      description:
        'Кульминация! Сервис знает ваш Личный Бренд с «самого рождения»: с первого шага «Аудит». Создайте исключительный, персонализированный, авторский контент для вашего сайта, для постов и сценариев. Ни один копирайтер не сможет так написать для Вас',
    },
  ],

  faqItems: [
    {
      question:
        'У меня нет никаких талантов. Я простой, обычный, «серый» человек без каких-либо увлечений и навыков. Я ничего не умею. Разве можно мне помочь?',
      answer:
        'Ваши данные 100% конфиденциальны. Они хранятся в защищенных хранилищах и используются для улучшения AI-алгоритмов исключительно в обезличенной (анонимной) форме (см. Политику Конфиденциальности). Вы общаетесь с безличным интеллектом, что позволяет вам быть максимально честным, поскольку нет страха оценки или осуждения',
    },
    {
      question: 'А сколько это стоит?',
      answer:
        'Стоимость каждого этапа указана на странице «Как это работает». Первый этап «Аудит» стоит всего $9, а по промо-коду вы можете пройти его бесплатно.',
    },
    {
      question: 'А кто будет изучать мои ответы на вопросы анкеты? Информация обо мне никуда не уйдет? Это безопасно?',
      answer:
        'Ваши ответы обрабатываются исключительно AI-алгоритмами. Никто из людей не имеет доступа к вашим персональным данным. Все данные зашифрованы и хранятся в защищенных дата-центрах.',
    },
    {
      question: 'Сколько времени дается на прохождение каждого этапа?',
      answer:
        'Вы можете проходить этапы в своем собственном темпе. Нет никаких ограничений по времени. Вы можете делать перерывы и возвращаться к работе когда вам удобно.',
    },
    {
      question:
        'Помогает ли сервис с продвижением готового продукта или хотя бы с рекомендациями - где и как продвигать?',
      answer:
        'Да, на этапах «Маркетинговая стратегия» и «Стратегия продвижения» сервис разрабатывает детальный план продвижения вашего продукта с учетом вашей целевой аудитории и бюджета.',
    },
  ],

  cta: {
    create: {
      title: 'СОЗДАТЬ свой онлайн бизнес',
      subtitle: 'Который называется Личный Бренд',
      buttonText: 'Создать',
      buttonHref: '/login',
    },
    advantages: {
      title: 'Узнайте',
      subtitle: 'Обо всех достоинствах сервиса «Архитектор Личных Брендов»',
      buttonText: 'Подробнее',
      buttonHref: '/ru/advantages',
    },
    steps: {
      title: 'Узнать всё',
      subtitle: 'Как работает AI-сервиса «Архитектор Личных Брендов»',
      buttonText: 'Подробнее',
      buttonHref: '/ru/how-it-works',
    },
    faq: {
      title: 'Узнать всё',
      subtitle: 'Как работает AI-сервиса «Архитектор Личных Брендов»',
      buttonText: 'Подробнее',
      buttonHref: '/ru/how-it-works',
    },
    reviews: {
      title: 'Читать все',
      subtitle: 'Отзывы об AI-сервисе «Архитектор Личных Брендов»',
      buttonText: 'Подробнее',
      buttonHref: '/ru/reviews',
    },
  },

  sidebar: {
    blogTitle: 'Читайте также',
    ctaText: 'Подробнее',
  },
};

// =============================================================================
// ENGLISH CONTENT
// =============================================================================

export const homeContentEn: HomePageContent = {
  meta: {
    title: 'Architect of Personal Brands - Create your online business',
    description: 'AI-service for creating a personal brand and online business in 10 steps',
  },

  hero: {
    tagline: 'AI-service Architect of Personal Brands',
    title: 'Create your most reliable online business',
    ctaText: 'In 10 steps',
    ctaHref: '#steps',
  },

  sectionTitles: {
    about: 'ARCHITECT OF PERSONAL BRANDS',
    advantages: 'Advantages',
    advantagesSubtitle: 'Of the AI-service "Architect of Personal Brands"',
    steps: '10 STEPS',
    stepsSubtitle: 'To creating your online business',
    faq: 'Frequently Asked Questions',
    faqSubtitle: 'About the AI-service "Architect of Personal Brands"',
    reviews: 'Reviews',
    reviewsSubtitle: 'About the AI-service "Architect of Personal Brands"',
  },

  tocItems: [
    {
      id: 'chapter-1',
      chapter: 'Chapter 1',
      text: 'Welcome to the official website of the AI-service "Architect of Personal Brands".',
    },
    {
      id: 'chapter-2',
      chapter: 'Chapter 2',
      text: 'The main secret: Earn on your skills and hidden opportunities, not on publicity',
    },
    { id: 'chapter-3', chapter: 'Chapter 3', text: 'From potential to a profitable business plan' },
    { id: 'chapter-4', chapter: 'Chapter 4', text: 'Your advantage: speed and affordable price' },
    {
      id: 'chapter-5',
      chapter: 'Chapter 5',
      text: 'Why you should create an online business with the AI-service "Architect of Personal Brands"',
    },
  ],

  chapters: [
    {
      id: 'chapter-1',
      chapter: 'Chapter 1',
      title: 'Welcome to the official website of the AI-service "Architect of Personal Brands".',
      content:
        '<p>Have you long dreamed of financial freedom and creating a stable, scalable source of income that works for you, wherever you are? Have you long wanted to live and travel around the world and earn without being tied to your workplace?</p><p>This is possible. With the "Architect of Personal Brands" service. And for this, you absolutely DO NOT need to become a public media person and "show yourself" daily on social networks</p>',
    },
    {
      id: 'chapter-2',
      chapter: 'Chapter 2',
      title: 'The main secret: Earn on your skills and hidden opportunities, not on publicity',
      content:
        '<p>Most people are mistaken when they believe that only interesting, bright and talented people can create a Personal Brand. That for success you need to constantly be in the spotlight, overcome the fear of the camera and fight shyness. Because of this, many refuse the idea of creating an online business based on personal qualities</p><p>With the AI-service "Architect of Personal Brands" you will see that a Personal Brand is not a "beautiful suit", but a real commercial enterprise that brings profit. The true source of income is based not on your appearance, but on your unique, often hidden intellectual assets</p>',
    },
    {
      id: 'chapter-3',
      chapter: 'Chapter 3',
      title: 'From potential to a profitable business plan',
      content:
        '<p>As a rule, Personal Brand specialists are PR people and advertisers. Their task is to create "buzz" and increase awareness. And their logic is simple: the larger the audience of the Personal Brand, the higher the fees for advertising. But! It takes many years and a lot of money to reach this "bright future". And a lot of personal time. And even then, it\'s not certain that advertisers will line up</p><p>The AI-service "Architect of Personal Brands" works differently: first, it helps develop an effective and calculated business model from scratch with specific income sources (digital products) and only then develops marketing and advertising strategies</p>',
    },
    {
      id: 'chapter-4',
      chapter: 'Chapter 4',
      title: 'Your advantage: speed and affordable price',
      content:
        '<p>Creating such a business plan, including audit, research, financial modeling and product line development, requires several months of teamwork by professional experts: business analysts, marketers, financial auditors, lawyers, product managers and advertisers (read – "colossal investments are needed")</p><p>"Architect of Personal Brands" performs this complex analytical work in an instant. All that is expected from you is one thing: honestly and thoroughly answer the questionnaire questions at each stage. You don\'t need to be an expert or an experienced entrepreneur – AI will provide you with all its knowledge and skills.</p><p><strong>Remember:</strong> no business consultant or PR specialist (and even more so an entire consulting agency) will engage in such deep, step-by-step work with a client who does not have a "round" sum to pay for their very expensive services</p>',
    },
    {
      id: 'chapter-5',
      chapter: 'Chapter 5',
      title: 'Why you should create an online business with the AI-service "Architect of Personal Brands"',
      content:
        '<p>Behind the service algorithms is not the fantasy of IT and AI experts, but 28 years of multifaceted experience of the Business Scout in crisis management, M&A deals, creating from scratch and bringing businesses to international markets. Only such experience guarantees that each stage of the service is thoroughly developed from the point of view of real financial and business logic</p><p>Create your most reliable source of online earnings – a business called "Personal Brand". Take the first step right now – take the AUDIT to identify your hidden potential and opportunities. Find your "diamonds" that will change your life forever</p><p><strong>The cost of the first stage is only $9! And with a promo code it\'s FREE!</strong></p><p>You can learn more about all stages and prices on the <a href="/how-it-works">"How It Works"</a> page</p>',
    },
  ],

  advantages: [
    {
      icon: advantageIcons[1],
      title: 'Finding Your "Diamonds"',
      description:
        'The AI-service will conduct a deep audit. It finds hidden potential and talents that will become the basis for unique positioning',
      secondaryDescription:
        '"Architect of Personal Brands" is an impersonal AI. This eliminates the human factor and relieves you of the awkwardness of answering some questions',
    },
    {
      icon: advantageIcons[2],
      title: 'Business Model',
      description:
        'The service develops a monetization strategy, product lines, financial and business plans. With the help of the service, you will develop a marketing strategy, content strategy and sales funnels',
      secondaryDescription:
        'The service replaces an entire team of experts: business analysts, financial auditors, marketers, advertisers and PR specialists. Instant results',
    },
    {
      icon: advantageIcons[3],
      title: 'Creating Digital Products',
      description:
        'With the help of "Architect of Personal Brands" you can create author\'s digital products (online course, online consultation or training) that will bring you income',
      secondaryDescription:
        "You don't need to be an expert in developing digital products. You just need to answer the questionnaire",
    },
    {
      icon: advantageIcons[4],
      title: 'Accessibility & Speed',
      description:
        'With the AI-service "Architect of Personal Brands" you can develop a business model that will bring income in just a few hours',
      secondaryDescription:
        'A team of experts would take months to do this. And the cost of such a team is very high. APB will do everything quickly and at a very affordable price',
    },
  ],

  launchSteps: [
    {
      step: 1,
      icon: stepIcons[1],
      title: 'AUDIT',
      description: 'AI will help find your hidden potential – your "diamonds"',
    },
    {
      step: 2,
      icon: stepIcons[2],
      title: 'Positioning',
      description: 'Find out how and with what to enter the world and who your target audience is',
    },
    {
      step: 3,
      icon: stepIcons[3],
      title: 'Monetization',
      description: 'Determine the monetization models that are most suitable for you',
    },
    {
      step: 4,
      icon: stepIcons[4],
      title: 'Product Creation',
      description: 'Create your first digital product that will bring you income',
    },
    {
      step: 5,
      icon: stepIcons[5],
      title: 'Research and Marketing Strategy',
      description:
        'We will analyze the market and competitors, determine the right price for your product so that it "takes off". We will develop a marketing strategy',
    },
    {
      step: 6,
      icon: stepIcons[6],
      title: 'Packaging',
      description:
        'Visualization of your Personal Brand. This is the first impression you will make on your Target Audience',
    },
    {
      step: 7,
      icon: stepIcons[7],
      title: 'Content Strategy',
      description:
        'Content is the fuel for your business. We will develop a clear plan: what, where and when to publish',
    },
    {
      step: 8,
      icon: stepIcons[8],
      title: 'Promotion Strategy and Media Plan',
      description:
        'This is a market capture plan. We will calculate the sales funnel and develop a detailed calendar of activities',
    },
    {
      step: 9,
      icon: stepIcons[9],
      title: 'Business Plan',
      description:
        'This is your guide and compass. We will collect all the work done in one detailed document – a guarantee of business viability',
    },
    {
      step: 10,
      icon: stepIcons[10],
      title: 'Content Production',
      description:
        'The culmination! The service knows your Personal Brand "from birth": from the first step "Audit". Create exceptional, personalized, author\'s content for your website, for posts and scripts. No copywriter can write like this for you',
    },
  ],

  faqItems: [
    {
      question:
        'I have no talents. I\'m a simple, ordinary, "gray" person without any hobbies and skills. I can\'t do anything. Can you help me?',
      answer:
        'Your data is 100% confidential. It is stored in secure storage and used to improve AI algorithms exclusively in anonymized form (see Privacy Policy). You communicate with an impersonal intelligence, which allows you to be as honest as possible, since there is no fear of evaluation or judgment',
    },
    {
      question: 'How much does it cost?',
      answer:
        'The cost of each stage is indicated on the "How It Works" page. The first stage "Audit" costs only $9, and with a promo code you can complete it for free.',
    },
    {
      question: 'Who will study my answers to the questionnaire? Will information about me go anywhere? Is it safe?',
      answer:
        'Your answers are processed exclusively by AI algorithms. No humans have access to your personal data. All data is encrypted and stored in secure data centers.',
    },
    {
      question: 'How much time is given to complete each stage?',
      answer:
        'You can go through the stages at your own pace. There are no time limits. You can take breaks and return to work when it suits you.',
    },
    {
      question:
        'Does the service help with promoting the finished product or at least with recommendations - where and how to promote?',
      answer:
        'Yes, at the "Marketing Strategy" and "Promotion Strategy" stages, the service develops a detailed plan for promoting your product taking into account your target audience and budget.',
    },
  ],

  cta: {
    create: {
      title: 'CREATE your online business',
      subtitle: 'Called Personal Brand',
      buttonText: 'Create',
      buttonHref: '/login',
    },
    advantages: {
      title: 'Learn more',
      subtitle: 'About all the advantages of the "Architect of Personal Brands" service',
      buttonText: 'More details',
      buttonHref: '/en/advantages',
    },
    steps: {
      title: 'Learn everything',
      subtitle: 'How the AI-service "Architect of Personal Brands" works',
      buttonText: 'More details',
      buttonHref: '/en/how-it-works',
    },
    faq: {
      title: 'Learn everything',
      subtitle: 'How the AI-service "Architect of Personal Brands" works',
      buttonText: 'More details',
      buttonHref: '/en/how-it-works',
    },
    reviews: {
      title: 'Read all',
      subtitle: 'Reviews about the AI-service "Architect of Personal Brands"',
      buttonText: 'More details',
      buttonHref: '/en/reviews',
    },
  },

  sidebar: {
    blogTitle: 'Also read',
    ctaText: 'Read more',
  },
};

// =============================================================================
// HELPER FUNCTION
// =============================================================================

/**
 * Get home page content by language
 */
export function getHomeContent(lang: 'ru' | 'en'): HomePageContent {
  return lang === 'ru' ? homeContentRu : homeContentEn;
}
