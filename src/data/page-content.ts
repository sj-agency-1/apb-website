/**
 * Page-specific content data for all pages
 * This consolidates all language-specific text content from page templates
 */

import type { SupportedLanguage, LocalizedContent } from '@/types/i18n';

// =============================================================================
// LEGAL PAGES CONTENT (Simple placeholder pages)
// =============================================================================

export interface LegalPageContent {
  breadcrumb: string;
  placeholder: string;
}

export const legalPagesContent: Record<
  'privacy' | 'terms' | 'offer' | 'contentPolicy' | 'disclaimer' | 'affiliate',
  LocalizedContent<LegalPageContent>
> = {
  privacy: {
    ru: {
      breadcrumb: 'Политика конфиденциальности',
      placeholder: 'Контент страницы Политика конфиденциальности.',
    },
    en: {
      breadcrumb: 'Privacy Policy',
      placeholder: 'Privacy Policy content goes here.',
    },
  },
  terms: {
    ru: {
      breadcrumb: 'Пользовательское соглашение',
      placeholder: 'Контент страницы Пользовательское соглашение.',
    },
    en: {
      breadcrumb: 'Terms of Service',
      placeholder: 'Terms of Use content goes here.',
    },
  },
  offer: {
    ru: {
      breadcrumb: 'Договор оферты',
      placeholder: 'Контент страницы Договор оферты.',
    },
    en: {
      breadcrumb: 'Offer Agreement',
      placeholder: 'Offer Agreement content goes here.',
    },
  },
  contentPolicy: {
    ru: {
      breadcrumb: 'Политика использования контента',
      placeholder: 'Контент страницы Политика использования контента.',
    },
    en: {
      breadcrumb: 'Content Usage Policy',
      placeholder: 'Content Policy content goes here.',
    },
  },
  disclaimer: {
    ru: {
      breadcrumb: 'Отказ от гарантий и заявлений',
      placeholder: 'Контент страницы Отказ от гарантий и заявлений.',
    },
    en: {
      breadcrumb: 'Disclaimer',
      placeholder: 'Disclaimer content goes here.',
    },
  },
  affiliate: {
    ru: {
      breadcrumb: 'Условия Партнерской программы',
      placeholder: 'Контент страницы Условия Партнерской программы.',
    },
    en: {
      breadcrumb: 'Affiliate Program Terms',
      placeholder: 'Affiliate Program content goes here.',
    },
  },
};

// =============================================================================
// CONTACTS PAGE CONTENT
// =============================================================================

export interface ContactsPageContent {
  breadcrumb: string;
  heading: string;
  description: string;
  telegramSubtitle: string;
  emailSubtitle: string;
  phoneSubtitle: string;
  whatsappSubtitle: string;
  socialHeading: string;
  socialDescription: string;
  formHeading: string;
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  // Help card
  helpCardTitle: string;
  helpCardDescription: string;
  helpCardButton: string;
}

export const contactsPageContent: LocalizedContent<ContactsPageContent> = {
  ru: {
    breadcrumb: 'Контакты',
    heading: 'Свяжитесь с нами',
    description: 'Есть вопросы или нужна помощь? Мы здесь, чтобы помочь. Выберите наиболее удобный способ связи.',
    telegramSubtitle: 'Самый быстрый способ связи',
    emailSubtitle: 'Напишите нам письмо',
    phoneSubtitle: 'Позвоните нам',
    whatsappSubtitle: 'Напишите в WhatsApp',
    socialHeading: 'Мы в социальных сетях',
    socialDescription: 'Подписывайтесь на нас в социальных сетях, чтобы быть в курсе последних новостей и обновлений.',
    formHeading: 'Отправить сообщение',
    formName: 'Имя',
    formNamePlaceholder: 'Введите ваше имя',
    formEmail: 'Email',
    formEmailPlaceholder: 'Введите ваш email',
    formMessage: 'Сообщение',
    formMessagePlaceholder: 'Введите ваше сообщение',
    formSubmit: 'Отправить',
    helpCardTitle: 'Возникли вопросы?',
    helpCardDescription: 'Обратитесь в нашу тех.поддержку и наш менеджер свяжется с вами в ближайшее время',
    helpCardButton: 'Обратиться в поддержку',
  },
  en: {
    breadcrumb: 'Contacts',
    heading: 'Get in touch with us',
    description: "Have questions or need assistance? We're here to help. Choose the most convenient way to contact us.",
    telegramSubtitle: 'Fastest way to reach us',
    emailSubtitle: 'Send us an email',
    phoneSubtitle: 'Call us',
    whatsappSubtitle: 'Message us on WhatsApp',
    socialHeading: 'Follow us on social media',
    socialDescription: 'Follow us on social media to stay up to date with the latest news and updates.',
    formHeading: 'Send us a message',
    formName: 'Name',
    formNamePlaceholder: 'Enter your name',
    formEmail: 'Email',
    formEmailPlaceholder: 'Enter your email',
    formMessage: 'Message',
    formMessagePlaceholder: 'Enter your message',
    formSubmit: 'Send',
    helpCardTitle: 'Have questions?',
    helpCardDescription: 'Contact our support team and our manager will get back to you shortly',
    helpCardButton: 'Contact support',
  },
};

// =============================================================================
// REVIEWS PAGE CONTENT
// =============================================================================

export interface ReviewsPageContent {
  breadcrumb: string;
  heading: string;
  description: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  leaveReview: string;
  ageYears: string;
  translated: string;
  modalTitle: string;
  modalHeading: string;
  modalDescription: string;
  loginButton: string;
  registerButton: string;
  // Share experience card
  shareExperienceTitle: string;
  shareExperienceDescription: string;
  shareExperienceButton: string;
}

