import { siteConfig, type Lang } from '../config';

export const defaultLang = siteConfig.defaultLang;

export const ui = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.section.navigate': 'NAVIGATE',
    'nav.section.connect': 'CONNECT',

    // Hero
    'hero.cta.contact': 'Contact me',
    'hero.cta.projects': 'View projects',
    'hero.status': 'System Status',
    'hero.stat.experience': 'years exp.',
    'hero.stat.projects': 'projects shipped',
    'hero.stat.repos': 'public repos',
    'hero.stat.location': 'location',

    // About
    'about.label': '~/about_me',
    'about.stats.experience': 'Years of experience',
    'about.stats.repos': 'Public repositories',
    'about.certifications': 'Certifications',
    'about.education': 'Education',
    'about.languages': 'Languages',

    // Experience
    'experience.label': '~/experience.log',
    'experience.current': 'Current',
    'experience.stack': 'Stack',

    // Projects
    'projects.label': '~/projects --all',
    'projects.highlight': 'Featured',
    'projects.reference': 'Reference',

    // Skills
    'skills.label': '$ ls ~/skills/',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks',
    'skills.libraries': 'Libraries',
    'skills.tools': 'Tools',
    'skills.ai': 'AI Tools',
    'skills.architecture': 'Architecture',
    'skills.other': 'Other',

    // Contact
    'testimonials.label': '~/recommendations.md',
    'testimonials.via': 'via LinkedIn',
    'contact.label': '~/contact.sh',
    'contact.available': 'Available for new opportunities',
    'contact.email': 'Send an email',
    'contact.linkedin': 'Connect on LinkedIn',
    'contact.github': 'View GitHub',
    'contact.twitter': 'Follow on X',

    // UI Controls
    'toggle.theme.dark': 'Dark mode',
    'toggle.theme.light': 'Light mode',
    'toggle.lang': 'ES',

    // Footer
    'footer.made': 'Made with',
    'footer.by': 'Web Reactiva',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'nav.section.navigate': 'NAVEGAR',
    'nav.section.connect': 'CONECTAR',

    // Hero
    'hero.cta.contact': 'Contactar',
    'hero.cta.projects': 'Ver proyectos',
    'hero.status': 'Estado del Sistema',
    'hero.stat.experience': 'años exp.',
    'hero.stat.projects': 'proyectos entregados',
    'hero.stat.repos': 'repos públicos',
    'hero.stat.location': 'ubicación',

    // About
    'about.label': '~/sobre_mi',
    'about.stats.experience': 'Años de experiencia',
    'about.stats.repos': 'Repositorios públicos',
    'about.certifications': 'Certificaciones',
    'about.education': 'Educación',
    'about.languages': 'Idiomas',

    // Experience
    'experience.label': '~/experiencia.log',
    'experience.current': 'Actual',
    'experience.stack': 'Stack',

    // Projects
    'projects.label': '~/proyectos --all',
    'projects.highlight': 'Destacado',
    'projects.reference': 'Referencia',

    // Skills
    'skills.label': '$ ls ~/habilidades/',
    'skills.languages': 'Lenguajes',
    'skills.frameworks': 'Frameworks',
    'skills.libraries': 'Librerías',
    'skills.tools': 'Herramientas',
    'skills.ai': 'Herramientas IA',
    'skills.architecture': 'Arquitectura',
    'skills.other': 'Otros',

    // Contact
    'testimonials.label': '~/recomendaciones.md',
    'testimonials.via': 'vía LinkedIn',
    'contact.label': '~/contacto.sh',
    'contact.available': 'Disponible para nuevas oportunidades',
    'contact.email': 'Enviar email',
    'contact.linkedin': 'Conectar en LinkedIn',
    'contact.github': 'Ver GitHub',
    'contact.twitter': 'Seguir en X',

    // UI Controls
    'toggle.theme.dark': 'Modo oscuro',
    'toggle.theme.light': 'Modo claro',
    'toggle.lang': 'EN',

    // Footer
    'footer.made': 'Hecho con',
    'footer.by': 'Web Reactiva',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}
