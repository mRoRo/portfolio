export const siteConfig = {
  defaultLang: 'en',
  secondaryLang: 'es',
  siteUrl: 'https://mariarodriguezrojo.dev',
} as const;

export type Lang = typeof siteConfig.defaultLang | typeof siteConfig.secondaryLang;
