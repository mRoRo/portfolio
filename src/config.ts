export const siteConfig = {
  defaultLang: 'en',
  secondaryLang: 'es',
  siteUrl: 'https://mariarodriguez.dev',
} as const;

export type Lang = typeof siteConfig.defaultLang | typeof siteConfig.secondaryLang;