export const reviewsPageContent: LocalizedContent<ReviewsPageContent> = {
  ru: {
    breadcrumb: 'Отзывы',
    heading: 'Что говорят наши клиенты',
    description: 'Реальные отзывы людей, которые создали свой Личный Бренд-Бизнес с помощью нашего AI-сервиса.',
    ctaTitle: 'Готовы начать свой путь?',
    ctaDescription: 'Присоединяйтесь к тысячам довольных пользователей и создайте свой Личный Бренд уже сегодня.',
    ctaButton: 'Начать сейчас',
    leaveReview: 'Оставить отзыв',
    ageYears: 'лет',
    translated: 'Переведено',
    modalTitle: 'Оставить отзыв',
    modalHeading: 'Войдите в свой аккаунт',
    modalDescription:
      'Оставить отзыв могут только зарегистрированные пользователи. Зарегистрируйтесь на платформе AI-сервиса прямо сейчас и создайте свой онлайн бизнес!',
    loginButton: 'Войти',
    registerButton: 'Зарегистрироваться',
    shareExperienceTitle: 'Хотите поделиться опытом?',
    shareExperienceDescription:
      'Оставьте свой отзыв на сайте, чтобы другие пользователи узнали о вашем опыте работы с платформой',
    shareExperienceButton: 'Оставить отзыв',
  },
  en: {
    breadcrumb: 'Reviews',
    heading: 'What our users say',
    description: 'Real reviews from people who have built their Personal Brand business with our AI-service.',
    ctaTitle: 'Ready to start your journey?',
    ctaDescription: 'Join thousands of satisfied users and create your Personal Brand today.',
    ctaButton: 'Get started',
    leaveReview: 'Leave a review',
    ageYears: 'years',
    translated: 'Translated',
    modalTitle: 'Leave a review',
    modalHeading: 'Log in to your account',
    modalDescription:
      'Only registered users can leave a review. Register on the AI-service platform right now and create your online business!',
    loginButton: 'Log in',
    registerButton: 'Register',
    shareExperienceTitle: 'Want to share your experience?',
    shareExperienceDescription:
      'Leave your review on the site so that other users learn about your experience with the platform',
    shareExperienceButton: 'Leave a review',
  },
};

// =============================================================================
// FAQ PAGE CONTENT
// =============================================================================

export interface FaqPageContent {
  breadcrumb: string;
  heading: string;
  // Help card
  helpCardTitle: string;
  helpCardDescription: string;
  helpCardButton: string;
}

export const faqPageContent: LocalizedContent<FaqPageContent> = {
  ru: {
    breadcrumb: 'FAQ',
    heading: 'Часто задаваемые вопросы',
    helpCardTitle: 'Возникли вопросы?',
    helpCardDescription: 'Обратитесь в нашу тех.поддержку и наш менеджер свяжется с вами в ближайшее время',
    helpCardButton: 'Обратиться в поддержку',
  },
  en: {
    breadcrumb: 'FAQ',
    heading: 'Frequently Asked Questions',
    helpCardTitle: 'Have questions?',
    helpCardDescription: 'Contact our support team and our manager will get back to you shortly',
    helpCardButton: 'Contact support',
  },
};

// =============================================================================
// HOW IT WORKS PAGE CONTENT
// =============================================================================

export interface HowItWorksPageContent {
  breadcrumb: string;
  heading: string;
  description: string;
  stepsIntro: string;
  stepLabel: string;
  descriptionLabel: string;
  purposeLabel: string;
  faqLabel: string;
  priceLabel: string;
  promoPriceLabel: string;
}

export const howItWorksPageContent: LocalizedContent<HowItWorksPageContent> = {
  ru: {
    breadcrumb: 'Как это работает',
    heading: '10 шагов к созданию вашего Личного Бренда-Бизнеса',
    description:
      'AI-сервис «Архитектор Личных Брендов» — это не просто инструкция, а пошаговый маршрут, который ведет вас от самопознания до создания полноценного и прибыльного бизнеса. Весь процесс состоит из 10 ключевых этапов, проработанных до мельчайших деталей.',
    stepsIntro: 'Вот как выглядит этот путь:',
    stepLabel: 'Этап',
    descriptionLabel: 'Описание',
    purposeLabel: 'Для чего этот этап',
    faqLabel: 'Часто задаваемые Вопросы',
    priceLabel: 'Стоимость',
    promoPriceLabel: 'Стоимость по промокоду',
  },
  en: {
    breadcrumb: 'How It Works',
    heading: '10 Steps to Creating Your Personal Brand Business',
    description:
      'The AI-service "Architect of Personal Brands" is not just instructions, but a step-by-step route that leads you from self-discovery to creating a full-fledged and profitable business. The entire process consists of 10 key stages, worked out to the smallest details.',
    stepsIntro: "Here's what this path looks like:",
    stepLabel: 'Step',
    descriptionLabel: 'Description',
    purposeLabel: 'Purpose of this step',
    faqLabel: 'Frequently Asked Questions',
    priceLabel: 'Price',
    promoPriceLabel: 'Price with promo code',
  },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getLegalPageContent(page: keyof typeof legalPagesContent, lang: SupportedLanguage): LegalPageContent {
  return legalPagesContent[page][lang];
}

export function getContactsContent(lang: SupportedLanguage): ContactsPageContent {
  return contactsPageContent[lang];
}

export function getReviewsContent(lang: SupportedLanguage): ReviewsPageContent {
  return reviewsPageContent[lang];
}

export function getFaqContent(lang: SupportedLanguage): FaqPageContent {
  return faqPageContent[lang];
}

export function getHowItWorksContent(lang: SupportedLanguage): HowItWorksPageContent {
  return howItWorksPageContent[lang];
}
