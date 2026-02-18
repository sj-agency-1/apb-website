/**
 * UI Translations
 *
 * This file contains only short UI strings used across the application:
 * - Navigation labels
 * - Button text
 * - Form labels
 * - Common UI elements
 *
 * Content-related text (paragraphs, descriptions, etc.) should be stored
 * in the respective data files (e.g., src/data/home.ts, src/data/faq.ts).
 */

export const languages = {
  ru: 'Русский',
  en: 'English',
};

export const defaultLanguage = 'ru';

export const ui = {
  ru: {
    // Logo
    'logo.heading': 'АРХИТЕКТОР',
    'logo.text': 'Личных Брендов',

    // Header Nav
    'header.nav.home': 'Главная',
    'header.nav.howItWorks': 'Как это работает',
    'header.nav.about': 'О проекте',
    'header.nav.advantages': 'Достоинства',
    'header.nav.blog': 'Познавательно',
    'header.nav.reviews': 'Отзывы',
    'header.nav.faq': 'FAQ',
    'header.nav.contacts': 'Контакты',
    'header.actions.login': 'Войти',

    // Footer Nav
    'footer.copyright': '© Автор Сергей Вячеславович П., Бизнес-Следопыт',
    'footer.nav.home': 'Главная',
    'footer.nav.about': 'О проекте',
    'footer.nav.advantages': 'Достоинства',
    'footer.nav.blog': 'Познавательно',
    'footer.nav.reviews': 'Отзывы',
    'footer.nav.faq': 'FAQ',
    'footer.nav.contacts': 'Контакты',
    'footer.legal.offer': 'Договор оферты',
    'footer.legal.terms': 'Пользовательское соглашение',
    'footer.legal.privacy': 'Политика конфиденциальности',
    'footer.legal.content': 'Политика использования контента',
    'footer.legal.disclaimer': 'Отказ от гарантий и заявлений',
    'footer.legal.affiliate': 'Условия Партнерской программы',

    // PreFooter
    'prefooter.title': 'Создайте самый надёжный бизнес в вашей жизни!',
    'prefooter.subtitle':
      'Начните прямо сейчас и получите готовую бизнес-модель, которая обеспечит Вам финансовую свободу',
    'prefooter.cta': 'Начать',
    'prefooter.ctaSubtext1': 'Начать АУДИТ и Создать Бизнес',
    'prefooter.ctaSubtext2': '«Личный Бренд»',
    'prefooter.rightHeading': 'Начать АУДИТ и Создать Бизнес',
    'prefooter.rightDisclaimer':
      'Отказ от ответственности за результаты: Любые заявления о потенциальном доходе или успехе бизнеса в статьях на данном сайте являются лишь примерами возможностей и не гарантируют фактический результат. Ваш успех зависит от ваших усилий, рыночной конъюнктуры и навыков. Настоящий сайт не является финансовым или инвестиционным советником. Используя материалы, вы соглашаетесь с условиями {{offerLink}} и {{disclaimerLink}}.',
    'prefooter.rightDisclaimer.offerLabel': 'Договора Публичной Оферты',
    'prefooter.rightDisclaimer.disclaimerLabel': 'Отказа от гарантий',

    // Breadcrumbs
    'breadcrumbs.home': 'Главная',

    // Blog
    'blog.readMore': 'Подробнее',
    'blog.allTags': 'Все',
    'blog.pagination.prev': 'Назад',
    'blog.pagination.next': 'Вперёд',
    'blog.hero.title': 'Познавательно',
    'blog.hero.subtitle': 'Статьи о личном бренде',
    'blog.hero.pretitle': 'Блог',

    // Advantages
    'advantages.hero.title': 'Достоинства',
    'advantages.hero.pretitle': 'Преимущества',
    'advantages.allTags': 'Все',
    'advantages.readMore': 'Подробнее',

    // Sidebar
    'sidebar.blogTitle': 'Читайте также',

    // Share Buttons
    'share.label': 'Поделиться',
    'share.copyLink': 'Копировать ссылку',
    'share.copied': 'Скопировано!',

    // Common UI
    'common.readMore': 'Подробнее',
    'common.learnMore': 'Узнать больше',
    'common.back': 'Назад',
    'common.next': 'Далее',
    'common.close': 'Закрыть',
    'common.submit': 'Отправить',
    'common.loading': 'Загрузка...',
  },
  en: {
    // Logo
    'logo.heading': 'ARCHITECT',
    'logo.text': 'of Personal Brands',

    // Header Nav
    'header.nav.home': 'Home',
    'header.nav.howItWorks': 'How It Works',
    'header.nav.about': 'About',
    'header.nav.advantages': 'Advantages',
    'header.nav.blog': 'Blog',
    'header.nav.reviews': 'Reviews',
    'header.nav.faq': 'FAQ',
    'header.nav.contacts': 'Contacts',
    'header.actions.login': 'Login',

    // Footer Nav
    'footer.copyright': '© Author Sergey Vyacheslavovich P., Business Scout',
    'footer.nav.home': 'Home',
    'footer.nav.about': 'About',
    'footer.nav.advantages': 'Advantages',
    'footer.nav.blog': 'Blog',
    'footer.nav.reviews': 'Reviews',
    'footer.nav.faq': 'FAQ',
    'footer.nav.contacts': 'Contacts',
    'footer.legal.offer': 'Offer Agreement',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.content': 'Content Usage Policy',
    'footer.legal.disclaimer': 'Disclaimer',
    'footer.legal.affiliate': 'Affiliate Program Terms',

    // PreFooter
    'prefooter.title': 'Create the most reliable business in your life!',
    'prefooter.subtitle':
      'Start right now and get a ready-made business model that will provide you with financial freedom',
    'prefooter.cta': 'Start',
    'prefooter.ctaSubtext1': 'Start AUDIT and Create Business',
    'prefooter.ctaSubtext2': '"Personal Brand"',
    'prefooter.rightHeading': 'Start AUDIT and Create Business',
    'prefooter.rightDisclaimer':
      'Results Disclaimer: Any statements about potential income or business success in articles on this website are merely examples of possibilities and do not guarantee actual results. Your success depends on your efforts, market conditions, and skills. This website is not a financial or investment advisor. By using these materials, you agree to the terms of the {{offerLink}} and {{disclaimerLink}}.',
    'prefooter.rightDisclaimer.offerLabel': 'Public Offer Agreement',
    'prefooter.rightDisclaimer.disclaimerLabel': 'Disclaimer of Warranties',

    // Breadcrumbs
    'breadcrumbs.home': 'Home',

    // Blog
    'blog.readMore': 'Read more',
    'blog.allTags': 'All',
    'blog.pagination.prev': 'Previous',
    'blog.pagination.next': 'Next',
    'blog.hero.title': 'Blog',
    'blog.hero.subtitle': 'Articles about personal branding',
    'blog.hero.pretitle': 'Blog',

    // Advantages
    'advantages.hero.title': 'Advantages',
    'advantages.hero.pretitle': 'Benefits',
    'advantages.allTags': 'All',
    'advantages.readMore': 'Read more',

    // Sidebar
    'sidebar.blogTitle': 'Related Articles',

    // Share Buttons
    'share.label': 'Share',
    'share.copyLink': 'Copy link',
    'share.copied': 'Copied!',

    // Common UI
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.close': 'Close',
    'common.submit': 'Submit',
    'common.loading': 'Loading...',
  },
} as const;
