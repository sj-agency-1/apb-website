/**
 * Centralized i18n type definitions
 * Single source of truth for language-related types
 */

/** Supported languages in the application */
export const SUPPORTED_LANGUAGES = ['ru', 'en'] as const;

/** Type for supported languages */
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

/** Default language for the application */
export const DEFAULT_LANGUAGE: SupportedLanguage = 'ru';

/** Type guard to check if a string is a supported language */
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

/** Localized content structure for any translatable content */
export type LocalizedContent<T> = Record<SupportedLanguage, T>;

/** Helper to create localized content with type safety */
export function createLocalizedContent<T>(content: LocalizedContent<T>): LocalizedContent<T> {
  return content;
}
