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
    welcomeTitle: 'Добро пожаловать на официальный сайт AI-сервиса «Архитектор Личных Брендов».',
    welcomeIntro:
      'Вы попали в кузницу, в которой с помощью передовых технологий проектируются по-настоящему системные и надежные бизнесы. Это не страница очередного «модного инструмента» — это вход в пространство большой бизнес-архитектуры.',
    welcomeDescription:
      'Личный Бренд — это не просто яркое название, красивая внешность или набор постов в социальных сетях. С помощью сервиса «APB» Вы можете преобразовать свои таланты, навыки и своё имя в полноценный, прибыльный и быстрореализуемый цифровой актив. \nПри одном единственном условии — если Вы сами решите относиться к нему так же серьезно, как к любому проекту, приносящему солидные доходы. «Вишенка на торте» заключается в том, что онлайн-бизнес под названием «Личный Бренд» принадлежит только ВАМ.',

    secretTitle: 'Секрет в фундаменте: почему AI-сервис «Архитектор Личных Брендов» - это принципиально другой подход.',
    secretParagraph1:
      'Как принято «создавать» Личные бренды сейчас? В основном, этим занимаются брендинговые или PR-агентства, рекламщики. Они профессионально умеют создавать красивую картинку, информационный шум, писать и размещать PR-статьи, управлять репутацией и повышать узнаваемость. НО! Они работают только с теми, у кого есть большие бюджеты, готовый продукт или хотя бы четкое понимание того, чего именно хочет клиент в информационном поле.',
    secretParagraph2:
      '«Архитектор Личных Брендов» работает иначе. С помощью инструментов сервиса Вы не просто «пиаритесь», а с нуля проектируете Ваш онлайн бизнес. Вы разрабатываете полноценную, эффективную и нацеленную на доход бизнес-модель, заточенную под Вас как под конкретную личность: начиная от глубинного аудита и разработки позиционирования и заканчивая проектированием авторских цифровых продуктов с рассчитанным бизнес-планом, включающим финансовую модель и дорожную карту.',

    serviceTitle: 'Что именно Вы создаете с помощью сервиса?',
    serviceIntro:
      'Представьте, что Личный бренд – это ваш дом. Обычные специалисты могут красиво покрасить стены, сделать дизайн интерьера, повесить дорогие шторы (сделать рекламу и PR). С помощью сервиса «Архитектор Личных Брендов» Вы проектируете и строите «здание» с нуля: закладываете фундамент, прокладываете коммуникации, возводите несущие конструкции и только потом приступаете к отделке и благоустройству.',
    serviceCards: [
      {
        title: 'Проводите аудит потенциала',
        description:
          'Вы глубоко анализируете свои скрытые качества и уникальный опыт, которые с помощью алгоритмов ИИ превращаются в прочный фундамент Вашего Бренда.',
        icon: 'audit',
      },
      {
        title: 'Разрабатываете продукты для монетизации',
        description:
          'Вы не просто получаете советы, а с помощью сервиса проектируете АВТОРСКИЕ цифровые продукты (курсы, системы консультаций, гайды), архитектура которых полностью подготовлена к техническому воплощению и запуску.',
        icon: 'products',
      },
      {
        title: 'Расчитаете финансовую модель и план действий',
        description:
          'С помощью инструментов сервиса Вы проводите исследование рынка и ниши, чтобы определить цену, нацеленную на успех. Вы формируете подробный бизнес-план и финансовую модель — документы, создание которых у профессиональных аналитиков стоит тысячи долларов и занимает месяцы.',
        icon: 'financial',
      },
      {
        title: 'Подготовитесь к профессиональному старту',
        description:
          'Вы создаете четкие Технические Задания для специалистов и разрабатываете контент-стратегию, чтобы Ваш Личный Бренд с первого дня выглядел достойно и дорого.',
        icon: 'launch',
      },
    ],
    serviceOutro:
      'С помощью сервиса «Архитектор Личных Брендов» Вы пошагово, методично сможете создать свой первый надёжный онлайн бизнес с авторскими цифровыми активами.',

    reliabilityTitle: 'Гарантия надёжности: Кто стоит за этим проектом',
    reliabilityParagraph1:
      'Такой комплексный, проработанный до мелочей сервис не могли самостоятельно создать ни PR-агентства, ни рекламщики, ни даже IT-специалисты. Для этого нужен опыт построения реальных, работающих бизнесов.',
    reliabilityParagraph2:
      'AI-сервис «Архитектор Личных Брендов» - это авторский проект профессионального бизнес-консультанта, известного под псевдонимом Business Pathfinder, с 28-летним опытом в кризис-менеджементе, бизнес-аналитике, M&A-сделок и экспансии на международные рынки.',
    reliabilityParagraph3:
      'Этот опыт и позволил разработать систему, которая помогает Вам создавать успешные модели, учитывая даже психологический аспект: при создании сильного бренда важно быть откровенным, но люди часто стесняются раскрываться перед живым консультантом. «Архитектор Личных Брендов» решает эту проблему, благодаря использованию ИИ: Пользователь знает, что общается с безличным интеллектом. Это снимает психологические барьеры. Человек перестает стесняться, отбрасывает страх осуждения, оценки или непонимания и готов отвечать максимально честно, прямо и открыто.',

    brandTitle: 'ВАШ БРЕНД — ЭТО НЕ ВАША ВНЕШНОСТЬ',
    brandParagraph1:
      'Страх публичности для подавляющего большинства людей — это самый серьезный психологический барьер.',
    brandParagraph2:
      'С помощью сервиса Вы проектируете Личный Бренд, основанный на Вашем внутреннем мире и талантах, а не на картинке. Если Вы не хотите показывать лицо — Вы можете этого не делать.',
    brandListItems: [],
    brandParagraph3:
      'С помощью методологии APB Вы создаете бизнес-модель, которая может работать, даже когда Вы остаетесь в тени.',

    scoutTitle: 'ЖИВОЕ ДОКАЗАТЕЛЬСТВО СТРАТЕГИИ',
    scoutParagraph1:
      'Вы можете убедиться в этом сами: Основатель сервиса, Бизнес-Следопыт, сам ведет бизнес под псевдонимом и не демонстрирует свое лицо. Его успех — это живой пример того, что с помощью правильных инструментов можно создать масштабный проект, ориентированную только на Ваши уникальные навыки.',
    scoutParagraph2:
      'Узнать о жизненом и деловом опыте создателя сервиса «Архитектор Личных Брендов» Вы можете на его личном сайте «Хроники Бизнес-Следопыта»',

    contentTitle: 'Контент, который работает на Вас',
    contentParagraph1:
      'После того, как Вы заложили фундамент, сервис продолжает помогать Вам как личный контент-цех. Любой созданный Вами материал (посты, сценарии, статьи) будет идеально соответствовать Вашей стратегии, потому что «Архитектор» знает Ваш проект с самого момента его «рождения».',
    contentParagraph2:
      'Всего 10 пошаговых этапов отделяют Вас от этого. С помощью сервиса Вы закладываете основу для той реальности и того уровня свободы, к которым всегда стремились.',
    contentParagraph3: '',
    contentSignature: 'С глубоким Почтением,<br />Ваш Архитектор',

    noExperienceTitle: 'Вам не нужно быть опытным экспертом с большим стартовым капиталом.',
    noExperienceParagraph1:
      'Сервис максимально упростил для Вас сложнейшие процессы. Вам не нужно учиться на бизнес-аналитика, маркетолога или финансового эксперта. Вам не потребуется нанимать дорогую команду экспертов.',
    noExperienceParagraph2:
      'Всё, что Вам необходимо делать – это вдумчиво и развёрнуто отвечать на вопросы. Только анкетирование и ничего более. Всю аналитическую нагрузку сервис берет на себя.',
    noExperienceImportantLabel: '',
    noExperienceImportant:
      'В результате Вы получаете детальный, готовый к реализации бизнес-проект с готовыми цифровыми продуктами, продуманной маркетинговой стратегией и рассчитанной воронкой продаж. И вам не нужна команда профессионалов, которая обошлась бы в кругленькую сумму и несколько месяцев ожидания.',
    noExperienceParagraph3: 'О стоимости Вы можете узнать на странице «Как это работает».',
    noExperienceParagraph3Bold: '',

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
    welcomeTitle: 'Welcome to the official website of the AI-service "Architect of Personal Brands".',
    welcomeIntro:
      'You have entered a forge where truly systemic and reliable businesses are designed using advanced technologies. This is not the page of another "trendy tool" — this is the entrance to the space of big business architecture.',
    welcomeDescription:
      'A Personal Brand is not just a catchy name, beautiful appearance, or a set of posts on social networks. With the help of the "APB" service, you can transform your talents, skills, and your name into a full-fledged, profitable, and quickly implementable digital asset. \nOn one single condition — if you yourself decide to treat it as seriously as any project that brings solid income. The "cherry on top" lies in the fact that the online business called "Personal Brand" belongs only to YOU.',

    secretTitle:
      'The secret in the foundation: why the AI-service "Architect of Personal Brands" is a fundamentally different approach.',
    secretParagraph1:
      'How is it customary to "create" Personal Brands now? Basically, branding or PR agencies and advertisers do this. They professionally know how to create a beautiful picture, informational noise, write and place PR articles, manage reputation, and increase recognition. BUT! They only work with those who have big budgets, a ready-made product, or at least a clear understanding of exactly what the client wants in the information field.',
    secretParagraph2:
      '"Architect of Personal Brands" works differently. With the help of the service tools, you are not just "PR-ing" yourself, but designing your online business from scratch. You develop a full-fledged, effective, and income-oriented business model tailored to You as a specific individual: starting from deep audit and positioning development to designing original digital products with a calculated business plan, including a financial model and a roadmap.',

    serviceTitle: 'What exactly do you create with the help of the service?',
    serviceIntro:
      'Imagine that a Personal Brand is your house. Ordinary specialists can beautifully paint the walls, do interior design, hang expensive curtains (do advertising and PR). With the help of the "Architect of Personal Brands" service, you design and build a "building" from scratch: lay the foundation, lay communications, erect load-bearing structures, and only then proceed to finishing and landscaping.',
    serviceCards: [
      {
        title: 'Conduct potential audit',
        description:
          'You deeply analyze your hidden qualities and unique experience, which, with the help of AI algorithms, turn into a solid foundation for your Brand.',
        icon: 'audit',
      },
      {
        title: 'Develop products for monetization',
        description:
          "You don't just get advice, but with the help of the service, you design AUTHOR'S digital products (courses, consultation systems, guides), the architecture of which is fully prepared for technical implementation and launch.",
        icon: 'products',
      },
      {
        title: 'Calculate financial model and action plan',
        description:
          'With the help of the service tools, you conduct market and niche research to determine a price aimed at success. You form a detailed business plan and financial model — documents whose creation by professional analysts costs thousands of dollars and takes months.',
        icon: 'financial',
      },
      {
        title: 'Prepare for professional start',
        description:
          'You create clear Terms of Reference for specialists and develop a content strategy so that your Personal Brand looks dignified and expensive from day one.',
        icon: 'launch',
      },
    ],
    serviceOutro:
      'With the help of the "Architect of Personal Brands" service, you will be able to step-by-step, methodically create your first reliable online business with author\'s digital assets.',

    reliabilityTitle: 'Reliability Guarantee: Who is behind this project',
    reliabilityParagraph1:
      'Such a complex, detailed service could not be created independently by PR agencies, advertisers, or even IT specialists. This requires experience in building real, working businesses.',
    reliabilityParagraph2:
      'The AI-service "Architect of Personal Brands" is an author\'s project of a professional business consultant known under the pseudonym Business Pathfinder, with 28 years of experience in crisis management, business analytics, M&A deals, and expansion into international markets.',
    reliabilityParagraph3:
      'This experience allowed developing a system that helps you create successful models, taking into account even the psychological aspect: when creating a strong brand, it is important to be frank, but people are often shy to open up to a live consultant. "Architect of Personal Brands" solves this problem thanks to the use of AI: The user knows that they are communicating with an impersonal intelligence. This removes psychological barriers. A person stops being shy, discards the fear of judgment, evaluation, or misunderstanding, and is ready to answer as honestly, directly, and openly as possible.',

    brandTitle: 'YOUR BRAND IS NOT YOUR APPEARANCE',
    brandParagraph1: 'The fear of publicity for the vast majority of people is the most serious psychological barrier.',
    brandParagraph2:
      "With the help of the service, you design a Personal Brand based on your inner world and talents, not on a picture. If you don't want to show your face — you don't have to.",
    brandListItems: [],
    brandParagraph3:
      'With the help of the APB methodology, you create a business model that can work even when you stay in the shadows.',

    scoutTitle: 'LIVING PROOF OF STRATEGY',
    scoutParagraph1:
      'You can verify this yourself: The Founder of the service, Business Pathfinder, runs the business under a pseudonym and does not demonstrate his face. His success is a living example that with the help of the right tools, you can create a large-scale project focused only on your unique skills.',
    scoutParagraph2:
      'You can learn about the life and business experience of the creator of the "Architect of Personal Brands" service on his personal website "Chronicles of Business Pathfinder"',

    contentTitle: 'Content that works for You',
    contentParagraph1:
      'After you have laid the foundation, the service continues to help you as a personal content factory. Any material you create (posts, scripts, articles) will ideally match your strategy because "Architect" knows your project from the very moment of its "birth".',
    contentParagraph2:
      'Only 10 step-by-step stages separate you from this. With the help of the service, you lay the foundation for that reality and that level of freedom you have always strived for.',
    contentParagraph3: '',
    contentSignature: 'With deep Respect,<br />Your Architect',

    noExperienceTitle: "You don't need to be an experienced expert with a large starting capital.",
    noExperienceParagraph1:
      "The service has simplified the most complex processes for you as much as possible. You don't need to study to be a business analyst, marketer, or financial expert. You won't need to hire an expensive team of experts.",
    noExperienceParagraph2:
      'All you need to do is thoughtfully and detailedly answer questions. Only questioning and nothing more. The service takes all the analytical load on itself.',
    noExperienceImportantLabel: '',
    noExperienceImportant:
      "As a result, you receive a detailed, ready-to-implement business project with ready-made digital products, a well-thought-out marketing strategy, and a calculated sales funnel. And you don't need a team of professionals that would cost a pretty penny and several months of waiting.",
    noExperienceParagraph3: 'You can find out about the cost on the "How It Works" page.',
    noExperienceParagraph3Bold: '',

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
