/**
 * About page content data
 * Consolidates all language-specific text content for the about page
 */

import type { SupportedLanguage, LocalizedContent } from '@/types/i18n';

// =============================================================================
// TYPES
// =============================================================================

export interface AboutCardContent {
  title: string;
  description: string;
  icon: 'audit' | 'products' | 'financial' | 'launch';
}

export interface AboutPageContent {
  breadcrumb: string;
  mainTitle: string;
  welcomeTitle: string;
  welcomeIntro: string;
  welcomeDescription: string;

  // Section: Secret in foundation
  secretTitle: string;
  secretParagraph1: string;
  secretParagraph2: string;

  // Section: What does the service do
  serviceTitle: string;
  serviceIntro: string;
  serviceCards: AboutCardContent[];
  serviceOutro: string;

  // Section: Reliability guarantee
  reliabilityTitle: string;
  reliabilityParagraph1: string;
  reliabilityParagraph2: string;
  reliabilityParagraph3: string;

  // Section: Your brand is not your appearance
  brandTitle: string;
  brandParagraph1: string;
  brandParagraph2: string;
  brandListItems: string[];
  brandParagraph3: string;

  // Section: Business Scout
  scoutTitle: string;
  scoutParagraph1: string;
  scoutParagraph2: string;

  // Section: Content that works
  contentTitle: string;
  contentParagraph1: string;
  contentParagraph2: string;
  contentParagraph3: string;
  contentSignature: string;

  // Section: No experience needed
  noExperienceTitle: string;
  noExperienceParagraph1: string;
  noExperienceParagraph2: string;
  noExperienceImportantLabel: string;
  noExperienceImportant: string;
  noExperienceParagraph3: string;
  noExperienceParagraph3Bold: string;

  // Section: Advantages articles
  advantagesSectionTitle: string;
  advantagesSectionSubtitle: string;
  readMoreButton: string;
  seeAllButton: string;

  // Image alts
  heroAlt: string;
  aboutServiceAlt: string;
  yourBrandAlt: string;
  contentAlt: string;
}

// =============================================================================
// ABOUT PAGE CONTENT DATA
// =============================================================================

