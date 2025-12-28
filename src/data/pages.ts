/**
 * Page content data
 * This file contains page-specific content organized by language.
 * Non-technical users can edit this file to update page content.
 */

import type { SupportedLanguage, LocalizedContent } from '@/types/i18n';

// =============================================================================
// TYPES
// =============================================================================

export interface PageHero {
  tagline?: string;
  title: string;
}

// Using index signature to allow for data-* attributes expected by Astro's Head component
export interface PageMeta {
  title: string;
  description: string;
  [key: `data-${string}`]: unknown;
}

export interface PageContent {
  meta: PageMeta;
  hero: PageHero;
}

/** All available page names */
export type PageName =
  | 'faq'
  | 'reviews'
  | 'about'
  | 'howItWorks'
  | 'contacts'
  | 'advantages'
  | 'blog'
  | 'offer'
  | 'terms'
  | 'privacy'
  | 'contentPolicy'
  | 'disclaimer'
  | 'affiliate';

// =============================================================================
// PAGE CONTENT DATA
// =============================================================================

const pages: Record<PageName, LocalizedContent<PageContent>> = {
  faq: {
    ru: {
      meta: {
        title: 'FAQ - Архитектор Личных Брендов',
        description: 'Часто задаваемые вопросы об AI-сервисе Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'FAQ',
      },
    },
    en: {
      meta: {
        title: 'FAQ - Architect of Personal Brands',
        description: 'Frequently asked questions about the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'FAQ',
      },
    },
  },

  reviews: {
    ru: {
      meta: {
        title: 'Отзывы - Архитектор Личных Брендов',
        description:
          'Читайте отзывы пользователей, которые создали свой Личный Бренд-Бизнес с помощью нашего AI-сервиса',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Отзывы',
      },
    },
    en: {
      meta: {
        title: 'Reviews - Architect of Personal Brands',
        description: 'Read reviews from users who have created their Personal Brand business with our AI-service',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Reviews',
      },
    },
  },

  about: {
    ru: {
      meta: {
        title: 'О проекте - Архитектор Личных Брендов',
        description: 'Узнайте об AI-сервисе, который поможет создать ваш Личный Бренд-Бизнес',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'О проекте',
      },
    },
    en: {
      meta: {
        title: 'About - Architect of Personal Brands',
        description: 'Learn about the AI-service that helps you create your Personal Brand business',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'About the Project',
      },
    },
  },

  howItWorks: {
    ru: {
      meta: {
        title: 'Как это работает - Архитектор Личных Брендов',
        description: '10 шагов к созданию вашего Личного Бренда-Бизнеса',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Как это работает',
      },
    },
    en: {
      meta: {
        title: 'How It Works - Architect of Personal Brands',
        description: '10 steps to creating your Personal Brand business',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'How It Works',
      },
    },
  },

  contacts: {
    ru: {
      meta: {
        title: 'Контакты - Архитектор Личных Брендов',
        description: 'Свяжитесь с нами для получения помощи или консультации',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Контакты',
      },
    },
    en: {
      meta: {
        title: 'Contacts - Architect of Personal Brands',
        description: 'Contact us for help or consultation',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Contacts',
      },
    },
  },

  advantages: {
    ru: {
      meta: {
        title: 'Достоинства - Архитектор Личных Брендов',
        description: 'Все достоинства AI-сервиса Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Достоинства',
      },
    },
    en: {
      meta: {
        title: 'Advantages - Architect of Personal Brands',
        description: 'All advantages of the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Advantages',
      },
    },
  },

  blog: {
    ru: {
      meta: {
        title: 'Познавательно - Архитектор Личных Брендов',
        description: 'Полезные статьи и новости',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Познавательно',
      },
    },
    en: {
      meta: {
        title: 'Blog - Architect of Personal Brands',
        description: 'Useful articles and news',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Blog',
      },
    },
  },

  offer: {
    ru: {
      meta: {
        title: 'Договор оферты - Архитектор Личных Брендов',
        description: 'Договор оферты AI-сервиса Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Договор оферты',
      },
    },
    en: {
      meta: {
        title: 'Offer Agreement - Architect of Personal Brands',
        description: 'Offer Agreement of the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Offer Agreement',
      },
    },
  },

  terms: {
    ru: {
      meta: {
        title: 'Пользовательское соглашение - Архитектор Личных Брендов',
        description: 'Пользовательское соглашение AI-сервиса Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Пользовательское соглашение',
      },
    },
    en: {
      meta: {
        title: 'Terms of Service - Architect of Personal Brands',
        description: 'Terms of Service of the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Terms of Service',
      },
    },
  },

  privacy: {
    ru: {
      meta: {
        title: 'Политика конфиденциальности - Архитектор Личных Брендов',
        description: 'Политика конфиденциальности AI-сервиса Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Политика конфиденциальности',
      },
    },
    en: {
      meta: {
        title: 'Privacy Policy - Architect of Personal Brands',
        description: 'Privacy Policy of the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Privacy Policy',
      },
    },
  },

  contentPolicy: {
    ru: {
      meta: {
        title: 'Политика использования контента - Архитектор Личных Брендов',
        description: 'Политика использования контента AI-сервиса Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Политика использования контента',
      },
    },
    en: {
      meta: {
        title: 'Content Usage Policy - Architect of Personal Brands',
        description: 'Content Usage Policy of the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Content Usage Policy',
      },
    },
  },

  disclaimer: {
    ru: {
      meta: {
        title: 'Отказ от гарантий и заявлений - Архитектор Личных Брендов',
        description: 'Отказ от гарантий и заявлений AI-сервиса Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Отказ от гарантий и заявлений',
      },
    },
    en: {
      meta: {
        title: 'Disclaimer - Architect of Personal Brands',
        description: 'Disclaimer of the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Disclaimer',
      },
    },
  },

  affiliate: {
    ru: {
      meta: {
        title: 'Условия Партнерской программы - Архитектор Личных Брендов',
        description: 'Условия Партнерской программы AI-сервиса Архитектор Личных Брендов',
      },
      hero: {
        tagline: 'AI-сервис Архитектор Личных Брендов',
        title: 'Условия Партнерской программы',
      },
    },
    en: {
      meta: {
        title: 'Affiliate Program Terms - Architect of Personal Brands',
        description: 'Affiliate Program Terms of the AI-service Architect of Personal Brands',
      },
      hero: {
        tagline: 'AI-service Architect of Personal Brands',
        title: 'Affiliate Program Terms',
      },
    },
  },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get page content by page name and language
 */
export function getPageContent(page: PageName, lang: SupportedLanguage): PageContent {
  return pages[page][lang];
}

/**
 * Get all page names
 */
export function getPageNames(): PageName[] {
  return Object.keys(pages) as PageName[];
}
