import { DEFAULT_LANGUAGE } from '@consts';
import { ui } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (!lang) return DEFAULT_LANGUAGE;

  if (lang in ui) return lang as keyof typeof ui;
  return DEFAULT_LANGUAGE;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof DEFAULT_LANGUAGE]) {
    return ui[lang][key] || ui[DEFAULT_LANGUAGE][key];
  };
}
