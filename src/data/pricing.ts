/**
 * Pricing data for the 10 steps to create a Personal Brand business
 * Restructured with translations object for better maintainability
 */

import type { SupportedLanguage, LocalizedContent } from '@/types/i18n';

// =============================================================================
// TYPES
// =============================================================================

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepTranslation {
  title: string;
  description: string;
  purpose: string;
  faq: FaqItem[];
}

export interface StepPricingBase {
  step: number;
  icon: string;
  oldPrice: number | string;
  newPrice: number | string;
}

export interface StepPricing extends StepPricingBase {
  translations: LocalizedContent<StepTranslation>;
}

/** Localized step for display */
export interface LocalizedStep {
  step: number;
  icon: string;
  title: string;
  oldPrice: number | string;
  newPrice: number | string;
  description: string;
  purpose: string;
  faq: FaqItem[];
}

// =============================================================================
// PRICING DATA
// =============================================================================

const stepsPricing: StepPricing[] = [
  {
    step: 1,
    icon: 'heroicons:user',
    oldPrice: 16,
    newPrice: 0,
    translations: {
      ru: {
        title: 'АУДИТ ЛИЧНОСТИ',
        description:
          'На этом первом этапе сервис проводит глубокий аудит вашей личности, опыта, навыков и скрытых талантов. Это интеллектуальное интервью, где вам нужно честно и развернуто отвечать на вопросы. Сервис анализирует полученные данные, используя методы, сопоставимые с работой профессионального аудитора и бизнес-психолога.',
        purpose:
          'Этот этап необходим, чтобы найти ваши уникальные «бриллианты», которые всегда были при вас, но оставались незамеченными. Аудит позволяет увидеть себя с совершенно новой стороны, выявить неиспользованный потенциал и определить истинные сильные стороны, которые станут фундаментом вашего Личного Бренда и его будущей монетизации. Без этого шага невозможно построить уникальный и эффективный бизнес.',
        faq: [
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
      },
      en: {
        title: 'PERSONALITY AUDIT',
        description:
          'At this first stage, the service conducts a deep audit of your personality, experience, skills and hidden talents. This is an intellectual interview where you need to answer questions honestly and thoroughly. The service analyzes the received data using methods comparable to the work of a professional auditor and business psychologist.',
        purpose:
          'This stage is necessary to find your unique "diamonds" that have always been with you but remained unnoticed. The audit allows you to see yourself from a completely new perspective, identify untapped potential and determine the true strengths that will become the foundation of your Personal Brand and its future monetization. Without this step, it is impossible to build a unique and effective business.',
        faq: [
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
    },
  },
  {
    step: 2,
    icon: 'heroicons:chat-bubble-left-right',
    oldPrice: 19,
    newPrice: 9,
    translations: {
      ru: {
        title: 'ПОЗИЦИОНИРОВАНИЕ ЛИЧНОГО БРЕНДА',
        description:
          'На этом этапе сервис помогает определить уникальное позиционирование вашего Личного Бренда на рынке. Анализируется ваша целевая аудитория, конкуренты и формируется уникальное торговое предложение.',
        purpose:
          'Позиционирование определяет, как вас будут воспринимать клиенты и чем вы отличаетесь от конкурентов. Это фундамент для всех маркетинговых активностей.',
        faq: [
          {
            question: 'Сколько времени занимает этот этап?',
            answer: 'В среднем этап занимает 2-3 дня при активной работе с анкетами.',
          },
        ],
      },
      en: {
        title: 'PERSONAL BRAND POSITIONING',
        description:
          'At this stage, the service helps determine the unique positioning of your Personal Brand in the market. Your target audience, competitors are analyzed and a unique selling proposition is formed.',
        purpose:
          'Positioning determines how customers will perceive you and what makes you different from competitors. This is the foundation for all marketing activities.',
        faq: [
          {
            question: 'How long does this stage take?',
            answer: 'On average, the stage takes 2-3 days with active work on questionnaires.',
          },
        ],
      },
    },
  },
  {
    step: 3,
    icon: 'heroicons:currency-dollar',
    oldPrice: 35,
    newPrice: 27,
    translations: {
      ru: {
        title: 'МОНЕТИЗАЦИЯ. МОДЕЛИ МОНЕТИЗАЦИИ',
        description:
          'Сервис анализирует все возможные модели монетизации вашего Личного Бренда и подбирает наиболее подходящие именно для вас.',
        purpose:
          'Этот этап позволяет понять, как именно ваш Личный Бренд будет приносить доход. Без четкой модели монетизации невозможно построить прибыльный бизнес.',
        faq: [
          {
            question: 'Какие модели монетизации существуют?',
            answer:
              'Существует множество моделей: консультации, онлайн-курсы, менторство, цифровые продукты, партнерские программы и другие.',
          },
        ],
      },
      en: {
        title: 'MONETIZATION. MONETIZATION MODELS',
        description:
          'The service analyzes all possible monetization models for your Personal Brand and selects the most suitable ones for you.',
        purpose:
          'This stage allows you to understand exactly how your Personal Brand will generate income. Without a clear monetization model, it is impossible to build a profitable business.',
        faq: [
          {
            question: 'What monetization models exist?',
            answer:
              'There are many models: consulting, online courses, mentoring, digital products, affiliate programs and others.',
          },
        ],
      },
    },
  },
  {
    step: 4,
    icon: 'heroicons:archive-box',
    oldPrice: 'от $59',
    newPrice: 47,
    translations: {
      ru: {
        title: 'РАЗРАБОТКА ПРОДУКТОВОЙ ЛИНЕЙКИ',
        description:
          'На этом этапе создается линейка цифровых продуктов, которые будут приносить вам доход. Сервис помогает разработать структуру, содержание и ценообразование продуктов.',
        purpose:
          'Продуктовая линейка - это основа вашего бизнеса. Правильно разработанные продукты будут продаваться и приносить стабильный доход.',
        faq: [
          {
            question: 'Какие продукты можно создать?',
            answer: 'Онлайн-курсы, вебинары, консультации, чек-листы, гайды, электронные книги и многое другое.',
          },
        ],
      },
      en: {
        title: 'PRODUCT LINE DEVELOPMENT',
        description:
          'At this stage, a line of digital products is created that will bring you income. The service helps develop the structure, content and pricing of products.',
        purpose:
          'The product line is the foundation of your business. Well-designed products will sell and bring stable income.',
        faq: [
          {
            question: 'What products can be created?',
            answer: 'Online courses, webinars, consultations, checklists, guides, e-books and much more.',
          },
        ],
      },
    },
  },
  {
    step: 5,
    icon: 'heroicons:chart-bar',
    oldPrice: 189,
    newPrice: 175,
    translations: {
      ru: {
        title: 'ИССЛЕДОВАНИЕ РЫНКА, КОНКУРЕНТНЫЙ АНАЛИЗ, ЦЕНООБРАЗОВАНИЕ И МАРКЕТИНГОВАЯ СТРАТЕГИЯ',
        description:
          'Комплексное исследование рынка, анализ конкурентов, разработка стратегии ценообразования и маркетинговой стратегии для вашего Личного Бренда.',
        purpose:
          'Без понимания рынка и конкурентов невозможно выстроить эффективную стратегию. Этот этап дает полную картину рыночной ситуации.',
        faq: [
          {
            question: 'Насколько детальным будет анализ?',
            answer:
              'Анализ включает изучение прямых и косвенных конкурентов, ценовых стратегий, каналов продвижения и целевой аудитории.',
          },
        ],
      },
      en: {
        title: 'MARKET RESEARCH, COMPETITIVE ANALYSIS, PRICING AND MARKETING STRATEGY',
        description:
          'Comprehensive market research, competitor analysis, development of pricing strategy and marketing strategy for your Personal Brand.',
        purpose:
          'Without understanding the market and competitors, it is impossible to build an effective strategy. This stage provides a complete picture of the market situation.',
        faq: [
          {
            question: 'How detailed will the analysis be?',
            answer:
              'The analysis includes the study of direct and indirect competitors, pricing strategies, promotion channels and target audience.',
          },
        ],
      },
    },
  },
  {
    step: 6,
    icon: 'heroicons:sparkles',
    oldPrice: 99,
    newPrice: 84,
    translations: {
      ru: {
        title: 'ПРОФЕССИОНАЛЬНАЯ УПАКОВКА: ВИЗУАЛИЗАЦИЯ ВАШЕГО ЛИЧНОГО БРЕНДА',
        description:
          'Создание визуальной идентичности вашего Личного Бренда: логотип, цветовая палитра, типографика и другие элементы дизайна.',
        purpose:
          'Визуальная упаковка - это первое впечатление, которое вы производите на потенциальных клиентов. Профессиональный дизайн повышает доверие и узнаваемость.',
        faq: [
          {
            question: 'Что входит в упаковку?',
            answer:
              'Техническое задание для дизайнера, рекомендации по стилю, цветам, шрифтам и общей визуальной концепции.',
          },
        ],
      },
      en: {
        title: 'PROFESSIONAL PACKAGING: VISUALIZATION OF YOUR PERSONAL BRAND',
        description:
          'Creating the visual identity of your Personal Brand: logo, color palette, typography and other design elements.',
        purpose:
          'Visual packaging is the first impression you make on potential customers. Professional design increases trust and recognition.',
        faq: [
          {
            question: 'What is included in the packaging?',
            answer:
              'Technical specifications for the designer, recommendations on style, colors, fonts and overall visual concept.',
          },
        ],
      },
    },
  },
  {
    step: 7,
    icon: 'heroicons:briefcase',
    oldPrice: 162,
    newPrice: 147,
    translations: {
      ru: {
        title: 'БИЗНЕС-ПЛАН, ФИНАНСОВАЯ МОДЕЛЬ И ДОРОЖНАЯ КАРТА',
        description:
          'Комплексный бизнес-план с финансовыми прогнозами, расчетами окупаемости и пошаговой дорожной картой развития.',
        purpose:
          'Бизнес-план - это ваш компас и гарантия жизнеспособности бизнеса. Он собирает всю проделанную работу в один документ.',
        faq: [
          {
            question: 'Что включает финансовая модель?',
            answer: 'Прогноз доходов и расходов, точка безубыточности, ROI, сроки окупаемости инвестиций.',
          },
        ],
      },
      en: {
        title: 'BUSINESS PLAN, FINANCIAL MODEL AND ROADMAP',
        description:
          'Comprehensive business plan with financial forecasts, payback calculations and step-by-step development roadmap.',
        purpose:
          'The business plan is your compass and guarantee of business viability. It collects all the work done into one document.',
        faq: [
          {
            question: 'What does the financial model include?',
            answer: 'Revenue and expense forecast, break-even point, ROI, investment payback periods.',
          },
        ],
      },
    },
  },
  {
    step: 8,
    icon: 'heroicons:document-text',
    oldPrice: 69,
    newPrice: 57,
    translations: {
      ru: {
        title: 'КОНТЕНТ-СТРАТЕГИЯ',
        description:
          'Разработка полноценной контент-стратегии: темы, форматы, частота публикаций, каналы распространения контента.',
        purpose:
          'Контент - это топливо для вашего бизнеса. Правильная контент-стратегия обеспечивает постоянный приток новых клиентов.',
        faq: [
          {
            question: 'Сколько контента нужно создавать?',
            answer: 'Стратегия учитывает ваши возможности и ресурсы, предлагая оптимальный объем контента.',
          },
        ],
      },
      en: {
        title: 'CONTENT STRATEGY',
        description:
          'Development of a full-fledged content strategy: topics, formats, publication frequency, content distribution channels.',
        purpose:
          'Content is the fuel for your business. The right content strategy ensures a constant flow of new customers.',
        faq: [
          {
            question: 'How much content do I need to create?',
            answer:
              'The strategy takes into account your capabilities and resources, offering the optimal amount of content.',
          },
        ],
      },
    },
  },
  {
    step: 9,
    icon: 'heroicons:rocket-launch',
    oldPrice: 139,
    newPrice: 125,
    translations: {
      ru: {
        title: 'СТРАТЕГИЯ ПРОДВИЖЕНИЯ И МЕДИАПЛАН',
        description: 'Детальный план продвижения вашего Личного Бренда с конкретными действиями, сроками и бюджетами.',
        purpose:
          'Медиаплан - это ваша дорожная карта к успеху. Без четкого плана продвижения невозможно достичь целей.',
        faq: [
          {
            question: 'Какие каналы продвижения используются?',
            answer:
              'Социальные сети, контекстная реклама, SEO, email-маркетинг, партнерства и другие каналы в зависимости от вашей ниши.',
          },
        ],
      },
      en: {
        title: 'PROMOTION STRATEGY AND MEDIA PLAN',
        description: 'A detailed plan for promoting your Personal Brand with specific actions, deadlines and budgets.',
        purpose:
          'The media plan is your roadmap to success. Without a clear promotion plan, it is impossible to achieve goals.',
        faq: [
          {
            question: 'What promotion channels are used?',
            answer:
              'Social networks, contextual advertising, SEO, email marketing, partnerships and other channels depending on your niche.',
          },
        ],
      },
    },
  },
  {
    step: 10,
    icon: 'heroicons:wrench-screwdriver',
    oldPrice: 'от $2',
    newPrice: 'от $2',
    translations: {
      ru: {
        title: 'ПРОИЗВОДСТВО ПЕРСОНАЛИЗИРОВАННОГО КОНТЕНТА',
        description:
          'Создание уникального, персонализированного контента для вашего Личного Бренда: статьи, посты, сценарии для видео.',
        purpose:
          'Сервис знает ваш Личный Бренд с «самого рождения» - с этапа Аудита. Это позволяет создавать исключительно персонализированный контент.',
        faq: [
          {
            question: 'Какой контент можно заказать?',
            answer:
              'PR-статьи, посты для социальных сетей, сценарии для видео, email-рассылки и любой другой текстовый контент.',
          },
        ],
      },
      en: {
        title: 'PERSONALIZED CONTENT PRODUCTION',
        description: 'Creating unique, personalized content for your Personal Brand: articles, posts, video scripts.',
        purpose:
          "The service knows your Personal Brand 'from birth' - from the Audit stage. This allows creating exceptionally personalized content.",
        faq: [
          {
            question: 'What content can be ordered?',
            answer: 'PR articles, social media posts, video scripts, email newsletters and any other text content.',
          },
        ],
      },
    },
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get localized step pricing data
 */
export function getStepPricing(lang: SupportedLanguage): LocalizedStep[] {
  return stepsPricing.map((step) => ({
    step: step.step,
    icon: step.icon,
    oldPrice: step.oldPrice,
    newPrice: step.newPrice,
    ...step.translations[lang],
  }));
}

/**
 * Get a single step by number
 */
export function getStepByNumber(stepNumber: number, lang: SupportedLanguage): LocalizedStep | undefined {
  const step = stepsPricing.find((s) => s.step === stepNumber);
  if (!step) return undefined;

  return {
    step: step.step,
    icon: step.icon,
    oldPrice: step.oldPrice,
    newPrice: step.newPrice,
    ...step.translations[lang],
  };
}

/**
 * Get total count of steps
 */
export function getStepsCount(): number {
  return stepsPricing.length;
}
