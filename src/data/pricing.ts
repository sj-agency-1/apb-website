export interface StepPricing {
  step: number;
  icon: string;
  titleRu: string;
  titleEn: string;
  oldPrice: number | string;
  newPrice: number | string;
  descriptionRu: string;
  descriptionEn: string;
  purposeRu: string;
  purposeEn: string;
  faqRu: { question: string; answer: string }[];
  faqEn: { question: string; answer: string }[];
}

export const stepsPricing: StepPricing[] = [
  {
    step: 1,
    icon: '/src/assets/images/steps-to-create-business/1-audit.webp',
    titleRu: 'АУДИТ ЛИЧНОСТИ',
    titleEn: 'PERSONALITY AUDIT',
    oldPrice: 16,
    newPrice: 0,
    descriptionRu:
      'На этом первом этапе сервис проводит глубокий аудит вашей личности, опыта, навыков и скрытых талантов. Это интеллектуальное интервью, где вам нужно честно и развернуто отвечать на вопросы. Сервис анализирует полученные данные, используя методы, сопоставимые с работой профессионального аудитора и бизнес-психолога.',
    descriptionEn:
      'At this first stage, the service conducts a deep audit of your personality, experience, skills and hidden talents. This is an intellectual interview where you need to answer questions honestly and thoroughly. The service analyzes the received data using methods comparable to the work of a professional auditor and business psychologist.',
    purposeRu:
      'Этот этап необходим, чтобы найти ваши уникальные «бриллианты», которые всегда были при вас, но оставались незамеченными. Аудит позволяет увидеть себя с совершенно новой стороны, выявить неиспользованный потенциал и определить истинные сильные стороны, которые станут фундаментом вашего Личного Бренда и его будущей монетизации. Без этого шага невозможно построить уникальный и эффективный бизнес.',
    purposeEn:
      'This stage is necessary to find your unique "diamonds" that have always been with you but remained unnoticed. The audit allows you to see yourself from a completely new perspective, identify untapped potential and determine the true strengths that will become the foundation of your Personal Brand and its future monetization. Without this step, it is impossible to build a unique and effective business.',
    faqRu: [
      {
        question:
          'У меня нет никаких талантов. Я простой, обычный, «серый» человек без каких-либо увлечений и навыков. Я ничего не умею. Разве можно мне помочь?',
        answer:
          'Ваши данные 100% конфиденциальны. Они хранятся в защищенных хранилищах и используются для улучшения AI-алгоритмов исключительно в обезличенной (анонимной) форме (см. Политику Конфиденциальности). Вы общаетесь с безличным интеллектом, что позволяет вам быть максимально честным, поскольку нет страха оценки или осуждения.',
      },
      {
        question: 'А сколько это стоит?',
        answer:
          'Стоимость первого этапа «Аудит» составляет $16, но по промокоду вы можете пройти его совершенно бесплатно!',
      },
    ],
    faqEn: [
      {
        question:
          "I have no talents. I'm a simple, ordinary, 'gray' person without any hobbies and skills. I can't do anything. Can you help me?",
        answer:
          'Your data is 100% confidential. It is stored in secure storage and used to improve AI algorithms exclusively in anonymized form (see Privacy Policy). You communicate with an impersonal intelligence, which allows you to be as honest as possible, since there is no fear of evaluation or judgment.',
      },
      {
        question: 'How much does it cost?',
        answer: "The cost of the first stage 'Audit' is $16, but with a promo code you can complete it for free!",
      },
    ],
  },
  {
    step: 2,
    icon: '/src/assets/images/steps-to-create-business/2-positioning.webp',
    titleRu: 'ПОЗИЦИОНИРОВАНИЕ ЛИЧНОГО БРЕНДА',
    titleEn: 'PERSONAL BRAND POSITIONING',
    oldPrice: 19,
    newPrice: 9,
    descriptionRu:
      'На этом этапе сервис помогает определить уникальное позиционирование вашего Личного Бренда на рынке. Анализируется ваша целевая аудитория, конкуренты и формируется уникальное торговое предложение.',
    descriptionEn:
      'At this stage, the service helps determine the unique positioning of your Personal Brand in the market. Your target audience, competitors are analyzed and a unique selling proposition is formed.',
    purposeRu:
      'Позиционирование определяет, как вас будут воспринимать клиенты и чем вы отличаетесь от конкурентов. Это фундамент для всех маркетинговых активностей.',
    purposeEn:
      'Positioning determines how customers will perceive you and what makes you different from competitors. This is the foundation for all marketing activities.',
    faqRu: [
      {
        question: 'Сколько времени занимает этот этап?',
        answer: 'В среднем этап занимает 2-3 дня при активной работе с анкетами.',
      },
    ],
    faqEn: [
      {
        question: 'How long does this stage take?',
        answer: 'On average, the stage takes 2-3 days with active work on questionnaires.',
      },
    ],
  },
  {
    step: 3,
    icon: '/src/assets/images/steps-to-create-business/3-monetization.webp',
    titleRu: 'МОНЕТИЗАЦИЯ. МОДЕЛИ МОНЕТИЗАЦИИ',
    titleEn: 'MONETIZATION. MONETIZATION MODELS',
    oldPrice: 35,
    newPrice: 27,
    descriptionRu:
      'Сервис анализирует все возможные модели монетизации вашего Личного Бренда и подбирает наиболее подходящие именно для вас.',
    descriptionEn:
      'The service analyzes all possible monetization models for your Personal Brand and selects the most suitable ones for you.',
    purposeRu:
      'Этот этап позволяет понять, как именно ваш Личный Бренд будет приносить доход. Без четкой модели монетизации невозможно построить прибыльный бизнес.',
    purposeEn:
      'This stage allows you to understand exactly how your Personal Brand will generate income. Without a clear monetization model, it is impossible to build a profitable business.',
    faqRu: [
      {
        question: 'Какие модели монетизации существуют?',
        answer:
          'Существует множество моделей: консультации, онлайн-курсы, менторство, цифровые продукты, партнерские программы и другие.',
      },
    ],
    faqEn: [
      {
        question: 'What monetization models exist?',
        answer:
          'There are many models: consulting, online courses, mentoring, digital products, affiliate programs and others.',
      },
    ],
  },
  {
    step: 4,
    icon: '/src/assets/images/steps-to-create-business/4-create-product.webp',
    titleRu: 'РАЗРАБОТКА ПРОДУКТОВОЙ ЛИНЕЙКИ',
    titleEn: 'PRODUCT LINE DEVELOPMENT',
    oldPrice: 'от $59',
    newPrice: 47,
    descriptionRu:
      'На этом этапе создается линейка цифровых продуктов, которые будут приносить вам доход. Сервис помогает разработать структуру, содержание и ценообразование продуктов.',
    descriptionEn:
      'At this stage, a line of digital products is created that will bring you income. The service helps develop the structure, content and pricing of products.',
    purposeRu:
      'Продуктовая линейка - это основа вашего бизнеса. Правильно разработанные продукты будут продаваться и приносить стабильный доход.',
    purposeEn:
      'The product line is the foundation of your business. Well-designed products will sell and bring stable income.',
    faqRu: [
      {
        question: 'Какие продукты можно создать?',
        answer: 'Онлайн-курсы, вебинары, консультации, чек-листы, гайды, электронные книги и многое другое.',
      },
    ],
    faqEn: [
      {
        question: 'What products can be created?',
        answer: 'Online courses, webinars, consultations, checklists, guides, e-books and much more.',
      },
    ],
  },
  {
    step: 5,
    icon: '/src/assets/images/steps-to-create-business/5-research.webp',
    titleRu: 'ИССЛЕДОВАНИЕ РЫНКА, КОНКУРЕНТНЫЙ АНАЛИЗ, ЦЕНООБРАЗОВАНИЕ И МАРКЕТИНГОВАЯ СТРАТЕГИЯ',
    titleEn: 'MARKET RESEARCH, COMPETITIVE ANALYSIS, PRICING AND MARKETING STRATEGY',
    oldPrice: 189,
    newPrice: 175,
    descriptionRu:
      'Комплексное исследование рынка, анализ конкурентов, разработка стратегии ценообразования и маркетинговой стратегии для вашего Личного Бренда.',
    descriptionEn:
      'Comprehensive market research, competitor analysis, development of pricing strategy and marketing strategy for your Personal Brand.',
    purposeRu:
      'Без понимания рынка и конкурентов невозможно выстроить эффективную стратегию. Этот этап дает полную картину рыночной ситуации.',
    purposeEn:
      'Without understanding the market and competitors, it is impossible to build an effective strategy. This stage provides a complete picture of the market situation.',
    faqRu: [
      {
        question: 'Насколько детальным будет анализ?',
        answer:
          'Анализ включает изучение прямых и косвенных конкурентов, ценовых стратегий, каналов продвижения и целевой аудитории.',
      },
    ],
    faqEn: [
      {
        question: 'How detailed will the analysis be?',
        answer:
          'The analysis includes the study of direct and indirect competitors, pricing strategies, promotion channels and target audience.',
      },
    ],
  },
  {
    step: 6,
    icon: '/src/assets/images/steps-to-create-business/6-pack.webp',
    titleRu: 'ПРОФЕССИОНАЛЬНАЯ УПАКОВКА: ВИЗУАЛИЗАЦИЯ ВАШЕГО ЛИЧНОГО БРЕНДА',
    titleEn: 'PROFESSIONAL PACKAGING: VISUALIZATION OF YOUR PERSONAL BRAND',
    oldPrice: 99,
    newPrice: 84,
    descriptionRu:
      'Создание визуальной идентичности вашего Личного Бренда: логотип, цветовая палитра, типографика и другие элементы дизайна.',
    descriptionEn:
      'Creating the visual identity of your Personal Brand: logo, color palette, typography and other design elements.',
    purposeRu:
      'Визуальная упаковка - это первое впечатление, которое вы производите на потенциальных клиентов. Профессиональный дизайн повышает доверие и узнаваемость.',
    purposeEn:
      'Visual packaging is the first impression you make on potential customers. Professional design increases trust and recognition.',
    faqRu: [
      {
        question: 'Что входит в упаковку?',
        answer:
          'Техническое задание для дизайнера, рекомендации по стилю, цветам, шрифтам и общей визуальной концепции.',
      },
    ],
    faqEn: [
      {
        question: 'What is included in the packaging?',
        answer:
          'Technical specifications for the designer, recommendations on style, colors, fonts and overall visual concept.',
      },
    ],
  },
  {
    step: 7,
    icon: '/src/assets/images/steps-to-create-business/7-content-strategy.webp',
    titleRu: 'КОНТЕНТ-СТРАТЕГИЯ',
    titleEn: 'CONTENT STRATEGY',
    oldPrice: 69,
    newPrice: 57,
    descriptionRu:
      'Разработка полноценной контент-стратегии: темы, форматы, частота публикаций, каналы распространения контента.',
    descriptionEn:
      'Development of a full-fledged content strategy: topics, formats, publication frequency, content distribution channels.',
    purposeRu:
      'Контент - это топливо для вашего бизнеса. Правильная контент-стратегия обеспечивает постоянный приток новых клиентов.',
    purposeEn:
      'Content is the fuel for your business. The right content strategy ensures a constant flow of new customers.',
    faqRu: [
      {
        question: 'Сколько контента нужно создавать?',
        answer: 'Стратегия учитывает ваши возможности и ресурсы, предлагая оптимальный объем контента.',
      },
    ],
    faqEn: [
      {
        question: 'How much content do I need to create?',
        answer:
          'The strategy takes into account your capabilities and resources, offering the optimal amount of content.',
      },
    ],
  },
  {
    step: 8,
    icon: '/src/assets/images/steps-to-create-business/8-strategy.webp',
    titleRu: 'СТРАТЕГИЯ ПРОДВИЖЕНИЯ И МЕДИАПЛАН',
    titleEn: 'PROMOTION STRATEGY AND MEDIA PLAN',
    oldPrice: 139,
    newPrice: 125,
    descriptionRu: 'Детальный план продвижения вашего Личного Бренда с конкретными действиями, сроками и бюджетами.',
    descriptionEn: 'A detailed plan for promoting your Personal Brand with specific actions, deadlines and budgets.',
    purposeRu: 'Медиаплан - это ваша дорожная карта к успеху. Без четкого плана продвижения невозможно достичь целей.',
    purposeEn:
      'The media plan is your roadmap to success. Without a clear promotion plan, it is impossible to achieve goals.',
    faqRu: [
      {
        question: 'Какие каналы продвижения используются?',
        answer:
          'Социальные сети, контекстная реклама, SEO, email-маркетинг, партнерства и другие каналы в зависимости от вашей ниши.',
      },
    ],
    faqEn: [
      {
        question: 'What promotion channels are used?',
        answer:
          'Social networks, contextual advertising, SEO, email marketing, partnerships and other channels depending on your niche.',
      },
    ],
  },
  {
    step: 9,
    icon: '/src/assets/images/steps-to-create-business/9-business-plan.webp',
    titleRu: 'БИЗНЕС-ПЛАН, ФИНАНСОВАЯ МОДЕЛЬ И ДОРОЖНАЯ КАРТА',
    titleEn: 'BUSINESS PLAN, FINANCIAL MODEL AND ROADMAP',
    oldPrice: 162,
    newPrice: 147,
    descriptionRu:
      'Комплексный бизнес-план с финансовыми прогнозами, расчетами окупаемости и пошаговой дорожной картой развития.',
    descriptionEn:
      'Comprehensive business plan with financial forecasts, payback calculations and step-by-step development roadmap.',
    purposeRu:
      'Бизнес-план - это ваш компас и гарантия жизнеспособности бизнеса. Он собирает всю проделанную работу в один документ.',
    purposeEn:
      'The business plan is your compass and guarantee of business viability. It collects all the work done into one document.',
    faqRu: [
      {
        question: 'Что включает финансовая модель?',
        answer: 'Прогноз доходов и расходов, точка безубыточности, ROI, сроки окупаемости инвестиций.',
      },
    ],
    faqEn: [
      {
        question: 'What does the financial model include?',
        answer: 'Revenue and expense forecast, break-even point, ROI, investment payback periods.',
      },
    ],
  },
  {
    step: 10,
    icon: '/src/assets/images/steps-to-create-business/10-content-production.webp',
    titleRu: 'ПРОИЗВОДСТВО ПЕРСОНАЛИЗИРОВАННОГО КОНТЕНТА',
    titleEn: 'PERSONALIZED CONTENT PRODUCTION',
    oldPrice: 'от $2',
    newPrice: 'от $2',
    descriptionRu:
      'Создание уникального, персонализированного контента для вашего Личного Бренда: статьи, посты, сценарии для видео.',
    descriptionEn: 'Creating unique, personalized content for your Personal Brand: articles, posts, video scripts.',
    purposeRu:
      'Сервис знает ваш Личный Бренд с «самого рождения» - с этапа Аудита. Это позволяет создавать исключительно персонализированный контент.',
    purposeEn:
      "The service knows your Personal Brand 'from birth' - from the Audit stage. This allows creating exceptionally personalized content.",
    faqRu: [
      {
        question: 'Какой контент можно заказать?',
        answer:
          'PR-статьи, посты для социальных сетей, сценарии для видео, email-рассылки и любой другой текстовый контент.',
      },
    ],
    faqEn: [
      {
        question: 'What content can be ordered?',
        answer: 'PR articles, social media posts, video scripts, email newsletters and any other text content.',
      },
    ],
  },
];

export function getStepPricing(lang: 'en' | 'ru') {
  return stepsPricing.map((step) => ({
    step: step.step,
    icon: step.icon,
    title: lang === 'ru' ? step.titleRu : step.titleEn,
    oldPrice: step.oldPrice,
    newPrice: step.newPrice,
    description: lang === 'ru' ? step.descriptionRu : step.descriptionEn,
    purpose: lang === 'ru' ? step.purposeRu : step.purposeEn,
    faq: lang === 'ru' ? step.faqRu : step.faqEn,
  }));
}
