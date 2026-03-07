/**
 * Site Configuration — SINGLE SOURCE OF TRUTH
 * Change default language here only.
 * After changing, also rename src/pages folder accordingly.
 */
export const siteConfig = {
  defaultLang: 'en',
  secondaryLang: 'es',
} as const;

export type Lang = typeof siteConfig.defaultLang | typeof siteConfig.secondaryLang;
