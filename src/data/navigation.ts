/**
 * Navigation data for header, footer, and pre-footer
 * Extracted from BaseLayout for better maintainability
 */

import type { SupportedLanguage } from '@/types/i18n';

// =============================================================================
// TYPES
// =============================================================================

export interface NavLink {
  text: string;
  href: string;
}

export interface NavGroup {
  links: NavLink[];
}

export interface LogoData {
  text: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface HeaderData {
  logo: LogoData;
  nav: NavLink[];
  mobileNav1: NavLink[];
  mobileNav2: NavLink[];
  action: NavLink;
  lang: boolean;
}

export interface FooterData {
  logo: LogoData;
  socials: string[];
  copyright: string;
  navGroups: NavGroup[];
}

export interface PreFooterData {
  title: string;
  subtitle: string;
  cta: {
    text: string;
    href: string;
  };
  ctaSubtext1: string;
  ctaSubtext2: string;
  backgroundImage: string;
}

// =============================================================================
// SOCIAL LINKS (Shared across languages)
// =============================================================================

export const socialLinks = [
  'https://tiktok.com/@apb',
  'https://youtube.com/@apb',
  'https://vk.com/apb',
  'https://ok.ru/apb',
  'https://facebook.com/apb',
  'https://x.com/apb',
  'https://instagram.com/apb',
];

// =============================================================================
// IMAGES (Shared across languages)
// =============================================================================

export const images = {
  logo: '/assets/images/logo.svg',
  preFooterBackground: '/assets/images/bg-2.webp',
};

// =============================================================================
// NAVIGATION BUILDER
// =============================================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TranslationFunction = (key: any) => string;

/**
 * Build header navigation data
 */
export function getHeaderData(lang: SupportedLanguage, t: TranslationFunction): HeaderData {
  return {
    logo: {
      text: `<div><span class="font-heading font-bold text-heading">${t('logo.heading')}</span><br/><span class="text-xs text-muted-foreground">${t('logo.text')}</span></div>`,
      image: { src: images.logo, alt: 'Logo' },
    },
    nav: [
      { text: t('header.nav.home'), href: `/${lang}/` },
      { text: t('header.nav.howItWorks'), href: `/${lang}/how-it-works` },
      { text: t('header.nav.about'), href: `/${lang}/about` },
      { text: t('header.nav.advantages'), href: `/${lang}/advantages` },
      { text: t('header.nav.blog'), href: `/${lang}/blog` },
      { text: t('header.nav.reviews'), href: `/${lang}/reviews` },
      { text: t('header.nav.faq'), href: `/${lang}/faq` },
      { text: t('header.nav.contacts'), href: `/${lang}/contacts` },
    ],
    mobileNav1: [
      { text: t('header.nav.home'), href: `/${lang}/` },
      { text: t('header.nav.howItWorks'), href: `/${lang}/how-it-works` },
      { text: t('header.nav.about'), href: `/${lang}/about` },
      { text: t('header.nav.advantages'), href: `/${lang}/advantages` },
      { text: t('header.nav.blog'), href: `/${lang}/blog` },
      { text: t('header.nav.reviews'), href: `/${lang}/reviews` },
      { text: t('header.nav.faq'), href: `/${lang}/faq` },
      { text: t('header.nav.contacts'), href: `/${lang}/contacts` },
    ],
    mobileNav2: [
      // { text: t('header.nav.blog'), href: `/${lang}/blog` },
      // { text: t('header.nav.reviews'), href: `/${lang}/reviews` },
      // { text: t('header.nav.faq'), href: `/${lang}/faq` },
      // { text: t('header.nav.contacts'), href: `/${lang}/contacts` },
    ],
    action: { text: t('header.actions.login'), href: '/login' },
    lang: true,
  };
}

/**
 * Build footer navigation data
 */
export function getFooterData(lang: SupportedLanguage, t: TranslationFunction): FooterData {
  return {
    logo: {
      text: `<div><span class="font-heading font-bold text-heading">${t('logo.heading')}</span><br/><span class="text-xs text-muted-foreground">${t('logo.text')}</span></div>`,
      image: { src: images.logo, alt: 'Logo' },
    },
    socials: socialLinks,
    copyright: t('footer.copyright'),
    navGroups: [
      {
        links: [
          { text: t('footer.nav.home'), href: `/${lang}/` },
          { text: t('footer.nav.about'), href: `/${lang}/about` },
          { text: t('footer.nav.advantages'), href: `/${lang}/advantages` },
          { text: t('footer.nav.blog'), href: `/${lang}/blog` },
          { text: t('footer.nav.reviews'), href: `/${lang}/reviews` },
          { text: t('footer.nav.faq'), href: `/${lang}/faq` },
          { text: t('footer.nav.contacts'), href: `/${lang}/contacts` },
        ],
      },
      {
        links: [
          { text: t('footer.legal.offer'), href: `/${lang}/offer` },
          { text: t('footer.legal.terms'), href: `/${lang}/terms` },
          { text: t('footer.legal.privacy'), href: `/${lang}/privacy` },
          { text: t('footer.legal.content'), href: `/${lang}/content-policy` },
          { text: t('footer.legal.disclaimer'), href: `/${lang}/disclaimer` },
          { text: t('footer.legal.affiliate'), href: `/${lang}/affiliate` },
        ],
      },
    ],
  };
}

/**
 * Build pre-footer data
 */
export function getPreFooterData(t: TranslationFunction): PreFooterData {
  return {
    title: t('prefooter.title'),
    subtitle: t('prefooter.subtitle'),
    cta: {
      text: t('prefooter.cta'),
      href: '/login',
    },
    ctaSubtext1: t('prefooter.ctaSubtext1'),
    ctaSubtext2: t('prefooter.ctaSubtext2'),
    backgroundImage: images.preFooterBackground,
  };
}
