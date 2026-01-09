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
  oldPrice?: number | string;
  newPrice?: number | string;
  discountText?: string;
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
  discountText?: string;
}

// =============================================================================
// PRICING DATA
// =============================================================================

const stepsPricing: StepPricing[] = [
  {
    step: 1,
    icon: 'heroicons:user',
    oldPrice: 10,
    newPrice: 8,
    translations: {
      ru: {
        title: 'АУДИТ ЛИЧНОСТИ',
        discountText: 'В первый раз БЕСПЛАТНО',
        description:
          'На этом первом этапе сервис проводит глубокий аудит вашей личности, опыта, навыков и скрытых талантов. Это интеллектуальное интервью, где вам нужно честно и развернуто отвечать на вопросы. Сервис анализирует полученные данные, используя аналитические алгоритмы, базирующиеся на методологиях бизнес-аудита и психологии личности.',
        purpose:
          'Этот этап необходим, чтобы найти ваши уникальные «бриллианты», которые всегда были при вас, но оставались незамеченными. Аудит позволяет увидеть себя с совершенно новой стороны, выявить неиспользованный потенциал и определить истинные сильные стороны, которые станут фундаментом вашего Личного Бренда и его будущей монетизации. Без этого шага невозможно построить уникальный и эффективный бизнес.',
        faq: [
          {
            question: 'Насколько конфиденциальны данные, которые я предоставляю в Аудите?',
            answer:
              'Ваши данные 100% конфиденциальны. Они хранятся в защищенных хранилищах и используются для улучшения AI-алгоритмов исключительно в обезличенной (анонимной) форме (см. Политику Конфиденциальности). Вы общаетесь с безличным интеллектом, что позволяет вам быть максимально честным, поскольку нет страха оценки или осуждения.',
          },
          {
            question: 'Что, если я не знаю, в чем мои сильные стороны или таланты?',
            answer:
              'Это нормально. Система разработана таким образом, чтобы, анализируя ваш опыт и ответы, находить те самые «бриллианты», которые вы сами могли не замечать или считать несущественными.',
          },
          {
            question: 'Зачем нужно так честно и развернуто отвечать на вопросы?',
            answer:
              'Абсолютная честность — это фундамент. Если данные Аудита будут неточными, вся дальнейшая бизнес-модель будет построена на ложных основаниях и не позволит сформировать эффективную бизнес-модель.',
          },
        ],
      },
      en: {
        title: 'PERSONALITY AUDIT',
        discountText: 'First time FREE',
        description:
          'At this first stage, the service conducts a deep audit of your personality, experience, skills, and hidden talents. This is an intellectual interview where you need to answer questions honestly and in detail. The service analyzes the data received, using analytical algorithms based on business audit methodologies and personality psychology.',
        purpose:
          'This stage is necessary to find your unique "diamonds" that have always been with you but remained unnoticed. The audit allows you to see yourself from a completely new perspective, identify unused potential, and determine the true strengths that will become the foundation of your Personal Brand and its future monetization. Without this step, it is impossible to build a unique and effective business.',
        faq: [
          {
            question: 'How confidential is the data I provide in the Audit?',
            answer:
              'Your data is 100% confidential. It is stored in secure storage and used to improve AI algorithms exclusively in an anonymized (anonymous) form (see Privacy Policy). You communicate with an impersonal intelligence, which allows you to be as honest as possible since there is no fear of evaluation or judgment.',
          },
          {
            question: "What if I don't know what my strengths or talents are?",
            answer:
              'This is normal. The system is designed in such a way that, by analyzing your experience and answers, it finds those very "diamonds" that you yourself might not have noticed or considered insignificant.',
          },
          {
            question: 'Why is it necessary to answer questions so honestly and in detail?',
            answer:
              'Absolute honesty is the foundation. If the Audit data is inaccurate, the entire future business model will be built on false grounds and will not allow forming an effective business model.',
          },
        ],
      },
    },
  },
  {
    step: 2,
    icon: 'heroicons:chat-bubble-left-right',
    oldPrice: 12,
    newPrice: 9.6,
    translations: {
      ru: {
        title: 'ПОЗИЦИОНИРОВАНИЕ ЛИЧНОГО БРЕНДА',
        description:
          'На основе данных аудита сервис разрабатывает уникальное позиционирование вашего Личного Бренда. Он определяет, с каким ключевым сообщением вы выйдете в мир, как вас будут воспринимать и как вы будете отличаться от всех остальных. На этом же шаге формируется точный портрет вашей Целевой Аудитории (ЦА) — тех самых «избранных» людей, которым вы будете интересны и полезны.',
        purpose:
          'Это важнейший шаг в построении бизнеса. Вы не можете нравиться всем — это неэффективно. Правильное позиционирование гарантирует, что вы будете привлекать именно вашу аудиторию и говорить с ней на одном языке. Это определяет ваше место на рынке и то, как мир будет видеть и воспринимать ваш бренд.',
        faq: [
          {
            question: 'Что такое «позиционирование» и почему оно важнее, чем просто «имидж»?',
            answer:
              'Позиционирование — это определение вашего уникального места на рынке (для кого вы и против кого вы). Имидж — это просто внешний вид. Наше позиционирование — это стратегический магнит, который привлекает нужных людей.',
          },
          {
            question: 'Как сервис находит мою Целевую Аудиторию (ЦА)?',
            answer:
              'ЦА определяется на основе вашего уникального Позиционирования и того, кому ваши «бриллианты» (из Этапа 1) принесут наибольшую пользу.',
          },
          {
            question: 'Могу ли я изменить позиционирование в будущем?',
            answer:
              'Вы можете это сделать, но это не рекомендуется. Позиционирование — это фундамент. Его изменение потребует пересмотра всей стратегии и продуктов. Поэтому если Вы осознали, что не совсем открыто отвечали на вопросы, то рекомендуем заново пройти этот этап или даже вернуться к первому этапу и начать всё с нуля.',
          },
        ],
      },
      en: {
        title: 'PERSONAL BRAND POSITIONING',
        description:
          'Based on the audit data, the service develops a unique positioning for your Personal Brand. It determines what key message you will go out into the world with, how you will be perceived, and how you will differ from everyone else. At this same step, a precise portrait of your Target Audience (TA) is formed — those very "chosen" people to whom you will be interesting and useful.',
        purpose:
          'This is the most important step in building a business. You cannot please everyone — it is ineffective. Correct positioning guarantees that you will attract exactly your audience and speak the same language with them. This determines your place in the market and how the world will see and perceive your brand.',
        faq: [
          {
            question: 'What is "positioning" and why is it more important than just "image"?',
            answer:
              'Positioning is the definition of your unique place in the market (who you are for and who you are against). Image is just appearance. Our positioning is a strategic magnet that attracts the right people.',
          },
          {
            question: 'How does the service find my Target Audience (TA)?',
            answer:
              'The TA is determined based on your unique Positioning and who will benefit most from your "diamonds" (from Stage 1).',
          },
          {
            question: 'Can I change the positioning in the future?',
            answer:
              'You can do this, but it is not recommended. Positioning is the foundation. Changing it will require revising the entire strategy and products. Therefore, if you realized that you did not answer the questions quite openly, we recommend going through this stage again or even returning to the first stage and starting everything from scratch.',
          },
        ],
      },
    },
  },
  {
    step: 3,
    icon: 'heroicons:currency-dollar',
    oldPrice: 19,
    newPrice: 15.2,
    translations: {
      ru: {
        title: 'МОНЕТИЗАЦИЯ. МОДЕЛИ МОНЕТИЗАЦИИ.',
        description:
          'Сервис подбирает и разрабатывает модели монетизации, которые подходят исключительно для вашего Личного Бренда. Он анализирует не только ваши существующие навыки, но и раскрытый потенциал, обнаруженный на первом этапе расшифровки ДНК Вашей Личности.',
        purpose:
          'Личный Бренд — это бизнес. А бизнес должен приносить деньги. Этот этап переводит вашу уникальность в четкие финансовые потоки. Здесь вы узнаете, на чем и как именно вы будете зарабатывать, используя свои знания и опыт.',
        faq: [
          {
            question: 'Это точно принесет доход?',
            answer:
              'Алгоритмы сервиса заточены на поиск прибыльных моделей. Сам доход зависит от вашей активности и следования дальнейшим этапам (Создание продукта, Продвижение). Сервис предоставляет расчетные модели, реализация которых зависит от рыночных факторов и действий Пользователя.',
          },
          {
            question: 'Это только про онлайн-курсы или есть другие варианты?',
            answer:
              'Нет, сервис предлагает широкий спектр моделей монетизации, включая консалтинг, менторство, инфопродукты, партнерские программы и другие, которые подходят именно вам.',
          },
          {
            question: 'Что, если мне не подойдет ни одна из предложенных моделей?',
            answer:
              'Модели подбираются на основе вашего Аудита, что гарантирует их максимальное соответствие вашему потенциалу. Вы можете вернуться к Аудиту для уточнения данных, если сомневаетесь.',
          },
        ],
      },
      en: {
        title: 'MONETIZATION. MONETIZATION MODELS.',
        description:
          'The service selects and develops monetization models that are suitable exclusively for your Personal Brand. It analyzes not only your existing skills but also the revealed potential found at the first stage of decoding your Personality DNA.',
        purpose:
          'A Personal Brand is a business. And a business must bring money. This stage translates your uniqueness into clear financial flows. Here you will learn what and how exactly you will earn using your knowledge and experience.',
        faq: [
          {
            question: 'Will this definitely bring income?',
            answer:
              'The service algorithms are attuned to finding profitable models. The income itself depends on your activity and following the further stages (Product Creation, Promotion). The service provides calculation models, the implementation of which depends on market factors and User actions.',
          },
          {
            question: 'Is this only about online courses or are there other options?',
            answer:
              'No, the service offers a wide range of monetization models, including consulting, mentoring, info-products, affiliate programs, and others that are suitable exactly for you.',
          },
          {
            question: 'What if none of the proposed models suits me?',
            answer:
              'Models are selected based on your Audit, which guarantees their maximum correspondence to your potential. You can return to the Audit to clarify data if you have doubts.',
          },
        ],
      },
    },
  },
  {
    step: 4,
    icon: 'heroicons:archive-box',
    oldPrice: 'от $27',
    newPrice: 'от $21.6',
    translations: {
      ru: {
        title: 'РАЗРАБОТКА ПРОДУКТОВОЙ ЛИНЕЙКИ',
        description:
          'Вы создаете свой первый цифровой продукт (или несколько продуктов), который будет приносить доход. Сервис структурирует и наполняет контентом интеллектуальные продукты (например, цифровые). Если это онлайн-курс, то он будет разделен на модули, уроки с описаниями и заданиями, с мини-экзаменами в конце. Если это консультация, сервис разработает четкий сценарий: тайминг, контент, вопросы и даже материалы для отправки клиенту после сессии. Это полностью авторский продукт, созданный под ваш уникальный Бренд.',
        purpose:
          'Продукт — это то, что вы продаете. Это материальное воплощение ценности вашего Личного Бренда. Сервис гарантирует, что продукт будет готов к немедленному запуску, профессионально структурирован и наполнен контентом, чтобы сразу начать приносить доход.',
        faq: [
          {
            question: 'Я получу готовый курс или только набросок?',
            answer:
              'Вы получаете полностью готовый продукт с логикой, модулями, ценностью, позиционированием и контентом (описанием, заданиями к каждому уроку), то есть продукт готовый к запуску.',
          },
          {
            question: 'Могу ли я продавать физические товары, используя эту модель?',
            answer:
              'Сервис специализируется на интеллектуальных (цифровых) продуктах, поскольку они лучше масштабируются и являются самым ликвидным активом Личного Бренда.',
          },
          {
            question: 'Что, если мне нужно больше 10 модулей для курса?',
            answer:
              'Курс до 10 модулей — это рекомендованный формат. Рекомендуется создать несколько курсов или разделить информацию на несколько частей, чтобы продукт был максимально ценным и не перегруженным.',
          },
        ],
      },
      en: {
        title: 'PRODUCT LINE DEVELOPMENT',
        description:
          "You create your first digital product (or several products) that will generate income. The service structures and fills intellectual products with content (for example, digital ones). If it is an online course, it will be divided into modules, lessons with descriptions and assignments, with mini-exams at the end. If it is a consultation, the service will develop a clear script: timing, content, questions, and even materials to send to the client after the session. This is a fully author's product created for your unique Brand.",
        purpose:
          'The product is what you sell. It is the material embodiment of the value of your Personal Brand. The service guarantees that the product will be ready for immediate launch, professionally structured, and filled with content to start generating income immediately.',
        oldPrice: 'from $27',
        newPrice: 'from $21.6',
        faq: [
          {
            question: 'Will I get a ready-made course or just a draft?',
            answer:
              'You get a completely ready product with logic, modules, value, positioning, and content (description, assignments for each lesson), that is, a product ready for launch.',
          },
          {
            question: 'Can I sell physical goods using this model?',
            answer:
              'The service specializes in intellectual (digital) products since they scale better and are the most liquid asset of a Personal Brand.',
          },
          {
            question: 'What if I need more than 10 modules for a course?',
            answer:
              'A course of up to 10 modules is the recommended format. It is recommended to create several courses or divide the information into several parts so that the product is maximally valuable and not overloaded.',
          },
        ],
      },
    },
  },
  {
    step: 5,
    icon: 'heroicons:chart-bar',
    oldPrice: 124,
    newPrice: 99.2,
    translations: {
      ru: {
        title: 'ИССЛЕДОВАНИЕ РЫНКА, КОНКУРЕНТНЫЙ АНАЛИЗ, ЦЕНООБРАЗОВАНИЕ И МАРКЕТИНГОВАЯ СТРАТЕГИЯ',
        description:
          'На этом шаге проводится исследование рынка, ниши и целевой аудитории под разработанный продукт. Сервис поможет сделать детальный конкурентный анализ. На основе всех этих данных формируется идеальная цена на ваш продукт и маркетинговая стратегия.',
        purpose:
          'Неправильная цена — причина провала большинства запусков. Цена должна быть привлекательной для аудитории, но при этом обеспечивать вашу прибыльность. Исследование рынка и конкурентный анализ помогают обосновать стратегию ценообразования и повысить вероятность успешного рыночного старта.',
        faq: [
          {
            question: 'Как определяется «правильная» цена?',
            answer:
              'Цена определяется на пересечении трех факторов: себестоимость (ваше время/усилия), цены конкурентов (анализ рынка) и реальной покупательной способности вашей целевой аудитории.',
          },
          {
            question: 'Могу ли я доверять конкурентному анализу, сделанному AI?',
            answer:
              'Да. AI способен обрабатывать и сопоставлять данные о конкурентах гораздо быстрее и точнее, чем команда аналитиков, минимизируя влияние субъективных факторов. Но также очень важно ваше сотрудничество: подготовьте список ссылок на Ваших конкурентов (сайты, аккаунты в соц. сетях) – это даст наиболее полную картину, что сделает Вашу маркетинговую стратегию сильнее.',
          },
          {
            question: 'Что, если цена, которую мне предлагает AI, кажется слишком высокой?',
            answer:
              'Цена — это всегда расчет. Сервис использует реальные рыночные данные. Высокая цена часто отражает высокую уникальность и ценность вашего бренда, определенную на предыдущих этапах. Тем не менее Ваше решение – это приоритет. Сервис даёт рекомендованную цену и информацию в целом.',
          },
        ],
      },
      en: {
        title: 'MARKET RESEARCH, COMPETITOR ANALYSIS, PRICING, AND MARKETING STRATEGY',
        description:
          'At this step, market, niche, and target audience research is conducted for the developed product. The service will help make a detailed competitive analysis. Based on all this data, the ideal price for your product and a marketing strategy are formed.',
        purpose:
          'Wrong price is the reason for the failure of most launches. The price must be attractive to the audience but at the same time ensure your profitability. Market research and competitive analysis help justify the pricing strategy and increase the probability of a successful market start.',
        faq: [
          {
            question: 'How is the "right" price determined?',
            answer:
              'The price is determined at the intersection of three factors: cost price (your time/effort), competitor prices (market analysis), and the real purchasing power of your target audience.',
          },
          {
            question: 'Can I trust the competitive analysis done by AI?',
            answer:
              'Yes. AI is capable of processing and comparing data on competitors much faster and more accurately than a team of analysts, minimizing the influence of subjective factors. But your cooperation is also very important: prepare a list of links to your competitors (websites, social media accounts) – this will give the most complete picture, which will make your marketing strategy stronger.',
          },
          {
            question: 'What if the price the AI suggests seems too high?',
            answer:
              'Price is always a calculation. The service uses real market data. A high price often reflects the high uniqueness and value of your brand determined at previous stages. Nevertheless, Your decision is the priority. The service gives a recommended price and information in general.',
          },
        ],
      },
    },
  },
  {
    step: 6,
    icon: 'heroicons:sparkles',
    oldPrice: 99,
    newPrice: 79.2,
    translations: {
      ru: {
        title: 'ПРОФЕССИОНАЛЬНАЯ УПАКОВКА: ВИЗУАЛИЗАЦИЯ ВАШЕГО ЛИЧНОГО БРЕНДА.',
        description:
          'Сервис создает профессиональный пакет Технических Заданий (ТЗ) для визуальной упаковки вашего Личного Бренда и продукта. Вы получаете 4 готовых ТЗ:\n1. На разработку Логотипа, Брендбука и Фирменного стиля.\n2. На разработку Медиабука (брендинг для видео-контента).\n3. На разработку сайта-визитки Личного Бренда.\n4. На разработку оформления социальных сетей.\nТЗ написаны на профессиональном языке, четко структурированы и готовы к немедленной отправке подрядчикам.',
        purpose:
          'Упаковка — это первое впечатление. Профессиональные ТЗ исключают двойное толкование и гарантируют, что подрядчики (дизайнеры, разработчики) сделают работу качественно и в соответствии с вашей бизнес-стратегией. Вы сами решаете, что делать самостоятельно, а что делегировать.\nЭтот этап МОЖНО пропустить.',
        faq: [
          {
            question: 'Почему я получаю только ТЗ, а не готовый дизайн?',
            answer:
              'AI не создает сам дизайн, но создает идеальное ТЗ, которое гарантирует получение качественного дизайна от любого подрядчика. Это экономит вам время на объяснения и правки.',
          },
          {
            question: 'Поймет ли сторонний дизайнер или разработчик это ТЗ?',
            answer:
              'Да, ТЗ подготовлены на профессиональном языке, четко структурированы и исключают двойное толкование, что вызывает уважение у профессиональных подрядчиков.',
          },
          {
            question: 'Могу ли я сам создать упаковку, используя эти ТЗ?',
            answer:
              'Если Вы обладаете необходимыми навыками, то Вы можете использовать ТЗ как подробную инструкцию для самостоятельной работы: например, для оформления аккаунтов в социальных сетях, или разработки Вашего брендбука. В частности Вы можете загрузить техническое задание в специализированную нейросеть и сгенерировать логотип. Но для лучшего результата (особенно для разработки сайта) рекомендуется нанять подрядчиков.',
          },
        ],
      },
      en: {
        title: 'PROFESSIONAL PACKAGING: VISUALIZATION OF YOUR PERSONAL BRAND',
        description:
          'The service creates a professional package of Terms of Reference (TOR) for the visual packaging of your Personal Brand and product. You receive 4 ready-made TORs:\n1. For the development of a Logo, Brandbook, and Corporate Identity.\n2. For the development of a Mediabook (branding for video content).\n3. For the development of a Personal Brand business card website.\n4. For the development of social media design.\nThe TORs are written in professional language, clearly structured, and ready for immediate sending to contractors.',
        purpose:
          'Packaging is the first impression. Professional TORs exclude double interpretation and guarantee that contractors (designers, developers) will do the work qualitatively and in accordance with your business strategy. You decide what to do yourself and what to delegate.\nThis stage CAN be skipped.',
        faq: [
          {
            question: 'Why do I receive only TOR and not the finished design?',
            answer:
              'AI does not create the design itself, but creates the ideal TOR, which guarantees receiving a high-quality design from any contractor. This saves you time on explanations and revisions.',
          },
          {
            question: 'Will a third-party designer or developer understand this TOR?',
            answer:
              'Yes, the TORs are prepared in professional language, clearly structured, and exclude double interpretation, which commands respect from professional contractors.',
          },
          {
            question: 'Can I create the packaging myself using these TORs?',
            answer:
              'If you possess the necessary skills, you can use the TOR as detailed instructions for independent work: for example, for designing social media accounts or developing your brandbook. In particular, you can upload the technical assignment to a specialized neural network and generate a logo. But for the best result (especially for website development), it is recommended to hire contractors.',
          },
        ],
      },
    },
  },
  {
    step: 7,
    icon: 'heroicons:briefcase',
    oldPrice: 162,
    newPrice: 129.6,
    translations: {
      ru: {
        title: 'БИЗНЕС-ПЛАН, ФИНАНСОВАЯ МОДЕЛЬ И ДОРОЖНАЯ КАРТА',
        description:
          'Самый важный этап, когда вся проделанная работа формируется в один мощный документ. Сервис разрабатывает подробный бизнес-план с четкой, реальной финансовой моделью и дорожной картой (пошаговым планом реализации).',
        purpose:
          'Это ваш путеводитель и доказательство гипотезы о жизнеспособности бизнеса. Бизнес-план с финансовой моделью — это ваш внутренний компас. Он покажет, когда вы начнете получать прибыль, какие финансовые вливания Вам нужны и какие шаги необходимо предпринять в первую очередь. Это расчет, исключающий работу «на авось».',
        faq: [
          {
            question: 'Могу ли я использовать этот документ для привлечения инвесторов?',
            answer:
              'Да. Документ содержит профессионально рассчитанную финансовую модель и четкую стратегию, что делает его ценным для потенциальных инвесторов.',
          },
          {
            question: 'Что такое Дорожная карта и почему она важна?',
            answer:
              'Дорожная карта — это четкий, календарный план действий, который показывает, какие задачи нужно выполнить, в какие сроки, и какой результат это должно принести.',
          },
          {
            question: 'Могу ли я доверять финансовой модели, созданной AI?',
            answer:
              'Да, финансовая модель основана на профессиональной логике, заложенной Бизнес-Следопытом, и является реальным расчетом, а не догадкой.',
          },
        ],
      },
      en: {
        title: 'BUSINESS PLAN, FINANCIAL MODEL, AND ROADMAP',
        description:
          'The most important stage when all the work done is formed into one powerful document. The service develops a detailed business plan with a clear, real financial model and a roadmap (step-by-step implementation plan).',
        purpose:
          'This is your guide and proof of the hypothesis about the viability of the business. A business plan with a financial model is your internal compass. It will show when you will start making a profit, what financial injections you need, and what steps need to be taken first. This is a calculation that excludes working "at random".',
        faq: [
          {
            question: 'Can I use this document to attract investors?',
            answer:
              'Yes. The document contains a professionally calculated financial model and a clear strategy, which makes it valuable for potential investors.',
          },
          {
            question: 'What is a Roadmap and why is it important?',
            answer:
              'A Roadmap is a clear, calendar plan of actions that shows what tasks need to be completed, in what timeframe, and what result this should bring.',
          },
          {
            question: 'Can I trust the financial model created by AI?',
            answer:
              'Yes, the financial model is based on professional logic laid down by the Business Pathfinder and is a real calculation, not a guess.',
          },
        ],
      },
    },
  },
  {
    step: 8,
    icon: 'heroicons:document-text',
    oldPrice: 89,
    newPrice: 69.6,
    translations: {
      ru: {
        title: 'КОНТЕНТ-СТРАТЕГИЯ',
        description:
          'Разработка детализированной и четко структурированной контент-стратегии для эффективного взаимодействия с аудиторией на всех выбранных платформах (в социальных сетях). Сервис формирует темы, рубрики, форматы и тональность общения.',
        purpose:
          'Контент — это ваше топливо для бизнеса. Контент-стратегия дает вам четкий план, что публиковать и когда, чтобы постоянно вовлекать аудиторию, укреплять свой статус эксперта и, в конечном итоге, стимулировать продажи ваших продуктов.',
        faq: [
          {
            question: 'На каких платформах я должен быть?',
            answer:
              'Сервис анализирует вашу ЦА, продукт и ваши «бриллианты», рекомендуя 2-3 наиболее эффективные для вас площадки.',
          },
          {
            question: 'Это просто план постов на месяц?',
            answer:
              'Нет, это стратегия, которая включает логику воронки, рубрикаторы, тональность и цели контента на долгосрочную перспективу, а не календарь публикаций.',
          },
          {
            question: 'Как часто мне нужно будет постить?',
            answer:
              'Контент-стратегия предложит оптимальную частоту, исходя из ресурса вашего времени и требований выбранных площадок, чтобы не допустить выгорания.',
          },
        ],
      },
      en: {
        title: 'CONTENT STRATEGY',
        description:
          'Development of a detailed and clearly structured content strategy for effective interaction with the audience on all chosen platforms (in social networks). The service forms topics, headings, formats, and tone of communication.',
        purpose:
          'Content is your fuel for business. A content strategy gives you a clear plan of what to publish and when to constantly engage the audience, strengthen your expert status, and ultimately stimulate sales of your products.',
        faq: [
          {
            question: 'On which platforms should I be?',
            answer:
              'The service analyzes your TA, product, and your "diamonds", recommending 2-3 most effective platforms for you.',
          },
          {
            question: 'Is this just a post plan for a month?',
            answer:
              'No, this is a strategy that includes funnel logic, rubricators, tonality, and content goals for the long term, not a publication calendar.',
          },
          {
            question: 'How often will I need to post?',
            answer:
              'The content strategy will suggest the optimal frequency based on your time resources and the requirements of the chosen platforms to prevent burnout.',
          },
        ],
      },
    },
  },
  {
    step: 9,
    icon: 'heroicons:rocket-launch',
    oldPrice: 59,
    newPrice: 47.2,
    translations: {
      ru: {
        title: 'СТРАТЕГИЯ ПРОДВИЖЕНИЯ И МЕДИАПЛАН',
        description:
          'Разработка стратегии продвижения и создание медиаплана. Это детальный календарный план активностей, который показывает, что и когда нужно делать для работы с аудиторией. Здесь рассчитывается рекламная воронка, устанавливаются ключевые KPI (ключевые показатели эффективности) и вторичные метрики, необходимые для мониторинга и своевременной корректировки действий.',
        purpose:
          'Это ваша карта наступления. Он переводит стратегию в конкретные действия, сроки и измеримые результаты. Вы расчитаете показатели рекламной воронки, сколько трафика нужно привлечь и как этот трафик должен конвертироваться в реальные продажи, а также сможете контролировать успешность своих рекламных кампаний.',
        faq: [
          {
            question: 'Нужен ли большой бюджет, чтобы эта стратегия сработала?',
            answer:
              'Нет, стратегия основана на реалистичных расчетах и предлагает план действий, который вы сможете реализовать с минимальным бюджетом, наращивая его по мере получения дохода.',
          },
          {
            question: 'Что такое KPI и почему они важны?',
            answer:
              'KPI — это измеримые показатели успеха (например, стоимость клика, конверсия). Они важны, потому что позволяют вам перевести интуицию в четкие, управляемые цифры.',
          },
          {
            question: 'Включает ли стратегия создание рекламных креативов?',
            answer:
              'Стратегия дает идеи и требования к рекламным креативам, а также рекомендации по их размещению, но не генерирует сами баннеры или видео.',
          },
        ],
      },
      en: {
        title: 'PROMOTION STRATEGY AND MEDIA PLAN',
        description:
          'Development of a promotion strategy and creation of a media plan. This is a detailed calendar plan of activities that shows what and when needs to be done to work with the audience. Here the advertising funnel is calculated, key KPIs (key performance indicators) and secondary metrics necessary for monitoring and timely adjustment of actions are set.',
        purpose:
          'This is your attack map. It translates strategy into specific actions, deadlines, and measurable results. You will calculate the indicators of the advertising funnel, how much traffic needs to be attracted and how this traffic should convert into real sales, and you will also be able to control the success of your advertising campaigns.',
        faq: [
          {
            question: 'Do I need a large budget for this strategy to work?',
            answer:
              'No, the strategy is based on realistic calculations and offers an action plan that you can implement with a minimal budget, increasing it as you receive income.',
          },
          {
            question: 'What are KPIs and why are they important?',
            answer:
              'KPIs are measurable success indicators (for example, cost per click, conversion). They are important because they allow you to translate intuition into clear, manageable numbers.',
          },
          {
            question: 'Does the strategy include creating advertising creatives?',
            answer:
              'The strategy gives ideas and requirements for advertising creatives, as well as recommendations for their placement, but does not generate banners or videos themselves.',
          },
        ],
      },
    },
  },
  {
    step: 10,
    icon: 'heroicons:wrench-screwdriver',
    oldPrice: 'от $0.49',
    newPrice: 'от $0.39',
    translations: {
      ru: {
        title: 'ПРОИЗВОДСТВО ПЕРСОНАЛИЗИРОВАННОГО КОНТЕНТА',
        description:
          'После подготовки к запуску вы переходите к созданию контента внутри сервиса. Вы можете генерировать любой нужный вам контент: пиар-статьи, посты для социальных сетей, сценарии для видеороликов и многое другое.',
        purpose:
          'Это кульминация всего процесса. Сервис знает ваш Личный Бренд с самого «рождения»: с первого шага (Аудита). Весь сгенерированный контент будет максимально персонализирован, уникален и, что самое главное, всегда соответствовать вашему уникальному позиционированию, целям и бизнес-стратегии. Вы значительно сокращаете собственное время на написание постов и исключаете потребность в копирайтерах, так как сервис генерирует контент, уже интегрированный в вашу стратегию.',
        faq: [
          {
            question: 'Чем контент лучше, чем у обычного копирайтера?',
            answer:
              'Обычный копирайтер не знает вашу стратегию. Контент сервиса создается с учетом ВСЕГО бэкграунда бренда (Аудита, Позиционирования, Продукта) и всегда работает на продажи.',
          },
          {
            question: 'Насколько уникален этот контент?',
            answer:
              'Контент максимально уникален, поскольку он генерируется на основе ваших личных данных и уникального позиционирования. Это не просто перефразированные тексты из интернета.',
          },
          {
            question: 'Могу ли я использовать контент, созданный другими AI-сервисами?',
            answer:
              'Да, безусловно можете. Единственное, помните всегда, что контент, созданный внутри «Архитектора», обеспечивает максимальное стратегическое соответствие вашей бизнес-модели, снижая риск ошибок.',
          },
        ],
      },
      en: {
        title: 'PERSONALIZED CONTENT PRODUCTION',
        description:
          'After preparing for launch, you move on to creating content inside the service. You can generate any content you need: PR articles, posts for social networks, scripts for videos, and much more.',
        purpose:
          'This is the culmination of the entire process. The service knows your Personal Brand from its very "birth": from the first step (Audit). All generated content will be maximally personalized, unique, and, most importantly, always correspond to your unique positioning, goals, and business strategy. You significantly reduce your own time for writing posts and eliminate the need for copywriters, as the service generates content already integrated into your strategy.',
        oldPrice: 'from $0.49',
        newPrice: 'from $0.39',
        faq: [
          {
            question: 'How is the content better than from a regular copywriter?',
            answer:
              "A regular copywriter does not know your strategy. The service's content is created taking into account the ENTIRE background of the brand (Audit, Positioning, Product) and always works for sales.",
          },
          {
            question: 'How unique is this content?',
            answer:
              'The content is maximally unique because it is generated based on your personal data and unique positioning. These are not just rephrased texts from the internet.',
          },
          {
            question: 'Can I use content created by other AI services?',
            answer:
              'Yes, you certainly can. Using the "Architect" ensures maximum strategic compliance with your business model, reducing the risk of errors.',
          },
        ],
      },
    },
  },
  {
    step: 11,
    icon: 'heroicons:cpu-chip',
    oldPrice: '',
    newPrice: '',
    translations: {
      ru: {
        title: 'ЭТАП АВТОМАТИЗАЦИИ (Опционально)',
        description:
          'Помимо основных 10 этапов, существует 11-й, который вы подключаете, когда ваш бизнес-бренд начинает активно расти. На этом этапе сервис создает автоматизацию рутинных процессов, чтобы вы могли эффективно масштабироваться, освободить свое время и зарабатывать еще больше.',
        purpose: '',
        faq: [
          {
            question: 'Почему этот этап опциональный?',
            answer:
              'Он нужен только тогда, когда ваш бизнес уже приносит доход и требует масштабирования. На начальном этапе он не является критически важным.',
          },
          {
            question: 'Что именно автоматизируется?',
            answer:
              'Автоматизируется рутина: ответы на часто задаваемые вопросы, обработка оплат, отправка напоминаний, создание контента и регулярный постинг контента, другие повторяющиеся задачи: обработка заявок, выгрузка ключевых метрик в отчеты и т.п.',
          },
          {
            question: 'Зачем мне автоматизация, если я только начинаю?',
            answer:
              'Начинать лучше с ручного управления. Автоматизацию следует подключать, когда рутинные задачи начинают отнимать слишком много вашего времени и мешать росту.',
          },
        ],
      },
      en: {
        title: 'AUTOMATION STAGE (Optional)',
        description:
          'In addition to the main 10 steps, there is an 11th, which you connect when your business brand starts to grow actively. At this stage, the service creates automation of routine processes so that you can scale effectively, free up your time, and earn even more.',
        purpose: '',
        oldPrice: '',
        newPrice: '',
        faq: [
          {
            question: 'Why is this stage optional?',
            answer:
              'It is needed only when your business is already generating income and requires scaling. At the initial stage, it is not critical.',
          },
          {
            question: 'What exactly is automated?',
            answer:
              'Routine is automated: answers to frequently asked questions, payment processing, sending reminders, content creation and regular content posting, other repetitive tasks: application processing, uploading key metrics to reports, etc.',
          },
          {
            question: 'Why do I need automation if I am just starting?',
            answer:
              'It is better to start with manual management. Automation should be connected when routine tasks begin to take up too much of your time and interfere with growth.',
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