export const aboutPageContent: LocalizedContent<AboutPageContent> = {
  ru: {
    breadcrumb: 'О проекте',
    mainTitle: 'АРХИТЕКТОР ЛИЧНЫХ БРЕНДОВ',
    welcomeTitle: 'Добро пожаловать на официальный сайт AI-сервиса «Архитектор Личных Брендов»',
    welcomeIntro:
      'Вы попали в кузницу, где рождаются по-настоящему прибыльные и надежные бизнесы, а не на очередную страницу модного инструмента.',
    welcomeDescription:
      'Личный Бренд — это не просто звучное имя, красивая внешность и набор постов в соцсетях. Это полноценный, прибыльный и, что самое главное, самореализующий Бизнес. С одним условием — нужно отнестись к нему не менее серьезно, как к любому проекту, приносящему солидный доход. «Вишенка на торте» — факт того, что бизнес под названием «Личный Бренд» принадлежит только ВАМ, и отнять его не сможет никто и никогда.',

    secretTitle: 'Секрет в фундаменте: почему AI-сервис «Архитектор Личных Брендов» — это принципиально другой подход',
    secretParagraph1:
      'Как сейчас принято «создавать» Личные Бренды? В основном, этим занимаются брендинговые или PR-агентства, рекламщики. Они профессионально умеют создавать красивую картинку, информационный шум, писать и размещать PR-статьи, управлять репутацией и повышать узнаваемость. НО! Они работают только с теми, у кого уже есть большие бюджеты, готовые продукты или хотя бы четкое понимание, чего клиент хочет в информационном поле.',
    secretParagraph2:
      '«Архитектор Личных Брендов» работает иначе. Сервис не пиарит, а строит бизнес с нуля под названием «Ваш Личный Бренд». Он разрабатывает полноценную, эффективную и приносящую доход Бизнес-Модель, подстроенную под одного конкретного человека, начиная от глубокого аудита, аналитики, позиционирования и заканчивая созданием линейки цифровых продуктов с четкими расчетами — бизнес-планом, включая финансовую модель, дорожную карту и медиаплан.',

    serviceTitle: 'Что именно делает сервис?',
    serviceIntro:
      'Представьте, что Личный Бренд — это ваш дом. Обычные специалисты могут красиво покрасить стены, оформить интерьер, повесить дорогие шторы — то есть, сделать рекламу и PR. Сервис «Архитектор Личных Брендов» проектирует и строит с нуля: закладывает фундамент, проводит коммуникации, возводит несущие конструкции, и только потом приступает к отделке и благоустройству.',
    serviceCards: [
      {
        title: 'Проводит аудит',
        description:
          'Сервис глубоко анализирует ваши скрытые и даже незамеченные вами качества и уникальный опыт, которые лягут в основу вашего Личного Бренда.',
        icon: 'audit',
      },
      {
        title: 'Разрабатывает продукты, приносящие доход',
        description:
          'Он не просто консультирует, а создает для вас готовые, структурированные цифровые продукты (например, онлайн-курсы или детализированные расписанные консультации, гайды, чек-листы и т.д.), готовые к немедленному запуску.',
        icon: 'products',
      },
      {
        title: 'Создает финансовую модель и план действий',
        description:
          'Сервис проводит полное исследование рынка, ниши и конкурентов, чтобы установить правильную цену, которая будет положительно воспринята аудиторией. Формирует детальный бизнес-план с финансовой моделью и дорожной картой.',
        icon: 'financial',
      },
      {
        title: 'Полностью готовит к запуску',
        description:
          'Сервис создает профессиональные Технические Задания для дизайнеров и разработчиков, чтобы ваш Личный Бренд выглядел достойно. Разрабатывает четкую контент-стратегию и медиаплан для продвижения.',
        icon: 'launch',
      },
    ],
    serviceOutro:
      '«Архитектор Личных Брендов» возьмёт Вас за руку и пошагово, методично поможет создать Вам самый ликвидный бизнес -  ваш Личный Бренд',
    reliabilityTitle: 'Гарантия надежности: Что стоит за этим проектом',
    reliabilityParagraph1:
      'Сервис «Архитектор Личных Брендов» — результат 28-летнего опыта предпринимателя, разработавшего за время своей карьеры более 100 бизнес-планов для себя и клиентов, из которых более 75% получили финансирование. Для этого проекта была использована методология бизнес-планирования, по которой он защитил свою докторскую диссертацию по бизнес-планированию, признанная экспертным сообществом.',
    reliabilityParagraph2:
      'AI-сервис «Архитектор Личных Брендов» — это не обычный сервис копирайтинга, цена которого определяется «от балды», потому что «все так делают», по наитию или финансовому шантажу.',
    reliabilityParagraph3:
      'Вы также можете ознакомиться с его Резюме, опубликованном на признанной в мире профессиональной деловой соцсети LinkedIn — которая требует и проверяет предоставленную в этом резюме информацию.',
    brandTitle: 'ВАШ БРЕНД — ЭТО НЕ ВАША ВНЕШНОСТЬ',
    brandParagraph1:
      'Автор сервиса знает, что страх публичности и страх показывать свое лицо (из-за возраста, внешности или неуверенности) для подавляющего большинства людей — это самый серьезный психологический барьер.',
    brandParagraph2:
      'Он не будет пытаться убедить вас преодолеть этот страх. Потому что Личный Бренд, который разрабатывает AI-сервис, базируется не на вашей внешности, а на вашем внутреннем мире, на вашем «Я»:',
    brandListItems: [
      'На ваших уникальных талантах, навыках и опыте',
      'На ваших человеческих качествах и уникальном способе мышления',
    ],
    brandParagraph3:
      'Именно это ценят люди и именно за это они готовы платить. Если вы не хотите показывать себя — не нужно. Ваш Личный Бренд — это бизнес-модель, которая работает даже когда вы остаетесь в тени.',

    scoutTitle: 'ЖИВОЕ ДОКАЗАТЕЛЬСТВО СТРАТЕГИИ: БИЗНЕС-СЛЕДОПЫТ',
    scoutParagraph1:
      'Вы можете увидеть эффективность этой модели своими глазами: Основатель и автор AI-сервиса, Бизнес-Следопыт, ведет свой бизнес под псевдонимом и не показывает лицо. Его 28-летний опыт — это не просто теория, это живое доказательство того, что можно создать прибыльную, масштабируемую бизнес-модель, ориентированную только на личные качества и уникальные навыки, без привязки к внешности.',
    scoutParagraph2:
      'Вы можете узнать о жизненном и бизнес-опыте создателя сервиса «Архитектор Личных Брендов» на его персональном сайте «Хроники Бизнес-Следопыта».',

    contentTitle: 'Контент, который работает на вас',
    contentParagraph1:
      'После того как фундамент вашего бизнеса заложен, сервис продолжает работать как ваш персональный контент-хаб и интерактивный медиапланировщик.',
    contentParagraph2:
      '«Архитектор» знает ваш Личный Бренд «с рождения» — с момента аудита и позиционирования. Поэтому любой контент, который вы планируете создать (PR-статья, пост в соцсетях, сценарий видео), всегда будет максимально персонализированным, уникальным и, главное, соответствующим вашей бизнес-модели и стратегии.',
    contentParagraph3:
      'Прямо сейчас вы находитесь на сайте сервиса, который помогает заложить фундамент для самого надежного бизнеса в вашей жизни. До него всего 10 пошаговых шагов. Перестройте свою реальность и живите той жизнью, о которой всегда мечтали и стремились.',
    contentSignature: 'С глубоким уважением,<br />Ваш Архитектор',

    noExperienceTitle: 'Не нужен ни опыт, ни большой бюджет, ни месяцы ожидания',
    noExperienceParagraph1:
      'Сервис максимально упростил для Вас сложнейший процесс создания бизнеса. Вам не нужно учиться на бизнес-аналитика, маркетолога или финансового эксперта. Вам даже не потребуется никого из них нанимать. Всё, что Вам необходимо делать – это вдумчиво и развёрнуто отвечать на вопросы. Только брифинг и ничего более. Остальное «Архитектор Личных Брендов» сделает сам за считанные минуты',
    noExperienceParagraph2:
      'В результате Вы получите детальный, готовый к реализации бизнес-проект с готовыми цифровыми продуктами, продуманной маркетинговой стратегией и рассчитанной воронкой продаж. И вам не нужна команда профессионалов, которая обошлась бы в кругленькую сумму и несколько месяцев ожидания',
    noExperienceImportantLabel: 'ОЧЕНЬ ВАЖНО:',
    noExperienceImportant:
      'этот сервис даёт возможность создать реальный бизнес практически любому человеку. Ни один консультант, а тем более ни одно агентство не станут работать с клиентом, у которого нет большого бюджета. Здесь же полный цикл – от аудита до полноценного запуска – обойдётся Пользователю в очень скромную и доступную сумму. О стоимости Вы можете узнать на странице «Как это работает, или 10 шагов до запуска готового бизнеса «Ваш Личный Бренд».',
    noExperienceParagraph3: 'Вы создадите бизнес, который даст Вам то, к чему Вы стремитесь – ',
    noExperienceParagraph3Bold: 'свободу и финансовую независимость от места и обстоятельств',

    advantagesSectionTitle: 'Преимущества AI-сервиса',
    advantagesSectionSubtitle: 'Читайте наши статьи',
    readMoreButton: 'Читать далее',
    seeAllButton: 'Смотреть все',

    heroAlt: 'Архитектор Личных Брендов',
    aboutServiceAlt: 'О сервисе',
    yourBrandAlt: 'Ваш Бренд',
    contentAlt: 'Контент',
  },
  en: {
    breadcrumb: 'About',
    mainTitle: 'ARCHITECT OF PERSONAL BRANDS',
    welcomeTitle: 'Welcome to the official website of the AI-service "Architect of Personal Brands"',
    welcomeIntro:
      "You've entered a forge where truly profitable and reliable businesses are born, not just another trendy tool page.",
    welcomeDescription:
      'A Personal Brand is not just a catchy name, beautiful appearance, and a set of social media posts. It\'s a full-fledged, profitable, and most importantly, self-realizing Business. With one condition - you need to take it not so seriously, like any project that brings solid income. The "cherry on top" is the fact that a business called "Personal Brand" belongs only to YOU, and no one will ever be able to take it away.',

    secretTitle:
      'The secret in the foundation: why AI-service "Architect of Personal Brands" is a fundamentally different approach',
    secretParagraph1:
      'How is it customary to "create" Personal Brands now? Basically, branding or PR agencies, advertisers do this. They professionally know how to create a beautiful picture, informational noise, write and post PR articles, manage reputation and increase recognition. BUT! They only work with those who already have big budgets, ready products, or at least a clear understanding of what the client wants in the information field.',
    secretParagraph2:
      '"Architect of Personal Brands" works differently. The service doesn\'t PR, but builds a business from scratch under the name "Your Personal Brand". It develops a complete, effective and income-generating Business Model, tailored for one specific person, starting from a deep audit, analytics, positioning and ending with the creation of a line of digital products with clear calculations - a business plan, including a financial model, roadmap and media plan.',

    serviceTitle: 'What exactly does the service do?',
    serviceIntro:
      'Imagine that a Personal Brand is your home. Ordinary specialists can beautifully paint the walls, design the interior, hang expensive curtains - that is, make advertising and PR. The service "Architect of Personal Brands" designs and builds from scratch: lays the foundation, runs communications, erects load-bearing structures, and only then starts finishing and landscaping.',
    serviceCards: [
      {
        title: 'Conducts an audit',
        description:
          'The service deeply analyzes your hidden and even unnoticed qualities and unique experience that will form the basis of your Personal Brand.',
        icon: 'audit',
      },
      {
        title: 'Develops income-generating products',
        description:
          "It doesn't just advise, but creates ready-made, structured digital products for you (for example, online courses or detailed scheduled consultations, guides, checklists, etc.) that are ready for immediate launch.",
        icon: 'products',
      },
      {
        title: 'Creates a financial model and action plan',
        description:
          'The service conducts a full market research, niche and competitors to set the right price that will be positively received by the audience. It forms a detailed business plan with a financial model and roadmap.',
        icon: 'financial',
      },
      {
        title: 'Fully prepares for launch',
        description:
          'The service creates professional Technical Specifications for designers and developers so that your Personal Brand looks dignified. It develops a clear content strategy and media plan for promotion.',
        icon: 'launch',
      },
    ],
    serviceOutro:
      'The "Architect of Personal Brands" will take you by the hand and step by step, methodically help you create the most liquid business - your Personal Brand',

    reliabilityTitle: 'Reliability Guarantee: What stands behind this project',
    reliabilityParagraph1:
      'The "Architect of Personal Brands" service is the result of 28 years of entrepreneurial experience, having developed over 100 business plans for himself and clients during his career, of which more than 75% received funding. For this project, the business planning methodology was used, on which he defended his doctoral dissertation on business planning, recognized by the expert community.',
    reliabilityParagraph2:
      'The AI-service "Architect of Personal Brands" is not an ordinary copywriting service, the price of which is determined "out of thin air", because "everyone does it", by intuition or financial blackmail.',
    reliabilityParagraph3:
      'You can also review his Resume, published on the world-recognized professional business social network LinkedIn — which requires and verifies the information provided in this resume.',

    brandTitle: 'YOUR BRAND IS NOT YOUR APPEARANCE',
    brandParagraph1:
      'The author of the service knows that the fear of publicity and fear of showing your face (due to age, appearance, or insecurity) for the vast majority of people is the most serious psychological barrier.',
    brandParagraph2:
      'He will not try to convince you to overcome this fear. Because the Personal Brand that the AI-service develops is based not on your appearance, but on your inner world, on your "I":',
    brandListItems: [
      'On your unique talents, skills, and experience',
      'On your human qualities and unique way of thinking',
    ],
    brandParagraph3:
      "This is what people value, and this is what they are willing to pay for. If you don't want to show yourself — you don't have to. Your Personal Brand is a business model that works even when you stay in the shadows.",

    scoutTitle: 'LIVING PROOF OF STRATEGY: BUSINESS SCOUT',
    scoutParagraph1:
      'You can see the effectiveness of this model firsthand: The Founder and author of the AI-service, Business Scout, runs his business under a pseudonym and does not show his face. His 28-year experience is not just theory, it is living proof that you can create a profitable, scalable business model focused only on personal qualities and unique skills, without being tied to appearance.',
    scoutParagraph2:
      'You can learn about the life and business experience of the creator of the "Architect of Personal Brands" service on his personal website "Chronicles of Business Scout".',

    contentTitle: 'Content that works for you',
    contentParagraph1:
      'After your business foundation is laid, the service continues to work as your personal content hub and interactive media planner.',
    contentParagraph2:
      '"Architect" knows your Personal Brand "from birth" - from the moment of audit and positioning. Therefore, any content you plan to create (PR article, social media post, video script) will always be as personalized, unique, and most importantly, match your business model and strategy.',
    contentParagraph3:
      "Right now you are on the website of the service that helps you lay the foundation for the most reliable business in your life. Only 10 step-by-step steps separate you from it. Rebuild your reality and live the life you've always dreamed of and aspired to.",
    contentSignature: 'With deep respect,<br />Your Architect',

    noExperienceTitle: 'No experience, big budget, or months of waiting needed',
    noExperienceParagraph1:
      'The service has simplified the complex process of creating a business as much as possible for you. You don\'t need to study to become a business analyst, marketer, or financial expert. You won\'t even need to hire any of them. All you need to do is thoughtfully and thoroughly answer the questions. Just briefing and nothing more. The "Architect of Personal Brands" will do the rest in a matter of minutes',
    noExperienceParagraph2:
      "As a result, you will receive a detailed, ready-to-implement business project with ready-made digital products, a well-thought-out marketing strategy, and a calculated sales funnel. And you don't need a team of professionals that would cost a pretty penny and several months of waiting",
    noExperienceImportantLabel: 'VERY IMPORTANT:',
    noExperienceImportant:
      "this service makes it possible for almost anyone to create a real business. No consultant, let alone agency, will work with a client who doesn't have a large budget. Here, the full cycle – from audit to full launch – will cost the User a very modest and affordable amount. You can learn about the cost on the \"How It Works, or 10 Steps to Launching a Ready Business 'Your Personal Brand'\" page.",
    noExperienceParagraph3: 'You will create a business that will give you what you strive for – ',
    noExperienceParagraph3Bold: 'freedom and financial independence from place and circumstances',

    advantagesSectionTitle: 'Advantages of the AI-service',
    advantagesSectionSubtitle: 'Read our articles',
    readMoreButton: 'Read more',
    seeAllButton: 'See all',

    heroAlt: 'Personal Brand Architect',
    aboutServiceAlt: 'About the service',
    yourBrandAlt: 'Your Brand',
    contentAlt: 'Content',
  },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get about page content for a specific language
 */
export function getAboutContent(lang: SupportedLanguage): AboutPageContent {
  return aboutPageContent[lang];
}
